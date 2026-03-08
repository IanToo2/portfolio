import TechLogo from "../../../components/TechLogo";
import PortfolioSection from "./PortfolioSection";

export default function WorkStyleSection({ t, capabilityPillars }) {
  return (
    <PortfolioSection
      id="workstyle"
      label={t.workStyleLabel}
      title={t.workStyleTitle}
      subtitle={t.workStyleSubtitle}
      className="portfolio-workstyle"
    >
      <div className="capability-pillar-grid">
        {capabilityPillars.map((item) => (
          <article key={item.id} className="capability-card capability-card--pillar" data-breakpoint="true">
            <p>{t.stackSignalLabel}</p>
            <h3>{item.title}</h3>
            <strong>{item.text}</strong>
            <ul className="tech-pill-list">
              {item.tools.map((tool) => (
                <li key={`${item.id}-${tool}`}>
                  <TechLogo name={tool} />
                  <span className="stack-card-label">{tool}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PortfolioSection>
  );
}
