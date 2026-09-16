import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getIcon } from "@/components/shared/icon";
import type { Service } from "@/lib/services";

/** Icon card linking to a service page. Hover lift + blue accent. */
export function ServiceCard({ service }: { service: Service }) {
  const Icon = getIcon(service.icon);
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col rounded-2xl border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft-lg"
    >
      <span className="flex size-12 items-center justify-center rounded-xl bg-brand-tint text-brand transition-colors duration-300 group-hover:bg-brand-gradient group-hover:text-white">
        <Icon className="size-6" />
      </span>
      <h3 className="mt-5 font-heading text-lg font-bold text-navy">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
        {service.short}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all group-hover:gap-2.5">
        Learn more
        <ArrowRight className="size-4" />
      </span>
    </Link>
  );
}
