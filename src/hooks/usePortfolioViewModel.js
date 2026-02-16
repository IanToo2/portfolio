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
