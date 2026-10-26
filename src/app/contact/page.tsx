import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/config/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(site.contactPage.metadata.title, site.contactPage.metadata.description, "/contact");

export default function ContactPage() {
  return (
    <main className="contact-page" id="main-content">
      <JsonLd data={breadcrumbSchema([
        { name: site.navigation.find(({ href }) => href === "/")?.label ?? site.name, path: "/" },
        { name: site.navigation.find(({ href }) => href === "/contact")?.label ?? site.name, path: "/contact" },
      ])} />
      <section className="contact-hero">
        <Image
          alt=""
          aria-hidden="true"
          className="contact-hero-image"
          fill
          priority
          sizes="100vw"
          src="/images/ambient-bg.webp"
        />
        <div aria-hidden="true" className="contact-hero-overlay" />
        <div className="container contact-hero-content">
          <span className="eyebrow">{site.contactPage.hero.eyebrow}</span>
          <h1>{site.contactPage.hero.title}</h1>
          <p>{site.contactPage.hero.intro}</p>
        </div>
      </section>

      <section className="contact-main section-pad">
        <div className="container contact-layout">
          <div className="contact-options">
            <a className="contact-card" href={`mailto:${site.contact.email}`}>
              <span className="contact-card-label">{site.contactPage.cards.email}</span>
              <span className="contact-card-value">{site.contact.email}</span>
              <span aria-hidden="true" className="contact-card-arrow">↗</span>
            </a>
            <a className="contact-card" href={`tel:${site.contact.phoneLink}`}>
              <span className="contact-card-label">{site.contactPage.cards.call}</span>
              <span className="contact-card-value">{site.contact.phone}</span>
              <span aria-hidden="true" className="contact-card-arrow">↗</span>
            </a>
            <a className="contact-card" href={site.contact.whatsapp} rel="noopener noreferrer" target="_blank">
              <span className="contact-card-label">{site.contactPage.cards.whatsapp}</span>
              <span className="contact-card-value">{site.contact.phone}</span>
              <span aria-hidden="true" className="contact-card-arrow">↗</span>
            </a>
            <p className="contact-response-time">{site.contactPage.cards.responseTime}</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
