# fullstackdeveloper.se

Sanne Delin’s personal website, built with Next.js App Router, React and TypeScript.

## Local development

```sh
npm ci
npm run dev
```

Next.js uses http://localhost:3000 by default. If that port is occupied, use the address printed by the server.

```sh
npm run lint
npm test
npm run build
npm start
```

## Pages

Swedish is the primary language. Three pages, all statically generated:

| URL | Purpose |
|---|---|
| `/` | Name, role, employer, contact and portrait. Kept to about one desktop screen on purpose. |
| `/fullstackutvecklare` | What the role is, frontend vs backend vs fullstack, Sanne's background and skills, FAQ. |
| `/ats` | Sourced guide to ATS-friendly CVs, with table of contents and FAQ. |

Old URLs redirect permanently (308) in `next.config.ts`: `/about` and `/projects/*` to `/fullstackutvecklare`, `/contact` to `/#kontakt`.

## Content

- `src/data/profile.ts`: personal facts (name, employer, email, profiles, portrait). Used in visible text and JSON-LD so they always agree.
- `src/content/sv/fullstack.ts`: skills and FAQ for `/fullstackutvecklare`. Personal facts come only from Sanne's own earlier About text; do not add experience she has not confirmed.
- `src/content/sv/ats.ts`: ATS sources, table of contents, FAQ and the article dates. Every number and every claim about how a system behaves must link to a source listed there. Update `modified` when the article changes.
- Long-form text is in the page files under `src/app/(sv)/`.

## Languages (English later)

`src/i18n/config.ts` holds one table of paths per page and language. Today only Swedish is listed. To publish English:

1. Write the English content (no machine-translated filler, no empty pages).
2. Add the paths to `routes`, e.g. `ats: { sv: "/ats", en: "/en/ats-resume-guide" }`.
3. Add an `src/app/(en)/` route group with its own root layout (`<html lang="en">`) and the pages under `en/`.
4. Add an `en` entry in `src/i18n/dictionaries.ts`.

hreflang alternates (with `x-default`), the sitemap and the SV / EN switcher in the navigation then appear automatically, and only for pages that exist in both languages. The switcher keeps the visitor on the same page. Tests in `tests/site.test.mjs` cover this before any English page exists.

## Design

Scandinavian, warm neutrals with a restrained iOS "Liquid Glass" material: DM Serif Display for headings, DM Sans for text (self-hosted by `next/font`). Tokens are in `src/styles/tokens.css`.

- Glass (`.glass`, `.glass-button`) is used for navigation, the contact button, FAQ panels and the back-to-top button only. Long text sits on solid or near-solid backgrounds for readability.
- The page background has soft, fixed peach and lavender light so the glass has something to blur. Pure CSS, no WebGL.
- The accent `#d77f6e` is 2.7:1 against the background, so it is decoration only. Text links, eyebrows and focus rings use `--accent-ink` (5.9:1).
- FAQ uses `<details>`: answers are in the server-rendered HTML and open with keyboard, no JavaScript.

## Search and privacy

Each page has a unique title, description, self-referencing canonical, Open Graph (`sv_SE`) and JSON-LD: Person and WebSite on `/`, WebPage on `/fullstackutvecklare`, Article with author and dates on `/ats`. FAQ markup is deliberately not used for rich results; Google limits FAQ rich results to authoritative government and health sites.

Search and user-requested AI retrieval are allowed. Training crawlers remain blocked in `robots.ts`, including Google-Extended. Robots directives are crawler instructions, not access controls. No search or AI-answer placement is guaranteed.

## Integrations

The site has no backend integrations and needs no environment variables. It is static content served by Next.js.

The AiSan chat (`/api/chat`, `/api/notify-missing-info`, Anthropic, Upstash Redis and Resend) was removed in November 2026 because it was no longer wanted on the site. It is in git history if it is ever needed again.

The CV download flow (LinkedIn sign-in, `/api/cv-download` and the CV files) has been removed. The ATS section is kept as content about writing a CV, not as a download.
