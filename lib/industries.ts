/**
 * Industry verticals — powers /industries, /industries/[slug], the home-page
 * industries strip, and local + B2B SEO. Each vertical speaks to that
 * industry's specific cleaning and compliance needs.
 */

export type Industry = {
  slug: string;
  title: string;
  /** Short blurb for cards */
  short: string;
  /** lucide-react icon name */
  icon: string;
  /** Hero intro */
  intro: string;
  /** Industry-specific needs / focus areas */
  needs: string[];
  /** Compliance / standards callouts */
  compliance: string[];
  /** Services most relevant to this vertical (service slugs) */
  relatedServices: string[];
  faq: { q: string; a: string }[];
  featured?: boolean;
};

export const industries: Industry[] = [
  {
    slug: "offices-corporate",
    title: "Offices & Corporate",
    short: "Consistent, professional cleaning that keeps your workplace productive and on-brand.",
    icon: "Building2",
    featured: true,
    intro:
      "Your office is a reflection of your brand and a factor in employee productivity and retention. CLO Janitorial keeps corporate offices, coworking spaces and professional firms consistently clean with flexible, after-hours-friendly programs.",
    needs: [
      "Nightly or after-hours cleaning that doesn't disrupt work",
      "Spotless lobbies, conference rooms and common areas",
      "Clean, stocked break rooms and restrooms",
      "High-touch disinfection to reduce sick days",
    ],
    compliance: [
      "Trained, background-checked, uniformed staff",
      "Secure key/alarm handling protocols",
      "Consistent quality inspections",
    ],
    relatedServices: ["office-commercial-cleaning", "janitorial-services", "carpet-upholstery-cleaning", "day-porter-matron"],
    faq: [
      { q: "Can you clean after our team leaves?", a: "Yes — most corporate clients choose nightly or after-hours cleaning so there's zero disruption and everyone arrives to a fresh office." },
    ],
  },
  {
    slug: "medical-healthcare",
    title: "Medical & Healthcare",
    short: "Infection-control-focused cleaning for clinics, offices and healthcare facilities.",
    icon: "HeartPulse",
    featured: true,
    intro:
      "Healthcare environments demand a higher standard. Our medical cleaning follows infection-control best practices with EPA-registered disinfectants, proper protocols and trained staff to help protect patients, staff and visitors.",
    needs: [
      "Exam-room and waiting-room disinfection",
      "High-touch and high-risk surface protocols",
      "Proper handling of clinical waste areas",
      "Restroom sanitation to strict standards",
    ],
    compliance: [
      "Bloodborne pathogen / OSHA-aware practices [verify credentials]",
      "EPA-registered disinfectants with correct dwell times",
      "Color-coded tools to prevent cross-contamination",
    ],
    relatedServices: ["disinfection-sanitization", "restroom-sanitation", "floor-care", "janitorial-services"],
    faq: [
      { q: "Do you follow medical disinfection protocols?", a: "Yes. We use EPA-registered disinfectants with proper dwell times, color-coded equipment to prevent cross-contamination, and infection-control-aware procedures. Specific certifications are listed as [placeholders] until verified." },
    ],
  },
  {
    slug: "schools-education",
    title: "Schools & Education",
    short: "Healthy, safe learning environments for schools, daycares and campuses.",
    icon: "GraduationCap",
    featured: true,
    intro:
      "Classrooms, cafeterias and shared spaces are germ hot-spots. We help schools, childcare centers and campuses stay clean and healthy with disinfection-focused programs scheduled around the school day.",
    needs: [
      "Classroom and common-area disinfection",
      "Cafeteria and gym cleaning",
      "Restroom sanitation and restocking",
      "Flexible scheduling around class hours and breaks",
    ],
    compliance: [
      "Background-checked staff appropriate for school settings",
      "Child-safe, low-toxicity product options",
      "Consistent high-touch disinfection routines",
    ],
    relatedServices: ["disinfection-sanitization", "floor-care", "restroom-sanitation", "green-cleaning"],
    faq: [
      { q: "Can you work around our school schedule?", a: "Yes. We schedule cleaning after hours or during breaks and can scale up for deep cleans over holidays and summer." },
    ],
  },
  {
    slug: "retail-shopping",
    title: "Retail & Shopping Centers",
    short: "Bright, spotless retail spaces that impress customers and protect your brand.",
    icon: "ShoppingBag",
    featured: true,
    intro:
      "In retail, cleanliness drives customer perception and sales. We keep storefronts, showrooms and shopping centers immaculate — floors gleaming, glass streak-free and restrooms guest-ready.",
    needs: [
      "Sales-floor and entrance cleaning",
      "Hard-floor care and high-shine maintenance",
      "Streak-free glass and display cleaning",
      "Day-porter coverage for high-traffic hours",
    ],
    compliance: [
      "Flexible before/after-hours scheduling",
      "Discreet, uniformed, professional crews",
      "Consistent presentation standards",
    ],
    relatedServices: ["office-commercial-cleaning", "floor-care", "window-cleaning", "day-porter-matron"],
    faq: [
      { q: "Can you clean before we open?", a: "Yes — retail cleaning is typically done before opening or after closing, and we can add day-porter coverage during peak hours." },
    ],
  },
  {
    slug: "industrial-warehouse",
    title: "Industrial & Warehouses",
    short: "Heavy-duty cleaning for warehouses, distribution centers and industrial facilities.",
    icon: "Factory",
    featured: true,
    intro:
      "Industrial spaces have unique cleaning demands — large footprints, hard floors, break rooms and safety-sensitive areas. We deliver dependable, safety-conscious cleaning that keeps your facility presentable and compliant.",
    needs: [
      "Large-area hard-floor cleaning and scrubbing",
      "Break-room, office and restroom cleaning",
      "Dust and debris control",
      "Safety-conscious cleaning in active facilities",
    ],
    compliance: [
      "OSHA-aware, safety-first crews [verify credentials]",
      "Coordination with facility safety requirements",
      "Scalable staffing for large square footage",
    ],
    relatedServices: ["floor-care", "janitorial-services", "post-construction-cleanup", "restroom-sanitation"],
    faq: [
      { q: "Can you handle large square footage?", a: "Yes. We scale crews and equipment to warehouses and distribution centers of virtually any size, and we work safely around active operations." },
    ],
  },
  {
    slug: "banks-financial",
    title: "Banks & Financial",
    short: "Discreet, trustworthy cleaning for banks, credit unions and financial offices.",
    icon: "Landmark",
    intro:
      "Financial institutions need cleaning partners they can trust in secure, client-facing environments. Our vetted crews deliver a polished appearance with the discretion and reliability your clients expect.",
    needs: [
      "Immaculate lobbies and client-facing areas",
      "Secure-area cleaning protocols",
      "High-touch disinfection at teller and shared stations",
      "Consistent, professional presentation",
    ],
    compliance: [
      "Background-checked, trustworthy staff",
      "Secure key/alarm and after-hours protocols",
      "Confidentiality-aware crews",
    ],
    relatedServices: ["office-commercial-cleaning", "janitorial-services", "window-cleaning", "disinfection-sanitization"],
    faq: [
      { q: "How do you handle security?", a: "Our staff are background-checked and trained on secure key, alarm and after-hours protocols. We prioritize discretion and reliability in sensitive environments." },
    ],
  },
  {
    slug: "gyms-fitness",
    title: "Gyms & Fitness",
    short: "Sanitized, fresh fitness facilities that members trust and love.",
    icon: "Dumbbell",
    intro:
      "Gyms and studios are high-touch, high-sweat environments where sanitation is everything. We keep equipment, floors, locker rooms and showers clean, disinfected and odor-free so members feel confident every visit.",
    needs: [
      "Equipment and high-touch disinfection",
      "Locker room, shower and restroom sanitation",
      "Floor and mat cleaning",
      "Odor control and deodorizing",
    ],
    compliance: [
      "EPA-registered disinfectants for shared equipment",
      "Frequent, consistent high-touch routines",
      "Mold- and odor-focused restroom care",
    ],
    relatedServices: ["disinfection-sanitization", "restroom-sanitation", "floor-care", "day-porter-matron"],
    faq: [
      { q: "Can you keep the gym clean during open hours?", a: "Yes — many fitness clients pair after-hours deep cleaning with day-porter coverage to keep equipment and locker rooms fresh throughout the day." },
    ],
  },
  {
    slug: "places-of-worship",
    title: "Places of Worship",
    short: "Respectful, thorough cleaning for churches, temples and community spaces.",
    icon: "Church",
    intro:
      "Places of worship welcome large gatherings and deserve care that honors the space. We provide thorough, respectful cleaning of sanctuaries, halls, classrooms and restrooms on schedules that work around services and events.",
    needs: [
      "Sanctuary and gathering-hall cleaning",
      "Restroom sanitation for large gatherings",
      "Classroom and fellowship-area cleaning",
      "Event turnaround and floor care",
    ],
    compliance: [
      "Respectful, trustworthy crews",
      "Flexible scheduling around services and events",
      "Care for delicate finishes and furnishings",
    ],
    relatedServices: ["janitorial-services", "floor-care", "carpet-upholstery-cleaning", "restroom-sanitation"],
    faq: [
      { q: "Can you clean between services and events?", a: "Yes. We schedule around your services and can provide quick turnarounds between events, plus periodic deep cleans." },
    ],
  },
  {
    slug: "auto-dealerships",
    title: "Auto Dealerships",
    short: "Showroom-ready cleaning for dealerships, service bays and offices.",
    icon: "Car",
    intro:
      "A dealership's cleanliness shapes every customer's impression. We keep showrooms gleaming, glass spotless, customer lounges inviting and service areas presentable so your brand shines from the moment customers arrive.",
    needs: [
      "Showroom floor care and high-shine finishes",
      "Streak-free glass and window cleaning",
      "Customer lounge and restroom upkeep",
      "Service-bay and office cleaning",
    ],
    compliance: [
      "Day-porter coverage for showroom hours",
      "Detail-focused presentation standards",
      "Flexible before/after-hours scheduling",
    ],
    relatedServices: ["floor-care", "window-cleaning", "day-porter-matron", "office-commercial-cleaning"],
    faq: [
      { q: "Can you keep the showroom spotless all day?", a: "Yes — a day porter can maintain your showroom, glass and customer areas during business hours, with deeper cleaning after close." },
    ],
  },
  {
    slug: "property-management",
    title: "Property Management",
    short: "Reliable cleaning for common areas, turnovers and multi-tenant properties.",
    icon: "Building",
    featured: true,
    intro:
      "Property managers need a dependable single vendor for clean, well-maintained buildings. We handle common areas, lobbies, restrooms, turnovers and recurring janitorial across your portfolio with consistent quality and easy communication.",
    needs: [
      "Common-area, lobby and corridor cleaning",
      "Restroom sanitation and restocking",
      "Vacancy and turnover cleaning",
      "Portfolio-wide consistency and reporting",
    ],
    compliance: [
      "Single accountable vendor across properties",
      "Responsive communication and account management",
      "Insured & bonded for tenant peace of mind",
    ],
    relatedServices: ["janitorial-services", "floor-care", "post-construction-cleanup", "window-cleaning"],
    faq: [
      { q: "Can you service multiple properties?", a: "Yes. We're built to support property managers across multiple buildings with consistent standards, one point of contact, and clear reporting." },
    ],
  },
];

export const industrySlugs = industries.map((i) => i.slug);

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export const featuredIndustries = industries.filter((i) => i.featured);
