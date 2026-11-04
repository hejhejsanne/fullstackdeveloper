import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FullstackFaq from "@/components/FullstackFaq";
import AtsSummary from "@/components/AtsSummary";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fullstackutvecklare Göteborg",
  description:
    "Fullstackutvecklare i Göteborg, utvecklare på Understandit sedan juni 2026. Vad en fullstackutvecklare gör, och hur du skriver ett CV som ett rekryteringssystem kan läsa.",
  alternates: {
    canonical: "/fullstackutvecklare",
    languages: {
      sv: "/fullstackutvecklare",
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Fullstackutvecklare Göteborg",
    description:
      "Fullstackutvecklare i Göteborg, utvecklare på Understandit sedan juni 2026. Vad en fullstackutvecklare gör, och hur du skriver ett CV som ett rekryteringssystem kan läsa.",
    url: "/fullstackutvecklare",
    siteName: "Sanne Delin – Fullstackutvecklare",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Sanne Delin — Fullstackutvecklare Göteborg",
      },
    ],
  },
};

/** Swedish home page: same structure and components as /, Swedish copy from data/home.ts. */
export default function FullstackutvecklarePage() {
  return (
    <>
      <main id="main-content">
        <Hero lang="sv" />
        <FullstackFaq lang="sv" />
        <AtsSummary lang="sv" />
        <Contact lang="sv" />
      </main>
      <Footer />
    </>
  );
}
