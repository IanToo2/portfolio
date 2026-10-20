import { HIGHLIGHTS, PROFILE, PROJECT_TRACK, STACK } from "../src/data/portfolioData.js";
import { VARIANTS } from "../src/data/variants/index.js";

// 직무별 설정이 원본 데이터에 실제로 있는 항목만 가리키는지, 한/영 쌍이 맞는지 검사한다.
const errors = [];
const highlightIds = new Set(HIGHLIGHTS.map((item) => item.id));
const stackTitles = new Set(STACK.map((group) => group.title));
const tracks = new Set(Object.values(PROJECT_TRACK));

const checkRefs = (variantId, field, values, known) => {
  (values ?? []).forEach((value) => {
    if (!known.has(value)) errors.push(`${variantId}.${field}: unknown "${value}"`);
  });
};

const checkPairs = (variantId, field, source) => {
  Object.keys(source ?? {})
    .filter((key) => !key.endsWith("En") && typeof source[key] === "string")
    .forEach((key) => {
      if (!(`${key}En` in source)) errors.push(`${variantId}.${field}.${key}: missing ${key}En`);
    });
};

Object.entries(VARIANTS).forEach(([key, variant]) => {
  if (variant.id !== key) errors.push(`${key}: id mismatch "${variant.id}"`);
  if (!/^[a-z0-9-]+$/.test(variant.id)) errors.push(`${key}: id must be lowercase [a-z0-9-] for the URL`);

  checkRefs(key, "highlights", variant.highlights, highlightIds);
  checkRefs(key, "stackOrder", variant.stackOrder, stackTitles);
  checkRefs(key, "trackOrder", variant.trackOrder, tracks);

  Object.keys(variant.profile ?? {}).forEach((field) => {
    if (!(field in PROFILE)) errors.push(`${key}.profile.${field}: not a PROFILE field`);
  });
  checkPairs(key, "profile", variant.profile);
  checkPairs(key, "root", { label: variant.label, labelEn: variant.labelEn, fit: variant.fit, fitEn: variant.fitEn });
  (variant.extraStack ?? []).forEach((group, index) => checkPairs(key, `extraStack[${index}]`, group));
});

if (errors.length) {
  console.error("[validate:variants] failed");
  errors.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log(`[validate:variants] OK (${Object.keys(VARIANTS).length} variants)`);
