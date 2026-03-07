import PortfolioSection from "./PortfolioSection";

export default function CareerSection({ t, careerFeatured, careerSnapshot, localizedCertifications }) {
  const snapshotCards = careerSnapshot.filter((item) => item.id !== "certification");

  return (
    <PortfolioSection
      id="career"
      label={t.experienceLabel}
      title={t.experienceTitle}
      subtitle={t.experienceSubtitle}
      className="portfolio-career"
    >
      <div className="career-reboot-grid">
        {careerFeatured ? (
          <article className="timeline-card timeline-card--featured" data-breakpoint="true">
            <span>{careerFeatured.period}</span>
            <h3>{careerFeatured.organization} · {careerFeatured.title}</h3>
            <ul>
              {careerFeatured.bullets.slice(0, 3).map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ) : null}

        <div className="career-proof-grid">
          {snapshotCards.map((item) => (
            <article key={item.id} className="timeline-card timeline-card--compact" data-breakpoint="true">
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <strong>{item.period}</strong>
            </article>
          ))}
        </div>

        {localizedCertifications.length ? (
          <div className="career-certifications-panel" data-breakpoint="true">
            <h3 className="timeline-group-title">{t.timelineTitles.certifications}</h3>
            <div className="career-certification-grid">
              {localizedCertifications.map((item) => (
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
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </PortfolioSection>
  );
}
