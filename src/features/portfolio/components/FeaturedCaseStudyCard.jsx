import TechPillList from "../../../components/TechPillList";

export default function FeaturedCaseStudyCard({ project, labels }) {
  const metrics = (project.metrics ?? []).filter((metric) => metric?.label || metric?.value);
  const caseStudy = project.caseStudy ?? { problem: "", roles: [], impacts: [] };
  const trackLabel =
    project.track === "scm"
      ? labels.trackScm ?? "SCM"
      : project.track === "qa"
        ? labels.trackQa ?? "QA"
        : labels.trackTeam ?? "TEAM";

  return (
    <article className="featured-case-card">
      <div className="featured-case-headline">
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

        <p className="project-kind featured-case-scope">
          {labels.scopeLabel}: {project.scope.join(" / ")}
        </p>
      </div>

      <div className="featured-case-body">
        <section className="featured-case-section">
          <p className="project-contrib-title">{labels.caseProblemLabel}</p>
          <p className="featured-case-problem">{caseStudy.problem}</p>
        </section>

        <section className="featured-case-section">
          <p className="project-contrib-title">{labels.caseRoleLabel}</p>
          <ul className="project-contrib">
            {caseStudy.roles.map((item) => (
              <li key={`${project.id}-role-${item}`}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="featured-case-section">
          <p className="project-contrib-title">{labels.caseImpactLabel}</p>
          <ul className="project-contrib">
            {caseStudy.impacts.map((item) => (
              <li key={`${project.id}-impact-${item}`}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      {project.tech?.length ? (
        <div className="project-preview-block">
          <p className="project-tech-preview-title">{labels.technologiesLabel}</p>
          <TechPillList items={project.tech.slice(0, 6)} />
        </div>
      ) : null}

      {metrics.length ? (
        <div className="project-metrics project-metrics--featured">
          <p className="project-metrics-title">{labels.metricsLabel}</p>
          <div className="project-metrics-grid">
            {metrics.map((metric, index) => (
              <div key={`${project.id}-featured-metric-${index}`} className="project-metric-item">
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}
