import { useMemo, useState } from "react";
import ProjectCard from "../../../components/ProjectCard";
import TechPillList from "../../../components/TechPillList";
import PortfolioSection from "./PortfolioSection";

export default function ProjectsHubSection({
  t,
  primaryCaseStudies,
  supportingProjectGroups,
  projectCardLabels
}) {
  const [activeGroupId, setActiveGroupId] = useState(supportingProjectGroups[0]?.id ?? "scm");
  const [isSupportingOpen, setIsSupportingOpen] = useState(true);
  const [collapsedProjects, setCollapsedProjects] = useState({});
  const [collapsedCaseStudies, setCollapsedCaseStudies] = useState({});

  const activeGroup = useMemo(
    () => supportingProjectGroups.find((group) => group.id === activeGroupId) ?? supportingProjectGroups[0],
    [activeGroupId, supportingProjectGroups]
  );

  const getProjectKey = (project) => project.id ?? `${project.name}|${project.period}`;
  const isProjectCollapsed = (project) => collapsedProjects[getProjectKey(project)] !== false;
  const toggleProjectCollapse = (project) => {
    const key = getProjectKey(project);
    setCollapsedProjects((prev) => ({ ...prev, [key]: !(prev[key] !== false) }));
  };
  const isCaseStudyCollapsed = (project) => collapsedCaseStudies[getProjectKey(project)] !== false;
  const toggleCaseStudyCollapse = (project) => {
    const key = getProjectKey(project);
    setCollapsedCaseStudies((prev) => ({ ...prev, [key]: !(prev[key] !== false) }));
  };

  return (
    <PortfolioSection
      id="projects"
      label={t.projectsLabel}
      title={t.projectsTitle}
      subtitle={t.projectsSubtitle}
      className="portfolio-projects"
    >
      <div className="projects-console-bar" data-breakpoint="true">
        <div className="projects-console-copy">
          <p>{t.projectsConsoleLabel}</p>
          <strong>{t.projectsConsoleSummary}</strong>
        </div>
        <button
          type="button"
          className="ui-btn ui-btn-soft"
          onClick={() => setIsSupportingOpen((prev) => !prev)}
        >
          {isSupportingOpen ? t.supportingWorkHide : t.supportingWorkShow}
        </button>
      </div>

      <div className="project-case-grid">
        {primaryCaseStudies.map((project) => (
          <article key={project.id} className="case-study-card" data-breakpoint="true">
            <div className="case-study-top">
              <span>{project.kind}</span>
              <strong>{project.period}</strong>
            </div>

            <div className="case-study-heading">
              <h3>{project.name}</h3>
              <p>{project.scope.join(" / ")}</p>
            </div>

            <div className="case-study-story">
              <div>
                <p>{t.caseProblemLabel}</p>
                <strong>{project.problem}</strong>
              </div>
              <div>
                <p>{t.caseRoleLabel}</p>
                <strong>{project.roleSummary}</strong>
              </div>
              <div>
                <p>{t.caseImpactLabel}</p>
                <strong>{project.impactSummary}</strong>
              </div>
            </div>

            <TechPillList items={project.techPreview} className="featured-project-tags" />

            <div className="featured-project-metrics">
              {project.metricPreview.map((metric) => (
                <div key={`${project.id}-${metric.label}`}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </div>
              ))}
            </div>

            {project.hasHiddenDetails ? (
              <>
                <div
                  id={`case-study-details-${project.id}`}
                  className="case-study-details"
                  hidden={isCaseStudyCollapsed(project)}
                >
                  <ProjectCard
                    project={project}
                    labels={projectCardLabels}
                    collapsible={false}
                    collapsed={false}
                  />
                </div>
                <button
                  type="button"
                  className="ui-btn ui-btn-ghost project-collapse-btn"
                  aria-expanded={!isCaseStudyCollapsed(project)}
                  aria-controls={`case-study-details-${project.id}`}
                  onClick={() => toggleCaseStudyCollapse(project)}
                >
                  {isCaseStudyCollapsed(project) ? projectCardLabels.expandLabel : projectCardLabels.collapseLabel}
                </button>
              </>
            ) : null}
          </article>
        ))}
      </div>

      <section className="supporting-work-card" data-breakpoint="true">
        <div className="supporting-work-head">
          <div>
            <p>{t.supportingWorkLabel}</p>
            <strong>{t.supportingWorkSubtitle}</strong>
          </div>
          <div className="projects-console-stats">
            {supportingProjectGroups.map((group) => (
              <button
                key={group.id}
                type="button"
                className={`supporting-work-tab ${activeGroup?.id === group.id ? "is-active" : ""}`}
                onClick={() => setActiveGroupId(group.id)}
              >
                {group.label} <strong>{group.count}</strong>
              </button>
            ))}
          </div>
        </div>

        {isSupportingOpen ? (
          <div className="supporting-work-panel">
            <div className="project-group-head">
              <h3>{activeGroup?.label}</h3>
              <p>{activeGroup?.subtitle}</p>
            </div>

            {activeGroup?.projects?.length ? (
              <div className="project-grid">
                {activeGroup.projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    labels={projectCardLabels}
                    collapsible={true}
                    collapsed={isProjectCollapsed(project)}
                    onToggleCollapse={() => toggleProjectCollapse(project)}
                  />
                ))}
              </div>
            ) : (
              <p className="empty-state">{t.projectEmpty}</p>
            )}
          </div>
        ) : (
          <p className="supporting-work-collapsed">{t.supportingWorkCollapsed}</p>
        )}
      </section>
    </PortfolioSection>
  );
}
