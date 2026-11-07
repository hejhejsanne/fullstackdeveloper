/** Single source of truth for personal facts. Used in visible text and in JSON-LD, so they always agree. */
export const profile = {
  name: "Sanne Delin",
  domain: "fullstackdeveloper.se",
  url: "https://fullstackdeveloper.se",
  email: "sanne@fullstackdeveloper.se",
  locality: "Göteborg",
  jobTitle: { sv: "Fullstackutvecklare", en: "Full stack developer" },
  employer: { name: "Understandit", url: "https://understandit.se/", startDate: "2026-06-01" },
  linkedin: "https://linkedin.com/in/sanne-delin-3080aa252",
  portrait: { src: "/sanne.jpg", width: 2001, height: 3000 },
} as const;

export const personId = `${profile.url}/#person`;
