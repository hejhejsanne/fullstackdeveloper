# fullstackdeveloper.se

Sanne Delin’s personal portfolio, built with Next.js App Router, React and TypeScript.

## Local development

```sh
npm ci
npm run dev
```

Next.js uses http://localhost:3000 by default. If that port is occupied, use the address printed by the server.

```sh
npm run lint
npm run build
npm start
```

## Content and styling

- `src/data/profile.ts` is the source of truth for current employment and contact information.
- `src/data/home.ts` contains all home page copy (English and Swedish): intro, the full stack FAQ, the ATS summary and contact.
- `src/data/navigation.ts` is the single list of pages used by header and footer.
- `src/data/index.ts` contains technical skills (shown on /about).
- Project pages were removed in November 2026; `/projects` and `/projects/*` redirect permanently to `/about` (see `next.config.ts`).
- `src/styles/tokens.css` defines the design system; shared rules and component styles are separate files.
- English and Swedish routes have separate root layouts, so their language is present in server-rendered HTML. Route groups do not change public URLs.

## Search and privacy

Public content is rendered in HTML. Each page has its own canonical URL. Only the English and Swedish landing pages advertise language alternates. The sitemap includes all public pages and project details; no synthetic modification dates are published.

Search and user-requested AI retrieval are allowed. Training crawlers remain blocked in `robots.ts`, including Google-Extended. Robots directives are crawler instructions, not access controls. API responses are marked noindex and no-store.

Visitor analytics and WebGL background rendering are not loaded by the site layouts. Person structured data uses the same profile as visible current-employment content. No search or AI-answer placement is guaranteed.

## Integrations

Chat requires an Anthropic API key. The optional missing-information notification requires Resend credentials. Review `.env.example` and the API routes before configuring these services. Do not commit credentials.

The CV download flow (LinkedIn sign-in, `/api/cv-download` and the CV files) has been removed. The ATS section is kept as content about writing a CV, not as a download.
