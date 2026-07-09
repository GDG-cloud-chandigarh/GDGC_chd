import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, MapPin, Youtube } from "lucide-react";
import { GlowButton } from "@/components/GlowButton";
import { getEventBySlug, getEvents } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { eventJsonLd } from "@/lib/jsonld";

export function generateStaticParams() {
  return getEvents().map((event) => ({ slug: event.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const event = getEventBySlug(params.slug);
  if (!event) {
    return buildMetadata({ title: "Event not found", description: "This event does not exist.", path: `/events/${params.slug}` });
  }
  return buildMetadata({ title: event.title, description: event.description, path: `/events/${event.slug}` });
}

function formatEventDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug);
  if (!event) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Script
        id="event-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd(event)) }}
      />

      <h1 className="font-heading text-4xl font-bold">{event.title}</h1>
      <p className="mt-3 flex items-center gap-2 text-google-blue">
        <Calendar className="h-5 w-5" /> {formatEventDate(event.date)}
      </p>
      <p className="mt-1 flex items-center gap-2 text-neutral-dark/70">
        <MapPin className="h-5 w-5" /> {event.location} · <span className="capitalize">{event.format}</span>
      </p>

      <p className="mt-6 text-neutral-dark/90">{event.description}</p>

      {!event.isPast && (
        <div className="mt-6">
          <GlowButton href={event.rsvpUrl}>RSVP</GlowButton>
        </div>
      )}

      {event.agenda && event.agenda.length > 0 && (
        <section className="mt-10">
          <h2 className="font-heading text-2xl font-bold">Agenda</h2>
          <ul className="mt-3 space-y-2 text-neutral-dark/80">
            {event.agenda.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {event.speakers && event.speakers.length > 0 && (
        <section className="mt-10">
          <h2 className="font-heading text-2xl font-bold">Speakers</h2>
          <ul className="mt-3 space-y-1 text-neutral-dark/80">
            {event.speakers.map((speaker) => (
              <li key={speaker.name}>
                <span className="font-semibold text-neutral-dark">{speaker.name}</span> — {speaker.title}
              </li>
            ))}
          </ul>
        </section>
      )}

      {event.photoCount && <p className="mt-6 text-sm text-neutral-dark/70">{event.photoCount} photos from this event.</p>}

      {event.youtubeUrl && (
        <a
          href={event.youtubeUrl}
          className="mt-4 flex items-center gap-2 text-sm font-semibold text-google-blue hover:underline"
        >
          <Youtube className="h-5 w-5" /> Watch the recording
        </a>
      )}

      {event.mapEmbedUrl && (
        <section className="mt-10">
          <h2 className="font-heading text-2xl font-bold">Venue</h2>
          <iframe
            src={event.mapEmbedUrl}
            title={`Map for ${event.title}`}
            className="mt-3 h-72 w-full rounded-2xl border border-neutral-light"
            loading="lazy"
          />
        </section>
      )}

      <Link href="/events" className="mt-10 inline-block text-sm font-semibold text-google-blue hover:underline">
        ← Back to all events
      </Link>
    </div>
  );
}
