// src/app/about/page.tsx
import type { Metadata } from "next";
import "@/styles/components/about.css";

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
    canonical: "https://fullstackdeveloper.se/about",
  },
  openGraph: {
    title: "Hire a Full Stack Developer in Sweden | Sanne Delin",
    description:
      "Experienced full stack developer based in Gothenburg, Sweden. Available for freelance, consultant, and full-time roles. React, Next.js, Node.js, TypeScript.",
    url: "https://fullstackdeveloper.se/about",
    siteName: "Sanne Delin – Full Stack Developer",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <section
      suppressHydrationWarning
      id="about"
      className="section fade-in"
      aria-labelledby="about-heading"
    >
      <div className="section-label" id="about-heading">
        About me
      </div>
      <div className="about-grid">
        <div className="about-card about-card-wide">
          <div className="about-title">In short</div>
          <p className="about-text">
            Full stack developer with an eye for detail who always finds a way —
            sometimes with solutions you wouldn&rsquo;t have seen coming.
            I&rsquo;m broad by nature. I can zoom out and see the full picture,
            then zoom in and fix what&rsquo;s actually broken. I thrive when I
            get to be creative, bring real energy to the work, and be part of
            something bigger than just the code.
          </p>
        </div>
        <div className="about-card">
          <div className="about-title">How I work</div>
          <p className="about-text">
            Known for persistence and patience — both in technical environments
            and in coaching. I stay until it&rsquo;s right, stable and
            sustainable, not just shipped. I&rsquo;ve led teams, mentored
            developers and managed technical projects, and I value clear
            communication just as highly as good code. I also genuinely believe
            that having fun together makes the work better. Happy teams build
            better products.
          </p>
        </div>
        <div className="about-card">
          <div className="about-title">Education & languages</div>
          <p className="about-text">
            Object Oriented Programming – AI focus, NBI Handelsakademin
            Gothenburg (2022–2023).
            <br />
            <br />
            Java Developer – Full Stack Development, Teknikhögskolan Gothenburg
            (2023–2025). <br />
            Student representative 2024–2025.
            <br />
            <br />
            Fluent in Swedish, English and Norwegian.
          </p>
        </div>
        <div className="about-card">
          <div className="about-title">Leadership & mentoring</div>
          <p className="about-text">
            Team Lead over both backend and frontend during LIA - Lärande i
            arbete. Technical project manager in a startup. I lead with fairness
            and positive energy, and I make sure everyone has equal space and
            voice. <br />
            <br />I build teams where we work hard, have fun, and trust each
            other - so that when a real challenge shows up, we already have the
            foundation to take it on together.
          </p>
        </div>
        <div className="about-card">
          <div className="about-title">References</div>
          <p className="about-text">
            Available on request — I&rsquo;m happy to share phone numbers
            directly to my references. For a quick read in the meantime, feel
            free to browse while you wait.
          </p>
          <br />
          <a href="#references" className="about-link">
            Go to references →
          </a>
        </div>
      </div>
    </section>
  );
}
