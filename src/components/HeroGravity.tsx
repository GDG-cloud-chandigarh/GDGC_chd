"use client";

import { useEffect, useState } from "react";
import { Gravity, MatterBody } from "@/components/ui/gravity";

const HERO_TAGS = [
  { label: "Cloud Run", bg: "bg-google-blue", text: "text-neutral-dark" },
  { label: "BigQuery", bg: "bg-google-green", text: "text-neutral-dark" },
  { label: "Vertex AI", bg: "bg-google-red", text: "text-neutral-dark" },
  { label: "GKE", bg: "bg-white", text: "text-neutral-dark" },
  { label: "Firebase", bg: "bg-google-yellow", text: "text-neutral-dark" },
  { label: "DevFest", bg: "bg-google-blue", text: "text-neutral-dark" },
  { label: "Study Jams", bg: "bg-google-green", text: "text-neutral-dark" },
  { label: "Community", bg: "bg-google-red", text: "text-neutral-dark" },
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
            className={`rounded-full border-2 border-neutral-dark ${tag.bg} ${tag.text} px-5 py-3 text-sm font-bold sm:px-10 sm:py-6 sm:text-2xl md:px-16 md:py-8 md:text-3xl lg:px-16 lg:py-8 2xl:px-20 2xl:py-10 lg:text-4xl`}
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
                className={`rounded-full border-2 border-neutral-dark ${tag.bg} ${tag.text} px-6 py-4 text-sm font-bold shadow-md sm:px-10 sm:py-6 sm:text-2xl md:px-16 md:py-8 md:text-3xl lg:px-16 lg:py-8 2xl:px-20 2xl:py-10 lg:text-4xl`}
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
