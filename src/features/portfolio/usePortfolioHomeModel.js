import { useMemo } from "react";
import {
  AWARDS,
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  HIGHLIGHTS,
  METRICS,
  PROFILE,
  PROJECTS,
  STACK,
  TRAINING
} from "../../data/portfolioData";
import {
  buildScanHierarchy,
  buildSummaryQuick,
  byLatestPeriod,
  createLocalize,
  createLocalizeList,
  createProjectId,
  localizeTimelineItems,
  resolvePendingStatus,
  resolveProjectCategory,
  resolveProjectTrack,
  resolveTenureYearLabel
} from "./lib/modelHelpers";

const CONTRIBUTION_PREFIX_PATTERN = /^(문제|역할|영향|Problem|Role|Impact)\s*:\s*/;

const stripContributionPrefix = (value) => String(value ?? "").replace(CONTRIBUTION_PREFIX_PATTERN, "").trim();

export default function usePortfolioHomeModel({ lang, t }) {
  const localize = useMemo(() => createLocalize(lang), [lang]);
  const localizeList = useMemo(() => createLocalizeList(localize), [localize]);

  const localizedProfile = useMemo(
    () => ({
      name: localize(PROFILE, "name", "name"),
      role: localize(PROFILE, "role"),
      domain: localize(PROFILE, "domain"),
      tagline: localize(PROFILE, "tagline"),
      intro: localize(PROFILE, "intro"),
      email: PROFILE.email,
      github: PROFILE.github
    }),
    [localize]
  );

  const navItems = useMemo(
    () => [
      { id: "home", label: t.summaryLabel },
      { id: "projects", label: t.projectsLabel },
      { id: "capabilities", label: t.highlightsLabel },
      { id: "career", label: t.careerLabel ?? t.experienceLabel },
      { id: "contact", label: t.contactLabel }
    ],
    [t]
  );

  const scanHierarchy = useMemo(() => buildScanHierarchy(lang, localize), [lang, localize]);

  const localizedMetrics = useMemo(
    () =>
      METRICS.map((item) => ({
        ...item,
        label: localize(item, "label"),
        value: (() => {
          const baseValue = localize(item, "value");
          const tenureLabel = resolveTenureYearLabel(item.tenureStart, lang);
          return tenureLabel ? `${baseValue} (${tenureLabel})` : baseValue;
        })()
      })),
    [lang, localize]
  );

  const localizedHighlights = useMemo(
    () =>
      HIGHLIGHTS.map((item) => ({
        ...item,
        title: localize(item, "title"),
        text: localize(item, "text")
      })),
    [localize]
  );

  const localizedProjects = useMemo(
    () =>
      PROJECTS.map((project) => {
        const category = resolveProjectCategory(project);
        const track = resolveProjectTrack(project, category);

        return {
          ...project,
          id: createProjectId(project),
          category,
          track,
          isFeatured: Boolean(project.isFeatured),
          name: localize(project, "name"),
          period: localize(project, "period"),
          kind: localize(project, "kind"),
          isPending: resolvePendingStatus(project),
          scope: localizeList(project, "scope"),
          tech: localizeList(project, "tech"),
          contributions: localizeList(project, "contributions"),
          metrics: project.metrics?.map((metric) => ({
            label: localize(metric, "label"),
            value: localize(metric, "value")
          }))
        };
      }),
    [localize, localizeList]
  );

  const localizedStack = useMemo(
    () =>
      STACK.map((group) => ({
        ...group,
        title: localize(group, "title"),
        items: localizeList(group, "items")
      })),
    [localize, localizeList]
  );

  const workProjects = useMemo(
    () => localizedProjects.filter((project) => project.category === "work"),
    [localizedProjects]
  );

  const sortProjects = (projects) =>
    [...projects].sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured) || byLatestPeriod(a, b));

  const teamProjects = useMemo(
    () => sortProjects(localizedProjects.filter((project) => project.category === "team")),
    [localizedProjects]
  );

  const workScmProjects = useMemo(
    () => sortProjects(workProjects.filter((project) => project.track === "scm")),
    [workProjects]
  );

  const workQaProjects = useMemo(
    () => sortProjects(workProjects.filter((project) => project.track === "qa")),
    [workProjects]
  );

  const highlightedProjects = useMemo(
    () => sortProjects(workProjects).slice(0, 2),
    [workProjects]
  );

  const projectGroups = useMemo(
    () => [
      {
        id: "scm",
        label: t.scmHead,
        subtitle: t.scmSub,
        count: workScmProjects.length,
        projects: workScmProjects
      },
      {
        id: "qa",
        label: t.qaHead,
        subtitle: t.qaSub,
        count: workQaProjects.length,
        projects: workQaProjects
      },
      {
        id: "team",
        label: t.teamHead,
        subtitle: t.teamSub,
        count: teamProjects.length,
        projects: teamProjects
      }
    ],
    [t.qaHead, t.qaSub, t.scmHead, t.scmSub, t.teamHead, t.teamSub, teamProjects, workQaProjects, workScmProjects]
  );

  const localizedExperience = useMemo(() => {
    const scmCount = workProjects.filter((project) => project.track === "scm").length;
    const qaCount = workProjects.filter((project) => project.track === "qa").length;
    const mixTemplate =
      t.workProjectMixText ??
      (lang === "en"
        ? "{scm} SCM projects · {qa} QA projects"
        : "SCM 프로젝트 {scm}건 · QA 프로젝트 {qa}건");
    const mixText = mixTemplate.replace("{scm}", String(scmCount)).replace("{qa}", String(qaCount));

    return localizeTimelineItems(EXPERIENCE, localize, localizeList).map((item) => {
      if (String(item.organization ?? "").toLowerCase() !== "emro") {
        return item;
      }

      const bullets = Array.isArray(item.bullets) ? item.bullets : [];
      return {
        ...item,
        bullets: bullets[0] === mixText ? bullets : [mixText, ...bullets]
      };
    });
  }, [lang, localize, localizeList, t.workProjectMixText, workProjects]);

  const localizedEducation = useMemo(
    () => localizeTimelineItems(EDUCATION, localize, localizeList),
    [localize, localizeList]
  );

  const localizedTraining = useMemo(
    () => localizeTimelineItems(TRAINING, localize, localizeList),
    [localize, localizeList]
  );

  const localizedAwards = useMemo(
    () => localizeTimelineItems(AWARDS, localize, localizeList),
    [localize, localizeList]
  );

  const localizedCertifications = useMemo(
    () => localizeTimelineItems(CERTIFICATIONS, localize, localizeList),
    [localize, localizeList]
  );

  const learningGroups = useMemo(
    () => [
      { id: "education", title: t.timelineTitles.education, items: localizedEducation },
      { id: "training", title: t.timelineTitles.training, items: localizedTraining },
      { id: "awards", title: t.timelineTitles.awards, items: localizedAwards },
      { id: "certifications", title: t.timelineTitles.certifications, items: localizedCertifications }
    ].filter((group) => group.items.length),
    [localizedAwards, localizedCertifications, localizedEducation, localizedTraining, t.timelineTitles]
  );

  const summaryQuick = useMemo(
    () =>
      buildSummaryQuick({
        highlightedProjects,
        localizedHighlights,
        localizedMetrics,
        localizedProfile,
        lang,
        t
      }),
    [highlightedProjects, lang, localizedHighlights, localizedMetrics, localizedProfile, t]
  );

  const heroProofs = useMemo(
    () => [
      {
        id: "fit",
        label: t.summaryQuickFitLabel,
        value: summaryQuick.fit
      },
      ...summaryQuick.impacts.slice(0, 2).map((item, index) => ({
        id: `impact-${index}`,
        label: t.heroProofLabel,
        value: item
      }))
    ],
    [summaryQuick.fit, summaryQuick.impacts, t.heroProofLabel, t.summaryQuickFitLabel]
  );

  const capabilityPillars = useMemo(() => {
    const stackWindows = [
      localizedStack.slice(0, 2),
      localizedStack.slice(1, 4),
      localizedStack.slice(3, 6)
    ];

    return localizedHighlights.slice(0, 3).map((item, index) => ({
      id: `${item.title}-${index}`,
      title: item.title,
      text: item.text,
      tools: stackWindows[index]
        .flatMap((group) => group.items.slice(0, 3))
        .filter((tool, toolIndex, array) => array.indexOf(tool) === toolIndex)
        .slice(0, 7)
    }));
  }, [localizedHighlights, localizedStack]);

  const stackGroups = useMemo(() => localizedStack, [localizedStack]);

  const projectCardLabels = useMemo(
    () => ({
      ...t.projectCard
    }),
    [t.projectCard]
  );

  return {
    localizedProfile,
    navItems,
    scanHierarchy,
    localizedMetrics,
    heroProofs,
    projectGroups,
    capabilityPillars,
    stackGroups,
    localizedExperience,
    learningGroups,
    summaryQuick,
    projectCardLabels
  };
}
