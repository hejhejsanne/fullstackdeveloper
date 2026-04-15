import React from 'react';
import '@/styles/about.css';

export default function About() {
  return (
    <section id="about" className="section fade-in" aria-labelledby="about-heading">
      <div className="section-label" id="about-heading">About me</div>
      <div className="about__grid">
        <div className="about__card about__card--full">
          <div className="about__card-title">In short</div>
          <p className="about__card-text">
            Full stack developer with strong problem-solving skills and a methodical approach
            to technical challenges. Experienced in the JavaScript and TypeScript stack with
            a focus on API development, component-based frontends and database design.
            Thesis in prompt engineering and a genuine interest in AI integration in web applications.
          </p>
        </div>
        <div className="about__card">
          <div className="about__card-title">How I work</div>
          <p className="about__card-text">
            Known for persistence and patience in technical environments – I stay until stable
            and sustainable solutions are in place. Experienced as a mentor, Team Lead and
            technical project manager, and value clear communication just as highly as good code.
          </p>
        </div>
        <div className="about__card">
          <div className="about__card-title">Education & languages</div>
          <p className="about__card-text">
            Java Developer – Full Stack Development, Teknikhögskolan Gothenburg (2023–2025).
            Fluent in Swedish, English and Norwegian. Student representative 2024–2025.
          </p>
        </div>
        <div className="about__card">
          <div className="about__card-title">Leadership & mentoring</div>
          <p className="about__card-text">
            Team Lead during LIA, technical project manager in a startup project. Mentors and
            coaches development students, and sets up work environments that function both
            remotely and on-site.
          </p>
        </div>
        <div className="about__card">
          <div className="about__card-title">References</div>
          <p className="about__card-text">
            Recommendation letters and references available on request.
            Reach out by email and I will arrange it.
          </p>
        </div>
      </div>
    </section>
  );
}
