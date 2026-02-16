import Icon from "../Icon";
import SectionHead from "../SectionHead";

export default function HighlightsSection({ t, localizedHighlights }) {
  return (
    <section id="highlights" className="section section-highlights reveal d4">
      <SectionHead
        label={t.highlightsLabel}
        title={t.highlightsTitle}
        subtitle={t.highlightsSubtitle}
        icon="shield"
      />
      <div className="metric-grid">
        {localizedHighlights.map((item) => (
          <article key={item.title} className="metric-card panel">
            <div className="badge"><Icon type={item.icon} /></div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
