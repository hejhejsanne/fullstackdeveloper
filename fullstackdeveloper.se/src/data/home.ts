/**
 * Home page copy for the English (/) and Swedish (/fullstackutvecklare) landing pages.
 *
 * Rule for this content: informative, never generic. Explanations use concrete,
 * everyday examples (a sign-up form, a typo in a keyword) instead of definitions.
 * Sanne's own projects are deliberately not presented on the site right now.
 * Claims about ATS without a source were removed; the one statistic links to its study.
 * Answers are plain text so they render as visible HTML (no accordion, no JS).
 */

export interface FaqItem {
  q: string;
  a: string;
  source?: { href: string; label: string };
}

export interface HomeContent {
  hero: { label: string; title: string; titleSub: string; intro: string; cta: string; portraitAlt: string };
  fullstack: { label: string; title: string; intro: string; items: FaqItem[] };
  ats: { label: string; title: string; intro: string[]; readMore: string; items: FaqItem[] };
  contact: { title: string; text: string; links: { about: string; ats: string } };
}

const RESUMEGO = "https://www.resumego.net/research/how-much-time-spend-resume/";

export const home: Record<"en" | "sv", HomeContent> = {
  en: {
    hero: {
      label: "Full stack developer · Gothenburg",
      title: "Hi, I’m Sanne.",
      titleSub: "A full stack developer in Gothenburg.",
      intro:
        "Since June 2026 I work as a developer at Understandit, a digital agency in Gothenburg. I build web applications from the interface to the database, mostly with Next.js, TypeScript, Node.js and PostgreSQL.",
      cta: "More about me",
      portraitAlt: "Portrait of Sanne Delin, full stack developer in Gothenburg",
    },
    fullstack: {
      label: "01 / The role",
      title: "What is a full stack developer?",
      intro: "Short, concrete answers about what the role actually involves.",
      items: [
        {
          q: "What is a full stack developer?",
          a: "A developer who works on every layer of a web application: the interface in the browser, the server code behind it, the database and the setup that gets it deployed. Take a sign-up form: a full stack developer builds the form, the API endpoint that receives it, the validation and the table where the account is stored.",
        },
        {
          q: "What’s the difference between frontend and backend?",
          a: "The frontend is what runs in the visitor’s browser: layout, interaction and accessibility. The backend runs on a server and handles what the browser can’t be trusted with, such as checking passwords, applying business rules and reading or writing data.",
        },
        {
          q: "Which technologies do you use?",
          a: "Most often Next.js and React with TypeScript for the frontend, Node.js with Express for APIs, and PostgreSQL with Prisma or Drizzle for data. For AI features I use the Claude API.",
        },
        {
          q: "Is full stack only about code?",
          a: "No. Much of the work is deciding where something belongs, in the browser, on the server or in the database, and making the parts agree on the same data. In a team it also means agreeing on repo structure, branching and code review, so several people can work in the same codebase.",
        },
      ],
    },
    ats: {
      label: "02 / ATS",
      title: "Writing a CV that gets read",
      intro: [
        "When I was job hunting after university, I realised how much the way a CV is written decides whether anyone reads it. I sent out a designed Canva CV and heard nothing back. Once I understood how applicant tracking systems read a CV, I rebuilt mine as a plain, machine-readable document and started getting interviews.",
        "I’m not job hunting anymore, but I’ve kept this here because what I learned is useful to anyone who is.",
      ],
      readMore: "Read more about ATS",
      items: [
        {
          q: "What is an ATS?",
          a: "An applicant tracking system: software employers use to collect, sort and search applications. It reads your CV into fields so recruiters can filter candidates and search for words from the job posting. Teamtailor, Workday, Greenhouse and Lever are common examples.",
        },
        {
          q: "Why did my designed CV fail?",
          a: "One likely reason: the system first splits a CV into sections such as contact details, experience and skills. Columns, text boxes and graphics can end up in the wrong fields or not at all, and what isn’t parsed won’t show up when a recruiter searches.",
        },
        {
          q: "What makes a CV readable for an ATS?",
          a: "One column, standard headings like “Experience”, “Education” and “Skills”, no images or tables, a .docx or PDF file rather than an image, and the job posting’s own words for your skills.",
        },
        {
          q: "Do the exact words matter?",
          a: "Often, yes. If a recruiter searches the system for “project management”, a CV that only says “led projects” may not come up, and a typo like “Javascrpit” won’t match “JavaScript”.",
        },
        {
          q: "Does a human read it in the end?",
          a: "Yes, but briefly. In a 2024 ResumeGo survey of 418 recruiters, 81% said they spend under a minute on the first screening.",
          source: { href: RESUMEGO, label: "ResumeGo survey, 2024" },
        },
      ],
    },
    contact: {
      title: "Let’s connect",
      text: "Always happy to connect with people working on interesting technology.",
      links: { about: "About", ats: "ATS" },
    },
  },

  sv: {
    hero: {
      label: "Fullstackutvecklare · Göteborg",
      title: "Hej, jag heter Sanne.",
      titleSub: "Fullstackutvecklare i Göteborg.",
      intro:
        "Sedan juni 2026 arbetar jag som utvecklare på Understandit, en digital byrå i Göteborg. Jag bygger webbapplikationer från gränssnitt till databas, oftast med Next.js, TypeScript, Node.js och PostgreSQL.",
      cta: "Mer om mig",
      portraitAlt: "Porträtt av Sanne Delin, fullstackutvecklare i Göteborg",
    },
    fullstack: {
      label: "01 / Rollen",
      title: "Vad är en fullstackutvecklare?",
      intro: "Korta, konkreta svar om vad rollen faktiskt innebär.",
      items: [
        {
          q: "Vad är en fullstackutvecklare?",
          a: "En utvecklare som arbetar i alla lager av en webbapplikation: gränssnittet i webbläsaren, serverkoden bakom, databasen och det som behövs för att driftsätta den. Ta ett registreringsformulär: en fullstackutvecklare bygger formuläret, API-endpointen som tar emot det, valideringen och tabellen där kontot sparas.",
        },
        {
          q: "Vad är skillnaden mellan frontend och backend?",
          a: "Frontend är det som körs i besökarens webbläsare: layout, interaktion och tillgänglighet. Backend körs på en server och sköter det webbläsaren inte kan litas på med, som att kontrollera lösenord, tillämpa affärsregler och läsa eller skriva data.",
        },
        {
          q: "Vilka tekniker använder du?",
          a: "Oftast Next.js och React med TypeScript för frontend, Node.js med Express för API:er och PostgreSQL med Prisma eller Drizzle för data. För AI-funktioner använder jag Claude API.",
        },
        {
          q: "Handlar fullstack bara om kod?",
          a: "Nej. En stor del av arbetet är att avgöra var något hör hemma, i webbläsaren, på servern eller i databasen, och att få delarna att vara överens om samma data. I ett team handlar det också om att komma överens om repostruktur, brancher och kodgranskning, så att flera kan arbeta i samma kodbas.",
        },
      ],
    },
    ats: {
      label: "02 / ATS",
      title: "Ett CV som blir läst",
      intro: [
        "När jag sökte jobb efter utbildningen insåg jag hur mycket sättet ett CV är skrivet på avgör om någon läser det. Jag skickade ut ett designat CV från Canva och fick inga svar. När jag förstod hur rekryteringssystem läser ett CV byggde jag om mitt som ett enkelt, maskinläsbart dokument och började bli kallad till intervjuer.",
        "Jag söker inte jobb längre, men jag har kvar det här eftersom det jag lärde mig är användbart för alla som gör det.",
      ],
      readMore: "Läs mer om ATS (på engelska)",
      items: [
        {
          q: "Vad är ett ATS?",
          a: "Ett applicant tracking system, alltså ett rekryteringssystem som arbetsgivare använder för att samla in, sortera och söka bland ansökningar. Det läser in ditt CV i fält så att rekryterare kan filtrera kandidater och söka på ord från jobbannonsen. Teamtailor, Workday, Greenhouse och Lever är vanliga exempel.",
        },
        {
          q: "Varför fungerade inte mitt designade CV?",
          a: "En trolig förklaring: systemet delar först upp CV:t i avsnitt som kontaktuppgifter, erfarenhet och kompetenser. Kolumner, textrutor och grafik kan hamna i fel fält eller inte läsas in alls, och det som inte läses in syns inte när en rekryterare söker.",
        },
        {
          q: "Vad gör ett CV läsbart för ett ATS?",
          a: "En kolumn, vanliga rubriker som ”Erfarenhet”, ”Utbildning” och ”Kompetenser”, inga bilder eller tabeller, en .docx- eller PDF-fil i stället för en bild, och jobbannonsens egna ord för dina kompetenser.",
        },
        {
          q: "Spelar de exakta orden roll?",
          a: "Ofta, ja. Om en rekryterare söker på ”projektledning” i systemet kanske ett CV som bara säger ”ledde projekt” inte kommer upp, och ett stavfel som ”Javascrpit” matchar inte ”JavaScript”.",
        },
        {
          q: "Läser en människa det till slut?",
          a: "Ja, men kort. I en enkät från ResumeGo 2024 med 418 rekryterare svarade 81 procent att de lägger mindre än en minut på den första gallringen.",
          source: { href: RESUMEGO, label: "ResumeGo, 2024 (engelska)" },
        },
      ],
    },
    contact: {
      title: "Hör av dig",
      text: "Jag knyter gärna kontakt med människor som arbetar med intressant teknik.",
      links: { about: "Om mig", ats: "ATS" },
    },
  },
};
