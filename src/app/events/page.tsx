import type { Metadata } from "next";
import DomeGallery from "@/components/ui/dome-gallery";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Events",
  description: "Upcoming and past GDG Cloud Chandigarh meetups, study jams, and DevFest.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <div className="-mt-[4.5rem] h-[100svh] w-full overflow-hidden sm:-mt-20">
      <DomeGallery
        images={[
          { src: "/images/build_with_ai_2026.jpg", alt: "Build with AI 2026" },
          { src: "/images/devfest_2025.webp", alt: "DevFest Chandigarh 2025" },
          { src: "/images/ccd_2025.jpg", alt: "Cloud Community Days 2025" },
          { src: "/images/build_with_ai_2024.webp", alt: "Build with AI 2024" },
          { src: "/images/devfest_2024.jpg", alt: "DevFest Chandigarh 2024" },
          { src: "/images/ccd_2024.jpg", alt: "Cloud Community Days 2024" },
          { src: "/images/i_o_extended_2023.webp", alt: "Google I/O Extended 2023" },
        ]}
        overlayBlurColor="#ffffff"
        grayscale={false}
        segments={24}
      />
    </div>
  );
}
