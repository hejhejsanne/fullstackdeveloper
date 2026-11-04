"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/components/nav.css";
import { profile } from "@/data/profile";
import { siteNav, type NavItem } from "@/data/navigation";

const links = siteNav.filter((item) => item.href !== "/contact");
const contact = siteNav.find((item) => item.href === "/contact")!;

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLinkItem({ item, pathname, onNavigate }: { item: NavItem; pathname: string; onNavigate?: () => void }) {
  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={onNavigate}>
        {item.label} <span aria-hidden="true">↗</span>
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
    );
  }
  const current = isCurrent(pathname, item.href);
  return (
    <Link href={item.href} aria-current={current ? "page" : undefined} onClick={onNavigate}>
      {item.label}
    </Link>
  );
}

export default function Nav() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <Link href="/" className="nav-logo">
          {profile.domain}
        </Link>

        <ul className="nav-links" role="list">
          {links.map((item) => (
            <li key={item.href}><NavLinkItem item={item} pathname={pathname} /></li>
          ))}
          <li>
            <Link href={contact.href} className="btn-primary nav-cta" aria-current={isCurrent(pathname, contact.href) ? "page" : undefined}>
              {contact.label}
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="nav-burger"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          ref={burgerRef}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="visually-hidden">Menu</span>
          <span className="nav-burger-lines" aria-hidden="true"><span /><span /><span /></span>
        </button>
      </nav>

      <ul
        id="mobile-navigation"
        className="nav-mobile"
        role="list"
        hidden={!open}
      >
        {siteNav.map((item) => (
          <li key={item.href}><NavLinkItem item={item} pathname={pathname} onNavigate={close} /></li>
        ))}
      </ul>
    </header>
  );
}
