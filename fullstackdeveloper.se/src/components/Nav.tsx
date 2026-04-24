"use client";

import { useState } from "react";
import "@/styles/components/nav.css";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

const navLinks: NavLink[] = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#ats", label: "ATS" },
  { href: "#references", label: "References" },
  { href: "https://github.com/hejhejsanne", label: "GitHub", external: true },
];

export default function Nav() {
  const [open, setOpen] = useState<boolean>(false);

  const openChat = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event("open-aisan"));
  };

  return (
    <header>
      <nav className="nav" aria-label="Main navigation">
        <Link href="/" className="nav-logo" aria-label="Home">
          fullstack<span>developer</span>.se
        </Link>

        <ul className="nav-links" role="list">
          {navLinks.map(({ href, label, external }: NavLink) => (
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
          <li key="chatbot">
            <a href="#" className="nav-ai-link" onClick={openChat}>
              Ai Assistans
            </a>
          </li>
        </ul>

        <div className="nav-right">
          <div className="nav-status">
            <span className="nav-status-dot" aria-hidden="true" />
            Available for work
          </div>
          <Link href="#contact" className="btn-primary">
            Contact me
          </Link>
        </div>

        <button
          className="nav-burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul
          className={`nav-links-mobile ${open ? "nav-links-open" : ""}`}
          role="list"
        >
          {navLinks.map(({ href, label, external }: NavLink) => (
            <li key={href}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li key="chatbot-mobile">
            <a
              href="#"
              onClick={(e) => {
                openChat(e);
                setOpen(false);
              }}
            >
              Ai Assistans
            </a>
          </li>
          <li>
            <Link href="#contact" onClick={() => setOpen(false)}>
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
