import Link from "next/link";
import { Badge, BrandMark, ButtonLink, Card, Container, SurfaceFrame } from "./atoms";
import { InfoStrip, ProductCard, SectionHeader, SiteNav, StatBlock, TeamCard, TestimonialCard } from "./molecules";
import type { LandingPage, Product, Solution, TeamMember, Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";

export function HeroSection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  highlight,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  highlight?: string;
}) {
  return (
    <section className="overflow-hidden border-b border-border/10 bg-hero">
      <Container className="grid gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
        <div className="space-y-8">
          {eyebrow ? <Badge>{eyebrow}</Badge> : null}
          <div className="space-y-6">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-ink md:text-6xl">
              {title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted md:text-xl">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {primaryCta ? <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink> : null}
            {secondaryCta ? <ButtonLink href={secondaryCta.href} variant="secondary">{secondaryCta.label}</ButtonLink> : null}
          </div>
          {highlight ? (
            <p className="max-w-xl rounded-2xl border border-brand/10 bg-white/70 px-4 py-3 text-sm leading-6 text-brand-strong shadow-soft">
              {highlight}
            </p>
          ) : null}
        </div>
        <SurfaceFrame className="p-6 shadow-soft">
          <div className="grid gap-4 md:grid-cols-2">
            <StatBlock label="CMS-managed collections" value="4+" />
            <StatBlock label="Template routes" value="3" />
            <StatBlock label="Home stability" value="Fixed" />
            <StatBlock label="Editorial control" value="No dev" />
          </div>
        </SurfaceFrame>
      </Container>
    </section>
  );
}

export function HomeHero({
  title,
  description,
  primaryCta,
}: {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
}) {
  const pills = [
    "20+ Years R&D",
    "MULTI DOMAIN PLATFORM",
    "PATENT-DRIVEN",
    "SUSTAINABILITY-FOCUSED",
  ];

  return (
    <section className="relative overflow-hidden border-b border-border/10">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(249,249,255,1)_0%,rgba(249,249,255,0.95)_45%,rgba(249,249,255,0.72)_70%,rgba(246,249,246,0.98)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(148,199,6,0.12),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(0,119,177,0.12),transparent_26%)]" />
      <Container className="relative grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
        <div className="space-y-8">
          <h1 className="max-w-[8ch] whitespace-pre-line text-[clamp(3.5rem,7.5vw,6rem)] font-medium leading-[0.92] tracking-[-0.03em] text-ink">
            {title}
          </h1>
          <p className="max-w-[31rem] text-[clamp(1.15rem,1.5vw,1.375rem)] leading-[1.5] text-muted">
            {description}
          </p>
          <div className="grid max-w-[26rem] grid-cols-2 gap-x-12 gap-y-4">
            {pills.map((pill) => (
              <p
                key={pill}
                className="text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-brand"
              >
                {pill}
              </p>
            ))}
          </div>
          <ButtonLink
            href={primaryCta.href}
            className="w-full max-w-[414px] min-h-[54px] rounded-[6px] px-8 text-[1.125rem] font-semibold shadow-none"
          >
            {primaryCta.label}
          </ButtonLink>
        </div>
        <div className="relative hidden lg:block">
          <div className="relative min-h-[510px] overflow-hidden rounded-[2.5rem] border border-border/10 bg-white/25 shadow-soft">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.76)_30%,rgba(246,249,246,0.85)_60%,rgba(0,119,177,0.14)_100%)]" />
            <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-brand/10 blur-2xl" />
            <div className="absolute right-10 top-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.8),transparent_38%),radial-gradient(circle_at_70%_60%,rgba(148,199,6,0.2),transparent_30%),radial-gradient(circle_at_65%_35%,rgba(0,119,177,0.18),transparent_28%)]" />
            <div className="absolute left-8 top-10 rounded-[1.5rem] border border-white/40 bg-white/70 px-5 py-4 shadow-soft backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">BioLogic Products</p>
              <p className="mt-2 max-w-[18rem] text-sm leading-6 text-muted">
                Herbal, steroid-free care ranges shaped for modern editorial workflows.
              </p>
            </div>
            <div className="absolute bottom-10 right-8 rounded-[1.25rem] border border-white/40 bg-white/70 px-4 py-3 shadow-soft backdrop-blur-xl">
              <p className="text-sm font-semibold text-ink">From Soil to Skin</p>
              <p className="text-xs uppercase tracking-[0.24em] text-brand">Powered by Plants</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function WhatWeDoSection({
  eyebrow,
  title,
  cards,
}: {
  eyebrow: string;
  title: string;
  cards: Array<{ title: string; summary: string }>;
}) {
  return (
    <section className="py-20">
      <Container className="space-y-8">
        <div className="max-w-[48rem] space-y-4">
          <p className="text-[18px] font-bold uppercase tracking-[0.15em] text-brand">{eyebrow}</p>
          <h2 className="text-[clamp(2.2rem,4.1vw,3.35rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">
            {title}
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <Card key={card.title} className="min-h-[176px] space-y-3">
              <h3 className="text-[1.125rem] font-semibold uppercase tracking-[0.08em] text-brand">
                {card.title}
              </h3>
              <p className="text-[1.125rem] leading-[1.5] text-muted">{card.summary}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function VisionMissionSection({
  visionEyebrow,
  visionTitle,
  missionEyebrow,
  missions,
}: {
  visionEyebrow: string;
  visionTitle: string;
  missionEyebrow: string;
  missions: string[];
}) {
  return (
    <section className="py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_0.88fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-[18px] font-bold uppercase tracking-[0.15em] text-brand">{visionEyebrow}</p>
          <h2 className="max-w-[13ch] text-[clamp(2.9rem,5.8vw,4.4rem)] font-medium leading-[1.08] tracking-[-0.03em] text-ink">
            {visionTitle}
          </h2>
        </div>
        <div className="rounded-[2rem] border border-border/10 bg-white/80 p-8 shadow-soft">
          <p className="text-[18px] font-bold uppercase tracking-[0.15em] text-brand">{missionEyebrow}</p>
          <div className="mt-6 space-y-4">
            {missions.map((mission) => (
              <div key={mission} className="rounded-2xl border border-border/10 bg-surface-strong px-4 py-4 text-[1.125rem] leading-[1.45] text-ink">
                {mission}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ChallengeApproachSection({
  title,
  challengeIntro,
  challenges,
  approachIntro,
  approaches,
}: {
  title: string;
  challengeIntro: string;
  challenges: Array<{ number: string; title: string; summary: string }>;
  approachIntro: string;
  approaches: Array<{ number: string; title: string; summary: string }>;
}) {
  return (
    <section className="py-20">
      <Container className="space-y-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-[clamp(2.4rem,4vw,3.6rem)] font-semibold leading-[1.04] tracking-[-0.03em] text-ink">
            {title}
          </h2>
          <p className="mt-5 text-[1.25rem] leading-[1.5] text-muted">{challengeIntro}</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="space-y-5">
            <p className="text-[18px] font-bold uppercase tracking-[0.15em] text-brand">The Challenge</p>
            <div className="space-y-4">
              {challenges.map((item) => (
                <div key={item.number} className="grid grid-cols-[72px_1fr] gap-4 rounded-2xl border border-border/10 bg-white/70 p-4">
                  <div className="flex items-start justify-center pt-1 text-[4rem] leading-none text-ink/90">{item.number}</div>
                  <div className="space-y-1">
                    <h3 className="text-[1.125rem] font-semibold uppercase tracking-[0.08em] text-brand">{item.title}</h3>
                    <p className="text-[1.125rem] leading-[1.45] text-muted">{item.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card className="space-y-5">
            <p className="text-[18px] font-bold uppercase tracking-[0.15em] text-brand">Our Approach</p>
            <p className="text-[1.25rem] leading-[1.5] text-ink">{approachIntro}</p>
            <div className="space-y-4">
              {approaches.map((item) => (
                <div key={item.number} className="grid grid-cols-[56px_1fr] gap-4 rounded-2xl border border-border/10 bg-surface-strong p-4">
                  <div className="flex items-start justify-center pt-1 text-[1.5rem] font-semibold text-brand-strong">
                    {item.number}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[1.125rem] font-semibold uppercase tracking-[0.08em] text-brand">{item.title}</h3>
                    <p className="text-[1.125rem] leading-[1.45] text-muted">{item.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export function WhyUsSection({
  eyebrow,
  title,
  cards,
}: {
  eyebrow: string;
  title: string;
  cards: Array<{ title: string; summary: string }>;
}) {
  return (
    <section className="py-20">
      <Container className="space-y-8">
        <div className="max-w-[44rem] space-y-4">
          <p className="text-[18px] font-bold uppercase tracking-[0.15em] text-brand">{eyebrow}</p>
          <h2 className="text-[clamp(2.4rem,4vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink">
            {title}
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <Card key={card.title} className="min-h-[156px] space-y-3">
              <h3 className="text-[1.125rem] font-semibold uppercase tracking-[0.08em] text-brand">
                {card.title}
              </h3>
              <p className="text-[1.125rem] leading-[1.5] text-muted">{card.summary}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SolutionsTabsSection({
  eyebrow,
  title,
  description,
  tabs,
}: {
  eyebrow: string;
  title: string;
  description: string;
  tabs: Array<{ label: string; title: string; summary: string; bullets: string[] }>;
}) {
  const active = tabs[0];
  return (
    <section className="py-20">
      <Container className="space-y-10">
        <div className="max-w-[48rem] space-y-4">
          <p className="text-[18px] font-bold uppercase tracking-[0.15em] text-brand">{eyebrow}</p>
          <h2 className="text-[clamp(2.4rem,4vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink">
            {title}
          </h2>
          <p className="text-[1.125rem] leading-[1.5] text-muted">{description}</p>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-border/10 bg-white/70 p-5 shadow-soft">
          <div className="flex flex-wrap gap-3 border-b border-border/10 pb-5">
            {tabs.map((tab, index) => (
              <button
                key={tab.label}
                className={cn(
                  "rounded-full px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.05em] transition",
                  index === 0
                    ? "bg-brand-strong text-white"
                    : "bg-white text-ink hover:bg-surface-strong",
                )}
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[1.5rem] bg-brand-strong p-6 text-white shadow-soft">
              <p className="text-[18px] font-bold uppercase tracking-[0.15em] text-accent">Skincare & Herbal Cosmetic</p>
              <p className="mt-5 text-[1.125rem] leading-[1.55] text-white/85">
                {active.summary}
              </p>
              <div className="mt-6 space-y-3">
                {active.bullets.map((bullet) => (
                  <div key={bullet} className="text-[1.125rem] leading-[1.45] text-white">
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-[1.5rem] font-medium leading-[1.2] text-ink">{active.title}</h3>
              <p className="text-[1.125rem] leading-[1.55] text-muted">
                {active.summary}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {active.bullets.map((bullet) => (
                  <span
                    key={bullet}
                    className="rounded-full border border-border/10 bg-white px-4 py-2 text-[0.875rem] text-ink shadow-sm"
                  >
                    {bullet}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function InnovationSection({
  eyebrow,
  title,
  cards,
}: {
  eyebrow: string;
  title: string;
  cards: Array<{ title: string; summary: string }>;
}) {
  return (
    <section className="py-20">
      <Container className="space-y-8">
        <div className="max-w-[44rem] space-y-4">
          <p className="text-[18px] font-bold uppercase tracking-[0.15em] text-brand">{eyebrow}</p>
          <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink">
            {title}
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <Card key={card.title} className="space-y-3">
              <h3 className="text-[1.125rem] font-semibold uppercase tracking-[0.08em] text-brand">
                {card.title}
              </h3>
              <p className="text-[1rem] leading-[1.5] text-muted">{card.summary}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FoundersSection({
  eyebrow,
  title,
  members,
}: {
  eyebrow: string;
  title: string;
  members: Array<{ initials: string; name: string; role: string; summary: string }>;
}) {
  return (
    <section className="py-20">
      <Container className="space-y-8">
        <div className="max-w-[48rem] space-y-4">
          <p className="text-[18px] font-bold uppercase tracking-[0.15em] text-brand">{eyebrow}</p>
          <h2 className="text-[clamp(2.4rem,4vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink">
            {title}
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {members.map((member) => (
            <Card key={member.name} className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-strong text-[1.125rem] font-semibold text-white">
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-[1.375rem] leading-[1.1] font-semibold text-ink">{member.name}</h3>
                  <p className="text-[1.125rem] uppercase tracking-[0.08em] text-brand">{member.role}</p>
                </div>
              </div>
              <p className="text-[1rem] leading-[1.5] text-muted">{member.summary}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FinalCtaSection({
  title,
  description,
  tags,
  primaryCta,
}: {
  title: string;
  description: string;
  tags: string[];
  primaryCta: { label: string; href: string };
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-[54rem] text-center">
          <h2 className="text-[clamp(2.8rem,4.4vw,4rem)] font-medium leading-[1.08] tracking-[-0.03em] text-ink">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-[42rem] text-[1.125rem] leading-[1.5] text-muted">
            {description}
          </p>
          <p className="mt-8 text-[1rem] leading-[1.5] text-muted">We invite collaborations and partnerships across:</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {tags.map((tag) => (
              <span key={tag} className="text-[0.875rem] text-ink">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <ButtonLink href={primaryCta.href} className="min-h-[56px] min-w-[278px] rounded-[6px] px-8 text-[1.125rem] font-semibold shadow-none">
              {primaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FeatureGrid({
  heading,
  description,
  items,
  id,
}: {
  heading: string;
  description?: string;
  items: Array<{ title: string; summary: string; tag?: string }>;
  id?: string;
}) {
  return (
    <section className="py-20" id={id}>
      <Container className="space-y-10">
        <SectionHeader badge="Capabilities" title={heading} description={description} />
        <InfoStrip items={items} />
      </Container>
    </section>
  );
}

export function ProductGrid({
  heading,
  description,
  products,
  id,
}: {
  heading: string;
  description?: string;
  products: Product[];
  id?: string;
}) {
  return (
    <section className="py-20" id={id}>
      <Container className="space-y-10">
        <SectionHeader badge="Products" title={heading} description={description} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SolutionGrid({
  heading,
  description,
  solutions,
  id,
}: {
  heading: string;
  description?: string;
  solutions: Solution[];
  id?: string;
}) {
  return (
    <section className="py-20" id={id}>
      <Container className="space-y-10">
        <SectionHeader badge="Solutions" title={heading} description={description} />
        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => (
            <div key={solution.slug} className="rounded-3xl border border-border/10 bg-white/80 p-6 shadow-soft">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                  {solution.icon ?? "Solution"}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-ink">{solution.title}</h3>
                <p className="text-sm leading-6 text-muted">{solution.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TestimonialBand({
  heading,
  description,
  testimonials,
  id,
}: {
  heading: string;
  description?: string;
  testimonials: Testimonial[];
  id?: string;
}) {
  return (
    <section className="py-20" id={id}>
      <Container className="space-y-10">
        <SectionHeader badge="Testimonials" title={heading} description={description} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.slug} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TeamStrip({
  heading,
  description,
  team,
  id,
}: {
  heading: string;
  description?: string;
  team: TeamMember[];
  id?: string;
}) {
  return (
    <section className="py-20" id={id}>
      <Container className="space-y-10">
        <SectionHeader badge="Team" title={heading} description={description} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {team.map((member) => (
            <TeamCard key={member.slug} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CtaBand({
  heading,
  description,
  primaryCta,
  secondaryCta,
  id,
}: {
  heading: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  id?: string;
}) {
  return (
    <section className="py-20" id={id}>
      <Container>
        <div className="glass rounded-[2rem] border border-border/10 px-6 py-10 shadow-soft md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-3">
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink md:text-4xl">{heading}</h2>
              <p className="max-w-2xl text-base leading-7 text-muted">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
              {secondaryCta ? (
                <ButtonLink href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Footer({
  brand,
  address,
  phone,
  email,
  website,
  id,
}: {
  brand: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  id?: string;
}) {
  return (
    <footer id={id} className="border-t border-accent/20 bg-brand-strong py-12 text-white">
      <Container className="space-y-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <BrandMark className="h-12 w-12 shrink-0" />
              <span className="text-lg font-semibold tracking-tight text-white">{brand}</span>
            </Link>
            <p className="max-w-xs text-sm leading-6 text-white/80">{address}</p>
            <div className="space-y-1 text-sm leading-6 text-white/80">
              <p>{phone}</p>
              <p>{email}</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Solutions</p>
            <div className="space-y-3 text-sm text-white">
              <p>Bed Sore</p>
              <p>Orthopedic</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">About</p>
            <div className="space-y-3 text-sm text-white">
              <p>Founders</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Web</p>
            <div className="space-y-3 text-sm text-white">
              <p>{website ?? "www.globalbiologic.com"}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-5">
          <div className="flex flex-col gap-3 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
            <p>From Soil to Skin — Powered by Plants</p>
            <div className="flex items-center gap-6">
              <Link href="/" className="transition hover:text-white/70">
                Privacy Policy
              </Link>
              <Link href="/" className="transition hover:text-white/70">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
