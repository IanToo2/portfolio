// 경력기술서(ResumeDocument)와 이력서(CvDocument)가 함께 쓰는 부품

export function DocumentTopbar({
  t,
  localizedProfile,
  altDocLabel,
  onShowAltDoc,
  onShowCard,
  switchLang,
  switchLabel,
  langSwitchAriaLabel,
  onExportPdf,
  isExportingPdf
}) {
  return (
    <header className="resume-topbar">
      <div className="resume-topbar-brand">
        <strong>{localizedProfile.name}</strong>
        <small>{localizedProfile.role} · {localizedProfile.domain}</small>
      </div>
      <div className="resume-topbar-actions">
        <button type="button" className="resume-ghost-btn" onClick={onShowAltDoc}>
          {altDocLabel}
        </button>
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
  );
}

export function ResumeEntry({ period, primary, secondary, bullets }) {
  return (
    <div className="resume-entry">
      <div className="resume-entry-head">
        <div className="resume-entry-title">
          {primary ? <strong>{primary}</strong> : null}
          {secondary ? <span>{secondary}</span> : null}
        </div>
        {period ? <span className="resume-entry-period">{period}</span> : null}
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

export function ProjectHistorySection({ t, rows }) {
  if (!rows.length) {
    return null;
  }

  return (
    <section className="resume-section">
      <h2 className="resume-section-title">{t.projectHistoryLabel}</h2>
      <div className="resume-history-scroll">
        <table className="resume-history">
          <thead>
            <tr>
              <th scope="col">{t.projectHistoryColumns.period}</th>
              <th scope="col">{t.projectHistoryColumns.project}</th>
              <th scope="col">{t.projectHistoryColumns.client}</th>
              <th scope="col">{t.projectHistoryColumns.team}</th>
              <th scope="col">{t.projectHistoryColumns.role}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${row.name}-${row.period}`}>
                <td className="resume-history-period">{row.period}</td>
                <td>
                  <strong>{row.name}</strong>
                  {row.kind ? <small>{row.kind}</small> : null}
                </td>
                <td>{row.client}</td>
                <td className="resume-history-team">{row.teamSize || "-"}</td>
                <td>
                  {row.position}
                  {row.tech.length ? <small>{row.tech.join(", ")}</small> : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function SkillsSection({ title, groups }) {
  if (!groups.length) {
    return null;
  }

  return (
    <section className="resume-section">
      <h2 className="resume-section-title">{title}</h2>
      <dl className="resume-skills">
        {groups.map((group, index) => (
          <div className="resume-skill-row" key={index}>
            <dt>{group.title}</dt>
            <dd>{group.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
