import { createHash } from 'node:crypto';
import { escapeHtml, required, redisClient } from './api';

export async function notify(kind: 'question', text: string): Promise<boolean> {
  try {
    const redis = redisClient();
    const digest = createHash('sha256').update(text).digest('hex');
    const reserved = await redis.set(`notification:${kind}:${digest}`, 'pending', { nx: true, ex: 600 });
    if (!reserved) return false;
    const apiKey = required('RESEND_API_KEY');
    const timestamp = new Date().toISOString();
    const response = await fetch('https://api.resend.com/emails', {method:'POST',headers:{Authorization:`Bearer ${apiKey}`,'Content-Type':'application/json'},body:JSON.stringify({from:required('NOTIFY_FROM'),to:[required('NOTIFY_EMAIL')],subject:'AiSan knowledge gap',html:`<p>Question: ${escapeHtml(text)}</p><p>Time: ${timestamp}</p>`}),signal:AbortSignal.timeout(5000)});
    if (!response.ok) return false;
    const result = await response.json();
    if (typeof result.id !== 'string') return false;
    return true;
  } catch { return false; }
}
