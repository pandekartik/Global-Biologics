import Link from "next/link";
import { Badge, BrandMark, ButtonLink, Card, Container, Pill, SurfaceFrame } from "./atoms";
import type { Product, TeamMember, Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";

export function SiteNav({
  brand,
  links,
  activeHref,
}: {
  brand: string;
  links: Array<{ label: string; href: string }>;
  activeHref?: string;
}) {
  return (
    <header className="pt-10">
      <Container>
        <div className="rounded-[2rem] border border-border/10 bg-white/80 px-5 py-4 shadow-soft backdrop-blur-xl md:px-7">
          <div className="flex items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-3">
              <BrandMark className="h-12 w-12 shrink-0" />
              <span className="text-lg font-semibold tracking-tight text-ink md:text-xl">{brand}</span>
            </Link>
            <nav className="hidden items-center gap-7 md:flex">
              {links.map((link) => {
                const active = activeHref === link.href;
                const isSolutions = link.label.toLowerCase() === "solutions";
                return (
                  <div key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium transition",
                        active ? "text-brand" : "text-muted hover:text-ink",
                      )}
                    >
                      {link.label}
                      {isSolutions ? (
                        <svg viewBox="0 0 12 8" className="h-2 w-3" fill="none" aria-hidden="true">
                          <path d="M1 1.25L6 6.25L11 1.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : null}
                    </Link>
                    {isSolutions ? (
                      <div className="absolute left-1/2 top-full mt-4 hidden w-[221px] -translate-x-1/2 overflow-hidden rounded-xl border border-border/10 bg-white/80 shadow-soft backdrop-blur-xl group-hover:block">
                        <Link
                          href="/bed-sore-care"
                          className="flex items-center gap-3 px-3 py-3 transition hover:bg-surface-strong"
                        >
                          <BrandMark className="h-12 w-12 shrink-0 scale-75" />
                          <span className="text-sm font-medium text-ink">Bed Sore</span>
                        </Link>
                        <div className="mx-3 h-px bg-border/10" />
                        <Link
                          href="/ortho"
                          className="flex items-center gap-3 px-3 py-3 transition hover:bg-surface-strong"
                        >
                          <BrandMark className="h-12 w-12 shrink-0 scale-75" />
                          <span className="text-sm font-medium text-ink">Orthopedic</span>
                        </Link>
                      </div>
                    ) : null}
                  </div>
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
        <ButtonLink href={`/ortho/products/${product.slug}`} variant="secondary">
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
