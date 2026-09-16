import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { ServicesGrid } from "@/components/home/services-grid";
import { IndustriesStrip } from "@/components/home/industries-strip";
import { WhyChoose } from "@/components/home/why-choose";
import { HowItWorks } from "@/components/home/how-it-works";
import { BeforeAfter } from "@/components/home/before-after";
import { Testimonials } from "@/components/home/testimonials";
import { Certifications } from "@/components/home/certifications";
import { ServiceAreaTeaser } from "@/components/home/service-area-teaser";
import { CareersCallout } from "@/components/home/careers-callout";
import { FinalCta } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <IndustriesStrip />
      <WhyChoose />
      <HowItWorks />
      <BeforeAfter />
      <Testimonials />
      <Certifications />
      <ServiceAreaTeaser />
      <CareersCallout />
      <FinalCta />
    </>
  );
}
