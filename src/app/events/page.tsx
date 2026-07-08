import type { Metadata } from "next";
import { EventCard } from "@/components/EventCard";
import { PastEventsFilter } from "@/components/PastEventsFilter";
import { buildMetadata } from "@/lib/seo";
import { getUpcomingEvents, getPastEvents } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Events",
  description: "Upcoming and past GDG Cloud Chandigarh meetups, study jams, and DevFest.",
  path: "/events",
});

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-heading text-4xl font-bold">Events</h1>

      <section className="mt-8">
        <h2 className="font-heading text-2xl font-bold">Upcoming</h2>
        {upcomingEvents.length > 0 ? (
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-neutral-dark/70">No upcoming events scheduled right now — check back soon.</p>
        )}
      </section>

      <section className="mt-16">
        <h2 className="font-heading text-2xl font-bold">Past events</h2>
        <div className="mt-4">
          <PastEventsFilter events={pastEvents} />
        </div>
      </section>
    </div>
  );
}
