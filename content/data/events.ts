import type { EventDetails } from "@/lib/types";

// PLACEHOLDER sample data — replace with real chapter events.
export const sampleEvents: EventDetails[] = [
  {
    slug: "cloud-community-day-2026",
    title: "Cloud Community Day 2026",
    date: "2026-09-12T09:30:00+05:30",
    endDate: "2026-09-12T17:00:00+05:30",
    format: "in-person",
    location: "IT Park, Chandigarh",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=PLACEHOLDER",
    description:
      "A full day of talks on GCP architecture, serverless, and AI/ML on Google Cloud, with hands-on workshops in the afternoon.",
    agenda: [
      "09:30 — Registration & breakfast",
      "10:00 — Keynote: The state of Google Cloud",
      "11:00 — Track sessions (Serverless, Data & AI, DevOps)",
      "13:00 — Lunch & networking",
      "14:00 — Hands-on workshop: Deploying with Cloud Run",
      "16:30 — Closing remarks & swag",
    ],
    speakers: [
      { name: "Aditi Sharma", title: "GCP Architect, Neusix" },
      { name: "Rohan Mehta", title: "Staff Engineer, Cloudscale" },
    ],
    rsvpUrl: "https://gdg.community.dev/events/details/PLACEHOLDER-1/",
    isPast: false,
  },
  {
    slug: "i-o-extended-2026",
    title: "I/O Extended Chandigarh 2026",
    date: "2026-06-05T18:00:00+05:30",
    format: "hybrid",
    location: "Startup Hub, Sector 34, Chandigarh",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=PLACEHOLDER",
    description:
      "Our local recap of Google I/O — the biggest announcements in Cloud, Android, and AI, watched together and discussed with local experts.",
    agenda: [
      "18:00 — Doors open",
      "18:30 — I/O keynote recap watch party",
      "19:30 — Panel: What this means for Indian developers",
      "20:15 — Networking & pizza",
    ],
    speakers: [{ name: "Simran Kaur", title: "Android GDE" }],
    rsvpUrl: "https://gdg.community.dev/events/details/PLACEHOLDER-2/",
    isPast: false,
  },
  {
    slug: "devfest-chandigarh-2025",
    title: "DevFest Chandigarh 2025",
    date: "2025-11-15T09:00:00+05:30",
    format: "in-person",
    location: "PEC Chandigarh, Auditorium",
    description:
      "Our flagship annual DevFest with tracks on Cloud, AI, Web, and Android, featuring 12 speakers and over 300 attendees.",
    speakers: [
      { name: "Karan Vig", title: "Developer Advocate, Google" },
      { name: "Priya Nair", title: "ML Engineer, DataCraft" },
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=PLACEHOLDER",
    photoCount: 145,
    rsvpUrl: "https://gdg.community.dev/events/details/PLACEHOLDER-3/",
    isPast: true,
  },
  {
    slug: "cloud-study-jam-2025",
    title: "Cloud Study Jam: Kubernetes Basics",
    date: "2025-08-22T10:00:00+05:30",
    format: "virtual",
    location: "Online (Google Meet)",
    description:
      "A hands-on study jam walking through the Kubernetes fundamentals Qwiklabs quest, with live troubleshooting support.",
    photoCount: 22,
    rsvpUrl: "https://gdg.community.dev/events/details/PLACEHOLDER-4/",
    isPast: true,
  },
];
