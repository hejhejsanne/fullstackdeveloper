"use client";

import { useState } from "react";
import Image from "next/image";
import "@/styles/components/hero.css";
import CVDownloadModal from "@/components/CVDownloadModal";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
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
          Where others see <em>problems</em>, I build solutions.
        </h1>
        <p className="hero-desc">
          I take on complex challenges across technology and leadership — from
          building systems and structuring processes to mentoring, teaching, and
          guiding startups from idea to execution.
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
          <button className="btn-primary-2" onClick={() => setShowModal(true)}>
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
  );
}
