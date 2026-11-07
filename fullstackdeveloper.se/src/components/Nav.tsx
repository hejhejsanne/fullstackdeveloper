"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/components/nav.css";
import { pathFor, type Lang, type PageKey } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import LanguageSwitcher from "./LanguageSwitcher";

const pages: PageKey[] = ["home", "fullstack", "ats"];

/** Glass pill navigation. Client component only to mark the current page with aria-current. */
export default function Nav({ lang }: { lang: Lang }) {
  const pathname = usePathname() ?? "/";
  const t = getDictionary(lang);
  const home = pathFor("home", lang);
  const labels: Record<PageKey, string> = { home: t.nav.home, fullstack: t.nav.fullstack, ats: t.nav.ats };

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href={home} className="logo">
          fullstackdeveloper<span className="logo-dot">.se</span>
          <span className="visually-hidden">, {t.nav.homeLogo}</span>
        </Link>
        <nav className="site-nav glass" aria-label={t.nav.label}>
          <ul className="nav-links" role="list">
            {pages.map((page) => {
              const href = pathFor(page, lang);
              return (
                <li key={page}>
                  <Link className="nav-link" href={href} aria-current={pathname === href ? "page" : undefined}>
                    {labels[page]}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link className="nav-link" href={`${home}#kontakt`}>{t.nav.contact}</Link>
            </li>
          </ul>
          <LanguageSwitcher pathname={pathname} label={t.languageSwitcher} />
        </nav>
      </div>
    </header>
  );
}
