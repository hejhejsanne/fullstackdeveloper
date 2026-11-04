import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { en: profile.url, sv: `${profile.url}/fullstackutvecklare`, "x-default": profile.url };
  return [
    { url: profile.url, alternates: { languages } },
    { url: `${profile.url}/fullstackutvecklare`, alternates: { languages } },
    ...["about", "contact", "ats"].map(path => ({ url: `${profile.url}/${path}` })),
  ];
}
