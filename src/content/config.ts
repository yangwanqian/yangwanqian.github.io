import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string().optional(),
    year: z.number(),
    type: z.enum(['journal', 'conference', 'preprint', 'patent', 'software']).default('journal'),
    status: z.string().optional(),
    selected: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    links: z
      .object({
        doi: z.string().optional(),
        pdf: z.string().optional(),
        code: z.string().optional(),
        bibtex: z.string().optional()
      })
      .default({})
  })
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    title_cn: z.string().optional(),
    period: z.string().optional(),
    role: z.string().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    links: z
      .object({
        code: z.string().optional(),
        demo: z.string().optional(),
        paper: z.string().optional()
      })
      .default({})
  })
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string()
  })
});

export const collections = { publications, projects, notes, news };
