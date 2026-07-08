import Image from "next/image";
import type { Sponsor } from "@/lib/types";

export function SponsorLogo({ sponsor }: { sponsor: Sponsor }) {
  return (
    <a
      href={sponsor.url}
      className="flex items-center justify-center rounded-xl border border-neutral-light bg-white p-4 grayscale transition hover:grayscale-0"
    >
      <Image src={sponsor.logo} alt={`${sponsor.name} logo`} width={160} height={80} unoptimized />
    </a>
  );
}
