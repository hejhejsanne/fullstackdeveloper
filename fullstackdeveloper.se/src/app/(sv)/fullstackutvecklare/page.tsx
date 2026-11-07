import type { Metadata } from "next";
import "@/styles/components/article.css";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import Toc from "@/components/Toc";
import { faq, skills } from "@/content/sv/fullstack";
import { profile, personId } from "@/data/profile";
import { alternatesFor, langInfo, pathFor } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { openGraphBase } from "@/i18n/seo";

const lang = "sv";
const t = getDictionary(lang);
const path = pathFor("fullstack", lang);
const title = "Vad gör en fullstackutvecklare? – Sanne Delin";
const description =
  "Vad en fullstackutvecklare är och gör, skillnaden mellan frontend, backend och fullstack, hur man blir det och vad det är att jobba med, från en som arbetar i rollen.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: alternatesFor("fullstack", lang),
  openGraph: { ...openGraphBase(lang), type: "article", title, description, url: path },
};

// The broadest questions are real H2 sections (never hidden in an accordion); the rest are in the FAQ.
const toc = [
  { id: "vad-ar", label: "Vad är en fullstackutvecklare?" },
  { id: "skillnaden", label: "Frontend, backend och fullstack" },
  { id: "vad-gor", label: "Vad gör en fullstackutvecklare?" },
  { id: "att-arbeta", label: "Hur är det att arbeta som fullstackutvecklare?" },
  { id: "tekniker", label: "Tekniker jag arbetar med / har arbetat med" },
  { id: "faq", label: "Vanliga frågor" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${profile.url}${path}#webpage`,
  url: `${profile.url}${path}`,
  name: title,
  description,
  inLanguage: langInfo[lang].hreflang,
  isPartOf: { "@id": `${profile.url}/#website` },
  author: { "@type": "Person", "@id": personId, name: profile.name, url: `${profile.url}/` },
  about: { "@type": "Occupation", name: "Fullstackutvecklare" },
};

export default function FullstackPage() {
  return (
    <main id="main-content" className="container page">
      <JsonLd data={structuredData} />
      <header className="page-header">
        <p className="eyebrow eyebrow-line">Om rollen</p>
        <h1 className="page-title">
          Fullstack&shy;utvecklare <span className="page-title-sub">– vad innebär rollen?</span>
        </h1>
        <p className="lead">
          En fullstackutvecklare bygger hela webbapplikationen, från det besökaren ser till servern och
          databasen bakom. Här förklarar jag vad det innebär, skrivet av någon som arbetar i rollen.
        </p>
      </header>

      <div className="article-layout">
        <Toc items={toc} />
        <article className="article-content">
          <section aria-labelledby="vad-ar">
            <h2 id="vad-ar">Vad är en fullstackutvecklare?</h2>
            <p className="answer">
              En fullstackutvecklare är en systemutvecklare som arbetar med både frontend och backend i en
              webbapplikation. Frontend är det användaren ser och använder. Backend sköter affärslogik, databaser
              och kommunikationen mellan system. Fullstackutvecklaren arbetar i båda delarna och ser till att
              helheten fungerar.
            </p>
            <p>
              Ordet kommer från engelskans <i lang="en">full stack</i>, hela stapeln av tekniker som en
              applikation byggs av: gränssnittet överst, sedan server, databas och drift längst ner.
            </p>
          </section>

          <section aria-labelledby="skillnaden">
            <h2 id="skillnaden">Vad är skillnaden mellan frontend, backend och fullstack?</h2>
            <dl className="definition-list">
              <div>
                <dt>Frontend</dt>
                <dd>Det som körs i besökarens webbläsare: layout, interaktion, tillgänglighet och hur snabbt sidan känns.</dd>
              </div>
              <div>
                <dt>Backend</dt>
                <dd>
                  Det som körs på servern, alltså det man inte kan lämna åt webbläsaren: kontrollera lösenord,
                  tillämpa affärsregler och läsa eller skriva data.
                </dd>
              </div>
              <div>
                <dt>Fullstack</dt>
                <dd>Båda delarna, plus ansvaret för att de pratar med varandra på ett sätt som håller när något går fel.</dd>
              </div>
            </dl>
          </section>

          <section aria-labelledby="vad-gor">
            <h2 id="vad-gor">Vad gör en fullstackutvecklare?</h2>
            <p className="answer">
              En fullstackutvecklare bygger funktioner hela vägen, från knappen användaren trycker på till raden som
              sparas i databasen, och ser till att de fortsätter fungera efter nästa ändring.
            </p>
            <p>
              Ta ett registreringsformulär. Fullstackutvecklaren bygger formuläret och felmeddelandena, API:t som
              tar emot uppgifterna, kontrollen av att e-postadressen inte redan finns, tabellen där kontot sparas
              och testet som visar att flödet fungerar. Det är samma person som ser till att formuläret går att
              använda med tangentbord och att lösenordet aldrig sparas i klartext.
            </p>
            <p>Arbetet spänner därför över flera områden:</p>
            <ul className="plain-list">
              <li><strong>Gränssnitt.</strong> Komponenter, formulär, tillstånd och tillgänglighet, så att sidan fungerar för alla och på alla skärmar.</li>
              <li><strong>API och serverlogik.</strong> Vad som får skickas in, vem som får se vad och vad som händer när något saknas.</li>
              <li><strong>Data.</strong> Tabeller, relationer och migreringar, och frågor som fortfarande är snabba när datan växer.</li>
              <li><strong>Säkerhet.</strong> Inloggning, behörighet och hur lösenord och nycklar hanteras.</li>
              <li><strong>Test och drift.</strong> Automatiska tester, bygge och driftsättning, så att nästa ändring inte förstör den förra.</li>
              <li><strong>Sökbarhet.</strong> Metadata och strukturerad data, så att sökmotorer och AI-tjänster förstår innehållet.</li>
            </ul>
            <p>
              Fördelen är att en funktion kan byggas färdigt utan överlämningar mellan flera personer. Nackdelen är
              bredden: det finns alltid ett lager där någon annan kan mer.
            </p>
          </section>

          <section aria-labelledby="att-arbeta">
            <h2 id="att-arbeta">Hur är det att arbeta som fullstackutvecklare?</h2>
            <p>
              Sedan juni 2026 arbetar jag som utvecklare på{" "}
              <a className="text-link" href={profile.employer.url} target="_blank" rel="noopener noreferrer">
                Understandit<span className="visually-hidden"> {t.newTab}</span>
              </a>{" "}
              i Göteborg.
            </p>
            <p>
              Jag tänker brett innan jag går på djupet: zoomar ut, tar reda på vad som faktiskt är trasigt och zoomar
              sedan in och löser det. Ge mig något som är svårt på riktigt, med riktiga användare och något som står
              på spel, så gör jag mitt bästa arbete.
            </p>
            <p>
              Något jag lärde mig senare än jag borde är att kommunikation inte är en mjuk färdighet. Den är en del
              av infrastrukturen. Man kan skriva bra kod och ändå se ett projekt falla isär för att folk slutat prata
              ärligt med varandra.
            </p>
            <p>
              Jag utbildade mig till Javautvecklare med inriktning fullstack på Teknikhögskolan i Göteborg
              (2023–2025) och var studentrepresentant under det sista året. Innan dess läste jag objektorienterad
              programmering med AI-inriktning på NBI Handelsakademin (2022–2023). Under praktiken ledde jag både
              backend- och frontendteam, och efter det arbetade jag som teknisk projektledare på ett startupbolag.
              Jag arbetar på svenska, engelska och norska.
            </p>
          </section>

          <section aria-labelledby="tekniker">
            <h2 id="tekniker">Tekniker jag arbetar med / har arbetat med</h2>
            <dl className="skills-list">
              {skills.map((s) => (
                <div key={s.category}>
                  <dt>{s.category}</dt>
                  <dd>{s.items}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="faq" className="faq-panel glass">
            <h2 id="faq">Vanliga frågor om fullstackutveckling</h2>
            <Faq items={faq} newTab={t.newTab} />
          </section>
        </article>
      </div>
    </main>
  );
}
