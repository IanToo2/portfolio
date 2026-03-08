import { useMemo, useState } from "react";
import PortfolioSection from "./PortfolioSection";

export default function ProjectsHubSection({
  t,
  primaryCaseStudies,
  supportingProjectGroups
}) {
  const [activeGroupId, setActiveGroupId] = useState(supportingProjectGroups[0]?.id ?? "scm");

  const activeGroup = useMemo(
    () => supportingProjectGroups.find((group) => group.id === activeGroupId) ?? supportingProjectGroups[0],
    [activeGroupId, supportingProjectGroups]
  );

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
      </div>

      <div className="project-case-list">
        {primaryCaseStudies.map((project) => (
          <article key={project.id} className="case-study-card case-study-card--narrative" data-breakpoint="true">
            <div className="case-study-top">
              <span>{project.kind}</span>
              <strong>{project.period}</strong>
            </div>

            <div className="case-study-heading">
              <h3>{project.name}</h3>
              <p>{project.scope.join(" / ")}</p>
            </div>

            <div className="case-story-flow">
              <p>
                <strong>{t.caseProblemLabel}</strong>
                <span>{project.problem}</span>
              </p>
              <p>
                <strong>{t.caseRoleLabel}</strong>
                <span>{project.roleSummary}</span>
              </p>
              <p>
                <strong>{t.caseImpactLabel}</strong>
                <span>{project.impactSummary}</span>
              </p>
            </div>

            <div className="case-study-meta-strip">
              {project.metricPreview.map((metric) => (
                <div key={`${project.id}-${metric.label}`}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </div>
              ))}
            </div>
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

        {activeGroup?.projects?.length ? (
          <div className="supporting-work-panel supporting-work-panel--condensed">
            <div className="project-group-head">
              <h3>{activeGroup?.label}</h3>
              <p>{activeGroup?.subtitle}</p>
            </div>

            <ul className="supporting-project-list">
              {activeGroup.projects.map((project) => (
                <li key={project.id} className="supporting-project-row">
                  <div className="supporting-project-main">
                    <strong>{project.name}</strong>
                    <span>{project.period} · {project.kind}</span>
                  </div>
                  <p>{project.contributions?.[0] ?? project.scope.join(" / ")}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="empty-state">{t.projectEmpty}</p>
        )}
      </section>
    </PortfolioSection>
  );
}
