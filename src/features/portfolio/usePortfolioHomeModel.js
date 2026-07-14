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
  resolveTenureYearLabel,
  splitProjectNarrative,
  stripContributionPrefix
} from "./lib/modelHelpers";
const FEATURED_TRACK_ORDER = { scm: 0, qa: 1, team: 2 };

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

  const allWorkProjects = useMemo(
    () => localizedProjects.filter((project) => project.category === "work"),
    [localizedProjects]
  );

  const sortProjects = (projects) =>
    [...projects].sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured) || byLatestPeriod(a, b));

  const featuredProjects = useMemo(
    () =>
      [...localizedProjects]
        .filter((project) => project.isFeatured)
        .sort(
          (a, b) =>
            (FEATURED_TRACK_ORDER[a.track] ?? Number.MAX_SAFE_INTEGER) -
              (FEATURED_TRACK_ORDER[b.track] ?? Number.MAX_SAFE_INTEGER) ||
            byLatestPeriod(a, b)
        )
        .map((project) => {
          const narrative = splitProjectNarrative(project.contributions);
          const normalizedContributions = project.contributions.map(stripContributionPrefix).filter(Boolean);

          return {
            ...project,
            caseStudy: {
              problem: narrative.problem ?? normalizedContributions[0] ?? "",
              roles: narrative.roles.length ? narrative.roles : normalizedContributions.slice(0, 2),
              impacts: narrative.impacts.length ? narrative.impacts : normalizedContributions.slice(2, 4)
            }
          };
        }),
    [localizedProjects]
  );

  const workProjects = useMemo(
    () => allWorkProjects.filter((project) => !project.isFeatured),
    [allWorkProjects]
  );

  const teamProjects = useMemo(
    () => sortProjects(localizedProjects.filter((project) => project.category === "team" && !project.isFeatured)),
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
    () => featuredProjects.slice(0, 3),
    [featuredProjects]
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

  const resumeProjectGroups = useMemo(() => {
    const caseById = new Map(featuredProjects.map((project) => [project.id, project.caseStudy]));
    const decorate = (projects) =>
      [...projects]
        .sort(byLatestPeriod)
        .map((project) =>
          caseById.has(project.id) ? { ...project, caseStudy: caseById.get(project.id) } : project
        );

    const scm = decorate(allWorkProjects.filter((project) => project.track === "scm"));
    const qa = decorate(allWorkProjects.filter((project) => project.track === "qa"));
    const team = decorate(localizedProjects.filter((project) => project.category === "team"));

    return [
      { id: "scm", label: t.scmHead, count: scm.length, projects: scm },
      { id: "qa", label: t.qaHead, count: qa.length, projects: qa },
      { id: "team", label: t.teamHead, count: team.length, projects: team }
    ];
  }, [allWorkProjects, featuredProjects, localizedProjects, t.qaHead, t.scmHead, t.teamHead]);

  const localizedExperience = useMemo(() => {
    const scmCount = allWorkProjects.filter((project) => project.track === "scm").length;
    const qaCount = allWorkProjects.filter((project) => project.track === "qa").length;
    const mixTemplate =
      t.workProjectMixText ??
      (lang === "en"
        ? "{scm} SCM projects · {qa} QA projects"
        : "SCM 프로젝트 {scm}건 · QA 프로젝트 {qa}건");
    const mixText = mixTemplate.replace("{scm}", String(scmCount)).replace("{qa}", String(qaCount));

    return EXPERIENCE.map((item) => {
      const company = localize(item, "company");
      const department = localize(item, "department");
      const localized = {
        ...item,
        period: localize(item, "period"),
        company,
        department,
        organization: [company, department].filter(Boolean).join(" "),
        title: localize(item, "title"),
        bullets: localizeList(item, "bullets")
      };

      if (!item.injectProjectMix) {
        return localized;
      }

      const bullets = Array.isArray(localized.bullets) ? localized.bullets : [];
      return {
        ...localized,
        bullets: bullets[0] === mixText ? bullets : [mixText, ...bullets]
      };
    });
  }, [allWorkProjects, lang, localize, localizeList, t.workProjectMixText]);

  const experienceGroups = useMemo(() => {
    const order = [];
    const byCompany = new Map();

    localizedExperience.forEach((item) => {
      const key = item.company ?? "";
      if (!byCompany.has(key)) {
        byCompany.set(key, { company: item.company, items: [] });
        order.push(key);
      }
      byCompany.get(key).items.push(item);
    });

    return order.map((key) => byCompany.get(key));
  }, [localizedExperience]);

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

  const resumeStrengths = useMemo(
    () => localizedHighlights.slice(0, 4).map((item) => item.title),
    [localizedHighlights]
  );

  const projectCardLabels = useMemo(
    () => ({
      ...t.projectCard,
      caseProblemLabel: t.caseProblemLabel,
      caseRoleLabel: t.caseRoleLabel,
      caseImpactLabel: t.caseImpactLabel
    }),
    [t.caseImpactLabel, t.caseProblemLabel, t.caseRoleLabel, t.projectCard]
  );

  return {
    localizedProfile,
    navItems,
    scanHierarchy,
    localizedMetrics,
    heroProofs,
    featuredProjects,
    projectGroups,
    resumeProjectGroups,
    resumeStrengths,
    capabilityPillars,
    stackGroups,
    localizedExperience,
    experienceGroups,
    learningGroups,
    summaryQuick,
    projectCardLabels
  };
}
