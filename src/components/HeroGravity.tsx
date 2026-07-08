"use client";

import { useEffect, useState } from "react";
import { Gravity, MatterBody } from "@/components/ui/gravity";

const HERO_TAGS = [
  { label: "Cloud Run", bg: "bg-google-blue", text: "text-white" },
  { label: "BigQuery", bg: "bg-google-green", text: "text-white" },
  { label: "Vertex AI", bg: "bg-google-red", text: "text-white" },
  { label: "GKE", bg: "bg-neutral-dark", text: "text-white" },
  { label: "Firebase", bg: "bg-google-yellow", text: "text-neutral-dark" },
  { label: "DevFest", bg: "bg-google-blue", text: "text-white" },
  { label: "Study Jams", bg: "bg-google-green", text: "text-white" },
  { label: "Community", bg: "bg-google-red", text: "text-white" },
];

export function HeroGravity() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
  }, []);

  if (reducedMotion) {
    return (
      <div className="absolute inset-0 flex flex-wrap content-center justify-center gap-4 p-8">
        {HERO_TAGS.map((tag) => (
          <span
            key={tag.label}
            className={`rounded-full ${tag.bg} ${tag.text} px-8 py-4 text-lg font-semibold sm:text-xl md:text-2xl`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    );
  }

  return (
    <>
      <ul className="sr-only">
        {HERO_TAGS.map((tag) => (
          <li key={tag.label}>{tag.label}</li>
        ))}
      </ul>
      <div className="absolute inset-0" aria-hidden="true">
        <Gravity gravity={{ x: 0, y: 1 }} className="h-full w-full">
          {HERO_TAGS.map((tag, i) => (
            <MatterBody
              key={tag.label}
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              x={`${10 + ((i * 11) % 80)}%`}
              y={`${5 + (i % 3) * 8}%`}
            >
              <div
                className={`rounded-full ${tag.bg} ${tag.text} px-8 py-4 text-lg font-semibold shadow-md sm:text-xl md:text-2xl`}
              >
                {tag.label}
              </div>
            </MatterBody>
          ))}
        </Gravity>
      </div>
    </>
  );
}
