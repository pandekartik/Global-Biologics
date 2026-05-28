"use client";

import Link from "next/link";
import { useState } from "react";
import { Badge, BrandMark, ButtonLink, Card, Container, SurfaceFrame } from "./atoms";
import { InfoStrip, ProductCard, SectionHeader, SiteNav, StatBlock, TeamCard, TestimonialCard } from "./molecules";
import type { LandingPage, Product, Solution, TeamMember, Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";
import { 
  Sprout, 
  Droplets, 
  HandHeart, 
  Microscope, 
  CookingPot,
  FlaskConical,
  Recycle,
  Leaf,
  Globe,
  BadgeCheck,
  Boxes,
  Zap,
  CheckCircle2,
  Scale,
  Workflow,
  ArrowRight,
  Menu
} from "lucide-react";

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
    <section className="overflow-hidden border-b border-border/10 bg-white pt-32">
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
    <section className="relative min-h-screen flex items-center overflow-hidden border-b border-border/10 bg-white">
      
      <Container className="relative z-10 pt-32 pb-16 md:pt-24 flex flex-col items-center text-center">
        <div className="space-y-8 max-w-3xl">
          <h1 className="font-heading font-normal text-[3.5rem] sm:text-[5.5rem] md:text-[7.5rem] leading-[0.85] tracking-tight text-brand-strong">
            {title.split("\n").map((line, i) => (
              <span key={i} className={cn("block", i === 1 ? "text-brand" : "")}>{line}</span>
            ))}
          </h1>
          
          <p className="mx-auto max-w-xl text-[18px] leading-[1.6] text-muted font-medium opacity-90">
            {description}
          </p>
          
          <div className="mx-auto grid max-w-md grid-cols-2 gap-x-6 gap-y-3">
            {pills.map((pill) => (
              <p
                key={pill}
                className="text-[10px] font-bold uppercase tracking-widest text-accent border-l-2 border-accent/30 pl-3 text-left"
              >
                {pill}
              </p>
            ))}
          </div>
          
          <div className="pt-4">
            <ButtonLink
              href={primaryCta.href}
              className="min-w-[240px] bg-brand text-white hover:bg-brand/90 rounded-[6px] px-8 py-4 text-[16px] font-semibold shadow-none text-center justify-center"
            >
              {primaryCta.label}
            </ButtonLink>
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
  const icons = [
    <Sprout key="s" className="h-5 w-5 text-brand" />,
    <Droplets key="d" className="h-5 w-5 text-brand" />,
    <HandHeart key="h" className="h-5 w-5 text-brand" />,
    <Microscope key="m" className="h-5 w-5 text-brand" />,
    <CookingPot key="c" className="h-5 w-5 text-brand" />,
    <FlaskConical key="f" className="h-5 w-5 text-brand" />,
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="mb-12 max-w-3xl">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-brand mb-4 flex items-center gap-3">
            {eyebrow}
            <span className="h-px w-12 bg-brand/30"></span>
          </p>
          <h2 className="font-heading text-[2.2rem] md:text-[2.8rem] leading-[1.1] tracking-tight text-ink">
            {title}
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            {cards.map((card, idx) => (
              <div key={card.title} className="group flex gap-5 items-start rounded-xl p-4 transition-colors hover:bg-surface-soft">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50/80 shadow-sm">
                  {icons[idx % icons.length]}
                </div>
                <div className="space-y-1 pt-1">
                  <h3 className="text-[15px] font-bold uppercase tracking-[0.05em] text-brand">
                    {card.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted">{card.summary}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-[#e6edf8] relative flex items-center justify-center shadow-soft">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%]">
                <img 
                  src="/images/illustration.png" 
                  alt="Science Illustration" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
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
  const missionIcons = [
    <Recycle key="1" className="h-5 w-5 text-brand-strong" />,
    <FlaskConical key="2" className="h-5 w-5 text-brand-strong" />,
    <Sprout key="3" className="h-5 w-5 text-brand-strong" />,
    <Globe key="4" className="h-5 w-5 text-brand-strong" />
  ];

  return (
    <section className="relative py-28 bg-[#f6f9f6] overflow-hidden">
      {/* Large Drop/Leaf Watermark background style */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none">
         <svg className="h-full max-h-[800px]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 10C100 10 170 70 170 120C170 158.66 138.66 190 100 190C61.3401 190 30 158.66 30 120C30 70 100 10 100 10Z" fill="currentColor" className="text-accent"/>
         </svg>
      </div>

      <Container className="relative z-10 grid gap-16 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-accent flex items-center gap-3 mb-6">
              {visionEyebrow}
              <span className="h-px w-12 bg-accent/30"></span>
            </p>
            <h2 className="font-heading text-[2.4rem] md:text-[3.8rem] leading-[1.1] tracking-tight text-accent">
              {visionTitle}
            </h2>
          </div>
        </div>

        <div className="lg:pt-8">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-accent flex items-center gap-3 mb-8">
            {missionEyebrow}
            <span className="h-px w-12 bg-accent/30"></span>
          </p>
          <div className="space-y-6">
            {missions.map((mission, index) => (
              <div key={index} className="flex gap-5 items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-border/5">
                  {missionIcons[index % missionIcons.length]}
                </div>
                <p className="text-[17px] font-medium text-ink opacity-85">
                  {mission}
                </p>
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
    <section className="py-28 bg-white">
      <Container className="space-y-16">
        <div className="mx-auto text-center">
          <h2 className="font-heading text-[2.5rem] md:text-[3.2rem] font-medium leading-tight text-ink mb-4">
            {title}
          </h2>
          <div className="mx-auto h-[4px] w-20 bg-brand rounded-full opacity-60"></div>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* The Challenge Column */}
          <div className="space-y-10">
            <div>
              <p className="font-heading italic text-[18px] md:text-[22px] text-brand mb-3">
                {challengeIntro.split(":")[0]}: <span className="font-sans not-italic text-[15px] md:text-[17px] leading-relaxed text-slate-600 font-medium">{challengeIntro.split(":")[1]}</span>
              </p>
            </div>
            
            <div className="space-y-8 pl-2">
              {challenges.map((item) => (
                <div key={item.number} className="flex gap-6 items-start group">
                  <span className="font-sans text-[4.5rem] font-normal leading-[0.7] text-brand/10 group-hover:text-brand/30 transition-colors select-none">
                    {item.number}
                  </span>
                  <div className="pt-1 space-y-1">
                    <h3 className="text-[15px] font-bold uppercase tracking-wide text-brand">
                      {item.title}
                    </h3>
                    <p className="text-[15px] text-muted font-medium">{item.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Approach Column */}
          <div className="space-y-10">
            <div>
              <p className="font-heading italic text-[18px] md:text-[22px] text-brand mb-3">
                {approachIntro.split(":")[0]}: <span className="font-sans not-italic text-[15px] md:text-[17px] leading-relaxed text-slate-600 font-medium">{approachIntro.split(":")[1]}</span>
              </p>
            </div>
            
            <div className="space-y-6 md:pl-4">
              {approaches.map((item, idx) => {
                return (
                  <div key={item.number} className="flex items-center group">
                    {/* 1. The number block */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[2px] text-white text-[17px] font-bold bg-[#0077b1] shadow-[0_4px_12px_rgba(0,0,0,0.12)] z-10">
                      {item.number}
                    </div>
                    
                    {/* 2. Text Content Card with rounded left border accent */}
                    <div className="flex-1 bg-white px-6 py-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-l-[3.5px] border-brand rounded-xl relative z-10 ml-3">
                       <div className="pl-1">
                          <h3 className="text-[16px] font-bold text-slate-900 tracking-tight leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-[13px] text-slate-500 mt-1.5 leading-relaxed font-medium">{item.summary}</p>
                       </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
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
  const whyIcons = [
    <FlaskConical key="1" className="h-6 w-6 text-brand-strong" />,
    <Leaf key="2" className="h-6 w-6 text-brand-strong" />,
    <BadgeCheck key="3" className="h-6 w-6 text-brand-strong" />,
    <Zap key="4" className="h-6 w-6 text-brand-strong" />,
    <Boxes key="5" className="h-6 w-6 text-brand-strong" />,
    <Workflow key="6" className="h-6 w-6 text-brand-strong" />,
  ];

  return (
    <section className="py-24 bg-[#f8faf9]">
      <Container className="space-y-16">
        <div className="space-y-4">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-accent mb-2">
            {eyebrow}
          </p>
          <h2 className="font-heading text-[2.2rem] md:text-[2.8rem] text-ink">
            {title}
          </h2>
        </div>

        <div className="grid gap-y-12 gap-x-8 md:grid-cols-3">
          {cards.map((card, index) => (
            <div key={card.title} className="space-y-5 relative pb-6 border-b border-slate-200/80">
              <div className="h-10 w-10 flex items-center justify-start text-accent">
                {whyIcons[index % whyIcons.length]}
              </div>
              <div className="space-y-3">
                <h3 className="text-[17px] font-bold text-ink">
                  {card.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-slate-600">
                  {card.summary}
                </p>
              </div>
            </div>
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
  const [activeIdx, setActiveIdx] = useState(0);
  const active = tabs[activeIdx] || tabs[0];

  return (
    <section className="py-24 bg-white" id="solutions">
      <Container className="space-y-12">
        <div className="max-w-[48rem] space-y-4">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-brand">{eyebrow}</p>
          <h2 className="font-heading text-[2.2rem] md:text-[2.8rem] leading-tight text-ink">
            {title}
          </h2>
        </div>

        {/* Mobile swipe indicator */}
        <div className="md:hidden flex justify-end -mt-6 -mb-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 flex items-center gap-1.5">
            Swipe for more <ArrowRight className="w-3.5 h-3.5 text-brand animate-pulse" />
          </span>
        </div>

        {/* Tabs Navigator */}
        <div className="-mx-6 px-6 md:mx-0 md:px-0 border-b border-slate-100 flex overflow-x-auto no-scrollbar gap-6 md:gap-12">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setActiveIdx(index)}
              className={cn(
                "pb-4 px-3 md:px-0 text-[11px] font-bold uppercase tracking-wider transition-all border-b-4 whitespace-nowrap shrink-0",
                activeIdx === index
                  ? "border-brand text-brand"
                  : "border-transparent text-slate-400 hover:text-slate-600"
              )}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Layout Split Content */}
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center mt-8">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h3 className="text-[20px] font-bold text-slate-800 tracking-tight leading-snug">
                {active.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-600 font-medium">
                {active.summary}
              </p>
            </div>
            
            <div className="space-y-3 pt-2">
              {active.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3 text-[15px] text-slate-600 font-medium">
                  <CheckCircle2 className="h-[18px] w-[18px] text-brand/70 stroke-[1.8]" />
                  {bullet}
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#e6efff] flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <img 
              src="/images/solutions-fern.png" 
              alt="" 
              className="w-full h-full object-cover opacity-95"
            />
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
  const innovIcons = [
    <BadgeCheck key="i1" className="h-6 w-6 text-brand-strong" />,
    <Boxes key="i2" className="h-6 w-6 text-brand-strong" />,
    <Workflow key="i3" className="h-6 w-6 text-brand-strong" />,
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-50">
      <Container className="space-y-12">
        <div className="space-y-4">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-accent">{eyebrow}</p>
          <h2 className="font-heading text-[2.2rem] md:text-[2.8rem] leading-tight text-ink">
            {title}
          </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card, i) => (
            <div key={card.title} className="space-y-4">
              <div className="text-accent">{innovIcons[i % innovIcons.length]}</div>
              <h3 className="text-[17px] font-bold text-ink">{card.title}</h3>
              <p className="text-[15px] text-muted leading-relaxed">{card.summary}</p>
            </div>
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
  members: Array<{ initials: string; name: string; role: string; summary: string; avatar?: string }>;
}) {
  return (
    <section className="py-24 bg-white">
      <Container className="space-y-16">
        <div className="space-y-4">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.15em] text-brand">{eyebrow}</p>
          <h2 className="font-heading text-[2.2rem] md:text-[2.8rem] leading-tight text-ink max-w-3xl">
            {title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {members.map((member) => (
            <div key={member.name} className="rounded-2xl border border-blue-100/50 bg-white p-4 shadow-soft flex flex-col">
              <div className="aspect-square w-full rounded-xl bg-blue-50/60 border border-brand/20 flex items-center justify-center mb-6 relative overflow-hidden">
                 {member.avatar ? (
                   <img src={member.avatar} alt={member.name} className="h-full w-full object-cover" />
                 ) : (
                   <span className="text-brand font-semibold text-2xl">{member.initials}</span>
                 )}
              </div>
              <div className="flex-1 space-y-2 px-2 pb-4">
                <h3 className="text-[18px] font-medium text-ink tracking-tight">{member.name}</h3>
                <p className="text-[14px] text-slate-600 mb-2 font-medium leading-tight">{member.summary}</p>
                <p className="text-[15px] font-bold text-brand leading-snug pt-2 border-t border-slate-100">
                   {member.role}
                </p>
              </div>
            </div>
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
    <section className="py-28 bg-[#f6f9f6]">
      <Container>
        <div className="mx-auto max-w-[54rem] text-center space-y-8">
          <h2 className="font-heading text-[2.5rem] md:text-[3.8rem] leading-[1.05] text-ink whitespace-pre-line">
            {title}
          </h2>
          <p className="mx-auto max-w-md text-[16px] text-muted font-medium opacity-90">
            {description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {tags.map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full border border-slate-200 bg-white text-[11px] font-bold uppercase tracking-wider text-slate-700 shadow-sm">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="pt-8">
            <ButtonLink 
              href={primaryCta.href} 
              className="inline-flex items-center justify-center gap-3 bg-[#2d6900] hover:bg-[#224d00] text-white min-h-[56px] min-w-[260px] rounded-[6px] px-8 text-[16px] font-bold shadow-md transition-all hover:shadow-lg group"
            >
              {primaryCta.label}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
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
    <footer id={id} className="bg-[#0f2a44] py-16 text-white">
      <Container className="space-y-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_0.8fr_0.8fr_0.8fr]">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
               <img src="/images/logo.jpg" alt="" className="h-12 w-auto rounded-full object-cover" />
               <span className="text-[20px] font-semibold tracking-tight text-white">{brand}</span>
            </Link>
            <p className="max-w-xs text-[14px] text-white/80 leading-relaxed">{address}</p>
            <div className="space-y-1 text-[14px] text-white/80">
              <p>{phone}</p>
              <p className="hover:text-white transition-colors"><a href={`mailto:${email}`}>{email}</a></p>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-accent">Solutions</p>
            <div className="space-y-3 text-[14px] text-white/70">
              <Link href="/bedsore" className="block hover:text-white transition-colors">Bed Sore</Link>
              <Link href="/ortho" className="block hover:text-white transition-colors">Orthopedic</Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-accent">About</p>
            <div className="space-y-3 text-[14px] text-white/70">
              <p className="hover:text-white cursor-pointer">Founders</p>
              <p className="hover:text-white cursor-pointer">Contact</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-accent">Web</p>
            <div className="space-y-3 text-[14px] text-white/70">
              <p className="hover:text-white cursor-pointer truncate">{website ?? "www.globalbiologic.com"}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 text-[12px] text-white/40 md:flex-row md:items-center md:justify-between">
            <p className="uppercase tracking-wider">FROM SOIL TO SKIN — POWERED BY PLANTS</p>
            <div className="flex items-center gap-6">
              <Link href="/" className="transition hover:text-white/70 uppercase tracking-wide">
                Privacy Policy
              </Link>
              <Link href="/" className="transition hover:text-white/70 uppercase tracking-wide">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
