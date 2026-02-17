import SectionShell from "../SectionShell";
import TimelineGroup from "../TimelineGroup";

export default function ExperienceSection({
  t,
  localizedExperience,
  localizedEducation,
  localizedTraining,
  localizedAwards,
  localizedCertifications
}) {
  return (
    <SectionShell
      id="experience"
      toneClass="section-experience"
      revealClass="d5"
      head={{
        label: t.experienceLabel,
        title: t.experienceTitle,
        subtitle: t.experienceSubtitle,
        icon: "clock"
      }}
    >
      <div className="timeline-columns">
        <div className="timeline-column">
          <TimelineGroup title={t.timelineTitles.work} items={localizedExperience} />
          <TimelineGroup title={t.timelineTitles.education} items={localizedEducation} />
          <TimelineGroup
            title={t.timelineTitles.awards}
            items={localizedAwards}
            showOrganizationInHeading={false}
          />
        </div>
        <div className="timeline-column">
          <TimelineGroup title={t.timelineTitles.training} items={localizedTraining} />
          <TimelineGroup
            title={t.timelineTitles.certifications}
            items={localizedCertifications}
            showOrganizationInHeading={false}
          />
        </div>
      </div>
    </SectionShell>
  );
}
