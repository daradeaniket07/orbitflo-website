import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return site.navigation.map(({ href }) => ({
    url: new URL(href, site.url).toString(),
    lastModified,
  }));
}
