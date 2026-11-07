import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@/styles/components/home.css";
import JsonLd from "@/components/JsonLd";
import { profile, personId } from "@/data/profile";
import { alternatesFor, langInfo, pathFor } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { openGraphBase } from "@/i18n/seo";

const lang = "sv";
const t = getDictionary(lang);
const title = "Sanne Delin – Fullstackutvecklare";
const description =
  "Sanne Delin är fullstackutvecklare i Göteborg och arbetar på Understandit sedan juni 2026. Kontaktuppgifter, vad rollen innebär och en guide till ATS-vänliga CV:n.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: alternatesFor("home", lang),
  openGraph: { ...openGraphBase(lang), type: "profile", title, description: "Fullstackutvecklare på Understandit sedan juni 2026.", url: pathFor("home", lang), firstName: "Sanne", lastName: "Delin" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      url: `${profile.url}/`,
      jobTitle: profile.jobTitle.sv,
      email: `mailto:${profile.email}`,
      image: `${profile.url}${profile.portrait.src}`,
      worksFor: { "@type": "Organization", name: profile.employer.name, url: profile.employer.url },
      address: { "@type": "PostalAddress", addressLocality: profile.locality, addressCountry: "SE" },
      knowsLanguage: ["sv", "en", "no"],
      sameAs: [profile.github, profile.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": `${profile.url}/#website`,
      url: `${profile.url}/`,
      name: profile.domain,
      inLanguage: langInfo[lang].hreflang,
      publisher: { "@id": personId },
    },
  ],
};

export default function Home() {
  return (
    <main id="main-content" className="container home">
      <JsonLd data={structuredData} />
      <section className="home-hero" aria-labelledby="home-heading">
        <div className="home-copy">
          <p className="eyebrow eyebrow-line">Hej, jag heter</p>
          <h1 id="home-heading" className="home-title">
            <span className="display-title">Sanne Delin<span className="accent-dot" aria-hidden="true">.</span></span>
            <span className="home-role">Fullstackutvecklare</span>
          </h1>
          <p className="home-lead">
            Jag arbetar på{" "}
            <a className="underline-link" href={profile.employer.url} target="_blank" rel="noopener noreferrer">
              Understandit<span className="visually-hidden"> {t.newTab}</span>
            </a>{" "}
            sedan juni 2026.
          </p>

          <div id="kontakt" className="home-contact">
            <h2 className="visually-hidden">Kontakt</h2>
            <a className="glass-button contact-pill" href={`mailto:${profile.email}`}>
              <span className="contact-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
              </span>
              <span className="contact-email">{profile.email}</span>
            </a>
            <a className="glass-button linkedin-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
              <span className="visually-hidden"> {t.newTab}</span>
            </a>
          </div>

          <nav className="home-more" aria-label="Läs mer">
            <Link className="text-link" href={pathFor("fullstack", lang)}>Vad gör en fullstackutvecklare?</Link>
            <Link className="text-link" href={pathFor("ats", lang)}>Guide: skriv ett ATS-vänligt CV</Link>
          </nav>
        </div>

        <div className="portrait-frame">
          <Image
            src={profile.portrait.src}
            alt="Sanne Delin, fullstackutvecklare"
            width={profile.portrait.width}
            height={profile.portrait.height}
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) min(420px, calc(100vw - 40px)), 460px"
          />
        </div>
      </section>
    </main>
  );
}
