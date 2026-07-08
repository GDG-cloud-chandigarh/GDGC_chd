# GDG Cloud Chandigarh Website — Design

## Purpose

A modern, fast, accessible marketing/community website for GDG Cloud Chandigarh (a Google Developer Group chapter focused on GCP). Built with Next.js so a non-technical organizer can update events/speakers/sponsors/blog content via git-based file edits, with no custom backend or CMS in v1.

## Tech Stack

- Next.js 14+, App Router, TypeScript
- Tailwind CSS, theme extended with brand palette + fonts
- Framer Motion, isolated to Client Components (hero reveal, scroll reveals, animated stat counters)
- `@next/mdx` for blog posts; typed TS data files for events/speakers/sponsors/team
- `next/image` for all images (AVIF/WebP, lazy loading)
- Next.js Metadata API for SEO (no next-seo dependency)
- Forms are link-outs only: Google Forms / Airtable / gdg.community.dev — no server-side form handling, no API routes, no auth
- Package manager: pnpm

## Brand & Design System

CSS variables + Tailwind theme extension:

| Token | Value | Usage |
|---|---|---|
| `--google-blue` | `#4285F4` | primary, links, buttons — ~30% of color usage |
| `--google-green` | `#34A853` | success/confirmation states |
| `--google-red` | `#EA4335` | alerts, sparing emphasis |
| `--google-yellow` | `#FBBC05` | large decorative accents/backgrounds only — never body text on white (fails contrast) |
| `--neutral-dark` | `#1E1E1E` | headings, body text |
| `--neutral-light` | `#F0F0F0` | section backgrounds, cards |
| white | — | dominant canvas, ~60% of page |

60/30/10 balance: 60% white/neutral, 30% blue, 10% green/red/yellow combined. All four brand colors as equal flat blocks only inside the logo lockup itself.

**Typography:**
- Headings: `next/font/google` Roboto (500/700) exposed as `--font-heading`, standing in for Google Sans. Designed as a one-line swap to `next/font/local` self-hosted Google Sans OFL files once supplied — see `src/lib/fonts.ts`.
- Body: Roboto via `next/font/google`, `--font-body`.
- Code/labels: JetBrains Mono via `next/font/google`, `--font-mono`.

**Logo:** Placeholder chapter lockup component (`src/components/Lockup.tsx`) rendering a text wordmark ("GDG Cloud • Chandigarh") with the brand colors — never a fabricated Google "Super G" or multicolor wordmark. Swappable for the real logo file (SVG/PNG) later by replacing the component internals; call sites (`Navbar`, `Footer`) don't change.

**Footer disclaimer (verbatim, hard-coded in `src/lib/constants.ts`):**
> GDG Cloud Chandigarh is an independent group; our activities and the opinions expressed here should in no way be linked to Google, the corporation. To learn more about the GDG program, visit https://developers.google.com/community/gdg/

## Content Layer

Two content mechanisms, chosen per content shape:

1. **Structured records** (events, speakers, sponsors, team) — typed TS arrays/objects under `content/data/*.ts` (`events.ts`, `speakers.ts`, `sponsors.ts`, `team.ts`). Each exports a typed array (`Event[]`, `Speaker[]`, etc.) with a stable `slug` field for detail routes. Structured this way so a later CMS swap only touches the accessor layer, not callers.
2. **Blog posts** — MDX files under `content/blog/*.mdx` with frontmatter (`title`, `date`, `excerpt`, `ogImage`, `slug`). Rendered via `@next/mdx` so recap posts can embed components (e.g. an image gallery) beyond flat Markdown.

All pages read through `src/lib/content.ts` (typed accessor functions: `getEvents()`, `getEventBySlug()`, `getSpeakers()`, `getBlogPosts()`, etc.) rather than importing content files directly — this is the single seam for a future headless CMS.

Placeholder content (sample events, speakers, sponsors, blog posts) is added to each data file, clearly marked with a `// PLACEHOLDER` comment header, so it's obvious what needs replacing with real chapter data.

## Site Structure

Routes under `src/app/`:

- `/` — hero, next-event highlight card, animated stats strip, value props grid (Learn/Connect/Build/Grow), tech/tool logo marquee, featured sponsors row, newsletter signup block, social links bar
- `/about` — mission, chapter history/timeline, Code of Conduct section/link
- `/events` — upcoming (cards, RSVP link-out) + past (filterable grid, recap/YouTube links); `/events/[slug]` detail page with agenda, speakers, gallery, embedded map, JSON-LD `Event` schema
- `/speakers` — grid with modal/detail view, "Call for Speakers" CTA, past speakers archive
- `/team` — organizer grid, "Volunteer with us" CTA
- `/sponsors` — tiered logo wall (Platinum/Gold/Silver/Community), tier explanation, "Become a sponsor" CTA
- `/blog` — post list; `/blog/[slug]` detail with OpenGraph metadata
- `/contact` — contact form (mailto or Formspree/Google Form link-out), embedded map, social links

Shared components: `Navbar`, `Footer`, `EventCard`, `SpeakerCard`, `SponsorLogo`, `StatCounter`, `TestimonialCard`, `CTASection`, `Lockup`. `SEO`/metadata handled per-page via the Metadata API plus a small `src/lib/seo.ts` helper for shared OG/Twitter defaults, and a JSON-LD helper for `Organization` (home) and `Event` (event detail) schema.

## Rendering Strategy

Server Components by default. Client Components limited to: animated stat counters, scroll-reveal wrappers, mobile nav hamburger toggle, speaker detail modal, event-filter controls on `/events`. All content fetching/parsing happens in Server Components / build-time via the `lib/content.ts` accessors — no client-side data fetching needed since there's no backend.

## Accessibility & SEO

- WCAG 2.1 AA: 4.5:1+ text contrast (yellow never used as text-on-white), single `h1` per page, semantic landmarks (`nav`/`main`/`footer`), descriptive alt text, visible focus states, keyboard navigation throughout, caption/transcript links on embedded videos.
- Per-page unique title/description via Metadata API, OG + Twitter card images (blog posts and event pages get generated or per-post images), JSON-LD (`Organization` on home, `Event` on event pages), `sitemap.xml` and `robots.txt` via Next.js file conventions.
- Target Lighthouse 90+ on Accessibility, SEO, Performance.

## Explicitly Out of Scope (v1)

- No real CMS integration, no backend/API routes, no authentication.
- No automated test suite (not requested in the brief; Playwright/Vitest can be layered in later if wanted).
- No real logo file or self-hosted Google Sans font files — both wired as one-line swaps (see Brand & Design System) pending real assets.
- No server-side form handling — all forms link out to external services.

## Deliverables

1. Full Next.js project scaffold (pages + components above) in this repo.
2. Tailwind config with brand palette + font theme extensions.
3. Placeholder content clearly marked as such in each `content/data/*.ts` file and a few sample `content/blog/*.mdx` posts.
4. README covering: how to add a new event/speaker/blog post by editing content files, how to run the dev server, and where to swap in the real logo/fonts later.

## Build Order

1. Scaffold (create-next-app, Tailwind config, fonts, brand tokens)
2. `Navbar` + `Footer` (disclaimer and brand lockup live here)
3. `/` Home
4. `/about`
5. `/events` (+ `[slug]`)
6. `/speakers`
7. `/team`
8. `/sponsors`
9. `/blog` (+ `[slug]`)
10. `/contact`
11. Accessibility/SEO pass + Lighthouse check
12. README
