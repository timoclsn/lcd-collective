import { z, defineCollection } from "astro:content";

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

const principles = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

const team = defineCollection({
  schema: z.object({
    name: z.string(),
    links: z
      .array(
        z.object({
          name: z.string(),
          icon: z.string(),
          url: z.string().url(),
        })
      )
      .optional(),
  }),
});

const friends = defineCollection({
  schema: z.object({
    name: z.string(),
  }),
});

export const collections = {
  pages,
  principles,
  team,
  friends,
};
