import Image from "next/image";
import { cn } from "@/lib/utils";
import { SITE_NAME } from "@/lib/constants";

export function Lockup({ className }: { className?: string }) {
  return (
    <Image
      src="/images/gdgcchd_logo.png"
      alt={SITE_NAME}
      width={1906}
      height={401}
      priority
      className={cn("h-10 w-auto", className)}
    />
  );
}
