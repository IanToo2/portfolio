import TimelineGroup from "../../../components/TimelineGroup";
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
            <TimelineGroup
              title={t.timelineTitles.certifications}
              items={localizedCertifications}
              showOrganizationInHeading={false}
            />
          </div>
        ) : null}
      </div>
    </PortfolioSection>
  );
}
