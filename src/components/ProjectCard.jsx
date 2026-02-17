const DEFAULT_LABELS = {
  projectTypeLabel: "Project Type",
  scopeLabel: "Scope",
  technologiesLabel: "Tech Stack",
  contributionsLabel: "Key Contributions",
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
  const trackLabel = project.track === "scm" ? "SCM" : project.track === "qa" ? "QA" : null;
  const groupedTechStack = groupTechStack(project.tech);
  const projectKey = (project.id ?? `${project.name}-${project.period}`).replace(/[^a-zA-Z0-9_-]/g, "-");
  const detailsId = `project-details-${projectKey}`;
  const techGroupLabels = {
    ...DEFAULT_LABELS.techGroupLabels,
    ...(labels.techGroupLabels ?? {})
  };

  return (
    <article className={`project-card ui-card ${collapsible ? "is-collapsible" : ""} ${collapsed ? "is-collapsed" : ""}`}>
      <div className="project-top">
        <strong>{project.name}</strong>
        <div className="project-top-meta">
          {trackLabel ? <span className={`project-track ${project.track}`}>{trackLabel}</span> : null}
          <span className="project-period">{project.period}</span>
        </div>
      </div>
      <div className="project-meta">
        <p className="project-kind">
          {labels.projectTypeLabel}: {project.kind}
        </p>
        <p className="project-kind">
          {labels.scopeLabel}: {project.scope.join(" / ")}
        </p>
      </div>
      <div id={detailsId} hidden={collapsed}>
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
          <p className="project-contrib-title">{labels.contributionsLabel}</p>
          <ul className="project-contrib">
            {project.contributions.map((contribution) => (
              <li key={contribution}>{contribution}</li>
            ))}
          </ul>
      </div>
      <div className="project-status-wrap">
        <span className={`project-status ${project.isPending ? "pending" : "done"}`}>
          {project.isPending ? labels.statusPending : labels.statusDone}
        </span>
      </div>
      {collapsible ? (
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
