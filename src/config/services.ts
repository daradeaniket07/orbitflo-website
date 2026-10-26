export const serviceItems = [
  {
    id: "website-development",
    title: "Website Development",
    image: "/images/service-website.webp",
    imageAlt: "Glowing layered browser windows representing website development",
    description: "Fast, modern websites designed to turn visitors into enquiries.",
    intro: "Websites built to look credible and bring in enquiries.",
    included: [
      "Business and portfolio websites",
      "5-page websites for small businesses",
      "E-commerce stores",
      "Landing pages for ads and events",
      "Website redesigns and revamps",
    ],
  },
  {
    id: "ads",
    title: "Ads",
    image: "/images/service-ads.webp",
    imageAlt: "Blue orbital rings and planets representing connected ad campaigns",
    description: "Targeted campaigns that put your offer in front of the right people.",
    intro: "Paid campaigns set up and managed to reach the right customers.",
    included: [
      "Instagram and Facebook ads setup",
      "Google Ads (Search and Display) setup",
      "YouTube ads setup",
      "Monthly campaign management",
      "Regular performance reporting",
    ],
  },
  {
    id: "social-media",
    title: "Social Media",
    image: "/images/service-social.webp",
    imageAlt: "A network of glowing blue planets representing social connections",
    description: "Consistent, on-brand content that keeps your audience engaged.",
    intro: "Consistent, on-brand content that keeps your business visible.",
    included: [
      "Basic: 8-12 posts with captions each month",
      "Standard: 15-20 posts, reels and audience engagement",
      "Premium: daily posting with advanced reels",
    ],
  },
  {
    id: "branding-content",
    title: "Branding & Content",
    image: "/images/service-branding.webp",
    imageAlt: "Translucent blue spheres forming an abstract visual identity",
    description: "Logos, visuals and messaging that make your business look and sound credible.",
    intro: "Visuals and words that make your business look and sound credible.",
    included: [
      "Logo and brand kit",
      "Business card and brochure design",
      "Website content (About, Services and other pages)",
      "SEO-friendly blog writing",
      "Product descriptions",
      "Copywriting for ads and landing pages",
    ],
  },
  {
    id: "seo-analytics",
    title: "SEO & Analytics",
    image: "/images/service-seo.webp",
    imageAlt: "A rising blue analytics chart representing search growth",
    description: "Be found on Google, and see exactly what's working.",
    intro: "Get found on Google, and see exactly what's working.",
    included: [
      "On-page SEO",
      "Local SEO and Google Business Profile setup",
      "Off-page SEO and backlink building",
      "SEO audit report",
      "Google Analytics and Search Console setup",
    ],
  },
  {
    id: "tech-maintenance",
    title: "Tech Maintenance",
    image: "/images/service-maintenance.webp",
    imageAlt: "A blue shield and gears representing website security and maintenance",
    description: "Updates, security and support so your site stays fast and online.",
    intro: "Updates, security and support so your site stays fast and online.",
    included: [
      "Monthly support with backups and updates",
      "Plugin and theme maintenance",
      "Hosting and domain renewal assistance",
      "Monthly analytics report",
    ],
  },
] as const;

export const serviceDetails = [
  {
    id: "website-development",
    h1: "Website development for small and mid-sized businesses",
    intro: "A fast, mobile-ready website that explains what you do, builds trust and makes it easy for customers to contact you. We build business and portfolio sites, small-business sites, e-commerce stores, landing pages and redesigns.",
    metadata: {
      title: "Website Development for Small Businesses | OrbitFlo",
      description: "Fast, mobile-ready websites that explain your business, build trust and make it easy for customers to get in touch.",
    },
    who: "Best for businesses launching a first website, or replacing one that looks dated or loads slowly.",
    faqs: [
      { question: "What types of websites do you build?", answer: "Business and portfolio websites, 5-page small-business sites, e-commerce stores, landing pages for ads and events, and redesigns of existing sites." },
      { question: "Will my website work on mobile?", answer: "Yes. Every site is designed mobile-first and built to work on phones, tablets and desktops." },
    ],
    related: ["branding-content", "seo-analytics"],
  },
  {
    id: "ads",
    h1: "Ads management for Google, Instagram, Facebook and YouTube",
    intro: "Paid campaigns set up and managed to put your offer in front of the right people, with regular reporting so you can see what's working.",
    metadata: {
      title: "Ads Management for Google, Instagram and Facebook | OrbitFlo",
      description: "Paid campaigns for Google, Instagram, Facebook and YouTube, managed with regular reporting on what's working.",
    },
    who: "Best for businesses that already have a website or landing page and want more enquiries.",
    faqs: [
      { question: "Which ad platforms do you work with?", answer: "Google Ads (Search and Display), Instagram, Facebook and YouTube." },
      { question: "Do I get reports?", answer: "Yes. Performance reporting is part of campaign management, so you can see what's working." },
    ],
    related: ["website-development", "social-media"],
  },
  {
    id: "social-media",
    h1: "Social media management for businesses",
    intro: "Consistent, on-brand posts, captions and reels that keep your business visible and your audience engaged.",
    metadata: {
      title: "Social Media Management for Businesses | OrbitFlo",
      description: "Consistent, on-brand social media posts, captions and reels to keep your business visible and audience engaged.",
    },
    who: "Best for businesses that want a steady social presence without managing it day to day.",
    faqs: [
      { question: "What do the plans include?", answer: "Basic covers 8-12 posts with captions a month. Standard covers 15-20 posts, reels and audience engagement. Premium adds daily posting and advanced reels." },
      { question: "Can you manage my existing accounts?", answer: "Yes. We can work with your existing pages or help set up new ones." },
    ],
    related: ["branding-content", "ads"],
  },
  {
    id: "branding-content",
    h1: "Branding, logo design and content writing",
    intro: "Logos, brand kits, print designs and written content that make your business look and sound credible across your website, social media and ads.",
    metadata: {
      title: "Branding, Logo Design and Content Writing | OrbitFlo",
      description: "Logos, brand kits, print design and written content for a credible, consistent presence across your website, social media and ads.",
    },
    who: "Best for new businesses, or established ones whose branding feels inconsistent or outdated.",
    faqs: [
      { question: "What is a brand kit?", answer: "A set of your logo, colors and fonts, so everything you publish looks consistent." },
      { question: "Do you write website and blog content?", answer: "Yes: website pages, SEO-friendly blogs, product descriptions and ad copy." },
    ],
    related: ["website-development", "social-media"],
  },
  {
    id: "seo-analytics",
    h1: "SEO and analytics services",
    intro: "On-page and local SEO, backlink building, audits and analytics setup, so more of the right people find your business on Google and you can see what's working.",
    metadata: {
      title: "SEO and Analytics Services | OrbitFlo",
      description: "On-page and local SEO, backlink building, audits and analytics setup to help the right people find your business.",
    },
    who: "Best for businesses with a website that isn't getting found, or that can't tell where their visitors come from.",
    faqs: [
      { question: "How long does SEO take to work?", answer: "SEO is gradual. Results depend on your competition and starting point, and we don't promise rankings." },
      { question: "Do you set up Google Business Profile?", answer: "Yes. Local SEO includes Google Business Profile setup, along with Analytics and Search Console." },
    ],
    related: ["website-development", "tech-maintenance"],
  },
  {
    id: "tech-maintenance",
    h1: "Website maintenance and support",
    intro: "Backups, updates, plugin and theme maintenance and hosting or domain renewal help, so your site stays fast, secure and online.",
    metadata: {
      title: "Website Maintenance and Support | OrbitFlo",
      description: "Website backups, updates, plugin and theme maintenance, and hosting or domain renewal assistance.",
    },
    who: "Best for businesses that don't want to worry about the technical side after launch.",
    faqs: [
      { question: "What does monthly support include?", answer: "Backups, updates, plugin and theme maintenance, and a monthly analytics report." },
      { question: "Can you maintain a site you didn't build?", answer: "In many cases, yes. Get in touch with your site details and we'll confirm." },
    ],
    related: ["website-development", "seo-analytics"],
  },
] as const;

export type ServiceDetail = (typeof serviceDetails)[number];

export function getServiceById(id: string) {
  const service = serviceItems.find((item) => item.id === id);
  const details = serviceDetails.find((item) => item.id === id);
  return service && details ? { ...service, ...details } : undefined;
}

export const servicesPage = {
  metadata: {
    title: "Services | OrbitFlo",
    description: "Website development, ads, social media, branding, SEO and tech maintenance from one digital studio. Tell us what you need and we'll shape the plan.",
  },
  hero: {
    eyebrow: "Services",
    title: "Everything your business needs to grow online.",
    intro: "Websites, marketing, content and support from one studio, built to work together. Tell us what you need and we'll shape the right plan.",
  },
  includedLabel: "What's included",
  detailLinkLabel: "Explore this service",
  breadcrumbLabel: "Breadcrumb",
  whoLabel: "Who it's for",
  faqTitle: "Frequently asked questions",
  relatedTitle: "Related services",
  packages: {
    eyebrow: "Packages",
    title: "Bundles for small businesses.",
    intro: "Ready-made combinations to get you started. Every package can be tailored to your business.",
    enquireLabel: "Enquire about this package",
    note: "Need something different? We'll put together a plan around your goals.",
    items: [
      {
        id: "starter",
        title: "Starter",
        included: [
          "5-page website",
          "Logo and brand kit",
          "One month of basic social media (8 posts)",
        ],
      },
      {
        id: "business-growth",
        title: "Business Growth",
        included: [
          "Website revamp",
          "On-page SEO",
          "Google Business Profile setup",
          "Basic social media management",
        ],
      },
      {
        id: "ecommerce-launch",
        title: "E-Commerce Launch",
        included: [
          "E-commerce website",
          "Product descriptions (up to 50)",
          "Basic SEO",
        ],
      },
    ],
  },
} as const;
