import Link from "next/link";

interface CTASectionProps {
  heading: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

export function CTASection({ heading, description, buttonLabel, buttonHref }: CTASectionProps) {
  return (
    <section className="rounded-2xl bg-google-blue px-6 py-12 text-center text-white">
      <h2 className="font-heading text-2xl font-bold">{heading}</h2>
      <p className="mx-auto mt-2 max-w-xl text-white/90">{description}</p>
      <Link
        href={buttonHref}
        className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-google-blue hover:bg-neutral-light"
      >
        {buttonLabel}
      </Link>
    </section>
  );
}
