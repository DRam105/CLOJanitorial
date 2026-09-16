import { BadgeCheck, ShieldCheck, Leaf, Award, HeartHandshake } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

/**
 * Certification / guarantee reassurance band.
 * TODO: Replace [placeholder] badges with your real certifications and swap in
 * official badge artwork (CIMS/ISSA, OSHA, Green Seal, etc.).
 */
const badges = [
  { icon: Award, label: "CIMS / ISSA", note: "[Certification placeholder]" },
  { icon: ShieldCheck, label: "OSHA Compliant", note: "[Verify credentials]" },
  { icon: Leaf, label: "Green Seal", note: "[Eco certification placeholder]" },
  { icon: BadgeCheck, label: "Insured & Bonded", note: "Full coverage" },
];

export function Certifications() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-offwhite p-8 shadow-soft lg:grid-cols-[1fr_1.2fr] lg:p-12">
          {/* Guarantee */}
          <Reveal>
            <div className="flex items-start gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                <HeartHandshake className="size-7" />
              </span>
              <div>
                <h2 className="font-heading text-2xl font-bold text-navy">
                  Our 100% Satisfaction Guarantee
                </h2>
                <p className="mt-2 text-slate">
                  If something isn&apos;t right, we&apos;ll make it right — fast.
                  We stand behind every visit with a satisfaction guarantee and
                  responsive, accountable service.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Badges */}
          <Reveal direction="left">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {badges.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.label}
                    className="flex flex-col items-center rounded-2xl border border-border bg-white p-4 text-center shadow-soft"
                  >
                    <Icon className="size-8 text-brand" />
                    <p className="mt-3 font-heading text-sm font-bold text-navy">
                      {b.label}
                    </p>
                    <p className="text-[11px] text-slate">{b.note}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
