"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Lockup } from "./Lockup";
import { JOIN_URL } from "@/lib/constants";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/speakers", label: "Speakers" },
  { href: "/team", label: "Team" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-neutral-light bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <Lockup />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-neutral-dark hover:text-google-blue">
              {link.label}
            </Link>
          ))}
          <Link
            href={JOIN_URL}
            className="rounded-full bg-google-blue px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600"
          >
            Join the Community
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-neutral-light bg-white px-4 pb-4 md:hidden" aria-label="Primary mobile">
          <ul className="flex flex-col gap-3 pt-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block text-sm font-medium text-neutral-dark" onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={JOIN_URL}
                className="block rounded-full bg-google-blue px-4 py-2 text-center text-sm font-semibold text-white"
              >
                Join the Community
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
