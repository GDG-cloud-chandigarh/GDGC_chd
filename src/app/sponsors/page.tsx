import type { Metadata } from "next";
import { SponsorLogo } from "@/components/SponsorLogo";
import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { getSponsorsByTier } from "@/lib/content";
import { SPONSOR_FORM_URL, CONTACT_EMAIL } from "@/lib/constants";
import type { SponsorTier } from "@/lib/types";

export const metadata: Metadata = buildMetadata({
  title: "Sponsors",
  description: "Meet the sponsors who make GDG Cloud Chandigarh events possible, and learn how to become one.",
  path: "/sponsors",
});

const TIERS: SponsorTier[] = ["Platinum", "Gold", "Silver", "Community"];

const TIER_DESCRIPTIONS: Record<SponsorTier, string> = {
  Platinum: "Top billing at DevFest and Cloud Community Day, dedicated booth space, and a speaking slot.",
  Gold: "Logo placement across all events, a booth at our flagship events, and social media shoutouts.",
  Silver: "Logo placement on our website and at meetups throughout the year.",
  Community: "Local partners who support us with venue space, swag, or in-kind contributions.",
};

export default function SponsorsPage() {
  const sponsorsByTier = getSponsorsByTier();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-heading text-4xl font-bold">Sponsors</h1>
      <p className="mt-3 max-w-2xl text-neutral-dark/80">
        Our events are free to attend thanks to the generosity of these sponsors.
      </p>

      {TIERS.map((tier) => {
        const sponsors = sponsorsByTier[tier];
        if (sponsors.length === 0) return null;
        return (
          <section key={tier} className="mt-12">
            <h2 className="font-heading text-2xl font-bold">{tier}</h2>
            <p className="mt-1 text-sm text-neutral-dark/70">{TIER_DESCRIPTIONS[tier]}</p>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {sponsors.map((sponsor) => (
                <SponsorLogo key={sponsor.name} sponsor={sponsor} />
              ))}
            </div>
          </section>
        );
      })}

      <section className="mt-16">
        <CTASection
          heading="Become a sponsor"
          description="Reach hundreds of cloud developers and architects in Chandigarh. Email us for our sponsorship prospectus."
          buttonLabel="Request the prospectus"
          buttonHref={`mailto:${CONTACT_EMAIL}?subject=Sponsorship%20Prospectus`}
        />
      </section>
      <p className="mt-4 text-center text-sm text-neutral-dark/70">
        Prefer a form?{" "}
        <a href={SPONSOR_FORM_URL} className="font-semibold text-google-blue hover:underline">
          Fill out our sponsor interest form
        </a>
        .
      </p>
    </div>
  );
}
