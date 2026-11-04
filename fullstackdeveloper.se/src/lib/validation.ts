export class ApiError extends Error {
  status: number; code: string;
  constructor(status: number, code: string, message: string) { super(message); this.status=status; this.code=code; }
}
export async function readJson(req: Request, limit = 16384): Promise<unknown> {
  if (!req.headers.get('content-type')?.includes('application/json')) throw new ApiError(400, 'INVALID_INPUT', 'Please send a JSON request.');
  const reader = req.body?.getReader();
  if (!reader) throw new ApiError(400, 'INVALID_INPUT', 'A request body is required.');
  const chunks: Uint8Array[] = []; let length = 0;
  while (true) { const {done, value} = await reader.read(); if (done) break; length += value.byteLength; if (length > limit) { await reader.cancel(); throw new ApiError(413, 'TOO_LARGE', 'Please shorten your conversation.'); } chunks.push(value); }
  const bytes = new Uint8Array(length); let offset = 0; for (const c of chunks) { bytes.set(c, offset); offset += c.length; }
  try { return JSON.parse(new TextDecoder().decode(bytes)); } catch { throw new ApiError(400, 'INVALID_INPUT', 'The request could not be read.'); }
}
export function validateMessages(value: unknown): {role:'user'|'assistant';content:string}[] {
  const messages = (value as {messages?:unknown})?.messages;
  if (!Array.isArray(messages) || !messages.length || messages.length > 20 || messages.at(-1)?.role !== 'user') throw new ApiError(400, 'INVALID_INPUT', 'Please start a new conversation or shorten your message.');
  return messages.map(m => { if (!m || !['user','assistant'].includes(m.role) || typeof m.content !== 'string' || !m.content.trim() || m.content.length > 2000) throw new ApiError(400, 'INVALID_INPUT', 'Messages must contain between 1 and 2,000 characters of text.'); return {role:m.role, content:m.content.trim()}; });
}
export function escapeHtml(text: string) { return text.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!)); }

export async function enforceRateLimit(counts: () => Promise<[number,number]>, maximum: number, globalMaximum: number) {
  try {
    const [count,global] = await counts();
    if (!Number.isFinite(count) || !Number.isFinite(global) || count < 1 || global < 1) throw new Error('Invalid limiter result');
    if (count > maximum || global > globalMaximum) throw new ApiError(429, 'RATE_LIMIT', 'Too many requests. Please try again in ten minutes.');
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError(503,'UNAVAILABLE','This service is temporarily unavailable.');
  }
}
