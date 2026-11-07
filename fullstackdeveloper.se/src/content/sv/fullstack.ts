/**
 * Swedish content for /fullstackutvecklare.
 * Personal facts come only from Sanne: education, LIA, startup role and languages from her earlier
 * About page; the skills list as she supplied it on 2026-11-07. Do not add experience that is not confirmed by Sanne.
 */
import type { FaqItem } from "../types";

export const skills: { category: string; items: string }[] = [
  { category: "Språk", items: "TypeScript, JavaScript, Java, Python, C#, PHP, YAML (konfigurationsdriven utveckling)" },
  { category: "Frontend", items: "React, Next.js, Vue.js, Astro, HTML, CSS, SCSS, Tailwind CSS, responsiv design med flytande typografi och design tokens, Nano Stores, Tiptap (rich text-editor)" },
  { category: "Backend", items: "Node.js, Express, Hono, Spring Boot, REST-API:er, WebSockets, Zod (schemavalidering), integrationer mot externa data-API:er (Elite Prospects, Cision)" },
  { category: "CMS", items: "Drupal (headless, egen modul med översättnings-API), WordPress (tema, plugins, Gravity Forms), eget headless CMS, flerspråkigt innehåll och översättning" },
  { category: "Databaser", items: "PostgreSQL, MySQL, MongoDB, SQLite, Prisma, Supabase, Neon" },
  { category: "Data", items: "Python för datainsamling och statistik, pandas, Plotly, Streamlit, rankning och aggregering" },
  { category: "AI", items: "AI-funktioner i webbapplikationer via API, promptdesign, AI-agenter i utvecklingsarbetet (Claude Code), AI-assisterad kodgranskning och felsökning" },
  { category: "Drift och moln", items: "AWS, Docker, Docker Compose, GitHub Actions, GitLab CI/CD, GitLab Pages, schemalagda pipelines, Renovate, pnpm-monorepo, Vercel, Pulumi och Kubernetes (grundläggande)" },
  { category: "Test", items: "Jest, Mocha, Supertest, JUnit, Vitest, Playwright (Chromium, Firefox, WebKit), axe-core, visuell regressionstestning, mutationstestning (Stryker), Bats, PHPUnit, Python unittest, testdriven utveckling" },
  { category: "Tillgänglighet", items: "WCAG, axe-core, tangentbordsnavigering, tillgängliga namn" },
  { category: "Säkerhet", items: "Autentisering och behörighet, JWT, bcrypt, rollbaserad åtkomst, Content Security Policy, sanering av HTML, cookiesamtycke (Cookiebot, CookieYes)" },
  { category: "Sökbarhet", items: "Metadata, canonical, sitemap, hreflang, JSON-LD, Open Graph, redirects vid migrering, Core Web Vitals (LCP), Google Search Console" },
  { category: "Integrationer och verktyg", items: "Salesforce/Pardot, Figma (plugin och design till kod)" },
  { category: "Arbetssätt", items: "Scrum, Kanban, kodgranskning, teknisk ledning, mentorskap, konventionella commits, sajtmigrering med paritetskontroll, teknisk dokumentation och beslutsdokument (ADR)" },
];

/**
 * FAQ chosen from what people search for and ask AI assistants about the role.
 * The three broadest questions (what it is, the difference, what the job involves) are H2 sections
 * on the page instead, so their answers are never hidden behind <details>.
 */
export const faq: FaqItem[] = [
  {
    q: "Vilka programmeringsspråk behöver en fullstackutvecklare kunna?",
    a: [
      "HTML, CSS och JavaScript, ofta som TypeScript, för det som körs i webbläsaren. På servern finns fler val: JavaScript eller TypeScript med Node.js, Java, C#, Python eller PHP. Till det kommer SQL för att arbeta med databaser.",
      "Man behöver inte kunna alla. Ett språk i varje lager räcker för att komma igång, och det är vanligt att använda TypeScript både i webbläsaren och på servern.",
    ],
  },
  {
    q: "Måste en fullstackutvecklare kunna både frontend och backend?",
    a: [
      "Ja, det är det som skiljer rollen från en ren frontend- eller backendutvecklare. Men ingen är expert på varje lager. De flesta har en sida de är starkast på och tillräckligt djup i resten för att bygga en fungerande funktion själv.",
      "Det viktiga är att veta var ett problem hör hemma och när man behöver ta in någon med djupare kunskap, till exempel om databasprestanda eller säkerhet.",
    ],
  },
  {
    q: "Vad är skillnaden mellan en fullstackutvecklare och en systemutvecklare?",
    a: [
      "Systemutvecklare är den bredare yrkestiteln för den som bygger mjukvara. Fullstackutvecklare beskriver vilka delar man arbetar med: både gränssnittet och servern bakom. En fullstackutvecklare är alltså en sorts systemutvecklare.",
    ],
  },
  {
    q: "Hur blir man fullstackutvecklare?",
    a: [
      "Vanliga vägar är en yrkeshögskoleutbildning, en högskoleutbildning inom till exempel datateknik eller systemvetenskap, eller kortare kurser kombinerat med egna projekt. Det som avgör är oftast vad du kan visa att du har byggt.",
      "Min egen väg beskriver jag längre upp på sidan, under rubriken om hur jag blev fullstackutvecklare.",
    ],
  },
  {
    q: "Kan man arbeta som fullstackutvecklare utan högskoleutbildning?",
    a: [
      "Ja. Yrket kräver ingen legitimation eller examen, och många arbetsgivare tittar mer på vad du kan bygga än på vilken utbildning du har. En yrkeshögskoleutbildning med praktik på en arbetsplats är en vanlig väg in.",
    ],
  },
  {
    q: "Vilka tekniker använder du oftast?",
    a: [
      "Next.js och React med TypeScript för gränssnittet, Node.js med Express för API:er och PostgreSQL med Prisma för data. För AI-funktioner använder jag Claude API.",
      "Tekniken väljs efter projektet. Hela listan finns under rubriken om tekniker längre upp på sidan.",
    ],
  },
  {
    q: "Handlar fullstack bara om kod?",
    a: [
      "Nej. En stor del av arbetet är att avgöra var något ska ligga, i webbläsaren, på servern eller i databasen, och att få delarna att vara överens om samma data.",
      "I ett team handlar det också om att komma överens om repostruktur, brancher och kodgranskning, så att flera kan arbeta i samma kodbas utan att trampa varandra på tårna.",
    ],
  },
  {
    q: "Hur kommer jag i kontakt med dig?",
    a: ["Mejla mig på sanne@fullstackdeveloper.se, eller skriv till mig på LinkedIn."],
  },
];
