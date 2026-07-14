function ResumeEntry({ period, primary, secondary, bullets }) {
  return (
    <div className="resume-entry">
      <div className="resume-entry-head">
        {period ? <span className="resume-entry-period">{period}</span> : null}
        <div className="resume-entry-title">
          {primary ? <strong>{primary}</strong> : null}
          {secondary ? <span>{secondary}</span> : null}
        </div>
      </div>
      {Array.isArray(bullets) && bullets.length ? (
        <ul className="resume-bullets">
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function ResumeProject({ project, labels, featured }) {
  const status = project.isPending ? labels.statusPending : labels.statusDone;
  const metaParts = [project.kind, status].filter(Boolean);
  const caseStudy = featured ? project.caseStudy : null;
  const caseBullets = caseStudy
    ? [
        caseStudy.problem ? { label: labels.caseProblemLabel, text: caseStudy.problem } : null,
        ...caseStudy.roles.map((text) => ({ label: labels.caseRoleLabel, text })),
        ...caseStudy.impacts.map((text) => ({ label: labels.caseImpactLabel, text }))
      ].filter(Boolean)
    : [];

  return (
    <div className="resume-project">
      <div className="resume-project-head">
        <strong className="resume-project-name">{project.name}</strong>
        {project.period ? <span className="resume-project-period">{project.period}</span> : null}
      </div>

      {metaParts.length ? <p className="resume-project-meta">{metaParts.join(" · ")}</p> : null}

      {caseBullets.length ? (
        <ul className="resume-bullets">
          {caseBullets.map((bullet, index) => (
            <li key={index}>
              <span className="resume-bullet-tag">{bullet.label}</span> {bullet.text}
            </li>
          ))}
        </ul>
      ) : Array.isArray(project.contributions) && project.contributions.length ? (
        <ul className="resume-bullets">
          {project.contributions.map((contribution, index) => (
            <li key={index}>{contribution}</li>
          ))}
        </ul>
      ) : null}

      {Array.isArray(project.scope) && project.scope.length ? (
        <p className="resume-project-line">
          <span>{labels.scopeLabel}</span> {project.scope.join(", ")}
        </p>
      ) : null}

      {Array.isArray(project.tech) && project.tech.length ? (
        <p className="resume-project-line">
          <span>{labels.technologiesLabel}</span> {project.tech.join(", ")}
        </p>
      ) : null}

      {Array.isArray(project.metrics) && project.metrics.length ? (
        <p className="resume-project-line">
          <span>{labels.metricsLabel}</span>{" "}
          {project.metrics.map((metric) => `${metric.label} ${metric.value}`).join(" · ")}
        </p>
      ) : null}
    </div>
  );
}

export default function ResumeDocument({
  t,
  localizedProfile,
  summaryQuick,
  featuredProjects,
  projectGroups,
  stackGroups,
  experienceGroups,
  learningGroups,
  projectCardLabels,
  year,
  switchLang,
  switchLabel,
  langSwitchAriaLabel,
  onExportPdf,
  isExportingPdf,
  onShowCard
}) {
  const githubDisplay = String(localizedProfile.github ?? "").replace(/^https?:\/\//, "");
  const projectGroupsWithItems = projectGroups.filter((group) => group.projects.length);

  return (
    <>
      <header className="resume-topbar">
        <div className="resume-topbar-brand">
          <strong>{localizedProfile.name}</strong>
          <small>{localizedProfile.role} · {localizedProfile.domain}</small>
        </div>
        <div className="resume-topbar-actions">
          <button type="button" className="resume-ghost-btn" onClick={onShowCard}>
            {t.webViewLabel}
          </button>
          <button
            type="button"
            className="resume-ghost-btn"
            onClick={switchLang}
            aria-label={langSwitchAriaLabel}
          >
            {switchLabel}
          </button>
          <button
            type="button"
            className="resume-primary-btn"
            onClick={onExportPdf}
            disabled={isExportingPdf}
          >
            {isExportingPdf ? t.pdfExportLoading : t.pdfExportLabel}
          </button>
        </div>
      </header>

      <main id="home" className="page-shell resume-shell">
        <article className="resume-sheet">
          <header className="resume-header">
            <h1 className="resume-name">{localizedProfile.name}</h1>
            <p className="resume-role">{localizedProfile.role} · {localizedProfile.domain}</p>
            <ul className="resume-contact">
              {localizedProfile.email ? (
                <li>
                  <span>Email</span>
                  <a href={`mailto:${localizedProfile.email}`}>{localizedProfile.email}</a>
                </li>
              ) : null}
              {localizedProfile.github ? (
                <li>
                  <span>GitHub</span>
                  <a href={localizedProfile.github} target="_blank" rel="noreferrer noopener">
                    {githubDisplay}
                  </a>
                </li>
              ) : null}
            </ul>
          </header>

          <section className="resume-section">
            <h2 className="resume-section-title">{t.summaryQuickLabel}</h2>
            {localizedProfile.intro ? <p className="resume-intro">{localizedProfile.intro}</p> : null}
            <div className="resume-summary-grid">
              <div className="resume-summary-cell">
                <h3>{t.summaryQuickFitLabel}</h3>
                <p>{summaryQuick.fit}</p>
              </div>
              {summaryQuick.strengths.length ? (
                <div className="resume-summary-cell">
                  <h3>{t.summaryQuickStrengthsLabel}</h3>
                  <ul>
                    {summaryQuick.strengths.map((strength, index) => (
                      <li key={index}>{strength}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {summaryQuick.impacts.length ? (
                <div className="resume-summary-cell">
                  <h3>{t.summaryQuickImpactLabel}</h3>
                  <ul>
                    {summaryQuick.impacts.map((impact, index) => (
                      <li key={index}>{impact}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </section>

          {experienceGroups.length ? (
            <section className="resume-section">
              <h2 className="resume-section-title">{t.timelineTitles.work}</h2>
              {experienceGroups.map((group) => (
                <div className="resume-company-group" key={group.company}>
                  <h3 className="resume-company-name">{group.company}</h3>
                  {group.items.map((entry, index) => (
                    <ResumeEntry
                      key={index}
                      period={entry.period}
                      primary={entry.department}
                      secondary={entry.title}
                      bullets={entry.bullets}
                    />
                  ))}
                </div>
              ))}
            </section>
          ) : null}

          <section className="resume-section">
            <h2 className="resume-section-title">{t.projectsLabel}</h2>
            {featuredProjects.length ? (
              <div className="resume-subgroup">
                <h3 className="resume-subgroup-title">{t.featuredHead}</h3>
                {featuredProjects.map((project) => (
                  <ResumeProject
                    key={project.id}
                    project={project}
                    labels={projectCardLabels}
                    featured
                  />
                ))}
              </div>
            ) : null}
            {projectGroupsWithItems.map((group) => (
              <div className="resume-subgroup" key={group.id}>
                <h3 className="resume-subgroup-title">
                  {group.label} <span className="resume-subgroup-count">({group.count})</span>
                </h3>
                {group.projects.map((project) => (
                  <ResumeProject key={project.id} project={project} labels={projectCardLabels} />
                ))}
              </div>
            ))}
          </section>

          {stackGroups.length ? (
            <section className="resume-section">
              <h2 className="resume-section-title">{t.capabilityStackLabel}</h2>
              <dl className="resume-skills">
                {stackGroups.map((group, index) => (
                  <div className="resume-skill-row" key={index}>
                    <dt>{group.title}</dt>
                    <dd>{group.items.join(" · ")}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          {learningGroups.map((group) => (
            <section className="resume-section" key={group.id}>
              <h2 className="resume-section-title">{group.title}</h2>
              {group.items.map((item, index) => (
                <ResumeEntry
                  key={index}
                  period={item.period}
                  primary={item.organization || item.title}
                  secondary={item.organization ? item.title : null}
                  bullets={item.bullets}
                />
              ))}
            </section>
          ))}

          <footer className="resume-footer">
            <span>© {year} {localizedProfile.name}</span>
            <span>{t.contactFooter}</span>
          </footer>
        </article>
      </main>
    </>
  );
}
