"use client";

import Link from "next/link";
import { useState } from "react";

const links: { href: string; label: string; external?: boolean }[] = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "https://github.com/hejhejsanne", label: "GitHub", external: true },
];

export default function NavMobile() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className="nav__burger"
        aria-label={open ? "Stäng meny" : "Öppna meny"}
        aria-expanded={open}
        aria-controls="nav-mobile-links"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul
        id="nav-mobile-links"
        className={`nav__links--mobile${open ? " nav__links--open" : ""}`}
        role="list"
      >
        {links.map(({ href, label, external }) => (
          <li key={href}>
            {external ? (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            ) : (
              <Link href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
