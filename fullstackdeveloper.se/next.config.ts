import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old URLs keep working (and keep their search value) after the Swedish-first rebuild, Nov 2026.
  // The English pages were replaced by Swedish ones; English returns later under /en/.
  async redirects() {
    return [
      { source: "/about", destination: "/fullstackutvecklare", permanent: true },
      { source: "/contact", destination: "/#kontakt", permanent: true },
      { source: "/projects", destination: "/fullstackutvecklare", permanent: true },
      { source: "/projects/:slug", destination: "/fullstackutvecklare", permanent: true },
    ];
  },
  async headers() {
    return [
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
