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
          {
            src: "/images/build_with_ai_2026.jpg",
            alt: "Build with AI 2026",
            description: "Hands-on sessions building with Google's generative AI tooling.",
            link: "https://gdg.community.dev/events/details/google-gdg-cloud-chandigarh-presents-agentic-ai-bootcamp-building-autonomous-amp-intelligent-systems/",
          },
          {
            src: "/images/devfest_2025.webp",
            alt: "DevFest Chandigarh 2025",
            description: "Our flagship developer festival across Cloud, AI, Web, and Android.",
          },
          {
            src: "/images/ccd_2025.jpg",
            alt: "Cloud Community Days 2025",
            description: "A full day of talks and workshops on Google Cloud and AI.",
            link: "https://gdg.community.dev/events/details/google-gdg-cloud-chandigarh-presents-cloud-community-days-chandigarh-1/",
          },
          {
            src: "/images/build_with_ai_2024.webp",
            alt: "Build with AI 2024",
            description: "Exploring generative AI and building with Google's AI tools.",
          },
          {
            src: "/images/devfest_2024.jpg",
            alt: "DevFest Chandigarh 2024",
            description: "Our annual developer festival spanning Cloud, AI, Web, and Android.",
            link: "https://gdg.community.dev/events/details/google-gdg-cloud-chandigarh-presents-devfest-chandigarh-2024/",
          },
          {
            src: "/images/ccd_2024.jpg",
            alt: "Cloud Community Days 2024",
            description: "Talks and workshops on Google Cloud for the tricity community.",
            link: "https://gdg.community.dev/events/details/google-gdg-cloud-chandigarh-presents-cloud-community-days-chandigarh/",
          },
          {
            src: "/images/i_o_extended_2023.webp",
            alt: "Google I/O Extended 2023",
            description: "Local sessions recapping the biggest announcements from Google I/O.",
            link: "https://gdg.community.dev/events/details/google-gdg-cloud-chandigarh-presents-google-io-extended-chandigarh/",
          },
        ]}
        overlayBlurColor="#ffffff"
        grayscale={false}
        segments={24}
        openedImageWidth="640px"
        openedImageHeight="480px"
      />
    </div>
  );
}
