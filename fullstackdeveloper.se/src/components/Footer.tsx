import "@/styles/components/footer.css";
import { profile } from "@/data/profile";
import { getDictionary } from "@/i18n/dictionaries";
import type { Lang } from "@/i18n/config";

export default function Footer({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);
  return (
    <footer className="site-footer" aria-label={t.footer.label}>
      <div className="container site-footer-inner">
        <p>© {new Date().getFullYear()} {t.footer.rights}</p>
        <ul className="footer-links" role="list">
          <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub<span className="visually-hidden"> {t.newTab}</span>
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn<span className="visually-hidden"> {t.newTab}</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
