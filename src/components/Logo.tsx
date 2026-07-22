import Image from "next/image";

type LogoProps = {
  /** Render light text for use on dark backgrounds (footer, hero). */
  variant?: "dark" | "light";
  /** Hide the "MapleMedic" wordmark and show only the mark. */
  markOnly?: boolean;
  className?: string;
};

/**
 * MapleMedic brand logo.
 *
 * Uses the official MapleMedic artwork (public/maplemed-logo.png) — a white
 * maple leaf with a curved stem and a medical cross — presented inside a
 * subtle dark "badge" so it reads cleanly on both light and dark surfaces.
 * Paired with the "MapleMedic" wordmark.
 */
export default function Logo({
  variant = "dark",
  markOnly = false,
  className = "",
}: LogoProps) {
  const wordPrimary = variant === "light" ? "#ffffff" : "#0a1428";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoBadge />
      {!markOnly && (
        <span className="text-xl font-bold tracking-tight">
          <span className="text-maple-700">Maple</span>
          <span style={{ color: wordPrimary }}>Medic</span>
        </span>
      )}
    </span>
  );
}

/** The official MapleMedic mark inside a dark rounded badge. */
function LogoBadge() {
  return (
    <span className="relative inline-flex h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-navy-950 ring-1 ring-white/10 sm:h-14 sm:w-14">
      <Image
        src="/maplemed-logo.png"
        alt="MapleMedic logo"
        fill
        sizes="(min-width: 640px) 56px, 48px"
        priority
        className="object-cover object-center"
      />
    </span>
  );
}

/**
 * Standalone maple-leaf + curved-stem + medical-cross mark as an inline SVG.
 * Used for subtle, transparent background flourishes (the official PNG has a
 * solid background and can't be used as a watermark). Fills with currentColor.
 */
export function MapleMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 58"
      role="img"
      aria-label="MapleMedic logo"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 7.5l1.9 4.3 4.1-2-1.2 4.4 4.6.2-3 3.4 4.2 2.4-4.6 1.1 2.4 4-4.4-1.1 0.3 4.6-3-3.2-3 3.2 0.3-4.6-4.4 1.1 2.4-4-4.6-1.1 4.2-2.4-3-3.4 4.6-.2-1.2-4.4 4.1 2z" />
      <path d="M23 36c.2 7 2.5 12.6 9.5 15.9-5-2.3-7.5-6.9-7.3-14.9z" />
      <rect x="37.3" y="41.8" width="3.6" height="9" rx="1.6" />
      <rect x="34.6" y="44.5" width="9" height="3.6" rx="1.6" />
    </svg>
  );
}
