/**
 * Job listings — PLACEHOLDER openings. Replace with your real positions (or
 * wire to an ATS). Powers /careers.
 */

export type Job = {
  id: string;
  title: string;
  type: string; // Full-time / Part-time
  location: string;
  shift: string;
  summary: string;
};

export const jobs: Job[] = [
  {
    id: "commercial-cleaner",
    title: "Commercial Cleaner",
    type: "Full-time / Part-time",
    location: "[Carlsbad & North County San Diego]",
    shift: "Evenings / After-hours",
    summary:
      "Perform nightly cleaning of offices and commercial spaces — dusting, vacuuming, restrooms, break rooms and trash. Reliable, detail-oriented team players welcome.",
  },
  {
    id: "floor-care-technician",
    title: "Floor Care Technician",
    type: "Full-time",
    location: "[North County San Diego]",
    shift: "Nights / Weekends",
    summary:
      "Strip, wax, buff and maintain hard floors and carpets using professional equipment. Experience preferred but we'll train the right person.",
  },
  {
    id: "day-porter",
    title: "Day Porter",
    type: "Part-time",
    location: "[San Diego County]",
    shift: "Daytime",
    summary:
      "Maintain lobbies, restrooms and common areas throughout the day at a client facility. A friendly, professional on-site presence.",
  },
  {
    id: "crew-lead",
    title: "Crew Lead / Supervisor",
    type: "Full-time",
    location: "[Carlsbad, CA]",
    shift: "Evenings",
    summary:
      "Lead a small cleaning crew, run quality inspections and communicate with clients. Prior janitorial or team-lead experience a plus.",
  },
];

export const jobPositionOptions = [
  ...jobs.map((j) => j.title),
  "General Application",
];
