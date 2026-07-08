import type { Metadata } from "next";
import { Linkedin, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { CONTACT_FORM_URL, CONTACT_EMAIL, MAP_EMBED_URL, SOCIAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with the GDG Cloud Chandigarh organizing team.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-heading text-4xl font-bold">Contact us</h1>
      <p className="mt-3 text-neutral-dark/80">
        Questions about an event, partnership, or just want to say hi? Reach out below.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={CONTACT_FORM_URL}
          className="rounded-full bg-google-blue px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600"
        >
          Fill out our contact form
        </a>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="flex items-center gap-2 rounded-full border border-neutral-light px-6 py-3 text-sm font-semibold text-neutral-dark hover:border-google-blue hover:text-google-blue"
        >
          <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
        </a>
      </div>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold">Find us</h2>
        <iframe
          src={MAP_EMBED_URL}
          title="GDG Cloud Chandigarh location"
          className="mt-4 h-72 w-full rounded-2xl border border-neutral-light"
          loading="lazy"
        />
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold">Follow us</h2>
        <div className="mt-4 flex gap-4">
          <a href={SOCIAL_LINKS.linkedin} aria-label="LinkedIn" className="text-neutral-dark hover:text-google-blue">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href={SOCIAL_LINKS.twitter} aria-label="X (Twitter)" className="text-neutral-dark hover:text-google-blue">
            <Twitter className="h-6 w-6" />
          </a>
          <a href={SOCIAL_LINKS.instagram} aria-label="Instagram" className="text-neutral-dark hover:text-google-blue">
            <Instagram className="h-6 w-6" />
          </a>
          <a href={SOCIAL_LINKS.youtube} aria-label="YouTube" className="text-neutral-dark hover:text-google-blue">
            <Youtube className="h-6 w-6" />
          </a>
        </div>
      </section>
    </div>
  );
}
