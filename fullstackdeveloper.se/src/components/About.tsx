import React from "react";
import "@/styles/components/about.css";

export default function About() {
  return (
    <section
      suppressHydrationWarning
      id="about"
      className="section fade-in"
      aria-labelledby="about-heading"
    >
      <div className="section-label" id="about-heading">
        About me
      </div>
      <div className="about-grid">
        <div className="about-card about-card-wide">
          <div className="about-title">In short</div>
          <p className="about-text">
            Full stack developer who finds a way — sometimes through routes you
            wouldn&rsquo;t have thought to look. That&rsquo;s not a boast,
            it&rsquo;s just how my brain works. I&rsquo;m broad by nature: I can
            zoom out, read the whole picture, spot where things are actually
            going wrong, then zoom back in and fix it. Give me a creative
            problem, real energy in the room, and something worth building — and
            I&rsquo;m genuinely in my element.
          </p>
        </div>
        <div className="about-card">
          <div className="about-title">How I work</div>
          <p className="about-text">
            People tend to describe me as persistent. Patient. The kind of
            person who stays until something is actually right — not just
            shipped, not just &ldquo;good enough for now.&rdquo; Stable.
            Sustainable. That&rsquo;s the bar.
          </p>
          <br />
          <p className="about-text">
            I&rsquo;ve led teams, mentored developers, managed technical
            projects across messy real-world conditions. And somewhere along the
            way I figured out that communication matters just as much as clean
            code — maybe more, honestly. You can write beautiful software and
            still watch a project fall apart because nobody was talking to each
            other properly.
          </p>
          <br />
          <p className="about-text">
            Oh, and I think having fun together makes the work better. Not a
            controversial opinion, but apparently a rare priority. Happy teams
            build better products. I&rsquo;ve seen it.
          </p>
        </div>
        <div className="about-card">
          <div className="about-title">Education &amp; languages</div>
          <p className="about-text">
            Object Oriented Programming — AI focus
            <br />
            NBI Handelsakademin, Gothenburg (2022–2023)
            <br />
            <br />
            Java Developer — Full Stack Development
            <br />
            Teknikhögskolan, Gothenburg (2023–2025)
            <br />
            Student representative, 2024–2025
            <br />
            <br />
            Swedish, English, Norwegian — all fluent.
          </p>
        </div>
        <div className="about-card">
          <div className="about-title">Leadership &amp; mentoring</div>
          <p className="about-text">
            Led both backend and frontend teams during LIA. Stepped into a
            technical project manager role at a startup and figured it out as
            the stakes got real. I lead with fairness — everyone gets equal
            space, equal voice, no exceptions.
          </p>
          <br />
          <p className="about-text">
            What I&rsquo;m actually trying to build, every time, is a team that
            works hard and genuinely trusts each other. Because when something
            difficult shows up — and it always does — that foundation is
            everything.
          </p>
        </div>
        <div className="about-card">
          <div className="about-title">References</div>
          <p className="about-text">
            Available on request. Happy to share contact details directly. In
            the meantime, feel free to browse what&rsquo;s already there.
          </p>
          <br />
          <a href="#references" className="about-link">
            Go to references →
          </a>
        </div>
      </div>
    </section>
  );
}
