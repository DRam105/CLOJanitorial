import type { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { CtaSection } from "@/components/shared/cta-section";
import { buildMetadata } from "@/lib/metadata";
import { testimonials, aggregateRating } from "@/lib/testimonials";

export const metadata: Metadata = buildMetadata({
  title: "Reviews & Testimonials",
  description:
    "Read what facility and office managers say about CLO Janitorial's commercial cleaning services. Trusted by businesses across North County San Diego.",
  path: "/reviews",
});

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < rating
              ? "size-4 fill-amber-400 text-amber-400"
              : "size-4 text-slate/30"
          }
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What Our Clients Say"
        subtitle="We measure our success by the trust of the businesses we serve. Here's what facility and office managers say about working with CLO."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ]}
      />

      {/* Aggregate */}
      <section className="bg-white py-12">
        <Container>
          <div className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-2xl border border-border bg-offwhite p-8 text-center shadow-soft">
            <p className="font-heading text-5xl font-extrabold text-navy">
              {aggregateRating.value}
            </p>
            <Stars rating={5} />
            <p className="text-sm text-slate">
              Based on {aggregateRating.count}+ verified client reviews
            </p>
            {/* TODO: embed a live Google Reviews widget here */}
            <p className="mt-2 rounded-lg border border-dashed border-input px-4 py-2 text-xs text-slate">
              [Google Reviews widget placeholder — embed your live rating here]
            </p>
          </div>
        </Container>
      </section>

      {/* Wall */}
      <section className="bg-offwhite py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.05}>
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-soft">
                  <Quote className="size-8 text-brand/25" />
                  <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-navy/90">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4">
                    <Stars rating={t.rating} />
                    <p className="mt-2 font-heading text-sm font-bold text-navy">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate">
                      {t.role}, {t.company}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Join Our Satisfied Clients"
        subtitle="Experience the reliable, professional service our clients rave about. Request your free quote today."
      />
    </>
  );
}
