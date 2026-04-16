import React from "react";
import "@/styles/contact.css";

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
  { href: "https://github.com/hejhejsanne", label: "GitHub ↗", external: true },
  // { href: 'tel:+46737324171', label: '+46 73-732 41 71', external: false },
];

export default function Contact() {
  return (
    <section
      suppressHydrationWarning
      id="contact"
      className="section fade-in"
      aria-labelledby="contact-heading"
    >
      <div className="section-label" id="contact-heading">
        Availability &amp; contact
      </div>
      <div className="contact__banner">
        <div>
          <div className="contact__status">
            <span className="status-dot" aria-hidden="true" />
            <span className="contact__status-text">
              Open for new opportunities
            </span>
          </div>
          <h2 className="contact__heading">
            Looking for a full stack developer?
          </h2>
          <p className="contact__desc">
            Freelance, consultant or full-time – reach out and let&amp;s talk
            about what you need.
          </p>
          <div className="contact__links">
            {contactLinks.map(({ href, label, external }) => (
              <a
                key={href}
                href={href}
                className="contact__link"
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
  );
}
