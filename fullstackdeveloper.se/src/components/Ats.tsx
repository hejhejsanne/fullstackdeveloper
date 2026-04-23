import "@/styles/ats.css";

export default function ATS() {
  return (
    <section id="ats" className="section">
      <span className="section-label">ATS</span>
      <div className="ats__grid">
        <div className="ats__card ats__card--full">
          <h2 className="ats__heading">My CV is ATS-optimized </h2>

          <p className="ats__intro">and here&apos;s why that matters.</p>

          <p className="ats__intro">
            When I graduated this past summer, I quickly realized my
            &apos;pretty&apos; Canva CV wasn&apos;t getting me anywhere. So I
            started digging. Turns out, almost every company and recruitment
            firm uses an ATS — an Applicant Tracking System — that filters CVs
            by relevant keywords before a human ever sees them. So I rebuilt my
            CV around that, and suddenly I started landing interviews.
          </p>
        </div>
      </div>

      <div className="ats__grid">
        <div className="ats__card ats__card--full">
          <p className="ats__card-title">What is an ATS?</p>
          <p className="ats__card-text">
            An Applicant Tracking System is automated software that helps
            recruiters identify relevant keywords and phrases in applications.
            It scans and indexes your CV to match it against the requirements of
            the role — acting as a digital gatekeeper that decides whether your
            application ever reaches a human recruiter.
          </p>
        </div>

        <div className="ats__card">
          <p className="ats__card-title">How common is it?</p>
          <p className="ats__card-text">
            Most employers today use ATS software to sort, analyze, and rank
            applications. That means your CV is often reviewed by an algorithm
            before it ever lands on a recruiter&apos;s desk. It isn&apos;t
            necessarily AI — but it can use AI elements — and it will compare
            your CV directly against the job posting.
          </p>
        </div>

        <div className="ats__card">
          <p className="ats__card-title">No single algorithm</p>
          <p className="ats__card-text">
            There are hundreds of different ATS platforms — Teamtailor, Workday,
            Lever, Greenhouse, to name a few — and they all work a little
            differently. What ranks highly in one system might not in another.
            So there&apos;s no magic formula that works everywhere.
          </p>
        </div>
      </div>
      <div className="ats__grid">
        <div className="ats__card ats__card--full">
          <h3 className="ats__subheading">How does it work in practice?</h3>
          <p className="ats__intro">
            There is a general pattern that holds across most systems:
          </p>

          <ol className="ats__steps">
            <li>
              <div>
                <strong>Parsing</strong> <br /> The system breaks your CV down
                into parts: contact info, education, experience, skills. If your
                layout is messy, it misreads your information before it even
                gets to the matching stage.
              </div>
            </li>
            <li>
              <div>
                <strong>Keyword matching</strong> <br /> Your CV is compared
                against the job posting. The more matching terms, the higher
                your score. This is where most CVs get filtered out.
              </div>
            </li>
            <li>
              <div>
                <strong>Ranking</strong> <br /> Candidates are sorted by match
                score. The recruiter typically only sees the top 10–20%.
              </div>
            </li>
            <li>
              <div>
                <strong>Human review</strong> <br /> Only now does a real person
                read your application. Though &apos;read&apos; might be
                generous. The often-quoted &quot;6-second rule&quot; is largely
                a myth spread by resume-writing services, but a{" "}
                <a
                  href="https://www.resumego.net/research/how-much-time-spend-resume/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  2024 ResumeGo survey of 418 recruiters
                </a>{" "}
                found that 81% spend less than a minute on a CV during initial
                screening. <br /> <br />
                <strong>
                  Which raises the question - if you get rejected for lacking
                  experience, did they really read it at all?
                </strong>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div className="ats__formula">
        <strong>Right keywords</strong> (from the job posting) +{" "}
        <strong>clean layout</strong> (readable by machines) +{" "}
        <strong>clear structure</strong> (standard headings) +{" "}
        <strong>no typos</strong> = high ranking.
        <br />
        <br />
        It&apos;s not more complicated than that at its core — but it does mean
        tailoring your CV for every single application. Which, honestly, is the
        step most people skip.
      </div>
      <div className="ats__grid">
        <div className="ats__card ats__card--full">
          <h3 className="ats__subheading">
            Tips for writing an ATS-friendly CV
          </h3>
          <ul className="ats__tips">
            <li>
              <strong>Speak the algorithm&apos;s language</strong> <br />
              Read the job posting carefully and mirror its exact wording. If
              the ad says &quot;project management&quot;, don&apos;t write
              &quot;led projects&quot;. ATS systems match strings, not meaning —
              so use the same terms the employer uses, and tailor your CV for
              each application.
            </li>
            <li>
              <strong>Boring is beautiful (at least for your layout)</strong>{" "}
              <br />
              That beautifully designed Canva CV with icons, columns, and custom
              fonts? The ATS probably can&apos;t read it. Stick to a clean,
              single-column layout with standard fonts. No graphics, no text
              boxes, no tables. Save the creativity for the interview.
            </li>
            <li>
              <strong>Use headings the system actually recognizes</strong>{" "}
              <br /> ATS software is trained to look for familiar section names
              like &quot;Experience&quot;, &quot;Education&quot;, and
              &quot;Skills&quot;. Creative alternatives like &quot;My
              Journey&quot; or &quot;What I Bring&quot; might sound personal,
              but they&apos;ll likely confuse the system. Keep it conventional.
              Save as .docx or PDF — never as an image or uncommon format.
            </li>
            <li>
              <strong>Typos are a surprisingly big deal</strong> <br /> ATS
              systems don&apos;t autocorrect. If you write
              &quot;Javascrpit&quot; instead of &quot;JavaScript&quot;, the
              system won&apos;t know what you mean — and that keyword match is
              lost. Proofread carefully, keep formatting consistent, and make
              sure the same information looks the same throughout your document.
            </li>
          </ul>

          <p className="ats__intro">
            A well-optimized CV helps you get past the automated filter — but
            remember, it&apos;s still a human who decides if you&apos;re the
            right fit.
          </p>
        </div>
      </div>
    </section>
  );
}
