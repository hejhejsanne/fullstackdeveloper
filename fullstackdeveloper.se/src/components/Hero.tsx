import Image from "next/image";
import "@/styles/hero.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__left">
        <div className="hero__tag" aria-hidden="true">
          Full Stack Developer · Gothenburg
        </div>
        <h1 className="hero__heading" id="hero-heading">
          Where others see <em>problems</em> I build solutions.
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
          <Link href="/cv.pdf" className="btn-secondary" download>
            Download CV
          </Link>
        </div>
      </div>

      <div className="hero__right">
        <div className="hero__photo-wrap">
          <Image
            src="/sanne.jpg"
            alt="Sanne Delin"
            fill
            className="hero__photo"
            priority
          />
        </div>
      </div>
      <div className="hero__bottom">
        <div className="hero__cards" aria-label="Quick facts">
          <div className="hero__mini-card">
            <div className="hero__mini-label">Status</div>
            <div className="hero__mini-value">
              <span className="status-dot" aria-hidden="true" />
              Available for work
            </div>
          </div>
          {/* <div className="hero__mini-card">
            <div className="hero__mini-label">Focusing on</div>
            <div className="hero__mini-value">
              Fullstack Development · AI · Tech Lead
            </div>
          </div> */}
          {/* <div className="hero__mini-card">
            <div className="hero__mini-label">Stack</div>
            <div className="hero__mini-value">TypeScript · React · Node.js</div>
          </div> */}
          {/* <div className="hero__mini-card">
            <div className="hero__mini-label">Education</div>
            <div className="hero__mini-value">
              Java Developer – Full Stack, Teknikhögskolan 2025
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
