import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        brand: "rgb(var(--color-brand) / <alpha-value>)",
        "brand-strong": "rgb(var(--color-brand-strong) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-soft": "rgb(var(--color-surface-soft) / <alpha-value>)",
        "surface-strong": "rgb(var(--color-surface-strong) / <alpha-value>)",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 42, 68, 0.08)",
        lift: "0 18px 42px rgba(0, 119, 177, 0.14)",
      },
      borderRadius: {
        xl2: "1.5rem",
      },
      backgroundImage: {
        hero: "linear-gradient(90deg, rgba(249,249,255,1) 0%, rgba(249,249,255,0.95) 50%, rgba(249,249,255,0) 100%)",
        pageGlow:
          "radial-gradient(circle at top, rgba(148,199,6,0.16), transparent 40%), radial-gradient(circle at right top, rgba(0,119,177,0.14), transparent 30%)",
      },
      fontFamily: {
        sans: [
          "var(--font-body)",
          "DM Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        heading: [
          "var(--font-heading)",
          "Cormorant Garamond",
          "Georgia",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
