import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * CLO Janitorial logo — a crisp, scalable SVG rendition of the brand mark
 * (blue swoosh + "CLO" wordmark + "JANITORIAL"). Scales perfectly and adapts
 * to light and dark backgrounds.
 *
 * The client's raw artwork lives at /public/logo.jpg (used for Open Graph /
 * JSON-LD). To use a supplied file instead, replace the SVG below with a
 * <next/image> pointing at your transparent PNG/SVG. A white/knockout variant
 * is provided via the `variant="white"` prop for the navy footer/dark sections.
 */
export function Logo({
  variant = "default",
  className,
  href = "/",
}: {
  variant?: "default" | "white";
  className?: string;
  href?: string | null;
}) {
  const isWhite = variant === "white";
  const clo = isWhite ? "#ffffff" : "var(--navy)";

  const mark = (
    <span className={cn("flex items-center gap-2.5", className)}>
      {/* Swoosh / wing mark */}
      <svg
        viewBox="0 0 64 56"
        className="h-9 w-auto shrink-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="clo-logo-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--brand)" />
            <stop offset="100%" stopColor="var(--brand-light)" />
          </linearGradient>
        </defs>
        <path
          d="M34 2C22 12 15 24 10 42c9-4 18-11 25-24 3-6 2-13-1-16Z"
          fill="url(#clo-logo-grad)"
        />
        <path
          d="M60 16C36 17 15 28 2 54c24-3 50-12 62-30 2-4 0-8-4-8Z"
          fill="url(#clo-logo-grad)"
          opacity="0.9"
        />
      </svg>
      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span
          className="font-heading text-[1.35rem] font-extrabold tracking-tight"
          style={{ color: clo }}
        >
          CLO
        </span>
        <span className="font-heading text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-brand">
          Janitorial
        </span>
      </span>
    </span>
  );

  if (href === null) return mark;

  return (
    <Link href={href} aria-label="CLO Janitorial — home" className="inline-flex">
      {mark}
    </Link>
  );
}
