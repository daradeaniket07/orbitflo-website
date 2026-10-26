import type { Metadata } from "next";
import { site } from "@/config/site";

export const indexingAllowed = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const canonical = new URL(path, site.url).toString();

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    robots: { index: indexingAllowed, follow: indexingAllowed },
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url: canonical,
      locale: "en_IN",
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: new URL(path, site.url).toString(),
    })),
  };
}
