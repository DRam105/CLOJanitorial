import {
  ShieldCheck,
  BadgeCheck,
  Sparkles,
  Star,
  Users,
  ArrowRight,
  CalendarCheck,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { ButtonLink } from "@/components/shared/button-link";
import { Reveal } from "@/components/shared/reveal";
import { Swoosh } from "@/components/shared/swoosh";
import { site } from "@/lib/site";
import { aggregateRating } from "@/lib/testimonials";

const trustPoints = [
  "Insured & Bonded",
  "Background-Checked Staff",
  "100% Satisfaction Guarantee",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Ambient brand accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(46rem 32rem at 88% -8%, rgba(59,158,255,0.12), transparent 60%), radial-gradient(40rem 30rem at -6% 12%, rgba(30,127,224,0.08), transparent 55%)",
        }}
      />
      <Swoosh
        aria-hidden
        className="pointer-events-none absolute -right-16 top-8 h-72 w-72 opacity-[0.06] lg:opacity-10"
      />

      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand-tint px-4 py-1.5 text-xs font-semibold text-brand">
              <Sparkles className="size-3.5" />
              Commercial Cleaning • {site.region}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.08] text-navy sm:text-5xl lg:text-6xl [text-wrap:balance]">
              A Cleaner Workplace{" "}
              <span className="text-gradient-brand">Starts Here.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
              Reliable, professional, fully-insured janitorial and commercial
              cleaning for offices, medical facilities, schools, retail and more.
              Trained, background-checked crews and a spotless result you can
              count on — every visit.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/quote" size="lg">
                Request a Free Quote
                <ArrowRight />
              </ButtonLink>
              <ButtonLink href="/contact?type=walkthrough" variant="outline" size="lg">
                <CalendarCheck />
                Schedule a Walkthrough
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="inline-flex items-center gap-2 text-sm font-medium text-navy"
                >
                  <BadgeCheck className="size-5 text-brand" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal direction="left" delay={0.1}>
          <div className="relative">
            {/* Main visual panel — replace with a real photo of your crew /
                a spotless modern office. See README "Imagery". */}
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-navy-section shadow-soft-lg">
              <Swoosh className="absolute -left-6 top-6 h-64 w-64 opacity-25" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
                <span className="flex size-16 items-center justify-center rounded-2xl bg-white/10 text-brand-light backdrop-blur">
                  <Sparkles className="size-8" />
                </span>
                <p className="font-heading text-lg font-semibold text-white/90">
                  Spotless, professional facilities
                </p>
                <p className="text-sm text-white/55">
                  [Image placeholder — add a photo of a uniformed crew or a
                  spotless modern office]
                </p>
              </div>
            </div>

            {/* Floating rating card */}
            <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl bg-white p-4 shadow-soft-lg sm:flex">
              <div className="flex size-11 items-center justify-center rounded-xl bg-brand-tint text-brand">
                <Star className="size-6 fill-brand text-brand" />
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-navy">
                  {aggregateRating.value}/5
                </p>
                <p className="text-xs text-slate">
                  {aggregateRating.count}+ client reviews
                </p>
              </div>
            </div>

            {/* Floating trust card */}
            <div className="absolute -right-4 -top-5 hidden items-center gap-3 rounded-2xl bg-white p-4 shadow-soft-lg md:flex">
              <div className="flex size-11 items-center justify-center rounded-xl bg-brand-tint text-brand">
                <ShieldCheck className="size-6" />
              </div>
              <div>
                <p className="font-heading text-sm font-bold text-navy">
                  Insured &amp; Bonded
                </p>
                <p className="text-xs text-slate">Trained, vetted crews</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
