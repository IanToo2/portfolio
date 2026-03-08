import {
  PROJECT_CATEGORY,
  PROJECT_TRACK,
  SCAN_HIERARCHY,
  SUMMARY_QUICK_MODEL
} from "../../../data/portfolioData";

const DATE_PATTERN = /(20\d{2})\.(0[1-9]|1[0-2])/g;

export const normalizeToken = (value) =>
  String(value ?? "")
    .toLowerCase()
    .replace(/\s+/g, "");

export const createProjectId = (project) => {
  const nameToken = normalizeToken(project.nameEn ?? project.name ?? "project");
  const periodToken = normalizeToken(project.periodEn ?? project.period ?? "period");
  return `${nameToken}-${periodToken}`;
};

export const periodOrderKey = (periodText) => {
  const matches = [...String(periodText ?? "").matchAll(DATE_PATTERN)];
  if (!matches.length) return Number.NEGATIVE_INFINITY;
  const [, yearText, monthText] = matches[matches.length - 1];
  return Number(yearText) * 100 + Number(monthText);
};

export const byLatestPeriod = (a, b) => periodOrderKey(b.period) - periodOrderKey(a.period);

export const resolvePendingStatus = (project) => {
  const matches = [...String(project.period ?? "").matchAll(DATE_PATTERN)];
  if (!matches.length) return Boolean(project.isPending);

  const [, yearText, monthText] = matches[matches.length - 1];
  const yearNumber = Number(yearText);
  const monthNumber = Number(monthText);
  const endOfMonth = new Date(yearNumber, monthNumber, 0, 23, 59, 59, 999);
  return endOfMonth >= new Date();
};

export const resolveTenureYearLabel = (tenureStart, lang) => {
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

export const createLocalize = (lang) => (item, field, fallbackField = field) =>
  lang === "en" ? item[`${field}En`] ?? item[fallbackField] : item[field];

export const createLocalizeList = (localize) => (item, field, fallbackField = field) => {
  const resolved = localize(item, field, fallbackField);
  return Array.isArray(resolved) ? resolved : item[fallbackField];
};

export const localizeTimelineItems = (items, localize, localizeList) =>
  items.map((item) => ({
    ...item,
    period: localize(item, "period"),
    organization: localize(item, "organization"),
    title: localize(item, "title"),
    bullets: localizeList(item, "bullets")
  }));

export const resolveProjectCategory = (project) => project.category ?? PROJECT_CATEGORY.WORK;

export const resolveProjectTrack = (project, category) => {
  if (project.track) return project.track;
  return category === PROJECT_CATEGORY.TEAM ? PROJECT_TRACK.TEAM : PROJECT_TRACK.SCM;
};

export const buildScanHierarchy = (lang, localize) => ({
  stages: SCAN_HIERARCHY.stages.map((stage) => ({
    id: stage.id,
    label: localize(stage, "label"),
    detail: localize(stage, "detail")
  })),
  sectionOrder: SCAN_HIERARCHY.sectionOrder.map((item) => localize(item, "label")),
  textRules: {
    subtitle: lang === "en" ? SCAN_HIERARCHY.textRules.subtitleEn : SCAN_HIERARCHY.textRules.subtitle,
    contribution: lang === "en" ? SCAN_HIERARCHY.textRules.contributionEn : SCAN_HIERARCHY.textRules.contribution
  }
});

export const buildSummaryQuick = ({
  featuredProjects,
  localizedHighlights,
  localizedMetrics,
  localizedProfile,
  lang,
  t
}) => {
  const strengths = localizedHighlights
    .slice(0, SUMMARY_QUICK_MODEL.strengthsMax)
    .map((item) => item.title);
  const impacts = featuredProjects
    .flatMap((project) =>
      (project.metrics ?? []).slice(0, 1).map((metric) => `${metric.label}: ${metric.value}`)
    )
    .slice(0, SUMMARY_QUICK_MODEL.impactsMax);
  const fallbackImpacts = localizedMetrics
    .slice(0, SUMMARY_QUICK_MODEL.metricFallbackMax)
    .map((item) => `${item.label}: ${item.value}`);

  return {
    coreLine: localizedProfile.tagline,
    strengths,
    impacts: impacts.length ? impacts : fallbackImpacts,
    fit: t.summaryQuickFitValue ?? (lang === "en" ? "SCM Domain Backend Developer" : "SCM 도메인 Backend Developer")
  };
};
