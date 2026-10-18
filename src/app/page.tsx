import type { Metadata } from "next";
import Link from "next/link";
import { OrbitVisual } from "@/components/orbit-visual";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: site.tagline,
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
};

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero-section">
        <div aria-hidden="true" className="hero-grid" />
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow"><span className="status-dot" />{site.home.eyebrow}</span>
            <h1>{site.tagline}</h1>
            <p className="hero-subline">{site.home.subline}</p>
            <div className="hero-actions">
              <Link className="button" href="/contact">
                {site.home.primaryCta}<span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link" href="/services">
                {site.home.secondaryCta}<span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <OrbitVisual />
          <span className="hero-index" aria-hidden="true">01 / ORBITFLO</span>
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">{site.home.servicesEyebrow}</span>
              <h2>{site.home.servicesTitle}</h2>
            </div>
            <p>{site.home.servicesSubline}</p>
          </div>
          <ul className="service-grid">
            {site.services.map((service, index) => (
              <li className="service-card" key={service}>
                <span className="service-number">0{index + 1}</span>
                <h3>{service}</h3>
                <span aria-hidden="true" className="service-arrow">↗</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="closing-section section-pad">
        <div className="container closing-panel">
          <div className="closing-glow" aria-hidden="true" />
          <span className="eyebrow">{site.home.closingEyebrow}</span>
          <h2>{site.home.closingTitle}</h2>
          <p>{site.home.closingSubline}</p>
          <Link className="button" href="/contact">
            {site.home.primaryCta}<span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
