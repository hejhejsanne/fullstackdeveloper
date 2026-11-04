import { ApiError, enforceRateLimit } from './validation';
export { ApiError, readJson, validateMessages, escapeHtml } from './validation';
import { createHash } from 'node:crypto';
import { Redis } from '@upstash/redis';

export function failure(error: unknown) {
  const e = error instanceof ApiError ? error : new ApiError(502, 'SERVICE_ERROR', 'The service is unavailable. Please try again later.');
  return Response.json({ error: { code: e.code, message: e.message } }, { status: e.status, headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex', ...(e.status === 429 ? { 'Retry-After': '600' } : {}) } });
}
export function required(name: string) {
  const value = process.env[name];
  if (!value) throw new ApiError(503, 'NOT_CONFIGURED', 'This service is not available right now. Please contact Sanne directly.');
  return value;
}
export function redisClient() { required('UPSTASH_REDIS_REST_URL'); required('UPSTASH_REDIS_REST_TOKEN'); return Redis.fromEnv(); }
export function baseUrl() {
  const url = new URL(required('NEXT_PUBLIC_BASE_URL'));
  if ((url.protocol !== 'https:' && !(url.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(url.hostname))) || url.username || url.password) throw new ApiError(503, 'NOT_CONFIGURED', 'This service is not available right now.');
  return url.origin;
}
export async function rateLimit(req: Request, scope: string, maximum: number) {
  const redis = redisClient();
  // Only Vercel's documented edge header is trusted. Other hosts share a conservative bucket.
  const ip = process.env.VERCEL ? req.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown' : 'shared';
  const key = createHash('sha256').update(required('RATE_LIMIT_SALT') + ip).digest('hex');
  const script = "local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('EXPIRE',KEYS[1],ARGV[1]) end; return n";
  await enforceRateLimit(async () => {
    const count = Number(await redis.eval(script, [`limit:${scope}:${key}`], [600]));
    const global = Number(await redis.eval(script, [`limit:${scope}:global`], [600]));
    return [count,global];
  },maximum,scope === 'chat' ? 100 : 200);
  return redis;
}
