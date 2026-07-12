/**
 * Ambient 2D seagulls that flap (SVG SMIL) and drift across the hero.
 * Pure CSS/SVG — no JS, no deps. Respects prefers-reduced-motion (globals.css).
 */
const BIRDS = [
  { top: "18%", size: 40, duration: 14, delay: 0, opacity: 1 },
  { top: "30%", size: 26, duration: 20, delay: 3, opacity: 0.8 },
  { top: "12%", size: 34, duration: 17, delay: 6, opacity: 0.9 },
  { top: "42%", size: 22, duration: 24, delay: 2, opacity: 0.7 },
  { top: "24%", size: 30, duration: 16, delay: 9, opacity: 0.85 },
  { top: "8%", size: 24, duration: 22, delay: 5, opacity: 0.75 },
  { top: "50%", size: 20, duration: 26, delay: 11, opacity: 0.6 },
  { top: "36%", size: 36, duration: 15, delay: 7, opacity: 0.95 },
];

function Bird({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={(size * 20) / 32}
      viewBox="0 0 32 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M0 10 Q 8 2 16 10 Q 24 2 32 10">
        <animate
          attributeName="d"
          dur="0.45s"
          repeatCount="indefinite"
          values="
            M0 10 Q 8 2 16 10 Q 24 2 32 10;
            M0 10 Q 8 15 16 10 Q 24 15 32 10;
            M0 10 Q 8 2 16 10 Q 24 2 32 10"
        />
      </path>
    </svg>
  );
}

export function HeroBirds() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden text-neutral-dark">
      {BIRDS.map((b, i) => (
        <span
          key={i}
          className="bird absolute left-0"
          style={{
            top: b.top,
            opacity: b.opacity,
            animation: `bird-fly ${b.duration}s linear ${b.delay}s infinite backwards`,
          }}
        >
          <Bird size={b.size} />
        </span>
      ))}
    </div>
  );
}
