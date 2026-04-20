// src/app/fullstackdeveloper/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/seo.css";

export const metadata: Metadata = {
  title: "Hire a Full Stack Developer in Sweden | Sanne Delin",
  description:
    "Looking to hire a full stack developer in Sweden? Sanne Delin is an experienced freelance full stack developer based in Gothenburg, available for freelance, consultant, and full-time roles across Sweden.",
  keywords: [
    "full stack developer Sweden",
    "hire full stack developer Sweden",
    "freelance full stack developer Sweden",
    "full stack developer Gothenburg",
    "Next.js developer Sweden",
    "React developer Sweden",
    "TypeScript developer Sweden",
    "webbutvecklare Sverige",
    "anlita webbutvecklare",
  ],
  alternates: {
    canonical: "https://fullstackdeveloper.se/fullstackdeveloper",
  },
  openGraph: {
    title: "Hire a Full Stack Developer in Sweden | Sanne Delin",
    description:
      "Experienced full stack developer based in Gothenburg, Sweden. Available for freelance, consultant, and full-time roles. React, Next.js, Node.js, TypeScript.",
    url: "https://fullstackdeveloper.se/fullstackdeveloper",
    siteName: "Sanne Delin – Full Stack Developer",
    type: "website",
  },
};

export default function FullStackDeveloperPage() {
  return (
    <main className="seo-page">
      {/* Hero */}
      <section className="seo-hero">
        <div className="seo-hero__inner">
          <div className="seo-hero__badge">Available for hire · Sweden</div>
          <h1 className="seo-hero__title">
            Full Stack Developer
            <br />
            <span className="seo-hero__title--accent">for hire in Sweden</span>
          </h1>
          <p className="seo-hero__desc">
            Hi, I&apos;m Sanne Delin — a full stack developer based in
            Gothenburg, Sweden. I build scalable web applications, REST APIs,
            and AI-powered tools. Available for freelance projects, consultant
            roles, and full-time positions across Sweden.
          </p>
          <div className="seo-hero__actions">
            <a
              href="mailto:sanne@fullstackdeveloper.se"
              className="btn-primary"
            >
              Get in touch
            </a>
            <Link href="/" className="btn-secondary">
              View portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Why hire */}
      <section className="seo-section">
        <h2 className="seo-section__title">
          Why hire a full stack developer in Sweden?
        </h2>
        <p className="seo-section__text">
          A full stack developer handles both frontend and backend — meaning one
          person can take your project from idea to deployed product. Instead of
          coordinating between multiple specialists, you get clear ownership,
          faster delivery, and lower cost. I work across the entire stack: React
          and Next.js on the frontend, Node.js and Spring Boot on the backend,
          and PostgreSQL, MongoDB or Supabase for data.
        </p>
      </section>

      {/* Skills grid */}
      <section className="seo-section">
        <h2 className="seo-section__title">Technical skills</h2>
        <div className="seo-skills">
          {[
            {
              label: "Frontend",
              value:
                "JavaScript, TypeScript, React.js, Next.js, Vue.js, Tailwind CSS",
            },
            {
              label: "Backend",
              value: "Java, Node.js, Express.js, Spring Boot, REST APIs",
            },
            {
              label: "Databases",
              value: "PostgreSQL, MongoDB, MySQL, Prisma, Supabase, Neon",
            },
            {
              label: "AI & integrations",
              value: "LLM integration, prompt engineering, AI APIs",
            },
            { label: "DevOps", value: "Docker, GitHub Actions, CI/CD, Vercel" },
            { label: "Testing", value: "Jest, Mocha, Supertest, TDD" },
          ].map(({ label, value }) => (
            <div key={label} className="seo-skills__item">
              <div className="seo-skills__label">{label}</div>
              <div className="seo-skills__value">{value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement types */}
      <section className="seo-section">
        <h2 className="seo-section__title">How we can work together</h2>
        <div className="seo-cards">
          <div className="seo-card">
            <h3 className="seo-card__title">Freelance project</h3>
            <p className="seo-card__text">
              Need a web app, API, or internal tool built? I take on freelance
              projects of all sizes — from MVPs to production systems.
            </p>
          </div>
          <div className="seo-card">
            <h3 className="seo-card__title">Consultant role</h3>
            <p className="seo-card__text">
              Looking to augment your team with a senior developer? I work
              embedded in existing teams, contributing code and technical
              leadership.
            </p>
          </div>
          <div className="seo-card">
            <h3 className="seo-card__title">Full-time position</h3>
            <p className="seo-card__text">
              Open to the right full-time opportunity in Sweden. Experienced in
              both startup environments and structured team settings.
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="seo-section">
        <h2 className="seo-section__title">
          Based in Gothenburg, working across Sweden
        </h2>
        <p className="seo-section__text">
          I&apos;m based in central Gothenburg but work remotely with clients
          and teams across Sweden — Stockholm, Malmö, Uppsala, and beyond.
          Remote collaboration is part of how I&apos;ve worked since day one,
          and I&apos;m comfortable with async workflows, distributed teams, and
          tools like Slack, Jira, and GitHub.
        </p>
      </section>

      {/* FAQ — targets long-tail search queries */}
      <section className="seo-section">
        <h2 className="seo-section__title">Common questions</h2>
        <div className="seo-faq">
          {[
            {
              q: "How do I hire a full stack developer in Sweden?",
              a: "Reach out by email at sanne@fullstackdeveloper.se with a brief description of your project or role. I'll respond within 24 hours to set up a call.",
            },
            {
              q: "What frameworks does a full stack developer in Sweden typically use?",
              a: "The most common stack in Sweden is React or Next.js on the frontend with Node.js on the backend. I'm proficient in both, as well as TypeScript, PostgreSQL, and modern DevOps tools.",
            },
            {
              q: "Can I hire a freelance full stack developer remotely in Sweden?",
              a: "Absolutely. Most of my work is remote-first. I have experience collaborating asynchronously with teams across different time zones and locations.",
            },
            {
              q: "What's the difference between a frontend and a full stack developer?",
              a: "A frontend developer handles the user interface — what users see and interact with. A full stack developer also handles the backend: APIs, databases, authentication, and server infrastructure. One person, the full picture.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="seo-faq__item">
              <h3 className="seo-faq__q">{q}</h3>
              <p className="seo-faq__a">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="seo-cta">
        <h2 className="seo-cta__title">Ready to work together?</h2>
        <p className="seo-cta__text">
          Whether you need a freelance developer for a specific project or a
          full-time team member - let&apos;s talk.
        </p>
        <a href="mailto:sanne@fullstackdeveloper.se" className="btn-primary">
          sanne@fullstackdeveloper.se
        </a>
      </section>
    </main>
  );
}
