"use client";

import { useState } from "react";
import { EventCard } from "@/components/EventCard";
import type { EventDetails } from "@/lib/types";

const FORMATS = ["all", "in-person", "virtual", "hybrid"] as const;

export function PastEventsFilter({ events }: { events: EventDetails[] }) {
  const [format, setFormat] = useState<(typeof FORMATS)[number]>("all");
  const filtered = format === "all" ? events : events.filter((event) => event.format === format);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter past events by format">
        {FORMATS.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setFormat(value)}
            aria-pressed={format === value}
            className={`rounded-full px-4 py-1.5 text-sm font-medium capitalize ${
              format === value ? "bg-google-blue text-white" : "bg-neutral-light text-neutral-dark"
            }`}
          >
            {value === "all" ? "All" : value}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </div>
    </div>
  );
}
