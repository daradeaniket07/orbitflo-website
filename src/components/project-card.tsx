import Image from "next/image";
import type { Project } from "@/config/projects";
import { site } from "@/config/site";

type ProjectCardProps = {
  project: Project;
  variant?: "teaser" | "case-study";
  index?: number;
};

function ProjectArtwork({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (project.image) {
    return (
      <Image
        alt={`${project.name} website project`}
        className="project-art-image"
        fill
        sizes={compact ? "(min-width: 1024px) 40vw, 100vw" : "(min-width: 720px) 40vw, 100vw"}
        src={project.image}
      />
    );
  }

  return (
    <span aria-hidden="true" className="project-art-initials">
      {project.name.split(/\s+/).map((word) => word[0]).slice(0, 2).join("")}
    </span>
  );
}

export function ProjectCard({ project, variant = "case-study", index = 0 }: ProjectCardProps) {
  if (variant === "teaser") {
    return (
      <article className="project-teaser">
        <div className="project-teaser-art">
          <ProjectArtwork compact project={project} />
        </div>
        <div className="project-teaser-copy">
          <span className="project-tag">{project.tag}</span>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      </article>
    );
  }

  return (
    <article className={`project-detail${index % 2 === 1 ? " is-reversed" : ""}`}>
      <div className="project-detail-grid">
        <div className="project-art">
          <ProjectArtwork project={project} />
        </div>
        <div className="project-detail-content">
          <span className="project-sector">{project.sector}</span>
          <h2>{project.name}</h2>
          <span className="project-tag">{project.tag}</span>
          <p className="project-description">{project.description}</p>
          {project.challenge && <p className="project-detail-block"><strong>{site.work.detailLabels.challenge}</strong>{project.challenge}</p>}
          {project.solution && <p className="project-detail-block"><strong>{site.work.detailLabels.solution}</strong>{project.solution}</p>}
          {project.results && <p className="project-detail-block"><strong>{site.work.detailLabels.results}</strong>{project.results}</p>}
          {project.url && (
            <a className="button project-visit" href={project.url} rel="noopener noreferrer" target="_blank">
              {site.work.visitLabel}<span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
