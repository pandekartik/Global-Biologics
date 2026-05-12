"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Badge, BrandMark, ButtonLink, Card, Container, Pill, SurfaceFrame } from "./atoms";
import type { Product, TeamMember, Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";

export function SiteNav({
  brand,
  links,
  activeHref,
  floating = false,
}: {
  brand: string;
  links: Array<{ label: string; href: string }>;
  activeHref?: string;
  floating?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <header className={cn("z-50 w-full", floating ? "fixed inset-x-0 top-0 pt-4 md:pt-8" : "relative pt-6 md:pt-10")}>
      <Container>
        <div className={cn(
          "relative rounded-3xl border border-border/10 bg-white/95 shadow-soft backdrop-blur-xl transition-all duration-300 md:rounded-full",
          isOpen ? "rounded-3xl" : "rounded-full"
        )}>
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
                           <Link
                            href="/bedsore"
                            className="flex items-center gap-3 px-4 py-4 transition hover:bg-surface-soft"
                          >
                            <div className="h-10 w-10 rounded-lg border border-slate-100 bg-white overflow-hidden flex items-center justify-center p-1">
                              <img src="/images/twarabio-logo.jpg" alt="Twara" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-semibold text-ink">Bed Sore</span>
                            </div>
                          </Link>
                          <div className="mx-4 h-px bg-border/5" />
                          <Link
                            href="/ortho"
                            className="flex items-center gap-3 px-4 py-4 transition hover:bg-surface-soft"
                          >
                            <div className="h-10 w-10 rounded-lg border border-slate-100 bg-white overflow-hidden flex items-center justify-center p-1">
                              <img src="/images/sasneh-logo.jpg" alt="Sasneh" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-semibold text-ink">Orthopedic</span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </nav>

            {/* Mobile Toggle */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-ink md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={cn(
            "grid overflow-hidden transition-all duration-300 md:hidden",
            isOpen ? "grid-rows-[1fr] border-t border-border/5 opacity-100" : "grid-rows-[0fr] opacity-0"
          )}>
            <div className="min-h-0 overflow-hidden">
              <nav className="flex flex-col gap-1 p-4">
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
                            active ? "bg-brand/5 text-brand" : "text-slate-600"
                          )}
                        >
                          {link.label}
                          <ChevronDown className={cn("h-4 w-4 transition-transform", mobileDropdownOpen && "rotate-180")} />
                        </button>
                        <div className={cn(
                          "grid overflow-hidden transition-all bg-slate-50/50 rounded-xl mt-1 mx-2",
                          mobileDropdownOpen ? "grid-rows-[1fr] py-2" : "grid-rows-[0fr]"
                        )}>
                          <div className="min-h-0 space-y-1 px-2">
                            <Link
                              href="/bedsore"
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white"
                            >
                              <div className="h-8 w-8 shrink-0 rounded-md bg-white p-1 border border-slate-100 flex items-center justify-center">
                                <img src="/images/twarabio-logo.jpg" alt="" className="object-contain" />
                              </div>
                              Bed Sore
                            </Link>
                            <Link
                              href="/ortho"
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white"
                            >
                              <div className="h-8 w-8 shrink-0 rounded-md bg-white p-1 border border-slate-100 flex items-center justify-center">
                                <img src="/images/sasneh-logo.jpg" alt="" className="object-contain" />
                              </div>
                              Orthopedic
                            </Link>
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
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-lg font-semibold text-brand-strong">
          {member.name
            .split(" ")
            .map((part) => part[0])
            .slice(0, 2)
            .join("")}
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
