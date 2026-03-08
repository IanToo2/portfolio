import PortfolioSection from "./PortfolioSection";

const renderTimelineCard = (item) => (
  <article
    key={`${item.period}-${item.organization}-${item.title}`}
    className="timeline-card"
    data-breakpoint="true"
  >
    <span>{item.period}</span>
    <h3>{item.organization} · {item.title}</h3>
    <ul>
      {item.bullets.map((bullet) => (
        <li key={`${item.title}-${bullet}`}>{bullet}</li>
      ))}
    </ul>
  </article>
);

export default function CareerSection({ t, localizedExperience, learningGroups }) {
  return (
    <PortfolioSection
      id="career"
      label={t.experienceLabel}
      title={t.experienceTitle}
      subtitle={t.experienceSubtitle}
      className="portfolio-career"
    >
      <div className="career-reboot-grid">
        <article className="career-column-card" data-breakpoint="true">
          <div className="career-column-head">
            <p>{t.careerTimelineLabel}</p>
            <strong>{t.timelineTitles.work}</strong>
          </div>
          <div className="timeline">
            {localizedExperience.map(renderTimelineCard)}
          </div>
        </article>

        <div className="career-learning-grid">
          {learningGroups.map((group) => (
            <article key={group.id} className="career-column-card career-column-card--compact" data-breakpoint="true">
              <div className="career-column-head">
                <p>{t.careerHighlightsLabel}</p>
                <strong>{group.title}</strong>
              </div>
              <div className="career-proof-grid">
                {group.items.map(renderTimelineCard)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </PortfolioSection>
  );
}
