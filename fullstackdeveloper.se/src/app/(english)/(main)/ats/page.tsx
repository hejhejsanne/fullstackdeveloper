import type { Metadata } from "next";
import ATS from "@/components/Ats";

export const metadata: Metadata = {
  title: "Writing an ATS-friendly CV",
  description: "What Sanne Delin learned about CV formatting and applicant tracking systems while job hunting, plus tips for a CV that gets read.",
  alternates: { canonical: "/ats" },
  openGraph: { title: "Writing an ATS-friendly CV | Sanne Delin", description: "What I learned about CV formatting and applicant tracking systems while job hunting.", url: "/ats", type: "article", images: ["/og-default.jpg"] },
};

export default function ATSPage() {
  return (
    <main id="main-content" className="ats-page">
      <ATS />
    </main>
  );
}
