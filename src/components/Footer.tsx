import Link from "next/link";
import { Lockup } from "./Lockup";

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
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Lockup />

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-dark hover:text-google-blue">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-neutral-dark/10 pt-6 text-xs text-neutral-dark/70">
          <p>© {new Date().getFullYear()} GDG Cloud Chandigarh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
