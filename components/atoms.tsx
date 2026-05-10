import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full max-w-7xl px-6 lg:px-8", className)}>{children}</div>;
}

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/15 bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand-strong shadow-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Pill({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-surface-strong px-3 py-1 text-sm font-medium text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border/10 bg-white/85 p-6 shadow-soft backdrop-blur-md",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-brand text-white shadow-lift hover:bg-brand-strong",
    secondary:
      "border border-border/15 bg-white/80 text-ink hover:bg-surface-strong",
    ghost: "text-brand hover:text-brand-strong",
  }[variant];

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition",
        styles,
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function SurfaceFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("rounded-[2rem] border border-border/10 bg-white/70", className)}>{children}</div>;
}

export function BrandMark({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
       <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
         <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="4" className="text-brand" opacity="0.8"/>
         <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="4" className="text-accent" opacity="0.6"/>
         <path d="M18 24H30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
       </svg>
    </div>
  );
}
