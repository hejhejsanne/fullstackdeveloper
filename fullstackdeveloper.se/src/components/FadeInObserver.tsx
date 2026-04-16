"use client";
/**
 * FadeInObserver
 *
 * A global, side-effect-only client component that renders nothing (returns null).
 * Drop it once in layout.tsx and it handles all fade-in animations site-wide.
 *
 * How it works:
 * - After hydration (inside useEffect), it queries every element with .fade-in
 * - Uses IntersectionObserver to watch when each element scrolls into the viewport
 * - Once visible, adds the .visible class which triggers the CSS transition
 * - Immediately stops watching that element (unobserve) to save memory
 *
 * Fallback:
 * - If IntersectionObserver is not supported, adds .visible to all elements instantly
 *
 * Why useEffect + initialized ref:
 * - useEffect only runs on the client, never during SSR — prevents hydration mismatch
 * - initialized ref prevents the observer from being set up twice in React Strict Mode
 *
 * CSS contract (globals.css):
 * - .fade-in          → element starts invisible (opacity: 0, translated down)
 * - .fade-in.visible  → element transitions to full opacity and position
 */

import { useEffect, useRef } from "react";

export default function FadeInObserver() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const els = document.querySelectorAll(".fade-in");

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
