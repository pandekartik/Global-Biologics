# Global Biologics

React + Tailwind landing-page scaffold for BioLogic Products with a Decap CMS content model and Netlify-ready deployment.

## Routes

- `/` home page
- `/ortho` orthopedic overview template
- `/ortho/products` orthopedic product listing template
- `/ortho/products/[slug]` orthopedic product detail template
- `/{landing-slug}` generic CMS landing pages such as `/bed-sore-care`

## Content Model

- `content/products/*.json`
- `content/solutions/*.json`
- `content/team/*.json`
- `content/testimonials/*.json`
- `content/pages/home.json`
- `content/pages/landing/*.json`

## CMS

- Decap CMS admin is available at `/admin`
- Config lives in `public/admin/config.yml`
- Media uploads go to `public/uploads`

## Design System

- Tokens are seeded from `figmaTokens.json`
- Semantic token mapping lives in `lib/tokens.ts`
- Atomic layer components live in:
  - `components/atoms.tsx`
  - `components/molecules.tsx`
  - `components/organisms.tsx`
  - `components/templates.tsx`

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`

