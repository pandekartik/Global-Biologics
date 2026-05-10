import { HomeTemplate } from "@/components/templates";
import { getHomePage, getSiteMeta } from "@/lib/content";

export default async function HomePage() {
  const [site, home] = await Promise.all([
    getSiteMeta(),
    getHomePage(),
  ]);

  return <HomeTemplate site={site} page={home} />;
}
