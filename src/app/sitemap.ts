import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getEvents } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/events", "/team", "/sponsors", "/contact"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const eventRoutes = getEvents().map((event) => ({
    url: `${SITE_URL}/events/${event.slug}`,
    lastModified: new Date(event.date),
  }));

  return [...staticRoutes, ...eventRoutes];
}
