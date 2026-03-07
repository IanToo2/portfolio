import TechLogo from "../../../components/TechLogo";
import PortfolioSection from "./PortfolioSection";

export default function CapabilitySection({ t, localizedHighlights, localizedStack }) {
  return (
    <PortfolioSection
      id="capabilities"
      label={t.highlightsLabel}
      title={t.stackTitle}
      subtitle={t.stackSubtitle}
      className="portfolio-capabilities"
    >
      <div className="capability-layout">
        <div className="capability-column">
          {localizedHighlights.map((item) => (
            <article key={item.title} className="capability-card" data-breakpoint="true">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="stack-grid">
          {localizedStack.map((group) => (
            <article key={group.title} className="stack-card" data-breakpoint="true">
              <h3>{group.title}</h3>
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
