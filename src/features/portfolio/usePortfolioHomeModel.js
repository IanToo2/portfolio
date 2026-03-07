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
      { id: "projects", label: t.projectsTitle },
      { id: "capabilities", label: t.stackTitle },
      { id: "career", label: t.experienceTitle },
      { id: "contact", label: t.contactTitle }
    ],
    [t]
  );

  const scanHierarchy = useMemo(
    () => buildScanHierarchy(lang, localize),
    [lang, localize]
  );

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

  const teamProjects = useMemo(
    () => localizedProjects.filter((project) => project.category === "team").sort(byLatestPeriod),
    [localizedProjects]
  );

  const workProjects = useMemo(
    () => localizedProjects.filter((project) => project.category === "work"),
    [localizedProjects]
  );

  const workScmProjects = useMemo(
    () => workProjects.filter((project) => project.track === "scm").sort(byLatestPeriod),
    [workProjects]
  );

  const workQaProjects = useMemo(
    () => workProjects.filter((project) => project.track === "qa").sort(byLatestPeriod),
    [workProjects]
  );

  const featuredProjects = useMemo(
    () => workProjects.filter((project) => project.isFeatured).sort(byLatestPeriod).slice(0, 2),
    [workProjects]
  );

  const primaryCaseStudies = useMemo(
    () =>
      featuredProjects.map((project) => {
        const [problem, role, impact] = project.contributions ?? [];
        return {
          ...project,
          problem: stripContributionPrefix(problem),
          roleSummary: stripContributionPrefix(role),
          impactSummary: stripContributionPrefix(impact),
          techPreview: (project.tech ?? []).slice(0, 4),
          metricPreview: (project.metrics ?? []).slice(0, 2)
        };
      }),
    [featuredProjects]
  );

  const supportingProjectGroups = useMemo(() => {
    const featuredProjectIds = new Set(featuredProjects.map((project) => project.id));
    const scmProjects = workScmProjects.filter((project) => !featuredProjectIds.has(project.id));

    return [
      {
        id: "scm",
        label: t.scmHead,
        subtitle: t.scmSub,
        count: scmProjects.length,
        projects: scmProjects
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
    ];
  }, [featuredProjects, t.qaHead, t.qaSub, t.scmHead, t.scmSub, t.teamHead, t.teamSub, teamProjects, workQaProjects, workScmProjects]);

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

  const summaryQuick = useMemo(
    () =>
      buildSummaryQuick({
        featuredProjects,
        localizedHighlights,
        localizedMetrics,
        localizedProfile,
        lang,
        t
      }),
    [featuredProjects, lang, localizedHighlights, localizedMetrics, localizedProfile, t]
  );

  const heroProofs = useMemo(
    () => [
      ...summaryQuick.impacts.slice(0, 2).map((item, index) => ({
        id: `impact-${index}`,
        label: lang === "en" ? "Proof" : "핵심 근거",
        value: item
      })),
      ...localizedMetrics.slice(0, 1).map((item) => ({
        id: `metric-${item.label}`,
        label: item.label,
        value: item.value
      }))
    ],
    [lang, localizedMetrics, summaryQuick.impacts]
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
        .flatMap((group) => group.items.slice(0, 2))
        .filter((tool, toolIndex, array) => array.indexOf(tool) === toolIndex)
        .slice(0, 6)
    }));
  }, [localizedHighlights, localizedStack]);

  const stackPreviewGroups = useMemo(
    () =>
      localizedStack.slice(0, 4).map((group) => ({
        ...group,
        items: group.items.slice(0, 4)
      })),
    [localizedStack]
  );

  const careerFeatured = useMemo(() => localizedExperience[0] ?? null, [localizedExperience]);

  const careerSnapshot = useMemo(
    () => [
      {
        id: "education",
        label: t.timelineTitles.education,
        title: localizedEducation[0]?.organization ?? "",
        detail: localizedEducation[0]?.title ?? "",
        period: localizedEducation[0]?.period ?? ""
      },
      {
        id: "training",
        label: t.timelineTitles.training,
        title: localizedTraining[0]?.organization ?? "",
        detail: localizedTraining[0]?.title ?? "",
        period: localizedTraining[0]?.period ?? ""
      },
      {
        id: "award",
        label: t.timelineTitles.awards,
        title: localizedAwards[0]?.title ?? "",
        detail: localizedAwards[0]?.organization ?? "",
        period: localizedAwards[0]?.period ?? ""
      },
      {
        id: "certification",
        label: t.timelineTitles.certifications,
        title: localizedCertifications[0]?.title ?? "",
        detail: localizedCertifications[0]?.organization ?? "",
        period: localizedCertifications[0]?.period ?? ""
      }
    ].filter((item) => item.title),
    [localizedAwards, localizedCertifications, localizedEducation, localizedTraining, t.timelineTitles]
  );

  const projectCardLabels = useMemo(
    () => ({
      ...t.projectCard,
      collapseLabel: lang === "ko" ? "접기" : "Collapse",
      expandLabel: lang === "ko" ? "펼치기" : "Expand"
    }),
    [lang, t]
  );

  return {
    localizedProfile,
    navItems,
    scanHierarchy,
    localizedMetrics,
    localizedHighlights,
    localizedStack,
    heroProofs,
    primaryCaseStudies,
    supportingProjectGroups,
    capabilityPillars,
    stackPreviewGroups,
    localizedExperience,
    localizedEducation,
    localizedTraining,
    localizedAwards,
    localizedCertifications,
    careerFeatured,
    careerSnapshot,
    summaryQuick,
    featuredProjects,
    workScmProjects,
    workQaProjects,
    teamProjects,
    projectCardLabels
  };
}
