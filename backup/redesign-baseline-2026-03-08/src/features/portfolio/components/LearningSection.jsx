import PortfolioSection from "./PortfolioSection";

const renderTimelineCard = (item) => (
  <article
    key={`${item.period}-${item.organization}-${item.title}`}
    className="timeline-card certification-card"
    data-breakpoint="true"
  >
    <span>{item.period}</span>
    <h3>{item.title}</h3>
    <p className="timeline-org">{item.organization}</p>
    <ul>
      {item.bullets.map((bullet) => (
        <li key={`${item.title}-${bullet}`}>{bullet}</li>
      ))}
    </ul>
  </article>
);

export default function LearningSection({
  t,
  localizedEducation,
  localizedTraining,
  localizedAwards,
  localizedCertifications
}) {
  return (
    <PortfolioSection
      id="learning"
      label={t.learningLabel}
      title={t.learningTitle}
      subtitle={t.learningSubtitle}
      className="portfolio-learning"
    >
      <div className="learning-reboot-grid">
        <div className="career-proof-grid">
          {[...localizedEducation, ...localizedTraining].map(renderTimelineCard)}
        </div>

        {localizedAwards.length ? (
          <div className="learning-panel" data-breakpoint="true">
            <h3 className="timeline-group-title">{t.timelineTitles.awards}</h3>
            <div className="career-certification-grid">
              {localizedAwards.map(renderTimelineCard)}
            </div>
          </div>
        ) : null}

        {localizedCertifications.length ? (
          <div className="learning-panel" data-breakpoint="true">
            <h3 className="timeline-group-title">{t.timelineTitles.certifications}</h3>
            <div className="career-certification-grid">
              {localizedCertifications.map(renderTimelineCard)}
            </div>
          </div>
        ) : null}
      </div>
    </PortfolioSection>
  );
}
