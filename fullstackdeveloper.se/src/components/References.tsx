"use client";

import React, { useState, useRef, useEffect } from "react";
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
      "Sanne har en naturlig ledarförmåga och ett driv som verkligen märks. Hennes förmåga att kombinera sina tekniska kunskaper med ett genuint öga för affären är något man sällan stöter på. ",
    full: "Sanne har en naturlig ledarförmåga och ett driv som verkligen märks. Under de senaste sex månaderna har hennes utveckling som fullstackutvecklare tagit stora kliv framåt, och hennes sätt att snabbt sätta sig in i både SEO och AI är imponerande.<br /><br /> Hon har också en förmåga att strukturera upp projekt på ett sätt som känns tryggt – man vet alltid var man står och vart man är på väg.<br /><br />  Det som verkligen sticker ut är hur hon kombinerar det tekniska med ett genuint öga för mig som kund – hon förstår inte bara hur något fungerar, utan varför det spelar roll.",
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
  {
    name: "Helena Johansson",
    title: "Senior Software Engineer / CEO, Klarr Utvecklingsbyrå AB",
    short:
      "Hon kommer ofta med lösningar som känns självklara i efterhand – hennes förmåga att se helheten och koppla samman detaljer är en av hennes starkaste egenskaper.",
    full: "Jag lärde känna Sanne först som student i två år och därefter som kollega i mitt team i sex månader. Som ledare för det tekniska teamet har jag haft möjlighet att följa hennes utveckling på nära håll, och i båda rollerna har hon gjort ett starkt intryck. <br /><br /> Sanne har en naturlig närvaro och tar plats på ett respektfullt sätt. Hon leder genom att lyssna och visa omtanke, samtidigt som hon vågar vara tydlig när det behövs. Balansen mellan omtanke och ärlighet, även i utmanande situationer, är mycket värdefull och bidrar till en miljö präglad av genuin respekt.<br /><br /> Något som tidigt blev tydligt i arbetet med Sanne är hennes förmåga att se det som andra missar. Hon kommer ofta med lösningar som känns självklara i efterhand, även inom områden där hon inte har full teknisk erfarenhet. Hennes naturliga förmåga att se helheten och koppla samman detaljer till konkreta lösningar är en av hennes starkaste egenskaper och något som konsekvent har bidragit med värde i teamets arbete. Flexibilitet präglar både Sannes sätt att tänka och att arbeta. Hon anpassar sig snabbt, tar till sig nya idéer och hittar sin roll även när förutsättningarna förändras. Det gör henne till någon man kan lita på, oavsett situation. <br /><br />Jag rekommenderar Sanne varmt. Den som får arbeta med henne får inte bara en flexibel och lösningsorienterad kollega, utan också någon som verkligen gör skillnad i teamet.",
    img: "/HelenaJ.jpeg",
    initials: "HJ",
    linkedin: "https://www.linkedin.com/in/helena-johansson-b3216384/",
  },
];

export default function References() {
  const [flipped, setFlipped] = useState<number | null>(null);
  const isDragging = useRef(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (flipped === null) return;
      const activeCard = cardRefs.current[flipped];
      if (activeCard && !activeCard.contains(e.target as Node)) {
        setFlipped(null);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);
    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, [flipped]);

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
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className={`references__scene${flipped === i ? " references__scene--flipped" : ""}`}
            onPointerDown={() => {
              isDragging.current = false;
            }}
            onPointerMove={() => {
              isDragging.current = true;
            }}
            onPointerUp={() => {
              if (!isDragging.current) {
                setFlipped(flipped === i ? null : i);
              }
            }}
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
                      onPointerUp={(e) => e.stopPropagation()}
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
