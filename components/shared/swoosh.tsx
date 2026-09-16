import { cn } from "@/lib/utils";

/**
 * Swoosh / wing motif echoing the CLO logo. Used as a recurring decorative
 * accent (hero background, section dividers, badges). Purely decorative, so
 * it's aria-hidden.
 */
export function Swoosh({
  className,
  gradientId = "clo-swoosh",
}: {
  className?: string;
  gradientId?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      aria-hidden="true"
      className={cn("select-none", className)}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand)" />
          <stop offset="100%" stopColor="var(--brand-light)" />
        </linearGradient>
      </defs>
      {/* Upper feather */}
      <path
        d="M96 6C74 34 55 58 40 96c22-10 44-26 63-54 6-9 4-25-7-36Z"
        fill={`url(#${gradientId})`}
      />
      {/* Lower sweeping wing */}
      <path
        d="M182 40C120 44 60 74 20 150c62-6 132-30 168-84 7-11 4-24-6-26Z"
        fill={`url(#${gradientId})`}
        opacity="0.92"
      />
    </svg>
  );
}

/**
 * A wide, subtle wave divider using the brand gradient — drop between sections
 * for a soft transition. Set `flip` to mirror it vertically.
 */
export function WaveDivider({
  className,
  flip = false,
  color = "var(--offwhite)",
}: {
  className?: string;
  flip?: boolean;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("block h-10 w-full", flip && "rotate-180", className)}
    >
      <path
        d="M0 40C240 8 480 8 720 32s480 48 720 8v48H0Z"
        fill={color}
      />
    </svg>
  );
}
