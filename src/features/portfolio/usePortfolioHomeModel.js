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
    localizedExperience,
    localizedEducation,
    localizedTraining,
    localizedAwards,
    localizedCertifications,
    summaryQuick,
    featuredProjects,
    workScmProjects,
    workQaProjects,
    teamProjects,
    projectCardLabels
  };
}
