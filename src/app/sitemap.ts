import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getEvents, getBlogPosts } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/events", "/speakers", "/team", "/sponsors", "/blog", "/contact"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const eventRoutes = getEvents().map((event) => ({
    url: `${SITE_URL}/events/${event.slug}`,
    lastModified: new Date(event.date),
  }));

  const blogRoutes = getBlogPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...eventRoutes, ...blogRoutes];
}
