"use client";

import { useState } from "react";
import "@/styles/components/nav.css";
import Link from "next/link";
import ChatBot from "./ChatBot";

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
        <Link href="/" className="nav__logo" aria-label="Home">
          fullstack<span>developer</span>.se
        </Link>

        {/* Desktop länkar */}
        <ul className="nav__links" role="list">
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
            <a href="#" className="nav__ai-link" onClick={openChat}>
              Ai Assistans
            </a>
          </li>
        </ul>

        {/* Desktop höger */}
        <div className="nav__right">
          <div className="nav__status">
            <span className="nav__status-dot" aria-hidden="true" />
            Available for work
          </div>
          <ChatBot />
          <Link href="#contact" className="btn-primary">
            Contact me
          </Link>
        </div>

        {/* Hamburger (mobil) */}
        <button
          className="nav__burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobil dropdown */}
        <ul
          className={`nav__links--mobile ${open ? "nav__links--open" : ""}`}
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
          <li className="nav__mobile-chat">
            <ChatBot />
          </li>
        </ul>
      </nav>
    </header>
  );
}
