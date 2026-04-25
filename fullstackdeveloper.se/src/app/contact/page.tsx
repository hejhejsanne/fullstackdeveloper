// src/app/about/page.tsx
import type { Metadata } from "next";
import "@/styles/components/contact.css";

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
    canonical: "https://fullstackdeveloper.se/contact",
  },
  openGraph: {
    title: "Hire a Full Stack Developer in Sweden | Sanne Delin",
    description:
      "Experienced full stack developer based in Gothenburg, Sweden. Available for freelance, consultant, and full-time roles. React, Next.js, Node.js, TypeScript.",
    url: "https://fullstackdeveloper.se/contact",
    siteName: "Sanne Delin – Full Stack Developer",
    type: "website",
  },
};

const contactLinks = [
  {
    href: "mailto:sanne@fullstackdeveloper.se",
    label: "sanne@fullstackdeveloper.se",
    external: false,
  },
  {
    href: "https://linkedin.com/in/sanne-delin-3080aa252",
    label: "LinkedIn ↗",
    external: true,
  },
  {
    href: "https://github.com/hejhejsanne",
    label: "GitHub ↗",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section
        suppressHydrationWarning
        id="contact"
        className="section fade-in"
        aria-labelledby="contact-heading"
      >
        <div className="section-label" id="contact-heading">
          Availability &amp; contact
        </div>
        <div className="contact-banner">
          <div>
            <div className="contact-status">
              <span className="status-dot" aria-hidden="true" />
              <span className="contact-status-text">
                Open for new opportunities
              </span>
            </div>
            <h2 className="contact-heading">
              Looking for a full stack developer?
            </h2>
            <p className="contact-desc">
              Freelance, consultant or full-time - reach out and let&rsquo;s
              talk about what you need.
            </p>
            <div className="contact-links">
              {contactLinks.map(({ href, label, external }) => (
                <a
                  key={href}
                  href={href}
                  className="contact-link"
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
          <a href="mailto:sanne@fullstackdeveloper.se" className="btn-primary">
            Send a message
          </a>
        </div>
      </section>
    </div>
  );
}
