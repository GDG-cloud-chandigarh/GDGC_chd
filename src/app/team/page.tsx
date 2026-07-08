import type { Metadata } from "next";
import { TeamCard } from "@/components/TeamCard";
import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { getTeam } from "@/lib/content";
import { VOLUNTEER_FORM_URL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Team",
  description: "Meet the organizers behind GDG Cloud Chandigarh.",
  path: "/team",
});

export default function TeamPage() {
  const team = getTeam();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-heading text-4xl font-bold">Organizing team</h1>
      <p className="mt-3 max-w-2xl text-neutral-dark/80">
        GDG Cloud Chandigarh is run entirely by volunteers who plan events, manage sponsors, and keep the community
        running in their spare time.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>

      <section className="mt-16">
        <CTASection
          heading="Volunteer with us"
          description="Help organize events, run socials, or welcome newcomers — no experience required, just enthusiasm."
          buttonLabel="Sign up to volunteer"
          buttonHref={VOLUNTEER_FORM_URL}
        />
      </section>
    </div>
  );
}
