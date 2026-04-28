import type { Metadata } from "next";
import "@/styles/components/about.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full stack developer based in Gothenburg. I lead teams, mentor developers, and build things that actually work — from idea to shipped product.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Sanne Delin",
    description:
      "Full stack developer based in Gothenburg. I lead teams, mentor developers, and build things that actually work — from idea to shipped product.",
    url: "/about",
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
};

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
          <div className="about-title">The short version</div>
          <p className="about-text">
            Full stack developer. I solve problems — sometimes through doors
            nobody thought to check. That&rsquo;s not something I&rsquo;m
            particularly proud of, it&rsquo;s just how my brain tends to move. I
            think wide before I think deep: zoom out, figure out what&rsquo;s
            actually broken, then zoom back in and deal with it. Hand me
            something genuinely difficult — real stakes, real people, something
            worth the effort — and honestly? That&rsquo;s where I do my best
            work.
          </p>
        </div>
        <div className="about-card">
          <div className="about-title">How I actually work</div>
          <p className="about-text">
            The word people keep using is persistent. Patient. The type who
            stays until it&rsquo;s right — not just deployed, not just
            &ldquo;that&rsquo;ll do for now.&rdquo; Solid. Repeatable. That
            standard doesn&rsquo;t shift depending on the deadline.
          </p>
          <br />
          <p className="about-text">
            I&rsquo;ve led teams, mentored junior devs, and steered technical
            projects through the kind of real-world chaos no spec doc ever
            prepares you for. Somewhere in all of that I learned something that
            took longer than it probably should have: communication isn&rsquo;t
            a soft skill. It&rsquo;s the infrastructure. You can write genuinely
            beautiful code and still watch a project fall apart because people
            stopped talking to each other honestly.
          </p>
          <br />
          <p className="about-text">
            Also — and I realize this shouldn&rsquo;t be a controversial opinion
            — I think enjoying the work matters. Happy teams ship better
            products. I&rsquo;ve watched it happen enough times to stop treating
            it like a coincidence.
          </p>
        </div>
        <div className="about-card">
          <div className="about-title">Education &amp; languages</div>
          <p className="about-text">
            Object Oriented Programming — AI specialisation
            <br />
            NBI Handelsakademin, Gothenburg (2022–2023)
            <br />
            <br />
            Java Developer — Full Stack
            <br />
            Teknikhögskolan, Gothenburg (2023–2025)
            <br />
            Student representative, 2024–2025
            <br />
            <br />
            Swedish, English, Norwegian — all working fluently.
          </p>
        </div>
        <div className="about-card">
          <div className="about-title">Leadership &amp; mentoring</div>
          <p className="about-text">
            Led both backend and frontend teams during LIA. Moved into a
            technical project manager role at a startup and figured it out in
            real time, as the stakes quietly climbed. My approach to leading is
            pretty simple: everyone gets the same space, the same voice, no
            hierarchy of opinions.
          </p>
          <br />
          <p className="about-text">
            What I&rsquo;m trying to build — every single time — is a team that
            works hard and actually trusts each other. Because when the
            difficult moment arrives, and it always does, that&rsquo;s the only
            thing that holds.
          </p>
        </div>
        <div className="about-card">
          <div className="about-title">References</div>
          <p className="about-text">
            Available on request — happy to share contact details directly. In
            the meantime, there&rsquo;s already plenty to look through below.
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
