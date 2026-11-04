import Link from "next/link";
import Image from "next/image";
import "@/styles/components/hero.css";
import { home } from "@/data/home";

export default function Hero({ lang = "en" }: { lang?: "en" | "sv" }) {
  const t = home[lang].hero;
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-text">
        <p className="hero-label">{t.label}</p>
        <h1 className="hero-heading" id="hero-heading">
          {t.title} <span className="hero-heading-sub">{t.titleSub}</span>
        </h1>
        <p className="hero-desc">{t.intro}</p>
        <Link className="btn-primary hero-cta" href="/about">
          {t.cta}
        </Link>
      </div>

      <div className="hero-photo">
        <Image
          src="/sanne.jpg"
          alt={t.portraitAlt}
          fill
          className="hero-photo-img"
          priority
          fetchPriority="high"
          sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 45vw, 560px"
        />
      </div>
    </section>
  );
}
