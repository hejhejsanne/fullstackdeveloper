import { Project, Skill } from "@/types";

export const projects: Project[] = [
  {
    id: "proj-chatbot",
    title: "Portfolio Chatbot",
    impact:
      "An AI-powered chatbot built for my first job-seeking portfolio – answers questions about me, my projects and my experience in real time.",
    tags: [
      { label: "AI / Chatbot", variant: "blue" },
      { label: "Portfolio", variant: "green" },
      { label: "2024", variant: "gray" },
    ],
    reflectionLabel: "How it works",
    reflectionText:
      "The idea came while building my first portfolio during my job search – I wanted a chatbot that could answer questions specifically about me. Working on my thesis at the same time sparked a broader curiosity about AI integration, and this project became my first step into building with AI APIs.",
    tech: ["TypeScript", "React", "Node.js"],
    liveUrl: "#chatbot",
    liveLabel: "Open AiSan",
  },
  {
    id: "proj-tarot",
    title: "Kortens Budskap – Tarot Memory App",
    impact:
      "A solo fullstack project built to learn all 78 Rider-Waite tarot cards. Users can study cards in lesson mode, then test themselves in a multiple choice game mode where every answer is saved. After each game, Claude API will analyse the session history and generate personalised study tips based on which cards the user struggles with most. Built with Next.js App Router, Drizzle ORM and Auth.js v5 – deployed to kortensbudskap.se via Vercel.",
    tags: [
      { label: "Full Stack", variant: "blue" },
      { label: "Solo Project", variant: "green" },
      { label: "2025–ongoing", variant: "gray" },
    ],
    reflectionLabel: "The interesting part",
    reflectionText:
      "The CSS architecture became a project in itself: Tailwind v4 with @apply in separate component files, strict import order in globals.css, no inline styles anywhere in JSX. Auth.js v5 was also newer than most documentation covers – figuring out the credentials provider and protected routes with the renamed proxy.ts took some digging. The AI integration is planned as the core feature – Claude will receive the user's full game history and hardest cards and return feedback that actually feels personal.",
    reflectionLabel2: "What's left",
    reflectionText2:
      "Game mode saving, results page, Claude integration and a statistics view. The foundation is solid – auth, database schema, lesson mode, multiple choice and the auto-scrolling card carousel on the landing page are all done.",
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
      "A Node.js/Express backend integrated with Anthropic's Claude API that lets teachers upload student Java code and receive structured, pedagogically valuable feedback – output as JSON for further processing. The prompts were built around examples of the teacher's own previous feedback to preserve their tone and voice. Frontend was deliberately deprioritised to go deeper on the AI integration, which turned out to be the right call.",
    tags: [
      { label: "AI / Prompt Engineering", variant: "blue" },
      { label: "Thesis", variant: "green" },
      { label: "2025", variant: "gray" },
    ],
    reflectionLabel: "The interesting part",
    reflectionText:
      "Four prompt architectures were systematically tested – from naive one-liners to role-based chain-of-thought prompts – against the same Java code samples at three quality levels. Stage 1 produced identical feedback regardless of code quality. By Stage 4, the model correctly differentiated between them, flagged specific issues with severity ratings, and preserved the teacher's voice in the feedback. The biggest discovery was how context-sensitive LLMs are: a single sentence emphasising beginner-level context could shift a FAIL (35/100) to a PASS (85/100). Prompt engineering turned out to be a design problem, not a technical one.",
    reflectionLabel2: "Key takeaway",
    reflectionText2:
      "Clear role definition and structured instructions dramatically improve feedback relevance and precision. Well-designed prompts can balance technical code analysis with pedagogical aspects – without any fine-tuning.",
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
    title: "Pengasplitten – Personal Finance App",
    impact:
      "Full-stack web app built for a real startup (CleverClick) that helps people get a clear picture of their everyday finances. Users import CSV exports from their bank, transactions are automatically categorised by rules, and spending is broken down by category and time period. The backend handles auth with JWT and bcrypt, CSV parsing with column mapping, and a categorisation service – all built on Node.js/Express 5 with Prisma 7 and PostgreSQL hosted on Neon. Frontend is Next.js 16 with SCSS. API requests are version-controlled in Git using Bruno, replacing Postman entirely.",
    tags: [
      { label: "Full Stack", variant: "blue" },
      { label: "Tech Lead", variant: "green" },
      { label: "2025–ongoing", variant: "gray" },
    ],
    reflectionLabel: "The role",
    reflectionText:
      "Tech lead in a team of five developers plus a product owner and CEO. Set up the full technical foundation from scratch – repo structure, branching strategy, coding standards and the entire backend architecture. Defined sprints, scoped what went into each one, and created the daily workflow the team followed. Built out a Canva documentation hub with cheat sheets, guides and process docs so developers could find answers themselves before asking – which kept interruptions low and momentum high. Also handled code reviews and the gap between what product wanted and what was actually buildable in time.",
    reflectionLabel2: "The hard part",
    reflectionText2:
      "Unclear ownership slows things down more than technical debt ever does. Getting the structure right early – who owns what, how PRs work, when to sync – made the actual development significantly smoother.",
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
