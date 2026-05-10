import { LandingPageTemplate } from "@/components/templates";
import {
  getLandingPageByPath,
  getProducts,
  getSiteMeta,
  getSolutions,
  getTeam,
  getTestimonials,
} from "@/lib/content";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { getLandingPages } = await import("@/lib/content");
  const pages = await getLandingPages();
  return pages.map((page) => ({ slug: page.slug }));
}

export default async function GenericLandingPage({ params }: Props) {
  const { slug } = await params;
  const [site, page, products, solutions, testimonials, team] = await Promise.all([
    getSiteMeta(),
    getLandingPageByPath(slug),
    getProducts(),
    getSolutions(),
    getTestimonials(),
    getTeam(),
  ]);

  if (!page) {
    notFound();
  }

  return (
    <LandingPageTemplate
      site={site}
      page={page}
      products={products}
      solutions={solutions}
      testimonials={testimonials}
      team={team}
    />
  );
}
