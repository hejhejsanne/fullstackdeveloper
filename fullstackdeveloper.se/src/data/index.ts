import { Project, Skill } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-chatbot",
    title: "AiSan - Personal AI Career Assistant",
    impact:
      "Most portfolios just sit there. AiSan talks back. It's a chatbot built directly into this portfolio - powered by Claude Opus - that answers questions about me, my work, my process. Responses stream in real time. And when something comes up that AiSan genuinely doesn't know? It says so honestly, and simultaneously fires off an email via Nodemailer so I can update the knowledge base. Self-improving, essentially.",
    tags: [
      { label: "AI / Prompt Engineering", variant: "blue" },
      { label: "Solo Project", variant: "green" },
      { label: "2025", variant: "gray" },
    ],
    reflectionLabel: "The part that actually took work",
    reflectionText:
      "The technical build was straightforward enough. Prompt engineering was not. Keeping AiSan on-topic, resistant to prompt injection, and naturally multilingual across Swedish, English and Norwegian required a lot of iteration - more than I initially expected. One thing that became obvious pretty fast: without tight boundaries, Claude oversells. Responses started sounding generic, slightly exaggerated, like a LinkedIn bio written by someone who'd never met me. Getting the tone right - accurate and direct, but not flat - ended up being more work than anything on the technical side.",
    reflectionLabel2: "Why it matters",
    reflectionText2:
      "A static portfolio tells employers what you've done. AiSan lets them actually ask about it. And every unanswered question makes the next version better.",
    tech: [
      "Next.js",
      "TypeScript",
      "Claude API",
      "Nodemailer",
      "Streaming API",
    ],
    liveUrl: "#chatbot",
    liveLabel: "Open AiSan",
  },
  {
    id: "proj-tarot",
    title: "Kortens Budskap - Tarot Memory App",
    impact:
      "A personal project that started with a simple problem: I wanted to actually learn all 78 Rider-Waite tarot cards, and nothing out there quite worked the way I wanted. So I built it. Users study cards in lesson mode, then test themselves in a multiple choice game. Every answer gets saved. After each session, Claude will analyse the full history - which cards you're nailing, which ones keep tripping you up - and generate study tips that actually reflect your patterns, not just generic advice.",
    tags: [
      { label: "Full Stack", variant: "blue" },
      { label: "Solo Project", variant: "green" },
      { label: "2025-ongoing", variant: "gray" },
    ],
    reflectionLabel: "The part that actually took work",
    reflectionText:
      "Two things fought back harder than expected. First: the CSS architecture. Tailwind v4 with @apply in separate component files, strict import order in globals.css, zero inline styles anywhere in JSX. What sounds like a stylistic preference turns into a real system when you're maintaining it alone - and it paid off. Second: Auth.js v5. It's newer than most of the documentation covers. Figuring out the credentials provider and protected routes with the renamed proxy.ts involved a lot of digging through source code and GitHub issues rather than clean tutorials.",
    reflectionLabel2: "What's still in progress",
    reflectionText2:
      "Game mode saving, results page, Claude integration, statistics view. The foundation is genuinely solid - auth, database schema, lesson mode, multiple choice, and the auto-scrolling card carousel on the landing page are all done. The interesting part is coming.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Drizzle ORM",
      "PostgreSQL",
      "Neon",
      "Auth.js",
      "Claude API",
      "Vercel",
    ],
    liveUrl: "https://kortensbudskap.se",
    liveLabel: "kortensbudskap.se",
  },
  {
    id: "proj-grading",
    title: "AI-Assisted Programming Assignment Grading System",
    impact:
      "Teachers spend a disproportionate amount of time writing feedback on student code. This project asked: what if Claude could do it in their voice? A Node.js/Express backend integrated with the Claude API - teachers upload student Java submissions and receive structured, pedagogically grounded feedback, output as JSON for further processing. The prompts were built around examples of the teacher's own previous feedback, so the tone and priorities actually sounded like them. Frontend was deliberately deprioritised. Going deeper on the AI integration was the right call.",
    tags: [
      { label: "AI / Prompt Engineering", variant: "blue" },
      { label: "Thesis", variant: "green" },
      { label: "2025", variant: "gray" },
    ],
    reflectionLabel: "The part that actually took work",
    reflectionText:
      "Four prompt architectures were tested systematically - from naive one-liners all the way to role-based chain-of-thought prompts - against the same Java samples at three quality levels: strong, average, weak. Stage 1 produced identical feedback regardless of code quality. Completely flat. By Stage 4, the model correctly differentiated between all three, flagged specific issues with severity ratings, and preserved the teacher's voice throughout. The most striking discovery: a single sentence adding beginner-level context shifted a FAIL (35/100) to a PASS (85/100). Same code. One sentence of context. That's how sensitive these models are to framing - and it reframed the whole project. Prompt engineering isn't a technical problem. It's a design problem.",
    reflectionLabel2: "The takeaway",
    reflectionText2:
      "Clear role definition and structured instructions dramatically improve both relevance and precision. You don't need fine-tuning to get feedback that balances technical analysis with genuine pedagogical value. You need a well-designed prompt.",
    tech: [
      "JavaScript",
      "Node.js",
      "Express",
      "Claude API",
      "Prompt Engineering",
      "Github",
      "Git",
    ],
  },
  {
    id: "proj-startup",
    title: "Pengasplitten - Personal Finance App",
    impact:
      "Built for a real startup - CleverClick - to solve a genuinely common problem: most people have no clear picture of where their money actually goes. Pengasplitten lets users import CSV exports from their bank, automatically categorises transactions by rules, and breaks spending down by category and time period. The backend handles auth with JWT and bcrypt, CSV parsing with column mapping, and a full categorisation service - all on Node.js/Express 5 with Prisma 7 and PostgreSQL on Neon. Frontend is Next.js 16 with SCSS. API requests are version-controlled in Git using Bruno, which replaced Postman entirely and honestly I'm not going back.",
    tags: [
      { label: "Full Stack", variant: "blue" },
      { label: "Tech Lead", variant: "green" },
      { label: "2025-ongoing", variant: "gray" },
    ],
    reflectionLabel: "The role",
    reflectionText:
      "Tech lead in a team of five developers, plus a product owner and CEO. Set up everything from scratch - repo structure, branching strategy, coding standards, backend architecture. Defined sprints, scoped each one, and built the daily workflow the team ran on. Also built a Canva documentation hub: cheat sheets, guides, process docs - the kind of thing that means developers can find answers themselves before interrupting someone. Kept momentum high. Kept interruptions low. Also handled code reviews and the constant, very real tension between what product wanted and what was actually buildable in the time available.",
    reflectionLabel2: "The hard part",
    reflectionText2:
      "Technical debt is manageable. Unclear ownership is not. Getting the structure right early - who owns what, how PRs flow, when to actually sync - made everything downstream significantly smoother. That lesson was worth more than any line of code written on the project.",
    tech: [
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express 5",
      "Prisma 7",
      "PostgreSQL",
      "Neon",
      "JWT",
      "Mocha",
      "Supertest",
      "Jest",
      "Bruno",
      "Github",
      "Github Actions",
      "Git",
      "Canva",
    ],
  },
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: "React.js, Next.js, Vue.js, TypeScript, Tailwind CSS, SCSS",
  },
  {
    category: "Backend",
    items: "Node.js, Express.js, Spring Boot, REST APIs, WebSockets",
  },
  {
    category: "Databases",
    items: "PostgreSQL, MongoDB, MySQL, Prisma ORM, Supabase, Neon",
  },
  {
    category: "AI & Prompt Engineering",
    items:
      "AI integration in web apps, prompt engineering, dynamic AI responses",
  },
  {
    category: "DevOps & Testing",
    items: "Docker, GitHub Actions, CI/CD, Jest, Mocha, Supertest, TDD",
  },
  {
    category: "Languages & Tools",
    items: "Java, Python, C#, Git, Figma, Postman, VS Code, IntelliJ",
  },
  {
    category: "GitHub",
    link: {
      href: "https://github.com/hejhejsanne",
      label: "github.com/hejhejsanne ↗",
    },
  },
];
