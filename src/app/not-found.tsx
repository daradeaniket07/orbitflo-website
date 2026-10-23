import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

export default function NotFound() {
  return (
    <main className="not-found-page" id="main-content">
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
