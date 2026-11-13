# Immortals Robotics website

Source for <https://immortals-robotics.github.io>, the website of Immortals, a RoboCup Small Size League team.

Static site built with [Astro](https://astro.build). No client framework; the only JavaScript is the theme toggle, the mobile menu and the gallery lightbox.

## Develop

Requires Node.js 22 (20.3+ works).

```bash
npm ci
npm run dev        # http://localhost:4321
npm run check      # type-check .astro/.ts and validate content
npm run build      # output in dist/
npm run preview    # serve dist/
```

Pushing to `main` builds and deploys to GitHub Pages (`.github/workflows/deploy.yml`). Pull requests run the type-check and build only.

## Where things live

```
src/
  content/              ← almost all edits happen here
    news/*.md           one post per file; file name = URL (/news/<name>/)
    robots/*.md         one robot generation per file
    gallery/*.yaml      one album per file
    achievements.yaml   competition results
    team.yaml           team members
    publications.yaml   TDPs, papers, theses, software
  content.config.ts     schemas for the above (build fails on invalid content)
  assets/               images, referenced from content files by relative path
  data/site.ts          site name, nav, social links, contact email
  layouts/Layout.astro  <head>, header, footer, theme handling
  styles/global.css     design tokens (light/dark) and shared classes
  pages/                routes
public/                 files served as-is (favicon, robots.txt)
docs/                   brand palette
```

## Adding content

**News post**: create `src/content/news/my-post.md`:

```md
---
title: 'RoboCup 2026: quarter-finals'
date: 2026-07-20
summary: One or two sentences for the news list and link previews.
cover: ../../assets/news/robocup-2026.jpg   # optional
coverAlt: What the photo shows               # required if cover is set
---

Markdown body…
```

**Photos**: put the files in `src/assets/gallery/<album>/` and list them in `src/content/gallery/<album>.yaml` with an `alt` text (and optional `caption`). Use kebab-case file names, no spaces.

**Achievement, team member, publication**: add an entry to the corresponding YAML file; the comment at the top of each file shows the fields.

### Images

Put images in `src/assets/`, not `public/`. Astro resizes them and serves WebP/AVIF at the sizes each page needs. Keep originals reasonable (≤ 2560 px on the long edge, JPEG for photos). Phone photos in HEIC must be converted to JPEG first; browsers can't display HEIC.

## Theming

Colours are CSS custom properties in `src/styles/global.css`, defined once for light and once for dark. Use the tokens (`var(--accent)`, `var(--surface)`, …) instead of hex values so both themes keep working. The visitor's OS setting picks the initial theme; the header button overrides it and is remembered.
