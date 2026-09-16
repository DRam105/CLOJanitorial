import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";

/** Consistent eyebrow + title + optional subtitle block for section headers. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block text-sm font-semibold uppercase tracking-wider",
            light ? "text-brand-light" : "text-brand",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-2 font-heading text-3xl font-bold tracking-tight sm:text-4xl",
          light ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-white/70" : "text-slate",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
