import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClosingCta } from "@/components/closing-cta";
import { JsonLd } from "@/components/json-ld";
import { getServiceById, serviceDetails, servicesPage } from "@/config/services";
import { site } from "@/config/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

type ServicePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceDetails.map(({ id }) => ({ slug: id }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceById(slug);
  if (!service) return pageMetadata(`${site.name} service`, site.description, "/services");
  return pageMetadata(service.metadata.title, service.metadata.description, `/services/${service.id}`);
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceById(slug);
  if (!service) notFound();

  const crumbs = [
    { name: site.navigation.find(({ href }) => href === "/")?.label ?? site.name, path: "/" },
    { name: site.navigation.find(({ href }) => href === "/services")?.label ?? site.name, path: "/services" },
    { name: service.title, path: `/services/${service.id}` },
  ];
  const related = service.related.map((id) => getServiceById(id)).filter((item) => item !== undefined);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.intro,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: { "@type": "Country", name: "India" },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <main className="service-page" id="main-content">
      <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema(crumbs)]} />
      <section className="services-page-hero">
        <div className="container">
          <nav aria-label={servicesPage.breadcrumbLabel} className="breadcrumbs">
            <ol>
              <li><Link href="/">{crumbs[0].name}</Link></li>
              <li><Link href="/services">{crumbs[1].name}</Link></li>
              <li aria-current="page">{service.title}</li>
            </ol>
          </nav>
          <div className="services-page-intro">
            <span className="eyebrow">{service.title}</span>
            <h1>{service.h1}</h1>
            <p>{service.intro}</p>
          </div>
        </div>
      </section>

      <section className="service-page-details section-pad">
        <div className="container service-page-grid">
          <div className="service-page-art">
            <Image alt={service.imageAlt} fill loading="lazy" sizes="(min-width: 900px) 40vw, 100vw" src={service.image} />
          </div>
          <div className="service-page-content">
            <section aria-labelledby="service-included-title">
              <h2 id="service-included-title">{servicesPage.includedLabel}</h2>
              <ul className="service-page-list">
                {service.included.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
            <p className="service-who"><strong>{servicesPage.whoLabel}</strong>{service.who}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="service-faq-title" className="service-faq-section section-pad">
        <div className="container service-faq-content">
          <span className="eyebrow">{service.title}</span>
          <h2 id="service-faq-title">{servicesPage.faqTitle}</h2>
          <dl className="service-faq-list">
            {service.faqs.map(({ question, answer }) => (
              <div className="service-faq-item" key={question}>
                <dt>{question}</dt>
                <dd>{answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="related-services-title" className="related-services-section section-pad">
        <div className="container">
          <h2 id="related-services-title">{servicesPage.relatedTitle}</h2>
          <ul className="related-services-list">
            {related.map((item) => (
              <li key={item.id}><Link className="related-service-link" href={`/services/${item.id}`}>{item.title}<span aria-hidden="true">↗</span></Link></li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCta />
    </main>
  );
}
