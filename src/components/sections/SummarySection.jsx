import Icon from "../Icon";
import SectionShell from "../SectionShell";

export default function SummarySection({ t, localizedMetrics, summaryQuick }) {
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
      <article className="summary-quick ui-card ui-card--strong">
        <p className="summary-quick-kicker">{t.summaryQuickLabel}</p>
        <h3>{summaryQuick.coreLine}</h3>
        <div className="summary-quick-grid">
          <section className="summary-quick-block" aria-label={t.summaryQuickStrengthsLabel}>
            <p>{t.summaryQuickStrengthsLabel}</p>
            <ul className="summary-quick-list">
              {summaryQuick.strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="summary-quick-block" aria-label={t.summaryQuickImpactLabel}>
            <p>{t.summaryQuickImpactLabel}</p>
            <ul className="summary-quick-list">
              {summaryQuick.impacts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
        <p className="summary-quick-fit">
          <span>{t.summaryQuickFitLabel}</span>
          <strong>{summaryQuick.fit}</strong>
        </p>
      </article>
      <div className="metric-grid">
        {localizedMetrics.map((item) => (
          <article key={item.label} className="metric-card ui-card ui-card--muted">
            <div className="badge"><Icon type={item.icon} /></div>
            <p>{item.label}</p>
            <strong>{item.value}</strong>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
