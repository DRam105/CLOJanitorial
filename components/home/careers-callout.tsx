import { Briefcase, Clock, TrendingUp, HeartHandshake } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { Swoosh } from "@/components/shared/swoosh";

const perks = [
  { icon: Clock, label: "Flexible schedules" },
  { icon: TrendingUp, label: "Room to grow" },
  { icon: HeartHandshake, label: "Supportive team" },
];

export function CareersCallout() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-6 py-12 text-white shadow-soft-lg sm:px-12">
            <Swoosh className="pointer-events-none absolute -right-8 -top-8 h-64 w-64 opacity-20" />
            <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">
              <div className="max-w-xl text-center lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold">
                  <Briefcase className="size-3.5" />
                  Now Hiring
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">
                  Join the CLO Team
                </h2>
                <p className="mt-3 text-white/85">
                  We&apos;re growing and always looking for dependable,
                  detail-oriented people who take pride in their work. Great
                  team, flexible hours, and room to advance.
                </p>
                <ul className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 lg:justify-start">
                  {perks.map((p) => {
                    const Icon = p.icon;
                    return (
                      <li
                        key={p.label}
                        className="inline-flex items-center gap-2 text-sm font-medium"
                      >
                        <Icon className="size-4" />
                        {p.label}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <ButtonLink href="/careers" variant="white" size="lg">
                View Open Positions
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
