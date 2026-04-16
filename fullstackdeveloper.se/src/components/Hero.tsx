// src/components/Hero.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import "@/styles/hero.css";
import CVDownloadModal from "@/components/CVDownloadModal";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="hero" aria-labelledby="hero-heading">
      {/* Mobil-topp: bild + status — dold på desktop */}
      <div className="hero__mobile-top">
        <div className="hero__photo-wrap">
          <Image
            src="/sanne.jpg"
            alt="Sanne Delin"
            fill
            className="hero__photo"
            priority
            sizes="(max-width: 480px) 50vw, (max-width: 720px) 55vw"
          />
        </div>
        <div className="hero__mobile-status">
          <span className="hero__status-dot" aria-hidden="true" />
          Available for work
        </div>
      </div>

      <div className="hero__left">
        <div className="hero__tag" aria-hidden="true">
          Full Stack Developer · Gothenburg
        </div>
        <h1 className="hero__heading" id="hero-heading">
          Where others see <em>problems</em>, I build solutions.
        </h1>
        <p className="hero__desc">
          I take on complex challenges across technology and leadership - from
          building systems and structuring processes to mentoring, teaching, and
          guiding startups from idea to execution.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="btn-primary">
            See my projects
          </a>
          <button className="btn-secondary" onClick={() => setShowModal(true)}>
            Download CV
          </button>
        </div>
      </div>

      {/* Desktop-bild — dold på mobil */}
      <div className="hero__right">
        <div className="hero__photo-wrap">
          <Image
            src="/sanne.jpg"
            alt="Sanne Delin"
            fill
            className="hero__photo"
            priority
            sizes="(max-width: 920px) 45vw, 400px"
          />
        </div>
      </div>

      {showModal && <CVDownloadModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
