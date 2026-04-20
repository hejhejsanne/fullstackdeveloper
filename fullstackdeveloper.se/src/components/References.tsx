"use client";

import React, { useState } from "react";
import "@/styles/references.css";

interface Person {
  name: string;
  title: string;
  short: string;
  full: string;
  img?: string;
  initials?: string;
}

const data: Person[] = [
  {
    name: "Michael Baggelin",
    title: "CEO, Clever Click",
    short: "Sanne är en naturlig ledare",
    full: "Sanne är en naturlig ledare med bakgrund som chef och projektledare, vilket märks tydligt. Hennes AI-kunskaper är grymma – och hennes utvecklingskurva det senaste 6 månaderna är riktigt imponerande.",
    initials: "MB",
  },

  {
    name: "Mia Eriksson",
    title: "Klasskamrat, Teknikhögskolan",
    short: "Referens text kommer snart",
    full: "Referens text kommer snart",
    initials: "ME",
  },
  {
    name: "Helena Johansson",
    title: "CEO, Klarr Utvecklingsbyrå AB",
    short: "Referens text kommer snart",
    full: "Referens text kommer snart",
    initials: "ME",
  },
];

export default function References() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section
      suppressHydrationWarning
      id="references"
      className="section fade-in"
      aria-labelledby="references-heading"
    >
      <div className="section-label" id="references-heading">
        References
      </div>
      <div className="references__grid">
        {data.map((person, i) => (
          <div
            key={i}
            className={`references__scene${flipped === i ? " references__scene--flipped" : ""}`}
            onClick={() => setFlipped(flipped === i ? null : i)}
          >
            <div className="references__inner">
              <div className="references__front">
                {person.img ? (
                  <image
                    src={person.img}
                    alt={person.name}
                    className="references__avatar"
                  />
                ) : (
                  <div className="references__initials">{person.initials}</div>
                )}
                <p className="references__name">{person.name}</p>
                <p className="references__role">{person.title}</p>
                <p className="references__quote">"{person.short}"</p>
                <span className="references__hint">
                  Klicka för att läsa mer
                </span>
              </div>

              <div className="references__back">
                <p className="references__back-text">"{person.full}"</p>
                <div className="references__back-footer">
                  <p className="references__back-name">{person.name}</p>
                  <p className="references__back-role">{person.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
