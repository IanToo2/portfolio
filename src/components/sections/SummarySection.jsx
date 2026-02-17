import Icon from "../Icon";
import SectionShell from "../SectionShell";

export default function SummarySection({ t, localizedMetrics }) {
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
