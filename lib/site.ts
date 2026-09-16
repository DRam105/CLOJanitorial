/**
 * Central business configuration for CLO Janitorial.
 *
 * ⚠️ SWAP THESE FIRST: this is the single source of truth for name, phone,
 * email, address, hours and social links across the whole site (header,
 * footer, contact page, quote form, JSON-LD schema). Update values here and
 * they propagate everywhere. Anything wrapped in [brackets] is a placeholder
 * you must replace before launch.
 */

export const site = {
  name: "CLO Janitorial",
  legalName: "CLO Janitorial",
  tagline: "Commercial Cleaning You Can Count On",
  description:
    "CLO Janitorial provides reliable, fully-insured commercial cleaning and janitorial services for offices, medical facilities, schools, retail and industrial spaces across Carlsbad and North County San Diego.",

  // Contact — REAL values provided by the client, except phone.
  phone: "[ADD PHONE NUMBER]", // TODO: replace with real phone, e.g. "(760) 555-0123"
  phoneHref: "tel:+10000000000", // TODO: replace with tel: link matching the phone above
  email: "info@clojanitorial.com",

  address: {
    street: "3145 Tiger Run Ct, Ste 107",
    city: "Carlsbad",
    state: "CA",
    zip: "92010",
    country: "US",
  },

  // Approx. coordinates for Carlsbad, CA (used for LocalBusiness schema / map).
  geo: {
    lat: 33.1509,
    lng: -117.3131,
  },

  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "By appointment" },
    { day: "Sunday", time: "Closed" },
    { day: "Cleaning crews", time: "Nights, weekends & after-hours available" },
  ],

  // Primary conversion targets used by CTAs across the site.
  cta: {
    quote: "/quote",
    walkthrough: "/contact?type=walkthrough",
    careers: "/careers",
  },

  hiring: true, // toggles the "Now Hiring" banners in header/footer

  // Social links — replace # with real URLs (or remove unused ones).
  social: {
    facebook: "#", // TODO
    instagram: "#", // TODO
    linkedin: "#", // TODO
    google: "#", // TODO: Google Business Profile
  },

  // SEO / deployment
  url: "https://www.clojanitorial.com", // TODO: confirm final domain
  region: "Carlsbad & North County San Diego",

  // License / insurance note — REPLACE with real numbers before launch.
  legal: {
    insured: true,
    bonded: true,
    licenseNote: "Licensed, Bonded & Insured • [License/Insurance # placeholder]",
  },
} as const;

export type Site = typeof site;
