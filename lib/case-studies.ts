/**
 * Case studies — realistic but FAKE placeholders. Replace with real client
 * results (with permission) before launch. Powers /case-studies and
 * /case-studies/[slug].
 */

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string[];
  results: { stat: string; label: string }[];
  quote?: { text: string; name: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "corporate-office-nightly-cleaning",
    client: "[Coastline Financial Group]",
    industry: "Corporate Office",
    title: "Consistent Nightly Cleaning for a 40,000 sq. ft. Corporate HQ",
    summary:
      "How CLO replaced an unreliable vendor and delivered spotless, dependable nightly service across three floors.",
    challenge:
      "The client's previous janitorial provider was inconsistent — missed areas, no communication, and frequent turnover of unvetted staff. Employees were arriving to dirty break rooms and under-stocked restrooms, and the office manager was fielding daily complaints.",
    solution: [
      "Conducted a full on-site walkthrough and built a floor-by-floor cleaning checklist",
      "Assigned a dedicated, background-checked crew with a consistent nightly schedule",
      "Implemented a quality-assurance inspection program with a single point of contact",
      "Took over restroom and break-room supply management",
    ],
    results: [
      { stat: "0", label: "Missed cleanings in 12 months" },
      { stat: "98%", label: "Quality inspection pass rate" },
      { stat: "100%", label: "Reduction in employee complaints" },
    ],
    quote: {
      text: "CLO transformed our office. Reliable, thorough, and we never have to follow up — the building is spotless every morning.",
      name: "[Jennifer Alvarez]",
      role: "Office Manager",
    },
  },
  {
    slug: "medical-facility-disinfection",
    client: "[North County Family Care]",
    industry: "Medical & Healthcare",
    title: "Infection-Control Cleaning for a Multi-Provider Medical Office",
    summary:
      "Establishing rigorous disinfection protocols to protect patients and staff at a busy clinic.",
    challenge:
      "A growing medical practice needed a cleaning partner that understood infection control — proper disinfectants, dwell times, and cross-contamination prevention — without disrupting patient hours.",
    solution: [
      "Mapped high-touch and high-risk areas across exam and waiting rooms",
      "Deployed EPA-registered disinfectants with documented protocols and dwell times",
      "Used color-coded equipment to prevent cross-contamination",
      "Scheduled cleaning around patient hours for zero disruption",
    ],
    results: [
      { stat: "100%", label: "Protocol compliance" },
      { stat: "5★", label: "Client satisfaction rating" },
      { stat: "24/7", label: "Responsive support" },
    ],
    quote: {
      text: "CLO's disinfection protocols and consistency give us total peace of mind. Highly professional from day one.",
      name: "[Dr. Marcus Bell]",
      role: "Practice Administrator",
    },
  },
  {
    slug: "property-management-portfolio",
    client: "[Summit Commercial Properties]",
    industry: "Property Management",
    title: "One Cleaning Partner Across a Multi-Building Portfolio",
    summary:
      "Consolidating janitorial vendors into a single accountable partner across six commercial properties.",
    challenge:
      "A property management firm was juggling multiple cleaning vendors with inconsistent quality and no unified reporting. Tenants noticed the difference between buildings, and coordination was eating up staff time.",
    solution: [
      "Standardized cleaning scopes and schedules across all six properties",
      "Provided a single account manager and unified communication",
      "Implemented consistent quality inspections portfolio-wide",
      "Added flexible turnover and common-area cleaning as needed",
    ],
    results: [
      { stat: "6", label: "Properties, one vendor" },
      { stat: "1", label: "Point of contact" },
      { stat: "30%", label: "Less admin time on cleaning" },
    ],
    quote: {
      text: "CLO handles all our buildings with one point of contact. Communication is easy and quality is consistent.",
      name: "[Priya Nair]",
      role: "Regional Property Manager",
    },
  },
];

export const caseStudySlugs = caseStudies.map((c) => c.slug);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
