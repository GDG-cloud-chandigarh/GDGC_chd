import { Tiles } from "@/components/ui/tiles";

/**
 * Fixed, full-viewport grid backdrop rendered behind all page content.
 * It stays pinned to the viewport (position: fixed) so it does not grow
 * with page height, keeping the tile count bounded for performance.
 */
export function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white"
    >
      <div className="pointer-events-auto absolute inset-0">
        <Tiles rows={40} cols={24} tileSize="md" />
      </div>
    </div>
  );
}
