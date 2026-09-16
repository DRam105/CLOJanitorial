/**
 * Service catalog — powers the Services overview, individual /services/[slug]
 * pages, the home-page services grid, and Service JSON-LD.
 *
 * `icon` is a lucide-react icon name resolved in components/shared/Icon.tsx.
 * All copy is professional B2B placeholder text — edit freely.
 */

export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  /** Short blurb for cards */
  short: string;
  /** lucide-react icon name */
  icon: string;
  /** Longer intro for the service hero */
  intro: string;
  /** "What's included" checklist */
  includes: string[];
  /** Our process steps */
  process: { title: string; description: string }[];
  /** Who it's for */
  whoFor: string[];
  faq: ServiceFaq[];
  /** Featured on the home-page grid */
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "office-commercial-cleaning",
    title: "Office & Commercial Cleaning",
    short:
      "Consistent, detail-oriented cleaning for offices and commercial spaces — so your team walks into a spotless workplace every day.",
    icon: "Building2",
    featured: true,
    intro:
      "A clean, professional workspace protects your brand, your people, and your bottom line. CLO Janitorial delivers dependable recurring office cleaning built around your building, your schedule, and your standards — with trained crews and quality checks that keep every visit consistent.",
    includes: [
      "Dusting of desks, surfaces, fixtures and common areas",
      "Trash and recycling collection and liner replacement",
      "Vacuuming carpets and mopping hard floors",
      "Kitchen and break-room cleaning and sanitizing",
      "Restroom cleaning, sanitizing and restocking",
      "High-touch point disinfection (door handles, switches, shared equipment)",
      "Glass, entryway and interior window spot-cleaning",
      "Customized checklist tailored to your facility",
    ],
    process: [
      { title: "On-site walkthrough", description: "We tour your facility to understand its size, layout, traffic and priorities." },
      { title: "Custom cleaning plan", description: "You receive a tailored scope, schedule and transparent quote — no guesswork." },
      { title: "Recurring service", description: "Trained, background-checked crews clean on your schedule, days or after-hours." },
      { title: "Quality assurance", description: "Routine inspections and open communication keep every visit consistent." },
    ],
    whoFor: [
      "Corporate offices and coworking spaces",
      "Professional services firms (legal, finance, insurance)",
      "Multi-tenant office buildings",
      "Small businesses that need reliable recurring service",
    ],
    faq: [
      { q: "Do you clean after business hours?", a: "Yes. Most of our office clients prefer nightly or after-hours service so cleaning never disrupts their team. We build the schedule around you." },
      { q: "Can we customize what gets cleaned?", a: "Absolutely. Every plan starts with a walkthrough and a checklist tailored to your facility, priorities and budget." },
      { q: "Are your staff insured and background-checked?", a: "Every CLO team member is background-checked, trained, and we are fully insured and bonded for your protection." },
    ],
  },
  {
    slug: "janitorial-services",
    title: "Janitorial Services",
    short:
      "Full-service janitorial programs that keep facilities of every size clean, safe and presentable around the clock.",
    icon: "Sparkles",
    featured: true,
    intro:
      "From nightly upkeep to comprehensive facility maintenance, our janitorial programs are engineered for reliability. We staff, train, supply and supervise so you get a single accountable partner for a consistently clean building.",
    includes: [
      "Recurring nightly, weekly or custom-frequency cleaning",
      "All-surface dusting, sanitizing and detailing",
      "Floor care: sweeping, mopping, vacuuming, buffing",
      "Restroom sanitation and consumable restocking",
      "Trash removal and recycling management",
      "Supply management and inventory tracking",
      "Dedicated account manager and quality inspections",
      "Emergency and on-call cleaning response",
    ],
    process: [
      { title: "Assess", description: "We evaluate your facility's needs, traffic and compliance requirements." },
      { title: "Plan", description: "A detailed janitorial program with clear scopes, frequencies and staffing." },
      { title: "Perform", description: "Trained crews execute the plan with the right equipment and products." },
      { title: "Inspect", description: "Scheduled inspections and reporting ensure standards never slip." },
    ],
    whoFor: [
      "Businesses that need a full outsourced janitorial program",
      "Facilities with multiple areas and cleaning frequencies",
      "Organizations that value a single accountable vendor",
    ],
    faq: [
      { q: "What's the difference between janitorial and office cleaning?", a: "Office cleaning typically covers recurring surface and common-area cleaning. Janitorial services are broader — a complete, supervised program that can include floors, restrooms, supplies, and specialized tasks across a facility." },
      { q: "Do you provide the cleaning supplies?", a: "Yes. We manage products, equipment and consumables, and can restock your restroom and break-room supplies as part of the program." },
    ],
  },
  {
    slug: "floor-care",
    title: "Floor Care & Stripping / Waxing",
    short:
      "Strip, wax, buff and refinish hard floors — plus tile, grout and concrete care that restores shine and protects your investment.",
    icon: "Layers",
    featured: true,
    intro:
      "Floors are the first thing people notice and the fastest to show wear. Our floor-care specialists restore and maintain VCT, tile, concrete, hardwood and more with professional stripping, waxing, buffing and sealing on a schedule that keeps them looking their best.",
    includes: [
      "Strip, wax and refinish of VCT and hard floors",
      "High-speed burnishing and buffing for a lasting shine",
      "Tile and grout deep cleaning and sealing",
      "Concrete cleaning, polishing and sealing",
      "Hardwood cleaning and maintenance",
      "Scheduled recurring floor maintenance programs",
      "Slip-resistance and safety-focused finishes",
    ],
    process: [
      { title: "Evaluate floors", description: "We identify floor types, condition and the right restoration approach." },
      { title: "Prep & protect", description: "Areas are cordoned and protected to minimize disruption." },
      { title: "Restore", description: "Stripping, refinishing, buffing or sealing performed to spec." },
      { title: "Maintain", description: "Ongoing maintenance keeps floors bright between deep services." },
    ],
    whoFor: [
      "Facilities with large hard-floor areas",
      "Retail, medical and hospitality spaces",
      "Buildings needing periodic strip-and-wax refreshes",
    ],
    faq: [
      { q: "How often should floors be stripped and waxed?", a: "It depends on traffic and floor type, but most commercial floors benefit from a strip-and-wax every 6–12 months with regular buffing in between. We'll recommend a schedule during your walkthrough." },
      { q: "Can you work around our operating hours?", a: "Yes. Floor care is often done after-hours or on weekends so your operations aren't disrupted and floors have time to cure." },
    ],
  },
  {
    slug: "carpet-upholstery-cleaning",
    title: "Carpet & Upholstery Cleaning",
    short:
      "Deep-clean carpets and upholstery to remove stains, allergens and odors — extending their life and refreshing your space.",
    icon: "Sofa",
    featured: true,
    intro:
      "Carpets and soft furnishings trap dust, allergens and stains that vacuuming alone can't remove. Our hot-water extraction and low-moisture methods lift deep soil, brighten fibers and help your carpets last longer.",
    includes: [
      "Hot-water extraction (steam) carpet cleaning",
      "Low-moisture / encapsulation cleaning for quick dry times",
      "Spot and stain treatment",
      "Upholstery and fabric furniture cleaning",
      "Odor neutralization and deodorizing",
      "Carpet protector application on request",
      "Scheduled recurring or one-time deep cleans",
    ],
    process: [
      { title: "Inspect", description: "We assess fiber types, soil level and problem areas." },
      { title: "Pre-treat", description: "Targeted solutions loosen embedded soil and stains." },
      { title: "Extract", description: "Professional equipment lifts dirt, allergens and residue." },
      { title: "Finish", description: "Grooming and fast-dry techniques leave carpets fresh and usable quickly." },
    ],
    whoFor: [
      "Offices with high-traffic carpeted areas",
      "Hospitality, retail and waiting rooms",
      "Any facility due for a carpet refresh",
    ],
    faq: [
      { q: "How long until carpets are dry?", a: "Hot-water extraction typically dries in a few hours; low-moisture methods dry faster. We schedule around your hours to minimize downtime." },
      { q: "Will cleaning remove all stains?", a: "We remove the vast majority of stains. Some set-in or dye-based stains may be permanent, but we'll always tell you honestly what to expect before we start." },
    ],
  },
  {
    slug: "disinfection-sanitization",
    title: "Disinfection & Sanitization",
    short:
      "EPA-registered disinfection and high-touch sanitization that reduce the spread of germs and keep your people healthy.",
    icon: "ShieldCheck",
    featured: true,
    intro:
      "A visibly clean space isn't always a sanitized one. Our disinfection programs use EPA-registered products and proven protocols to target high-touch points and reduce the spread of illness — routinely or in response to an outbreak.",
    includes: [
      "High-touch point disinfection (handles, switches, rails, shared devices)",
      "EPA-registered, facility-appropriate disinfectants",
      "Electrostatic spraying for broad, even coverage",
      "Restroom and break-room sanitization",
      "Outbreak / rapid-response disinfection",
      "Documented protocols and dwell-time compliance",
      "Recurring or on-demand scheduling",
    ],
    process: [
      { title: "Risk assessment", description: "We map high-touch and high-risk areas in your facility." },
      { title: "Protocol", description: "The right products, methods and dwell times for your space." },
      { title: "Treat", description: "Manual and electrostatic application for thorough coverage." },
      { title: "Verify", description: "Consistent protocols and documentation you can rely on." },
    ],
    whoFor: [
      "Medical and healthcare facilities",
      "Schools, gyms and childcare",
      "Any workplace focused on employee health",
    ],
    faq: [
      { q: "What products do you use?", a: "We use EPA-registered disinfectants appropriate for your facility type, applied with correct dwell times. We can accommodate green or fragrance-free options on request." },
      { q: "Do you offer emergency disinfection?", a: "Yes. If you have a confirmed exposure or outbreak, we offer rapid-response disinfection to help you reopen safely. Contact us for availability." },
    ],
  },
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    short:
      "Streak-free interior and exterior window cleaning that brightens your space and sharpens your first impression.",
    icon: "PanelsTopLeft",
    featured: true,
    intro:
      "Clean windows let in light and signal that a business is well cared for. We clean interior and accessible exterior glass, frames, sills and entryways on a schedule that keeps your building looking sharp.",
    includes: [
      "Interior window and glass cleaning",
      "Exterior window cleaning (ground and accessible levels)",
      "Glass entry doors and partitions",
      "Frames, sills and tracks wiped down",
      "Streak-free, spot-free finish",
      "Recurring or one-time service",
    ],
    process: [
      { title: "Assess", description: "We review window access, height and frequency needs." },
      { title: "Prep", description: "Surrounding areas are protected and equipment staged safely." },
      { title: "Clean", description: "Professional tools and technique for a streak-free finish." },
      { title: "Detail", description: "Frames, sills and entry glass finished for a crisp look." },
    ],
    whoFor: [
      "Storefronts and retail",
      "Offices and lobbies with lots of glass",
      "Any facility wanting a brighter first impression",
    ],
    faq: [
      { q: "Do you clean high or hard-to-reach windows?", a: "We handle interior and ground/accessible exterior glass. For high-rise or specialty access we'll coordinate the right approach and let you know upfront." },
      { q: "How often should windows be cleaned?", a: "Storefronts often benefit from monthly service, while offices may do quarterly. We'll recommend a cadence based on your location and exposure." },
    ],
  },
  {
    slug: "restroom-sanitation",
    title: "Restroom Sanitation & Restocking",
    short:
      "Spotless, fully-stocked restrooms — the area your visitors and staff judge most. Sanitized, deodorized and never out of supplies.",
    icon: "Droplets",
    intro:
      "Nothing shapes perception of a facility faster than its restrooms. We deliver thorough restroom sanitation and reliable restocking so yours are consistently clean, fresh and fully supplied.",
    includes: [
      "Sanitizing of toilets, urinals, sinks and fixtures",
      "Disinfection of high-touch surfaces and partitions",
      "Floor cleaning and drain maintenance",
      "Mirror and glass cleaning",
      "Restocking of soap, paper and hygiene products",
      "Odor control and deodorizing",
      "Supply inventory management",
    ],
    process: [
      { title: "Set standards", description: "We define a restroom checklist and restock levels with you." },
      { title: "Sanitize", description: "Fixtures and high-touch points cleaned and disinfected." },
      { title: "Restock", description: "Consumables replenished so you never run out." },
      { title: "Monitor", description: "Inventory tracking and inspections keep quality high." },
    ],
    whoFor: [
      "High-traffic public restrooms",
      "Offices, retail and medical facilities",
      "Any business tired of running out of supplies",
    ],
    faq: [
      { q: "Do you supply the paper products and soap?", a: "We can. Many clients let us manage restroom consumables and restock them as part of the service so supplies never run out." },
      { q: "Can you service restrooms during the day?", a: "Yes — this pairs well with our day-porter service to keep restrooms clean and stocked throughout busy hours." },
    ],
  },
  {
    slug: "day-porter-matron",
    title: "Day Porter / Matron Services",
    short:
      "On-site daytime staff who keep your facility spotless during business hours — lobbies, restrooms, break rooms and more.",
    icon: "ConciergeBell",
    intro:
      "Some facilities need cleaning attention while the doors are open. Our day porters and matrons provide a professional on-site presence that keeps common areas, restrooms and high-traffic spaces pristine throughout the day.",
    includes: [
      "Lobby, entrance and common-area upkeep",
      "Restroom checks, cleaning and restocking",
      "Break-room and kitchen maintenance",
      "Trash and spill response",
      "Event and meeting-room turnover",
      "Consistent, uniformed on-site presence",
    ],
    process: [
      { title: "Define coverage", description: "We set the hours, tasks and areas your porter will cover." },
      { title: "Staff & train", description: "A vetted, trained porter is assigned to your facility." },
      { title: "Daily service", description: "Continuous upkeep keeps your space guest-ready all day." },
      { title: "Supervise", description: "Account management and check-ins keep standards consistent." },
    ],
    whoFor: [
      "Class-A office buildings and lobbies",
      "Retail centers and dealerships",
      "High-traffic facilities and event venues",
    ],
    faq: [
      { q: "Can we set the porter's hours and duties?", a: "Yes. Day-porter coverage is fully customizable — you choose the hours, areas and priority tasks, and we staff and supervise accordingly." },
      { q: "Is the same person assigned each day?", a: "We aim for consistency by assigning dedicated staff, with trained backups so coverage never lapses." },
    ],
  },
  {
    slug: "post-construction-cleanup",
    title: "Post-Construction Cleanup",
    short:
      "Turn a finished build into a move-in-ready space — dust, debris and construction residue thoroughly removed.",
    icon: "HardHat",
    intro:
      "New construction and renovations leave behind fine dust and debris that ordinary cleaning can't handle. Our post-construction teams take your project from 'built' to 'move-in ready' with detailed, multi-phase cleanup.",
    includes: [
      "Removal of construction dust and debris",
      "Detailed cleaning of surfaces, fixtures and finishes",
      "Window, frame and track cleaning",
      "Floor cleaning, and initial strip/wax or finish",
      "Restroom and kitchen detailing",
      "Final touch-up / punch-list cleaning",
    ],
    process: [
      { title: "Rough clean", description: "Bulk debris and heavy dust removed after major work." },
      { title: "Detail clean", description: "Surfaces, fixtures, glass and floors thoroughly cleaned." },
      { title: "Final clean", description: "White-glove touch-up so the space is truly move-in ready." },
      { title: "Handoff", description: "A spotless space delivered on your timeline." },
    ],
    whoFor: [
      "Contractors and developers",
      "Newly built or renovated commercial spaces",
      "Tenant-improvement projects",
    ],
    faq: [
      { q: "Can you meet our project deadline?", a: "Yes. We scale crews to hit your handoff date and can coordinate around final trades to keep your project on schedule." },
      { q: "Do you handle multi-phase cleanups?", a: "We do — rough, detail and final cleans — so the space is properly cleaned at each stage of completion." },
    ],
  },
  {
    slug: "green-cleaning",
    title: "Green / Eco-Friendly Cleaning",
    short:
      "Healthier, more sustainable cleaning using eco-friendly products and practices — better for your people and the planet.",
    icon: "Leaf",
    intro:
      "A cleaner facility shouldn't come at the cost of indoor air quality or the environment. Our green cleaning program uses eco-friendly products, efficient equipment and sustainable practices that protect occupant health without compromising results.",
    includes: [
      "Eco-friendly, low-toxicity cleaning products",
      "Green Seal / third-party certified options [placeholder]",
      "HEPA-filtration vacuums for better air quality",
      "Reduced-water and efficient cleaning methods",
      "Fragrance-free and sensitive-space options",
      "Sustainable supply and waste practices",
    ],
    process: [
      { title: "Consult", description: "We identify green priorities and any occupant sensitivities." },
      { title: "Select", description: "The right eco-certified products and equipment for your space." },
      { title: "Clean green", description: "Sustainable methods that protect indoor air quality." },
      { title: "Improve", description: "Ongoing refinement toward your sustainability goals." },
    ],
    whoFor: [
      "Organizations with sustainability commitments",
      "Schools, medical and wellness-focused workplaces",
      "Spaces with occupants sensitive to harsh chemicals",
    ],
    faq: [
      { q: "Are green products as effective?", a: "Yes. Today's certified green products clean and disinfect effectively while being gentler on occupants and the environment. We match products to each surface and requirement." },
      { q: "Can you make our whole program green?", a: "We can build a fully green program or blend green practices into your existing plan — whatever fits your goals and budget." },
    ],
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const featuredServices = services.filter((s) => s.featured);
