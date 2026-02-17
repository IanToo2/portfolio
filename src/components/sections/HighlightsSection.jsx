import Icon from "../Icon";
import SectionShell from "../SectionShell";

export default function HighlightsSection({ t, localizedHighlights }) {
  return (
    <SectionShell
      id="highlights"
      toneClass="section-highlights"
      revealClass="d4"
      head={{
        label: t.highlightsLabel,
        title: t.highlightsTitle,
        subtitle: t.highlightsSubtitle,
        icon: "target"
      }}
    >
      <div className="metric-grid">
        {localizedHighlights.map((item) => (
          <article key={item.title} className="metric-card panel">
            <div className="badge"><Icon type={item.icon} /></div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
