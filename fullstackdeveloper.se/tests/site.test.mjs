// Guards for the Swedish-first site: old links keep working, language routing stays correct
// before and after English is added, and every cited claim keeps a source.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readdir } from 'node:fs/promises';
import nextConfig from '../next.config.ts';
import { routes, alternatesFor, pageLanguages, pageForPath } from '../src/i18n/config.ts';
import * as fullstack from '../src/content/sv/fullstack.ts';
import * as ats from '../src/content/sv/ats.ts';

test('old English and project URLs redirect permanently to the Swedish pages', async () => {
  const redirects = await nextConfig.redirects();
  const expected = { '/about': '/fullstackutvecklare', '/contact': '/#kontakt', '/projects': '/fullstackutvecklare', '/projects/:slug': '/fullstackutvecklare' };
  for (const [source, destination] of Object.entries(expected)) {
    const rule = redirects.find(r => r.source === source);
    assert.ok(rule, `missing redirect for ${source}`);
    assert.equal(rule.destination, destination);
    assert.equal(rule.permanent, true);
  }
});

test('every page is published in Swedish at its agreed URL', () => {
  assert.deepEqual({ home: routes.home.sv, fullstack: routes.fullstack.sv, ats: routes.ats.sv }, { home: '/', fullstack: '/fullstackutvecklare', ats: '/ats' });
});

test('no hreflang alternates while a page exists in one language only', () => {
  for (const page of Object.keys(routes)) {
    assert.deepEqual(pageLanguages(page), ['sv']);
    assert.deepEqual(Object.keys(alternatesFor(page, 'sv')), ['canonical']);
  }
});

test('once English exists, both versions point to each other plus x-default', () => {
  const future = { ...routes, ats: { sv: '/ats', en: '/en/ats-resume-guide' } };
  assert.deepEqual(alternatesFor('ats', 'en', future), {
    canonical: '/en/ats-resume-guide',
    languages: { sv: '/ats', en: '/en/ats-resume-guide', 'x-default': '/ats' },
  });
  assert.deepEqual(alternatesFor('fullstack', 'sv', future), { canonical: '/fullstackutvecklare' });
  // The switcher keeps the visitor on the same page in the other language.
  assert.deepEqual(pageForPath('/en/ats-resume-guide', future), { page: 'ats', lang: 'en' });
});

test('FAQ answers are filled in and every source is an https link', () => {
  for (const item of [...fullstack.faq, ...ats.faq]) {
    assert.ok(item.q.trim().endsWith('?'), `not a question: ${item.q}`);
    assert.ok(item.a.length > 0 && item.a.every(p => p.trim()), `empty answer: ${item.q}`);
    for (const src of item.sources ?? []) assert.match(src.href, /^https:\/\//);
  }
  for (const s of Object.values(ats.sources)) assert.match(s.href, /^https:\/\//);
});

test('ATS article dates are valid ISO dates and modified is not before published', () => {
  assert.match(ats.published, /^\d{4}-\d{2}-\d{2}$/);
  assert.match(ats.modified, /^\d{4}-\d{2}-\d{2}$/);
  assert.ok(ats.modified >= ats.published);
});

test('no API routes remain (the site needs no backend secrets)', async () => {
  const app = await readdir(new URL('../src/app', import.meta.url), { recursive: true });
  assert.ok(!app.some(p => p.split(/[\\/]/).includes('api')), 'an api folder exists again; document its env vars before shipping');
});
