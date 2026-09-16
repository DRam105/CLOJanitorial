import { Star, Quote } from "lucide-react";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { testimonials, aggregateRating } from "@/lib/testimonials";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < rating ? "size-4 fill-amber-400 text-amber-400" : "size-4 text-slate/30"
          }
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-offwhite py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Client Testimonials"
          title="Trusted by Businesses Across the Region"
          subtitle="Don't just take our word for it — here's what facility and office managers say about working with CLO Janitorial."
        />

        <Reveal className="mt-8 flex items-center justify-center gap-3">
          <span className="font-heading text-3xl font-extrabold text-navy">
            {aggregateRating.value}
          </span>
          <div>
            <Stars rating={5} />
            <p className="text-xs text-slate">
              Based on {aggregateRating.count}+ reviews
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((t, i) => (
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

        <div className="mt-10 text-center">
          <ButtonLink href="/reviews" variant="outline">
            Read More Reviews
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
