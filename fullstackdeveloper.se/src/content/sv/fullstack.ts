/**
 * Swedish content for /fullstackutvecklare.
 * Personal facts come only from Sanne's own earlier About page (education, LIA, startup role,
 * languages, skills). Do not add experience that is not confirmed by Sanne.
 */
import type { FaqItem } from "../types";

export const skills: { category: string; items: string }[] = [
  { category: "Språk", items: "TypeScript, JavaScript, Java, Python, C#" },
  { category: "Frontend", items: "React, Next.js, Vue.js, HTML, CSS, SCSS, Tailwind CSS" },
  { category: "Backend", items: "Node.js, Express, Spring Boot, REST-API:er, WebSockets" },
  { category: "Databaser", items: "PostgreSQL, MySQL, MongoDB, Prisma, Supabase, Neon" },
  { category: "AI", items: "AI-funktioner i webbapplikationer via API, promptdesign" },
  { category: "Drift och moln", items: "AWS, Docker, GitHub Actions, CI/CD, Vercel" },
  { category: "Test", items: "Jest, Mocha, Supertest, JUnit, testdriven utveckling" },
  { category: "Säkerhet", items: "Autentisering och behörighet, JWT, bcrypt" },
  { category: "Sökbarhet", items: "Metadata, canonical, sitemap, hreflang, JSON-LD, Google Search Console" },
  { category: "Arbetssätt", items: "Scrum, Kanban, kodgranskning, teknisk ledning, mentorskap" },
];

export const faq: FaqItem[] = [
  {
    q: "Måste en fullstackutvecklare kunna allt?",
    a: [
      "Nej. Man behöver kunna bygga och förstå hela kedjan, men ingen är expert på varje lager. De flesta har en sida de är starkast på och tillräckligt djup i resten för att leverera en fungerande funktion själv.",
      "Det viktiga är att veta var ett problem hör hemma och när man behöver ta in någon med djupare kunskap, till exempel om databasprestanda eller säkerhet.",
    ],
  },
  {
    q: "Vilka tekniker använder du oftast?",
    a: [
      "Next.js och React med TypeScript för gränssnittet, Node.js med Express för API:er och PostgreSQL med Prisma för data. För AI-funktioner använder jag Claude API.",
      "Tekniken väljs efter projektet. Jag har också arbetat med Java och Spring Boot, Vue.js och MongoDB.",
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
    a: ["Mejla mig på sanne@fullstackdeveloper.se."],
  },
];
