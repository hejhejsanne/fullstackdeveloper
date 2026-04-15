import React from "react";
import "../styles/contact.css";

const contactLinks = [
  {
    href: "mailto:sanne@fullstackdeveloper.se",
    label: "✉ sanne@fullstackdeveloper.se",
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
  {
    href: "tel:+46737324171",
    label: "+46 73-732 41 71",
    external: false,
  },
];

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="section fade-in"
      aria-labelledby="kontakt-heading"
    >
      <div className="section-label" id="kontakt-heading">
        Tillgänglighet &amp; kontakt
      </div>

      <div className="contact__banner">
        <div>
          <div className="contact__status">
            <span className="status-dot" aria-hidden="true" />
            <span className="contact__status-text">Öppen för nya uppdrag</span>
          </div>

          <h2 className="contact__heading">Söker du en fullstackutvecklare?</h2>
          <p className="contact__desc">
            Frilans, konsult eller heltid – hör av dig så pratar vi om vad du
            behöver.
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
          Skicka ett meddelande
        </a>
      </div>
    </section>
  );
}
