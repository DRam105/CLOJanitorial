import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="[Placeholder — replace with your reviewed privacy policy.]"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ]}
      />
      <section className="bg-white py-14 sm:py-16">
        <Container className="max-w-3xl space-y-6 text-slate">
          <p className="text-sm text-slate/70">
            Last updated: [date]. This is placeholder content — please have your
            final privacy policy reviewed by a qualified professional before
            launch.
          </p>

          <LegalBlock title="Information We Collect">
            When you submit a form on our site (quote, contact, or careers), we
            collect the information you provide, such as your name, email, phone
            number, company, and message. We may also collect basic analytics
            data about how visitors use our site.
          </LegalBlock>
          <LegalBlock title="How We Use Your Information">
            We use your information to respond to your inquiries, provide quotes
            and services, and improve our website. We do not sell your personal
            information.
          </LegalBlock>
          <LegalBlock title="Cookies & Analytics">
            We may use cookies and third-party analytics tools to understand site
            usage. You can control cookies through your browser settings.
          </LegalBlock>
          <LegalBlock title="Data Sharing">
            We may share information with service providers who help us operate
            our business (e.g., email or CRM providers), under appropriate
            confidentiality obligations.
          </LegalBlock>
          <LegalBlock title="Your Rights">
            You may request access to, correction of, or deletion of your
            personal information by contacting us at {site.email}.
          </LegalBlock>
          <LegalBlock title="Contact Us">
            Questions about this policy? Email {site.email} or write to us at{" "}
            {site.address.street}, {site.address.city}, {site.address.state}{" "}
            {site.address.zip}.
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
