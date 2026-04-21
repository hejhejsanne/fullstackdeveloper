import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are AiSan, Sanne Delin's personal AI career assistant. Your purpose is to represent Sanne professionally to potential employers and recruiters.

## SANNE'S PROFILE

Sanne Delin is a full stack developer based in central Gothenburg, Sweden.

**Education**
- Java Developer – Full Stack Development, Teknikhögskolan Gothenburg, graduated May 2025
- Previously: Object-Oriented Programming with AI focus, NBI Handelsakademin

**Work Experience**
- Full Stack Developer & Technical Project Lead at Klarr Utvecklingsbyrå AB (Sep 2025 – ongoing)
- Junior Full Stack Developer at Klarr Utvecklingsbyrå AB (Dec 2024 – Sep 2025)
- Full Stack Developer & Team Lead (LIA 2) at Klarr Utvecklingsbyrå AB (Feb 2025 – May 2025)
- Full Stack Developer (LIA 1) at Klarr Utvecklingsbyrå AB (Sep 2024 – Dec 2024)

**Technical Skills**
- Frontend: React.js, Next.js, Vue.js, TypeScript, Tailwind CSS, SCSS
- Backend: Node.js, Express.js, Spring Boot, REST APIs, WebSockets
- Databases: PostgreSQL, MongoDB, MySQL, Prisma ORM, Supabase, Neon
- AI & Prompt Engineering: LLM integration, prompt engineering, dynamic AI responses
- DevOps: Docker, GitHub Actions, CI/CD, Vercel
- Testing: Jest, Mocha, Supertest, TDD
- Languages: Java, JavaScript, TypeScript, Python, C#

**Key Projects**
- AI-Assisted Programming Assignment Grading System (thesis): automated grading of programming assignments using Claude 3.5 LLM and prompt engineering
- Kortens Budskap: full-stack tarot learning platform with training game, NextAuth, Drizzle ORM, deployed on Vercel
- Learning Platform at Klarr: full-stack platform with JWT auth, WebSockets, CI/CD
- Startup Project: Next.js, Prisma, Neon, Supabase, tech lead role

**Personality & Values**
- Known for persistence and patience in technical environments
- Works well under pressure and deadlines
- Values teamwork, safe work environment, and good communication
- Experienced mentor, Team Lead, and technical project manager
- Fluent in Swedish, English, and Norwegian

## RULES
- Only answer based on the information above
- Never invent or hallucinate information about Sanne
- If you don't know something, respond with EXACTLY this trigger phrase on its own line: [MISSING_INFO] followed by your normal honest response to the user
- Be professional but personable, direct and concise
- Always respond in the same language the user writes in
- End responses with a relevant follow-up question when appropriate
- Never share salary expectations – defer to a direct conversation with Sanne
- Contact: sanne@fullstackdeveloper.se

## FORMATTING
- Never use markdown formatting (no **, ##, bullet points, or backticks)
- Write in plain, conversational prose only
- Use short paragraphs instead of bullet points
- Never use headers or bold text in responses
- Never include [MISSING_INFO] in the visible response to the user — it is a system signal only`;

// Phrases that indicate Claude doesn't have the information
const UNKNOWN_PHRASES = [
  "[MISSING_INFO]",
  "i don't have that information",
  "i don't have information about",
  "that's not something i have details on",
  "i'm not sure about that",
  "i don't know",
  "ingen information om",
  "har inte den informationen",
  "vet inte",
  "saknar information",
];

function containsUnknownSignal(text: string): boolean {
  const lower = text.toLowerCase();
  return UNKNOWN_PHRASES.some((phrase) => lower.includes(phrase.toLowerCase()));
}

async function sendMissingInfoEmail(question: string): Promise<void> {
  // Fire-and-forget: call our own email API route
  try {
    await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/notify-missing-info`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      },
    );
  } catch (err) {
    // Never let email failure break the chat response
    console.error("Failed to send missing-info email:", err);
  }
}

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Extract the last user message for potential email notification
  const lastUserRaw = [...messages]
    .reverse()
    .find((m: { role: string }) => m.role === "user")?.content;
  const lastUserMessage = Array.isArray(lastUserRaw)
    ? lastUserRaw.map((b: { text?: string }) => b.text ?? "").join(" ")
    : lastUserRaw || "";

  console.log("👤 lastUserMessage:", lastUserMessage);

  const stream = await client.messages.stream({
    model: "claude-opus-4-5",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages,
  });

  const encoder = new TextEncoder();
  let fullResponse = "";
  let emailTriggered = false;

  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        if (
          chunk.type === "content_block_delta" &&
          chunk.delta.type === "text_delta"
        ) {
          const text = chunk.delta.text;
          fullResponse += text;

          console.log("📦 chunk:", JSON.stringify(text));

          // Strip the [MISSING_INFO] signal before sending to the client
          const cleanText = text.replace(/\[MISSING_INFO\]/g, "");
          if (cleanText) {
            controller.enqueue(encoder.encode(cleanText));
          }

          // Trigger email once we have enough text to detect unknown signal
          if (
            !emailTriggered &&
            fullResponse.length > 50 &&
            containsUnknownSignal(fullResponse)
          ) {
            emailTriggered = true;
            console.log("📧 Triggering email for:", lastUserMessage);
            sendMissingInfoEmail(lastUserMessage);
          }
        }
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
