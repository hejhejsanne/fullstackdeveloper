import React from "react";
import { Skill } from "../app/types";

/* Skills */
export function Skills({ skills }: { skills: Skill[] }) {
  return (
    <section
      id="kompetenser"
      aria-labelledby="kompetenser-heading"
      style={{ padding: "3rem 2.5rem", maxWidth: "920px", margin: "0 auto" }}
    >
      <SectionLabel id="kompetenser-heading">Kompetenser</SectionLabel>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "0.75rem",
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill.category}
            style={{
              background: "var(--white)",
              border: "0.5px solid var(--border)",
              borderRadius: "var(--radius-md)",
              padding: "1rem 1.25rem",
            }}
          >
            <div
              style={{
                fontSize: "0.68rem",
                color: "var(--muted)",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.4rem",
              }}
            >
              {skill.category}
            </div>
            <div
              style={{
                fontSize: "0.875rem",
                color: "var(--text)",
                fontWeight: 300,
                lineHeight: 1.7,
              }}
            >
              {skill.link ? (
                <a
                  href={skill.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--accent)",
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  {skill.link.label}
                </a>
              ) : (
                skill.items
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── About ───────────────────────────────────────────────────────── */
export function About() {
  return (
    <section
      id="om-mig"
      aria-labelledby="om-heading"
      style={{ padding: "3rem 2.5rem", maxWidth: "920px", margin: "0 auto" }}
    >
      <SectionLabel id="om-heading">Om mig</SectionLabel>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
      >
        <div
          style={{
            gridColumn: "span 2",
            background: "var(--white)",
            border: "0.5px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            padding: "1.5rem",
          }}
        >
          <div
            style={{
              fontSize: "0.85rem",
              fontWeight: 500,
              marginBottom: "0.6rem",
            }}
          >
            Kort om mig
          </div>
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--muted)",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Fullstackutvecklare med fokus på att bygga produkter som faktiskt
            löser problem. Jag värdesätter tydlig kommunikation, dokumenterad
            process och kod som är lätt att överlämna till nästa person.
            Tillgänglig för frilansuppdrag, konsultroller och heltidstjänster.
          </p>
        </div>
        {[
          {
            title: "Hur jag arbetar",
            text: "Jag börjar alltid med att förstå problemet, inte verktyget. Dokumenterar mina beslut löpande och väljer avsiktligt bort teknisk komplexitet som inte ger värde.",
          },
          {
            title: "Referenser",
            text: "Rekommendationsbrev och referenser lämnas på begäran. Kontakta mig via mail så ordnar jag fram det.",
          },
        ].map(({ title, text }) => (
          <div
            key={title}
            style={{
              background: "var(--white)",
              border: "0.5px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              padding: "1.5rem",
            }}
          >
            <div
              style={{
                fontSize: "0.85rem",
                fontWeight: 500,
                marginBottom: "0.6rem",
              }}
            >
              {title}
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--muted)",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Contact ─────────────────────────────────────────────────────── */
export function Contact() {
  const links = [
    {
      href: "mailto:hej@fullstackdeveloper.se",
      label: "✉ hej@fullstackdeveloper.se",
    },
    {
      href: "https://linkedin.com/in/ditt-namn",
      label: "LinkedIn ↗",
      external: true,
    },
    { href: "https://github.com/ditt-namn", label: "GitHub ↗", external: true },
  ];

  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-heading"
      style={{ padding: "3rem 2.5rem", maxWidth: "920px", margin: "0 auto" }}
    >
      <SectionLabel id="kontakt-heading">
        Tillgänglighet &amp; kontakt
      </SectionLabel>
      <div
        style={{
          background: "var(--white)",
          border: "0.5px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          padding: "2rem 2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: "0.5rem",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: "inline-block",
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#639922",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontSize: "0.78rem",
                color: "var(--green-text)",
                fontWeight: 500,
              }}
            >
              Öppen för nya uppdrag
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.5rem",
              fontWeight: 400,
              marginBottom: "0.4rem",
            }}
          >
            Söker du en fullstackutvecklare?
          </h2>
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--muted)",
              fontWeight: 300,
            }}
          >
            Frilans, konsult eller heltid – hör av dig så pratar vi om vad du
            behöver.
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.6rem",
              marginTop: "1rem",
              flexWrap: "wrap",
            }}
          >
            {links.map(({ href, label, external }) => (
              <a
                key={href}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  fontSize: "0.78rem",
                  color: "var(--muted)",
                  padding: "0.45rem 0.75rem",
                  border: "0.5px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--bg)",
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <a
          href="mailto:hej@fullstackdeveloper.se"
          style={{
            background: "var(--text)",
            color: "var(--white)",
            padding: "0.7rem 1.4rem",
            borderRadius: "100px",
            fontSize: "0.875rem",
            textDecoration: "none",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          Skicka ett meddelande
        </a>
      </div>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer
      style={{
        borderTop: "0.5px solid var(--border)",
        padding: "1.5rem 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "0.78rem",
        color: "var(--muted)",
      }}
    >
      <div style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem" }}>
        fullstack
        <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
          developer
        </span>
        .se
      </div>
      <div>Byggd med TypeScript &amp; hjärta</div>
      <div>© {new Date().getFullYear()}</div>
    </footer>
  );
}

/* ── Shared: SectionLabel ────────────────────────────────────────── */
export function SectionLabel({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div
      id={id}
      style={{
        fontSize: "0.7rem",
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        color: "var(--muted)",
        marginBottom: "2rem",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      {children}
      <span style={{ flex: 1, height: "0.5px", background: "var(--border)" }} />
    </div>
  );
}

/* ── Divider ─────────────────────────────────────────────────────── */
export function Divider() {
  return (
    <hr
      style={{
        border: "none",
        borderTop: "0.5px solid var(--border)",
        maxWidth: "920px",
        margin: "0 auto",
      }}
    />
  );
}
