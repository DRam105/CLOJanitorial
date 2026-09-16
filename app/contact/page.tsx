import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { buildMetadata } from "@/lib/metadata";
import type { ContactValues } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact CLO Janitorial for commercial cleaning and janitorial services in Carlsbad and North County San Diego. Request a quote or schedule a free walkthrough.",
  path: "/contact",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const defaultType: ContactValues["type"] =
    type === "walkthrough" || type === "quote" || type === "other"
      ? type
      : "question";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Facility"
        subtitle="Questions, quotes or walkthroughs — we're here to help. Reach out and a member of the CLO team will get right back to you."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <section className="bg-offwhite py-14 sm:py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Contact details */}
          <aside className="space-y-4">
            <ContactItem icon={Phone} label="Phone" href={site.phoneHref}>
              {site.phone}
            </ContactItem>
            <ContactItem icon={Mail} label="Email" href={`mailto:${site.email}`}>
              {site.email}
            </ContactItem>
            <ContactItem icon={MapPin} label="Address">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </ContactItem>
            <div className="rounded-2xl border border-border bg-white p-5 shadow-soft">
              <p className="flex items-center gap-2 font-heading text-sm font-bold text-navy">
                <Clock className="size-4 text-brand" />
                Hours
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-slate">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span className="text-right font-medium text-navy">
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map placeholder */}
            <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-input bg-white text-center text-sm text-slate">
              [Embedded map placeholder — add a Google Maps iframe here]
            </div>
          </aside>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-white p-6 shadow-soft sm:p-8">
            <h2 className="font-heading text-xl font-bold text-navy">
              Send us a message
            </h2>
            <p className="mt-1 text-sm text-slate">
              Fields marked with * are required.
            </p>
            <div className="mt-6">
              <ContactForm defaultType={defaultType} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactItem({
  icon: Icon,
  label,
  href,
  children,
}: {
  icon: React.ElementType;
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  const body = (
    <div className="flex items-start gap-3">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate">
          {label}
        </p>
        <p className="mt-0.5 font-medium text-navy">{children}</p>
      </div>
    </div>
  );
  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-soft">
      {href ? (
        <a href={href} className="transition-opacity hover:opacity-80">
          {body}
        </a>
      ) : (
        body
      )}
    </div>
  );
}
