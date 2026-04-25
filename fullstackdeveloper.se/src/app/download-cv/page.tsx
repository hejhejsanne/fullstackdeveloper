// src/app/about/page.tsx
import type { Metadata } from "next";
import "@/styles/components/cvmodal.css";
import CVDownloadModal from "@/components/CVDownloadModal";

export const metadata: Metadata = {
  title: "Hire a Full Stack Developer in Sweden | Sanne Delin",
  description:
    "Looking to hire a full stack developer in Sweden? Sanne Delin is an experienced freelance full stack developer based in Gothenburg, available for freelance, consultant, and full-time roles across Sweden.",
  keywords: [
    "full stack developer Sweden",
    "hire full stack developer Sweden",
    "freelance full stack developer Sweden",
    "full stack developer Gothenburg",
    "Next.js developer Sweden",
    "React developer Sweden",
    "TypeScript developer Sweden",
    "webbutvecklare Sverige",
    "anlita webbutvecklare",
  ],
  alternates: {
    canonical: "https://fullstackdeveloper.se/download-cv",
  },
  openGraph: {
    title: "Hire a Full Stack Developer in Sweden | Sanne Delin",
    description:
      "Experienced full stack developer based in Gothenburg, Sweden. Available for freelance, consultant, and full-time roles. React, Next.js, Node.js, TypeScript.",
    url: "https://fullstackdeveloper.se/download-cv",
    siteName: "Sanne Delin – Full Stack Developer",
    type: "website",
  },
};
export default function downloadCvPage() {
  return <CVDownloadModal />;
}
