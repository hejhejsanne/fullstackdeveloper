// Guards for the simplified site: old links keep working, both languages stay in step,
// and every cited claim keeps a working-looking source link.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readdir } from 'node:fs/promises';
import nextConfig from '../next.config.ts';
import { home } from '../src/data/home.ts';

test('removed project pages redirect permanently to /about', async () => {
  const redirects = await nextConfig.redirects();
  for (const source of ['/projects', '/projects/:slug']) {
    const rule = redirects.find(r => r.source === source);
    assert.ok(rule, `missing redirect for ${source}`);
    assert.equal(rule.destination, '/about');
    assert.equal(rule.permanent, true);
  }
});

test('English and Swedish home pages have the same structure', () => {
  const { en, sv } = home;
  assert.equal(sv.fullstack.items.length, en.fullstack.items.length);
  assert.equal(sv.ats.items.length, en.ats.items.length);
  assert.equal(sv.ats.intro.length, en.ats.intro.length);
  en.ats.items.forEach((item, i) => assert.equal(Boolean(sv.ats.items[i].source), Boolean(item.source), `source mismatch on ATS item ${i}`));
});

test('every FAQ answer is filled in and every source is an https link', () => {
  for (const lang of ['en', 'sv']) {
    for (const item of [...home[lang].fullstack.items, ...home[lang].ats.items]) {
      assert.ok(item.q.trim() && item.a.trim(), `${lang}: empty FAQ item`);
      if (item.source) assert.match(item.source.href, /^https:\/\//, `${lang}: ${item.q}`);
    }
  }
});

test('no API routes remain (the site needs no backend secrets)', async () => {
  const app = await readdir(new URL('../src/app', import.meta.url));
  assert.ok(!app.includes('api'), 'src/app/api exists again; document its env vars before shipping');
});
