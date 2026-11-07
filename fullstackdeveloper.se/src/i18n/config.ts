/**
 * Language setup for the site. Swedish is the only published language today.
 *
 * To add English later:
 * 1. Write the English page content (never machine-translated filler).
 * 2. Add the English path to `routes` below, e.g. ats: { sv: "/ats", en: "/en/ats-resume-guide" }.
 * 3. Add an `(en)` route group with its own root layout (<html lang="en">) and the pages.
 * 4. Add an `en` dictionary in ./dictionaries.ts.
 * hreflang alternates, the sitemap and the SV / EN switcher pick the new paths up from `routes`
 * automatically, and only for pages that exist in both languages.
 *
 * Plain relative imports only (no "@/" alias), so node --test can import this file.
 */

export const languages = ["sv", "en"] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = "sv";

/** BCP 47 tags for hreflang, og:locale and schema.org inLanguage. */
export const langInfo: Record<Lang, { hreflang: string; ogLocale: string; label: string; name: string }> = {
  sv: { hreflang: "sv", ogLocale: "sv_SE", label: "SV", name: "Svenska" },
  en: { hreflang: "en", ogLocale: "en_US", label: "EN", name: "English" },
};

export type PageKey = "home" | "fullstack" | "ats";
export type Routes = Record<PageKey, Partial<Record<Lang, string>>>;

/** Public path per page and language. A language is listed only once that page is published in it. */
export const routes: Routes = {
  home: { sv: "/" },
  fullstack: { sv: "/fullstackutvecklare" },
  ats: { sv: "/ats" },
};

/** Languages a page is published in, in the order of `languages`. */
export function pageLanguages(page: PageKey, table: Routes = routes): Lang[] {
  return languages.filter((lang) => table[page][lang] !== undefined);
}

export function pathFor(page: PageKey, lang: Lang, table: Routes = routes): string {
  const path = table[page][lang];
  if (path === undefined) throw new Error(`Page "${page}" is not published in "${lang}"`);
  return path;
}

/**
 * Canonical plus hreflang alternates for Next.js metadata.
 * Alternates are emitted only when the page exists in more than one language, as Google expects
 * every hreflang target to be a real, equivalent page.
 */
export function alternatesFor(page: PageKey, lang: Lang, table: Routes = routes) {
  const canonical = pathFor(page, lang, table);
  const published = pageLanguages(page, table);
  if (published.length < 2) return { canonical };
  const languagesMap: Record<string, string> = {};
  for (const l of published) languagesMap[langInfo[l].hreflang] = pathFor(page, l, table);
  languagesMap["x-default"] = pathFor(page, defaultLang, table);
  return { canonical, languages: languagesMap };
}

/** Which page a pathname belongs to, used by the language switcher to keep the visitor on the same page. */
export function pageForPath(pathname: string, table: Routes = routes): { page: PageKey; lang: Lang } | undefined {
  for (const page of Object.keys(table) as PageKey[]) {
    for (const lang of languages) {
      if (table[page][lang] === pathname) return { page, lang };
    }
  }
  return undefined;
}
