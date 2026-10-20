import { DocumentTopbar, ProjectHistorySection, ResumeEntry, SkillsSection } from "./DocumentParts";

// 이력서(1~2쪽): 경력기술서와 같은 데이터에서 서술을 빼고 사실 목록만 남긴다.
// 프로젝트별 문제·역할·영향 서술은 경력기술서(ResumeDocument)에만 둔다.

function learningEntryProps(group, item) {
  // 수상·자격증은 이름이 먼저, 학력은 학위와 전공(bullets[1])을 함께 보여준다.
  if (group.id === "awards" || group.id === "certifications") {
    return { primary: item.title, secondary: item.organization };
  }
  if (group.id === "education") {
    return { primary: item.organization, secondary: [item.title, item.bullets?.[1]].filter(Boolean).join(" · ") };
  }
  return { primary: item.organization || item.title, secondary: item.organization ? item.title : null };
}

export default function CvDocument({
  t,
  localizedProfile,
  summaryQuick,
  resumeProjectHistory = [],
  stackGroups,
  experienceGroups,
  learningGroups,
  switchLang,
  switchLabel,
  langSwitchAriaLabel,
  onExportPdf,
  isExportingPdf,
  onShowCard,
  onShowResume
}) {
  const githubDisplay = String(localizedProfile.github ?? "").replace(/^https?:\/\//, "");

  return (
    <>
      <DocumentTopbar
        t={t}
        localizedProfile={localizedProfile}
        altDocLabel={t.resumeViewLabel}
        onShowAltDoc={onShowResume}
        onShowCard={onShowCard}
        switchLang={switchLang}
        switchLabel={switchLabel}
        langSwitchAriaLabel={langSwitchAriaLabel}
        onExportPdf={onExportPdf}
        isExportingPdf={isExportingPdf}
      />

      <main id="home" className="page-shell resume-shell">
        <article className="resume-sheet cv-sheet">
          <header className="resume-header">
            <h1 className="resume-name">{localizedProfile.name}</h1>
            <p className="resume-role">{localizedProfile.role} · {localizedProfile.domain}</p>
            <ul className="resume-contact">
              {localizedProfile.email ? (
                <li>
                  <span>Email</span>
                  <a href={`mailto:${localizedProfile.email}`}>{localizedProfile.email}</a>
                </li>
              ) : null}
              {localizedProfile.github ? (
                <li>
                  <span>GitHub</span>
                  <a href={localizedProfile.github} target="_blank" rel="noreferrer noopener">
                    {githubDisplay}
                  </a>
                </li>
              ) : null}
            </ul>
          </header>

          <section className="resume-section">
            <h2 className="resume-section-title">{t.cvIntroLabel}</h2>
            {localizedProfile.intro ? <p className="resume-intro">{localizedProfile.intro}</p> : null}
            <p className="cv-fit">
              <span>{t.summaryQuickFitLabel}</span> {summaryQuick.fit}
            </p>
          </section>

          {experienceGroups.length ? (
            <section className="resume-section">
              <h2 className="resume-section-title">{t.timelineTitles.work}</h2>
              {experienceGroups.map((group) =>
                group.items.map((entry, index) => (
                  <ResumeEntry
                    key={`${group.company}-${index}`}
                    period={entry.period}
                    primary={[entry.company, entry.department].filter(Boolean).join(" ")}
                    secondary={entry.title}
                  />
                ))
              )}
            </section>
          ) : null}

          <ProjectHistorySection t={t} rows={resumeProjectHistory} />

          <SkillsSection title={t.capabilityStackLabel} groups={stackGroups} />

          {learningGroups.map((group) => (
            <section className="resume-section" key={group.id}>
              <h2 className="resume-section-title">{group.title}</h2>
              {group.items.map((item, index) => (
                <ResumeEntry key={index} period={item.period} {...learningEntryProps(group, item)} />
              ))}
            </section>
          ))}
        </article>
      </main>
    </>
  );
}
