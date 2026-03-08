import { useMemo, useState } from "react";
import ProjectCard from "../../../components/ProjectCard";
import PortfolioSection from "./PortfolioSection";

export default function ProjectsHubSection({
  t,
  projectGroups,
  projectCardLabels
}) {
  const [activeGroupId, setActiveGroupId] = useState(projectGroups[0]?.id ?? "scm");

  const activeGroup = useMemo(
    () => projectGroups.find((group) => group.id === activeGroupId) ?? projectGroups[0],
    [activeGroupId, projectGroups]
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

      <section className="projects-group-panel" data-breakpoint="true">
        <div className="supporting-work-head">
          <div>
            <p>{t.supportingWorkLabel}</p>
            <strong>{t.supportingWorkSubtitle}</strong>
          </div>
          <div className="projects-console-stats">
            {projectGroups.map((group) => (
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
          <div className="supporting-work-panel">
            <div className="project-group-head">
              <h3>{activeGroup?.label}</h3>
              <p>{activeGroup?.subtitle}</p>
            </div>

            <div className="project-grid project-grid--full">
              {activeGroup.projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  labels={projectCardLabels}
                  collapsible={false}
                  collapsed={false}
                />
              ))}
            </div>
          </div>
        ) : (
          <p className="empty-state">{t.projectEmpty}</p>
        )}
      </section>
    </PortfolioSection>
  );
}
