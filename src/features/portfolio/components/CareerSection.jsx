import TimelineGroup from "../../../components/TimelineGroup";
import PortfolioSection from "./PortfolioSection";

export default function CareerSection({
  t,
  workProjectTotal,
  localizedExperience,
  localizedEducation,
  localizedTraining,
  localizedAwards,
  localizedCertifications
}) {
  const workProjectCountText = t.workProjectCountText?.replace("{count}", String(workProjectTotal));
  const workTimelineTitle = workProjectCountText
    ? `${t.timelineTitles.work} · ${workProjectCountText}`
    : t.timelineTitles.work;

  return (
    <PortfolioSection
      id="career"
      label={t.experienceLabel}
      title={t.experienceTitle}
      subtitle={t.experienceSubtitle}
      className="portfolio-career"
    >
      <div className="career-layout">
        <div className="career-column">
          <TimelineGroup title={workTimelineTitle} items={localizedExperience} />
          <TimelineGroup title={t.timelineTitles.education} items={localizedEducation} />
        </div>
        <div className="career-column">
          <TimelineGroup title={t.timelineTitles.training} items={localizedTraining} />
          <TimelineGroup title={t.timelineTitles.awards} items={localizedAwards} showOrganizationInHeading={false} />
          <TimelineGroup
            title={t.timelineTitles.certifications}
            items={localizedCertifications}
            showOrganizationInHeading={false}
          />
        </div>
      </div>
    </PortfolioSection>
  );
}
