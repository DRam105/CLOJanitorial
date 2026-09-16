# CLO Janitorial — Marketing Website

A modern, professional B2B lead-generation website for **CLO Janitorial**, a commercial
cleaning company in Carlsbad, CA. Built with Next.js (App Router), TypeScript, Tailwind CSS v4,
and shadcn/ui. Designed for facility managers, office managers, and property managers — and to
double as a recruiting tool.

---

## Tech stack

- **Next.js 16** (App Router, Turbopack), **React 19**, **TypeScript** (strict)
- **Tailwind CSS v4** with brand tokens as CSS variables
- **shadcn/ui** (Base UI primitives) — restyled to the CLO brand
- **lucide-react** icons, **Framer Motion** (`motion`) animations
- **react-hook-form + zod** for all forms
- **Markdown blog** (`gray-matter` frontmatter + a tiny built-in renderer in
  `components/shared/markdown.tsx` — chosen over `next-mdx-remote` because the FAT-formatted F:
  drive can't create the symlinks Turbopack needs for it)

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

> **Note on the F: drive:** this project lives on a local drive (not OneDrive/Google Drive) on
> purpose — cloud-synced folders fight `node_modules`/`.next` and cause slow/locked-file errors.
> Keep it on a local drive.

---

## Where to swap in your content

Everything you'll want to change first is a `[bracketed placeholder]`. Search the codebase for
`[` to find them all. The most important spots:

| What | Where |
| --- | --- |
| **Business name, phone, email, address, hours, social links** | `lib/site.ts` (single source of truth) |
| **Phone number** | `lib/site.ts` → `phone` and `phoneHref` (currently `[ADD PHONE NUMBER]`) |
| **Brand colors** | `app/globals.css` → the `:root` brand variables (`--brand`, `--navy`, etc.) |
| **Fonts** | `lib/fonts.ts` (Poppins headings / Inter body) |
| **Logo** | See "Logo" below |
| **Services** (content, checklists, FAQs) | `lib/services.ts` |
| **Industries** | `lib/industries.ts` |
| **Service-area cities / ZIP checker** | `lib/service-areas.ts` |
| **Testimonials & rating** | `lib/testimonials.ts` |
| **Case studies** | `lib/case-studies.ts` |
| **Job listings** | `lib/jobs.ts` |
| **Blog posts** | `content/blog/*.mdx` |
| **Navigation** | `lib/nav.ts` |
| **Certifications / license / insurance** | `app/why-clo/page.tsx`, `components/home/certifications.tsx`, `lib/site.ts` |

### Logo

The header/footer use a crisp **SVG rendition** of the logo in `components/shared/logo.tsx`
(swoosh + "CLO JANITORIAL"), with a `variant="white"` for the navy footer/dark sections. Your
raw artwork is kept at `public/logo.jpg` and used for Open Graph / JSON-LD.

To use a supplied image file instead, replace the SVG in `logo.tsx` with a `next/image` pointing
at a **transparent PNG or SVG**. For the dark footer you'll want a **white/knockout** version —
drop it in `/public` (e.g. `logo-white.svg`) and reference it in the `variant === "white"` branch.

### Imagery

Hero, before/after, case-study, and team sections use clearly-labeled `[image placeholder]`
blocks. Swap them for real photos using `next/image`. For remote images, add the host to
`images.remotePatterns` in `next.config.ts`.

### Favicon & social image

Generated on the fly (brand-colored) via `app/icon.tsx`, `app/apple-icon.tsx`, and
`app/opengraph-image.tsx`. Edit those files, or drop a `favicon.ico` in `/app` to override.

---

## Integration TODOs

Search for `TODO` in the codebase. The key ones:

1. **Form submissions** — `lib/actions.ts` (`submitLead`) currently logs the payload and returns
   success. Wire it to an email service and/or CRM:
   - Email: [Resend](https://resend.com), SendGrid
   - CRM: HubSpot, GoHighLevel, Salesforce
   - Or set `LEAD_WEBHOOK_URL` and POST to it (example is commented in the file).
   All forms (quote, contact, careers, footer) funnel through this one function.
2. **Careers resume upload** — `components/forms/careers-form.tsx` captures the file name only.
   Wire real uploads to storage (e.g. S3, UploadThing) or attach to the notification email.
3. **Live chat** — `components/shared/chat-widget.tsx` is a stub. Replace with Intercom, Tawk.to,
   Drift, HubSpot, or a GoHighLevel chat widget.
4. **Analytics** — add Google Analytics / GTM in `app/layout.tsx` (marked with a TODO comment).
5. **Maps** — `app/contact/page.tsx` and `app/service-area/page.tsx` have map placeholders; drop
   in a Google Maps embed iframe.
6. **Google Reviews** — `app/reviews/page.tsx` has a placeholder for a live reviews widget.

---

## SEO

- Per-route metadata via the Metadata API (`lib/metadata.ts` helper).
- JSON-LD structured data (`lib/jsonld.ts`): `CleaningService`/`LocalBusiness` (site-wide),
  `Service`, `FAQPage`, `BreadcrumbList`.
- `app/sitemap.ts` → `/sitemap.xml`, `app/robots.ts` → `/robots.txt`.
- Set the production domain in `lib/site.ts` → `url` (used for canonicals, OG, sitemap).

## Accessibility

WCAG-AA-minded: semantic HTML, keyboard nav, focus rings, alt text, aria labels on icon buttons,
a skip-to-content link, and `prefers-reduced-motion` support (CSS + JS in animated components).

---

## Project structure

```
app/                 routes (App Router) + sitemap/robots/icons/og
components/
  layout/            header, top-bar, mobile nav, footer, mobile action bar
  home/              home-page sections
  shared/            logo, swoosh, reveal, cards, CTAs, page hero, etc.
  forms/             quote (multi-step), contact, careers, footer, area checker
  ui/                shadcn/ui primitives (brand-restyled)
lib/                 site config, content data, schemas, metadata, jsonld, actions
content/blog/        MDX blog posts
public/              logo.jpg + assets
```

---

## Deploying to Vercel

This project already has a Vercel project that owns **clojanitorial.com** and a GitHub repo
(`github.com/DRam105/CLOJanitorial`). Prefer **push-to-deploy**:

1. In the Vercel dashboard → your CLO project → **Settings → Git**, connect the GitHub repo.
2. Push to `main`:
   ```bash
   git add -A
   git commit -m "Build out CLO Janitorial site"
   git push
   ```
   > On this FAT-formatted F: drive, git may warn about "dubious ownership". Fix once:
   > `git config --global --add safe.directory "F:/00001 Website Projects/clo-janitorial-website"`
3. Vercel builds and deploys automatically. Set any env vars (e.g. `LEAD_WEBHOOK_URL`) in
   **Settings → Environment Variables**.

Alternatively, deploy via CLI: `npx vercel@latest link` (link to the existing project) then
`npx vercel@latest --prod`.

**DNS:** clojanitorial.com is registered at GoDaddy. Point it at Vercel per Vercel → Settings →
Domains (typically A `@` → Vercel's apex IP and CNAME `www` → `cname.vercel-dns.com`).
