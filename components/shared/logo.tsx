import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * CLO Janitorial logo.
 *
 * - `variant="default"` (light backgrounds): the client's real transparent PNG
 *   at /public/logo.png.
 * - `variant="white"` (navy/dark backgrounds): a crisp white SVG rendition,
 *   since the supplied artwork has dark text. Drop a white PNG in /public and
 *   swap the white branch below if you have one.
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
  const mark =
    variant === "white" ? (
      <WhiteMark className={className} />
    ) : (
      <Image
        src="/logo.png"
        alt="CLO Janitorial"
        width={646}
        height={286}
        priority
        className={cn("h-10 w-auto", className)}
      />
    );

  if (href === null) return mark;

  return (
    <Link href={href} aria-label="CLO Janitorial — home" className="inline-flex">
      {mark}
    </Link>
  );
}

/** White SVG rendition for dark backgrounds (footer, dark sections). */
function WhiteMark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 64 56" className="h-9 w-auto shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id="clo-logo-grad-w" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--brand-light)" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <path
          d="M34 2C22 12 15 24 10 42c9-4 18-11 25-24 3-6 2-13-1-16Z"
          fill="url(#clo-logo-grad-w)"
        />
        <path
          d="M60 16C36 17 15 28 2 54c24-3 50-12 62-30 2-4 0-8-4-8Z"
          fill="url(#clo-logo-grad-w)"
          opacity="0.9"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-[1.35rem] font-extrabold tracking-tight text-white">
          CLO
        </span>
        <span className="font-heading text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-brand-light">
          Janitorial
        </span>
      </span>
    </span>
  );
}
