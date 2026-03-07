import { useMemo, useState } from "react";
import ProjectCard from "../../../components/ProjectCard";
import PortfolioSection from "./PortfolioSection";

export default function ProjectsHubSection({
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

  const workProjectTotal = workScmProjects.length + workQaProjects.length;
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

  const renderGroup = (title, subtitle, projects) => (
    <section className="project-group-card" data-breakpoint="true">
      <div className="project-group-head">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      {projects.length ? renderProjectCards(projects, "project-grid") : <p className="empty-state">{t.projectEmpty}</p>}
    </section>
  );

  return (
    <PortfolioSection
      id="projects"
      label={t.projectsLabel}
      title={t.projectsTitle}
      subtitle={t.projectsSubtitle}
      className="portfolio-projects"
    >
      <div className="projects-summary-grid">
        <article className="home-stat-card">
          <span>{t.featuredHead}</span>
          <strong>{featuredProjects.length}</strong>
        </article>
        <article className="home-stat-card">
          <span>{t.workHead}</span>
          <strong>{workProjectTotal}</strong>
        </article>
        <article className="home-stat-card">
          <span>{t.teamHead}</span>
          <strong>{teamProjects.length}</strong>
        </article>
      </div>

      <div className="project-showcase-grid">
        {featuredProjects.map((project) => (
          <article key={project.id} className="featured-project-card" data-breakpoint="true">
            <div className="featured-project-top">
              <span>{project.kind}</span>
              <strong>{project.period}</strong>
            </div>
            <h3>{project.name}</h3>
            <p>{project.contributions[0]}</p>
            <div className="featured-project-metrics">
              {(project.metrics ?? []).slice(0, 2).map((metric) => (
                <div key={`${project.id}-${metric.label}`}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="project-hub-grid">
        {renderGroup(t.scmHead, t.scmSub, filteredWorkScmProjects)}
        {renderGroup(t.qaHead, t.qaSub, workQaProjects)}
      </div>

      {renderGroup(t.teamHead, t.teamSub, teamProjects)}
    </PortfolioSection>
  );
}
