import Link from "next/link";
import Image from "next/image";
import { ClosingCta } from "@/components/closing-cta";
import { ScrollReveal } from "@/components/scroll-reveal";
import { serviceItems, servicesPage } from "@/config/services";
import { site } from "@/config/site";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(servicesPage.metadata.title, servicesPage.metadata.description, "/services");

export default function ServicesPage() {
  return (
    <main className="services-page" id="main-content">
      <JsonLd data={breadcrumbSchema([
        { name: site.navigation.find(({ href }) => href === "/")?.label ?? site.name, path: "/" },
        { name: site.navigation.find(({ href }) => href === "/services")?.label ?? site.name, path: "/services" },
      ])} />
      <section className="services-page-hero">
        <div className="container">
          <ScrollReveal className="services-page-intro">
            <span className="eyebrow">{servicesPage.hero.eyebrow}</span>
            <h1>{servicesPage.hero.title}</h1>
            <p>{servicesPage.hero.intro}</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="service-details container">
        {serviceItems.map((service) => (
          <section
            aria-labelledby={`${service.id}-title`}
            className="service-detail"
            id={service.id}
            key={service.id}
            tabIndex={-1}
          >
            <ScrollReveal className="service-detail-grid">
              <div className="service-detail-image-wrap">
                <Image
                  alt={service.imageAlt}
                  className="service-detail-image"
                  height={800}
                  loading="lazy"
                  sizes="(min-width: 720px) 40vw, calc(100vw - 40px)"
                  src={service.image}
                  width={800}
                />
              </div>
              <div className="service-detail-content">
                <div className="service-detail-summary">
                  <h2 id={`${service.id}-title`}>{service.title}</h2>
                  <p>{service.intro}</p>
                </div>
                <div className="service-detail-included">
                  <h3>{servicesPage.includedLabel}</h3>
                  <ul>
                    {service.included.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <Link className="text-link service-detail-link" href={`/services/${service.id}`}>
                    {servicesPage.detailLinkLabel}<span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </section>
        ))}
      </div>

      <section aria-labelledby="service-packages-title" className="service-packages section-pad">
        <div className="container">
          <ScrollReveal className="service-packages-heading">
            <span className="eyebrow">{servicesPage.packages.eyebrow}</span>
            <h2 id="service-packages-title">{servicesPage.packages.title}</h2>
            <p>{servicesPage.packages.intro}</p>
          </ScrollReveal>
          <div className="package-grid">
            {servicesPage.packages.items.map((item) => (
              <ScrollReveal className="package-card" key={item.id}>
                <article>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.included.map((included) => <li key={included}>{included}</li>)}
                  </ul>
                  <Link className="button package-button" href={`/contact?package=${item.id}`}>
                    {servicesPage.packages.enquireLabel}<span aria-hidden="true">↗</span>
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <p className="package-note">{servicesPage.packages.note}</p>
        </div>
      </section>

      <ClosingCta />
    </main>
  );
}
