import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/config/projects";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: site.work.metadata.title },
  description: site.work.metadata.description,
  alternates: { canonical: `${site.url}/work` },
  openGraph: {
    title: site.work.metadata.title,
    description: site.work.metadata.description,
    url: `${site.url}/work`,
  },
};

export default function WorkPage() {
  return (
    <main className="work-page" id="main-content">
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
