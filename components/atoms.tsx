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
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-strong text-white shadow-soft",
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none">
        <path d="M12 13.5h12.5l9 21H21.4L12 13.5Z" fill="#94c706" />
        <path d="M23.5 13.5H36L26.6 34.5H14l9.5-21Z" fill="#0077b1" />
        <path d="M20.5 22h8" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
