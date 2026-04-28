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
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  metadataBase: new URL("https://fullstackdeveloper.se"),
  title: {
    default: "Sanne Delin – Full Stack Developer Gothenburg",
    template: "%s | Sanne Delin",
  },
  description:
    "Full stack developer in Gothenburg. I build scalable web apps, lead technical teams, and take startups from idea to shipped product.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "sv-SE": "/fullstackutvecklare",
    },
  },
  openGraph: {
    siteName: "Sanne Delin",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Sanne Delin — Full Stack Developer Gothenburg",
      },
    ],
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
      <head />
      <body>
        <ShaderBackgroundLoader />
        <Nav />
        <PersonJsonLd />
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
