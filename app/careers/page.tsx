import type { Metadata } from "next";
import { MapPin, Clock, Briefcase, TrendingUp, HeartHandshake, CalendarClock, DollarSign } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { CareersForm } from "@/components/forms/careers-form";
import { buildMetadata } from "@/lib/metadata";
import { jobs } from "@/lib/jobs";

export const metadata: Metadata = buildMetadata({
  title: "Careers — We're Hiring",
  description:
    "Join the CLO Janitorial team. We're hiring dependable, detail-oriented commercial cleaners, floor-care techs, day porters and crew leads across North County San Diego.",
  path: "/careers",
});

const benefits = [
  { icon: CalendarClock, title: "Flexible Schedules", desc: "Full-time, part-time and evening/weekend shifts to fit your life." },
  { icon: TrendingUp, title: "Room to Grow", desc: "We promote from within — grow into crew lead and supervisor roles." },
  { icon: HeartHandshake, title: "Supportive Team", desc: "A respectful, team-first culture where your work is valued." },
  { icon: DollarSign, title: "Competitive Pay", desc: "[Add pay range / benefits details here.]" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join the CLO Janitorial Team"
        subtitle="We're always looking for dependable, detail-oriented people who take pride in their work. If that's you, we'd love to hear from you."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Careers", path: "/careers" },
        ]}
      />

      {/* Benefits */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Why Work Here" title="A Team Worth Joining" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-border bg-offwhite p-6 shadow-soft">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-brand-tint text-brand">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-4 font-heading text-base font-bold text-navy">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate">{b.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Openings */}
      <section className="bg-offwhite py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Open Positions"
            title="Current Openings"
            subtitle="[Placeholder listings — replace with your real open positions.]"
          />
          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {jobs.map((job, i) => (
              <Reveal key={job.id} delay={i * 0.04}>
                <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-navy">
                        {job.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate">
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase className="size-3.5 text-brand" />
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-3.5 text-brand" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="size-3.5 text-brand" />
                          {job.shift}
                        </span>
                      </div>
                    </div>
                    <a
                      href="#apply"
                      className="inline-flex h-10 items-center rounded-full bg-brand-gradient px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                    >
                      Apply
                    </a>
                  </div>
                  <p className="mt-3 text-sm text-slate">{job.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Application form */}
      <section id="apply" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Apply Now"
            title="Submit Your Application"
            subtitle="Tell us a bit about yourself and we'll be in touch if there's a fit."
          />
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-offwhite p-6 shadow-soft sm:p-8">
            <CareersForm />
          </div>
        </Container>
      </section>
    </>
  );
}
