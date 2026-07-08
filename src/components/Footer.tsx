import Link from "next/link";
import { Linkedin, Twitter, Instagram, Youtube, MessageCircle } from "lucide-react";
import { Lockup } from "./Lockup";
import { FOOTER_DISCLAIMER, SOCIAL_LINKS, NEWSLETTER_FORM_URL } from "@/lib/constants";

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/speakers", label: "Speakers" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-light bg-neutral-light">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Lockup />
            <p className="mt-3 max-w-xs text-sm text-neutral-dark/80">
              A community of cloud developers and architects in Chandigarh.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-dark hover:text-google-blue">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold">Stay in the loop</p>
            <Link
              href={NEWSLETTER_FORM_URL}
              className="mt-2 inline-block rounded-full bg-google-blue px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600"
            >
              Subscribe to our newsletter
            </Link>
            <div className="mt-4 flex gap-4">
              <a href={SOCIAL_LINKS.linkedin} aria-label="LinkedIn" className="text-neutral-dark hover:text-google-blue">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.twitter} aria-label="X (Twitter)" className="text-neutral-dark hover:text-google-blue">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.instagram} aria-label="Instagram" className="text-neutral-dark hover:text-google-blue">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.youtube} aria-label="YouTube" className="text-neutral-dark hover:text-google-blue">
                <Youtube className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.whatsapp} aria-label="WhatsApp community" className="text-neutral-dark hover:text-google-blue">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-dark/10 pt-6 text-xs text-neutral-dark/70">
          <p>{FOOTER_DISCLAIMER}</p>
          <p className="mt-2">© {new Date().getFullYear()} GDG Cloud Chandigarh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
