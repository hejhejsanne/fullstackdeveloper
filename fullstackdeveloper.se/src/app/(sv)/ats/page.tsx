import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/components/article.css";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Toc from "@/components/Toc";
import { faq, modified, published, sources, toc } from "@/content/sv/ats";
import { profile, personId } from "@/data/profile";
import { alternatesFor, langInfo, pathFor } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { openGraphBase } from "@/i18n/seo";

const lang = "sv";
const t = getDictionary(lang);
const path = pathFor("ats", lang);
const title = "ATS-vänligt CV – guide och tips för jobbsökande";
const description =
  "Hur rekryteringssystem (ATS) läser ditt CV, vilken struktur och vilket filformat som fungerar, vanliga misstag och hur du anpassar CV:t efter annonsen. Med källor.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: alternatesFor("ats", lang),
  openGraph: { ...openGraphBase(lang), type: "article", title, description, url: path, publishedTime: published, modifiedTime: modified, authors: [`${profile.url}/`] },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ATS-vänligt CV – guide för jobbsökande",
  description,
  inLanguage: langInfo[lang].hreflang,
  datePublished: published,
  dateModified: modified,
  author: { "@type": "Person", "@id": personId, name: profile.name, url: `${profile.url}/` },
  publisher: { "@type": "Person", "@id": personId, name: profile.name },
  mainEntityOfPage: { "@type": "WebPage", "@id": `${profile.url}${path}` },
  image: `${profile.url}/og-default.jpg`,
};

function Src({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">
      {children} <span aria-hidden="true">↗</span><span className="visually-hidden"> {t.newTab}</span>
    </a>
  );
}

const dateFormat = new Intl.DateTimeFormat("sv-SE", { day: "numeric", month: "long", year: "numeric" });

export default function AtsPage() {
  return (
    <main id="main-content" className="container page">
      <JsonLd data={structuredData} />
      <header className="page-header">
        <p className="eyebrow eyebrow-line">Guide</p>
        <h1 className="page-title">ATS-vänligt CV</h1>
        <p className="lead">Så skriver du ett CV som fungerar för både rekryterare och rekryteringssystem.</p>
        <p className="byline">
          Av {profile.name} · Uppdaterad <time dateTime={modified}>{dateFormat.format(new Date(modified))}</time>
        </p>
      </header>

      <div className="article-layout">
        <Toc items={toc} />
        <article className="article-content">
          <section aria-labelledby="bakgrund">
            <h2 id="bakgrund">Varför den här guiden</h2>
            <p>
              När jag sökte jobb efter utbildningen insåg jag hur mycket sättet ett CV är skrivet på avgör om någon
              läser det. Jag skickade ut ett designat CV från Canva och fick inga svar. När jag förstod hur
              rekryteringssystem läser ett CV byggde jag om mitt som ett enkelt, maskinläsbart dokument och började
              bli kallad till intervjuer.
            </p>
            <p>Jag söker inte jobb längre, men det jag lärde mig är användbart för alla som gör det.</p>
          </section>

          <section aria-labelledby="vad-ar-ats">
            <h2 id="vad-ar-ats">Vad är ett ATS?</h2>
            <p className="answer">
              ATS står för applicant tracking system, ett rekryteringssystem som arbetsgivare använder för att ta
              emot, sortera och söka bland ansökningar.
            </p>
            <p>
              Systemet läser in ditt CV, delar upp det i fält och gör det sökbart, så att rekryteraren kan filtrera
              kandidater och söka på ord från annonsen. Vissa system rangordnar också kandidater mot annonsen. Det är
              ingen människa, och det läser inte mellan raderna.
            </p>
            <p>
              Bland stora företag är det nästan alltid så: Jobscan hittar ett ATS på karriärsidorna hos 97–99 procent
              av Fortune 500-företagen (<Src href={sources.jobscan.href}>Jobscan</Src>). Mindre arbetsgivare använder
              det mer sällan, och jag har inte hittat tillförlitliga siffror för Sverige. Söker du via ett företags
              karriärsida kan du räkna med att det finns ett.
            </p>
            <p>
              Det finns många system, till exempel Teamtailor, Workday, Greenhouse och Lever, och de tolkar och väger
              inte saker på samma sätt. Den som säljer ett knep som fungerar i alla system säljer troligen mest
              knepet.
            </p>
          </section>

          <section aria-labelledby="sa-hanteras-cv">
            <h2 id="sa-hanteras-cv">Så hanteras ditt CV</h2>
            <p>De flesta system följer ungefär samma mönster:</p>
            <ol className="steps">
              <li>
                <h3>Inläsning</h3>
                <p>
                  Systemet delar upp CV:t i avsnitt som kontaktuppgifter, utbildning, erfarenhet och kompetenser. En
                  layout med spalter, textrutor eller grafik kan hamna i fel fält eller inte läsas in alls. Det som
                  inte läses in går inte att hitta senare.
                </p>
              </li>
              <li>
                <h3>Urvalsfrågor</h3>
                <p>
                  Många ansökningar har frågor om till exempel arbetstillstånd, ort eller körkort. Det är det
                  vanligaste automatiska filtret. I en liten intervjustudie från Enhancv 2025 sa 23 av 25 rekryterare
                  att deras system inte avvisar CV:n automatiskt på grund av formatering eller innehåll, och pekade på
                  urvalsfrågorna i stället (<Src href={sources.enhancv.href}>Enhancv</Src>).
                </p>
              </li>
              <li>
                <h3>Sökning och rangordning</h3>
                <p>
                  Rekryteraren söker och filtrerar i systemet, ofta på ord från annonsen, och vissa system sorterar
                  kandidaterna efter hur väl de matchar. Saknar ditt CV orden de söker på blir det svårare att hitta.
                  Det raderas inte, det hamnar bara längre ner i en lång lista.
                </p>
              </li>
              <li>
                <h3>En människa läser</h3>
                <p>
                  Sedan läser en person, kort. En ögonrörelsestudie från Ladders 2018 mätte ungefär 7 sekunder för en
                  första genomläsning (<Src href={sources.ladders.href}>HR Dive om Ladders</Src>). I en enkät från
                  ResumeGo 2024 med 418 rekryterare svarade 81 procent att de lägger mindre än en minut på den första
                  gallringen (<Src href={sources.resumego.href}>ResumeGo</Src>).
                </p>
              </li>
            </ol>
          </section>

          <section aria-labelledby="struktur">
            <h2 id="struktur">En läsbar CV-struktur</h2>
            <p className="answer">
              En spalt, vanliga rubriker och text i stället för grafik. Det är lätt för systemet att tolka och snabbt
              för en människa att skumma.
            </p>
            <ul className="plain-list">
              <li><strong>En spalt.</strong> Inga textrutor, tabeller eller sidospalter med kompetenser.</li>
              <li><strong>Vanliga rubriker.</strong> ”Erfarenhet”, ”Utbildning” och ”Kompetenser”, inte ”Min resa”.</li>
              <li><strong>Samma format hela vägen.</strong> Datum, titlar och punktlistor skrivna på samma sätt i varje avsnitt.</li>
            </ul>
            <p>
              Designade CV-mallar är den vanligaste orsaken till tolkningsproblem som CV-guider tar upp. Jag har inte
              hittat att systemleverantörerna själva skriver det, men en enkel layout kostar dig ingenting.
            </p>
          </section>

          <section aria-labelledby="filformat">
            <h2 id="filformat">Filformat</h2>
            <p className="answer">
              .docx eller en PDF med riktig text fungerar i de flesta system. Undvik inskannade PDF:er och bilder.
            </p>
            <p>
              Greenhouse tar till exempel emot .pdf, .docx, .doc, .rtf och .txt (
              <Src href={sources.greenhouse.href}>Greenhouse</Src>). En inskannad PDF är däremot en bild. CV-tolkaren
              Textkernel läser bilder bara med ett tillval för textigenkänning (
              <Src href={sources.textkernel.href}>Textkernel</Src>), så räkna inte med att det är påslaget.
            </p>
            <p>Testa din PDF genom att markera texten. Går den att markera och kopiera är den läsbar.</p>
          </section>

          <section aria-labelledby="anpassa">
            <h2 id="anpassa">Anpassa efter annonsen</h2>
            <p className="answer">
              Använd annonsens egna ord för det du faktiskt kan. Det gör ditt CV lättare att hitta, men det garanterar
              ingen intervju.
            </p>
            <p>
              Står det ”projektledning” i annonsen, skriv inte bara ”ledde projekt”. En rekryterare som söker på
              ”projektledning” kanske aldrig ser ett CV som uttrycker det annorlunda. Ändra ordval och ordning för
              varje ansökan, aldrig fakta.
            </p>
            <p>
              Det jobbiga är inte att förstå systemet utan att göra jobbet varje gång. De flesta hoppar över det
              steget, och det är just därför det gör skillnad.
            </p>
          </section>

          <section aria-labelledby="misstag">
            <h2 id="misstag">Vanliga misstag</h2>
            <ul className="plain-list">
              <li><strong>Stavfel i nyckelord.</strong> Sökningen rättar inte stavning. ”Javascrpit” hittas inte på ”JavaScript”.</li>
              <li><strong>Kreativa rubriker.</strong> ”Det jag tar med mig” i stället för ”Erfarenhet”. Jag övervägde själv något liknande.</li>
              <li><strong>Kompetenser bara i en grafik.</strong> Staplar och betyg i en bild går inte att söka på.</li>
              <li><strong>Samma CV till alla tjänster.</strong> Det matchar sällan orden i en specifik annons.</li>
              <li><strong>Inskannat CV.</strong> En bild av text är inte text för ett system utan textigenkänning.</li>
            </ul>
            <p>
              Att bli hittad i systemet är första steget. Sedan ska en människa vilja träffa dig, och det är en annan
              utmaning. Men den blir lättare om ditt CV är lätt att hitta och snabbt att läsa.
            </p>
          </section>

          <section aria-labelledby="faq" className="faq-panel glass">
            <h2 id="faq">Vanliga frågor</h2>
            <Faq items={faq} newTab={t.newTab} />
          </section>

          <section aria-labelledby="kallor">
            <h2 id="kallor">Källor</h2>
            <ul className="source-list">
              {Object.values(sources).map((s) => (
                <li key={s.href}><Src href={s.href}>{s.label}</Src></li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}
