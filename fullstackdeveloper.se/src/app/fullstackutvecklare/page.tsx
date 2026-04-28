import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fullstackutvecklare Göteborg | Sanne Delin",
  description:
    "Fullstackutvecklare i Göteborg med erfarenhet av React, Next.js, Node.js och AI-integration. Tillgänglig för freelance, konsultuppdrag och heltidsroller.",
  alternates: {
    canonical: "/fullstackutvecklare",
    languages: {
      "sv-SE": "/fullstackutvecklare",
      "en-US": "/",
    },
  },
  openGraph: {
    title: "Fullstackutvecklare Göteborg | Sanne Delin",
    description:
      "Fullstackutvecklare i Göteborg med erfarenhet av React, Next.js, Node.js och AI-integration. Tillgänglig för freelance, konsult och heltid.",
    url: "/fullstackutvecklare",
    siteName: "Sanne Delin – Fullstackutvecklare",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Sanne Delin — Fullstackutvecklare Göteborg",
      },
    ],
  },
};

function FullstackJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sanne Delin",
    jobTitle: "Fullstackutvecklare",
    url: "https://fullstackdeveloper.se/fullstackutvecklare",
    email: "sanne@fullstackdeveloper.se",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Göteborg",
      addressCountry: "SE",
    },
    sameAs: [
      "https://linkedin.com/in/sanne-delin-3080aa252",
      "https://github.com/hejhejsanne",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Vad gör en fullstackutvecklare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En fullstackutvecklare arbetar med både frontend och backend — allt från användargränssnitt i React till API:er, databaser och driftsättning. En person som kan ta ett projekt hela vägen från idé till färdig produkt.",
        },
      },
      {
        "@type": "Question",
        name: "Är du tillgänglig för freelanceuppdrag i Göteborg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Jag tar emot freelanceuppdrag, konsultroller och heltidstjänster. Baserad i Göteborg men arbetar remote med kunder i hela Sverige.",
        },
      },
      {
        "@type": "Question",
        name: "Vilka tekniker arbetar du med?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "React, Next.js, TypeScript, Node.js, Express, PostgreSQL, Prisma, Supabase, Docker och AI-integration via Claude API. Fullstack från grunden upp.",
        },
      },
      {
        "@type": "Question",
        name: "Kan du ta ett projekt från idé till lansering?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Det är faktiskt det jag trivs bäst med. Jag har hjälpt startups från 'vi har en idé' hela vägen till färdig, driftsatt produkt — inklusive tekniska beslut, arkitektur och teamledning.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

export default function FullstackutvecklarePage() {
  return (
    <main className="seo-page">
      <FullstackJsonLd />

      {/* Hero */}
      <section className="seo-hero">
        <div className="seo-hero__inner">
          <div className="seo-hero__badge">
            Tillgänglig för uppdrag · Göteborg
          </div>
          <h1 className="seo-hero__title">
            Fullstackutvecklare
            <br />
            <span className="seo-hero__title--accent">i Göteborg</span>
          </h1>
          <p className="seo-hero__desc">
            Hej, jag heter Sanne Delin. Jag bygger webbapplikationer, API:er och
            AI-drivna verktyg — och jag trivs som bäst när problemet inte har en
            uppenbar lösning. Baserad i Göteborg, tillgänglig för freelance,
            konsult och heltid i hela Sverige.
          </p>
          <div className="seo-hero__actions">
            <a
              href="mailto:sanne@fullstackdeveloper.se"
              className="btn-primary"
            >
              Kontakta mig
            </a>
            <Link href="/" className="btn-secondary">
              Se portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Vem är jag */}
      <section className="seo-section">
        <h2 className="seo-section__title">
          Fullstackutvecklare med hela bilden i huvudet
        </h2>
        <p className="seo-section__text">
          Jag har en tendens att se system där andra ser kaos. Det är inte en
          attityd — det är helt enkelt hur jag fungerar. Jag kan zooma ut, läsa
          helheten, hitta var det faktiskt går fel, och sedan zooma in och fixa
          det. Ge mig ett riktigt problem, något värt att bygga, och jag är
          genuint i mitt esse.
        </p>
        <p className="seo-section__text">
          Jag har lett team, mentorerat utvecklare och drivit tekniska projekt
          under kaotiska, verkliga förhållanden. Och någonstans längs vägen
          insåg jag att kommunikation spelar minst lika stor roll som ren kod —
          förmodligen större. Man kan skriva vacker mjukvara och ändå se ett
          projekt rasa ihop för att ingen pratar med varandra på rätt sätt.
        </p>
      </section>

      {/* Teknik */}
      <section className="seo-section">
        <h2 className="seo-section__title">Teknisk kompetens</h2>
        <div className="seo-skills">
          {[
            {
              label: "Frontend",
              value:
                "React.js, Next.js, Vue.js, TypeScript, Tailwind CSS, SCSS",
            },
            {
              label: "Backend",
              value:
                "Node.js, Express.js, Spring Boot, REST API:er, WebSockets",
            },
            {
              label: "Databaser",
              value: "PostgreSQL, MongoDB, MySQL, Prisma ORM, Supabase, Neon",
            },
            {
              label: "AI & integration",
              value: "Claude API, LLM-integration, prompt engineering",
            },
            {
              label: "DevOps",
              value: "Docker, GitHub Actions, CI/CD, Vercel",
            },
            {
              label: "Testning",
              value: "Jest, Mocha, Supertest, TDD",
            },
          ].map(({ label, value }) => (
            <div key={label} className="seo-skills__item">
              <div className="seo-skills__label">{label}</div>
              <div className="seo-skills__value">{value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Hur vi kan jobba */}
      <section className="seo-section">
        <h2 className="seo-section__title">Hur vi kan jobba tillsammans</h2>
        <div className="seo-cards">
          <div className="seo-card">
            <h3 className="seo-card__title">Freelanceprojekt</h3>
            <p className="seo-card__text">
              Behöver du en webbapp, ett API eller ett internt verktyg byggt?
              Jag tar uppdrag av alla storlekar — från MVP till
              produktionssystem.
            </p>
          </div>
          <div className="seo-card">
            <h3 className="seo-card__title">Konsultroll</h3>
            <p className="seo-card__text">
              Vill du förstärka ditt team med en senior utvecklare? Jag arbetar
              inbäddad i befintliga team och bidrar med både kod och tekniskt
              ledarskap.
            </p>
          </div>
          <div className="seo-card">
            <h3 className="seo-card__title">Heltidstjänst</h3>
            <p className="seo-card__text">
              Öppen för rätt heltidsmöjlighet i Sverige. Erfarenhet från både
              startupmiljöer och strukturerade team med tydliga processer.
            </p>
          </div>
        </div>
      </section>

      {/* Göteborg */}
      <section className="seo-section">
        <h2 className="seo-section__title">
          Baserad i Göteborg — jobbar i hela Sverige
        </h2>
        <p className="seo-section__text">
          Jag bor och arbetar i Göteborg men samarbetar med kunder och team över
          hela Sverige — Stockholm, Malmö, Uppsala och vidare. Remote-first är
          inte ett nödlösning för mig, det är standardläget. Asynkrona
          arbetsflöden, distribuerade team, Slack och GitHub — det är vardag.
        </p>
      </section>

      {/* FAQ */}
      <section className="seo-section">
        <h2 className="seo-section__title">Vanliga frågor</h2>
        <div className="seo-faq">
          {[
            {
              q: "Vad gör en fullstackutvecklare?",
              a: "En fullstackutvecklare arbetar med både frontend och backend — allt från användargränssnitt i React till API:er, databaser och driftsättning. En person som kan ta ett projekt hela vägen från idé till färdig produkt.",
            },
            {
              q: "Är du tillgänglig för freelanceuppdrag i Göteborg?",
              a: "Ja. Jag tar emot freelanceuppdrag, konsultroller och heltidstjänster. Baserad i Göteborg men arbetar remote med kunder i hela Sverige.",
            },
            {
              q: "Vilka tekniker arbetar du med?",
              a: "React, Next.js, TypeScript, Node.js, Express, PostgreSQL, Prisma, Supabase, Docker och AI-integration via Claude API. Fullstack från grunden upp.",
            },
            {
              q: "Kan du ta ett projekt från idé till lansering?",
              a: "Ja. Det är faktiskt det jag trivs bäst med. Jag har hjälpt startups från 'vi har en idé' hela vägen till färdig, driftsatt produkt — inklusive tekniska beslut, arkitektur och teamledning.",
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
        <h2 className="seo-cta__title">Redo att jobba tillsammans?</h2>
        <p className="seo-cta__text">
          Oavsett om du behöver en freelanceutvecklare för ett specifikt projekt
          eller en teknisk lagkamrat på heltid — hör av dig.
        </p>
        <a href="mailto:sanne@fullstackdeveloper.se" className="btn-primary">
          sanne@fullstackdeveloper.se
        </a>
      </section>
    </main>
  );
}
