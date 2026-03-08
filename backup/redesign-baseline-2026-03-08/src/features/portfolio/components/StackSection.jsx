import TechPillList from "../../../components/TechPillList";
import PortfolioSection from "./PortfolioSection";

export default function StackSection({ t, stackGroups }) {
  return (
    <PortfolioSection
      id="stack"
      label={t.stackLabel}
      title={t.stackTitle}
      subtitle={t.stackSubtitle}
      className="portfolio-stack"
    >
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
    </PortfolioSection>
  );
}
