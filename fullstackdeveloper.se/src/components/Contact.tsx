import "@/styles/components/contact.css";

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
            Freelance, consultant or full-time - reach out and let&rsquo;s talk
            about what you need.
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
  );
}
