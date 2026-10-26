import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ClosingCta } from "@/components/closing-cta";
import { JsonLd } from "@/components/json-ld";
import { founder } from "@/config/founder";
import { site } from "@/config/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  site.about.metadata.title,
  site.about.metadata.description,
  "/about",
);

const personSchema = founder.name
  ? {
      "@context": "https://schema.org",
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.role,
      worksFor: { "@type": "Organization", name: site.name, url: site.url },
    }
  : undefined;

export default function AboutPage() {
  const heroTitle = founder.name
    ? site.about.hero.namedTitle.replace("{name}", founder.name)
    : site.about.hero.title;

  return (
    <main className="about-page" id="main-content">
      <JsonLd data={[
        breadcrumbSchema([
          { name: site.navigation.find(({ href }) => href === "/")?.label ?? site.name, path: "/" },
          { name: site.navigation.find(({ href }) => href === "/about")?.label ?? site.name, path: "/about" },
        ]),
        ...(personSchema ? [personSchema] : []),
      ]} />
      <section className="services-page-hero">
        <div className="container">
          <div className="services-page-intro">
            <span className="eyebrow">{site.about.hero.eyebrow}</span>
            <h1>{heroTitle}</h1>
            <p>{site.about.hero.intro}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="about-founder-title" className="about-founder-section section-pad">
        <div className="container about-founder-grid">
          <div className="about-founder-visual">
            {founder.photo ? (
              <div className="about-photo-frame">
                <Image alt={founder.name ? `${founder.name}, ${founder.role}` : `${site.name} founder`} className="about-founder-photo" fill sizes="(min-width: 900px) 40vw, 100vw" src={founder.photo} />
              </div>
            ) : (
              <div className="about-mark-tile">
                <Image alt={founder.markAlt} height={512} sizes="(min-width: 900px) 40vw, 100vw" src={founder.mark} width={512} />
              </div>
            )}
            {founder.name && <p className="about-founder-caption">{founder.name}, {founder.role}</p>}
          </div>
          <div className="about-founder-copy">
            <span className="eyebrow">{site.name}</span>
            <h2 id="about-founder-title">{site.about.founder.title}</h2>
            {site.about.founder.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section aria-labelledby="about-expectations-title" className="about-expectations-section section-pad">
        <div className="container">
          <div className="about-section-heading">
            <span className="eyebrow">{site.name}</span>
            <h2 id="about-expectations-title">{site.about.expectations.title}</h2>
          </div>
          <ul className="about-expectations-grid">
            {site.about.expectations.items.map((item, index) => (
              <li className="about-expectation-card" key={item.title}>
                <span className="about-card-number">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="about-work-title" className="about-work-section section-pad">
        <div className="container about-two-column">
          <h2 id="about-work-title">{site.about.work.title}</h2>
          <div>
            <p>{site.about.work.description}</p>
            <Link className="button" href="/work">{site.about.work.link}<span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="about-name-title" className="about-name-section section-pad">
        <div className="container about-name-panel">
          <span className="eyebrow">{site.name}</span>
          <h2 id="about-name-title">{site.about.name.title}</h2>
          <p>{site.about.name.description}</p>
        </div>
      </section>

      <ClosingCta title={site.about.closing.title} description={site.about.closing.description} label={site.about.closing.link} />
    </main>
  );
}
