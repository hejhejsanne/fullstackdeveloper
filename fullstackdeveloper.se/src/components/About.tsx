import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <section
      id="om-mig"
      className="section fade-in"
      aria-labelledby="om-heading"
    >
      <div className="section-label" id="om-heading">
        Om mig
      </div>

      <div className="about__grid">
        <div className="about__card about__card--full">
          <div className="about__card-title">Kort om mig</div>
          <p className="about__card-text">
            Fullstackutvecklare med stark problemlösningsförmåga och en metodisk
            inställning till tekniska utmaningar. Erfarenhet av JavaScript- och
            TypeScript-stacken med fokus på API-utveckling, komponentbaserad
            frontend och databasdesign. Examensarbete inom prompt engineering
            och stort intresse för AI-integration i webbapplikationer.
          </p>
        </div>

        <div className="about__card">
          <div className="about__card-title">Hur jag arbetar</div>
          <p className="about__card-text">
            Känd för uthållighet och tålamod i tekniska miljöer – jag stannar
            kvar tills stabila och hållbara lösningar är på plats. Har
            erfarenhet som mentor, Team Lead och teknisk projektledare, och
            värdesätter tydlig kommunikation lika högt som bra kod.
          </p>
        </div>

        <div className="about__card">
          <div className="about__card-title">Språk & utbildning</div>
          <p className="about__card-text">
            Javautvecklare – Full Stack Development, Teknikhögskolan Göteborg
            (2023–2025). Flytande på svenska, engelska och norska.
            Studentrepresentant 2024–2025.
          </p>
        </div>

        <div className="about__card">
          <div className="about__card-title">Ledarskap & mentorskap</div>
          <p className="about__card-text">
            Team Lead under LIA, teknisk projektledare i startupprojekt.
            Handleder och coachar utvecklingsstudenter, och sätter upp
            arbetsmiljöer som fungerar både på distans och på plats.
          </p>
        </div>

        <div className="about__card">
          <div className="about__card-title">Referenser</div>
          <p className="about__card-text">
            Rekommendationsbrev och referenser lämnas vid förfrågan. Kontakta
            mig via mail så ordnar jag fram det.
          </p>
        </div>
      </div>
    </section>
  );
}
