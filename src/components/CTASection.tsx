import { GlowButton } from "@/components/GlowButton";

interface CTASectionProps {
  heading: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

export function CTASection({ heading, description, buttonLabel, buttonHref }: CTASectionProps) {
  return (
    <section className="rounded-2xl border border-neutral-light bg-neutral-light px-6 py-12 text-center">
      <h2 className="font-heading text-2xl font-bold text-neutral-dark">{heading}</h2>
      <p className="mx-auto mt-2 max-w-xl text-neutral-dark/80">{description}</p>
      <div className="mt-6 flex justify-center">
        <GlowButton href={buttonHref}>{buttonLabel}</GlowButton>
      </div>
    </section>
  );
}
