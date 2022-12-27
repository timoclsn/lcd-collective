import { z, defineCollection } from 'astro:content';

const pages = defineCollection({
  schema: {
    title: z.string(),
  }
});

export const collections = {
  pages,
};