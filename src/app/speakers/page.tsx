import type { Metadata } from "next";
import { SpeakerCard } from "@/components/SpeakerCard";
import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { getCurrentSpeakers, getPastSpeakers } from "@/lib/content";
import { SPEAKER_FORM_URL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Speakers",
  description: "Meet our upcoming and past GDG Cloud Chandigarh speakers, and apply to speak at a future event.",
  path: "/speakers",
});

export default function SpeakersPage() {
  const currentSpeakers = getCurrentSpeakers();
  const pastSpeakers = getPastSpeakers();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-heading text-4xl font-bold">Speakers</h1>

      <section className="mt-8">
        <h2 className="font-heading text-2xl font-bold">Upcoming speakers</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentSpeakers.map((speaker) => (
            <SpeakerCard key={speaker.slug} speaker={speaker} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <CTASection
          heading="Call for Speakers"
          description="Have a Google Cloud story worth sharing? We'd love to hear your talk idea."
          buttonLabel="Submit a talk"
          buttonHref={SPEAKER_FORM_URL}
        />
      </section>

      <section className="mt-16">
        <h2 className="font-heading text-2xl font-bold">Past speakers</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pastSpeakers.map((speaker) => (
            <SpeakerCard key={speaker.slug} speaker={speaker} />
          ))}
        </div>
      </section>
    </div>
  );
}
