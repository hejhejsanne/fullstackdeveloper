import "@/styles/tokens.css";
import "@/styles/globals.css";
import "@/styles/utilities.css";
import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { profile } from "@/data/profile";
import { getDictionary } from "@/i18n/dictionaries";
import { openGraphBase } from "@/i18n/seo";

// Root layout for the Swedish pages. English gets its own (en) route group and root layout later,
// so each language has the correct <html lang> in server-rendered HTML.

// Self-hosted at build time by next/font: visitors never request Google Fonts.
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = DM_Serif_Display({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" });

const lang = "sv";
const t = getDictionary(lang);

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  robots: { index: true, follow: true },
  verification: { google: "Vq8rfGLksVqXN5iC45VMFnzzBK1GAon5xJSg4LaIFdo" },
  openGraph: openGraphBase(lang),
  twitter: { card: "summary_large_image", images: ["/og-default.jpg"] },
};

export default function SwedishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${sans.variable} ${serif.variable}`}>
      <body>
        <div className="site-background" aria-hidden="true" />
        <a className="skip-link" href="#main-content">{t.skipLink}</a>
        <Nav lang={lang} />
        {children}
        <Footer lang={lang} />
        <BackToTop label={t.backToTop} />
      </body>
    </html>
  );
}
