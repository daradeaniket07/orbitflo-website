# OrbitFlo website

## Stack

- Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 4
- npm for package management
- Framer Motion for animation
- Next Font for Space Grotesk headings and Inter body text
- No additional runtime or development libraries without approval

## Structure

- `src/app/`: App Router pages, global styles, metadata routes
- `src/components/`: shared site header, footer, and visual components
- `src/config/site.ts`: central source for site identity, navigation, services, contact placeholders, and editable copy
- `public/`: static assets
- `src/app/globals.css`: design tokens, Tailwind theme mapping, and global responsive styling

## Conventions

- Keep brand colors in CSS custom properties in `src/app/globals.css`, mapped into Tailwind's theme there.
- Keep repeated site copy, navigation, contact values, and service names in `src/config/site.ts`.
- Use `[TODO]` markers for copy and contact information that has not been supplied. Do not invent client results, pricing, or contact details.
- Build reusable UI in `src/components/`; route files should stay focused on page content and metadata.
- Use semantic HTML, keyboard-visible focus, mobile-first responsive layouts, and no horizontal overflow.
- Respect `prefers-reduced-motion` for all animation.
- Add page metadata for routes and keep sitemap, robots, and Organization structured data current.
- Keep search indexing disabled during development with root metadata `robots: { index: false, follow: false }`. At launch, remove the noindex metadata and add the sitemap line to `robots.txt`.
- Prefer Next.js built-in features and avoid dependencies beyond the approved stack.

## Page roadmap

### Phase 1

- Home: initial hero, services overview, and closing CTA skeleton implemented
- Services: placeholder route implemented
- Work / Case Studies: placeholder route implemented
- About: placeholder route implemented
- Contact: placeholder route implemented; contact details and form remain pending

### Phase 2

- Process
- Industries / Solutions
- Individual service pages
- Blog

## Status

### Done

- Next.js 15, React 19, TypeScript, Tailwind, ESLint, `src/` and `@/*` scaffold
- Dark design tokens and requested fonts
- Shared responsive header, mobile navigation, and footer
- Home skeleton with config-driven services and reduced-motion-aware orbit visual
- Placeholder routes for Services, Work, About, and Contact
- Root metadata, Open Graph defaults, Organization JSON-LD, sitemap, and robots
- npm scripts for lint, type-check, build, and local development

### Pending

- Final page copy from Claude
- Real email, phone, and WhatsApp contact details
- Contact form, validation, spam protection, and email provider
- Jijau Industries and Dandeli Adventure Resorts case study content
- Full Phase 1 page designs/content, including actual Services, Work, About, and Contact pages
- Phase 2 pages
- Final social sharing image and any approved brand assets
