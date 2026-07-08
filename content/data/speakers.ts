import type { Speaker } from "@/lib/types";

// PLACEHOLDER sample data — replace with real chapter speakers.
export const sampleSpeakers: Speaker[] = [
  {
    slug: "aditi-sharma",
    name: "Aditi Sharma",
    title: "GCP Architect",
    company: "Neusix",
    topic: "Designing multi-region architectures on Google Cloud",
    bio: "Aditi has spent the last six years designing cloud infrastructure for fintech and healthcare clients, with a focus on resilience and cost efficiency on GCP.",
    photo: "/images/avatar-placeholder.svg",
    isPast: false,
    links: { linkedin: "https://linkedin.com/in/PLACEHOLDER" },
  },
  {
    slug: "rohan-mehta",
    name: "Rohan Mehta",
    title: "Staff Engineer",
    company: "Cloudscale",
    topic: "Serverless at scale: lessons from production Cloud Run",
    bio: "Rohan leads the platform team at Cloudscale, where he has run Cloud Run in production since its GA launch.",
    photo: "/images/avatar-placeholder.svg",
    isPast: false,
    links: { twitter: "https://twitter.com/PLACEHOLDER" },
  },
  {
    slug: "karan-vig",
    name: "Karan Vig",
    title: "Developer Advocate",
    company: "Google",
    topic: "What's new for Cloud developers",
    bio: "Karan works on developer relations for Google Cloud, focused on the Indian developer ecosystem.",
    photo: "/images/avatar-placeholder.svg",
    isPast: true,
    links: { linkedin: "https://linkedin.com/in/PLACEHOLDER", twitter: "https://twitter.com/PLACEHOLDER" },
  },
  {
    slug: "priya-nair",
    name: "Priya Nair",
    title: "ML Engineer",
    company: "DataCraft",
    topic: "Building production ML pipelines with Vertex AI",
    bio: "Priya builds ML infrastructure at DataCraft and has spoken at DevFest events across three chapters.",
    photo: "/images/avatar-placeholder.svg",
    isPast: true,
  },
];
