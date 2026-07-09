import dynamic from "next/dynamic";
import { GlowButton } from "@/components/GlowButton";
import { DynamicTextSlider } from "@/components/ui/dynamic-text-slider";
import { JOIN_URL } from "@/lib/constants";

const HeroGravity = dynamic(() => import("@/components/HeroGravity").then((mod) => mod.HeroGravity), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />,
});

export default function HomePage() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden text-center">
      <HeroGravity />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <DynamicTextSlider
          topLine="GDG"
          sliderWord="Cloud Chandigarh"
          subheading="The place for cloud developers and architects in Chandigarh."
        >
          <GlowButton href={JOIN_URL}>Join the Community</GlowButton>
        </DynamicTextSlider>
      </div>
    </section>
  );
}
