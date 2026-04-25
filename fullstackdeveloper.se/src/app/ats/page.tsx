// src/app/about/page.tsx
import type { Metadata } from "next";
import "@/styles/components/ats.css";

export const metadata: Metadata = {
  title: "Hire a Full Stack Developer in Sweden | Sanne Delin",
  description:
    "Looking to hire a full stack developer in Sweden? Sanne Delin is an experienced freelance full stack developer based in Gothenburg, available for freelance, consultant, and full-time roles across Sweden.",
  keywords: [
    "full stack developer Sweden",
    "hire full stack developer Sweden",
    "freelance full stack developer Sweden",
    "full stack developer Gothenburg",
    "Next.js developer Sweden",
    "React developer Sweden",
    "TypeScript developer Sweden",
    "webbutvecklare Sverige",
    "anlita webbutvecklare",
  ],
  alternates: {
    canonical: "https://fullstackdeveloper.se/ats",
  },
  openGraph: {
    title: "Hire a Full Stack Developer in Sweden | Sanne Delin",
    description:
      "Experienced full stack developer based in Gothenburg, Sweden. Available for freelance, consultant, and full-time roles. React, Next.js, Node.js, TypeScript.",
    url: "https://fullstackdeveloper.se/ats",
    siteName: "Sanne Delin – Full Stack Developer",
    type: "website",
  },
};

export default function ATSPage() {
  return (
    <div className="ats-page">
      <section id="ats" className="section">
        <span className="section-label">ATS</span>
        <div className="ats-grid">
          <div className="ats-card ats-card-wide">
            <h2 className="ats-heading">My CV is ATS-optimized</h2>
            <p className="ats-intro">and here&rsquo;s why that matters.</p>
            <p className="ats-intro">
              When I graduated this past summer, I quickly realized my
              &rsquo;pretty&rsquo; Canva CV wasn&rsquo;t getting me anywhere. So
              I started digging. Turns out, almost every company and recruitment
              firm uses an ATS — an Applicant Tracking System — that filters CVs
              by relevant keywords before a human ever sees them. So I rebuilt
              my CV around that, and suddenly I started landing interviews.
            </p>
          </div>
        </div>

        <div className="ats-grid">
          <div className="ats-card ats-card-wide">
            <p className="ats-title">What is an ATS?</p>
            <p className="ats-text">
              An Applicant Tracking System is automated software that helps
              recruiters identify relevant keywords and phrases in applications.
              It scans and indexes your CV to match it against the requirements
              of the role — acting as a digital gatekeeper that decides whether
              your application ever reaches a human recruiter.
            </p>
          </div>

          <div className="ats-card">
            <p className="ats-title">How common is it?</p>
            <p className="ats-text">
              Most employers today use ATS software to sort, analyze, and rank
              applications. That means your CV is often reviewed by an algorithm
              before it ever lands on a recruiter&rsquo;s desk. It isn&rsquo;t
              necessarily AI — but it can use AI elements — and it will compare
              your CV directly against the job posting.
            </p>
          </div>

          <div className="ats-card">
            <p className="ats-title">No single algorithm</p>
            <p className="ats-text">
              There are hundreds of different ATS platforms — Teamtailor,
              Workday, Lever, Greenhouse, to name a few — and they all work a
              little differently. What ranks highly in one system might not in
              another. So there&rsquo;s no magic formula that works everywhere.
            </p>
          </div>
        </div>

        <div className="ats-grid">
          <div className="ats-card ats-card-wide">
            <h3 className="ats-subheading">How does it work in practice?</h3>
            <p className="ats-intro">
              There is a general pattern that holds across most systems:
            </p>
            <ol className="ats-steps">
              <li>
                <div>
                  <strong>Parsing</strong>
                  <br />
                  The system breaks your CV down into parts: contact info,
                  education, experience, skills. If your layout is messy, it
                  misreads your information before it even gets to the matching
                  stage.
                </div>
              </li>
              <li>
                <div>
                  <strong>Keyword matching</strong>
                  <br />
                  Your CV is compared against the job posting. The more matching
                  terms, the higher your score. This is where most CVs get
                  filtered out.
                </div>
              </li>
              <li>
                <div>
                  <strong>Ranking</strong>
                  <br />
                  Candidates are sorted by match score. The recruiter typically
                  only sees the top 10–20%.
                </div>
              </li>
              <li>
                <div>
                  <strong>Human review</strong>
                  <br />
                  Only now does a real person read your application. Though
                  &rsquo;read&rsquo; might be generous. The often-quoted
                  &ldquo;6-second rule&rdquo; is largely a myth spread by
                  resume-writing services, but a{" "}
                  <a
                    href="https://www.resumego.net/research/how-much-time-spend-resume/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    2024 ResumeGo survey of 418 recruiters
                  </a>{" "}
                  found that 81% spend less than a minute on a CV during initial
                  screening.
                  <br />
                  <br />
                  <strong>
                    Which raises the question — if you get rejected for lacking
                    experience, did they really read it at all?
                  </strong>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <div className="ats-formula">
          <strong>Right keywords</strong> (from the job posting) +{" "}
          <strong>clean layout</strong> (readable by machines) +{" "}
          <strong>clear structure</strong> (standard headings) +{" "}
          <strong>no typos</strong> = high ranking.
          <br />
          <br />
          It&rsquo;s not more complicated than that at its core — but it does
          mean tailoring your CV for every single application. Which, honestly,
          is the step most people skip.
        </div>

        <div className="ats-grid">
          <div className="ats-card ats-card-wide">
            <h3 className="ats-subheading">
              Tips for writing an ATS-friendly CV
            </h3>
            <ul className="ats-tips">
              <li>
                <strong>Speak the algorithm&rsquo;s language</strong>
                <br />
                Read the job posting carefully and mirror its exact wording. If
                the ad says &ldquo;project management&rdquo;, don&rsquo;t write
                &ldquo;led projects&rdquo;. ATS systems match strings, not
                meaning — so use the same terms the employer uses, and tailor
                your CV for each application.
              </li>
              <li>
                <strong>Boring is beautiful (at least for your layout)</strong>
                <br />
                That beautifully designed Canva CV with icons, columns, and
                custom fonts? The ATS probably can&rsquo;t read it. Stick to a
                clean, single-column layout with standard fonts. No graphics, no
                text boxes, no tables. Save the creativity for the interview.
              </li>
              <li>
                <strong>Use headings the system actually recognizes</strong>
                <br />
                ATS software is trained to look for familiar section names like
                &ldquo;Experience&rdquo;, &ldquo;Education&rdquo;, and
                &ldquo;Skills&rdquo;. Creative alternatives like &ldquo;My
                Journey&rdquo; or &ldquo;What I Bring&rdquo; might sound
                personal, but they&rsquo;ll likely confuse the system. Keep it
                conventional. Save as .docx or PDF — never as an image or
                uncommon format.
              </li>
              <li>
                <strong>Typos are a surprisingly big deal</strong>
                <br />
                ATS systems don&rsquo;t autocorrect. If you write
                &ldquo;Javascrpit&rdquo; instead of &ldquo;JavaScript&rdquo;,
                the system won&rsquo;t know what you mean — and that keyword
                match is lost. Proofread carefully, keep formatting consistent,
                and make sure the same information looks the same throughout
                your document.
              </li>
            </ul>
            <p className="ats-intro">
              A well-optimized CV helps you get past the automated filter — but
              remember, it&rsquo;s still a human who decides if you&rsquo;re the
              right fit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
