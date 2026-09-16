import type { Metadata } from "next";
import { CheckCircle2, Phone, Clock, ShieldCheck } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { QuoteForm } from "@/components/forms/quote-form";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Request a Free Quote",
  description:
    "Get a free, no-obligation commercial cleaning quote from CLO Janitorial. Tell us about your facility and we'll schedule an on-site walkthrough.",
  path: "/quote",
});

const perks = [
  { icon: CheckCircle2, text: "Free, no-obligation quote" },
  { icon: Clock, text: "Fast response — usually same day" },
  { icon: ShieldCheck, text: "Insured, bonded & background-checked" },
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Free Quote"
        title="Request Your Free Cleaning Quote"
        subtitle="Answer a few quick questions about your facility and we'll follow up to confirm details and schedule a free on-site walkthrough."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Request a Quote", path: "/quote" },
        ]}
      />

      <section className="bg-offwhite py-14 sm:py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          {/* Reassurance sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <h2 className="font-heading text-lg font-bold text-navy">
                What to expect
              </h2>
              <ul className="mt-4 space-y-3">
                {perks.map((p) => {
                  const Icon = p.icon;
                  return (
                    <li key={p.text} className="flex items-start gap-3 text-sm text-slate">
                      <Icon className="mt-0.5 size-5 shrink-0 text-brand" />
                      {p.text}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="rounded-2xl bg-navy-section p-6 text-white">
              <p className="font-heading font-semibold">Prefer to talk?</p>
              <p className="mt-1 text-sm text-white/70">
                Call us and we&apos;ll get you a quote right away.
              </p>
              <a
                href={site.phoneHref}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
              >
                <Phone className="size-4 text-brand" />
                {site.phone}
              </a>
            </div>
          </aside>

          {/* Form */}
          <div>
            <QuoteForm />
          </div>
        </Container>
      </section>
    </>
  );
}
