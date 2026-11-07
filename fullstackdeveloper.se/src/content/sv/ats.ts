/**
 * Swedish content for /ats.
 * Rule: every number and every claim about how a system behaves is tied to a source below.
 * Never claim that all ATS reject a certain layout, or that keywords guarantee an interview.
 * Sources checked 2026-11-03 (Jobscan, Enhancv, Ladders, ResumeGo) and 2026-11-07 (Greenhouse, Textkernel,
 * Arbetsförmedlingen).
 */
import type { FaqItem, Source } from "../types";

export const published = "2026-04-23";
export const modified = "2026-11-07";

export const sources = {
  jobscan: { href: "https://www.jobscan.co/blog/99-percent-fortune-500-ats/", label: "Jobscan: ATS bland Fortune 500-företagen" },
  enhancv: { href: "https://enhancv.com/blog/does-ats-reject-resumes/", label: "Enhancv: intervjuer med 25 rekryterare (2025)" },
  ladders: { href: "https://www.hrdive.com/news/recruiters-spend-74-seconds-looking-at-your-resume/541582/", label: "HR Dive om Ladders ögonrörelsestudie (2018)" },
  resumego: { href: "https://www.resumego.net/research/how-much-time-spend-resume/", label: "ResumeGo: enkät med 418 rekryterare (2024)" },
  greenhouse: { href: "https://support.greenhouse.io/hc/en-us/articles/360052218132", label: "Greenhouse: filformat som kan laddas upp" },
  textkernel: { href: "https://developer.textkernel.com/TKPlatform/master/file-formats", label: "Textkernel: filformat för CV-tolkning" },
  afCv: { href: "https://arbetsformedlingen.se/for-arbetssokande/jobbansokan/skriva-cv", label: "Arbetsförmedlingen: skriva cv" },
  afAi: { href: "https://arbetsformedlingen.se/for-arbetssokande/tips-inspiration-och-nyheter/artiklar/2024-08-21-sa-kan-du-vassa-ditt-cv-med-ai", label: "Arbetsförmedlingen: så kan du vässa ditt cv med AI (2024)" },
  afKlyschor: { href: "https://arbetsformedlingen.se/for-arbetssokande/tips-inspiration-och-nyheter/artiklar/2026-01-28-se-upp-for-ai-klyschor-i-din-jobbansokan", label: "Arbetsförmedlingen: se upp för AI-klyschor (2026)" },
} satisfies Record<string, Source>;

export const toc = [
  { id: "bakgrund", label: "Varför den här guiden" },
  { id: "vad-ar-ats", label: "Vad är ett ATS?" },
  { id: "sa-hanteras-cv", label: "Hur fungerar ATS vid rekrytering?" },
  { id: "struktur", label: "En läsbar CV-struktur" },
  { id: "filformat", label: "Filformat" },
  { id: "anpassa", label: "Anpassa efter annonsen" },
  { id: "testa", label: "Hur vet jag om mitt CV är ATS-vänligt?" },
  { id: "misstag", label: "Vanliga misstag" },
  { id: "faq", label: "Vanliga frågor" },
  { id: "kallor", label: "Källor" },
];

/**
 * Questions people search for and ask AI assistants about ATS. How ATS works, CV structure and file
 * formats are longer sections in the article; the FAQ gives the short answer and does not repeat them.
 */
export const faq: FaqItem[] = [
  {
    q: "Vad är ATS och vad står det för?",
    a: [
      "ATS står för applicant tracking system, ett rekryteringssystem som arbetsgivare använder för att ta emot, sortera, söka och filtrera ansökningar. Teamtailor, Workday, Greenhouse och Lever är några exempel. Vissa system matchar också kandidater mot annonsen automatiskt, men alla fungerar inte likadant.",
    ],
  },
  {
    q: "Kan ATS läsa PDF-filer?",
    a: [
      "Ja, om PDF:en innehåller riktig text. Greenhouse tar till exempel emot .pdf, .docx, .doc, .rtf och .txt. En inskannad PDF är däremot en bild, och CV-tolkaren Textkernel läser bilder bara med ett tillval för textigenkänning (OCR).",
      "Testa genom att markera texten i din PDF. Går den att markera och kopiera är den läsbar.",
    ],
    sources: [sources.greenhouse, sources.textkernel],
  },
  {
    q: "Vilket CV-format fungerar bäst för ATS?",
    a: [
      "En spalt, vanliga rubriker och text i stället för grafik, sparat som .docx eller som en PDF med riktig text. Arbetsförmedlingen ger samma råd: enkel struktur, tydliga rubriker och Word eller pdf så att texten kan läsas korrekt.",
      "Ett designat CV kan fungera i vissa system, men du vet sällan vilket system arbetsgivaren använder.",
    ],
    sources: [sources.afCv],
  },
  {
    q: "Hur viktiga är nyckelord i ett ATS-vänligt CV?",
    a: [
      "Viktiga för att bli hittad, inte för att bli anställd. Rekryterare söker och filtrerar ofta på ord från annonsen, så ett CV som använder samma ord för samma kompetens kommer lättare upp i sökningen.",
      "Att fylla CV:t med ord du inte kan styrka hjälper inte. Det är en människa som läser sedan, och det märks.",
    ],
  },
  {
    q: "Behöver jag anpassa mitt CV till varje jobb?",
    a: [
      "Det lönar sig. Ändra ordval och ordning så att det som är viktigast för just den tjänsten syns först, men ändra aldrig fakta.",
      "Det garanterar ingen intervju. Det gör bara att en människa lättare hittar ditt CV och snabbare ser att du matchar.",
    ],
  },
  {
    q: "Kan ATS automatiskt sortera bort mitt CV?",
    a: [
      "Oftast inte på grund av layout eller ordval. I en liten intervjustudie från Enhancv 2025 sa 23 av 25 rekryterare att deras system inte avvisar CV:n automatiskt på grund av formatering eller innehåll. Det vanligaste automatiska filtret var urvalsfrågor, till exempel om arbetstillstånd.",
      "Studien är liten och gjord av ett företag som säljer CV-verktyg, så se den som en fingervisning.",
    ],
    sources: [sources.enhancv],
  },
  {
    q: "Kan jag använda AI för att skriva mitt CV?",
    a: [
      "Ja, som stöd för struktur, språk och anpassning till en annons. Men skriv om det med dina egna ord. Arbetsförmedlingen konstaterar att AI är bra på att skriva korrekt men sämre på att fånga vem du är, och varnar för klyschor som låter som alla andras.",
      "Kontrollera allt AI:n skriver, den kan hitta på. Och tänk på vad du laddar upp: Arbetsförmedlingen råder dig att utelämna namn, adress och personnummer när du ber en AI-tjänst om hjälp.",
    ],
    sources: [sources.afKlyschor, sources.afAi],
  },
];
