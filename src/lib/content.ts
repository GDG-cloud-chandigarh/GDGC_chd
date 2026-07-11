import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { sampleEvents } from "../../content/data/events";
import { sampleSpeakers } from "../../content/data/speakers";
import { sampleSponsors } from "../../content/data/sponsors";
import { sampleTeam, sampleVolunteers } from "../../content/data/team";
import type { BlogPost, BlogPostMeta, EventDetails, Speaker, Sponsor, SponsorTier, TeamMember } from "./types";

export function getEvents(): EventDetails[] {
  return sampleEvents;
}

export function getUpcomingEvents(): EventDetails[] {
  return sampleEvents.filter((event) => !event.isPast).sort((a, b) => (a.date < b.date ? -1 : 1));
}

export function getPastEvents(): EventDetails[] {
  return sampleEvents.filter((event) => event.isPast).sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getEventBySlug(slug: string): EventDetails | undefined {
  return sampleEvents.find((event) => event.slug === slug);
}

export function getSpeakers(): Speaker[] {
  return sampleSpeakers;
}

export function getCurrentSpeakers(): Speaker[] {
  return sampleSpeakers.filter((speaker) => !speaker.isPast);
}

export function getPastSpeakers(): Speaker[] {
  return sampleSpeakers.filter((speaker) => speaker.isPast);
}

export function getSpeakerBySlug(slug: string): Speaker | undefined {
  return sampleSpeakers.find((speaker) => speaker.slug === slug);
}

export function getSponsors(): Sponsor[] {
  return sampleSponsors;
}

export function getSponsorsByTier(): Record<SponsorTier, Sponsor[]> {
  const tiers: SponsorTier[] = ["Platinum", "Gold", "Silver", "Community"];
  return Object.fromEntries(tiers.map((tier) => [tier, sampleSponsors.filter((s) => s.tier === tier)])) as Record<
    SponsorTier,
    Sponsor[]
  >;
}

export function getTeam(): TeamMember[] {
  return sampleTeam;
}

export function getVolunteers(): TeamMember[] {
  return sampleVolunteers;
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getBlogPosts(): BlogPostMeta[] {
  const files = fs.readdirSync(BLOG_DIR).filter((filename) => filename.endsWith(".mdx"));
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      ogImage: data.ogImage as string | undefined,
    } satisfies BlogPostMeta;
  });
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    ogImage: data.ogImage as string | undefined,
    content,
  };
}
