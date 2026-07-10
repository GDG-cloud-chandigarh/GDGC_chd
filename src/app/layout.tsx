import type { Metadata } from "next";
import Script from "next/script";
import { headingFont, bodyFont, monoFont } from "@/lib/fonts";
import { Navbar } from "@/components/Navbar";
import { ConditionalFooter } from "@/components/ConditionalFooter";
import { SocialDock } from "@/components/SocialDock";
import { SiteBackground } from "@/components/SiteBackground";
import { organizationJsonLd } from "@/lib/jsonld";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: SITE_TAGLINE,
  openGraph: { siteName: SITE_NAME, type: "website", images: [{ url: "/images/og-default.svg" }] },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <SiteBackground />
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <ConditionalFooter />
        <SocialDock />
      </body>
    </html>
  );
}
