import { LandingPageTemplate } from "@/components/templates";
import type { LandingPage } from "@/lib/types";
import {
  getLandingPageBySlug,
  getProducts,
  getSiteMeta,
  getSolutions,
  getTeam,
  getTestimonials,
} from "@/lib/content";

export default async function OrthoProductsPage() {
  const [site, products, solutions, testimonials, team, page] = await Promise.all([
    getSiteMeta(),
    getProducts(),
    getSolutions(),
    getTestimonials(),
    getTeam(),
    getLandingPageBySlug("ortho-products"),
  ]);

  const fallbackPage: LandingPage =
    page ?? {
      slug: "ortho-products",
      title: "Orthopedic Care Range",
      description: "Condition-specific herbal orthopedic care powered by CMS-managed product data.",
      sections: [
        {
          type: "hero",
          eyebrow: "Orthopedic Care Range",
          title: "Condition-specific, steroid-free product pages that scale.",
          description:
            "Use Decap CMS to add orthopedic products, configure landing pages, and publish new campaigns without code changes.",
          primaryCta: { label: "Explore products", href: "#products" },
          secondaryCta: { label: "View home", href: "/" },
        },
        {
          type: "product-grid",
          heading: "Featured products",
          description: "Selected from the product collection.",
          productSlugs: products.map((product) => product.slug),
        },
      ],
    };

  return (
    <LandingPageTemplate
      site={site}
      page={fallbackPage}
      products={products}
      solutions={solutions}
      testimonials={testimonials}
      team={team}
    />
  );
}
