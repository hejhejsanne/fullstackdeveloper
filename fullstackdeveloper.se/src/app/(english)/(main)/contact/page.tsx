import { profile } from "@/data/profile";
import type { Metadata } from "next";
import "@/styles/components/contact.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sanne Delin — full stack developer in Gothenburg. Developer at Understandit since June 2026. Connect about technology and development.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Sanne Delin",
    description:
      "Get in touch with Sanne Delin — full stack developer in Gothenburg. Developer at Understandit since June 2026. Connect about technology and development.",
    url: "/contact",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
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
    <main id="main-content" className="contact-page">
      <section
        id="contact"
        className="section"
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
                Developer at Understandit
              </span>
            </div>
            <h1 className="contact-heading">Let’s connect</h1>
            <p className="contact-desc">
              {profile.en.contact}
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
    </main>
  );
}
