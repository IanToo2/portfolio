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
      <div className="capability-reboot-grid">
        <div className="capability-pillar-grid">
          {capabilityPillars.map((item) => (
            <article key={item.id} className="capability-card capability-card--pillar" data-breakpoint="true">
              <div className="capability-card-head">
                <p>{t.capabilityPillarsLabel}</p>
                <h3>{item.title}</h3>
              </div>
              <strong>{item.text}</strong>
              <div className="capability-tool-box">
                <span>{t.capabilityToolsLabel}</span>
                <div className="home-chip-list">
                  {item.tools.map((tool) => (
                    <span key={`${item.id}-${tool}`}>{tool}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="stack-showcase">
          <div className="stack-showcase-head" data-breakpoint="true">
            <p>{t.capabilityStackLabel}</p>
            <strong>{t.capabilityStackSummary}</strong>
          </div>
          <div className="stack-lane-grid">
            {stackGroups.map((group) => (
              <article key={group.title} className="stack-card stack-card--lane" data-breakpoint="true">
                <div className="stack-card-head">
                  <h3>{group.title}</h3>
                  <span>{group.proficiency}%</span>
                </div>
                <div className="stack-meter" aria-label={`${group.title} ${group.proficiency}%`}>
                  <div className="stack-meter-bar" style={{ width: `${group.proficiency}%` }} />
                </div>
                <TechPillList items={group.items} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </PortfolioSection>
  );
}
