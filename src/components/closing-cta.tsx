import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";

type ClosingCtaProps = {
  title?: string;
  description?: string;
  label?: string;
};

export function ClosingCta({ title = site.home.closingTitle, description = site.home.closingSubline, label = site.home.primaryCta }: ClosingCtaProps) {
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
        <h2>{title}</h2>
        <p>{description}</p>
        <Link className="button" href="/contact">
          {label}<span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
