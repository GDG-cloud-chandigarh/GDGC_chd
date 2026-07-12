import type { Metadata } from "next";
import Image from "next/image";
import { HeroBirds } from "@/components/HeroBirds";
import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { VOLUNTEER_FORM_URL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "What GDG Cloud Chandigarh is, our history, and our Code of Conduct.",
  path: "/about",
});

const TIMELINE = [
  { date: "Jul 11, 2026", title: "How I Fixed It", description: "Developers swap real debugging war stories and the fixes that finally cracked them." },
  { date: "Mar 10, 2026", title: "Agentic AI Bootcamp: Building Autonomous & Intelligent Systems", description: "A hands-on bootcamp on building autonomous, tool-using AI agents and intelligent systems." },
  { date: "Aug 30, 2025", title: "Cloud Community Days - Chandigarh", description: "Our full-day community conference across Google Cloud, AI, and modern app development." },
  { date: "Apr 19, 2025", title: "Build with AI", description: "A hands-on event exploring generative AI and building with Google's AI tooling." },
  { date: "Dec 15, 2024", title: "DevFest Chandigarh 2024", description: "Our flagship annual developer festival spanning Cloud, AI, Web, and Android." },
  { date: "Aug 24, 2024", title: "Cloud Community Days - Chandigarh", description: "A day of talks and workshops on Google Cloud Platform for the tricity developer community." },
  { date: "Feb 24, 2024", title: "Google Cloud Study Jams", description: "Guided, hands-on labs to help developers skill up on Google Cloud." },
  { date: "Aug 28, 2023", title: "Google I/O Extended Chandigarh", description: "A local watch party and sessions recapping the biggest announcements from Google I/O." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative -mt-[4.5rem] h-screen w-full sm:-mt-20">
        <Image
          src="/images/about.png"
          alt="GDG Cloud Chandigarh"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <HeroBirds />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto flex w-full max-w-6xl justify-end px-4 sm:px-8">
            <div className="max-w-xl text-right">
              <h1 className="font-heading text-3xl font-bold text-neutral-dark sm:text-4xl">Our mission</h1>
              <p className="mt-3 text-neutral-dark/80">
                Google Developer Groups (GDGs) are local, volunteer-run communities of developers interested in
                Google&apos;s developer technologies. GDG Cloud is a specialized GDG chapter type focused specifically on
                Google Cloud Platform — architecture, data, AI/ML, and infrastructure. GDG Cloud Chandigarh exists to
                give cloud developers and architects in the tricity area a place to learn from each other, share
                production experience, and build things together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 text-white">
      <section>
        <h2 className="font-heading text-2xl font-bold">Our history</h2>
        <div className="mt-8">
          {TIMELINE.map((item) => (
            <div key={`${item.date}-${item.title}`} className="relative flex justify-end gap-2">
              {/* Sticky date column (desktop) */}
              <div className="sticky top-[4.75rem] flex w-28 flex-col items-end gap-2 self-start pb-4 max-md:hidden">
                <span className="whitespace-nowrap rounded-sm bg-google-blue px-2 py-0.5 text-sm font-medium text-white">
                  {item.date}
                </span>
              </div>

              {/* Dot + rail */}
              <div className="flex flex-col items-center">
                <div className="sticky top-[4.75rem] flex h-6 w-6 items-center justify-center max-sm:top-5">
                  <span className="flex h-[1.125rem] w-[1.125rem] shrink-0 items-center justify-center rounded-full bg-google-blue/20">
                    <span className="h-3 w-3 rounded-full bg-google-blue" />
                  </span>
                </div>
                <span className="-mt-2.5 w-px flex-1 border-l border-google-blue/30" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-1 pb-11 pl-3 md:pl-6">
                <span className="w-fit whitespace-nowrap rounded-sm bg-google-blue px-2 py-0.5 text-sm font-medium text-white md:hidden">
                  {item.date}
                </span>
                <p className="font-heading text-lg font-bold">{item.title}</p>
                <p className="mt-1 text-white/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold">Code of Conduct</h2>
        <p className="mt-3 text-white/80">
          All our events follow the Google Developer community guidelines. We expect every attendee, speaker, and
          organizer to treat others with respect, and we have a zero-tolerance policy for harassment of any kind.
        </p>
        <a
          href="https://developers.google.com/community-guidelines"
          className="mt-3 inline-block text-sm font-semibold text-google-blue hover:underline"
        >
          Read the full Code of Conduct
        </a>
      </section>

      <section className="mt-16">
        <CTASection
          heading="Want to get involved?"
          description="We're always looking for volunteers to help run events, manage socials, and welcome new members."
          buttonLabel="Volunteer with us"
          buttonHref={VOLUNTEER_FORM_URL}
        />
      </section>
      </div>
    </>
  );
}
