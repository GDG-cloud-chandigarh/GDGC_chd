export interface EventSpeaker {
  name: string;
  title: string;
}

export interface EventDetails {
  slug: string;
  title: string;
  date: string;
  endDate?: string;
  format: "in-person" | "virtual" | "hybrid";
  location: string;
  mapEmbedUrl?: string;
  description: string;
  agenda?: string[];
  speakers?: EventSpeaker[];
  gallery?: string[];
  youtubeUrl?: string;
  rsvpUrl: string;
  isPast: boolean;
  photoCount?: number;
}

export interface Speaker {
  slug: string;
  name: string;
  title: string;
  company: string;
  topic: string;
  bio: string;
  photo: string;
  isPast: boolean;
  links?: { linkedin?: string; twitter?: string };
}

export type SponsorTier = "Platinum" | "Gold" | "Silver" | "Community";

export interface Sponsor {
  name: string;
  tier: SponsorTier;
  logo: string;
  url: string;
}

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
  twitter?: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  ogImage?: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}
