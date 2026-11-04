import FaqList from "@/components/FaqList";
import { home } from "@/data/home";

export default function FullstackFaq({ lang = "en" }: { lang?: "en" | "sv" }) {
  const t = home[lang].fullstack;
  return (
    <section id="full-stack" className="section faq-section" aria-labelledby="full-stack-heading">
      <div className="faq-intro">
        <p className="section-label">{t.label}</p>
        <h2 className="section-title" id="full-stack-heading">{t.title}</h2>
        <p className="faq-intro-text">{t.intro}</p>
      </div>
      <FaqList items={t.items} className="faq-list--grid" />
    </section>
  );
}
