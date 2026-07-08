import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { getBlogPosts } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description: "Event recaps, tutorials, and member spotlights from GDG Cloud Chandigarh.",
  path: "/blog",
});

function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-heading text-4xl font-bold">Blog</h1>
      <div className="mt-8 space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-neutral-light pb-8">
            <p className="text-xs font-medium text-google-blue">{formatPostDate(post.date)}</p>
            <h2 className="mt-1 font-heading text-2xl font-bold">
              <Link href={`/blog/${post.slug}`} className="hover:text-google-blue">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-neutral-dark/80">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="mt-2 inline-block text-sm font-semibold text-google-blue hover:underline">
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
