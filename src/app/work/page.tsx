import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/config/projects";
import { site } from "@/config/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(site.work.metadata.title, site.work.metadata.description, "/work");

export default function WorkPage() {
  return (
    <main className="work-page" id="main-content">
      <JsonLd data={breadcrumbSchema([
        { name: site.navigation.find(({ href }) => href === "/")?.label ?? site.name, path: "/" },
        { name: site.navigation.find(({ href }) => href === "/work")?.label ?? site.name, path: "/work" },
      ])} />
      <section className="services-page-hero">
        <div className="container">
          <div className="services-page-intro">
            <span className="eyebrow">{site.work.hero.eyebrow}</span>
            <h1>{site.work.hero.title}</h1>
            <p>{site.work.hero.intro}</p>
          </div>
        </div>
      </section>
      <div className="work-projects container">
        {projects.map((project, index) => <ProjectCard index={index} key={project.slug} project={project} />)}
      </div>
      <section className="work-closing section-pad">
        <div className="container work-closing-panel">
          <h2>{site.work.closingTitle}</h2>
          <Link className="button" href="/contact">
            {site.work.closingCta}<span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
