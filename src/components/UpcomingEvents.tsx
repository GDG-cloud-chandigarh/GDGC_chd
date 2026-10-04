import Image from "next/image";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { GlowButton } from "@/components/GlowButton";

type Upcoming = {
  name: string;
  date: string;
  blurb: string;
  /** The event's own website, where tickets, agenda and speakers live. */
  href: string;
  image: string;
  /** Date pill colours, keyed to the Google palette. */
  pill: string;
  /** Button label; defaults to "Visit the website". */
  cta?: string;
};

// Our October event weekend, in date order. Each has its own site; this
// section only points people there, so dates and details live in one place.
const EVENTS: Upcoming[] = [
  {
    name: "Cloud Community Days 2026",
    date: "Fri, 23 October 2026",
    blurb: "A full day on Google Cloud, AI/ML and DevOps: talks, hands-on labs and the community.",
    href: "https://ccd.gdgcloudchandigarh.com",
    image: "/images/upcoming/cloud-community-days-2026.jpg",
    pill: "border-google-blue bg-google-blue/15",
  },
  {
    name: "Code for Communities",
    date: "Fri, 23 October 2026",
    blurb: "A hackathon building for the community, run with HackCulture, alongside Cloud Community Days.",
    href: "https://hackculture.io/hackathons/code-for-communities-chandigarh",
    image: "/images/upcoming/code-for-communities.jpg",
    pill: "border-google-yellow bg-google-yellow/25",
    cta: "Register on HackCulture",
  },
  {
    name: "DevFest Chandigarh 2026",
    date: "Sat, 24 October 2026",
    blurb: "Our flagship festival: talks and workshops on AI, Google Cloud, Android, Web and Firebase.",
    href: "https://devfest.gdgcloudchandigarh.com",
    image: "/images/upcoming/devfest-chandigarh-2026.jpg",
    pill: "border-google-red bg-google-red/15",
  },
];

/** Events page section pointing to the upcoming event websites. */
export function UpcomingEvents() {
  return (
    <section id="upcoming" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-12 sm:px-8 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-google-blue">Upcoming</p>
      <h1 className="mt-2 font-heading text-3xl font-bold text-neutral-dark sm:text-4xl">
        Two days, three events, one weekend
      </h1>
      <p className="mt-3 max-w-2xl text-neutral-dark/80">
        Cloud Community Days and the Code for Communities hackathon on 23 October, then DevFest Chandigarh on 24
        October 2026. Each has its own site with the details and registration.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {EVENTS.map((event) => (
          <article
            key={event.name}
            className="group flex flex-col overflow-hidden rounded-2xl border-2 border-neutral-dark bg-white shadow-[6px_6px_0_#1E1E1E] transition-[transform,box-shadow] duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#1E1E1E] motion-reduce:transition-none motion-reduce:hover:translate-x-0 motion-reduce:hover:translate-y-0"
          >
            <a href={event.href} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true" className="block overflow-hidden border-b-2 border-neutral-dark">
              <Image
                src={event.image}
                alt=""
                width={1200}
                height={630}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </a>
            <div className="flex flex-1 flex-col p-6">
              <p className={`flex w-fit items-center gap-2 rounded-full border-2 px-3 py-1 text-sm font-semibold ${event.pill}`}>
                <Calendar className="h-4 w-4" aria-hidden="true" />
                {event.date}
              </p>
              <h3 className="mt-4 font-heading text-2xl font-bold text-neutral-dark">{event.name}</h3>
              <p className="mt-1 flex items-center gap-1 text-sm text-neutral-dark/70">
                <MapPin className="h-4 w-4" aria-hidden="true" /> Chandigarh
              </p>
              <p className="mt-3 flex-1 text-neutral-dark/80">{event.blurb}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <GlowButton href={event.href} size="sm">
                  {event.cta ?? "Visit the website"}
                </GlowButton>
                <span className="inline-flex items-center gap-1 text-sm text-neutral-dark/60">
                  {new URL(event.href).host}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
