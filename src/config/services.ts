export const serviceItems = [
  {
    id: "website-development",
    title: "Website Development",
    image: "/images/service-website.webp",
    imageAlt: "Glowing layered browser windows representing website development",
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
    intro: "Updates, security and support so your site stays fast and online.",
    included: [
      "Monthly support with backups and updates",
      "Plugin and theme maintenance",
      "Hosting and domain renewal assistance",
      "Monthly analytics report",
    ],
  },
] as const;

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
