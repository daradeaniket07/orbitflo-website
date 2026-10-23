import Link from "next/link";
import Image from "next/image";
import { site } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="wordmark" href="/" aria-label={`${site.name} home`}>
          <Image
            alt="OrbitFlo"
            className="wordmark-image"
            height={site.logo.height}
            sizes="110px"
            src={site.logo.src}
            width={site.logo.width}
          />
        </Link>
        <p>{site.footer.note}</p>
        <p className="copyright">
          {site.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
        </p>
      </div>
    </footer>
  );
}
