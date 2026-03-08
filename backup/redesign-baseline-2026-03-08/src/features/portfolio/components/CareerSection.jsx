import PortfolioSection from "./PortfolioSection";

export default function CareerSection({ t, localizedExperience }) {
  return (
    <PortfolioSection
      id="career"
      label={t.experienceLabel}
      title={t.experienceTitle}
      subtitle={t.experienceSubtitle}
      className="portfolio-career"
    >
      <div className="timeline">
        {localizedExperience.map((item) => (
          <article
            key={`${item.period}-${item.organization}-${item.title}`}
            className="timeline-card certification-card"
            data-breakpoint="true"
          >
            <span>{item.period}</span>
            <h3>{item.organization} · {item.title}</h3>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PortfolioSection>
  );
}
