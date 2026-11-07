import "@/styles/tokens.css";
import "@/styles/globals.css";
import "@/styles/utilities.css";
import BackToTop from "@/components/BackToTop";
import Nav from "@/components/Nav";
import { profile } from "@/data/profile";
import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";

// Self-hosted at build time by next/font: no requests to Google from visitors' browsers.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-source-serif", display: "swap" });

export const siteMetadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: { default: "Sanne Delin | Full Stack Developer Gothenburg", template: "%s | Sanne Delin" },
  description: "Sanne Delin, full stack developer in Gothenburg and developer at Understandit since June 2026. Web applications from interface to database, AI integration and practical advice on ATS-friendly CVs.",
  robots: { index: true, follow: true },
  verification: { google: "Vq8rfGLksVqXN5iC45VMFnzzBK1GAon5xJSg4LaIFdo" },
  openGraph: { siteName: profile.domain, locale: "en_US", type: "website", images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Sanne Delin, full stack developer in Gothenburg" }] },
  twitter: { card: "summary_large_image", images: ["/og-default.jpg"] },
};

export default function SiteLayout({ children, lang }: { children: React.ReactNode; lang: "en" | "sv" }) {
  const person = {
    "@context": "https://schema.org", "@type": "Person", "@id": `${profile.url}/#person`,
    name: profile.name, jobTitle: profile.role, url: profile.url, email: profile.email,
    image: `${profile.url}/sanne.jpg`,
    worksFor: { "@type": "Organization", name: profile.employer.name, url: profile.employer.url },
    address: { "@type": "PostalAddress", addressLocality: "Gothenburg", addressCountry: "SE" },
    sameAs: [profile.linkedin, profile.github],
  };
  return <html lang={lang} className={`${inter.variable} ${sourceSerif.variable}`}><body>
    <a className="skip-link" href="#main-content">{lang === "sv" ? "Hoppa till innehållet" : "Skip to content"}</a>
    <Nav />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
    {children}<BackToTop />
  </body></html>;
}
