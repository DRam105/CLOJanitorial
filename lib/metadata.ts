import type { Metadata } from "next";
import { site } from "@/lib/site";

/**
 * Builds consistent per-route metadata (title, description, canonical, Open
 * Graph, Twitter) from a small set of inputs. Use in each route's
 * `export const metadata` or `generateMetadata`.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  images,
}: {
  title: string;
  description: string;
  path?: string;
  images?: string[];
}): Metadata {
  const url = new URL(path, site.url).toString();
  const ogImages = images ?? ["/opengraph-image"];

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: ogImages,
    },
  };
}
