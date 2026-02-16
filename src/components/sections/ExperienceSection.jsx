import SectionHead from "../SectionHead";
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
    <section id="experience" className="section section-experience reveal d5">
      <SectionHead
        label={t.experienceLabel}
        title={t.experienceTitle}
        subtitle={t.experienceSubtitle}
        icon="clock"
      />
      <div className="timeline-groups">
        <TimelineGroup title={t.timelineTitles.work} items={localizedExperience} />
        <TimelineGroup title={t.timelineTitles.education} items={localizedEducation} />
        <TimelineGroup title={t.timelineTitles.training} items={localizedTraining} />
        <TimelineGroup
          title={t.timelineTitles.awards}
          items={localizedAwards}
          showOrganizationInHeading={false}
        />
        <TimelineGroup
          title={t.timelineTitles.certifications}
          items={localizedCertifications}
          showOrganizationInHeading={false}
        />
      </div>
    </section>
  );
}
