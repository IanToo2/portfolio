// QA Tester 지원용. 문구는 QA 품질그룹 지원 경력과 QA 프로젝트에 이미 있는 사실만 사용한다.
export default {
  id: "qa",
  label: "QA Tester",
  labelEn: "QA Tester",
  profile: {
    role: "QA / 테스트 자동화",
    roleEn: "QA / Test Automation",
    tagline: "반복되는 검증은 자동화하고, 결함은 재현 가능한 기록으로 남깁니다.",
    taglineEn: "I automate repetitive checks and leave every defect with a reproducible record.",
    intro:
      "EMRO에서 SCM 솔루션을 개발하다가 2026년 2월부터 10월까지 QA 품질그룹을 지원하며 표준 솔루션 릴리즈 품질 검증을 맡았습니다. 시나리오 테스트, 결함 전달, 수정 검증을 수행했고, Playwright와 Agent AI로 QA 자동화 운영 도구를 혼자 만들어 정기 릴리즈 QA 공수를 약 70% 줄였습니다.",
    introEn:
      "After building SCM solutions at EMRO, I supported the QA Quality Group from February to October 2026, owning release quality validation for the standard solution. I ran scenario tests, handed off defects, and verified fixes, and built a QA automation operations tool on my own with Playwright and Agent AI, cutting recurring release QA effort by about 70%.",
    webIntro:
      "SCM 솔루션 QA와 테스트 자동화를 하는 개발자입니다. 2024년 9월부터 EMRO에서 SCM 구축과 전환 개발을 했고, 2026년 2월부터 10월까지 QA 품질그룹을 지원하며 릴리즈 검증과 QA 자동화 도구 구축·운영을 맡았습니다.",
    webIntroEn:
      "I'm a developer working on SCM solution QA and test automation. Since September 2024 I've built SCM implementation and migration projects at EMRO, and from February to October 2026 I supported the QA Quality Group, handling release validation and building and running a QA automation tool."
  },
  fit: "SCM 도메인 QA / 테스트 자동화 엔지니어",
  fitEn: "SCM Domain QA / Test Automation Engineer",
  trackOrder: ["qa", "scm", "team"],
  highlights: ["qa-automation", "integration", "scm-delivery", "team-lead"],
  // QA 자동화 운영 도구 프로젝트의 tech 목록에서 가져온 그룹
  extraStack: [
    {
      title: "Test Automation",
      titleEn: "Test Automation",
      items: ["Playwright", "TypeScript", "Node.js", "Claude Code", "Codex"]
    }
  ],
  stackOrder: ["Delivery", "Collaboration", "Backend", "Database", "Cloud", "Frontend"]
};
