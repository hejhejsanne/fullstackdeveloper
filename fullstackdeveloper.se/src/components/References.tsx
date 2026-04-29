"use client";

import React, { useState } from "react";
import "@/styles/components/references.css";
import Image from "next/image";

interface Person {
  name: string;
  title: string;
  short: string;
  full: string;
  img?: string;
  initials?: string;
  linkedin?: string;
}

const data: Person[] = [
  {
    name: "Michael Baggelin",
    title: "CEO, Clever Click",
    short:
      "Sanne har en naturlig ledarförmåga och ett driv som verkligen märks.",
    full: "Sanne har en naturlig ledarförmåga och ett driv som verkligen märks. Under de senaste sex månaderna har hennes utveckling som fullstackutvecklare tagit stora kliv framåt, och hennes sätt att snabbt sätta sig in i både SEO och AI är imponerande.",
    img: "/MichaelB.jpeg",
    initials: "MB",
    linkedin: "https://www.linkedin.com/in/michael-baggelin/",
  },

  {
    name: "Zana Kadir",
    title: "LIA-studerande, Teknikhögskolan",
    short:
      "För mig har hon inte bara varit en teamledare, utan också en mentor som haft stor påverkan på min utveckling.",
    full: "Under den tiden har jag fått en tydlig bild av hennes styrka som både projektledare och utvecklare. Hon är strukturerad, driven och väldigt organiserad i sitt arbetssätt. Hon har en tydlig plan, följer upp arbetet noggrant och ser till att teamet hela tiden rör sig framåt mot målen. <br /><br />Som utvecklare är hon tekniskt kunnig, noggrann och lösningsorienterad. Hon arbetar metodiskt och ser till att saker blir rätt från början. Samtidigt är hon generös med sin kunskap och hjälper andra att förstå, vilket gör att hela teamet utvecklas. <br /><br />Det som verkligen gör skillnad är hur hon kombinerar detta med sin personlighet. Hon är varm, rak och genuint omtänksam. Hon skapar en trygg miljö där man vågar ställa frågor och växa, och hon finns alltid där för att stötta när det behövs. <br /><br />För mig har hon inte bara varit en teamledare, utan också en mentor som haft stor påverkan på min utveckling. <br /><br />Jag kan verkligen rekommendera henne till alla som söker en driven, kompetent och pålitlig person att arbeta med.",
    img: "/ZanaK.jpeg",
    initials: "ZK",
    linkedin: "https://www.linkedin.com/in/zana-kadir-233b54b2/",
  },
  // {
  //   name: "Mia Stefansdotter",
  //   title: "Klasskamrat, Teknikhögskolan",
  //   short: "Referens text kommer snart",
  //   full: "Referens text kommer snart",
  //   initials: "MS",
  //   linkedin: "https://www.linkedin.com/in/mia-stefansdotter-8930b2226/",
  // },
  {
    name: "Helena Johansson",
    title: "CEO, Klarr Utvecklingsbyrå AB",
    short: "Referens text kommer snart",
    full: "Referens text kommer snart",
    img: "/HelenaJ.jpeg",
    initials: "HJ",
    linkedin: "https://www.linkedin.com/in/helena-johansson-b3216384/",
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
                  <Image
                    src={person.img}
                    alt={person.name}
                    width={92}
                    height={92}
                    className="references__avatar"
                  />
                ) : (
                  <div className="references__initials">{person.initials}</div>
                )}
                <p className="references__name">{person.name}</p>
                <p className="references__role">{person.title}</p>
                <p className="references__quote">{person.short}</p>
                <span className="references__hint">
                  Click here to read more →
                </span>
              </div>

              <div className="references__back">
                <p
                  className="references__back-text"
                  dangerouslySetInnerHTML={{ __html: person.full }}
                />
                <div className="references__back-footer">
                  <p className="references__back-name">{person.name}</p>
                  <p className="references__back-role">{person.title}</p>
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="references__back-linkedin"
                      onClick={(e) => e.stopPropagation()}
                    >
                      LinkedIn →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
