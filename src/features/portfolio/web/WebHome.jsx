function HistoryRow({ period, children }) {
  return (
    <div className="web-row">
      <p className="web-period">{period}</p>
      <div className="web-row-body">{children}</div>
    </div>
  );
}

export default function WebHome({
  t,
  localizedProfile,
  webProjectGroups,
  webHistory,
  stackGroups,
  resumeHref,
  switchLang,
  switchLabel,
  langSwitchAriaLabel
}) {
  const labels = t.web;
  const email = localizedProfile.email;
  const [contactBefore, contactAfter = ""] = labels.contactLine.split("{email}");

  return (
    <main id="home" className="web-page">
      <header className="web-header">
        <h1 className="web-name">{localizedProfile.name}</h1>
        {localizedProfile.webIntro ? <p>{localizedProfile.webIntro}</p> : null}
        <p className="web-links">
          {localizedProfile.github ? <a href={localizedProfile.github}>GitHub</a> : null}
          {email ? <a href={`mailto:${email}`}>{email}</a> : null}
          <a href={resumeHref}>{labels.resumeLink}</a>
          <button type="button" className="web-lang" onClick={switchLang} aria-label={langSwitchAriaLabel}>
            {switchLabel}
          </button>
        </p>
      </header>

      {localizedProfile.now ? (
        <section className="web-section" aria-labelledby="web-now-title">
          <h2 id="web-now-title" className="web-section-title">{labels.nowTitle}</h2>
          <p>{localizedProfile.now}</p>
        </section>
      ) : null}

      {webProjectGroups.map((group) => (
        <section className="web-section" aria-labelledby={`web-${group.id}-title`} key={group.id}>
          <h2 id={`web-${group.id}-title`} className="web-section-title">{group.title}</h2>
          <div>
            {group.projects.map((project) => (
              <article className="web-row web-project" key={project.id}>
                <p className="web-period">{project.period}</p>
                <div className="web-row-body">
                  <h3 className="web-project-name">{project.name}</h3>
                  {project.summary ? <p className="web-project-summary">{project.summary}</p> : null}
                  {project.details.length ? (
                    <details className="web-details">
                      <summary>{labels.detailsLabel}</summary>
                      <ul>
                        {project.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </details>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="web-section" aria-labelledby="web-history-title">
        <h2 id="web-history-title" className="web-section-title">{labels.historyTitle}</h2>
        <div>
          {webHistory.map((line, index) => (
            <HistoryRow period={line.period} key={index}>
              <p>{line.text}</p>
            </HistoryRow>
          ))}
        </div>
      </section>

      <section className="web-section" aria-labelledby="web-stack-title">
        <h2 id="web-stack-title" className="web-section-title">{labels.stackTitle}</h2>
        <div>
          {stackGroups.map((group) => (
            <HistoryRow period={group.title} key={group.title}>
              <p>{group.items.join(" · ")}</p>
            </HistoryRow>
          ))}
        </div>
      </section>

      <footer id="contact" className="web-footer">
        {email ? (
          <p>
            {contactBefore}
            <a href={`mailto:${email}`}>{email}</a>
            {contactAfter}
          </p>
        ) : null}
        <p className="web-note">{labels.updatedNote}</p>
      </footer>
    </main>
  );
}
