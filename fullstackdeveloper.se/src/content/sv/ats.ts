/**
 * Swedish content for /ats.
 * Rule: every number and every claim about how a system behaves is tied to a source below.
 * Never claim that all ATS reject a certain layout, or that keywords guarantee an interview.
 * Sources checked 2026-11-03 (Jobscan, Enhancv, Ladders, ResumeGo) and 2026-11-07 (Greenhouse, Textkernel).
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
} satisfies Record<string, Source>;

export const toc = [
  { id: "bakgrund", label: "Varför den här guiden" },
  { id: "vad-ar-ats", label: "Vad är ett ATS?" },
  { id: "sa-hanteras-cv", label: "Så hanteras ditt CV" },
  { id: "struktur", label: "En läsbar CV-struktur" },
  { id: "filformat", label: "Filformat" },
  { id: "anpassa", label: "Anpassa efter annonsen" },
  { id: "misstag", label: "Vanliga misstag" },
  { id: "faq", label: "Vanliga frågor" },
  { id: "kallor", label: "Källor" },
];

export const faq: FaqItem[] = [
  {
    q: "Vad står ATS för?",
    a: [
      "Applicant tracking system, på svenska ungefär rekryteringssystem. Det är programmet arbetsgivaren använder för att ta emot, sortera och söka bland ansökningar. Teamtailor, Workday, Greenhouse och Lever är några exempel.",
    ],
  },
  {
    q: "Kan ATS läsa PDF?",
    a: [
      "Ja, om PDF:en innehåller riktig text. Greenhouse tar till exempel emot .pdf, .docx, .doc, .rtf och .txt. En inskannad PDF är däremot en bild, och CV-tolkaren Textkernel läser bilder bara med ett tillval för textigenkänning (OCR).",
      "Testa genom att markera texten i din PDF. Går den att markera och kopiera är den läsbar.",
    ],
    source: sources.textkernel,
  },
  {
    q: "Behöver man anpassa CV:t till varje tjänst?",
    a: [
      "Det lönar sig. Rekryterare söker och filtrerar ofta på ord från annonsen, så ett CV som använder samma ord för samma kompetens är lättare att hitta. Ändra ordval och ordning, inte fakta.",
      "Det garanterar ingen intervju. Det gör bara att en människa lättare hittar ditt CV och snabbare ser att du matchar.",
    ],
  },
  {
    q: "Vilken CV-layout fungerar bäst?",
    a: [
      "En spalt, vanliga rubriker och text i stället för grafik. Den fungerar i alla system och är dessutom snabb att skumma för en människa. Ett designat CV kan fungera i vissa system, men du vet sällan vilket system arbetsgivaren använder.",
    ],
  },
  {
    q: "Sorterar systemet bort mitt CV automatiskt?",
    a: [
      "Oftast inte på grund av layout eller ordval. I en liten intervjustudie från Enhancv 2025 sa 23 av 25 rekryterare att deras system inte avvisar CV:n automatiskt på grund av formatering eller innehåll. Det vanligaste automatiska filtret var urvalsfrågor, till exempel om arbetstillstånd.",
      "Studien är liten och gjord av ett företag som säljer CV-verktyg, så se den som en fingervisning.",
    ],
    source: sources.enhancv,
  },
];
