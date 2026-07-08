import { SITE_NAME, SITE_URL, SOCIAL_LINKS } from "./constants";
import type { EventDetails } from "./types";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    sameAs: Object.values(SOCIAL_LINKS),
  };
}

export function eventJsonLd(event: EventDetails) {
  const attendanceMode =
    event.format === "virtual"
      ? "https://schema.org/OnlineEventAttendanceMode"
      : event.format === "hybrid"
        ? "https://schema.org/MixedEventAttendanceMode"
        : "https://schema.org/OfflineEventAttendanceMode";

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: event.date,
    endDate: event.endDate ?? event.date,
    eventAttendanceMode: attendanceMode,
    eventStatus: "https://schema.org/EventScheduled",
    location: { "@type": "Place", name: event.location },
    description: event.description,
    organizer: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
}
