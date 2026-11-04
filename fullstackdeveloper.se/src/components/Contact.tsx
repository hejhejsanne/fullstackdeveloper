import Link from "next/link";
import { profile } from "@/data/profile";
import { home } from "@/data/home";
import "@/styles/components/contact.css";

/** Compact contact section that closes the home page. No form. */
export default function Contact({ lang = "en" }: { lang?: "en" | "sv" }) {
  const t = home[lang].contact;
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="contact-main">
        <h2 className="section-title" id="contact-heading">{t.title}</h2>
        <p className="contact-desc">{t.text}</p>
      </div>
      <div className="contact-side">
        <a href={`mailto:${profile.email}`} className="contact-email">{profile.email}</a>
        <ul className="contact-links" role="list">
          <li><Link className="text-link" href="/about">{t.links.about}</Link></li>
          <li><Link className="text-link" href="/ats">{t.links.ats}</Link></li>
          <li><a className="text-link text-link--external" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </div>
    </section>
  );
}
