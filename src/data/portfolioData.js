export const PROFILE = {
  name: "김정인",
  nameEn: "KIM Jeong-in",
  role: "Backend Developer",
  roleEn: "Backend Developer",
  domain: "SCM Trade & Logistics",
  domainEn: "SCM Trade & Logistics",
  tagline: "업무 맥락으로 빠르게 구현하고 안정적으로 운영합니다.",
  taglineEn: "I build systems quickly from business context and keep operations stable.",
  intro:
    "EMRO에서 SCM 무역/물류 도메인을 개발하고 있습니다. 비즈니스 로직을 명확히 설계하고, 운영에서 바로 체감되는 개선을 만드는 데 집중합니다.",
  introEn:
    "I build backend features in SCM trade and logistics at EMRO, focusing on clear business logic design and improvements that improve day-to-day operations.",
  email: "rlawjddla0203@gmail.com",
  github: "https://github.com/IanToo2"
};

export const NAV_ITEMS = [
  { id: "summary", label: "소개", labelEn: "Summary", emoji: "👋" },
  { id: "focus", label: "중점 업무", labelEn: "Focus", emoji: "🎯" },
  { id: "highlights", label: "성과", labelEn: "Highlights", emoji: "📈" },
  { id: "projects", label: "프로젝트", labelEn: "Projects", emoji: "🗂️" },
  { id: "stack", label: "기술 스택", labelEn: "Skill Set", emoji: "🛠️" },
  { id: "experience", label: "경력", labelEn: "Experience", emoji: "📌" },
  { id: "contact", label: "연락", labelEn: "Contact", emoji: "✉️" }
];

export const METRICS = [
  { label: "실무 경력", labelEn: "Years of Experience", value: "2024.09 - 현재", valueEn: "Sep 2024 - Present", icon: "clock" },
  { label: "현재 소속", labelEn: "Current Company", value: "EMRO", valueEn: "EMRO", icon: "building" },
  { label: "주력 도메인", labelEn: "Primary Domain", value: "SCM", valueEn: "SCM", icon: "box" }
];

export const HIGHLIGHTS = [
  {
    title: "운영 안정성 강화",
    titleEn: "Operational Reliability",
    text: "SCM 시스템 이관/개발 전환 시 회귀 테스트와 릴리즈 체크리스트를 고정해 운영 장애 리스크를 낮췄습니다.",
    textEn: "Reduced production risk during SCM migrations by standardizing regression tests and release checklists.",
    icon: "shield"
  },
  {
    title: "데이터 정합성 제어",
    titleEn: "Data Integrity Control",
    text: "Oracle→PostgreSQL 전환 과정에서 인터페이스 매핑, 타입, 함수 차이를 문서화해 품질 이슈를 줄였습니다.",
    textEn: "Reduced data quality issues during Oracle to PostgreSQL migration by documenting interface mappings, types, and function differences.",
    icon: "database"
  },
  {
    title: "엔드-투-엔드 협업",
    titleEn: "End-to-End Delivery",
    text: "요구사항-개발-테스트-배포 파이프라인을 한 화면에서 추적해 일정 지연 없이 QA 전달을 완료했습니다.",
    textEn: "Improved delivery quality by tracking requirement, development, testing, and release steps in one pipeline view.",
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
    items: ["Git", "GitLab", "Jira"]
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
    organization: "EMRO",
    organizationEn: "EMRO",
    title: "SCM Developer",
    titleEn: "SCM Developer",
    bullets: [
      "SCM 무역/물류 기능 신규 개발 및 운영 고도화",
      "SAP 연동 데이터 처리 로직 설계 및 안정화",
      "Oracle 기반 쿼리 최적화와 배치 성능 개선"
    ],
    bulletsEn: [
      "Built and stabilized new SCM trade/logistics features.",
      "Designed and stabilized SAP integration and data processing.",
      "Optimized Oracle queries and improved batch performance."
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
    bullets: ["2017년 3월 입학 ~ 2024년 2월 졸업"],
    bulletsEn: ["Bachelor's program, Mar 2017 ~ Feb 2024"]
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
    period: "2024.01 - 2024.09",
    periodEn: "Jan 2024 - Sep 2024",
    organization: "삼성청년소프트웨어아카데미(SSAFY)",
    organizationEn: "Samsung Youth Software Academy (SSAFY)",
    title: "우수상 / 최우수상",
    titleEn: "Excellence Award / Grand Prize",
    bullets: [
      "우수상",
      "최우수상"
    ],
    bulletsEn: [
      "Excellence Award",
      "Grand Prize"
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
export const PROJECTS = [
  {
    name: "Spigen Korea 신규 SCM 프로젝트 구축",
    nameEn: "Spigen Korea New SCM Development",
    period: "2024.10 - 2025.03",
    periodEn: "Oct 2024 - Mar 2025",
    kind: "신규 구축",
    kindEn: "New Setup",
    scope: ["개발", "테스트", "배포", "운영"],
    scopeEn: ["Development", "Testing", "Release", "Operations"],
    tech: ["Java", "Spring", "Jenkins", "Git", "GitHub", "Polymer", "JavaScript", "PostgreSQL"],
    techEn: ["Java", "Spring", "Jenkins", "Git", "GitHub", "Polymer", "JavaScript", "PostgreSQL"],
    contributions: [
      "SAP 인터페이스(MM11/MM18) 연동 및 적재 로직 개발/고도화",
      "인터페이스 처리 중복 데이터 처리 기능 구현으로 연계 안정성 강화",
      "DAMO 결재 연동 및 콜백/보안 설정 조정",
      "계약 단가 모니터링(평균 단가 화면) 신규 개발"
    ],
    contributionsEn: [
      "Developed and enhanced SAP interface integration (MM11/MM18) and load processes.",
      "Improved integration stability by deduplicating interface data handling.",
      "Integrated DAMO approval workflow and tuned callback/security settings.",
      "Built a contract price monitoring screen for average purchase prices."
    ],
    metrics: [
      {
        label: "인터페이스 중단 장애",
        labelEn: "Interface incidents",
        value: "0회 수준으로 감소",
        valueEn: "Reduced interface incidents"
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
    name: "CJ Freshway SCM 컨버전 프로젝트",
    nameEn: "CJ Freshway SCM Conversion Project",
    period: "2025.05 - 2025.09",
    periodEn: "May 2025 - Sep 2025",
    kind: "대규모 전환 프로젝트",
    kindEn: "Enterprise Conversion",
    scope: ["개발", "테스트", "배포", "운영"],
    scopeEn: ["Development", "Testing", "Release", "Operations"],
    tech: ["Java", "Spring", "Jenkins", "Git", "GitLab", "Polymer", "JavaScript", "PostgreSQL"],
    techEn: ["Java", "Spring", "Jenkins", "Git", "GitLab", "Polymer", "JavaScript", "PostgreSQL"],
    contributions: [
      "SCM v7 기반 시스템을 v9로 업그레이드하는 범위와 연계 영향도를 선행 분석해 전환 로드맵 수립",
      "Oracle 기반 스키마/쿼리를 PostgreSQL로 이관하며 데이터 정합성 검증",
      "Oracle SQL 함수/타입 차이로 인한 QA 이슈를 회귀 테스트로 정리",
      "개발·테스트·배포·운영 체크리스트를 정비해 안정적 전환 지원"
    ],
    contributionsEn: [
      "Built migration roadmap by analyzing scope and upstream/downstream impact from SCM v7 to v9.",
      "Migrated Oracle schemas and queries to PostgreSQL with data consistency checks.",
      "Captured QA issues from SQL type and function differences and verified via regression tests.",
      "Standardized development, testing, release, and operations checklists for smoother transition."
    ],
    metrics: [
      {
        label: "시스템 전환 범위",
        labelEn: "Migration scope",
        value: "메이저 도메인 4개",
        valueEn: "4 core domains migrated"
      },
      {
        label: "기여 단계",
        labelEn: "Delivery stages",
        value: "기획~운영 4단계",
        valueEn: "4-stage pipeline: plan~ops"
      }
    ],
    isPending: false
  },
  {
    name: "S-OIL SCM QA 테스트",
    nameEn: "S-OIL SCM QA Testing",
    period: "2025.11",
    periodEn: "Nov 2025",
    kind: "QA",
    kindEn: "QA",
    scope: ["테스트"],
    scopeEn: ["QA"],
    tech: ["Oracle", "PostgreSQL", "SQL"],
    techEn: ["Oracle", "PostgreSQL", "SQL"],
    contributions: [
      "Oracle SQL 쿼리의 PostgreSQL 변환 이슈 중심으로 QA 테스트 시나리오를 정리",
      "조회 성능과 결과 정합성 회귀 케이스를 기준으로 테스트 수행"
    ],
    contributionsEn: [
      "Built QA scenarios focusing on PostgreSQL migration issues from Oracle SQL.",
      "Executed regression tests for query performance and result consistency."
    ],
    metrics: [
      {
        label: "회귀 테스트 범위",
        labelEn: "Regression coverage",
        value: "핵심 쿼리 위주",
        valueEn: "Core queries prioritized"
      }
    ],
    isPending: true
  },
  {
    name: "SCHNEIDER POC 프로젝트",
    nameEn: "SCHNEIDER PoC Project",
    period: "2025.10 - 2025.11",
    periodEn: "Oct 2025 - Nov 2025",
    kind: "영업 제안용 PoC",
    kindEn: "Pre-sales PoC",
    scope: ["역할/범위 입력 예정"],
    scopeEn: ["To be defined"],
    tech: ["Java", "Spring", "Jenkins", "Git", "GitLab", "Polymer", "JavaScript", "PostgreSQL"],
    techEn: ["Java", "Spring", "Jenkins", "Git", "GitLab", "Polymer", "JavaScript", "PostgreSQL"],
    contributions: ["핵심 기여 입력 예정"],
    contributionsEn: ["Key contributions to be updated."],
    metrics: [
      {
        label: "상태",
        labelEn: "Status",
        value: "제안 단계",
        valueEn: "Proposal phase"
      }
    ],
    isPending: true
  },
  {
    name: "SMARTSUITE 1.0 수출입 모듈 개발",
    nameEn: "SMARTSUITE 1.0 Import/Export Module",
    period: "2025.12 - 2026.02",
    periodEn: "Dec 2025 - Feb 2026",
    kind: "수출입 모듈 프로젝트",
    kindEn: "Import/Export Module Project",
    scope: ["역할/범위 입력 예정"],
    scopeEn: ["To be defined"],
    tech: ["JavaScript", "Java", "Spring", "PostgreSQL"],
    techEn: ["JavaScript", "Java", "Spring", "PostgreSQL"],
    contributions: ["핵심 기여 입력 예정"],
    contributionsEn: ["Key contributions to be updated."],
    metrics: [
      {
        label: "상태",
        labelEn: "Status",
        value: "진행 예정",
        valueEn: "Planned"
      }
    ],
    isPending: true
  }
];

export const FOCUS = [
  {
    title: "SCM 도메인 개발",
    titleEn: "SCM Domain Development",
    desc: "SCM 핵심 기능을 설계, 구현하고 운영에서 바로 체감되는 개선을 우선으로 진행합니다.",
    descEn: "I prioritize practical operational improvements while designing and implementing core SCM functions."
  },
  {
    title: "SAP Integration",
    titleEn: "SAP Integration",
    desc: "외부 시스템과의 데이터 정합성을 유지하면서도 업무 변경 요청을 빠르게 반영합니다.",
    descEn: "I integrate external systems with business consistency and adapt quickly to changing requirements."
  },
  {
    title: "Operation Stability",
    titleEn: "Operation Stability",
    desc: "오류가 적게 나는 로직과 쿼리 개선으로 운영 대응 난이도를 낮추고 대응 속도를 높입니다.",
    descEn: "I reduce operational complexity by improving logic and query stability with a focus on fewer incidents."
  }
];
