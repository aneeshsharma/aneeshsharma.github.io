import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: file('src/content/projects.yaml'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    href: z.string().optional(),
    tags: z.array(z.string()),
    span: z.number(),
    image: z.string().optional(),
    accent: z.enum(['yellow', 'orange', 'green', 'greenAlt', 'blue', 'purple']),
    order: z.number(),
  }),
});

const experience = defineCollection({
  loader: file('src/content/experience.yaml'),
  schema: z.object({
    id: z.string(),
    period: z.string(),
    role: z.string(),
    company: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

const skills = defineCollection({
  loader: file('src/content/skills.yaml'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    accent: z.enum(['yellow', 'orange', 'green', 'greenAlt', 'blue', 'purple']).optional(),
    order: z.number(),
  }),
});

export const collections = { blog, projects, experience, skills };
