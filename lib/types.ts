export type Meta = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

export type Product = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  price?: string;
  badge?: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;
  benefits: string[];
  conditions: string[];
  featured?: boolean;
};

export type Solution = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon?: string;
  featured?: boolean;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  summary: string;
  bio: string;
  avatar?: string;
};

export type Testimonial = {
  slug: string;
  quote: string;
  name: string;
  role: string;
  company?: string;
  featured?: boolean;
};

export type PageSection =
  | {
      type: "hero";
      eyebrow?: string;
      title: string;
      description: string;
      primaryCta?: { label: string; href: string };
      secondaryCta?: { label: string; href: string };
      highlight?: string;
    }
  | {
      type: "feature-grid";
      heading: string;
      description?: string;
      items: Array<{
        title: string;
        summary: string;
        tag?: string;
      }>;
    }
  | {
      type: "what-we-do";
      eyebrow: string;
      title: string;
      cards: Array<{
        title: string;
        summary: string;
      }>;
    }
  | {
      type: "vision-mission";
      visionEyebrow: string;
      visionTitle: string;
      missionEyebrow: string;
      missions: string[];
    }
  | {
      type: "challenge-approach";
      title: string;
      challengeIntro: string;
      challenges: Array<{
        number: string;
        title: string;
        summary: string;
      }>;
      approachIntro: string;
      approaches: Array<{
        number: string;
        title: string;
        summary: string;
      }>;
    }
  | {
      type: "why-us";
      eyebrow: string;
      title: string;
      cards: Array<{
        title: string;
        summary: string;
      }>;
    }
  | {
      type: "solutions-tabs";
      eyebrow: string;
      title: string;
      description: string;
      tabs: Array<{
        label: string;
        title: string;
        summary: string;
        bullets: string[];
      }>;
    }
  | {
      type: "innovation";
      eyebrow: string;
      title: string;
      cards: Array<{
        title: string;
        summary: string;
      }>;
    }
  | {
      type: "founders";
      eyebrow: string;
      title: string;
      members: Array<{
        initials: string;
        name: string;
        role: string;
        summary: string;
      }>;
    }
  | {
      type: "final-cta";
      title: string;
      description: string;
      tags: string[];
      primaryCta: { label: string; href: string };
    }
  | {
      type: "product-grid";
      heading: string;
      description?: string;
      productSlugs: string[];
    }
  | {
      type: "solution-grid";
      heading: string;
      description?: string;
      solutionSlugs: string[];
    }
  | {
      type: "testimonial-band";
      heading: string;
      description?: string;
      testimonialSlugs: string[];
    }
  | {
      type: "team-strip";
      heading: string;
      description?: string;
      teamSlugs: string[];
    }
  | {
      type: "cta-band";
      heading: string;
      description: string;
      primaryCta: { label: string; href: string };
      secondaryCta?: { label: string; href: string };
    }
  | {
      type: "copy";
      heading: string;
      description: string;
    };

export type LandingPage = {
  slug: string;
  title: string;
  description: string;
  sections: PageSection[];
};
