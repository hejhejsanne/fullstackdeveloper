"use client";

import { useState } from "react";
import Image from "next/image";
import "@/styles/components/hero.css";
import CVDownloadModal from "@/components/CVDownloadModal";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-mobile-top">
          <div className="hero-mobile-status">
            <span className="hero-status-dot" aria-hidden="true" />
            Available for work
          </div>
        </div>

        <div className="hero-left">
          <div className="hero-tag" aria-hidden="true">
            Full Stack Developer · Gothenburg
          </div>
          <h1 className="hero-heading" id="hero-heading">
            Where most people see a mess, I see a <em>blueprint.</em>
          </h1>
          <p className="hero-desc">
            Complex problems don&rsquo;t scare me — honestly, they&rsquo;re kind
            of my thing. Whether that&rsquo;s building systems from the ground
            up, untangling broken processes, or sitting across from a founder
            who has a brilliant idea and absolutely no idea what to do next.
          </p>
          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See my projects
            </button>
            <button
              className="btn-primary-2"
              onClick={() => setShowModal(true)}
            >
              Download CV
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-photo">
            <Image
              src="/sanne.jpg"
              alt="Sanne Delin"
              fill
              className="hero-photo-img"
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 600px) 50vw, (max-width: 768px) 55vw, 400px"
            />
          </div>
        </div>

        {showModal && <CVDownloadModal onClose={() => setShowModal(false)} />}
      </section>

      <section className="hero-cards" aria-label="About me">
        <div className="hero-cards-grid">
          <div className="hero-card">
            <p className="hero-card-text">
              My work cuts across a lot of territory. Technology, leadership,
              mentoring, teaching — not because I couldn&rsquo;t pick a lane,
              but because these things are genuinely connected. A well-built
              system still fails if the people running it aren&rsquo;t led well.
              A startup with great tech still dies if the execution isn&rsquo;t
              there. I care about the whole picture, not just my corner of it.{" "}
              <br />
              <br />
              I&rsquo;ve helped teams get structured when everything felt
              chaotic. Guided startups from &ldquo;we have an idea&rdquo; all
              the way through to actually shipping something real. Mentored
              people who needed someone to believe in their potential before
              they believed in it themselves. And built things — actual, working
              things — when the brief was basically just &ldquo;figure it
              out.&rdquo;
            </p>

            <p className="hero-card-emphasis">
              <br /> That&rsquo;s what I do. I figure it out.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
