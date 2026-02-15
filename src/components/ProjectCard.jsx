const DEFAULT_LABELS = {
  projectTypeLabel: "프로젝트 성격",
  scopeLabel: "담당 범위",
  technologiesLabel: "기술 스택",
  contributionsLabel: "주요 기여",
  metricsLabel: "성과 지표",
  statusDone: "완료",
  statusPending: "진행 중인 프로젝트"
};

export default function ProjectCard({ project, labels = DEFAULT_LABELS }) {
  return (
    <article className="project-card panel">
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
      <ul className="project-tech" aria-label={labels.technologiesLabel}>
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      {project.metrics?.length ? (
        <div className="project-metrics">
          <p className="project-metrics-title">{labels.metricsLabel}</p>
          <div className="project-metrics-grid">
            {project.metrics.map((metric) => (
              <div key={`${metric.label}-${metric.value}`} className="project-metric-item">
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <p className="project-contrib-title">{labels.contributionsLabel}</p>
      <ul className="project-contrib">
        {project.contributions.map((contribution) => (
          <li key={contribution}>{contribution}</li>
        ))}
      </ul>
      <div className="project-status-wrap">
        <span className={`project-status ${project.isPending ? "pending" : "done"}`}>
          {project.isPending ? labels.statusPending : labels.statusDone}
        </span>
      </div>
    </article>
  );
}
