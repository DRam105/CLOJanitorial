import type { Metadata } from "next";
import { Target, Heart, Handshake, Sparkles, Users } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { StatCounter } from "@/components/shared/stat-counter";
import { CtaSection } from "@/components/shared/cta-section";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about CLO Janitorial — our story, mission and values, and the team dedicated to keeping Carlsbad and North County San Diego businesses spotless.",
  path: "/about",
});

const values = [
  { icon: Handshake, title: "Reliability", desc: "We show up, do the job right, and communicate — every time." },
  { icon: Sparkles, title: "Excellence", desc: "Detail-oriented work and quality checks that hold a high standard." },
  { icon: Heart, title: "Integrity", desc: "Honest, trustworthy service and vetted, professional staff." },
  { icon: Target, title: "Accountability", desc: "We own our results and make things right when they're not." },
];

const stats = [
  { value: 15, suffix: "+", label: "Years in business" },
  { value: 500, suffix: "+", label: "Buildings serviced" },
  { value: 2, suffix: "M+", label: "Sq. ft. cleaned nightly" },
  { value: 100, suffix: "%", label: "Satisfaction guarantee" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Dedicated to Cleaner, Healthier Workplaces"
        subtitle="CLO Janitorial is a locally-rooted commercial cleaning company built on reliability, professionalism and pride in our work."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      {/* Story */}
      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading align="left" eyebrow="Our Story" title="Built on Trust and Consistency" />
            <div className="mt-5 space-y-4 text-slate">
              <p>
                [Placeholder story] CLO Janitorial was founded on a simple idea:
                businesses deserve a cleaning partner they can truly rely on.
                Too many facility managers were let down by inconsistent vendors,
                unvetted staff, and poor communication — so we set out to do it
                differently.
              </p>
              <p>
                Today we serve offices, medical facilities, schools, retail
                centers and more across {`Carlsbad and North County San Diego`},
                with trained, background-checked crews and a relentless focus on
                quality. Whether it&apos;s a nightly office clean or a specialized
                floor-care project, we treat every facility like our own.
              </p>
              <p>
                [Edit this section with your real founding story, milestones and
                what makes CLO different.]
              </p>
            </div>
          </Reveal>
          <Reveal direction="left">
            <div className="flex aspect-4/3 items-center justify-center rounded-3xl bg-navy-section text-center text-sm text-white/60 shadow-soft-lg">
              [Team / company photo placeholder]
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-navy-section py-14 text-white">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-heading text-4xl font-extrabold text-brand-light">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-white/40">
            [Replace stats with your real numbers.]
          </p>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-offwhite py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Our Values" title="What We Stand For" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-border bg-white p-6 text-center shadow-soft">
                    <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-brand-tint text-brand">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-4 font-heading text-base font-bold text-navy">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Leadership placeholder */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Team"
            title="The People Behind CLO"
            subtitle="[Add your leadership team and key staff here — photos, names, and roles build trust with B2B buyers.]"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="rounded-2xl border border-border bg-offwhite p-6 text-center shadow-soft"
              >
                <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-brand-tint text-brand">
                  <Users className="size-10" />
                </div>
                <p className="mt-4 font-heading font-bold text-navy">
                  [Team Member Name]
                </p>
                <p className="text-sm text-brand">[Title / Role]</p>
                <p className="mt-2 text-sm text-slate">
                  [Short bio placeholder — background and what they bring to CLO.]
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
