const DEFAULT_LABELS = {
  projectTypeLabel: "Project Type",
  scopeLabel: "Scope",
  technologiesLabel: "Tech Stack",
  contributionsLabel: "Key Contributions",
  metricsLabel: "Impact Metrics",
  techGroupLabels: {
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    infra: "Infrastructure",
    devops: "DevOps",
    collaboration: "Collaboration",
    other: "Other"
  },
  statusDone: "Completed",
  statusPending: "In Progress",
  collapseLabel: "Collapse",
  expandLabel: "Expand"
};

const TECH_GROUP_ORDER = [
  "frontend",
  "backend",
  "database",
  "infra",
  "devops",
  "collaboration",
  "other"
];

const TECH_GROUP_TOKENS = {
  frontend: ["javascript", "typescript", "react", "vue", "angular", "polymer", "html", "css"],
  backend: ["java", "spring", "node", "express", "nestjs", "jpa", "mybatis", "kotlin"],
  database: ["oracle", "postgresql", "mysql", "mariadb", "sql", "mongodb", "redis", "rds"],
  infra: ["aws", "docker", "kubernetes", "nginx", "minio", "ec2", "s3"],
  devops: ["jenkins", "gradle", "maven", "ci", "cd", "github actions"],
  collaboration: ["git", "github", "gitlab", "jira", "svn", "swagger"]
};

const TECH_PREVIEW_MAX = 6;
const CONTRIBUTION_PREVIEW_MAX = 3;
const METRIC_PREVIEW_MAX = 2;

const normalizeTech = (value) => String(value ?? "").toLowerCase();

const resolveTechGroup = (tech) => {
  const normalized = normalizeTech(tech);
  for (const group of TECH_GROUP_ORDER) {
    const tokens = TECH_GROUP_TOKENS[group];
    if (tokens?.some((token) => normalized.includes(token))) {
      return group;
    }
  }
  return "other";
};

const groupTechStack = (techStack) => {
  const grouped = new Map(TECH_GROUP_ORDER.map((group) => [group, []]));
  for (const tech of techStack ?? []) {
    grouped.get(resolveTechGroup(tech)).push(tech);
  }
  return TECH_GROUP_ORDER
    .filter((group) => grouped.get(group).length > 0)
    .map((group) => ({ group, items: grouped.get(group) }));
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
  const metricsLabel = labels.metricsLabel ?? "Impact Metrics";
  const trackLabel = project.track === "scm" ? "SCM" : project.track === "qa" ? "QA" : null;
  const groupedTechStack = groupTechStack(project.tech);
  const projectMetrics = (project.metrics ?? []).filter((metric) => metric?.label || metric?.value);
  const techPreview = (project.tech ?? []).slice(0, TECH_PREVIEW_MAX);
  const contributionPreview = (project.contributions ?? []).slice(0, CONTRIBUTION_PREVIEW_MAX);
  const metricPreview = projectMetrics.slice(0, METRIC_PREVIEW_MAX);
  const metricDetail = projectMetrics.slice(METRIC_PREVIEW_MAX);
  const hasDetailContent =
    (project.tech?.length ?? 0) > techPreview.length ||
    (project.contributions?.length ?? 0) > contributionPreview.length ||
    metricDetail.length > 0;
  const projectKey = (project.id ?? `${project.name}-${project.period}`).replace(/[^a-zA-Z0-9_-]/g, "-");
  const detailsId = `project-details-${projectKey}`;
  const techGroupLabels = {
    ...DEFAULT_LABELS.techGroupLabels,
    ...(labels.techGroupLabels ?? {})
  };

  return (
    <article className={`project-card ui-card ${hasDetailContent && collapsible ? "is-collapsible" : ""} ${collapsed ? "is-collapsed" : ""}`}>
      <div className="project-card-head">
        <div className="project-top">
          <strong>{project.name}</strong>
          <div className="project-top-meta">
            {trackLabel ? <span className={`project-track ${project.track}`}>{trackLabel}</span> : null}
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
          <ul className="project-tech project-tech--preview">
            {techPreview.map((tech) => (
              <li key={`${projectKey}-preview-${tech}`}>{tech}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <p className="project-contrib-title">{labels.contributionsLabel}</p>
      <ul className="project-contrib">
        {contributionPreview.map((contribution) => (
          <li key={contribution}>{contribution}</li>
        ))}
      </ul>
      {metricPreview.length ? (
        <div className="project-metrics project-metrics--preview">
          <p className="project-metrics-title">{metricsLabel}</p>
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
          {(project.tech?.length ?? 0) > techPreview.length ? (
            <div className="project-tech-groups" aria-label={labels.technologiesLabel}>
              {groupedTechStack.map(({ group, items }) => (
                <div key={group} className="project-tech-group">
                  <p className="project-tech-group-title">
                    {techGroupLabels[group] ?? group}
                  </p>
                  <ul className="project-tech">
                    {items.map((tech) => (
                      <li key={`${group}-${tech}`}>{tech}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}
          {(project.contributions?.length ?? 0) > contributionPreview.length ? (
            <>
              <p className="project-contrib-title project-contrib-title--detail">{labels.contributionsLabel}</p>
              <ul className="project-contrib">
                {project.contributions.slice(CONTRIBUTION_PREVIEW_MAX).map((contribution) => (
                  <li key={`${projectKey}-detail-${contribution}`}>{contribution}</li>
                ))}
              </ul>
            </>
          ) : null}
          {metricDetail.length ? (
            <div className="project-metrics">
              <p className="project-metrics-title">{metricsLabel}</p>
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
          {collapsed ? expandLabel : collapseLabel}
        </button>
      ) : null}
    </article>
  );
}
