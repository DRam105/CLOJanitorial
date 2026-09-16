import { Search, ClipboardCheck, Sparkles, BadgeCheck } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const steps = [
  {
    icon: Search,
    title: "Free On-Site Walkthrough",
    desc: "We tour your facility to understand its size, layout, traffic and priorities — no pressure, no cost.",
  },
  {
    icon: ClipboardCheck,
    title: "Custom Cleaning Plan & Quote",
    desc: "You receive a tailored scope, schedule and transparent quote built around your needs and budget.",
  },
  {
    icon: Sparkles,
    title: "Professional Recurring Service",
    desc: "Trained, background-checked crews clean on your schedule — days, nights or after-hours.",
  },
  {
    icon: BadgeCheck,
    title: "Ongoing Quality Checks",
    desc: "Routine inspections and easy communication keep every visit consistent and up to standard.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-offwhite py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Getting Started Is Simple"
          subtitle="Four easy steps from first call to a spotless, worry-free facility."
        />

        <div className="relative mt-14">
          {/* Connecting line (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent lg:block"
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={i * 0.08}>
                  <li className="relative flex flex-col items-center text-center">
                    <div className="relative flex size-16 items-center justify-center rounded-2xl bg-white shadow-soft ring-1 ring-border">
                      <Icon className="size-7 text-brand" />
                      <span className="absolute -right-2 -top-2 flex size-7 items-center justify-center rounded-full bg-brand-gradient font-heading text-sm font-bold text-white shadow-soft">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 font-heading text-base font-bold text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {step.desc}
                    </p>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
