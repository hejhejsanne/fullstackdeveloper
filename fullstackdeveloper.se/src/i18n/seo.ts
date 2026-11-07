import { langInfo, type Lang } from "./config";

/**
 * Shared Open Graph fields. Next.js replaces (does not merge) the layout's openGraph when a page
 * sets its own, so every page spreads this base in to keep locale, site name and image.
 */
export function openGraphBase(lang: Lang) {
  return {
    siteName: "fullstackdeveloper.se",
    locale: langInfo[lang].ogLocale,
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Sanne Delin, fullstackutvecklare" }],
  };
}
