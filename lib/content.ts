import "server-only";

import fs from "node:fs/promises";
import path from "node:path";
import { z } from "zod";
import type {
  LandingPage,
  Product,
  Solution,
  TeamMember,
  Testimonial,
  VideoTestimonial,
} from "./types";

const contentRoot = path.join(process.cwd(), "content");

const productSchema = z.object({
  slug: z.string(),
  title: z.string(),
  category: z.string(),
  summary: z.string(),
  description: z.string(),
  price: z.string().optional(),
  strikePrice: z.string().optional(),
  brand: z.string().optional(),
  volume: z.string().optional(),
  composition: z.string().optional(),
  usage: z.string().optional(),
  badge: z.string().optional(),
  ctaLabel: z.string().optional(),
  ctaHref: z.string().optional(),
  image: z.string().optional(),
  thumbnails: z.array(z.string()).optional(),
  benefits: z.array(z.string()).default([]),
  conditions: z.array(z.string()).default([]),
  featured: z.boolean().optional(),
}) as z.ZodType<Product>;

const solutionSchema: z.ZodType<Solution> = z.object({
  slug: z.string(),
  label: z.string().optional(),
  title: z.string(),
  summary: z.string(),
  description: z.string(),
  icon: z.string().optional(),
  bullets: z.array(z.string()).optional().default([]),
  featured: z.boolean().optional(),
});

const teamSchema: z.ZodType<TeamMember> = z.object({
  slug: z.string(),
  name: z.string(),
  role: z.string(),
  summary: z.string(),
  bio: z.string(),
  avatar: z.string().optional(),
});

const testimonialSchema: z.ZodType<Testimonial> = z.object({
  slug: z.string(),
  quote: z.string(),
  name: z.string(),
  role: z.string(),
  company: z.string().optional(),
  rating: z.number().optional(),
  avatar: z.string().optional(),
  featured: z.boolean().optional(),
});

const videoTestimonialSchema: z.ZodType<VideoTestimonial> = z.object({
  slug: z.string(),
  name: z.string(),
  description: z.string(),
  coverImage: z.string(),
  videoUrl: z.string().optional(),
});

const landingSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  navLabel: z.string().optional(),
  navLogo: z.string().optional(),
  sections: z.array(z.any()),
}) as z.ZodType<LandingPage>;

async function readJsonFile<T>(segments: string[], schema: z.ZodType<T>) {
  const file = path.join(contentRoot, ...segments);
  const raw = await fs.readFile(file, "utf8");
  const parsed = JSON.parse(raw);
  return schema.parse(parsed);
}

async function readJsonDir<T>(
  segments: string[],
  schema: z.ZodType<T>,
  filter?: (fileName: string) => boolean,
) {
  const dir = path.join(contentRoot, ...segments);
  const files = await fs.readdir(dir);
  const matched = files.filter((file) => file.endsWith(".json") && (!filter || filter(file)));
  const entries = await Promise.all(
    matched.map(async (file) => readJsonFile([...segments, file], schema)),
  );
  return entries;
}

export async function getSiteMeta() {
  return readJsonFile(["site.json"], z.object({
    title: z.string(),
    description: z.string(),
    nav: z.array(z.object({ label: z.string(), href: z.string() })),
    footer: z.object({
      brand: z.string(),
      address: z.string(),
      phone: z.string(),
      email: z.string(),
      website: z.string().optional(),
    }),
  }));
}

export async function getHomePage() {
  return readJsonFile(["pages", "home.json"], landingSchema);
}

export async function getLandingPages() {
  return readJsonDir(["pages", "landing"], landingSchema);
}

export async function getLandingPageBySlug(slug: string) {
  const page = await getLandingPages();
  return page.find((entry) => entry.slug === slug);
}

export async function getProducts() {
  return readJsonDir(["products"], productSchema);
}

export async function getProductBySlug(slug: string) {
  const products = await getProducts();
  const cleanTarget = decodeURIComponent(slug).trim().toLowerCase();
  return products.find((entry) => {
    const entrySlug = entry.slug.trim().toLowerCase();
    return entrySlug === cleanTarget || entrySlug.replaceAll(" ", "-") === cleanTarget.replaceAll(" ", "-");
  });
}

export async function getFeaturedProducts() {
  const products = await getProducts();
  return products.filter((entry) => entry.featured);
}

export async function getSolutions() {
  return readJsonDir(["solutions"], solutionSchema);
}

export async function getFeaturedSolutions() {
  const solutions = await getSolutions();
  return solutions.filter((entry) => entry.featured);
}

export async function getTeam() {
  return readJsonDir(["team"], teamSchema);
}

export async function getTestimonials() {
  return readJsonDir(["testimonials"], testimonialSchema);
}

export async function getFeaturedTestimonials() {
  const testimonials = await getTestimonials();
  return testimonials.filter((entry) => entry.featured);
}

export async function getLandingPageByPath(slug: string) {
  const reserved = new Set(["ortho", "bedsore", "admin", "api"]);
  if (reserved.has(slug)) return undefined;
  return getLandingPageBySlug(slug);
}

export async function getOrthoPageContent() {
  return readJsonFile(["pages", "ortho.json"], z.any());
}

export async function getBedsorePageContent() {
  return readJsonFile(["pages", "bedsore.json"], z.any());
}

export async function getVideoTestimonials() {
  return readJsonDir(["video-testimonials"], videoTestimonialSchema);
}
