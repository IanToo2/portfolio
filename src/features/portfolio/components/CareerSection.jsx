import PortfolioSection from "./PortfolioSection";

const renderTimelineRow = (item) => (
  <article
    key={`${item.period}-${item.organization}-${item.title}`}
    className="timeline-row"
  >
    <span>{item.period}</span>
    <div>
      <h3>{item.organization} · {item.title}</h3>
      <ul>
        {item.bullets.map((bullet) => (
          <li key={`${item.title}-${bullet}`}>{bullet}</li>
        ))}
      </ul>
    </div>
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
          <div className="timeline timeline--condensed">
            {localizedExperience.map(renderTimelineRow)}
          </div>
        </article>

        <article className="career-column-card career-column-card--compact" data-breakpoint="true">
          <div className="career-column-head">
            <p>{t.careerHighlightsLabel}</p>
            <strong>{t.learningTitle}</strong>
          </div>
          <div className="career-summary-groups">
            {learningGroups.map((group) => (
              <section key={group.id} className="career-summary-group">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={`${group.id}-${item.period}-${item.title}`}>
                      <strong>{item.title}</strong>
                      <span>{item.organization} · {item.period}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>
      </div>
    </PortfolioSection>
  );
}
