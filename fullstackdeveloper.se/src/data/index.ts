import { Project, Skill } from "../types";

export const projects: Project[] = [
  {
    id: "proj-grading",
    title: "AI-Assisted Programming Assignment Grading System",
    impact:
      "Examensarbete inom prompt engineering – ett system som automatiserar bedömning av programmeringsuppgifter med hjälp av AI-modeller som genererar dynamiska, kontextuella svar.",
    tags: [
      { label: "AI / Prompt Engineering", variant: "blue" },
      { label: "Examensarbete", variant: "green" },
      { label: "2025", variant: "gray" },
    ],
    processSteps: [
      { label: "1. Problem", status: "done" },
      { label: "2. Research", status: "done" },
      { label: "3. Prompt design", status: "done" },
      { label: "4. Integration", status: "done" },
      { label: "5. Utvärdering", status: "active" },
    ],
    reflectionLabel: "Varför dessa beslut?",
    reflectionText:
      "Jag valde att fokusera på prompt engineering snarare än fine-tuning eftersom det gav snabbare iteration och lägre kostnad för prototypen. Det viktigaste lärdomen var hur mycket kontexten i prompten påverkar bedömningskvaliteten – små formuleringsändringar gav drastiskt olika resultat.",
    tech: ["TypeScript", "Node.js", "AI API", "Prompt Engineering", "REST API"],
    githubUrl: "https://github.com/hejhejsanne",
  },
  {
    id: "proj-platform",
    title: "Utbildningsplattform – Klarr Utvecklingsbyrå",
    impact:
      "Full-stack utbildningsplattform med JWT-autentisering, WebSockets och CI/CD. Byggd iterativt under LIA 1 & 2 och vidareutvecklad som anställd – från enkel REST-backend till skalbar produktionsmiljö.",
    tags: [
      { label: "Fullstack", variant: "blue" },
      { label: "Produktionssatt", variant: "green" },
      { label: "2024–2025", variant: "gray" },
    ],
    processSteps: [
      { label: "1. Krav", status: "done" },
      { label: "2. API-design", status: "done" },
      { label: "3. Frontend", status: "done" },
      { label: "4. Auth & WS", status: "done" },
      { label: "5. CI/CD", status: "done" },
    ],
    reflectionLabel: "Vad jag valde bort",
    reflectionText:
      "Vi utvärderade GraphQL tidigt men valde REST eftersom teamet var nytt och vi behövde leverera snabbt. JWT valdes framför sessions för att hålla backend stateless – vilket visade sig rätt när vi senare lade till WebSocket-stöd utan att behöva skriva om autentisering.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "WebSockets",
      "GitHub Actions",
      "Docker",
    ],
    githubUrl: "https://github.com/hejhejsanne",
  },
  {
    id: "proj-startup",
    title: "Startupprojekt – Next.js & Prisma",
    impact:
      "Fullstackutveckling och teknisk projektledning i startupprojekt. Ansvarade för REST API-design, frontend-komponenter, databasscheman och integrationstester.",
    tags: [
      { label: "Fullstack", variant: "blue" },
      { label: "Tech Lead", variant: "green" },
      { label: "2025–pågående", variant: "gray" },
    ],
    reflectionLabel: "Min roll",
    reflectionText:
      "Utöver koden etablerade jag arbetsstrukturer, fördelade ansvar och höll teamet rörligt när vi stötte på hinder. Jag märkte att teknisk klarhet och tydlig kommunikation är lika viktigt som bra kod – oklara ansvarsområden bromsar mer än teknisk skuld.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Prisma",
      "Neon",
      "Supabase",
      "Mocha",
      "Supertest",
    ],
    githubUrl: "https://github.com/hejhejsanne",
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
    category: "Databaser",
    items: "PostgreSQL, MongoDB, MySQL, Prisma ORM, Supabase, Neon",
  },
  {
    category: "AI & Prompt Engineering",
    items:
      "AI-integration i webbappar, prompt engineering, dynamisk AI-respons",
  },
  {
    category: "DevOps & Testning",
    items: "Docker, GitHub Actions, CI/CD, Jest, Mocha, Supertest, TDD",
  },
  {
    category: "Språk & verktyg",
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
