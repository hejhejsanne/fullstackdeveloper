import React from "react";
import "@/styles/nav.css";
import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <nav className="nav" aria-label="Huvudnavigation">
        <Link href="/" className="nav__logo" aria-label="Hem">
          fullstack<span>developer</span>.se
        </Link>

        <ul className="nav__links" role="list">
          {[
            { href: "#projekt", label: "Projekt" },
            { href: "#kompetenser", label: "Kompetenser" },
            { href: "#om-mig", label: "Om mig" },
            {
              href: "https://github.com/hejhejsanne",
              label: "GitHub",
              external: true,
            },
          ].map(({ href, label, external }) => (
            <li key={href}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#kontakt" className="btn-primary">
          Kontakta mig
        </a>
      </nav>
    </header>
  );
}
