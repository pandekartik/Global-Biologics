import { Fragment } from "react";
import { Badge, Container } from "./atoms";
import {
  CtaBand,
  FeatureGrid,
  Footer,
  HeroSection,
  HomeHero,
  WhatWeDoSection,
  VisionMissionSection,
  ChallengeApproachSection,
  WhyUsSection,
  SolutionsTabsSection,
  InnovationSection,
  FoundersSection,
  FinalCtaSection,
  ProductGrid,
  SolutionGrid,
  TeamStrip,
  TestimonialBand,
} from "./organisms";
import { SiteNav, SectionHeader } from "./molecules";
import type { LandingPage, Product, Solution, TeamMember, Testimonial } from "@/lib/types";

type Site = {
  title: string;
  description: string;
  nav: Array<{ label: string; href: string }>;
  footer: {
    brand: string;
    address: string;
    phone: string;
    email: string;
    website?: string;
  };
};

function renderSection(
  section: LandingPage["sections"][number],
  context: {
    products: Product[];
    testimonials: Testimonial[];
    team: TeamMember[];
    solutions: Solution[];
  },
  variant: "home" | "standard" = "standard",
) {
  switch (section.type) {
    case "hero":
      return variant === "home" ? (
        <HomeHero
          title={section.title}
          description={section.description}
          primaryCta={section.primaryCta ?? { label: "Explore Solutions", href: "/#solutions" }}
        />
      ) : (
        <HeroSection
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          primaryCta={section.primaryCta}
          secondaryCta={section.secondaryCta}
          highlight={section.highlight}
        />
      );
    case "what-we-do":
      return variant === "home" ? (
        <WhatWeDoSection eyebrow={section.eyebrow} title={section.title} cards={section.cards} />
      ) : null;
    case "vision-mission":
      return variant === "home" ? (
        <VisionMissionSection
          visionEyebrow={section.visionEyebrow}
          visionTitle={section.visionTitle}
          missionEyebrow={section.missionEyebrow}
          missions={section.missions}
        />
      ) : null;
    case "challenge-approach":
      return variant === "home" ? (
        <ChallengeApproachSection
          title={section.title}
          challengeIntro={section.challengeIntro}
          challenges={section.challenges}
          approachIntro={section.approachIntro}
          approaches={section.approaches}
        />
      ) : null;
    case "why-us":
      return variant === "home" ? (
        <WhyUsSection eyebrow={section.eyebrow} title={section.title} cards={section.cards} />
      ) : null;
    case "solutions-tabs":
      return variant === "home" ? (
        <SolutionsTabsSection
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
          tabs={section.tabs}
        />
      ) : null;
    case "innovation":
      return variant === "home" ? (
        <InnovationSection eyebrow={section.eyebrow} title={section.title} cards={section.cards} />
      ) : null;
    case "founders":
      return variant === "home" ? (
        <FoundersSection eyebrow={section.eyebrow} title={section.title} members={section.members} />
      ) : null;
    case "final-cta":
      return variant === "home" ? (
        <FinalCtaSection
          title={section.title}
          description={section.description}
          tags={section.tags}
          primaryCta={section.primaryCta}
        />
      ) : null;
    case "feature-grid":
      return (
        <FeatureGrid
          heading={section.heading}
          description={section.description}
          items={section.items}
          id="capabilities"
        />
      );
    case "product-grid":
      return (
        <ProductGrid
          heading={section.heading}
          description={section.description}
          products={(context.products || []).filter((product) => product && product.slug && (section.productSlugs || []).includes(product.slug))}
          id="products"
        />
      );
    case "solution-grid":
      return (
        <SolutionGrid
          heading={section.heading}
          description={section.description}
          solutions={(context.solutions || []).filter((solution) => solution && solution.slug && (section.solutionSlugs || []).includes(solution.slug))}
          id="solutions"
        />
      );
    case "testimonial-band":
      return (
        <TestimonialBand
          heading={section.heading}
          description={section.description}
          testimonials={(context.testimonials || []).filter((item) => item && item.slug && (section.testimonialSlugs || []).includes(item.slug))}
          id="testimonials"
        />
      );
    case "team-strip":
      return (
        <TeamStrip
          heading={section.heading}
          description={section.description}
          team={(context.team || []).filter((item) => item && item.slug && (section.teamSlugs || []).includes(item.slug))}
          id="team"
        />
      );
    case "cta-band":
      return (
        <CtaBand
          heading={section.heading}
          description={section.description}
          primaryCta={section.primaryCta}
          secondaryCta={section.secondaryCta}
        />
      );
    case "copy":
      return (
        <section className="py-20">
          <Container className="space-y-6">
            <SectionHeader badge="Overview" title={section.heading} description={section.description} />
          </Container>
        </section>
      );
    default:
      return null;
  }
}

export function HomeTemplate({
  site,
  page,
  solutionPages = [],
}: {
  site: Site;
  page: LandingPage;
  solutionPages?: LandingPage[];
}) {
  return (
    <>
      <SiteNav brand={site.title} links={site.nav} solutionPages={solutionPages} activeHref="/" floating />
      <main>
        {page.sections.map((section, index) => (
          <Fragment key={`${section.type}-${index}`}>
            {renderSection(section, { products: [], testimonials: [], team: [], solutions: [] }, "home")}
          </Fragment>
        ))}
        <Footer {...site.footer} id="footer" />
      </main>
    </>
  );
}

export function OrthoTemplate({
  site,
  products,
  testimonials,
  solutions,
  solutionPages = [],
}: {
  site: Site;
  products: Product[];
  testimonials: Testimonial[];
  solutions: Solution[];
  solutionPages?: LandingPage[];
}) {
  return (
    <>
      <SiteNav brand={site.title} links={site.nav} solutionPages={solutionPages} activeHref="/ortho" floating />
      <main>
        <HeroSection
          eyebrow="ORTHOPEDIC CARE RANGE"
          title="Condition-specific, steroid-free orthopedic care built for the CMS era."
          description="Launch new orthopedic pages from a reusable template system while keeping editorial control in Decap CMS."
          primaryCta={{ label: "Browse products", href: "/ortho/products" }}
          secondaryCta={{ label: "View home", href: "/" }}
          highlight="The Orthopedic route stays modular, but product and testimonial content are managed centrally so editors can publish without developer support."
        />
        <ProductGrid
          heading="Featured orthopedic products"
          description="Pulled from the product collection and ready for scaling into new routes."
          products={products}
          id="products"
        />
        <SolutionGrid
          heading="Orthopedic solution areas"
          description="A route-wide view of what the CMS can expand into."
          solutions={solutions}
        />
        <TestimonialBand
          heading="Clinical validation"
          description="Testimonials can be reused across templates."
          testimonials={testimonials}
          id="testimonials"
        />
        <CtaBand
          heading="Create a new orthopedic landing page without touching code."
          description="Editors can compose campaigns from approved sections, and the template keeps layout rules consistent."
          primaryCta={{ label: "Open products", href: "/ortho/products" }}
          secondaryCta={{ label: "Return home", href: "/" }}
        />
        <Footer {...site.footer} id="footer" />
      </main>
    </>
  );
}

export function ProductTemplate({
  site,
  product,
  solutionPages = [],
}: {
  site: Site;
  product: Product;
  solutionPages?: LandingPage[];
}) {
  return (
    <>
      <SiteNav brand={site.title} links={site.nav} solutionPages={solutionPages} activeHref="/ortho/products" floating />
      <main>
        <HeroSection
          eyebrow={product.category}
          title={product.title}
          description={product.description}
          primaryCta={{ label: product.ctaLabel ?? "Enquire now", href: product.ctaHref ?? "/ortho/products" }}
          secondaryCta={{ label: "All products", href: "/ortho/products" }}
          highlight={product.summary}
        />
        <section className="py-20">
          <Container className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-5">
              <SectionHeader badge="Benefits" title="Why this product belongs in the template system" description="The data and the route are decoupled, so new product entries only need content." />
              <div className="space-y-3">
                {(product?.benefits || []).map((benefit) => (
                  <div key={benefit} className="rounded-2xl border border-border/10 bg-white/75 px-4 py-3 text-sm leading-6 text-muted shadow-soft">
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <SectionHeader badge="Use cases" title="Mapped conditions" />
              <div className="flex flex-wrap gap-3">
                {(product?.conditions || []).map((condition) => (
                  <Badge key={condition}>{condition}</Badge>
                ))}
              </div>
              {product.price ? (
                <div className="rounded-3xl border border-border/10 bg-white/80 p-6 shadow-soft">
                  <p className="text-sm uppercase tracking-[0.25em] text-muted">Indicative price</p>
                  <p className="mt-2 text-3xl font-semibold text-ink">{product.price}</p>
                </div>
              ) : null}
            </div>
          </Container>
        </section>
        <CtaBand
          heading="Need a new product or landing page variant?"
          description="Add the content in Decap, keep the template, and publish the route."
          primaryCta={{ label: "Browse products", href: "/ortho/products" }}
          secondaryCta={{ label: "Home", href: "/" }}
        />
        <Footer {...site.footer} id="footer" />
      </main>
    </>
  );
}

export function LandingPageTemplate({
  site,
  page,
  products = [],
  testimonials = [],
  team = [],
  solutions = [],
  solutionPages = [],
}: {
  site: Site;
  page: LandingPage;
  products?: Product[];
  testimonials?: Testimonial[];
  team?: TeamMember[];
  solutions?: Solution[];
  solutionPages?: LandingPage[];
}) {
  return (
    <>
      <SiteNav brand={site.title} links={site.nav} solutionPages={solutionPages} floating />
      <main>
        {page.sections.map((section) => renderSection(section, { products, testimonials, team, solutions }))}
        <Footer {...site.footer} id="footer" />
      </main>
    </>
  );
}
