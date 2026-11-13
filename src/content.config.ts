// Content collections: all site content that isn't page layout lives here as
// Markdown/YAML under src/content/. Schemas are validated at build time.
// Image fields take paths relative to the content file, e.g. ../../assets/x.jpg
import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const news = defineCollection({
  // One Markdown file per post; the file name is the URL slug: /news/<slug>/
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      summary: z.string(),
      author: z.string().default('Immortals Team'),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

const achievements = defineCollection({
  // One entry per competition result, newest first in the file.
  loader: file('src/content/achievements.yaml'),
  schema: z.object({
    year: z.number().int(),
    event: z.string(), // e.g. "RoboCup 2023"
    location: z.string().optional(), // e.g. "Bordeaux, France"
    division: z.string().optional(), // e.g. "Division A"
    /** Final placing in the main tournament, if any (1, 2, 3, 4, ...). */
    place: z.number().int().positive().optional(),
    /** Free-text result when `place` doesn't capture it, e.g. "Quarter-finals". */
    result: z.string().optional(),
    /** Additional awards/challenges at the same event. */
    awards: z.array(z.string()).default([]),
    /** Show on the home page results strip. */
    highlight: z.boolean().default(false),
  }),
});

const team = defineCollection({
  loader: file('src/content/team.yaml'),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      /** Work area, e.g. "Software", "Electronics", "Mechanics". */
      area: z.string().optional(),
      photo: image().optional(),
      github: z.string().url().optional(),
      linkedin: z.string().url().optional(),
      website: z.string().url().optional(),
      alumni: z.boolean().default(false),
      /** Lower comes first. */
      order: z.number().default(100),
    }),
});

const robots = defineCollection({
  // One Markdown file per robot generation; body is the description.
  loader: glob({ pattern: '**/*.md', base: './src/content/robots' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(), // e.g. "Generation 2023"
      year: z.number().int().optional(),
      summary: z.string(),
      images: z.array(z.object({ src: image(), alt: z.string() })).min(1),
      /** Key figures shown as badges, e.g. { label: "Drive power", value: "4 × 50 W" }. */
      specs: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      current: z.boolean().default(false),
    }),
});

const publications = defineCollection({
  loader: file('src/content/publications.yaml'),
  schema: z.object({
    title: z.string(),
    year: z.number().int(),
    kind: z.enum(['tdp', 'etdp', 'paper', 'thesis', 'talk', 'software', 'other']),
    authors: z.array(z.string()).default([]),
    venue: z.string().optional(),
    url: z.string().url().optional(),
  }),
});

const gallery = defineCollection({
  // One YAML file per album; the file name is the album id.
  loader: glob({ pattern: '**/*.yaml', base: './src/content/gallery' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date().optional(),
      description: z.string().optional(),
      /** Lower comes first; albums without a date sort after dated ones. */
      order: z.number().default(100),
      photos: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional(),
          }),
        )
        .min(1),
    }),
});

export const collections = { news, achievements, team, robots, publications, gallery };
