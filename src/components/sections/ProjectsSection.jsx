import { useMemo, useState } from "react";
import ProjectCard from "../ProjectCard";
import SectionShell from "../SectionShell";

export default function ProjectsSection({
  t,
  featuredProjects,
  workScmProjects,
  workQaProjects,
  teamProjects,
  projectCardLabels,
  isMobile
}) {
  const [collapsedProjects, setCollapsedProjects] = useState({});
  const filteredWorkScmProjects = useMemo(() => {
    const featuredProjectIds = new Set(featuredProjects.map((project) => project.id));
    return workScmProjects.filter((project) => !featuredProjectIds.has(project.id));
  }, [featuredProjects, workScmProjects]);
  const workScmProjectTotal = workScmProjects.length;
  const workProjectTotal = workScmProjectTotal + workQaProjects.length;

  const getProjectKey = (project) => project.id ?? `${project.name}|${project.period}`;
  const isProjectCollapsed = (project) => (isMobile ? collapsedProjects[getProjectKey(project)] !== false : false);
  const toggleProjectCollapse = (project) => {
    const key = getProjectKey(project);
    setCollapsedProjects((prev) => ({ ...prev, [key]: !(prev[key] !== false) }));
  };

  const renderProjectCards = (projects, className) => (
    <div className={className}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          labels={projectCardLabels}
          collapsible={isMobile}
          collapsed={isProjectCollapsed(project)}
          onToggleCollapse={() => toggleProjectCollapse(project)}
        />
      ))}
    </div>
  );

  const renderProjectGroup = ({ title, subtitle, projects }) => (
    <section className="project-module">
      <div className="project-subhead">
        <h3>{title}</h3>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      {projects.length ? (
        renderProjectCards(projects, "project-grid")
      ) : (
        <p className="empty-state ui-card ui-card--muted">{t.projectEmpty}</p>
      )}
    </section>
  );

  return (
    <SectionShell
      id="projects"
      toneClass="section-projects"
      revealClass="d4"
      head={{
        label: t.projectsLabel,
        title: t.projectsTitle,
        subtitle: t.projectsSubtitle,
        icon: "box"
      }}
    >
      <div className="projects-home-overview" aria-label={t.projectsLabel}>
        <article className="projects-home-stat ui-card ui-card--muted">
          <span>{t.featuredHead}</span>
          <strong>{featuredProjects.length}</strong>
        </article>
        <article className="projects-home-stat ui-card ui-card--muted">
          <span>{t.workHead}</span>
          <strong>{workProjectTotal}</strong>
        </article>
        <article className="projects-home-stat ui-card ui-card--muted">
          <span>{t.teamHead}</span>
          <strong>{teamProjects.length}</strong>
        </article>
      </div>
      <div className="featured-head">
        <div>
          <h3>{t.featuredHead}</h3>
          <p>{t.featuredSub}</p>
        </div>
      </div>
      {featuredProjects.length ? (
        renderProjectCards(featuredProjects, "featured-grid")
      ) : (
        <p className="empty-state ui-card ui-card--muted">{t.projectEmpty}</p>
      )}

      <div className="work-project-shell ui-card ui-card--strong">
        <div className="project-subhead project-group-head">
          <h3>{t.workHead}</h3>
          <p>{t.workSub}</p>
        </div>
        <div className="work-project-overview" aria-label={t.workHead}>
          <span className="work-project-pill total">
            {t.workHead}
            <strong>{workProjectTotal}</strong>
          </span>
          <span className="work-project-pill">
            {t.scmHead}
            <strong>{workScmProjectTotal}</strong>
          </span>
          <span className="work-project-pill">
            {t.qaHead}
            <strong>{workQaProjects.length}</strong>
          </span>
        </div>
        <div className="work-project-shell-body project-module-grid">
          {renderProjectGroup({
            title: t.scmHead,
            subtitle: t.scmSub,
            projects: filteredWorkScmProjects
          })}
          {renderProjectGroup({
            title: t.qaHead,
            subtitle: t.qaSub,
            projects: workQaProjects
          })}
        </div>
      </div>
      {renderProjectGroup({
        title: t.teamHead,
        subtitle: t.teamSub,
        projects: teamProjects
      })}
    </SectionShell>
  );
}
