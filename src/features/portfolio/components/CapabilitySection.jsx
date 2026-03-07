import TechLogo from "../../../components/TechLogo";
import PortfolioSection from "./PortfolioSection";

export default function CapabilitySection({ t, capabilityPillars, stackPreviewGroups }) {
  return (
    <PortfolioSection
      id="capabilities"
      label={t.highlightsLabel}
      title={t.stackTitle}
      subtitle={t.stackSubtitle}
      className="portfolio-capabilities"
    >
      <div className="capability-reboot-grid">
        <div className="capability-pillar-grid">
          {capabilityPillars.map((item) => (
            <article key={item.id} className="capability-card capability-card--pillar" data-breakpoint="true">
              <p>{t.stackSignalLabel}</p>
              <h3>{item.title}</h3>
              <strong>{item.text}</strong>
              <div className="home-chip-list">
                {item.tools.map((tool) => (
                  <span key={`${item.id}-${tool}`}>{tool}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="stack-lane-grid">
          {stackPreviewGroups.map((group) => (
            <article key={group.title} className="stack-card stack-card--lane" data-breakpoint="true">
              <div className="stack-card-head">
                <h3>{group.title}</h3>
                <span>{group.proficiency}%</span>
              </div>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <TechLogo name={item} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </PortfolioSection>
  );
}
