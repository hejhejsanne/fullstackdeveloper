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
- If asked something you don't have information about, you MUST place [MISSING_INFO] on the very first line of your response, before anything else — then on the next line write EXACTLY this and nothing else: "Tyvärr har jag ingen information kring det du undrar om, men jag har skickat ett email till Sanne om att uppdatera mitt informationsbibliotek kring detta. Kan jag hjälpa dig med att svara på något annat medans Sanne uppdaterar informationen?"
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

async function sendMissingInfoEmail(question: string): Promise<void> {
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
    console.error("Failed to send missing-info email:", err);
  }
}

export async function POST(req: Request) {
  const { messages } = await req.json();

  const lastUserRaw = [...messages]
    .reverse()
    .find((m: { role: string }) => m.role === "user")?.content;
  const lastUserMessage = Array.isArray(lastUserRaw)
    ? lastUserRaw.map((b: { text?: string }) => b.text ?? "").join(" ")
    : lastUserRaw || "";

  // Hämta hela svaret först för säker [MISSING_INFO]-detektering
  const response = await client.messages.create({
    model: "claude-opus-4-5",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages,
  });

  const fullResponse =
    response.content[0].type === "text" ? response.content[0].text : "";

  const isMissingInfo = fullResponse.trimStart().startsWith("[MISSING_INFO]");

  if (isMissingInfo) {
    console.log("📧 Triggering email for:", lastUserMessage);
    // Invänta inte emailet — låt det ske parallellt
    sendMissingInfoEmail(lastUserMessage);
  }

  // Rensa signalen och skicka rent svar som stream
  const cleanResponse = fullResponse
    .replace(/^\[MISSING_INFO\]\s*/m, "")
    .trim();

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    start(controller) {
      // Dela upp svaret i mindre bitar för att simulera streaming
      const chunkSize = 10;
      let i = 0;
      const interval = setInterval(() => {
        if (i >= cleanResponse.length) {
          clearInterval(interval);
          controller.close();
          return;
        }
        controller.enqueue(
          encoder.encode(cleanResponse.slice(i, i + chunkSize)),
        );
        i += chunkSize;
      }, 10);
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
