/** Primary navigation config, shared by the header and footer. */

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Why CLO", href: "/why-clo" },
  { label: "Service Area", href: "/service-area" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Services",
    items: [
      { label: "Office & Commercial Cleaning", href: "/services/office-commercial-cleaning" },
      { label: "Janitorial Services", href: "/services/janitorial-services" },
      { label: "Floor Care", href: "/services/floor-care" },
      { label: "Disinfection & Sanitization", href: "/services/disinfection-sanitization" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    title: "Industries",
    items: [
      { label: "Offices & Corporate", href: "/industries/offices-corporate" },
      { label: "Medical & Healthcare", href: "/industries/medical-healthcare" },
      { label: "Schools & Education", href: "/industries/schools-education" },
      { label: "Property Management", href: "/industries/property-management" },
      { label: "All Industries", href: "/industries" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Why CLO", href: "/why-clo" },
      { label: "About Us", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Reviews", href: "/reviews" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Service Area", href: "/service-area" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Request a Quote", href: "/quote" },
    ],
  },
];
