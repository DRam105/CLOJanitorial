import { ShieldCheck, Award, ThumbsUp, Building2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { StatCounter } from "@/components/shared/stat-counter";

/**
 * Slim trust strip: stats (animated counters) + reassurance badges.
 * NOTE: stats are placeholders — update with real numbers.
 */
const stats = [
  { value: 15, suffix: "+", label: "Years in Business", icon: Award },
  { value: 500, suffix: "+", label: "Buildings Serviced", icon: Building2 },
  { value: 100, suffix: "%", label: "Satisfaction Guarantee", icon: ThumbsUp },
  { value: 100, suffix: "%", label: "Insured & Bonded", icon: ShieldCheck },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-white">
      <Container className="grid grid-cols-2 gap-6 py-8 lg:grid-cols-4 lg:py-10">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="flex items-center gap-3 lg:justify-center"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand">
                <Icon className="size-6" />
              </span>
              <div>
                <p className="font-heading text-2xl font-extrabold text-navy">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs font-medium text-slate">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
