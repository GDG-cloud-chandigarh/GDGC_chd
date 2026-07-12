"use client";

import { usePathname } from "next/navigation";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

/**
 * Fixed, full-viewport grid backdrop rendered behind all page content.
 * The grid lines stay static while random squares fade in and out, masked to
 * fade toward the edges. The About page uses an inverted (black) theme.
 */
export function SiteBackground() {
  const pathname = usePathname();
  const isDark = pathname === "/about";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        isDark ? "bg-black" : "bg-white",
      )}
    >
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.35}
        duration={3}
        repeatDelay={1}
        className={cn(
          isDark
            ? "fill-white/10 stroke-white/10 text-white/30"
            : "fill-neutral-dark/10 stroke-neutral-dark/10 text-neutral-dark/30",
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          "inset-y-[-20%] h-[140%]",
        )}
      />
    </div>
  );
}
