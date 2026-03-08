import TechPillList from "./TechPillList";

const DEFAULT_LABELS = {
  projectTypeLabel: "Project Type",
  scopeLabel: "Scope",
  technologiesLabel: "Tech Stack",
  contributionsLabel: "Key Contributions",
  metricsLabel: "Impact Metrics",
  statusDone: "Completed",
  statusPending: "In Progress",
  collapseLabel: "Collapse",
  expandLabel: "Show more"
};

const TECH_PREVIEW_MAX = 6;
const CONTRIBUTION_PREVIEW_MAX = 3;
const METRIC_PREVIEW_MAX = 2;

export default function ProjectCard({
  project,
  labels = DEFAULT_LABELS,
  collapsible = false,
  collapsed = false,
  onToggleCollapse
}) {
  const trackLabel =
    project.track === "scm"
      ? labels.trackScm ?? "SCM"
      : project.track === "qa"
        ? labels.trackQa ?? "QA"
        : labels.trackTeam ?? "TEAM";
  const projectMetrics = (project.metrics ?? []).filter((metric) => metric?.label || metric?.value);
  const techPreview = (project.tech ?? []).slice(0, TECH_PREVIEW_MAX);
  const contributionPreview = (project.contributions ?? []).slice(0, CONTRIBUTION_PREVIEW_MAX);
  const metricPreview = projectMetrics.slice(0, METRIC_PREVIEW_MAX);
  const metricDetail = projectMetrics.slice(METRIC_PREVIEW_MAX);
  const hasDetailContent =
    (project.contributions?.length ?? 0) > contributionPreview.length ||
    metricDetail.length > 0;
  const projectKey = (project.id ?? `${project.name}-${project.period}`).replace(/[^a-zA-Z0-9_-]/g, "-");
  const detailsId = `project-details-${projectKey}`;

  return (
    <article className={`project-card ${hasDetailContent && collapsible ? "is-collapsible" : ""} ${collapsed ? "is-collapsed" : ""}`}>
      <div className="project-card-head">
        <div className="project-top">
          <strong>{project.name}</strong>
          <div className="project-top-meta">
            <span className={`project-track ${project.track}`}>{trackLabel}</span>
            <span className="project-period">{project.period}</span>
          </div>
        </div>
        <div className="project-summary-row">
          <p className="project-kind">
            {labels.projectTypeLabel}: {project.kind}
          </p>
          <span className={`project-status ${project.isPending ? "pending" : "done"}`}>
            {project.isPending ? labels.statusPending : labels.statusDone}
          </span>
        </div>
      </div>

      <div className="project-meta">
        <p className="project-kind">
          {labels.scopeLabel}: {project.scope.join(" / ")}
        </p>
      </div>

      {techPreview.length ? (
        <div className="project-preview-block">
          <p className="project-tech-preview-title">{labels.technologiesLabel}</p>
          <TechPillList items={techPreview} />
        </div>
      ) : null}

      <div className="project-detail-block">
        <p className="project-contrib-title">{labels.contributionsLabel}</p>
        <ul className="project-contrib">
          {contributionPreview.map((contribution) => (
            <li key={contribution}>{contribution}</li>
          ))}
        </ul>
      </div>

      {metricPreview.length ? (
        <div className="project-metrics project-metrics--preview">
          <p className="project-metrics-title">{labels.metricsLabel}</p>
          <div className="project-metrics-grid">
            {metricPreview.map((metric, index) => (
              <div key={`${projectKey}-metric-preview-${index}`} className="project-metric-item">
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {hasDetailContent ? (
        <div id={detailsId} hidden={collapsed}>
          {(project.contributions?.length ?? 0) > contributionPreview.length ? (
            <div className="project-detail-block">
              <p className="project-contrib-title project-contrib-title--detail">{labels.contributionsLabel}</p>
              <ul className="project-contrib">
                {project.contributions.slice(CONTRIBUTION_PREVIEW_MAX).map((contribution) => (
                  <li key={`${projectKey}-detail-${contribution}`}>{contribution}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {metricDetail.length ? (
            <div className="project-metrics">
              <p className="project-metrics-title">{labels.metricsLabel}</p>
              <div className="project-metrics-grid">
                {metricDetail.map((metric, index) => (
                  <div key={`${projectKey}-metric-${index}`} className="project-metric-item">
                    <span>{metric.label}</span>
                    <strong>{metric.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}

      {hasDetailContent && collapsible ? (
        <button
          type="button"
          className="ui-btn ui-btn-soft project-collapse-btn"
          aria-expanded={!collapsed}
          aria-controls={detailsId}
          onClick={onToggleCollapse}
        >
          {collapsed ? labels.expandLabel : labels.collapseLabel}
        </button>
      ) : null}
    </article>
  );
}
