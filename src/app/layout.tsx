import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";
import { site } from "@/config/site";
import { indexingAllowed } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seoTitle,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.seoTitle,
    description: site.description,
    url: site.url,
    locale: "en_IN",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seoTitle,
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: { index: indexingAllowed, follow: indexingAllowed },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: new URL(site.logo.src, site.url).toString(),
  email: site.contact.email,
  telephone: site.contact.phone,
  description: site.description,
  sameAs: site.socials.flatMap(({ url }) => url ? [url] : []),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
};

const businessSchema = site.business.city
  ? {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: site.name,
      url: site.url,
      areaServed: { "@type": "Country", name: "India" },
      address: {
        "@type": "PostalAddress",
        addressLocality: site.business.city,
        ...(site.business.region ? { addressRegion: site.business.region } : {}),
        addressCountry: site.business.country,
      },
    }
  : undefined;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        <JsonLd data={[organizationSchema, websiteSchema, ...(businessSchema ? [businessSchema] : [])]} />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              id="google-analytics-loader"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics-config" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`}
            </Script>
          </>
        )}
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
