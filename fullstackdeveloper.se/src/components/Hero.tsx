import React from "react";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      {/* ── Left ── */}
      <div className="hero__left">
        <div className="hero__tag" aria-hidden="true">
          Fullstack Developer · Göteborg
        </div>

        <h1 className="hero__heading" id="hero-heading">
          Kod med <em>syfte</em> och tydlig process.
        </h1>

        <p className="hero__desc">
          Fullstackutvecklare med erfarenhet av JavaScript- och
          TypeScript-stacken, AI-integration och tekniskt ledarskap. Känd för
          uthållighet och metodisk problemlösning – från problemdefinition till
          driftsatt lösning.
        </p>

        <div className="hero__actions">
          <a href="#projekt" className="btn-primary">
            Se mina projekt
          </a>
          <a href="/cv.pdf" className="btn-secondary" download>
            Ladda ned CV
          </a>
        </div>
      </div>

      {/* ── Right – mini cards ── */}
      <div className="hero__cards" aria-label="Snabbfakta">
        <div className="hero__mini-card">
          <div className="hero__mini-label">Status</div>
          <div className="hero__mini-value">
            <span className="status-dot" aria-hidden="true" />
            Tillgänglig för uppdrag
          </div>
        </div>

        <div className="hero__mini-card">
          <div className="hero__mini-label">Fokuserar på</div>
          <div className="hero__mini-value">Fullstack · AI · Tech Lead</div>
        </div>

        <div className="hero__mini-card">
          <div className="hero__mini-label">Stack</div>
          <div className="hero__mini-value">TypeScript · React · Node.js</div>
        </div>
      </div>
    </section>
  );
}
