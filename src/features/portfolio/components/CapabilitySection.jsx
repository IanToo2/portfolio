import TechPillList from "../../../components/TechPillList";
import PortfolioSection from "./PortfolioSection";

export default function CapabilitySection({ t, capabilityPillars, stackGroups }) {
  return (
    <PortfolioSection
      id="capabilities"
      label={t.highlightsLabel}
      title={t.highlightsTitle}
      subtitle={t.highlightsSubtitle}
      className="portfolio-capabilities"
    >
      <div className="capability-reboot-grid capability-reboot-grid--condensed">
        <article className="capability-story-panel" data-breakpoint="true">
          <div className="stack-showcase-head">
            <p>{t.capabilityPillarsLabel}</p>
            <strong>{t.highlightsSubtitle}</strong>
          </div>

          <div className="capability-story-list">
            {capabilityPillars.map((item) => (
              <section key={item.id} className="capability-story-item">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="capability-story-tools">
                  {item.tools.map((tool) => (
                    <span key={`${item.id}-${tool}`}>{tool}</span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>

        <article className="capability-tool-panel" data-breakpoint="true">
          <div className="stack-showcase-head">
            <p>{t.capabilityStackLabel}</p>
            <strong>{t.capabilityStackSummary}</strong>
          </div>

          <div className="stack-row-list">
            {stackGroups.map((group) => (
              <div key={group.title} className="stack-row">
                <div className="stack-row-head">
                  <h3>{group.title}</h3>
                </div>
                <div className="stack-meter" aria-label={`${group.title} ${group.proficiency}%`}>
                  <div className="stack-meter-bar" style={{ width: `${group.proficiency}%` }} />
                </div>
                <TechPillList items={group.items.slice(0, 5)} />
              </div>
            ))}
          </div>
        </article>
      </div>
    </PortfolioSection>
  );
}
