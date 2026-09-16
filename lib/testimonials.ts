/**
 * Testimonials — realistic but FAKE placeholder reviews. Replace with real
 * client quotes (and confirm you have permission to use names/companies)
 * before launch. Used on the home page and /reviews.
 */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number; // 1–5
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "CLO Janitorial transformed our office. Their crew is reliable, thorough, and we never have to follow up — the building is spotless every morning. Best janitorial partner we've had.",
    name: "[Jennifer Alvarez]",
    role: "Office Manager",
    company: "[Coastline Financial Group]",
    rating: 5,
  },
  {
    quote:
      "As a medical office, sanitation is non-negotiable. CLO's disinfection protocols and consistency give us total peace of mind. Highly professional from the walkthrough to the ongoing service.",
    name: "[Dr. Marcus Bell]",
    role: "Practice Administrator",
    company: "[North County Family Care]",
    rating: 5,
  },
  {
    quote:
      "We manage several properties and CLO handles them all with one point of contact. Communication is easy, quality is consistent, and our tenants have noticed the difference.",
    name: "[Priya Nair]",
    role: "Regional Property Manager",
    company: "[Summit Commercial Properties]",
    rating: 5,
  },
  {
    quote:
      "Their floor care is incredible — our showroom floors have never looked better. Customers comment on how clean the dealership is. The day porter is a huge plus.",
    name: "[Ryan Torres]",
    role: "General Manager",
    company: "[Pacific Auto Group]",
    rating: 5,
  },
  {
    quote:
      "Switching to CLO was the easiest vendor decision we've made. Fully insured, background-checked staff, and a custom plan that actually fit our budget. Zero complaints.",
    name: "[Danielle Cooper]",
    role: "Operations Director",
    company: "[Vista Logistics Center]",
    rating: 5,
  },
  {
    quote:
      "Post-construction cleanup on a tight deadline — they nailed it. Crew was professional, detail-oriented, and had our new space move-in ready right on schedule.",
    name: "[Kevin Ishikawa]",
    role: "Project Manager",
    company: "[Meridian Builders]",
    rating: 5,
  },
];

export const aggregateRating = {
  value: 4.9,
  count: 127, // TODO: replace with real Google/aggregate review count
};
