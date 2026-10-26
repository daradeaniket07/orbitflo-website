import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { indexingAllowed } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", ...(indexingAllowed ? { allow: "/" } : { disallow: "/" }) },
    ...(indexingAllowed ? { sitemap: new URL("/sitemap.xml", site.url).toString() } : {}),
  };
}
