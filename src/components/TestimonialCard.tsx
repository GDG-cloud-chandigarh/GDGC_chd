interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <figure className="rounded-2xl bg-neutral-light p-6">
      <blockquote className="text-neutral-dark/90">&ldquo;{quote}&rdquo;</blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-neutral-dark">
        {name} <span className="font-normal text-neutral-dark/60">— {role}</span>
      </figcaption>
    </figure>
  );
}
