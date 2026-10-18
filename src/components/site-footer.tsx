import Link from "next/link";
import { site } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="wordmark" href="/" aria-label={`${site.name} home`}>
          {site.name}<span className="wordmark-dot">.</span>
        </Link>
        <p>{site.footer.note}</p>
        <p className="copyright">
          {site.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
        </p>
      </div>
    </footer>
  );
}
