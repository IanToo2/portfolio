const DEFAULT_LABELS = {
  projectTypeLabel: "Project Type",
  scopeLabel: "Scope",
  technologiesLabel: "Tech Stack",
  contributionsLabel: "Key Contributions",
  statusDone: "Completed",
  statusPending: "In Progress",
  collapseLabel: "Collapse",
  expandLabel: "Expand"
};

export default function ProjectCard({
  project,
  labels = DEFAULT_LABELS,
  collapsible = false,
  collapsed = false,
  onToggleCollapse
}) {
  const collapseLabel = labels.collapseLabel ?? "Collapse";
  const expandLabel = labels.expandLabel ?? "Expand";

  return (
    <article className={`project-card panel ${collapsible ? "is-collapsible" : ""} ${collapsed ? "is-collapsed" : ""}`}>
      <div className="project-top">
        <strong>{project.name}</strong>
        <span>{project.period}</span>
      </div>
      <div className="project-meta">
        <p className="project-kind">
          {labels.projectTypeLabel}: {project.kind}
        </p>
        <p className="project-kind">
          {labels.scopeLabel}: {project.scope.join(" / ")}
        </p>
      </div>
      {!collapsed ? (
        <>
          <ul className="project-tech" aria-label={labels.technologiesLabel}>
            {project.tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <p className="project-contrib-title">{labels.contributionsLabel}</p>
          <ul className="project-contrib">
            {project.contributions.map((contribution) => (
              <li key={contribution}>{contribution}</li>
            ))}
          </ul>
        </>
      ) : null}
      <div className="project-status-wrap">
        <span className={`project-status ${project.isPending ? "pending" : "done"}`}>
          {project.isPending ? labels.statusPending : labels.statusDone}
        </span>
      </div>
      {collapsible ? (
        <button
          type="button"
          className="project-collapse-btn"
          aria-expanded={!collapsed}
          onClick={onToggleCollapse}
        >
          {collapsed ? expandLabel : collapseLabel}
        </button>
      ) : null}
    </article>
  );
}
