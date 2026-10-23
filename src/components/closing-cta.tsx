import Link from "next/link";
import { site } from "@/config/site";

export function ClosingCta() {
  return (
    <section className="closing-section section-pad">
      <div className="container closing-panel">
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
