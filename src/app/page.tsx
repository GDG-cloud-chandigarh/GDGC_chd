import dynamic from "next/dynamic";
import { GlowButton } from "@/components/GlowButton";
import { DynamicTextSlider } from "@/components/ui/dynamic-text-slider";
import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { StatCounter } from "@/components/StatCounter";
import { EventCard } from "@/components/EventCard";
import { SponsorLogo } from "@/components/SponsorLogo";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { getUpcomingEvents, getSponsors } from "@/lib/content";
import { JOIN_URL, NEWSLETTER_FORM_URL, SOCIAL_LINKS } from "@/lib/constants";

const HeroGravity = dynamic(() => import("@/components/HeroGravity").then((mod) => mod.HeroGravity), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />,
});

const VALUE_PROPS = [
  { title: "Learn", description: "Hands-on workshops and talks on GCP services, from Cloud Run to Vertex AI.", color: "bg-google-blue" },
  {
    title: "Connect",
    description: "Meet cloud engineers, architects, and students building on Google Cloud in the region.",
    color: "bg-google-green",
  },
  {
    title: "Build",
    description: "Study jams, hackathons, and project showcases to turn learning into shipped work.",
    color: "bg-google-red",
  },
  {
    title: "Grow",
    description: "Speaking opportunities, mentorship, and a path from attendee to organizer.",
    color: "bg-google-yellow",
  },
];

const TESTIMONIALS = [
  { quote: "I gave my first conference talk at a GDG Cloud Chandigarh meetup.", name: "Ishaan Bedi", role: "SRE, FinEdge" },
  {
    quote: "The Cloud Study Jams got our whole college club Associate Cloud Engineer certified.",
    name: "Meher Gill",
    role: "Student, PEC",
  },
];

export default function HomePage() {
  const upcomingEvents = getUpcomingEvents();
  const nextEvent = upcomingEvents[0];
  const sponsors = getSponsors().slice(0, 6);

  return (
    <>
      <section className="relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden text-center">
        <HeroGravity />
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <DynamicTextSlider
            topLine="GDG"
            sliderWord="Cloud Chandigarh"
            subheading="The place for cloud developers and architects in Chandigarh."
          >
            <GlowButton href={JOIN_URL}>Join the Community</GlowButton>
          </DynamicTextSlider>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12">
        {nextEvent && (
          <RevealOnScroll>
            <section className="mt-16">
              <h2 className="font-heading text-2xl font-bold">Next up</h2>
              <div className="mt-4 max-w-md">
                <EventCard event={nextEvent} />
              </div>
            </section>
          </RevealOnScroll>
        )}

        <RevealOnScroll>
          <section className="mt-16 grid grid-cols-2 gap-6 rounded-2xl bg-neutral-light p-8 sm:grid-cols-4">
            <StatCounter value={1200} suffix="+" label="Members" />
            <StatCounter value={48} label="Events held" />
            <StatCounter value={130} label="Speakers hosted" />
            <StatCounter value={9} label="Years running" />
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUE_PROPS.map((prop) => (
              <div key={prop.title} className="rounded-2xl border border-neutral-light p-6">
                <div className={`h-2 w-10 rounded-full ${prop.color}`} />
                <h3 className="mt-4 font-heading text-lg font-bold">{prop.title}</h3>
                <p className="mt-2 text-sm text-neutral-dark/80">{prop.description}</p>
              </div>
            ))}
          </section>
        </RevealOnScroll>

        {sponsors.length > 0 && (
          <section className="mt-16">
            <h2 className="text-center font-heading text-xl font-bold">Our sponsors</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {sponsors.map((sponsor) => (
                <SponsorLogo key={sponsor.name} sponsor={sponsor} />
              ))}
            </div>
          </section>
        )}

        <RevealOnScroll>
          <section className="mt-16 grid gap-6 sm:grid-cols-2">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </section>
        </RevealOnScroll>

        <section className="mt-16">
          <CTASection
            heading="Never miss an event"
            description="Get monthly updates on meetups, study jams, and DevFest — straight to your inbox."
            buttonLabel="Subscribe to our newsletter"
            buttonHref={NEWSLETTER_FORM_URL}
          />
        </section>

        <section className="mt-16 flex justify-center gap-6">
          <a href={SOCIAL_LINKS.linkedin} aria-label="LinkedIn" className="text-neutral-dark hover:text-google-blue">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href={SOCIAL_LINKS.twitter} aria-label="X (Twitter)" className="text-neutral-dark hover:text-google-blue">
            <Twitter className="h-6 w-6" />
          </a>
          <a href={SOCIAL_LINKS.instagram} aria-label="Instagram" className="text-neutral-dark hover:text-google-blue">
            <Instagram className="h-6 w-6" />
          </a>
          <a href={SOCIAL_LINKS.youtube} aria-label="YouTube" className="text-neutral-dark hover:text-google-blue">
            <Youtube className="h-6 w-6" />
          </a>
        </section>
      </div>
    </>
  );
}
