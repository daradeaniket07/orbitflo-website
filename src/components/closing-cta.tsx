import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";

export function ClosingCta() {
  return (
    <section className="closing-section section-pad">
      <div className="container closing-panel">
        <Image
          alt=""
          aria-hidden="true"
          className="closing-background-image"
          fill
          loading="lazy"
          sizes="(min-width: 1280px) 1200px, calc(100vw - 40px)"
          src="/images/ambient-bg.webp"
        />
        <div aria-hidden="true" className="closing-background" />
        <div className="closing-glow" aria-hidden="true" />
        <h2>{site.home.closingTitle}</h2>
        <p>{site.home.closingSubline}</p>
        <Link className="button" href="/contact">
          {site.home.primaryCta}<span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
