import Image from "next/image";
import Link from "next/link";
import { business } from "@/config/business";
import { site } from "@/config/site";

function SocialIcon({ name }: { name: string }) {
  if (name === "Instagram") {
    return <svg aria-hidden="true" viewBox="0 0 24 24"><rect fill="none" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" width="17" x="3.5" y="3.5" /><circle cx="12" cy="12" fill="none" r="4" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.8" cy="6.5" r="1.1" fill="currentColor" /></svg>;
  }
  if (name === "LinkedIn") {
    return <svg aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M5.2 8.6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM3.5 10h3.4v10H3.5zm5.4 0h3.3v1.4h.1a3.6 3.6 0 0 1 3.2-1.7c3.4 0 4 2.2 4 5.1V20h-3.4v-4.6c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5V20H8.9z" /></svg>;
  }
  if (name === "Facebook") {
    return <svg aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8z" /></svg>;
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M21.6 7.1a2.5 2.5 0 0 0-1.8-1.8C18.2 4.9 12 4.9 12 4.9s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8A26 26 0 0 0 2 12a26 26 0 0 0 .4 4.9 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.9ZM10 15.2V8.8l5.5 3.2z" /></svg>;
}

export function SiteFooter() {
  const serviceAreaNote = business.whereWeWork.footerLine
    .replace("{region}", business.region)
    .replace("{country}", business.countryName);

  return (
    <footer className="site-footer" id="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="wordmark" href="/" aria-label={`${site.name} home`}>
            <Image
              alt="OrbitFlo"
              className="wordmark-image"
              height={site.logo.height}
              sizes="(max-width: 719px) 101px, 120px"
              src={site.logo.src}
              width={site.logo.width}
            />
          </Link>
          <p>{site.footer.note}</p>
          <p className="footer-service-area">{serviceAreaNote}</p>
        </div>
        <nav aria-label={site.footer.linksTitle} className="footer-column">
          <h2>{site.footer.linksTitle}</h2>
          <ul>
            {site.navigation.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="footer-column footer-contact">
          <h2>{site.footer.contactTitle}</h2>
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          <a href={`tel:${site.contact.phoneLink}`}>{site.contact.phone}</a>
          {site.socials.some(({ url }) => url) && (
            <ul aria-label={site.footer.socialsLabel} className="footer-socials">
              {site.socials.filter(({ url }) => url).map(({ name, url }) => (
                <li key={name}>
                  <a aria-label={name} href={url} rel="noopener noreferrer" target="_blank">
                    <SocialIcon name={name} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <p className="copyright">{site.footer.copyright.replace("{year}", String(new Date().getFullYear()))}</p>
      </div>
    </footer>
  );
}
