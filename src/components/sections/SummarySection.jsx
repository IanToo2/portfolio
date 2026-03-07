import Icon from "../Icon";
import SectionShell from "../SectionShell";

export default function SummarySection({ t, localizedMetrics, summaryQuick, scanHierarchy }) {
  return (
    <SectionShell
      id="summary"
      toneClass="section-summary"
      revealClass="d3"
      head={{
        label: t.summaryLabel,
        title: t.summaryTitle,
        subtitle: t.summarySubtitle,
        icon: "route"
      }}
    >
      <div className="summary-home-grid">
        <article className="summary-home-card ui-card ui-card--strong">
          <p className="summary-quick-kicker">{t.summaryQuickStrengthsLabel}</p>
          <h3>{summaryQuick.coreLine}</h3>
          <div className="summary-chip-group">
            {summaryQuick.strengths.map((item) => (
              <span key={item} className="summary-chip">{item}</span>
            ))}
          </div>
        </article>
        <article className="summary-home-card ui-card ui-card--muted">
          <p className="summary-quick-kicker">{t.summaryQuickImpactLabel}</p>
          <ul className="summary-impact-list">
            {summaryQuick.impacts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="summary-home-card ui-card ui-card--muted">
          <p className="summary-quick-kicker">{t.summaryQuickFitLabel}</p>
          <strong className="summary-fit-title">{summaryQuick.fit}</strong>
          <span className="summary-fit-copy">
            {scanHierarchy.sectionOrder.join(" · ")}
          </span>
        </article>
      </div>
      <div className="metric-grid metric-grid--summary">
        {localizedMetrics.map((item) => (
          <article key={item.label} className="metric-card metric-card--compact ui-card ui-card--muted">
            <div className="badge"><Icon type={item.icon} /></div>
            <p>{item.label}</p>
            <strong>{item.value}</strong>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
