import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl items-center px-6 py-20">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">Global Biologics</p>
        <h1 className="text-4xl font-semibold tracking-tight text-ink">Page not found</h1>
        <p className="max-w-xl text-lg leading-8 text-muted">
          The route you requested is not part of the CMS-driven template set yet.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lift transition hover:bg-brand-strong"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}

