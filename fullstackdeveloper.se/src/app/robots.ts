import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        disallow: "/",
      },
      {
        userAgent: "ClaudeBot",
        disallow: "/",
      },
      {
        userAgent: "anthropic-ai",
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "Google-Extended", // Googles AI-träningsbot (Gemini)
        disallow: "/",
      },
      {
        userAgent: "Bytespider", // TikTok/ByteDance AI-crawler
        disallow: "/",
      },
    ],
    sitemap: "https://fullstackdeveloper.se/sitemap.xml",
  };
}
