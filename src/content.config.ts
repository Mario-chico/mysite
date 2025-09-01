import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    image: z.object({
      url: z.string(),
      alt: z.string()
    })
  })
});

const exerciseSchema = z.object({
    order: z.string(),
    exercise: z.string(),
    sets: z.union([z.number(), z.string()]),
    reps: z.string(),
    link: z.string().url().optional(),
    tempo: z.string(),
    rest: z.string(),
    note: z.string().optional(),
    yt: z.string().optional(),
  })

const traineeCollection = defineCollection({
  type: 'data',
  schema: z.object({
    day: z.number(),
    week: z.number(),
    dia_de_semana: z.string(),
    exercises: z.array(exerciseSchema),
  })
});

export const collections = {
  'blog': blogCollection,
  'dani': traineeCollection,
  'brayan': traineeCollection,
  'handstand': traineeCollection,
  'vado': traineeCollection
};