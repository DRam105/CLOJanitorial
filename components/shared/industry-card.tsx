import Link from "next/link";
import { getIcon } from "@/components/shared/icon";
import type { Industry } from "@/lib/industries";

/** Compact industry tile linking to an industry page. */
export function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = getIcon(industry.icon);
  return (
    <Link
      href={`/industries/${industry.slug}`}
      className="group flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3.5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-soft-lg"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
        <Icon className="size-5" />
      </span>
      <span className="font-heading text-sm font-semibold text-navy">
        {industry.title}
      </span>
    </Link>
  );
}
