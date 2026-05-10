import { ProductTemplate } from "@/components/templates";
import { getProductBySlug, getSiteMeta } from "@/lib/content";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { getProducts } = await import("@/lib/content");
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const [site, product] = await Promise.all([getSiteMeta(), getProductBySlug(slug)]);

  if (!product) {
    notFound();
  }

  return <ProductTemplate site={site} product={product} />;
}
