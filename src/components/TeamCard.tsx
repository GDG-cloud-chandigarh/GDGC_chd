import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";
import type { TeamMember } from "@/lib/types";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="rounded-2xl border border-neutral-light bg-white p-5 text-center shadow-sm">
      <Image src={member.photo} alt="" width={96} height={96} unoptimized className="mx-auto h-24 w-24 rounded-full object-cover" />
      <p className="mt-3 font-heading text-lg font-bold">{member.name}</p>
      {member.role && <p className="text-sm text-neutral-dark/70">{member.role}</p>}
      <div className="mt-2 flex justify-center gap-3">
        {member.linkedin && (
          <a href={member.linkedin} aria-label={`${member.name} on LinkedIn`} className="text-neutral-dark hover:text-google-blue">
            <Linkedin className="h-4 w-4" />
          </a>
        )}
        {member.twitter && (
          <a href={member.twitter} aria-label={`${member.name} on X`} className="text-neutral-dark hover:text-google-blue">
            <Twitter className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}
