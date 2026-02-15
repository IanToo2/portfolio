export const PROFILE = {
  name: "김정인",
  role: "Backend Developer",
  domain: "SCM Trade & Logistics",
  tagline: "업무 맥락으로 빠르게 구현하고 안정적으로 운영합니다.",
  intro:
    "EMRO에서 SCM 무역/물류 도메인을 개발하고 있습니다. 비즈니스 로직을 명확히 설계하고, 운영에서 바로 체감되는 개선을 만드는 데 집중합니다.",
  email: "rlawjddla0203@gmail.com",
  github: "https://github.com/IanToo2"
};

export const NAV_ITEMS = [
  { id: "summary", label: "소개", emoji: "👋" },
  { id: "projects", label: "프로젝트", emoji: "🗂️" },
  { id: "stack", label: "기술 스택", emoji: "🛠️" },
  { id: "experience", label: "경력", emoji: "📌" },
  { id: "focus", label: "중점 업무", emoji: "🎯" },
  { id: "contact", label: "연락", emoji: "✉️" }
];

export const METRICS = [
  { label: "실무 경력", value: "2024.09 - 현재", icon: "clock" },
  { label: "현재 소속", value: "EMRO", icon: "building" },
  { label: "주력 도메인", value: "SCM", icon: "box" }
];

export const STACK = [
  { title: "Backend", icon: "server", items: ["Java", "Spring Boot", "JPA", "MyBatis"] },
  { title: "Database", icon: "database", items: ["Oracle", "PostgreSQL", "MySQL"] },
  { title: "Cloud", icon: "cloud", items: ["AWS EC2", "AWS RDS", "AWS S3", "Docker"] },
  { title: "Delivery", icon: "gear", items: ["Jenkins", "GitLab CI"] },
  { title: "Collaboration", icon: "team", items: ["Git", "GitLab", "Jira"] },
  { title: "Frontend", icon: "layout", items: ["JavaScript", "Polymer", "React"] }
];

export const EXPERIENCE = [
  {
    period: "2024.09 - 현재",
    organization: "EMRO",
    title: "SCM Developer",
    bullets: [
      "SCM 무역/물류 기능 신규 개발 및 운영 고도화",
      "SAP 연동 데이터 처리 로직 설계 및 안정화",
      "Oracle 기반 쿼리 최적화와 배치 성능 개선"
    ]
  }
];

export const EDUCATION = [
  {
    period: "2017.03 - 2024.02",
    organization: "경북대학교",
    title: "학사",
    bullets: ["2017년 3월 입학 ~ 2024년 2월 졸업"]
  }
];

export const TRAINING = [
  {
    period: "2024.01 - 2024.09",
    organization: "삼성청년소프트웨어아카데미(SSAFY)",
    title: "교육과정",
    bullets: ["2024년 1월 ~ 9월 수료"]
  }
];

export const PROJECTS = [
  {
    name: "Spigen Korea 신규 SCM 프로젝트 구축",
    period: "2024.10 - 2025.03",
    kind: "신규 구축",
    scope: ["개발", "테스트", "배포", "운영"],
    tech: ["Java", "Spring", "Jenkins", "Git", "GitHub", "Polymer", "JavaScript", "PostgreSQL"],
    contributions: [
      "SAP 인터페이스(MM11/MM18) 연동 및 적재 로직 개발/고도화",
      "인터페이스 처리 중복 데이터 처리 기능 구현으로 연계 안정성 강화",
      "DAMO 결재 연동 및 콜백/보안 설정 조정",
      "계약 단가 모니터링(평균 단가 화면) 신규 개발",
      "입고 모듈 개발(입고 검수 팝업, 입고 마스터 전환 기능 추가, 조회 쿼리 개선)"
    ],
    isPending: false
  },
  {
    name: "CJ Freshway SCM 컨버전 프로젝트",
    period: "2025.05 - 2025.09",
    kind: "대규모 엔터프라이즈 SCM 시스템 컨버전 및 표준화 프로젝트",
    scope: ["개발", "테스트", "배포", "운영"],
    tech: ["Java", "Spring", "Jenkins", "Git", "GitLab", "Polymer", "JavaScript", "PostgreSQL"],
    contributions: [
      "SCM v7 기반 시스템을 v9로 업그레이드하는 범위와 연계 영향도를 선행 분석해 전환 로드맵을 수립",
      "Oracle 기반 핵심 스키마와 쿼리를 PostgreSQL로 이관하며 데이터 타입/제약/인덱스 정합성을 검증",
      "Oracle SQL 쿼리(타입/함수/함수형 차이) 변환으로 인한 QA 이슈를 중심으로 회귀 케이스를 정리",
      "개발·테스트·배포·운영 단계별 체크리스트를 정비해 안정적 전환을 지원"
    ],
    isPending: false
  },
  {
    name: "S-OIL SCM QA 테스트",
    period: "기간 입력 예정",
    kind: "QA",
    scope: ["테스트"],
    tech: ["Oracle", "PostgreSQL", "SQL"],
    contributions: [
      "Oracle SQL 쿼리의 PostgreSQL 변환 이슈(타입/함수/문법) 중심으로 QA 테스트 시나리오를 정리하고 확인",
      "조회 성능과 결과 정합성 회귀 케이스를 기준으로 검증 범위를 분리해 테스트 수행"
    ],
    isPending: true
  },
  {
    name: "SCHNEIDER POC 프로젝트",
    period: "기간 입력 예정",
    kind: "영업 제안용 PoC",
    scope: ["역할/범위 입력 예정"],
    tech: ["Java", "Spring", "Jenkins", "Git", "GitLab", "Polymer", "JavaScript", "PostgreSQL"],
    contributions: ["핵심 기여 입력 예정"],
    isPending: true
  },
  {
    name: "SMARTSUITE 1.0 수출입 모듈 개발",
    period: "2025.12 - 2026.02",
    kind: "프로젝트 성격 입력 예정",
    scope: ["역할/범위 입력 예정"],
    tech: ["기술 스택 입력 예정"],
    contributions: ["핵심 기여 입력 예정"],
    isPending: true
  }
];

export const FOCUS = [
  {
    title: "SCM 도메인 개발",
    desc: "SCM 도메인의 핵심 기능을 설계하고 개발하며, 운영에서 바로 체감되는 개선을 만드는 것을 우선합니다.",
    icon: "route"
  },
  {
    title: "SAP Integration",
    desc: "외부 시스템과의 데이터 정합성을 유지하면서도 업무 변경 요청을 빠르게 반영합니다.",
    icon: "link"
  },
  {
    title: "Operation Stability",
    desc: "오류를 줄이는 방향으로 로직과 쿼리를 개선하고, 운영 대응 난이도를 낮춥니다.",
    icon: "shield"
  }
];