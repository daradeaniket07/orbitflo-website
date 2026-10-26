import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/config/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(site.notFound.metadata.title, site.notFound.metadata.description, "/404");

export default function NotFound() {
  return (
    <main className="not-found-page" id="main-content">
      <JsonLd data={breadcrumbSchema([
        { name: site.navigation.find(({ href }) => href === "/")?.label ?? site.name, path: "/" },
        { name: site.notFound.title, path: "/404" },
      ])} />
      <Image
        alt=""
        className="not-found-image"
        fill
        priority
        sizes="100vw"
        src="/images/404-satellite.webp"
      />
      <div aria-hidden="true" className="not-found-overlay" />
      <div className="container not-found-content">
        <span className="eyebrow">404</span>
        <h1>{site.notFound.title}</h1>
        <p>{site.notFound.message}</p>
        <Link className="button" href="/">
          {site.notFound.homeLabel}<span aria-hidden="true">↗</span>
        </Link>
      </div>
    </main>
  );
}
