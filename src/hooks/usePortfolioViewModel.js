import { useMemo } from "react";
import {
  AWARDS,
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  HIGHLIGHTS,
  METRICS,
  NAV_ITEMS,
  PROFILE,
  PROJECT_CATEGORY,
  PROJECT_TRACK,
  PROJECTS,
  STACK,
  TRAINING
} from "../data/portfolioData";

const DATE_PATTERN = /(20\d{2})\.(0[1-9]|1[0-2])/g;

const normalizeToken = (value) =>
  String(value ?? "")
    .toLowerCase()
    .replace(/\s+/g, "");

const createProjectId = (project) => {
  const nameToken = normalizeToken(project.nameEn ?? project.name ?? "project");
  const periodToken = normalizeToken(project.periodEn ?? project.period ?? "period");
  return `${nameToken}-${periodToken}`;
};

const periodOrderKey = (periodText) => {
  const matches = [...String(periodText ?? "").matchAll(DATE_PATTERN)];
  if (!matches.length) return Number.NEGATIVE_INFINITY;
  const [, yearText, monthText] = matches[matches.length - 1];
  return Number(yearText) * 100 + Number(monthText);
};

const byLatestPeriod = (a, b) => periodOrderKey(b.period) - periodOrderKey(a.period);

const resolvePendingStatus = (project) => {
  const matches = [...String(project.period ?? "").matchAll(DATE_PATTERN)];
  if (!matches.length) return Boolean(project.isPending);

  const [, yearText, monthText] = matches[matches.length - 1];
  const yearNumber = Number(yearText);
  const monthNumber = Number(monthText);
  const endOfMonth = new Date(yearNumber, monthNumber, 0, 23, 59, 59, 999);
  return endOfMonth >= new Date();
};

const resolveTenureYearLabel = (tenureStart, lang) => {
  const match = String(tenureStart ?? "").match(/^(20\d{2})-(0[1-9]|1[0-2])$/);
  if (!match) return null;

  const startYear = Number(match[1]);
  const startMonth = Number(match[2]);
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const monthDiff = (currentYear - startYear) * 12 + (currentMonth - startMonth);
  const tenureYear = Math.floor(Math.max(0, monthDiff) / 12) + 1;
  return lang === "en" ? `Year ${tenureYear}` : `${tenureYear}년차`;
};

export default function usePortfolioViewModel({ lang, t }) {
  const localize = (item, field, fallbackField = field) =>
    lang === "en" ? item[`${field}En`] ?? item[fallbackField] : item[field];
  const localizeList = (item, field, fallbackField = field) => {
    const resolved = localize(item, field, fallbackField);
    return Array.isArray(resolved) ? resolved : item[fallbackField];
  };
  const localizeTimelineItems = (items) =>
    items.map((item) => ({
      ...item,
      period: localize(item, "period"),
      organization: localize(item, "organization"),
      title: localize(item, "title"),
      bullets: localizeList(item, "bullets")
    }));
  const resolveProjectCategory = (project) => project.category ?? PROJECT_CATEGORY.WORK;
  const resolveProjectTrack = (project, category) => {
    if (project.track) return project.track;
    return category === PROJECT_CATEGORY.TEAM ? PROJECT_TRACK.TEAM : PROJECT_TRACK.SCM;
  };

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
    [lang]
  );

  const localizedNavItems = useMemo(
    () => NAV_ITEMS.map((item) => ({ ...item, label: localize(item, "label") })),
    [lang]
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
    [lang]
  );

  const localizedHighlights = useMemo(
    () =>
      HIGHLIGHTS.map((item) => ({
        ...item,
        title: localize(item, "title"),
        text: localize(item, "text")
      })),
    [lang]
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
    [lang]
  );

  const localizedStack = useMemo(
    () =>
      STACK.map((group) => ({
        ...group,
        title: localize(group, "title"),
        items: localizeList(group, "items")
      })),
    [lang]
  );

  const localizedExperience = useMemo(
    () => localizeTimelineItems(EXPERIENCE),
    [lang]
  );

  const localizedEducation = useMemo(
    () => localizeTimelineItems(EDUCATION),
    [lang]
  );

  const localizedTraining = useMemo(
    () => localizeTimelineItems(TRAINING),
    [lang]
  );

  const localizedAwards = useMemo(
    () => localizeTimelineItems(AWARDS),
    [lang]
  );

  const localizedCertifications = useMemo(
    () => localizeTimelineItems(CERTIFICATIONS),
    [lang]
  );

  const teamProjects = useMemo(
    () =>
      localizedProjects
        .filter((project) => project.category === PROJECT_CATEGORY.TEAM)
        .sort(byLatestPeriod),
    [localizedProjects]
  );

  const workProjects = useMemo(
    () => localizedProjects.filter((project) => project.category === PROJECT_CATEGORY.WORK),
    [localizedProjects]
  );

  const workScmProjects = useMemo(
    () =>
      workProjects
        .filter((project) => project.track === PROJECT_TRACK.SCM)
        .sort(byLatestPeriod),
    [workProjects]
  );

  const workQaProjects = useMemo(
    () =>
      workProjects
        .filter((project) => project.track === PROJECT_TRACK.QA)
        .sort(byLatestPeriod),
    [workProjects]
  );

  const featuredProjects = useMemo(
    () =>
      workProjects
        .filter((project) => project.isFeatured)
        .sort(byLatestPeriod)
        .slice(0, 2),
    [workProjects]
  );

  const summaryQuick = useMemo(() => {
    const strengths = localizedHighlights.slice(0, 3).map((item) => item.title);
    const impacts = featuredProjects
      .flatMap((project) =>
        (project.metrics ?? []).slice(0, 1).map((metric) => `${metric.label}: ${metric.value}`)
      )
      .slice(0, 3);
    const fallbackImpacts = localizedMetrics
      .slice(0, 2)
      .map((item) => `${item.label}: ${item.value}`);

    return {
      coreLine: localizedProfile.tagline,
      strengths,
      impacts: impacts.length ? impacts : fallbackImpacts,
      fit: t.summaryQuickFitValue ?? (lang === "ko" ? "SCM 도메인 Backend Developer" : "SCM Domain Backend Developer")
    };
  }, [featuredProjects, lang, localizedHighlights, localizedMetrics, localizedProfile.tagline, t.summaryQuickFitValue]);

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
    localizedNavItems,
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
