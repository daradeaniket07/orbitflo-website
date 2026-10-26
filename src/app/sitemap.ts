import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { serviceDetails } from "@/config/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const paths = [
    ...site.navigation.map(({ href }) => href),
    ...serviceDetails.map(({ id }) => `/services/${id}`),
  ];

  return paths.map((href) => ({
    url: new URL(href, site.url).toString(),
    lastModified,
  }));
}
