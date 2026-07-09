"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";

/** Renders the site footer on every route except the home page. */
export function ConditionalFooter() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <Footer />;
}
