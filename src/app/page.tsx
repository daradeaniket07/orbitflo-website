import Link from "next/link";
import Image from "next/image";
import { ClosingCta } from "@/components/closing-cta";
import { OrbitVisual } from "@/components/orbit-visual";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/config/projects";
import { serviceItems } from "@/config/services";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(site.seoTitle, site.description, "/");

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero-section">
        <div aria-hidden="true" className="hero-grid" />
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow"><span className="status-dot" />{site.home.eyebrow}</span>
            <h1>
              <span className="hero-title-line">We Don&apos;t Just Build</span>{" "}
              <span className="hero-title-line">Websites&nbsp;—&nbsp;We Build</span>{" "}
              <span className="hero-title-line">Digital Ecosystems.</span>
            </h1>
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
            {serviceItems.map((service, index) => (
              <li key={service.id}>
                <Link className="service-card" href={`/services/${service.id}`}>
                  <Image
                    alt={service.imageAlt}
                    className="service-card-image"
                    height={800}
                    loading="lazy"
                    sizes="184px"
                    src={service.image}
                    width={800}
                  />
                  <span className="service-number">0{index + 1}</span>
                  <div className="service-card-copy">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <span aria-hidden="true" className="service-arrow">↗</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="service-note">{site.home.servicesClosingLine}</p>
        </div>
      </section>

      <section aria-labelledby="recent-work-title" className="home-work-section section-pad">
        <div className="container">
          <div className="home-work-heading">
            <span className="eyebrow">{site.home.workEyebrow}</span>
            <h2 id="recent-work-title">{site.home.workTitle}</h2>
          </div>
          <div className="project-teaser-grid">
            {projects.map((project) => <ProjectCard key={project.slug} project={project} variant="teaser" />)}
          </div>
          <Link className="text-link home-work-link" href="/work">
            {site.home.workLink}<span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section aria-labelledby="process-title" className="process-section section-pad">
        <div className="container">
          <div className="home-work-heading">
            <span className="eyebrow">{site.home.processEyebrow}</span>
            <h2 id="process-title">{site.home.processTitle}</h2>
          </div>
          <ol className="process-steps">
            {site.home.processSteps.map((step) => (
              <li className="process-step" key={step.number}>
                <span className="process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ClosingCta />
    </main>
  );
}
