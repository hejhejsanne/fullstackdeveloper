import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Project pages were removed in the simplified site (Nov 2026). Permanent redirects keep old links and search results working.
  async redirects() {
    return [
      { source: "/projects", destination: "/about", permanent: true },
      { source: "/projects/:slug", destination: "/about", permanent: true },
    ];
  },
  async headers() {
    return [
      { source: "/api/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }, { key: "Cache-Control", value: "no-store" }] },
      {
        source: "/(.*)",
        headers: [
          // Förhindrar clickjacking
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // Tvingar HTTPS i 2 år
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Förhindrar MIME-type sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Cross-Origin isolation
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
