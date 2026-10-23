import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

export function SiteFooter() {
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
        </div>
        <p className="copyright">{site.footer.copyright.replace("{year}", String(new Date().getFullYear()))}</p>
      </div>
    </footer>
  );
}
