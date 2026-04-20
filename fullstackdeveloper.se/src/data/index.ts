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
    title: "Kortens Budskap – Tarot Learning Platform",
    impact:
      "Full-stack educational platform for tarot cards featuring a training game, dynamic learning pages and a data layer covering all 78 cards. Built with NextAuth, Drizzle ORM and deployed on Vercel.",
    tags: [
      { label: "Full Stack", variant: "blue" },
      { label: "Deployed", variant: "green" },
      { label: "2025", variant: "gray" },
    ],

    reflectionLabel: "Architecture & decisions",
    reflectionText:
      "I built a custom data layer with all 78 cards and 25+ fields per card (archetype, element, chakra, crystals etc.) rather than fetching external data – this gave full control and faster renders. Auth is implemented but intentionally disabled until there is something worth locking in. Next steps are detail pages per card and an active challenge mode.",
    tech: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth",
      "Drizzle ORM",
      "Vercel",
    ],
    liveUrl: "https://kortensbudskap.se",
    liveLabel: "kortensbudskap.se",
  },
  {
    id: "proj-grading",
    title: "AI-Assisted Programming Assignment Grading System",
    impact:
      "Thesis project in prompt engineering – a system that automates grading of programming assignments using AI models that generate dynamic, contextual feedback.",
    tags: [
      { label: "AI / Prompt Engineering", variant: "blue" },
      { label: "Thesis", variant: "green" },
      { label: "2025", variant: "gray" },
    ],
    // processSteps: [
    //   { label: "1. Problem", status: "done" },
    //   { label: "2. Research", status: "done" },
    //   { label: "3. Prompt design", status: "done" },
    //   { label: "4. Integration", status: "done" },
    //   { label: "5. Evaluation", status: "active" },
    // ],
    reflectionLabel: "Why these decisions?",
    reflectionText:
      "I chose prompt engineering over fine-tuning because it allowed faster iteration at lower cost for the prototype. The key insight was how much context within the prompt affects grading quality – small phrasing changes produced drastically different results.",
    tech: ["TypeScript", "Node.js", "AI API", "Prompt Engineering", "REST API"],
    // githubUrl: "https://github.com/hejhejsanne",
  },
  // {
  //   id: 'proj-platform',
  //   title: 'Learning Platform – Klarr Utvecklingsbyrå',
  //   impact: 'Full-stack educational platform with JWT authentication, WebSockets and CI/CD. Built iteratively during LIA 1 & 2 and continued as an employee – from a simple REST backend to a scalable production environment.',
  //   tags: [
  //     { label: 'Full Stack', variant: 'blue' },
  //     { label: 'Production', variant: 'green' },
  //     { label: '2024–2025', variant: 'gray' },
  //   ],
  //   processSteps: [
  //     { label: '1. Requirements', status: 'done' },
  //     { label: '2. API design',   status: 'done' },
  //     { label: '3. Frontend',     status: 'done' },
  //     { label: '4. Auth & WS',    status: 'done' },
  //     { label: '5. CI/CD',        status: 'done' },
  //   ],
  //   reflectionLabel: 'What I chose not to do',
  //   reflectionText: 'We evaluated GraphQL early on but chose REST because the team was new and we needed to ship fast. JWT was chosen over sessions to keep the backend stateless – a decision that proved right when we later added WebSocket support without having to rewrite authentication.',
  //   tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'WebSockets', 'GitHub Actions', 'Docker'],
  //   githubUrl: 'https://github.com/hejhejsanne',
  // },
  {
    id: "proj-startup",
    title: "Startup Project - CleverClick / Pengasplitten",
    impact:
      "Full-stack development and technical project management in a startup setting. Responsible for REST API design, frontend components, database schemas and integration tests.",
    tags: [
      { label: "Full Stack", variant: "blue" },
      { label: "Tech Lead", variant: "green" },
      { label: "2025–ongoing", variant: "gray" },
    ],
    reflectionLabel: "My role",
    reflectionText:
      "Beyond the code I established work structures, distributed responsibilities and kept the team moving when we hit obstacles. Technical clarity and clear communication matter just as much as good code – unclear ownership slows things down more than technical debt.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Prisma",
      "Neon",
      "Mocha",
      "Supertest",
    ],
    // githubUrl: "https://github.com/hejhejsanne",
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
