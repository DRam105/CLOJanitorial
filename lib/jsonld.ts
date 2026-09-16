import { site } from "@/lib/site";
import type { Service } from "@/lib/services";

/**
 * JSON-LD structured data builders. Render the returned objects inside a
 * <script type="application/ld+json"> tag (see components/shared/JsonLd).
 */

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    // telephone intentionally omitted until a real number replaces the placeholder
    image: `${site.url}/opengraph-image`,
    logo: `${site.url}/logo.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: site.region,
    priceRange: "$$",
    sameAs: Object.values(site.social).filter((u) => u && u !== "#"),
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.short,
    url: `${site.url}/services/${service.slug}`,
    provider: {
      "@type": "CleaningService",
      name: site.name,
      "@id": `${site.url}/#business`,
    },
    areaServed: site.region,
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, site.url).toString(),
    })),
  };
}
