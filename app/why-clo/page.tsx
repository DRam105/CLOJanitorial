import type { Metadata } from "next";
import {
  ShieldCheck,
  Users,
  Award,
  Search,
  HeartHandshake,
  Leaf,
  BadgeCheck,
  ClipboardCheck,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { CtaSection } from "@/components/shared/cta-section";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Why Choose CLO Janitorial",
  description:
    "Insured & bonded, background-checked and trained staff, quality-assurance inspections, a satisfaction guarantee, and eco-friendly practices — see why facility managers trust CLO.",
  path: "/why-clo",
});

const pillars = [
  {
    icon: ShieldCheck,
    title: "Fully Insured & Bonded",
    desc: "We carry comprehensive liability insurance and bonding so your business and property are protected. [Add license/insurance details.]",
  },
  {
    icon: Users,
    title: "Background-Checked & Trained Staff",
    desc: "Every team member is screened, trained on proper procedures and products, and uniformed — professionals you can trust in your space.",
  },
  {
    icon: ClipboardCheck,
    title: "Customized Cleaning Plans",
    desc: "We build a scope and schedule around your facility, not a generic template — and adjust as your needs change.",
  },
  {
    icon: Search,
    title: "Quality-Assurance Inspections",
    desc: "Routine inspections, checklists and open communication keep every visit consistent and up to standard.",
  },
  {
    icon: HeartHandshake,
    title: "100% Satisfaction Guarantee",
    desc: "If something isn't right, we make it right — fast. We stand behind our work with a satisfaction guarantee.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Practices",
    desc: "Green, low-toxicity product options and efficient methods that protect indoor air quality and the environment.",
  },
];

const certs = [
  { label: "CIMS / ISSA", note: "[Certification placeholder]" },
  { label: "OSHA Compliant", note: "[Verify credentials]" },
  { label: "Green Seal", note: "[Eco certification placeholder]" },
  { label: "Insured & Bonded", note: "Full coverage" },
];

const qaSteps = [
  { title: "Detailed checklists", desc: "Every account has a documented scope so nothing gets missed." },
  { title: "Routine inspections", desc: "Supervisors inspect work and log results for accountability." },
  { title: "Open communication", desc: "A single point of contact and fast response to any request." },
  { title: "Continuous improvement", desc: "We act on feedback to keep raising the standard." },
];

export default function WhyCloPage() {
  return (
    <>
      <PageHero
        eyebrow="Why CLO"
        title="A Cleaning Partner You Can Trust"
        subtitle="Facility managers choose CLO Janitorial for the things that matter most — reliability, professionalism, accountability, and peace of mind."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Why CLO", path: "/why-clo" },
        ]}
      />

      {/* Pillars */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={(i % 3) * 0.05}>
                  <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-soft">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-brand-tint text-brand">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-bold text-navy">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {p.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="bg-offwhite py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Certifications & Standards"
            title="Held to a Higher Standard"
            subtitle="We follow industry best practices and hold (or are pursuing) recognized certifications. Replace these placeholders with your verified credentials."
          />
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {certs.map((c) => (
              <Reveal key={c.label}>
                <div className="flex flex-col items-center rounded-2xl border border-border bg-white p-5 text-center shadow-soft">
                  <Award className="size-9 text-brand" />
                  <p className="mt-3 font-heading text-sm font-bold text-navy">
                    {c.label}
                  </p>
                  <p className="text-[11px] text-slate">{c.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* QA process */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Quality Assurance"
            title="How We Keep Standards Consistent"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qaSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-offwhite p-6 shadow-soft">
                  <BadgeCheck className="size-8 text-brand" />
                  <h3 className="mt-3 font-heading text-base font-bold text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
