import Link from "next/link";
import FaqList from "@/components/FaqList";
import { home } from "@/data/home";

/** Short ATS section for the home page. The full text lives on /ats. */
export default function AtsSummary({ lang = "en" }: { lang?: "en" | "sv" }) {
  const t = home[lang].ats;
  return (
    <div className="ats-band">
      <section id="ats" className="section faq-section faq-section--ats" aria-labelledby="ats-heading">
        <div className="faq-intro">
          <p className="section-label">{t.label}</p>
          <h2 className="section-title" id="ats-heading">{t.title}</h2>
          {t.intro.map((paragraph) => (
            <p key={paragraph} className="faq-intro-text">{paragraph}</p>
          ))}
          <p className="faq-intro-link">
            <Link className="text-link" href="/ats" hrefLang={lang === "sv" ? "en" : undefined}>{t.readMore}</Link>
          </p>
        </div>
        <FaqList items={t.items} />
      </section>
    </div>
  );
}
