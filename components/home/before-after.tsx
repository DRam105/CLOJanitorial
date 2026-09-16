import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const results = [
  { label: "Office Floor Restoration", area: "Corporate HQ" },
  { label: "Restroom Deep Clean", area: "Retail Center" },
  { label: "Carpet Extraction", area: "Medical Office" },
];

export function BeforeAfter() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="The CLO Difference"
          title="Results You Can See"
          subtitle="A spotless facility isn't just about appearance — it's about health, safety and the impression you make. Here's the kind of transformation our clients count on."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {results.map((r, i) => (
            <Reveal key={r.label} delay={i * 0.06}>
              <figure className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
                <div className="grid grid-cols-2">
                  {/* Before */}
                  <div className="relative flex aspect-square items-center justify-center bg-slate/15">
                    <span className="absolute left-2 top-2 rounded-full bg-navy/80 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                      Before
                    </span>
                    <span className="px-2 text-center text-xs text-slate">
                      [Before photo]
                    </span>
                  </div>
                  {/* After */}
                  <div className="relative flex aspect-square items-center justify-center bg-brand-tint">
                    <span className="absolute left-2 top-2 rounded-full bg-brand-gradient px-2.5 py-0.5 text-[11px] font-semibold text-white">
                      After
                    </span>
                    <span className="px-2 text-center text-xs text-brand">
                      [After photo]
                    </span>
                  </div>
                </div>
                <figcaption className="p-4">
                  <p className="font-heading text-sm font-bold text-navy">
                    {r.label}
                  </p>
                  <p className="text-xs text-slate">{r.area}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate">
          [Replace with real before/after photos of your work — see README
          &ldquo;Imagery&rdquo;.]
        </p>
      </Container>
    </section>
  );
}
