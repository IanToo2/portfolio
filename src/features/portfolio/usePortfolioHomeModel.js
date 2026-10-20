import { useMemo } from "react";
import {
  AWARDS,
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  EXTRA_PROJECT_HISTORY,
  HIGHLIGHTS,
  METRICS,
  PROFILE,
  PROJECTS,
  STACK,
  TRAINING
} from "../../data/portfolioData";
import {
  buildSummaryQuick,
  byLatestPeriod,
  createLocalize,
  createLocalizeList,
  createProjectId,
  localizeTimelineItems,
  periodOrderKey,
  pickInOrder,
  resolvePendingStatus,
  resolveProjectCategory,
  resolveProjectTrack,
  resolveTenureYearLabel,
  splitProjectNarrative,
  stripContributionPrefix
} from "./lib/modelHelpers";
const FEATURED_TRACK_ORDER = { scm: 0, qa: 1, team: 2 };

export default function usePortfolioHomeModel({ lang, t, variant = null }) {
  const localize = useMemo(() => createLocalize(lang), [lang]);
  const localizeList = useMemo(() => createLocalizeList(localize), [localize]);

  // 직무 버전이면 트랙 순서를 그 설정으로, 아니면 기존 순서를 쓴다.
  const trackRank = useMemo(() => {
    const order = variant?.trackOrder;
    if (!order?.length) return FEATURED_TRACK_ORDER;
    return Object.fromEntries(order.map((track, index) => [track, index]));
  }, [variant]);

  const localizedProfile = useMemo(() => {
    const profile = { ...PROFILE, ...variant?.profile };
    return {
      name: localize(profile, "name", "name"),
      role: localize(profile, "role"),
      domain: localize(profile, "domain"),
      tagline: localize(profile, "tagline"),
      intro: localize(profile, "intro"),
      webIntro: localize(profile, "webIntro"),
      now: localize(profile, "now"),
      email: profile.email,
      github: profile.github
    };
  }, [localize, variant]);

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
      pickInOrder(HIGHLIGHTS, (item) => item.id, variant?.highlights).map((item) => ({
        ...item,
        title: localize(item, "title"),
        text: localize(item, "text")
      })),
    [localize, variant]
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
          summary: localize(project, "summary"),
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
      [...(variant?.extraStack ?? []), ...pickInOrder(STACK, (group) => group.title, variant?.stackOrder)].map(
        (group) => ({
          ...group,
          title: localize(group, "title"),
          items: localizeList(group, "items")
        })
      ),
    [localize, localizeList, variant]
  );

  const allWorkProjects = useMemo(
    () => localizedProjects.filter((project) => project.category === "work"),
    [localizedProjects]
  );

  const featuredProjects = useMemo(
    () =>
      [...localizedProjects]
        .filter((project) => project.isFeatured)
        .sort(
          (a, b) =>
            (trackRank[a.track] ?? Number.MAX_SAFE_INTEGER) -
              (trackRank[b.track] ?? Number.MAX_SAFE_INTEGER) ||
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
    [localizedProjects, trackRank]
  );

  const highlightedProjects = useMemo(
    () => featuredProjects.slice(0, 3),
    [featuredProjects]
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

    return pickInOrder(
      [
        { id: "scm", label: t.scmHead, count: scm.length, projects: scm },
        { id: "qa", label: t.qaHead, count: qa.length, projects: qa },
        { id: "team", label: t.teamHead, count: team.length, projects: team }
      ],
      (group) => group.id,
      variant?.trackOrder
    );
  }, [allWorkProjects, featuredProjects, localizedProjects, t.qaHead, t.scmHead, t.teamHead, variant]);

  // 경력기술서 앞쪽 프로젝트 이력 표: 실무 투입 이력 전부를 최신순 한 줄씩.
  // 영문 기간(Oct 2024)은 날짜 패턴에 걸리지 않아 원본(한국어) 기간으로 정렬한다.
  const resumeProjectHistory = useMemo(() => {
    const toRow = (item) => ({
      sortKey: periodOrderKey(item.period),
      period: localize(item, "period"),
      name: localize(item, "name"),
      kind: localize(item, "kind"),
      client: localize(item, "client"),
      teamSize: localize(item, "teamSize"),
      position: localize(item, "position"),
      tech: localizeList(item, "tech") ?? []
    });
    return [
      ...PROJECTS.filter((project) => resolveProjectCategory(project) === "work").map(toRow),
      ...EXTRA_PROJECT_HISTORY.map(toRow)
    ].sort((a, b) => b.sortKey - a.sortKey);
  }, [localize, localizeList]);

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

  const summaryQuick = useMemo(() => {
    const summary = buildSummaryQuick({
      highlightedProjects,
      localizedHighlights,
      localizedMetrics,
      localizedProfile,
      lang,
      t
    });
    const fit = variant ? localize(variant, "fit") : null;
    return fit ? { ...summary, fit } : summary;
  }, [highlightedProjects, lang, localize, localizedHighlights, localizedMetrics, localizedProfile, t, variant]);

  const stackGroups = useMemo(() => localizedStack, [localizedStack]);

  const resumeStrengths = useMemo(
    () => localizedHighlights.slice(0, 4).map((item) => item.title),
    [localizedHighlights]
  );

  const webProjectGroups = useMemo(() => {
    // 직무 버전이면 해당 트랙 프로젝트가 먼저 오도록 트랙 순서를 우선 적용한다.
    const byTrack = (a, b) =>
      variant?.trackOrder?.length
        ? (trackRank[a.track] ?? Number.MAX_SAFE_INTEGER) - (trackRank[b.track] ?? Number.MAX_SAFE_INTEGER)
        : 0;
    const decorate = (projects) =>
      [...projects].sort((a, b) => byTrack(a, b) || byLatestPeriod(a, b)).map((project) => ({
        ...project,
        details: project.contributions.map(stripContributionPrefix).filter(Boolean)
      }));

    return [
      { id: "work", title: t.web.workTitle, projects: decorate(allWorkProjects) },
      {
        id: "team",
        title: t.web.teamTitle,
        projects: decorate(localizedProjects.filter((project) => project.category === "team"))
      }
    ].filter((group) => group.projects.length);
  }, [allWorkProjects, localizedProjects, t.web.teamTitle, t.web.workTitle, trackRank, variant]);

  const webHistory = useMemo(() => {
    const lines = [
      ...localizedExperience.map((item) => ({
        period: item.period,
        text: [item.organization, item.title].filter(Boolean).join(", ")
      })),
      ...localizedTraining.map((item) => ({
        period: item.period,
        text: [item.organization, item.title].filter(Boolean).join(", ")
      })),
      ...localizedEducation.map((item) => ({
        period: item.period,
        text: [item.organization, item.bullets?.[1] ?? item.title].filter(Boolean).join(", ")
      })),
      ...localizedAwards.map((item) => ({
        period: item.period,
        text: [item.organization, item.title].filter(Boolean).join(" ")
      }))
    ];
    if (localizedCertifications.length) {
      lines.push({
        period: t.web.certificationsLabel,
        text: localizedCertifications.map((item) => item.title).join(", ")
      });
    }
    return lines;
  }, [
    localizedAwards,
    localizedCertifications,
    localizedEducation,
    localizedExperience,
    localizedTraining,
    t.web.certificationsLabel
  ]);

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
    resumeProjectGroups,
    resumeProjectHistory,
    resumeStrengths,
    stackGroups,
    experienceGroups,
    learningGroups,
    summaryQuick,
    projectCardLabels,
    webProjectGroups,
    webHistory
  };
}
