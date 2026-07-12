import Link from "next/link";
import { Lockup } from "./Lockup";
import { GlowButton } from "./GlowButton";
import { FOOTER_DISCLAIMER, NEWSLETTER_FORM_URL } from "@/lib/constants";

const FOOTER_LINKS = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/sponsors", label: "Sponsors" },
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
            <div className="mt-2">
              <GlowButton href={NEWSLETTER_FORM_URL} size="sm">
                Subscribe to our newsletter
              </GlowButton>
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
