import {
  ShieldCheck,
  Users,
  ClipboardList,
  Moon,
  Leaf,
  Search,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Swoosh } from "@/components/shared/swoosh";

const props = [
  {
    icon: ShieldCheck,
    title: "Fully Insured & Bonded",
    desc: "Complete coverage and vetting protect your business, your property and your peace of mind.",
  },
  {
    icon: Users,
    title: "Trained & Background-Checked Staff",
    desc: "Every crew member is screened, trained and uniformed — professionals you can trust in your space.",
  },
  {
    icon: ClipboardList,
    title: "Customized Cleaning Plans",
    desc: "No cookie-cutter contracts. We build a scope and schedule around your facility and budget.",
  },
  {
    icon: Moon,
    title: "Reliable After-Hours Service",
    desc: "Nights, weekends or day porters — we clean on your schedule so operations are never disrupted.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    desc: "Green, low-toxicity options that protect indoor air quality and the people in your building.",
  },
  {
    icon: Search,
    title: "Quality-Assurance Inspections",
    desc: "Routine inspections and open communication keep every visit consistent — no slipping standards.",
  },
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-navy-section py-16 text-white sm:py-20 lg:py-24">
      <Swoosh className="pointer-events-none absolute -right-10 -top-10 h-80 w-80 opacity-10" />
      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Why CLO"
          title="A Cleaning Partner You Can Actually Rely On"
          subtitle="Facility managers choose CLO for consistency, professionalism and accountability — the things that matter when you're trusting someone with your building."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {props.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={(i % 3) * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.07]">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
