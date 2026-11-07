/**
 * Interface text (navigation, labels, accessible names) per language.
 * Long-form page content lives in src/content/<lang>/ and in the page files.
 * Add an `en` entry when English pages are published; TypeScript then requires every key.
 */
import type { Lang } from "./config";

export interface Dictionary {
  skipLink: string;
  nav: { label: string; home: string; fullstack: string; ats: string; contact: string; homeLogo: string };
  languageSwitcher: string;
  footer: { label: string; rights: string };
  backToTop: string;
  newTab: string;
}

const sv: Dictionary = {
  skipLink: "Hoppa till innehållet",
  nav: {
    label: "Huvudmeny",
    home: "Hem",
    fullstack: "Fullstackutvecklare",
    ats: "ATS & CV",
    contact: "Kontakt",
    homeLogo: "till startsidan",
  },
  languageSwitcher: "Välj språk",
  footer: { label: "Sidfot", rights: "Sanne Delin" },
  backToTop: "Tillbaka till toppen",
  newTab: "(öppnas i en ny flik)",
};

export const dictionaries: Partial<Record<Lang, Dictionary>> = { sv };

export function getDictionary(lang: Lang): Dictionary {
  const dictionary = dictionaries[lang];
  if (!dictionary) throw new Error(`No dictionary for "${lang}"`);
  return dictionary;
}
