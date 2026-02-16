import { useMemo } from "react";
import {
  AWARDS,
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  FOCUS,
  HIGHLIGHTS,
  METRICS,
  NAV_ITEMS,
  PROFILE,
  PROJECTS,
  STACK,
  TRAINING
} from "../data/portfolioData";

const DATE_PATTERN = /(20\d{2})\.(0[1-9]|1[0-2])/g;
const FEATURED_PROJECT_KEYWORDS = ["spigen", "cj"];

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

const isQaProject = (project) => {
  if (normalizeToken(project.kind) === "qa" || normalizeToken(project.kindEn) === "qa") return true;

  const scopeValues = Array.isArray(project.scope) ? project.scope : [];
  const scopeEnValues = Array.isArray(project.scopeEn) ? project.scopeEn : [];
  return [...scopeValues, ...scopeEnValues].some((scope) => normalizeToken(scope) === "qa");
};

const isTeamProject = (project) => {
  const koKind = normalizeToken(project.kind);
  const enKind = normalizeToken(project.kindEn);
  return koKind.includes("팀프로젝트") || enKind.includes("teamproject");
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
        value: localize(item, "value")
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
      PROJECTS.map((project) => ({
        ...project,
        id: createProjectId(project),
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
      })),
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

  const localizedFocus = useMemo(
    () =>
      FOCUS.map((item) => ({
        ...item,
        title: localize(item, "title"),
        desc: localize(item, "desc")
      })),
    [lang]
  );

  const teamProjects = useMemo(
    () => localizedProjects.filter((project) => isTeamProject(project)).sort(byLatestPeriod),
    [localizedProjects]
  );

  const workScmProjects = useMemo(
    () =>
      localizedProjects
        .filter((project) => !isTeamProject(project) && !isQaProject(project))
        .sort(byLatestPeriod),
    [localizedProjects]
  );

  const workQaProjects = useMemo(
    () =>
      localizedProjects
        .filter((project) => !isTeamProject(project) && isQaProject(project))
        .sort(byLatestPeriod),
    [localizedProjects]
  );

  const featuredProjects = useMemo(
    () =>
      workScmProjects
        .filter((project) => {
          const koName = (project.name ?? "").toLowerCase();
          const enName = (project.nameEn ?? "").toLowerCase();
          return FEATURED_PROJECT_KEYWORDS.some(
            (keyword) => koName.includes(keyword) || enName.includes(keyword)
          );
        })
        .slice(0, 2),
    [workScmProjects]
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
    localizedNavItems,
    localizedMetrics,
    localizedHighlights,
    localizedStack,
    localizedExperience,
    localizedEducation,
    localizedTraining,
    localizedAwards,
    localizedCertifications,
    localizedFocus,
    featuredProjects,
    workScmProjects,
    workQaProjects,
    teamProjects,
    projectCardLabels
  };
}
