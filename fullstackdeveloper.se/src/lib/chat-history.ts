export interface ChatMessage { role: 'user' | 'assistant'; content: string }
/** Keep the newest context inside the API's UTF-8 request budget. */
export function boundedHistory(history: ChatMessage[], maximumBytes = 16384): ChatMessage[] {
  const messages = history.slice(-19).map(message => ({role:message.role,content:message.role === 'assistant' ? message.content.slice(0,2000) : message.content}));
  const bytes = () => new TextEncoder().encode(JSON.stringify({messages})).byteLength;
  while (messages.length > 1 && bytes() > maximumBytes) messages.shift();
  if (bytes() > maximumBytes) throw new Error('Please shorten your message before sending it.');
  return messages;
}
