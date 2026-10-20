import dev from "./dev.js";
import qa from "./qa.js";

// 직무별 포트폴리오 설정. 원본 데이터(portfolioData.js)는 그대로 두고 선택·순서·문구 덮어쓰기만 정의한다.
// 경로: #/resume/<id>, #/card/<id>. 지정하지 않으면 전체 버전.
export const VARIANTS = Object.freeze({
  [dev.id]: dev,
  [qa.id]: qa
});

export const resolveVariant = (id) => (id ? VARIANTS[id] ?? null : null);
