import React from "react";
import "@/styles/nav.css";
import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <nav className="nav" aria-label="Main navigation">
        <Link href="/" className="nav__logo" aria-label="Home">
          fullstack<span>developer</span>.se
        </Link>
        <ul className="nav__links" role="list">
          {[
            { href: "#projects", label: "Projects" },
            { href: "#skills", label: "Skills" },
            { href: "#about", label: "About" },
            { href: "#references", label: "References" },
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

        {/* Status badge + Contact me grupperade till höger */}
        <div className="nav__right">
          <div className="nav__status">
            <span className="nav__status-dot" aria-hidden="true" />
            Available for work
          </div>
          <Link href="#contact" className="btn-primary">
            Contact me
          </Link>
        </div>
      </nav>
    </header>
  );
}
