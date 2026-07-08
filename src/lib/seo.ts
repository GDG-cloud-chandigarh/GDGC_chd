import type { Metadata } from "next";

interface BuildMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export function buildMetadata({ title, description, path, ogImage = "/images/og-default.svg" }: BuildMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      images: [{ url: ogImage }],
    },
    twitter: {
      title,
      description,
      images: [ogImage],
    },
  };
}
