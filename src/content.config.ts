import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
  }),
});

const principles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/principles" }),
  schema: z.object({
    title: z.string(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: z.object({
    name: z.string(),
    links: z
      .array(
        z.object({
          name: z.string(),
          icon: z.string(),
          url: z.string().url(),
        }),
      )
      .optional(),
  }),
});

const friends = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: z.object({
    name: z.string(),
    links: z
      .array(
        z.object({
          name: z.string(),
          icon: z.string(),
          url: z.string().url(),
        }),
      )
      .optional(),
  }),
});

export const collections = {
  pages,
  principles,
  team,
  friends,
};
