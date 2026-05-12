"use client";

import Link from "next/link";
import { useState, Fragment } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Badge, BrandMark, ButtonLink, Card, Container, Pill, SurfaceFrame } from "./atoms";
import type { Product, TeamMember, Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";

export function SiteNav({
  brand,
  links,
  activeHref,
  solutionPages = [],
  floating = false,
}: {
  brand: string;
  links: Array<{ label: string; href: string }>;
  activeHref?: string;
  solutionPages?: Array<{ slug: string; navLabel?: string; title: string; navLogo?: string }>;
  floating?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <header className={cn("z-50 w-full", floating ? "fixed inset-x-0 top-0 pt-4 md:pt-8" : "relative pt-6 md:pt-10")}>
      <Container>
        <div className="relative rounded-full border border-border/10 bg-white/95 shadow-soft backdrop-blur-xl transition-all duration-300">
          <div className="flex items-center justify-between px-4 py-2 md:px-8 md:py-3">
            <Link href="/" className="flex items-center gap-2 z-10">
              <img src="/images/logo.jpg" alt="" className="h-10 w-10 md:h-14 md:w-14 rounded-full object-cover" />
              <span className="text-base md:text-lg font-semibold tracking-tight text-ink">{brand}</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 md:flex">
              {links.map((link) => {
                const active = activeHref === link.href;
                const isSolutions = link.label.toLowerCase() === "solutions";
                return (
                  <div key={link.href} className="relative group py-2">
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center gap-1 text-[15px] font-medium transition",
                        active ? "text-brand" : "text-slate-600 hover:text-brand",
                      )}
                    >
                      {link.label}
                      {isSolutions ? (
                        <ChevronDown className="h-3 w-3 opacity-70 transition-transform group-hover:rotate-180" />
                      ) : null}
                    </Link>
                    {isSolutions ? (
                      <div className="absolute right-0 top-full pt-2 hidden w-[240px] origin-top-right transform opacity-0 scale-95 transition duration-200 ease-out group-hover:block group-hover:opacity-100 group-hover:scale-100">
                        <div className="overflow-hidden rounded-2xl border border-border/10 bg-white shadow-soft backdrop-blur-xl">
                          {solutionPages.map((page, idx) => (
                            <Fragment key={page.slug}>
                              {idx > 0 && <div className="mx-4 h-px bg-border/5" />}
                              <Link
                                href={`/${page.slug}`}
                                className="flex items-center gap-3 px-4 py-4 transition hover:bg-surface-soft"
                              >
                                <div className="h-10 w-10 rounded-lg border border-slate-100 bg-white overflow-hidden flex items-center justify-center p-1">
                                  {page.navLogo ? (
                                    <img src={page.navLogo} alt="" className="w-full h-full object-contain" />
                                  ) : (
                                    <span className="font-bold text-brand opacity-50">{page.navLabel?.[0] ?? page.title[0]}</span>
                                  )}
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-sm font-semibold text-ink">{page.navLabel || page.title}</span>
                                </div>
                              </Link>
                            </Fragment>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </nav>

            {/* Mobile Toggle */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-ink md:hidden focus:outline-none transition-colors active:bg-slate-100"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown (Absolute floating card) */}
        <div className={cn(
          "absolute inset-x-6 top-full mt-3 md:hidden transition-all duration-200 origin-top ease-out z-50",
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto scale-100" : "opacity-0 -translate-y-2 pointer-events-none scale-[0.98]"
        )}>
          <div className="overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-xl">
            <nav className="flex flex-col gap-1 p-3">
              {links.map((link) => {
                const active = activeHref === link.href;
                const isSolutions = link.label.toLowerCase() === "solutions";

                if (isSolutions) {
                  return (
                    <div key={link.href} className="flex flex-col">
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium transition",
                          active ? "bg-brand/5 text-brand" : "text-slate-600 active:bg-slate-50"
                        )}
                      >
                        {link.label}
                        <ChevronDown className={cn("h-4 w-4 transition-transform", mobileDropdownOpen && "rotate-180")} />
                      </button>
                      <div className={cn(
                        "grid overflow-hidden transition-all bg-slate-50/50 rounded-xl mx-1",
                        mobileDropdownOpen ? "grid-rows-[1fr] mt-1 mb-2" : "grid-rows-[0fr]"
                      )}>
                        <div className="min-h-0 space-y-0.5 px-1 py-1">
                          {solutionPages.map((page) => (
                            <Link
                              key={page.slug}
                              href={`/${page.slug}`}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white active:bg-white"
                            >
                              <div className="h-8 w-8 shrink-0 rounded-md bg-white p-1 border border-slate-100 flex items-center justify-center shadow-sm">
                                {page.navLogo ? (
                                  <img src={page.navLogo} alt="" className="object-contain w-full h-full" />
                                ) : (
                                  <span className="font-bold text-xs text-brand/70">{page.navLabel?.[0] ?? page.title[0]}</span>
                                )}
                              </div>
                              {page.navLabel || page.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-3 text-[15px] font-medium transition",
                      active ? "bg-brand/5 text-brand" : "text-slate-600 active:bg-slate-50"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "left",
}: {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("space-y-4", align === "center" && "mx-auto max-w-3xl text-center")}>
      {badge ? <Badge>{badge}</Badge> : null}
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">{title}</h2>
        {description ? <p className="text-base leading-7 text-muted md:text-lg">{description}</p> : null}
      </div>
    </div>
  );
}

export function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <Card className="flex flex-col gap-2">
      <span className="text-3xl font-semibold tracking-tight text-brand-strong">{value}</span>
      <span className="text-sm leading-6 text-muted">{label}</span>
    </Card>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-between">
        <Pill>{product.category}</Pill>
        {product.price ? <span className="text-sm font-semibold text-ink">{product.price}</span> : null}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold tracking-tight text-ink">{product.title}</h3>
        <p className="text-sm leading-6 text-muted">{product.summary}</p>
      </div>
      <div className="space-y-2">
        {product.benefits.slice(0, 3).map((benefit) => (
          <div key={benefit} className="flex items-start gap-3 text-sm text-muted">
            <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <ButtonLink href={`/ortho/product/${product.slug}`} variant="secondary">
          {product.ctaLabel ?? "Know more"}
        </ButtonLink>
      </div>
    </Card>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="flex h-full flex-col gap-4">
      <p className="text-lg leading-8 text-ink">“{testimonial.quote}”</p>
      <div className="mt-auto">
        <p className="font-semibold text-ink">{testimonial.name}</p>
        <p className="text-sm text-muted">
          {testimonial.role}
          {testimonial.company ? ` • ${testimonial.company}` : ""}
        </p>
      </div>
    </Card>
  );
}

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <Card className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-lg font-semibold text-brand-strong overflow-hidden shrink-0">
          {member.avatar ? (
            <img src={member.avatar} alt={member.name} className="h-full w-full object-cover" />
          ) : (
            member.name
              .split(" ")
              .map((part) => part[0])
              .slice(0, 2)
              .join("")
          )}
        </div>
        <div>
          <h3 className="font-semibold text-ink">{member.name}</h3>
          <p className="text-sm text-muted">{member.role}</p>
        </div>
      </div>
      <p className="text-sm leading-6 text-muted">{member.summary}</p>
    </Card>
  );
}

export function InfoStrip({
  items,
}: {
  items: Array<{ title: string; summary: string; tag?: string }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} className="space-y-3">
          {item.tag ? <Badge>{item.tag}</Badge> : null}
          <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
          <p className="text-sm leading-6 text-muted">{item.summary}</p>
        </Card>
      ))}
    </div>
  );
}
