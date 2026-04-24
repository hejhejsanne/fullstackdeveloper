// src/app/layout.tsx
import "@/styles/tokens.css";
import "@/styles/globals.css";
import "@/styles/utilities.css";
import ChatBot from "@/components/ChatBot";
import BackToTop from "@/components/BackToTop";
import FadeInObserver from "@/components/FadeInObserver";
import Script from "next/script";
import type { Metadata } from "next";
//import dynamic from "next/dynamic";
import ShaderBackgroundLoader from "@/components/ShaderBackgroundLoader";

export const metadata: Metadata = {
  metadataBase: new URL("https://fullstackdeveloper.se"),
  title: {
    default: "Sanne Delin – Full Stack Developer Gothenburg",
    template: "%s | Sanne Delin",
  },
  description:
    "Full Stack Developer based in Gothenburg. I build scalable web applications, mentor teams, and guide startups from idea to execution.",
  robots: {
    index: true,
    follow: true,
  },
};

function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sanne Delin",
    jobTitle: "Full Stack Developer",
    url: "https://fullstackdeveloper.se",
    email: "sanne@fullstackdeveloper.se",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gothenburg",
      addressCountry: "SE",
    },
    sameAs: [
      "https://linkedin.com/in/sanne-delin-3080aa252",
      "https://github.com/hejhejsanne",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <PersonJsonLd />
      </head>
      <body>
        <ShaderBackgroundLoader />
        {children}
        <ChatBot />

        <FadeInObserver />
        <BackToTop />

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0JRQ41WFBP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0JRQ41WFBP');
          `}
        </Script>

        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="eIJrpfr+V7EnBCXq4MYiPw"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
