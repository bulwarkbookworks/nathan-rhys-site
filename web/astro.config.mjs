import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { createClient } from '@sanity/client';

import mcp from 'astro-mcp';

// Resolve the active mode from the CLI so `loadEnv` reads the right `.env.[mode]` file:
// `astro dev` -> development, `astro build --mode X` -> X, otherwise -> production.
function resolveMode() {
  const argv = process.argv;
  const flag = argv.indexOf('--mode');
  if (flag !== -1 && argv[flag + 1]) return argv[flag + 1];
  if (argv.includes('dev')) return 'development';
  return 'production';
}

// `site` (and therefore the sitemap URLs + the xsl reference) is environment-driven.
// Order of precedence: real process env (CI/host) -> .env.[mode] file -> production default.
const env = loadEnv(resolveMode(), process.cwd(), '');
const SITE_URL = process.env.SITE_URL || env.SITE_URL || 'https://nathan-rhys.github.io'; // Update the production default when the real domain is live.

// Minimal build-time Sanity client (mirrors src/lib/sanity.ts).
// useCdn is disabled so the sitemap reflects the latest exclusion flags at build time.
const sanity = createClient({
  projectId: '2p1tkf9p',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-03-12',
});

// Map a Sanity document to the same route its page uses (mirrors resolveLink in src/lib/sanity.ts).
function docToPath(doc) {
  switch (doc._type) {
    case 'home':
      return '/';
    case 'standardPage':
      return doc.slug ? `/${doc.slug}` : null;
    case 'book':
      if (!doc.slug) return null;
      return doc.seriesSlug ? `/${doc.seriesSlug}/${doc.slug}` : `/${doc.slug}`;
    case 'artist':
      return doc.slug ? `/artists/${doc.slug}` : null;
    case 'artistsPage':
      return '/artists';
    case 'galleryPage':
      return '/gallery';
    case 'newsletters':
      return '/newsletters';
    case 'newsletterThankYou':
      return '/newsletters/thank-you';
    case 'newsletter': {
      if (!doc.slug || !doc.publishDate) return null;
      const date = new Date(doc.publishDate);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      return `/newsletters/${year}/${month}/${doc.slug}`;
    }
    default:
      return null; // siteMetadata and any non-page types have no URL
  }
}

// Normalize a path or full URL to a leading-slash, no-trailing-slash pathname for comparison.
function normalizePath(input) {
  let path = input;
  try {
    path = new URL(input).pathname;
  } catch {
    // already a pathname
  }
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
  return path || '/';
}

// Build the set of excluded pathnames from Sanity. Failures never break the build.
let excludedPaths = new Set();
try {
  const excludedDocs = await sanity.fetch(
    `*[metadata.excludeFromSitemap == true]{
      _type,
      "slug": slug.current,
      "seriesSlug": series->slug.current,
      publishDate
    }`
  );
  excludedPaths = new Set(
    excludedDocs.map(docToPath).filter(Boolean).map(normalizePath)
  );
} catch (err) {
  console.warn('[sitemap] Could not fetch exclusion flags from Sanity; including all pages.', err?.message ?? err);
}

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: '/',
  outDir: '../dist/web',
  integrations: [sitemap({
    // Relative so it resolves against `site` -> always same-origin as the sitemap,
    // which is required for browsers to actually apply the XSL styling.
    xslURL: '/sitemap.xsl',
    filter: (page) => !excludedPaths.has(normalizePath(page)),
  }), mcp()],
  vite: {
    plugins: [tailwindcss()],
  },
});