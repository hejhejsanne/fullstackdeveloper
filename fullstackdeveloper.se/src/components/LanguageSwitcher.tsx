import Link from "next/link";
import { langInfo, pageForPath, pageLanguages, pathFor } from "@/i18n/config";

/**
 * SV / EN segmented control. Renders nothing until the current page exists in more than one
 * language, so no visitor is ever sent to a missing or empty translation. When it renders,
 * each option links to the same page in the other language, not to the home page.
 */
export default function LanguageSwitcher({ pathname, label }: { pathname: string; label: string }) {
  const current = pageForPath(pathname);
  if (!current) return null;
  const available = pageLanguages(current.page);
  if (available.length < 2) return null;

  return (
    <ul className="lang-switch" role="list" aria-label={label}>
      {available.map((lang) => (
        <li key={lang}>
          <Link
            href={pathFor(current.page, lang)}
            hrefLang={langInfo[lang].hreflang}
            lang={langInfo[lang].hreflang}
            aria-current={lang === current.lang ? "true" : undefined}
            className="lang-switch-option"
          >
            <span aria-hidden="true">{langInfo[lang].label}</span>
            <span className="visually-hidden">{langInfo[lang].name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
