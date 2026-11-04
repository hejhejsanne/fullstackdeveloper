export const profile = {
  name: "Sanne Delin",
  domain: "fullstackdeveloper.se",
  url: "https://fullstackdeveloper.se",
  email: "sanne@fullstackdeveloper.se",
  location: "Gothenburg",
  role: "Developer",
  employer: { name: "Understandit", url: "https://understandit.se/", startDate: "2026-06-01" },
  github: "https://github.com/hejhejsanne",
  linkedin: "https://linkedin.com/in/sanne-delin-3080aa252",
  en: {
    intro: "Hi, I’m Sanne. A full stack developer in Gothenburg.",
    currentWork: "I work as a developer at Understandit, where I started in June 2026.",
    contact: "Always happy to connect with people working on interesting technology.",
  },
  sv: {
    intro: "Hej, jag heter Sanne. Fullstackutvecklare i Göteborg.",
    currentWork: "Jag arbetar som utvecklare på Understandit sedan juni 2026.",
    contact: "Jag knyter gärna kontakt med människor som arbetar med intressant teknik.",
  },
} as const;
