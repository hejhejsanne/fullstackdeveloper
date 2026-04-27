import "@/styles/components/ats.css";

export default function ATS() {
  return (
    <section id="ats" className="section">
      <span className="section-label">ATS</span>
      <div className="ats-grid">
        <div className="ats-card ats-card-wide">
          <h2 className="ats-heading">My CV is ATS-optimized</h2>
          <p className="ats-intro">and here&rsquo;s why that matters.</p>
          <p className="ats-intro">
            Took me an embarrassingly long time to figure this out. Fresh out of
            uni last summer, I sent application after application with a
            gorgeous Canva CV - gradients, icons, custom fonts, the works. Radio
            silence. Complete and utter silence. I genuinely thought something
            was wrong with me. Turns out something was wrong with my CV. Once I
            understood how ATS works, I rebuilt everything from scratch - and I
            started getting interviews. Simple as that.
          </p>
        </div>
      </div>

      <div className="ats-grid">
        <div className="ats-card ats-card-wide">
          <p className="ats-title">What is an ATS?</p>
          <p className="ats-text">
            Think of it as a digital bouncer. An Applicant Tracking System reads
            your CV, indexes it, then compares it against the job description -
            and if you don&rsquo;t match enough of the right terms, you&rsquo;re
            out before you were ever really in. It&rsquo;s not necessarily
            sophisticated AI, though some platforms are incorporating it. But it
            is brutally efficient. No feelings. No context. Just keyword
            matching.
          </p>
        </div>

        <div className="ats-card">
          <p className="ats-title">How common is it?</p>
          <p className="ats-text">
            Extremely. The overwhelming majority of employers use some form of
            ATS to sort, filter, and rank applicants. That means the first
            &ldquo;person&rdquo; reading your application isn&rsquo;t a person -
            it&rsquo;s an algorithm. Which, when you think about it, is kind of
            wild.
          </p>
        </div>

        <div className="ats-card">
          <p className="ats-title">No single algorithm</p>
          <p className="ats-text">
            There are hundreds of these platforms - Teamtailor, Workday,
            Greenhouse, Lever - and they all work slightly differently, weigh
            things differently, parse things differently. What scores well in
            one might tank in another. So anyone selling you a one-size-fits-all
            &ldquo;ATS hack&rdquo; is probably just selling you something.
          </p>
        </div>
      </div>

      <div className="ats-grid">
        <div className="ats-card ats-card-wide">
          <h3 className="ats-subheading">How does it work in practice?</h3>
          <p className="ats-intro">Most systems follow a similar pattern:</p>
          <ol className="ats-steps">
            <li>
              <div>
                <strong>Parsing</strong>
                <br />
                The system breaks your CV into sections - contact details,
                education, experience, skills. If your layout is chaotic or
                overly designed, it misreads everything before the matching even
                starts. Bad layout means lost information.
              </div>
            </li>
            <li>
              <div>
                <strong>Keyword matching</strong>
                <br />
                Your CV gets compared directly to the job posting. More matching
                terms, higher score. This is where most applications quietly
                die.
              </div>
            </li>
            <li>
              <div>
                <strong>Ranking</strong>
                <br />
                Everyone gets scored. The recruiter typically only sees the top
                10-20% of candidates. The rest? Gone.
              </div>
            </li>
            <li>
              <div>
                <strong>Human review</strong>
                <br />
                And finally - a human. Kind of. You&rsquo;ve probably heard the
                &ldquo;6-second rule.&rdquo; That&rsquo;s mostly myth, pushed by
                people selling CV-writing services. A{" "}
                <a
                  href="https://www.resumego.net/research/how-much-time-spend-resume/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  2024 ResumeGo study of 418 recruiters
                </a>{" "}
                found that 81% spend under a minute during initial screening.
                <br />
                <br />
                <strong>
                  Which does make you wonder - if you got rejected for
                  &ldquo;not enough experience&rdquo;, did anyone actually read
                  it?
                </strong>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div className="ats-formula">
        <strong>Right keywords</strong> (from the job posting) +{" "}
        <strong>clean layout</strong> (readable by machines) +{" "}
        <strong>standard headings</strong> + <strong>zero typos</strong> = you
        rank highly.
        <br />
        <br />
        That&rsquo;s genuinely it. The frustrating part isn&rsquo;t
        understanding the system - it&rsquo;s doing the work. Because it means
        tailoring your CV for every single application. Most people skip that
        step. I get it. It&rsquo;s tedious. But it&rsquo;s also the whole game.
      </div>

      <div className="ats-grid">
        <div className="ats-card ats-card-wide">
          <h3 className="ats-subheading">
            Tips for writing an ATS-friendly CV
          </h3>
          <ul className="ats-tips">
            <li>
              <strong>Mirror the job posting&rsquo;s exact language</strong>
              <br />
              If they wrote &ldquo;project management&rdquo;, don&rsquo;t write
              &ldquo;led projects&rdquo;. ATS systems match strings, not intent
              - so if the wording doesn&rsquo;t match, neither do you. Read the
              posting carefully and use their exact words. Tailor your CV for
              each application.
            </li>
            <li>
              <strong>Boring layout is your friend here</strong>
              <br />I know. The Canva CV looked incredible. But single-column,
              standard fonts, no text boxes, no graphics, no tables. Save the
              personality for the interview - because the ATS genuinely cannot
              process most fancy formatting. It sees visual noise and chokes.
            </li>
            <li>
              <strong>Use the headings the system expects</strong>
              <br />
              &ldquo;Experience.&rdquo; &ldquo;Education.&rdquo;
              &ldquo;Skills.&rdquo; Not &ldquo;My Journey&rdquo; or &ldquo;What
              I Bring to the Table&rdquo; - which, admittedly, I had considered.
              Creative section names confuse the parser. Conventional headings
              don&rsquo;t. Also - save as .docx or PDF. Never an image file.
            </li>
            <li>
              <strong>Proofread like your career depends on it</strong>
              <br />
              Because, somewhat dramatically, it does. ATS doesn&rsquo;t
              autocorrect. &ldquo;Javascrpit&rdquo; is not
              &ldquo;JavaScript&rdquo; to a machine - it&rsquo;s nothing. That
              keyword match is just gone. Consistency matters too: if something
              is formatted one way on page one, keep it that way throughout.
            </li>
          </ul>
          <p className="ats-intro">
            Getting past the ATS is step one. A real human still has to decide
            you&rsquo;re worth hiring - and that&rsquo;s a different challenge
            entirely. But you can&rsquo;t get to that part if the algorithm has
            already shown you the door.
          </p>
        </div>
      </div>
    </section>
  );
}

// import "@/styles/components/ats.css";

// export default function ATS() {
//   return (
//     <section id="ats" className="section">
//       <span className="section-label">ATS</span>
//       <div className="ats-grid">
//         <div className="ats-card ats-card-wide">
//           <h2 className="ats-heading">My CV is ATS-optimized</h2>
//           <p className="ats-intro">and here&rsquo;s why that matters.</p>
//           <p className="ats-intro">
//             When I graduated this past summer, I quickly realized my
//             &rsquo;pretty&rsquo; Canva CV wasn&rsquo;t getting me anywhere. So I
//             started digging. Turns out, almost every company and recruitment
//             firm uses an ATS — an Applicant Tracking System — that filters CVs
//             by relevant keywords before a human ever sees them. So I rebuilt my
//             CV around that, and suddenly I started landing interviews.
//           </p>
//         </div>
//       </div>

//       <div className="ats-grid">
//         <div className="ats-card ats-card-wide">
//           <p className="ats-title">What is an ATS?</p>
//           <p className="ats-text">
//             An Applicant Tracking System is automated software that helps
//             recruiters identify relevant keywords and phrases in applications.
//             It scans and indexes your CV to match it against the requirements of
//             the role — acting as a digital gatekeeper that decides whether your
//             application ever reaches a human recruiter.
//           </p>
//         </div>

//         <div className="ats-card">
//           <p className="ats-title">How common is it?</p>
//           <p className="ats-text">
//             Most employers today use ATS software to sort, analyze, and rank
//             applications. That means your CV is often reviewed by an algorithm
//             before it ever lands on a recruiter&rsquo;s desk. It isn&rsquo;t
//             necessarily AI — but it can use AI elements — and it will compare
//             your CV directly against the job posting.
//           </p>
//         </div>

//         <div className="ats-card">
//           <p className="ats-title">No single algorithm</p>
//           <p className="ats-text">
//             There are hundreds of different ATS platforms — Teamtailor, Workday,
//             Lever, Greenhouse, to name a few — and they all work a little
//             differently. What ranks highly in one system might not in another.
//             So there&rsquo;s no magic formula that works everywhere.
//           </p>
//         </div>
//       </div>

//       <div className="ats-grid">
//         <div className="ats-card ats-card-wide">
//           <h3 className="ats-subheading">How does it work in practice?</h3>
//           <p className="ats-intro">
//             There is a general pattern that holds across most systems:
//           </p>
//           <ol className="ats-steps">
//             <li>
//               <div>
//                 <strong>Parsing</strong>
//                 <br />
//                 The system breaks your CV down into parts: contact info,
//                 education, experience, skills. If your layout is messy, it
//                 misreads your information before it even gets to the matching
//                 stage.
//               </div>
//             </li>
//             <li>
//               <div>
//                 <strong>Keyword matching</strong>
//                 <br />
//                 Your CV is compared against the job posting. The more matching
//                 terms, the higher your score. This is where most CVs get
//                 filtered out.
//               </div>
//             </li>
//             <li>
//               <div>
//                 <strong>Ranking</strong>
//                 <br />
//                 Candidates are sorted by match score. The recruiter typically
//                 only sees the top 10–20%.
//               </div>
//             </li>
//             <li>
//               <div>
//                 <strong>Human review</strong>
//                 <br />
//                 Only now does a real person read your application. Though
//                 &rsquo;read&rsquo; might be generous. The often-quoted
//                 &ldquo;6-second rule&rdquo; is largely a myth spread by
//                 resume-writing services, but a{" "}
//                 <a
//                   href="https://www.resumego.net/research/how-much-time-spend-resume/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   2024 ResumeGo survey of 418 recruiters
//                 </a>{" "}
//                 found that 81% spend less than a minute on a CV during initial
//                 screening.
//                 <br />
//                 <br />
//                 <strong>
//                   Which raises the question — if you get rejected for lacking
//                   experience, did they really read it at all?
//                 </strong>
//               </div>
//             </li>
//           </ol>
//         </div>
//       </div>

//       <div className="ats-formula">
//         <strong>Right keywords</strong> (from the job posting) +{" "}
//         <strong>clean layout</strong> (readable by machines) +{" "}
//         <strong>clear structure</strong> (standard headings) +{" "}
//         <strong>no typos</strong> = high ranking.
//         <br />
//         <br />
//         It&rsquo;s not more complicated than that at its core — but it does mean
//         tailoring your CV for every single application. Which, honestly, is the
//         step most people skip.
//       </div>

//       <div className="ats-grid">
//         <div className="ats-card ats-card-wide">
//           <h3 className="ats-subheading">
//             Tips for writing an ATS-friendly CV
//           </h3>
//           <ul className="ats-tips">
//             <li>
//               <strong>Speak the algorithm&rsquo;s language</strong>
//               <br />
//               Read the job posting carefully and mirror its exact wording. If
//               the ad says &ldquo;project management&rdquo;, don&rsquo;t write
//               &ldquo;led projects&rdquo;. ATS systems match strings, not meaning
//               — so use the same terms the employer uses, and tailor your CV for
//               each application.
//             </li>
//             <li>
//               <strong>Boring is beautiful (at least for your layout)</strong>
//               <br />
//               That beautifully designed Canva CV with icons, columns, and custom
//               fonts? The ATS probably can&rsquo;t read it. Stick to a clean,
//               single-column layout with standard fonts. No graphics, no text
//               boxes, no tables. Save the creativity for the interview.
//             </li>
//             <li>
//               <strong>Use headings the system actually recognizes</strong>
//               <br />
//               ATS software is trained to look for familiar section names like
//               &ldquo;Experience&rdquo;, &ldquo;Education&rdquo;, and
//               &ldquo;Skills&rdquo;. Creative alternatives like &ldquo;My
//               Journey&rdquo; or &ldquo;What I Bring&rdquo; might sound personal,
//               but they&rsquo;ll likely confuse the system. Keep it conventional.
//               Save as .docx or PDF — never as an image or uncommon format.
//             </li>
//             <li>
//               <strong>Typos are a surprisingly big deal</strong>
//               <br />
//               ATS systems don&rsquo;t autocorrect. If you write
//               &ldquo;Javascrpit&rdquo; instead of &ldquo;JavaScript&rdquo;, the
//               system won&rsquo;t know what you mean — and that keyword match is
//               lost. Proofread carefully, keep formatting consistent, and make
//               sure the same information looks the same throughout your document.
//             </li>
//           </ul>
//           <p className="ats-intro">
//             A well-optimized CV helps you get past the automated filter — but
//             remember, it&rsquo;s still a human who decides if you&rsquo;re the
//             right fit.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
