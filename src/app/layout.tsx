import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";
import { site } from "@/config/site";
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
  },
  twitter: {
    card: "summary_large_image",
    title: site.seoTitle,
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: false,
    follow: false,
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          type="application/ld+json"
        />
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
