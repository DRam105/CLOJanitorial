import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: `Terms of service for ${site.name}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="[Placeholder — replace with your reviewed terms of service.]"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ]}
      />
      <section className="bg-white py-14 sm:py-16">
        <Container className="max-w-3xl space-y-6 text-slate">
          <p className="text-sm text-slate/70">
            Last updated: [date]. This is placeholder content — please have your
            final terms reviewed by a qualified professional before launch.
          </p>

          <LegalBlock title="Use of This Website">
            By accessing this website you agree to use it for lawful purposes
            only. Content is provided for general informational purposes and may
            change without notice.
          </LegalBlock>
          <LegalBlock title="Services & Quotes">
            Quotes and service descriptions on this site are estimates and
            subject to a formal agreement. Pricing and scope are confirmed after
            an on-site walkthrough.
          </LegalBlock>
          <LegalBlock title="Intellectual Property">
            All content, logos and materials on this site are the property of{" "}
            {site.name} unless otherwise noted, and may not be reproduced without
            permission.
          </LegalBlock>
          <LegalBlock title="Limitation of Liability">
            {site.name} is not liable for any indirect or incidental damages
            arising from the use of this website. [Add your reviewed liability
            language.]
          </LegalBlock>
          <LegalBlock title="Contact Us">
            Questions about these terms? Email {site.email}.
          </LegalBlock>
        </Container>
      </section>
    </>
  );
}

function LegalBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-heading text-xl font-bold text-navy">{title}</h2>
      <p className="mt-2 leading-relaxed">{children}</p>
    </div>
  );
}
