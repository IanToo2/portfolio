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
  webIntro:
    "SCM 솔루션을 만드는 백엔드 개발자입니다. 2024년 9월부터 EMRO에서 고객사 SCM 구축과 전환 프로젝트를 하고 있고, 2026년에는 QA 품질그룹을 지원하면서 QA 자동화 도구를 혼자 만들어 운영했습니다.",
  webIntroEn:
    "I'm a backend developer building SCM solutions. Since September 2024 I've worked on client SCM implementation and migration projects at EMRO, and in 2026 I supported the QA Quality Group while building and running a QA automation tool on my own.",
  now:
    "조달 업무는 구매요청에서 시작해 발주와 입고를 거쳐 송장으로 끝납니다. 이 흐름을 개발 서버에서 실제 문서로 끝까지 흘려보내며 검증하는 테스트를 만들었습니다. 자동화가 데이터를 함부로 바꾸지 않도록, 승인된 시나리오에서만 저장과 결재 버튼을 누를 수 있게 하는 장치를 20종 두었습니다. 10월 말 QA 지원이 끝나서, 지금은 비개발 직군 동료에게 운영을 넘기고 있습니다.",
  nowEn:
    "Procurement starts with a purchase request and ends with an invoice, passing through orders and goods receipt. I built tests that push real documents through that whole flow on the dev server. To keep automation from changing data carelessly, I added 20 safety gates that only allow save and approval buttons in approved scenarios. My QA support ends in late October 2026, so I am now handing operations over to a non-developer colleague.",
  email: "rlawjddla0203@gmail.com",
  github: "https://github.com/IanToo2"
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
    id: "scm-delivery",
    title: "SCM 구축·전환 개발",
    titleEn: "SCM Implementation & Conversion Development",
    text: "신규 구축·컨버전 프로젝트에서 핵심 기능 구현과 도메인 전환을 담당하며 안정적인 릴리즈 기준을 정착시켰습니다.",
    textEn: "Delivered core features and domain migration in implementation and conversion projects with stable release standards.",
    icon: "shield"
  },
  {
    id: "integration",
    title: "연동 안정성과 데이터 정합성 관리",
    titleEn: "Integration Stability & Data Integrity Management",
    text: "SAP 인터페이스 로직과 중복 데이터 처리를 개선하고 DB 전환 정합성 검증으로 품질 이슈를 줄였습니다.",
    textEn: "Improved SAP interface and deduplication logic, then reduced quality issues with DB migration consistency checks.",
    icon: "database"
  },
  {
    id: "team-lead",
    title: "팀 프로젝트 리드 경험",
    titleEn: "Team Project Leadership",
    text: "팀 프로젝트 리드로 API 설계, 인증 체계, 배포 파이프라인을 정비해 개발-배포 흐름을 안정화했습니다.",
    textEn: "As team project lead, I standardized API design, auth flow, and deployment pipeline to stabilize delivery.",
    icon: "route"
  },
  {
    id: "qa-automation",
    title: "Agent AI 기반 QA 자동화",
    titleEn: "Agent-AI-Based QA Automation",
    text: "Playwright MCP와 Agent AI로 릴리즈 QA 자동화 도구를 단독 구축해 정기 릴리즈 QA 공수를 약 70% 절감하고 사내 확산까지 이끌었습니다.",
    textEn: "Solely built a release-QA automation tool with Playwright MCP and Agent AI, cutting recurring release QA effort by about 70% and driving company-wide adoption.",
    icon: "gear"
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
      "SCHNEIDER PoC 참여 (영업 제안용 SCM PoC, PPAP 모듈 PoC 준비)"
    ],
    bulletsEn: [
      "Built and stabilized new SCM features.",
      "Developed and stabilized SAP integration and data processing.",
      "Performed Oracle-to-PostgreSQL DB migration across projects, covering schema and query conversion with performance and consistency validation.",
      "Participated in the SCHNEIDER PoC (pre-sales SCM PoC), preparing the PPAP module PoC."
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
      "구매요청부터 송장 확정까지 조달 흐름을 실제 문서로 이어 검증하는 E2E 관통 테스트와 20종의 쓰기 안전 게이트로 도구를 고도화하고, 비개발 직군에게 운영을 이관"
    ],
    bulletsEn: [
      "Joined the QA Quality Group as support, owning release quality validation for the standard solution.",
      "Performed QA validation, defect handoff, and fix verification for the Cadentia release (Feb-Apr), the SK hynix Cadentia 2.0 delivery (Jun), and the o9-platform SCM solution (Jul).",
      "Built an Agent-AI-based QA automation operations tool, cutting release QA effort and supporting company-wide adoption.",
      "Expanded the tool with end-to-end procurement tests from purchase request to invoice confirmation and 20 write-safety gates, then handed operations over to non-developer owners."
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
    title: "SW 개발자 양성 과정 (Java 트랙)",
    titleEn: "SW Developer Program (Java Track)",
    bullets: [
      "2024년 1월 ~ 9월 수료",
      "Java 트랙으로 알고리즘·Spring 프레임워크·DB 중심 실무 교육 이수",
      "팀 프로젝트 2회 진행",
      "2회 수상"
    ],
    bulletsEn: [
      "Completed in Jan 2024 - Sep 2024",
      "Completed the Java track covering algorithms, the Spring framework, and databases through hands-on training.",
      "Completed two team projects.",
      "Received two awards."
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

// 상세 서술 없이 프로젝트 이력 표에만 나오는 투입 이력
export const EXTRA_PROJECT_HISTORY = [
  {
    period: "2025.09 - 2025.11 중",
    periodEn: "Within Sep 2025 - Nov 2025",
    name: "SCM PoC (영업 제안용)",
    nameEn: "SCM PoC (Pre-sales)",
    kind: "PoC",
    kindEn: "PoC",
    client: "SCHNEIDER",
    clientEn: "SCHNEIDER",
    position: "PPAP 모듈 PoC 준비 · 기능 개발 담당",
    positionEn: "Prepared the PPAP module PoC as feature developer"
  }
];

export const PROJECTS = [
  {
    category: PROJECT_CATEGORY.WORK,
    track: PROJECT_TRACK.SCM,
    isFeatured: true,
    name: "Spigen Korea 신규 SCM 프로젝트 구축",
    nameEn: "Spigen Korea New SCM Development",
    period: "2024.10 - 2025.03",
    periodEn: "Oct 2024 - Mar 2025",
    summary: "첫 프로젝트입니다. SAP와 주고받는 구매 데이터가 중복되거나 연계가 끊기던 문제를 맡아 인터페이스 연동을 안정화했습니다.",
    summaryEn: "My first project. I took on duplicated purchase data and broken links in the SAP interface and stabilized the integration.",
    kind: "신규 구축",
    kindEn: "New Setup",
    client: "Spigen Korea",
    clientEn: "Spigen Korea",
    teamSize: "개발 4~6명",
    teamSizeEn: "4–6 developers",
    position: "SAP MM 인터페이스 단독 담당",
    positionEn: "Sole owner of the SAP MM interface",
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
    summary: "SCM v7에서 v9로 넘어가는 프로젝트에서 입고/마감 파트 4명 중 입고 모듈을 맡아, DB를 Oracle에서 PostgreSQL로 옮기고 회귀 테스트까지 했습니다.",
    summaryEn: "In the SCM v7-to-v9 migration, I owned the inbound module within a 4-person inbound/closing part, moving it from Oracle to PostgreSQL and running the regression tests.",
    kind: "대규모 전환 프로젝트",
    kindEn: "Enterprise Conversion",
    client: "CJ Freshway",
    clientEn: "CJ Freshway",
    teamSize: "개발 11명 이상",
    teamSizeEn: "11+ developers",
    position: "입고/마감 파트(4명) 중 입고 모듈 담당",
    positionEn: "Owned the inbound module in a 4-person inbound/closing part",
    scope: ["개발", "테스트"],
    scopeEn: ["Development", "Testing"],
    tech: ["Java", "Spring", "MyBatis", "Jenkins", "Git", "GitLab", "Polymer", "JavaScript", "PostgreSQL"],
    techEn: ["Java", "Spring", "MyBatis", "Jenkins", "Git", "GitLab", "Polymer", "JavaScript", "PostgreSQL"],
    contributions: [
      "문제: SCM v7→v9 전환에서 담당 모듈의 DB 이관, SQL 차이, 연계 영향도를 함께 통제해야 했음",
      "역할: 입고/마감 파트(4명)에서 입고 모듈을 맡아 Oracle→PostgreSQL 전환 작업과 회귀 테스트를 수행하고 운영 인계용 체크리스트를 정리",
      "영향: 담당한 입고 모듈을 안정적으로 전환하고 개발·테스트에서 운영 인계까지 전달 흐름에 기여"
    ],
    contributionsEn: [
      "Problem: The SCM v7-to-v9 migration required controlling DB migration, SQL differences, and integration impact for the module in scope.",
      "Role: Owned the inbound module within the 4-person inbound/closing part, performing its Oracle-to-PostgreSQL migration and regression testing, and prepared a handoff checklist for operations.",
      "Impact: Delivered a stable migration of the inbound module I owned and contributed to the handoff flow from development and testing to operations."
    ],
    metrics: [
      {
        label: "전환 담당 모듈",
        labelEn: "Module owned",
        value: "입고 (Oracle→PostgreSQL)",
        valueEn: "Inbound (Oracle→PostgreSQL)"
      },
      {
        label: "기여 단계",
        labelEn: "Delivery stages",
        value: "개발·테스트 → 운영 인계",
        valueEn: "Dev/Test to ops handoff"
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
    summary: "SSAFY 팀 프로젝트로, 백엔드 팀장을 맡아 퀴즈·학습·영역 점령 기능의 API를 설계하고 구현했습니다.",
    summaryEn: "An SSAFY team project where I led the backend and designed the APIs for quiz, study, and territory features.",
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
    summary: "SSAFY 팀 프로젝트로, DB 설계와 Docker·Jenkins 배포 환경을 혼자 맡고 회원·리뷰 API를 만들었습니다.",
    summaryEn: "An SSAFY team project where I owned the DB design and the Docker/Jenkins deployment, and built the member and review APIs.",
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
    name: "고객사 SCM 솔루션 릴리즈·납품 QA (S-OIL · SK하이닉스 · o9)",
    nameEn: "Client SCM Solution Release & Delivery QA (S-OIL · SK hynix · o9)",
    period: "2025.11 - 2026.07",
    periodEn: "Nov 2025 - Jul 2026",
    summary: "S-OIL, SK하이닉스, o9 플랫폼 SCM 솔루션의 기능을 시나리오대로 테스트하고, 결함을 개발팀에 전달한 뒤 수정 결과를 검증했습니다.",
    summaryEn: "I tested S-OIL, SK hynix, and o9-platform SCM solutions against scenarios, handed defects to developers, and verified the fixes.",
    kind: "QA 검증/전달",
    kindEn: "QA Validation & Handoff",
    client: "S-OIL · SK하이닉스 · o9",
    clientEn: "S-OIL · SK hynix · o9",
    position: "QA 검증 (품질그룹 지원 인력)",
    positionEn: "QA validation (QA Quality Group support)",
    scope: ["시나리오 테스트", "단위 테스트", "결함 전달", "수정 검증"],
    scopeEn: ["Scenario Testing", "Unit Testing", "Defect Handoff", "Fix Verification"],
    tech: [],
    techEn: [],
    contributions: [
      "다수 고객사 SCM 솔루션의 기능별 시나리오 테스트와 단위 테스트를 수행하고, 결함 재현 조건·영향 범위를 문서화해 개발팀에 전달하고 수정 검증을 지원",
      "SK하이닉스 Cadentia 2.0은 납품 QA로 진행해 납품 품질 기준에 맞춘 검증 결과로 릴리즈 판단 근거를 제공"
    ],
    contributionsEn: [
      "Performed feature-level scenario and unit testing across multiple clients' SCM solutions, documenting reproducible conditions and impact scope for developer handoff and fix verification.",
      "Ran the SK hynix Cadentia 2.0 engagement as delivery QA, providing validation results against delivery quality criteria to support release decisions."
    ],
    metrics: [
      {
        label: "검증 고객사",
        labelEn: "Clients validated",
        value: "S-OIL · SK하이닉스(납품) · o9",
        valueEn: "S-OIL · SK hynix (delivery) · o9"
      },
      {
        label: "테스트 운영 방식",
        labelEn: "Test Operation Model",
        value: "시나리오 + 단위 테스트 + 개발 전달",
        valueEn: "Scenario + Unit Test + Developer Handoff"
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
    summary: "신규 릴리즈 기능을 테스트하고, 핫픽스는 접수 후 3일 안에 블랙박스 테스트로 확인했습니다.",
    summaryEn: "I tested new release features and checked each hotfix with black-box tests within three days of intake.",
    kind: "신규 릴리즈 QA + 핫픽스 검증",
    kindEn: "New Release QA + Hotfix Validation",
    client: "자사 표준 솔루션",
    clientEn: "In-house standard solution",
    position: "QA 검증 (품질그룹 지원 인력)",
    positionEn: "QA validation (QA Quality Group support)",
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
    period: "2026.02 - 2026.10",
    periodEn: "Feb 2026 - Oct 2026",
    summary: "정기 릴리즈 때마다 사람이 반복하던 점검을 밤사이 자동으로 돌리고 아침에 리포트로 확인하는 도구입니다. 구매요청부터 송장 확정까지 조달 흐름을 실제 문서로 이어 검증하며, 기획부터 운영 이관까지 혼자 맡았습니다.",
    summaryEn: "A tool that runs the checks people used to repeat every release overnight and reports results by morning. It validates the procurement flow from purchase request to invoice with real documents. I owned it from planning to handover.",
    kind: "릴리즈 QA 자동화 + 조달 E2E 관통 테스트",
    kindEn: "Release QA Automation + Procurement E2E Testing",
    client: "사내 (QA 품질그룹)",
    clientEn: "Internal (QA Quality Group)",
    teamSize: "1명",
    teamSizeEn: "Solo",
    position: "기획·개발·운영 단독",
    positionEn: "Sole owner from planning to operations",
    scope: ["기획", "설계", "개발", "운영", "교육", "고도화", "인수인계"],
    scopeEn: ["Planning", "Design", "Development", "Operations", "Training", "Enhancement", "Handover"],
    tech: ["Claude Code", "Codex", "TypeScript", "Node.js", "Playwright", "GitLab CI", "Web UI"],
    techEn: ["Claude Code", "Codex", "TypeScript", "Node.js", "Playwright", "GitLab CI", "Web UI"],
    contributions: [
      "영향: 정기 릴리즈 QA 테스트 공수를 약 70% 절감하고 500 에러 발생 시 재현 가능한 자료를 자동으로 남길 수 있는 검증 체계를 마련",
      "문제: 정기 릴리즈와 빈번한 패치 환경에서 QA 공수가 크고 문서화된 테스트 자산이 부족해 오픈 전 품질 검증 일정이 항상 촉박했으며, 메뉴 단위 점검만으로는 구매요청부터 송장까지 이어지는 조달 흐름의 연계 결함을 잡기 어려웠음",
      "역할: 아이디어 수립부터 목표 정의, 개발, 유지보수까지 전 과정을 단독 수행하며 Playwright MCP와 Agent AI를 활용한 QA 자동화 운영 도구를 구축",
      "역할: SCM 솔루션 전체 모듈을 대상으로 메뉴 수집, 메뉴별 단위 테스트, 구매 프로세스 시나리오 테스트 기능을 구현",
      "역할: 비개발 직군도 사용할 수 있도록 Web UI, 맞춤형 언어 체계, JSON/HTML 리포트와 직군별 보고 양식을 설계하고 웹에서 버튼으로 테스트를 수행하는 운영 방식으로 정착",
      "역할: 구매요청 → RFX 발신 → 협력사 투찰 → 선정 → 발주 → 협력사 발주접수 → 납품예정(ASN) → 입고·결재 → 송장 확정까지 실제 문서로 이어 검증하는 관통 파이프라인을 설계·구현 (구매사·협력사 두 계정 흐름, 단가계약·계약 분기, 다중 투찰 포함)",
      "역할: 기본은 조회만 허용하고 승인된 시나리오에 한해 화면·버튼 단위로 저장·발신·결재를 여는 20종의 계층형 안전 게이트를 설계하고, 개발 서버 허용 목록과 자동 생성 문서 표식을 함께 적용",
      "역할: 그리드 입력·팝업 선택·일괄 적용 액션과 전 메뉴 일괄 실행, 상류 파이프라인 자동 선행 실행으로 시나리오 엔진을 확장하고, DRM 엑셀 테스트케이스를 시나리오 초안으로 변환해 검토·승인 후 실행하는 흐름을 구현",
      "역할: 파이프라인 시간의 63%를 차지하던 CI 캐시 병목을 개선하고, nightly 파이프라인·불안정 테스트 격리·UI 문구 변경 감지 MR 차단을 도입",
      "영향: 릴리즈 전 1개월 동안 주 30건 이상 발생하던 이슈·개선 확인 작업을 야간 자동 실행과 아침 리포트 확인 방식으로 전환해 부서 실적 개선에 기여",
      "영향: 화면 규칙 69개 중 43개를 자동 판정하고 29개 메뉴, 75개 승인 시나리오를 운영하는 체계로 확장",
      "영향: 2개월간 주 1회 이상, 회당 1시간 이상 Agent AI 활용 교육으로 사내 확산을 지원하고, Confluence 문서 자동 발행과 비개발 직군용 인수인계 자료·4주 로드맵으로 운영을 이관"
    ],
    contributionsEn: [
      "Impact: Reduced recurring release QA effort by about 70% and established a reproducible reporting flow for HTTP 500 errors.",
      "Problem: QA effort was high under regular releases and frequent patches, documented test assets were limited, and menu-level checks alone could not catch cross-step defects across the procurement flow from purchase request to invoice.",
      "Role: Solely led the project end-to-end from idea and goal setting to development and maintenance, building an AI-assisted QA automation operations tool powered by Playwright MCP and Agent AI.",
      "Role: Implemented menu discovery, menu-level unit testing, and purchase-process scenario testing across the SCM solution.",
      "Role: Designed a Web UI, customized language, JSON/HTML reports, and audience-specific reporting formats so non-developers could run tests from a browser in real release work.",
      "Role: Designed and built an end-to-end pipeline that validates the full procurement flow with real documents—purchase request, RFX, supplier bidding, selection, PO, supplier PO acceptance, ASN, goods receipt and approval, through invoice confirmation—including buyer/supplier dual-account flows, unit-price contract and contract branches, and multi-bid selection.",
      "Role: Designed 20 layered safety gates that keep automation read-only by default and open save/send/approve actions per screen and button only for approved scenarios, combined with a dev-server allowlist and auto-generated document markers.",
      "Role: Extended the scenario engine with grid input, popup selection, batch apply, run-all across menus, and automatic upstream pipeline runs, and built a flow that converts DRM-protected Excel test cases into scenario drafts run after review and approval.",
      "Role: Fixed a CI cache bottleneck that took 63% of pipeline time, and introduced a nightly pipeline, flaky-test quarantine, and MR blocking on UI text drift.",
      "Impact: Replaced manual issue and improvement checks, which exceeded 30 items per week during the month before release, with overnight automated runs and morning-ready reports, contributing to team performance.",
      "Impact: Scaled the tool to auto-judge 43 of 69 screen rules and run 75 approved scenarios across 29 menus.",
      "Impact: Supported company-wide adoption through weekly 1+ hour Agent AI training for two months, and handed over operations through auto-published Confluence docs and a 4-week handover roadmap for non-developer owners."
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
        label: "관통 범위",
        labelEn: "Pipeline Coverage",
        value: "구매요청 → 송장 확정",
        valueEn: "Purchase request → invoice confirmation"
      },
      {
        label: "안전 게이트",
        labelEn: "Safety Gates",
        value: "20종",
        valueEn: "20 gates"
      },
      {
        label: "자동 판정 규칙",
        labelEn: "Auto-Judged Rules",
        value: "69개 중 43개",
        valueEn: "43 of 69"
      },
      {
        label: "운영 시나리오",
        labelEn: "Approved Scenarios",
        value: "29개 메뉴, 75개",
        valueEn: "75 across 29 menus"
      },
      {
        label: "사내 확산",
        labelEn: "Internal Enablement",
        value: "2개월간 주 1회 이상, 회당 1시간 이상 교육 진행",
        valueEn: "1+ session per week for 2 months, 1+ hour each"
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
    summary: "B/L, L/G, Invoice 화면과 백엔드를 함께 고쳐 조회와 입력이 어긋나던 부분을 바로잡았습니다.",
    summaryEn: "I fixed the B/L, L/G, and Invoice screens together with their backend so queries and inputs stayed consistent.",
    kind: "수출입 모듈 프로젝트",
    kindEn: "Import/Export Module Project",
    client: "자사 솔루션",
    clientEn: "In-house solution",
    teamSize: "개발 4~6명",
    teamSizeEn: "4–6 developers",
    position: "B/L·L/G·Invoice 화면·API 단독 담당",
    positionEn: "Sole owner of B/L, L/G, and Invoice screens and APIs",
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
