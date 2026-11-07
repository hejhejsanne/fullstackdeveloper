import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["GPTBot", "ClaudeBot", "anthropic-ai", "CCBot", "Google-Extended", "Bytespider"], disallow: "/" },
    ],
    sitemap: `${profile.url}/sitemap.xml`,
  };
}
