import Link from "next/link";
import { profile } from "@/data/profile";
import { siteNav } from "@/data/navigation";
import "@/styles/components/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">{profile.domain}</Link>
          <p className="footer-desc">Sanne Delin, full stack developer in Gothenburg.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="footer-links" role="list">
            {siteNav.map(({ href, label, external }) => (
              <li key={href}>
                {external
                  ? <a href={href} target="_blank" rel="noopener noreferrer">{label} <span aria-hidden="true">↗</span></a>
                  : <Link href={href}>{label}</Link>}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
