import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return buildMetadata({ title: "Post not found", description: "This blog post does not exist.", path: `/blog/${params.slug}` });
  }
  return buildMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}`, ogImage: post.ogImage });
}

function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-xs font-medium text-google-blue">{formatPostDate(post.date)}</p>
      <h1 className="mt-1 font-heading text-4xl font-bold">{post.title}</h1>
      <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-heading prose-a:text-google-blue">
        <MDXRemote source={post.content} />
      </div>
      <Link href="/blog" className="mt-10 inline-block text-sm font-semibold text-google-blue hover:underline">
        ← Back to all posts
      </Link>
    </article>
  );
}
