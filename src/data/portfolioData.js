export const PROFILE = {
  name: "김정인",
  nameEn: "KIM Jeong-in",
  role: "Backend",
  roleEn: "Backend",
  domain: "SCM",
  domainEn: "SCM",
  tagline: "업무 맥락으로 빠르게 구현하고 안정적으로 운영합니다.",
  taglineEn: "I build systems quickly from business context and keep operations stable.",
  intro:
    "EMRO에서 SCM 도메인 솔루션 개발을 담당하고 있습니다. 구축·전환·운영 전 과정에서 비즈니스 로직을 정확히 이해해 구현하고, 테스트와 검증을 통해 현업이 바로 체감할 수 있는 개선을 만듭니다.",
  introEn:
    "I handle solution development in the SCM domain at EMRO. Across implementation, migration, and operations, I turn business logic into working code and deliver practical improvements through testing and validation.",
  email: "rlawjddla0203@gmail.com",
  github: "https://github.com/IanToo2"
};

export const NAV_ITEMS = [
  { id: "summary", label: "소개", labelEn: "Summary" },
  { id: "highlights", label: "중점 업무", labelEn: "Focus" },
  { id: "projects", label: "프로젝트", labelEn: "Projects" },
  { id: "stack", label: "기술 스택", labelEn: "Skill Set" },
  { id: "experience", label: "경력", labelEn: "Experience" },
  { id: "contact", label: "연락", labelEn: "Contact" }
];

export const SCAN_HIERARCHY = {
  stages: [
    {
      id: "role",
      label: "역할/도메인 확인",
      labelEn: "Role/Domain First",
      detail: "현재 수행 직무와 도메인을 먼저 노출",
      detailEn: "Show current role and domain before details."
    },
    {
      id: "strength",
      label: "핵심 강점 3개 스캔",
      labelEn: "Scan 3 Strengths",
      detail: "Summary 바로 아래 강점 3개를 한 번에 확인",
      detailEn: "Expose three strengths right under Summary."
    },
    {
      id: "impact",
      label: "대표 성과 2~3개 확인",
      labelEn: "Check 2-3 Impacts",
      detail: "성과 지표 중심으로 대표 결과를 우선 배치",
      detailEn: "Prioritize key outcomes with impact metrics."
    },
    {
      id: "fit",
      label: "적합 포지션 판단",
      labelEn: "Fit Position Check",
      detail: "요약 블록 마지막에 적합 포지션을 명시",
      detailEn: "State best-fit position at the end of the quick summary."
    }
  ],
  sectionOrder: [
    { id: "summary", label: "Summary", labelEn: "Summary" },
    { id: "highlights", label: "Highlights", labelEn: "Highlights" },
    { id: "projects", label: "Projects", labelEn: "Projects" }
  ],
  textRules: {
    subtitle: "1-2문장",
    subtitleEn: "1-2 sentences",
    contribution: "3-5줄",
    contributionEn: "3-5 lines"
  }
};

export const SUMMARY_QUICK_MODEL = {
  strengthsMax: 3,
  impactsMax: 3,
  metricFallbackMax: 2
};

export const METRICS = [
  { label: "실무 경력", labelEn: "Years of Experience", value: "2024.09 - 현재", valueEn: "Sep 2024 - Present", icon: "clock", tenureStart: "2024-09" },
  { label: "현재 소속", labelEn: "Current Company", value: "EMRO", valueEn: "EMRO", icon: "building" },
  { label: "주력 도메인", labelEn: "Primary Domain", value: "SCM", valueEn: "SCM", icon: "box" }
];

export const HIGHLIGHTS = [
  {
    title: "SCM 구축·전환 개발",
    titleEn: "SCM Implementation & Conversion Development",
    text: "신규 구축·컨버전 프로젝트에서 핵심 기능 구현과 도메인 전환을 담당하며 안정적인 릴리즈 기준을 정착시켰습니다.",
    textEn: "Delivered core features and domain migration in implementation and conversion projects with stable release standards.",
    icon: "shield"
  },
  {
    title: "연동 안정성과 데이터 정합성 관리",
    titleEn: "Integration Stability & Data Integrity Management",
    text: "SAP 인터페이스 로직과 중복 데이터 처리를 개선하고 DB 전환 정합성 검증으로 품질 이슈를 줄였습니다.",
    textEn: "Improved SAP interface and deduplication logic, then reduced quality issues with DB migration consistency checks.",
    icon: "database"
  },
  {
    title: "팀 프로젝트 리드 경험",
    titleEn: "Team Project Leadership",
    text: "팀 프로젝트 리드로 API 설계, 인증 체계, 배포 파이프라인을 정비해 개발-배포 흐름을 안정화했습니다.",
    textEn: "As team project lead, I standardized API design, auth flow, and deployment pipeline to stabilize delivery.",
    icon: "route"
  }
];

export const STACK = [
  {
    title: "Backend",
    titleEn: "Backend",
    icon: "server",
    proficiency: 89,
    items: ["Java", "Spring Boot", "JPA", "MyBatis"]
  },
  {
    title: "Database",
    titleEn: "Database",
    icon: "database",
    proficiency: 84,
    items: ["Oracle", "PostgreSQL", "MySQL"]
  },
  {
    title: "Cloud",
    titleEn: "Cloud",
    icon: "cloud",
    proficiency: 78,
    items: ["AWS EC2", "AWS RDS", "AWS S3", "Docker"]
  },
  {
    title: "Delivery",
    titleEn: "Delivery",
    icon: "gear",
    proficiency: 82,
    items: ["Jenkins", "GitLab CI"]
  },
  {
    title: "Collaboration",
    titleEn: "Collaboration",
    icon: "team",
    proficiency: 80,
    items: ["Git", "GitHub", "GitLab", "SVN", "Jira"]
  },
  {
    title: "Frontend",
    titleEn: "Frontend",
    icon: "layout",
    proficiency: 72,
    items: ["JavaScript", "Polymer", "React"]
  }
];

export const EXPERIENCE = [
  {
    period: "2024.09 - 현재",
    periodEn: "Sep 2024 - Present",
    company: "EMRO",
    companyEn: "EMRO",
    department: "솔루션사업본부",
    departmentEn: "Solution Business Division",
    title: "SCM Developer",
    titleEn: "SCM Developer",
    injectProjectMix: true,
    bullets: [
      "SCM 기능 신규 개발 및 운영 고도화",
      "SAP 연동 데이터 처리 로직 개발 및 안정화",
      "Oracle → PostgreSQL DB 마이그레이션을 프로젝트별로 수행하며 스키마·쿼리 전환과 성능·정합성 검증을 담당",
      "SCHNEIDER POC 참여 (영업 제안용 SCM PoC)"
    ],
    bulletsEn: [
      "Built and stabilized new SCM features.",
      "Developed and stabilized SAP integration and data processing.",
      "Performed Oracle-to-PostgreSQL DB migration across projects, covering schema and query conversion with performance and consistency validation.",
      "Participated in the SCHNEIDER PoC (pre-sales SCM PoC)."
    ]
  },
  {
    period: "2026.02 - 2026.10",
    periodEn: "Feb 2026 - Oct 2026",
    company: "EMRO",
    companyEn: "EMRO",
    department: "솔루션개발본부",
    departmentEn: "Solution Development Division",
    title: "QA 품질그룹 지원",
    titleEn: "QA Quality Group Support",
    bullets: [
      "QA 품질그룹에 지원 인력으로 합류해 표준 솔루션 릴리즈 품질 검증을 담당",
      "Cadentia 신규 릴리즈(2~4월), SK하이닉스 Cadentia 2.0 납품(6월), o9 플랫폼 SCM 솔루션(7월) QA 검증·결함 전달·수정 검증을 수행",
      "Agent AI 기반 QA 자동화 운영 도구를 구축해 릴리즈 QA 공수를 절감하고 사내 확산을 지원",
      "10월 정기 릴리즈 QA 대응 예정"
    ],
    bulletsEn: [
      "Joined the QA Quality Group as support, owning release quality validation for the standard solution.",
      "Performed QA validation, defect handoff, and fix verification for the Cadentia release (Feb-Apr), the SK hynix Cadentia 2.0 delivery (Jun), and the o9-platform SCM solution (Jul).",
      "Built an Agent-AI-based QA automation operations tool, cutting release QA effort and supporting company-wide adoption.",
      "Scheduled to support the October regular-release QA cycle."
    ]
  }
];

export const EDUCATION = [
  {
    period: "2017.03 - 2024.02",
    periodEn: "Mar 2017 - Feb 2024",
    organization: "경북대학교",
    organizationEn: "Kyungpook National University",
    title: "학사",
    titleEn: "Bachelor's Degree",
    bullets: ["2017년 3월 입학 ~ 2024년 2월 졸업", "소프트웨어학과"],
    bulletsEn: ["Bachelor's program, Mar 2017 ~ Feb 2024", "Department of Software"]
  }
];

export const TRAINING = [
  {
    period: "2024.01 - 2024.09",
    periodEn: "Jan 2024 - Sep 2024",
    organization: "삼성청년소프트웨어아카데미(SSAFY)",
    organizationEn: "Samsung Youth Software Academy (SSAFY)",
    title: "교육과정",
    titleEn: "Software Education Program",
    bullets: [
      "2024년 1월 ~ 9월 수료",
      "2회 수상",
      "팀 프로젝트 2회 진행"
    ],
    bulletsEn: [
      "Completed in Jan 2024 - Sep 2024",
      "Received two awards.",
      "Completed two team projects."
    ]
  }
];

export const AWARDS = [
  {
    period: "2024.08",
    periodEn: "Aug 2024",
    organization: "삼성전자주식회사",
    organizationEn: "Samsung Electronics Co., Ltd.",
    title: "최우수상",
    titleEn: "Grand Prize",
    bullets: [
      "OpenAPI와 생성형 AI를 활용한 프로젝트 경진대회에서 글을 멀리하고 스마트폰에 빠져 문해력을 잃은 세대를 위한 모바일 게임 서비스 주제로 구미지역 1등(최우수팀) 선정"
    ],
    bulletsEn: [
      "Selected as the 1st place team (Grand Prize) in the Gumi region in a project competition using OpenAPI and generative AI, with a mobile game service theme for a generation losing literacy due to heavy smartphone use."
    ]
  },
  {
    period: "2024.05",
    periodEn: "May 2024",
    organization: "삼성전자주식회사",
    organizationEn: "Samsung Electronics Co., Ltd.",
    title: "우수상",
    titleEn: "Excellence Award",
    bullets: [
      "한국관광공사 공공데이터 API를 이용한 웹 프로젝트 경진대회에서 우수팀 선정"
    ],
    bulletsEn: [
      "Selected as an excellence team in a web project competition using Korea Tourism Organization public data APIs."
    ]
  }
];

export const CERTIFICATIONS = [
  {
    period: "2025.05.17",
    periodEn: "May 17, 2025",
    organization: "마이크로소프트",
    organizationEn: "Microsoft",
    title: "Microsoft Certified: Azure AZ900",
    titleEn: "Microsoft Certified: Azure AZ900",
    bullets: [
      "발급기관: 마이크로소프트",
      "자격증 번호: C76F0A07F0A39D11"
    ],
    bulletsEn: [
      "Issuing Authority: Microsoft",
      "Certificate No.: C76F0A07F0A39D11"
    ]
  },
  {
    period: "2024.09.10",
    periodEn: "Sep 10, 2024",
    organization: "한국산업인력공단",
    organizationEn: "Human Resources Development Service of Korea",
    title: "정보처리기사",
    titleEn: "Engineer Information Processing",
    bullets: [
      "발급기관: 한국산업인력공단",
      "자격증 번호: 24202040788J"
    ],
    bulletsEn: [
      "Issuing Authority: Human Resources Development Service of Korea",
      "Certificate No.: 24202040788J"
    ]
  },
  {
    period: "2024.09.01",
    periodEn: "Sep 1, 2024",
    organization: "ACTFL",
    organizationEn: "ACTFL",
    title: "OPIc",
    titleEn: "OPIc",
    bullets: [
      "발급기관: ACTFL",
      "자격증 번호: 214048029418",
      "등급: IM1",
      "유효기간: 2024.09.01 - 2026.08.31"
    ],
    bulletsEn: [
      "Issuing Authority: ACTFL",
      "Certificate No.: 214048029418",
      "Grade: IM1",
      "Validity: 2024.09.01 - 2026.08.31"
    ]
  },
  {
    period: "2023.12.15",
    periodEn: "Dec 15, 2023",
    organization: "한국데이터산업진흥원",
    organizationEn: "Korea Data Agency",
    title: "SQLD",
    titleEn: "SQL Developer (SQLD)",
    bullets: [
      "발급기관: 한국데이터산업진흥원",
      "자격증 번호: SQLD-051016153"
    ],
    bulletsEn: [
      "Issuing Authority: Korea Data Agency",
      "Certificate No.: SQLD-051016153"
    ]
  }
];

export const PROJECT_CATEGORY = Object.freeze({
  WORK: "work",
  TEAM: "team"
});

export const PROJECT_TRACK = Object.freeze({
  SCM: "scm",
  QA: "qa",
  TEAM: "team"
});

export const PROJECTS = [
  {
    category: PROJECT_CATEGORY.WORK,
    track: PROJECT_TRACK.SCM,
    isFeatured: true,
    name: "Spigen Korea 신규 SCM 프로젝트 구축",
    nameEn: "Spigen Korea New SCM Development",
    period: "2024.10 - 2025.03",
    periodEn: "Oct 2024 - Mar 2025",
    kind: "신규 구축",
    kindEn: "New Setup",
    scope: ["개발", "테스트", "배포", "운영"],
    scopeEn: ["Development", "Testing", "Release", "Operations"],
    tech: ["Java", "Spring", "MyBatis", "Jenkins", "Git", "GitHub", "Polymer", "JavaScript", "PostgreSQL"],
    techEn: ["Java", "Spring", "MyBatis", "Jenkins", "Git", "GitHub", "Polymer", "JavaScript", "PostgreSQL"],
    contributions: [
      "문제: 인터페이스 중복 데이터와 연계 오류로 장애 재발 위험이 높았음",
      "역할: SAP MM11/MM18 연동·적재 로직, 중복 데이터 처리, 결재 연동 설정을 개발",
      "영향: 담당한 SAP MM 인터페이스 연동을 안정화하고 계약 단가 모니터링 기능 4개를 운영에 반영"
    ],
    contributionsEn: [
      "Problem: Repeated failures were likely due to duplicated interface data and integration errors.",
      "Role: Implemented SAP MM11/MM18 integration/load logic, deduplication handling, and approval integration settings.",
      "Impact: Stabilized the SAP MM interface integration I owned and delivered four contract-price monitoring capabilities into operations."
    ],
    metrics: [
      {
        label: "SAP MM 인터페이스 연동",
        labelEn: "SAP MM interface integration",
        value: "중복 데이터·연계 오류 해소",
        valueEn: "Resolved duplicate data and integration errors"
      },
      {
        label: "고도화 항목",
        labelEn: "Major enhancements",
        value: "4개 기능",
        valueEn: "4 core features delivered"
      }
    ],
    isPending: false
  },
  {
    category: PROJECT_CATEGORY.WORK,
    track: PROJECT_TRACK.SCM,
    isFeatured: true,
    name: "CJ Freshway SCM 컨버전 프로젝트",
    nameEn: "CJ Freshway SCM Conversion Project",
    period: "2025.05 - 2025.09",
    periodEn: "May 2025 - Sep 2025",
    kind: "대규모 전환 프로젝트",
    kindEn: "Enterprise Conversion",
    scope: ["개발", "테스트", "배포", "운영"],
    scopeEn: ["Development", "Testing", "Release", "Operations"],
    tech: ["Java", "Spring", "MyBatis", "Jenkins", "Git", "GitLab", "Polymer", "JavaScript", "PostgreSQL"],
    techEn: ["Java", "Spring", "MyBatis", "Jenkins", "Git", "GitLab", "Polymer", "JavaScript", "PostgreSQL"],
    contributions: [
      "문제: SCM v7→v9 전환에서 담당 모듈의 DB 이관, SQL 차이, 연계 영향도를 함께 통제해야 했음",
      "역할: 담당한 입고/마감 모듈의 Oracle→PostgreSQL 전환 작업, 회귀 테스트, 운영 체크리스트 정리를 수행",
      "영향: 담당한 입고/마감 모듈을 안정적으로 전환하고 개발~운영 전달 흐름에 기여"
    ],
    contributionsEn: [
      "Problem: The SCM v7-to-v9 migration required controlling DB migration, SQL differences, and integration impact for the module in scope.",
      "Role: Performed Oracle-to-PostgreSQL migration, regression testing, and ops checklist preparation for the inbound/closing module I owned.",
      "Impact: Delivered a stable migration of the inbound/closing module I owned and contributed to the development-to-operations handoff flow."
    ],
    metrics: [
      {
        label: "전환 담당 모듈",
        labelEn: "Module owned",
        value: "입고/마감 (Oracle→PostgreSQL)",
        valueEn: "Inbound/Closing (Oracle→PostgreSQL)"
      },
      {
        label: "기여 단계",
        labelEn: "Delivery stages",
        value: "개발~운영",
        valueEn: "Development to operations"
      }
    ],
    isPending: false
  },
  {
    category: PROJECT_CATEGORY.TEAM,
    track: PROJECT_TRACK.TEAM,
    isFeatured: false,
    name: "말랑(Mallang)",
    nameEn: "Mallang",
    period: "2024.07 - 2024.08",
    periodEn: "Jul 2024 - Aug 2024",
    kind: "팀 프로젝트",
    kindEn: "Team Project",
    scope: ["기획", "설계", "개발", "배포", "운영"],
    scopeEn: ["Planning", "Design", "Development", "Deployment", "Operations"],
    tech: ["Java 21", "Spring Boot", "Spring Security", "Spring Data JPA", "JWT", "OAuth2", "MariaDB", "Swagger", "Docker", "Jenkins", "AWS EC2", "Nginx", "Git", "GitHub"],
    techEn: ["Java 21", "Spring Boot", "Spring Security", "Spring Data JPA", "JWT", "OAuth2", "MariaDB", "Swagger", "Docker", "Jenkins", "AWS EC2", "Nginx", "Git", "GitHub"],
    contributions: [
      "백엔드 팀장으로 퀴즈/학습/영역 점령 도메인의 핵심 API 설계 및 구현 주도",
      "퀴즈 결과 집계 로직과 6시간 단위 문제 스케줄링을 구현하고 일일 결산 API 고도화",
      "User/Area API 응답 규격 정비 및 DTO/에러코드 리팩토링으로 클라이언트 연동 안정화",
      "Spring Security + JWT/OAuth2 인증 흐름 정리와 Swagger 기반 요청/응답 스키마 문서화",
      "운영 환경(application-prod, Dockerfile) 타임존/설정 정비 및 Jenkins 기반 배포 파이프라인 유지보수"
    ],
    contributionsEn: [
      "Led core API design and implementation as backend team lead across quiz, study, and territory domains.",
      "Implemented quiz result aggregation and 6-hour quiz scheduling, then improved the daily settlement API.",
      "Stabilized client integration by refactoring User/Area API response contracts, DTOs, and error codes.",
      "Organized authentication flows with Spring Security + JWT/OAuth2 and documented request/response schemas with Swagger.",
      "Maintained production configuration (application-prod, Dockerfile) and Jenkins-based deployment pipeline."
    ],
    metrics: [
      {
        label: "운영 자동화",
        labelEn: "Operational automation",
        value: "6시간 주기 문제 스케줄링, 일일 결산 API 고도화",
        valueEn: "6-hour quiz scheduling and daily settlement API improvements"
      },
      {
        label: "주요 기여 도메인",
        labelEn: "Primary contribution domains",
        value: "퀴즈/영역/유저 API, 스케줄러",
        valueEn: "Quiz/Area/User APIs, scheduler"
      },
      {
        label: "역할",
        labelEn: "Role",
        value: "Backend 팀장",
        valueEn: "Backend Team Lead"
      }
    ],
    isPending: false
  },
  {
    category: PROJECT_CATEGORY.TEAM,
    track: PROJECT_TRACK.TEAM,
    isFeatured: false,
    name: "TravelLog",
    nameEn: "TravelLog",
    period: "2024.05 - 2024.05",
    periodEn: "May 2024 - May 2024",
    kind: "팀 프로젝트",
    kindEn: "Team Project",
    scope: ["설계", "개발", "테스트", "배포", "운영"],
    scopeEn: ["Design", "Development", "Testing", "Deployment", "Operations"],
    tech: ["Java", "Spring Boot", "Spring Security", "MyBatis", "JWT", "MySQL (RDS)", "MinIO", "Docker", "Jenkins", "Nginx", "Gradle", "Git", "GitHub"],
    techEn: ["Java", "Spring Boot", "Spring Security", "MyBatis", "JWT", "MySQL (RDS)", "MinIO", "Docker", "Jenkins", "Nginx", "Gradle", "Git", "GitHub"],
    contributions: [
      "DB ERD 설계 및 MySQL(RDS) 스키마 설계를 단독 담당",
      "Docker + Jenkins 기반 배포 파이프라인과 Nginx 리버스 프록시 구성을 단독 담당",
      "오브젝트 스토리지를 활용한 캐싱 처리로 이미지 로딩 시간을 약 2초에서 0.2초 수준으로 개선",
      "회원/인증 API 구현: 회원 CRUD, 로그인/로그아웃, 토큰 발급/재발급, 중복체크 및 비밀번호 관련 기능 개발",
      "리뷰 API 구현: 리뷰 CRUD, 작성자/관광지 기준 조회, 리뷰 좋아요 등록/취소/목록/Top 리뷰 기능 개발",
      "MyBatis DAO/DTO 구조 정리 및 리뷰/회원 도메인 버그 수정, CORS/응답 DTO 안정화",
      "리뷰 도메인 기능 확장 및 유지보수"
    ],
    contributionsEn: [
      "Sole owner of DB ERD design and MySQL (RDS) schema design.",
      "Sole owner of deployment setup with Docker + Jenkins pipeline and Nginx reverse proxy.",
      "Improved image loading from about 2.0s to around 0.2s by applying caching with object storage.",
      "Implemented member/auth APIs including member CRUD, login/logout, token issue/refresh, duplicate checks, and password flows.",
      "Implemented review APIs including review CRUD, author/content-based queries, review likes add/remove/list, and top review endpoints.",
      "Refined MyBatis DAO/DTO structures and stabilized review/member domain bugs, CORS, and response DTO behavior.",
      "Expanded and maintained review-domain features."
    ],
    metrics: [
      {
        label: "성능 개선",
        labelEn: "Performance improvement",
        value: "이미지 로딩 약 2.0초 → 0.2초",
        valueEn: "Image loading improved from about 2.0s to 0.2s"
      },
      {
        label: "주요 기여 도메인",
        labelEn: "Primary contribution domains",
        value: "회원/인증, 리뷰",
        valueEn: "Member/Auth, Review"
      },
      {
        label: "단독 담당",
        labelEn: "Sole ownership",
        value: "DB ERD 설계, 배포 파이프라인",
        valueEn: "DB ERD design, deployment pipeline"
      }
    ],
    isPending: false
  },
  {
    category: PROJECT_CATEGORY.WORK,
    track: PROJECT_TRACK.QA,
    isFeatured: false,
    name: "S-OIL SCM QA 테스트",
    nameEn: "S-OIL SCM QA Testing",
    period: "2025.11",
    periodEn: "Nov 2025",
    kind: "QA 검증/전달",
    kindEn: "QA Validation & Handoff",
    scope: ["시나리오 테스트", "단위 테스트", "결함 전달"],
    scopeEn: ["Scenario Testing", "Unit Testing", "Defect Handoff"],
    tech: [],
    techEn: [],
    contributions: [
      "개발된 모듈을 대상으로 기능별 시나리오 테스트와 단위 테스트를 수행",
      "테스트 과정에서 결함 재현 조건과 영향 범위를 명확화",
      "결함 원인/재현 절차/영향 범위를 문서화해 개발자에게 전달하고 수정 검증을 지원"
    ],
    contributionsEn: [
      "Executed feature-level scenario tests and unit tests across implemented modules.",
      "Clarified reproducible defect conditions and impact scope during testing.",
      "Documented root cause, reproduction steps, and impact, then handed off findings to developers and supported fix verification."
    ],
    metrics: [
      {
        label: "테스트 운영 방식",
        labelEn: "Test Operation Model",
        value: "시나리오 + 단위 테스트 + 개발 전달",
        valueEn: "Scenario + Unit Test + Developer Handoff"
      },
      {
        label: "결함 전달 기준",
        labelEn: "Defect Handoff Standard",
        value: "재현 절차/영향 범위 문서화",
        valueEn: "Reproduction Steps and Impact Documented"
      }
    ],
    isPending: false
  },
  {
    category: PROJECT_CATEGORY.WORK,
    track: PROJECT_TRACK.QA,
    isFeatured: false,
    name: "SK하이닉스 Cadentia 2.0 납품 QA",
    nameEn: "SK hynix Cadentia 2.0 Delivery QA",
    period: "2026.06",
    periodEn: "Jun 2026",
    kind: "납품 QA 검증/전달",
    kindEn: "Delivery QA Validation & Handoff",
    scope: ["시나리오 테스트", "단위 테스트", "결함 전달"],
    scopeEn: ["Scenario Testing", "Unit Testing", "Defect Handoff"],
    tech: [],
    techEn: [],
    contributions: [
      "SK하이닉스 납품 대상 Cadentia 2.0에 대해 시나리오 테스트와 단위 테스트를 수행",
      "납품 전 결함 재현 조건과 영향 범위를 정리해 개발팀에 전달하고 수정 검증을 지원",
      "납품 품질 기준에 맞춰 검증 결과를 문서화해 릴리즈 판단 근거를 제공"
    ],
    contributionsEn: [
      "Performed scenario testing and unit testing for Cadentia 2.0 delivered to SK hynix.",
      "Documented reproducible defect conditions and impact scope before delivery, then handed off to developers and supported fix verification.",
      "Documented validation results against delivery quality criteria to support release decisions."
    ],
    metrics: [
      {
        label: "테스트 운영 방식",
        labelEn: "Test Operation Model",
        value: "시나리오 + 단위 테스트 + 개발 전달",
        valueEn: "Scenario + Unit Test + Developer Handoff"
      },
      {
        label: "검증 목적",
        labelEn: "Validation Purpose",
        value: "납품 전 품질 검증",
        valueEn: "Pre-delivery quality validation"
      }
    ],
    isPending: false
  },
  {
    category: PROJECT_CATEGORY.WORK,
    track: PROJECT_TRACK.QA,
    isFeatured: false,
    name: "o9 플랫폼 SCM 솔루션 QA",
    nameEn: "o9 Platform SCM Solution QA",
    period: "2026.07",
    periodEn: "Jul 2026",
    kind: "QA 검증/전달",
    kindEn: "QA Validation & Handoff",
    scope: ["시나리오 테스트", "단위 테스트", "결함 전달"],
    scopeEn: ["Scenario Testing", "Unit Testing", "Defect Handoff"],
    tech: [],
    techEn: [],
    contributions: [
      "o9 플랫폼 기반 SCM 솔루션의 기능별 시나리오 테스트와 단위 테스트를 수행",
      "테스트 과정에서 결함 재현 조건과 영향 범위를 명확화",
      "결함 원인/재현 절차/영향 범위를 문서화해 개발자에게 전달하고 수정 검증을 지원"
    ],
    contributionsEn: [
      "Executed feature-level scenario tests and unit tests for the o9-platform SCM solution.",
      "Clarified reproducible defect conditions and impact scope during testing.",
      "Documented root cause, reproduction steps, and impact, then handed off findings to developers and supported fix verification."
    ],
    metrics: [
      {
        label: "테스트 운영 방식",
        labelEn: "Test Operation Model",
        value: "시나리오 + 단위 테스트 + 개발 전달",
        valueEn: "Scenario + Unit Test + Developer Handoff"
      },
      {
        label: "대상 플랫폼",
        labelEn: "Target Platform",
        value: "o9 기반 SCM 솔루션",
        valueEn: "o9-based SCM solution"
      }
    ],
    isPending: false
  },
  {
    category: PROJECT_CATEGORY.WORK,
    track: PROJECT_TRACK.QA,
    isFeatured: false,
    name: "Cadentia 신규 릴리즈 QA",
    nameEn: "Cadentia New Release QA",
    period: "2026.02 - 2026.04",
    periodEn: "Feb 2026 - Apr 2026",
    kind: "신규 릴리즈 QA + 핫픽스 검증",
    kindEn: "New Release QA + Hotfix Validation",
    scope: ["시나리오 테스트", "단위 테스트", "핫픽스 QA", "결함 전달", "수정 검증"],
    scopeEn: ["Scenario Testing", "Unit Testing", "Hotfix QA", "Defect Handoff", "Fix Verification"],
    tech: [],
    techEn: [],
    contributions: [
      "신규 릴리즈 기능에 대해 시나리오 테스트와 단위 테스트를 수행해 결함을 사전 식별",
      "QA_HOTFIX 운영 규칙(High 우선순위, 접수일+3일 마감)을 기준으로 핫픽스 블랙박스 테스트를 수행",
      "핫픽스 이슈별 재현 조건과 영향 범위를 정리해 개발팀 전달 품질을 표준화",
      "메인 업무-실행 TODO-산출물 연결 구조를 유지해 QA 이력 추적성과 후속 검증 효율을 강화"
    ],
    contributionsEn: [
      "Performed scenario testing and unit testing on new release features to identify defects early.",
      "Executed hotfix black-box testing under the QA_HOTFIX policy (High priority with a +3-day due window from intake).",
      "Standardized developer handoff quality by documenting reproducible conditions and impact scope per hotfix issue.",
      "Improved traceability and follow-up verification efficiency by maintaining links across main tasks, execution TODOs, and deliverables."
    ],
    metrics: [
      {
        label: "우선순위 정책",
        labelEn: "Priority Policy",
        value: "QA_HOTFIX = High 고정",
        valueEn: "QA_HOTFIX fixed to High"
      },
      {
        label: "SLA 기준",
        labelEn: "SLA Standard",
        value: "접수일 기준 +3일",
        valueEn: "Due in 3 days from intake"
      },
      {
        label: "진행 상태",
        labelEn: "Current Status",
        value: "4월 릴리즈 QA 완료",
        valueEn: "April release QA completed"
      }
    ],
    isPending: false
  },
  {
    category: PROJECT_CATEGORY.WORK,
    track: PROJECT_TRACK.QA,
    isFeatured: true,
    name: "Agent AI 기반 QA 자동화 운영 도구 구축",
    nameEn: "Agent-AI-Based QA Automation Operations Tool",
    period: "2026.02 - 2026.04",
    periodEn: "Feb 2026 - Apr 2026",
    kind: "표준 솔루션 릴리즈 QA 자동화",
    kindEn: "Standard Solution Release QA Automation",
    scope: ["기획", "설계", "개발", "운영", "교육", "고도화"],
    scopeEn: ["Planning", "Design", "Development", "Operations", "Training", "Enhancement"],
    tech: ["Claude Code", "Codex", "Node.js", "Playwright", "Web UI"],
    techEn: ["Claude Code", "Codex", "Node.js", "Playwright", "Web UI"],
    contributions: [
      "영향: 정기 릴리즈 QA 테스트 공수를 약 70% 절감하고 500 에러 발생 시 재현 가능한 자료를 자동으로 남길 수 있는 검증 체계를 마련",
      "역할: SCM 솔루션 전체 모듈을 대상으로 메뉴 수집, 메뉴별 단위 테스트, 구매 프로세스 시나리오 테스트 기능을 구현",
      "역할: 비개발 직군도 사용할 수 있도록 Web UI, 맞춤형 언어 체계, 직군별 리포트를 설계해 운영 가능한 자동화 도구로 정착",
      "문제: 정기 릴리즈와 빈번한 패치 환경에서 QA 공수가 크고 문서화된 테스트 자산이 부족해 오픈 전 품질 검증 일정이 항상 촉박했음",
      "역할: 아이디어 수립부터 목표 정의, 개발, 유지보수까지 전 과정을 단독 수행하며 Playwright MCP와 Agent AI를 활용한 QA 자동화 운영 도구를 구축",
      "역할: JSON/HTML 리포트와 직군별 맞춤형 보고 양식을 설계하고 로컬 서버 실행 후 웹에서 버튼으로 테스트를 수행하는 운영 방식으로 정리",
      "영향: 릴리즈 전 1개월 동안 주 30건 이상 발생하던 이슈·개선 확인 작업을 야간 자동 실행과 아침 리포트 확인 방식으로 전환해 부서 실적 개선에 기여",
      "영향: 개발직군, 비개발직군, 관리직이 각자 필요한 방식으로 결과를 확인할 수 있도록 운영 체계를 만들고 2개월간 주 1회 이상, 회당 1시간 이상 Agent AI 활용 교육을 진행해 사내 확산을 지원"
    ],
    contributionsEn: [
      "Impact: Reduced recurring release QA effort by about 70% and established a reproducible reporting flow for HTTP 500 errors.",
      "Role: Implemented menu discovery, menu-level unit testing, and purchase-process scenario testing across the SCM solution.",
      "Role: Designed Web UI workflows, customized language, and audience-specific reports so non-developers could operate the tool in real release work.",
      "Problem: QA effort was high under regular releases and frequent patches, while documented test assets were limited, making pre-release quality validation consistently time-constrained.",
      "Role: Solely led the project end-to-end from idea and goal setting to development and maintenance, building an AI-assisted QA automation operations tool powered by Playwright MCP and Agent AI.",
      "Role: Designed JSON/HTML reports and audience-specific reporting formats, then organized a web-based operating flow triggered after launching a local server.",
      "Impact: Replaced manual issue and improvement checks, which exceeded 30 items per week during the month before release, with overnight automated runs and morning-ready reports, contributing to team performance.",
      "Impact: Created an operating model that served developers, non-developers, and managers with separate reporting views, and supported company-wide adoption through Agent AI training sessions held at least once a week for two months."
    ],
    metrics: [
      {
        label: "릴리즈 QA 공수 절감",
        labelEn: "QA Effort Reduction",
        value: "약 70%",
        valueEn: "About 70%"
      },
      {
        label: "릴리즈 직전 점검량",
        labelEn: "Issue Review Volume",
        value: "릴리즈 전 1개월간 주 30건 이상",
        valueEn: "30+ issues per week during the month before release"
      },
      {
        label: "장애 재현 가능성",
        labelEn: "Reproducible Error Reporting",
        value: "500 에러 발생 시 재현 가능한 자료 자동 작성",
        valueEn: "Automatically generates reproducible materials for HTTP 500 errors"
      },
      {
        label: "사내 확산",
        labelEn: "Internal Enablement",
        value: "2개월간 주 1회 이상, 회당 1시간 이상 교육 진행",
        valueEn: "1+ session per week for 2 months, 1+ hour each"
      },
      {
        label: "현재 적용 범위",
        labelEn: "Current Application",
        value: "표준 솔루션 릴리즈 QA 적용 중",
        valueEn: "Currently used for standard solution release QA"
      }
    ],
    isPending: true
  },
  {
    category: PROJECT_CATEGORY.WORK,
    track: PROJECT_TRACK.SCM,
    isFeatured: false,
    name: "SMARTSUITE 1.0 수출입 모듈 개발",
    nameEn: "SMARTSUITE 1.0 Import/Export Module",
    period: "2025.12 - 2026.02",
    periodEn: "Dec 2025 - Feb 2026",
    kind: "수출입 모듈 프로젝트",
    kindEn: "Import/Export Module Project",
    scope: ["B/L·L/G·Invoice 모듈 개발", "프론트엔드·백엔드"],
    scopeEn: ["B/L, L/G, Invoice module development", "Frontend & Backend"],
    tech: ["JavaScript", "Java", "Spring", "MyBatis", "Polymer", "SVN", "PostgreSQL"],
    techEn: ["JavaScript", "Java", "Spring", "MyBatis", "Polymer", "SVN", "PostgreSQL"],
    contributions: [
      "B/L·L/G·Invoice 업무 화면의 조회/편집 흐름을 개선하고, 관리·리스트·팝업 UI를 일관된 입력 규칙으로 정비",
      "BL/LG/LC 도메인의 Controller·Service·Repository·Mapper를 함께 수정해 파라미터 정합성과 조회 로직을 안정화",
      "수출입 모듈 고도화 이슈를 연속 반영하며 화면-백엔드 연계 품질을 개선"
    ],
    contributionsEn: [
      "Improved B/L, L/G, and Invoice UI flows across manage/list/popup screens with consistent input rules.",
      "Stabilized parameter consistency and query behavior by coordinating Controller, Service, Repository, and Mapper changes in BL/LG/LC domains.",
      "Continuously delivered import/export module enhancements on SVN branch tasks (Jan 29 to Feb 11, 2026), improving UI-backend integration quality."
    ],
    metrics: [
      {
        label: "업무 화면 개선",
        labelEn: "Workflow UI improvements",
        value: "B/L·L/G·Invoice 관리·리스트·팝업 흐름 정비",
        valueEn: "Managed, list, and popup flows refined across B/L, L/G, and Invoice screens"
      },
      {
        label: "연계 안정화",
        labelEn: "Integration stability",
        value: "BL/LG/LC 전 계층 파라미터·조회 로직 안정화",
        valueEn: "Parameter consistency and query behavior stabilized across BL/LG/LC layers"
      }
    ],
    isPending: true
  }
];
