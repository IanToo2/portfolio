import Icon from "../Icon";
import SectionHead from "../SectionHead";

export default function SummarySection({ t, localizedMetrics }) {
  return (
    <section id="summary" className="section section-summary reveal d3">
      <SectionHead
        label={t.summaryLabel}
        title={t.summaryTitle}
        subtitle={t.summarySubtitle}
        icon="route"
      />
      <div className="metric-grid">
        {localizedMetrics.map((item) => (
          <article key={item.label} className="metric-card panel">
            <div className="badge"><Icon type={item.icon} /></div>
            <p>{item.label}</p>
            <strong>{item.value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
