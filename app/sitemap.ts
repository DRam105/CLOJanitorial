import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { serviceSlugs } from "@/lib/services";
import { industrySlugs } from "@/lib/industries";
import { caseStudySlugs } from "@/lib/case-studies";
import { getAllPostSlugs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes = [
    "",
    "/services",
    "/industries",
    "/why-clo",
    "/service-area",
    "/about",
    "/case-studies",
    "/reviews",
    "/careers",
    "/blog",
    "/contact",
    "/quote",
    "/privacy",
    "/terms",
  ];

  const dynamicRoutes = [
    ...serviceSlugs.map((s) => `/services/${s}`),
    ...industrySlugs.map((s) => `/industries/${s}`),
    ...caseStudySlugs.map((s) => `/case-studies/${s}`),
    ...getAllPostSlugs().map((s) => `/blog/${s}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
