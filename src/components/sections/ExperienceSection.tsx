import SectionShell from "../SectionShell";
import TimelineGroup from "../TimelineGroup";

interface TimelineItem {
  period: string;
  title: string;
  organization?: string;
  bullets?: string[];
}

interface TimelineText {
  experienceLabel: string;
  experienceTitle: string;
  experienceSubtitle: string;
  workProjectCountText?: string;
  timelineTitles: {
    work: string;
    education: string;
    training: string;
    awards: string;
    certifications: string;
  };
}

interface ExperienceSectionProps {
  t: TimelineText;
  workProjectTotal: number;
  localizedExperience: TimelineItem[];
  localizedEducation: TimelineItem[];
  localizedTraining: TimelineItem[];
  localizedAwards: TimelineItem[];
  localizedCertifications: TimelineItem[];
}

export default function ExperienceSection({
  t,
  workProjectTotal,
  localizedExperience,
  localizedEducation,
  localizedTraining,
  localizedAwards,
  localizedCertifications
}: ExperienceSectionProps) {
  const workProjectCountText = t.workProjectCountText?.replace("{count}", String(workProjectTotal));
  const workTimelineTitle = workProjectCountText
    ? `${t.timelineTitles.work} · ${workProjectCountText}`
    : t.timelineTitles.work;

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
          <TimelineGroup title={workTimelineTitle} items={localizedExperience} />
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
