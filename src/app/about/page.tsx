import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";
import { VOLUNTEER_FORM_URL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "What GDG Cloud Chandigarh is, our history, and our Code of Conduct.",
  path: "/about",
});

const TIMELINE = [
  { year: "2017", title: "Chapter founded", description: "GDG Cloud Chandigarh started as a handful of engineers meeting monthly to talk about GCP." },
  { year: "2019", title: "First Cloud Community Day", description: "Our first full-day community conference, run entirely by volunteer organizers." },
  { year: "2021", title: "I/O Extended goes hybrid", description: "We started running I/O Extended watch parties for both in-person and remote attendees." },
  { year: "2023", title: "First DevFest Chandigarh", description: "Our flagship annual event launched with 4 tracks and over 200 attendees." },
  { year: "2025", title: "300+ at DevFest", description: "DevFest Chandigarh 2025 drew over 300 attendees and 12 speakers across Cloud, AI, Web, and Android." },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="font-heading text-4xl font-bold">About GDG Cloud Chandigarh</h1>

      <section className="mt-8">
        <h2 className="font-heading text-2xl font-bold">Our mission</h2>
        <p className="mt-3 text-neutral-dark/80">
          Google Developer Groups (GDGs) are local, volunteer-run communities of developers interested in Google&apos;s
          developer technologies. GDG Cloud is a specialized GDG chapter type focused specifically on Google Cloud
          Platform — architecture, data, AI/ML, and infrastructure. GDG Cloud Chandigarh exists to give cloud
          developers and architects in the tricity area a place to learn from each other, share production experience,
          and build things together.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold">Our history</h2>
        <ol className="mt-6 space-y-6 border-l-2 border-google-blue/30 pl-6">
          {TIMELINE.map((item) => (
            <li key={item.year}>
              <p className="text-sm font-semibold text-google-blue">{item.year}</p>
              <p className="font-heading text-lg font-bold">{item.title}</p>
              <p className="mt-1 text-neutral-dark/80">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-heading text-2xl font-bold">Code of Conduct</h2>
        <p className="mt-3 text-neutral-dark/80">
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
  );
}
