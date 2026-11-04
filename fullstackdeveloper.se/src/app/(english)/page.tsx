import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FullstackFaq from "@/components/FullstackFaq";
import AtsSummary from "@/components/AtsSummary";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/", languages: { en: "/", sv: "/fullstackutvecklare", "x-default": "/" } },
  openGraph: {
    title: "Sanne Delin | Full Stack Developer Gothenburg",
    description: "Full stack developer in Gothenburg, developer at Understandit since June 2026. What a full stack developer does, and how to write a CV an applicant tracking system can read.",
    url: "/", locale: "en_US", type: "website", images: ["/og-default.jpg"],
  },
};

/** Home page, kept deliberately short. About and the full ATS article live on their own pages. */
export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero lang="en" />
        <FullstackFaq lang="en" />
        <AtsSummary lang="en" />
        <Contact lang="en" />
      </main>
      <Footer />
    </>
  );
}
