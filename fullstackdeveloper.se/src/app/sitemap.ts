import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { alternatesFor, pageLanguages, routes, type PageKey } from "@/i18n/config";

/** One entry per published page and language. hreflang alternates appear once a page exists in two languages. */
export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (path: string) => `${profile.url}${path === "/" ? "/" : path}`;
  return (Object.keys(routes) as PageKey[]).flatMap((page) =>
    pageLanguages(page).map((lang) => {
      const { canonical, languages } = alternatesFor(page, lang);
      return {
        url: abs(canonical),
        ...(languages && { alternates: { languages: Object.fromEntries(Object.entries(languages).map(([k, v]) => [k, abs(v)])) } }),
      };
    }),
  );
}
