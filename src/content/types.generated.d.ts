declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"friends": {
"1-madeleine-van-venetie.md": {
  id: "1-madeleine-van-venetie.md",
  slug: "1-madeleine-van-venetie",
  body: string,
  collection: "friends",
  data: InferEntrySchema<"friends">
},
},
"pages": {
"imprint.md": {
  id: "imprint.md",
  slug: "imprint",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
},
"privacy.md": {
  id: "privacy.md",
  slug: "privacy",
  body: string,
  collection: "pages",
  data: InferEntrySchema<"pages">
},
},
"principles": {
"1-purpose-over-profit.md": {
  id: "1-purpose-over-profit.md",
  slug: "1-purpose-over-profit",
  body: string,
  collection: "principles",
  data: InferEntrySchema<"principles">
},
"2-inspired-by-nature.md": {
  id: "2-inspired-by-nature.md",
  slug: "2-inspired-by-nature",
  body: string,
  collection: "principles",
  data: InferEntrySchema<"principles">
},
"3-interconnected.md": {
  id: "3-interconnected.md",
  slug: "3-interconnected",
  body: string,
  collection: "principles",
  data: InferEntrySchema<"principles">
},
"4-lifecycle-aware.md": {
  id: "4-lifecycle-aware.md",
  slug: "4-lifecycle-aware",
  body: string,
  collection: "principles",
  data: InferEntrySchema<"principles">
},
"5-long-term-thinking-and-doing.md": {
  id: "5-long-term-thinking-and-doing.md",
  slug: "5-long-term-thinking-and-doing",
  body: string,
  collection: "principles",
  data: InferEntrySchema<"principles">
},
"6-sufficiency.md": {
  id: "6-sufficiency.md",
  slug: "6-sufficiency",
  body: string,
  collection: "principles",
  data: InferEntrySchema<"principles">
},
"7-equal-and-thriving.md": {
  id: "7-equal-and-thriving.md",
  slug: "7-equal-and-thriving",
  body: string,
  collection: "principles",
  data: InferEntrySchema<"principles">
},
"8-de-centring-and-reimagining.md": {
  id: "8-de-centring-and-reimagining.md",
  slug: "8-de-centring-and-reimagining",
  body: string,
  collection: "principles",
  data: InferEntrySchema<"principles">
},
"9-acknowledging-of-all-lifeforms.md": {
  id: "9-acknowledging-of-all-lifeforms.md",
  slug: "9-acknowledging-of-all-lifeforms",
  body: string,
  collection: "principles",
  data: InferEntrySchema<"principles">
},
},
"team": {
"1-katharina-clasen.md": {
  id: "1-katharina-clasen.md",
  slug: "1-katharina-clasen",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
"2-estela-duhart-benavides.md": {
  id: "2-estela-duhart-benavides.md",
  slug: "2-estela-duhart-benavides",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
"3-damien-lutz.md": {
  id: "3-damien-lutz.md",
  slug: "3-damien-lutz",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
"4-jeroen-spoelstra.md": {
  id: "4-jeroen-spoelstra.md",
  slug: "4-jeroen-spoelstra",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
"5-dr.-martin-tomitsch.md": {
  id: "5-dr.-martin-tomitsch.md",
  slug: "5-dr.-martin-tomitsch",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
"6-monika-sznel.md": {
  id: "6-monika-sznel.md",
  slug: "6-monika-sznel",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
},

	};

	type ContentConfig = typeof import("./config");
}
