/**
 * Service-area data for the Service Area page + checker.
 *
 * TODO: Confirm the exact cities/ZIPs CLO Janitorial serves and update these
 * lists. The checker below matches on city name OR ZIP code (client-side).
 */

export type ServiceCity = {
  name: string;
  zips: string[];
  featured?: boolean;
};

// Carlsbad HQ + North County San Diego focus, with broader San Diego County reach.
export const serviceCities: ServiceCity[] = [
  { name: "Carlsbad", zips: ["92008", "92009", "92010", "92011"], featured: true },
  { name: "Oceanside", zips: ["92054", "92056", "92057", "92058"], featured: true },
  { name: "Vista", zips: ["92081", "92083", "92084"], featured: true },
  { name: "San Marcos", zips: ["92069", "92078"], featured: true },
  { name: "Escondido", zips: ["92025", "92026", "92027", "92029"], featured: true },
  { name: "Encinitas", zips: ["92024"], featured: true },
  { name: "Solana Beach", zips: ["92075"] },
  { name: "Del Mar", zips: ["92014"] },
  { name: "Rancho Santa Fe", zips: ["92067", "92091"] },
  { name: "Poway", zips: ["92064"] },
  { name: "Rancho Bernardo", zips: ["92127", "92128"] },
  { name: "Fallbrook", zips: ["92028"] },
  { name: "Bonsall", zips: ["92003"] },
  { name: "San Diego", zips: ["92101", "92108", "92110", "92117", "92121", "92122", "92126", "92130"], featured: true },
  { name: "La Jolla", zips: ["92037"] },
  { name: "Sorrento Valley", zips: ["92121"] },
  { name: "Miramar", zips: ["92145"] },
  { name: "Kearny Mesa", zips: ["92111", "92123"] },
];

const normalize = (value: string) => value.trim().toLowerCase();

export type AreaCheckResult =
  | { status: "served"; city: ServiceCity; matchedBy: "city" | "zip" }
  | { status: "unknown"; query: string };

/**
 * Client-side check against the placeholder list above. Returns a friendly
 * result the UI can render ("We serve your area!" vs "Contact us to confirm").
 */
export function checkServiceArea(query: string): AreaCheckResult {
  const q = normalize(query);
  if (!q) return { status: "unknown", query };

  // ZIP match (5-digit)
  const zip = q.match(/\b\d{5}\b/)?.[0];
  if (zip) {
    const byZip = serviceCities.find((c) => c.zips.includes(zip));
    if (byZip) return { status: "served", city: byZip, matchedBy: "zip" };
  }

  // City-name match (contains, to allow "carlsbad ca")
  const byCity = serviceCities.find(
    (c) => q.includes(normalize(c.name)) || normalize(c.name).includes(q),
  );
  if (byCity) return { status: "served", city: byCity, matchedBy: "city" };

  return { status: "unknown", query };
}
