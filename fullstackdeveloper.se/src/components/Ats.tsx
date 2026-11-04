import type { ReactNode } from "react";
import "@/styles/components/ats.css";

// Sources checked 2026-11-03. Keep every number on this page tied to one of these.
const JOBSCAN = "https://www.jobscan.co/blog/99-percent-fortune-500-ats/";
const ENHANCV = "https://enhancv.com/blog/does-ats-reject-resumes/";
const LADDERS = "https://www.hrdive.com/news/recruiters-spend-74-seconds-looking-at-your-resume/541582/";
const RESUMEGO = "https://www.resumego.net/research/how-much-time-spend-resume/";

function Src({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

/** Full ATS article, rendered on /ats. The home pages use the short AtsSummary. */
export default function ATS() {
  return (
    <section id="ats" className="section ats-article" aria-labelledby="ats-page-heading">
      <span className="section-label">ATS</span>
      <div className="ats-grid">
        <div className="ats-card ats-card-wide">
          <h1 className="ats-heading" id="ats-page-heading">Writing a CV that gets read</h1>
          <p className="ats-intro">
            When I was job hunting after university, I realised how much the
            way a CV is written decides whether anyone reads it. I sent out a
            designed Canva CV and heard nothing back. Once I understood how
            applicant tracking systems read a CV, I rebuilt mine as a plain,
            machine-readable document and started getting interviews.
          </p>
          <p className="ats-intro">
            I&rsquo;m not job hunting anymore, but I&rsquo;ve kept this here
            because what I learned is useful to anyone who is.
          </p>
        </div>
      </div>

      <div className="ats-grid">
        <div className="ats-card ats-card-wide">
          <h2 className="ats-title">What is an ATS?</h2>
          <p className="ats-text">
            An applicant tracking system is the software employers use to
            collect, sort and search applications. It reads your CV, splits it
            into fields and makes it searchable, so a recruiter can filter
            candidates and search for keywords from the job posting. Some
            platforms also score or rank candidates against the posting, and
            some are adding AI features. It isn&rsquo;t a person, and it
            doesn&rsquo;t read between the lines.
          </p>
        </div>

        <div className="ats-card">
          <h2 className="ats-title">How common is it?</h2>
          <p className="ats-text">
            Among large companies, almost universal: Jobscan finds an ATS on
            the career sites of 97&ndash;99% of the Fortune 500, year after
            year (<Src href={JOBSCAN}>Jobscan</Src>). Smaller employers use them
            less, and I haven&rsquo;t found reliable figures for Sweden. If you
            apply through a company&rsquo;s career page, assume there&rsquo;s
            one.
          </p>
        </div>

        <div className="ats-card">
          <h2 className="ats-title">No single algorithm</h2>
          <p className="ats-text">
            There are many of these platforms &ndash; Teamtailor, Workday,
            Greenhouse, Lever, iCIMS &ndash; and they don&rsquo;t parse or
            weigh things the same way. What works well in one might not in
            another. So anyone selling you a one-size-fits-all &ldquo;ATS
            hack&rdquo; is probably just selling you something.
          </p>
        </div>
      </div>

      <div className="ats-grid">
        <div className="ats-card ats-card-wide">
          <h2 className="ats-subheading">How does it work in practice?</h2>
          <p className="ats-intro">Most systems follow a similar pattern:</p>
          <ol className="ats-steps">
            <li>
              <div>
                <strong>Parsing</strong>
                <br />
                The system breaks your CV into sections &ndash; contact
                details, education, experience, skills. A heavily designed
                layout with columns, text boxes or graphics can end up in the
                wrong fields or not at all. Information that isn&rsquo;t parsed
                can&rsquo;t be found later.
              </div>
            </li>
            <li>
              <div>
                <strong>Screening questions</strong>
                <br />
                Many applications include questions like work permit, location
                or a required licence. These are the most common automatic
                filter: in a small 2025 interview study by Enhancv, 23 of 25
                recruiters said their system does not reject CVs automatically
                because of formatting or content, and pointed to screening
                questions instead (<Src href={ENHANCV}>Enhancv</Src>).
              </div>
            </li>
            <li>
              <div>
                <strong>Search and ranking</strong>
                <br />
                The recruiter searches and filters in the system, often on
                words from the job posting, and some systems sort candidates by
                how well they match. If your CV doesn&rsquo;t contain the words
                they search for, it&rsquo;s harder to find &ndash; not deleted,
                just further down a long list.
              </div>
            </li>
            <li>
              <div>
                <strong>Human review</strong>
                <br />
                Then a person reads it, briefly. A 2018 eye-tracking study by
                Ladders measured about 7 seconds for a first skim (
                <Src href={LADDERS}>HR Dive on Ladders</Src>). In a 2024
                ResumeGo survey of 418 recruiters, 81% said they spend under a
                minute on the first screening (<Src href={RESUMEGO}>ResumeGo</Src>).
                <br />
                <br />
                <strong>
                  Which does make you wonder &ndash; if you got rejected for
                  &ldquo;not enough experience&rdquo;, how much of it did
                  anyone actually read?
                </strong>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div className="ats-formula">
        <strong>Words from the job posting</strong> +{" "}
        <strong>a layout machines can read</strong> +{" "}
        <strong>standard headings</strong> + <strong>zero typos</strong> = a CV
        that is easy to find and quick to read.
        <br />
        <br />
        The frustrating part isn&rsquo;t understanding the system &ndash;
        it&rsquo;s doing the work. Because it means tailoring your CV for
        every single application. Most people skip that step. I get it.
        It&rsquo;s tedious. But it&rsquo;s also what makes the difference.
      </div>

      <div className="ats-grid">
        <div className="ats-card ats-card-wide">
          <h2 className="ats-subheading">
            Tips for writing an ATS-friendly CV
          </h2>
          <ul className="ats-tips">
            <li>
              <strong>Mirror the job posting&rsquo;s exact language</strong>
              <br />
              If they wrote &ldquo;project management&rdquo;, don&rsquo;t only
              write &ldquo;led projects&rdquo;. A recruiter searching for
              &ldquo;project management&rdquo; may never see a CV that phrases
              it differently. Read the posting carefully, use their words where
              they&rsquo;re true for you, and tailor your CV for each
              application.
            </li>
            <li>
              <strong>Boring layout is your friend here</strong>
              <br />I know. The Canva CV looked incredible. But single-column,
              standard fonts, no text boxes, no graphics, no tables. Save the
              personality for the interview. Design-tool layouts are the most
              common cause of parsing problems that CV guides report; I
              haven&rsquo;t found the ATS vendors document it themselves, but
              a plain layout costs you nothing.
            </li>
            <li>
              <strong>Use the headings the system expects</strong>
              <br />
              &ldquo;Experience.&rdquo; &ldquo;Education.&rdquo;
              &ldquo;Skills.&rdquo; Not &ldquo;My Journey&rdquo; or &ldquo;What
              I Bring to the Table&rdquo; &ndash; which, admittedly, I had
              considered. Conventional headings make it easier for the parser
              to put things in the right fields. Save as .docx or PDF, never as
              an image file.
            </li>
            <li>
              <strong>Proofread like your career depends on it</strong>
              <br />
              Search doesn&rsquo;t autocorrect. &ldquo;Javascrpit&rdquo; will
              not show up when someone searches for &ldquo;JavaScript&rdquo;.
              Consistency matters too: if something is formatted one way on
              page one, keep it that way throughout.
            </li>
          </ul>
          <p className="ats-intro">
            Getting found in the ATS is step one. A real human still has to
            decide you&rsquo;re worth hiring &ndash; and that&rsquo;s a
            different challenge entirely. But you make that step a lot easier
            if your CV is easy to find and quick to read.
          </p>
        </div>
      </div>
    </section>
  );
}
