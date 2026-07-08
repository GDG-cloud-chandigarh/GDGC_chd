# GDG Cloud Chandigarh Website

Next.js (App Router) + TypeScript + Tailwind site for the GDG Cloud Chandigarh chapter. No backend, no CMS — content lives in this repo as typed data files and MDX.

## Getting started

```bash
pnpm install
pnpm dev
```

Visit http://localhost:3000.

## Adding a new event

Edit `content/data/events.ts` and add an object matching the `EventDetails` type (`src/lib/types.ts`) to the `sampleEvents` array:

```ts
{
  slug: "your-event-slug",       // used in the URL: /events/your-event-slug
  title: "Your Event Title",
  date: "2026-12-01T10:00:00+05:30", // ISO 8601, used for sorting and JSON-LD
  format: "in-person",            // "in-person" | "virtual" | "hybrid"
  location: "Venue name, Chandigarh",
  description: "One or two sentences describing the event.",
  rsvpUrl: "https://gdg.community.dev/events/details/your-event/",
  isPast: false,                  // false = shows under "Upcoming", true = "Past events"
}
```

Optional fields: `agenda` (string array), `speakers` (`{ name, title }[]`), `mapEmbedUrl`, `youtubeUrl`, `photoCount`, `gallery`. The event automatically appears on `/events` and gets its own page at `/events/<slug>`.

## Adding a new speaker

Edit `content/data/speakers.ts` and add an object matching the `Speaker` type. Set `isPast: false` for an upcoming/confirmed speaker (shows under "Upcoming speakers") or `isPast: true` for the archive.

## Adding a blog post

Create a new file at `content/blog/your-post-slug.mdx`:

```mdx
---
title: "Your Post Title"
date: "2026-01-15"
excerpt: "One sentence summary shown in the post list and social previews."
---

Your post content in Markdown/MDX goes here.
```

The filename (minus `.mdx`) becomes the URL slug: `/blog/your-post-slug`.

## Swapping in real brand assets

- **Logo**: replace the contents of `src/components/Lockup.tsx` with an `<Image>` pointing at the real logo file (add it under `public/images/`). `Navbar` and `Footer` import `Lockup` and don't need changes.
- **Google Sans font**: once you have the licensed SIL OFL `.woff2` files, edit `src/lib/fonts.ts` — replace the `next/font/google` Roboto calls with `next/font/local`, e.g.:
  ```ts
  import localFont from "next/font/local";
  export const headingFont = localFont({ src: "../../public/fonts/GoogleSans-Bold.woff2", variable: "--font-heading" });
  ```
- **Placeholder images**: `public/images/avatar-placeholder.svg`, `event-placeholder.svg`, `sponsor-placeholder.svg`, and `og-default.svg` are stand-ins. Replace individual entries' `photo`/`logo` fields in `content/data/*.ts` with real image paths as you get real photos/logos.
- **Placeholder URLs**: `src/lib/constants.ts` has several `PLACEHOLDER` form/social URLs — replace them with your real Google Forms, social handles, and domain (`SITE_URL`) before launch.

## Scripts

- `pnpm dev` — start the dev server
- `pnpm build` — production build
- `pnpm start` — run the production build
- `pnpm lint` — ESLint
- `pnpm typecheck` — TypeScript check with no emit
