import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { GlowButton } from "@/components/GlowButton";
import type { EventDetails } from "@/lib/types";

function formatEventDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export function EventCard({ event }: { event: EventDetails }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-light bg-white shadow-sm">
      <Image
        src="/images/event-placeholder.svg"
        alt=""
        width={400}
        height={225}
        unoptimized
        className="h-40 w-full object-cover"
      />
      <div className="p-5">
        <p className="flex items-center gap-1 text-xs font-medium text-google-blue">
          <Calendar className="h-4 w-4" /> {formatEventDate(event.date)}
        </p>
        <h3 className="mt-2 font-heading text-lg font-bold">
          <Link href={`/events/${event.slug}`} className="hover:text-google-blue">
            {event.title}
          </Link>
        </h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-neutral-dark/70">
          <MapPin className="h-4 w-4" /> {event.location}
        </p>
        <p className="mt-2 line-clamp-2 text-sm text-neutral-dark/80">{event.description}</p>
        <div className="mt-4 flex gap-3">
          <Link href={`/events/${event.slug}`} className="text-sm font-semibold text-google-blue hover:underline">
            Details
          </Link>
          {!event.isPast && <GlowButton href={event.rsvpUrl} size="sm">RSVP</GlowButton>}
        </div>
      </div>
    </div>
  );
}
