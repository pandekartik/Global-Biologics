import { OrthoTemplate } from "@/components/templates";
import {
  getFeaturedProducts,
  getFeaturedTestimonials,
  getSiteMeta,
  getSolutions,
} from "@/lib/content";

export default async function OrthoPage() {
  const [site, products, testimonials, solutions] = await Promise.all([
    getSiteMeta(),
    getFeaturedProducts(),
    getFeaturedTestimonials(),
    getSolutions(),
  ]);

  return (
    <OrthoTemplate
      site={site}
      products={products}
      testimonials={testimonials}
      solutions={solutions}
    />
  );
}
