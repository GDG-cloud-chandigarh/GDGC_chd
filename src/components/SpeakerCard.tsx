"use client";

import { useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { Speaker } from "@/lib/types";

export function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="w-full rounded-2xl border border-neutral-light bg-white p-5 text-left shadow-sm hover:shadow-md"
      >
        <Image src={speaker.photo} alt="" width={80} height={80} className="h-20 w-20 rounded-full object-cover" />
        <p className="mt-3 font-heading text-lg font-bold">{speaker.name}</p>
        <p className="text-sm text-neutral-dark/70">
          {speaker.title}, {speaker.company}
        </p>
        <p className="mt-2 text-sm text-google-blue">{speaker.topic}</p>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={`speaker-${speaker.slug}-name`}
        className="w-full max-w-lg rounded-2xl p-6 backdrop:bg-neutral-dark/50"
      >
        <div className="flex items-start justify-between">
          <Image src={speaker.photo} alt="" width={80} height={80} className="h-20 w-20 rounded-full object-cover" />
          <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>
        <p id={`speaker-${speaker.slug}-name`} className="mt-4 font-heading text-xl font-bold">
          {speaker.name}
        </p>
        <p className="text-sm text-neutral-dark/70">
          {speaker.title}, {speaker.company}
        </p>
        <p className="mt-3 font-semibold text-google-blue">{speaker.topic}</p>
        <p className="mt-3 text-neutral-dark/80">{speaker.bio}</p>
        {speaker.links && (
          <div className="mt-4 flex gap-4 text-sm font-semibold text-google-blue">
            {speaker.links.linkedin && <a href={speaker.links.linkedin}>LinkedIn</a>}
            {speaker.links.twitter && <a href={speaker.links.twitter}>X (Twitter)</a>}
          </div>
        )}
      </dialog>
    </>
  );
}
