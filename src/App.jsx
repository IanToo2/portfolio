import { useEffect, useMemo, useState } from "react";

const PROFILE = {
  name: "김정인",
  role: "Backend Developer",
  domain: "SCM Trade & Logistics",
  tagline: "업무 맥락으로 빠르게 구현하고 안정적으로 운영합니다.",
  intro:
    "EMRO에서 SCM 무역/물류 도메인을 개발하고 있습니다. 비즈니스 로직을 명확히 설계하고, 운영에서 바로 체감되는 개선을 만드는 데 집중합니다.",
  email: "rlawjddla0203@gmail.com",
  github: "https://github.com/IanToo2"
};

const NAV_ITEMS = [
  { id: "summary", label: "소개", emoji: "👋" },
  { id: "projects", label: "프로젝트", emoji: "🗂️" },
  { id: "stack", label: "기술 스택", emoji: "🛠️" },
  { id: "experience", label: "경력", emoji: "📌" },
  { id: "focus", label: "중점 업무", emoji: "🎯" },
  { id: "contact", label: "연락", emoji: "✉️" }
];

const METRICS = [
  { label: "실무 경력", value: "2024.09 - 현재", icon: "clock" },
  { label: "현재 소속", value: "EMRO", icon: "building" },
  { label: "주력 도메인", value: "SCM", icon: "box" }
];

const STACK = [
  { title: "Backend", icon: "server", items: ["Java", "Spring Boot", "JPA", "MyBatis"] },
  { title: "Database", icon: "database", items: ["Oracle", "PostgreSQL", "MySQL"] },
  { title: "Cloud", icon: "cloud", items: ["AWS EC2", "AWS RDS", "AWS S3", "Docker"] },
  { title: "Delivery", icon: "gear", items: ["Jenkins", "GitLab CI"] },
  { title: "Collaboration", icon: "team", items: ["Git", "GitLab", "Jira"] },
  { title: "Frontend", icon: "layout", items: ["JavaScript", "Polymer", "React"] }
];

const EXPERIENCE = [
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

const EDUCATION = [
  {
    period: "2017.03 - 2024.02",
    organization: "경북대학교",
    title: "학사",
    bullets: ["2017년 3월 입학 ~ 2024년 2월 졸업"]
  }
];

const TRAINING = [
  {
    period: "2024.01 - 2024.09",
    organization: "삼성청년소프트웨어아카데미(SSAFY)",
    title: "교육과정",
    bullets: ["2024년 1월 ~ 9월 수료"]
  }
];

const PROJECTS = [
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

const FOCUS = [
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

function Icon({ type }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "icon"
  };

  if (type === "clock") return <svg {...common}><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></svg>;
  if (type === "building") return <svg {...common}><path d="M4 20V6l4-2 4 2v14" /><path d="M12 20V9l4-2 4 2v11" /><path d="M8 10h.01M8 13h.01M16 13h.01M16 16h.01" /></svg>;
  if (type === "box") return <svg {...common}><path d="m12 3 7 4-7 4-7-4 7-4Z" /><path d="M5 7v8l7 4 7-4V7" /></svg>;
  if (type === "server") return <svg {...common}><rect x="4" y="5" width="16" height="6" rx="1.5" /><rect x="4" y="13" width="16" height="6" rx="1.5" /><path d="M8 8h.01M8 16h.01" /></svg>;
  if (type === "database") return <svg {...common}><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v8c0 1.7 3.1 3 7 3s7-1.3 7-3V6" /><path d="M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3" /></svg>;
  if (type === "cloud") return <svg {...common}><path d="M7 18h9a4 4 0 0 0 0-8 5 5 0 0 0-9.7-1.8A3.5 3.5 0 0 0 7 18" /></svg>;
  if (type === "gear") return <svg {...common}><circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.5-2.4.7a7 7 0 0 0-1.7-1l-.4-2.5h-4l-.4 2.5a7 7 0 0 0-1.7 1L5.1 6 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5 2.1 3.5 2.4-.7a7 7 0 0 0 1.7 1l.4 2.5h4l.4-2.5a7 7 0 0 0 1.7-1l2.4.7 2-3.5-2-1.5c.1-.3.1-.7.1-1Z" /></svg>;
  if (type === "team") return <svg {...common}><circle cx="9" cy="8" r="2.5" /><circle cx="16" cy="9" r="2" /><path d="M4.5 18c.6-2.2 2.3-3.5 4.5-3.5S13 15.8 13.5 18" /><path d="M14 18c.4-1.5 1.4-2.4 2.9-2.4 1.3 0 2.3.7 2.8 2" /></svg>;
  if (type === "layout") return <svg {...common}><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M9 5v14M9 10h11" /></svg>;
  if (type === "route") return <svg {...common}><circle cx="6" cy="6" r="2" /><circle cx="18" cy="18" r="2" /><path d="M8 6h4a3 3 0 0 1 3 3v3a2 2 0 0 0 2 2h1" /></svg>;
  if (type === "link") return <svg {...common}><path d="M10 14a3 3 0 0 1 0-4l2-2a3 3 0 0 1 4 4l-1 1" /><path d="M14 10a3 3 0 0 1 0 4l-2 2a3 3 0 0 1-4-4l1-1" /></svg>;
  if (type === "shield") return <svg {...common}><path d="M12 3 5 6v5c0 4.4 3 8 7 10 4-2 7-5.6 7-10V6l-7-3Z" /><path d="m9.5 12 1.8 1.8 3.2-3.2" /></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="8" /></svg>;
}

function SectionHead({ label, title, subtitle, icon }) {
  return (
    <div className="section-head">
      <div className="section-head-top">
        <span className="section-icon" aria-hidden="true"><Icon type={icon} /></span>
        <p>{label}</p>
      </div>
      <h2>{title}</h2>
      {subtitle ? <span>{subtitle}</span> : null}
    </div>
  );
}

function TimelineGroup({ title, items }) {
  return (
    <div className="timeline-group">
      <h3 className="timeline-group-title">{title}</h3>
      <div className="timeline">
        {items.map((item) => (
          <article key={`${title}-${item.period}-${item.organization}`} className="timeline-card panel">
            <span>{item.period}</span>
            <h3>{item.organization} · {item.title}</h3>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card panel">
      <div className="project-top">
        <strong>{project.name}</strong>
        <span>{project.period}</span>
      </div>
      <div className="project-meta">
        <p className="project-kind">프로젝트 성격: {project.kind}</p>
        <p className="project-kind">수행 범위: {project.scope.join(" / ")}</p>
      </div>
      <ul className="project-tech">
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <p className="project-contrib-title">상세 기여</p>
      <ul className="project-contrib">
        {project.contributions.map((contribution) => (
          <li key={contribution}>{contribution}</li>
        ))}
      </ul>
      <div className="project-status-wrap">
        <span className={`project-status ${project.isPending ? "pending" : "done"}`}>
          {project.isPending ? "🚧 진행 중 / 진행 예정" : "✅ 종료"}
        </span>
      </div>
    </article>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("summary");
  const year = useMemo(() => new Date().getFullYear(), []);
  const isQaProject = (project) =>
    project.kind === "QA" || (project.scope.includes("테스트") && project.scope.length === 1);
  const developmentProjects = PROJECTS.filter((project) => !isQaProject(project));
  const qaProjects = PROJECTS.filter((project) => isQaProject(project));
  const featuredProjects = developmentProjects.slice(0, 2);
  const restDevelopmentProjects = developmentProjects.slice(2);

  useEffect(() => {
    const sectionIds = [...NAV_ITEMS.map((item) => item.id), "qa"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;
        const nextId = visible[0].target.id === "qa" ? "projects" : visible[0].target.id;
        setActiveSection(nextId);
      },
      {
        rootMargin: "-32% 0px -52% 0px",
        threshold: [0.25, 0.45, 0.7]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="bg-layer" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className="topbar reveal d1">
        <a className="logo" href="#top"><span>KJI</span></a>
        <nav className="menu">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
              onClick={() => setActiveSection(item.id)}
            >
              <span className="menu-emoji" aria-hidden="true">{item.emoji}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </header>

      <main id="top" className="container">
        <section className="hero reveal d2">
          <div className="hero-main">
            <div className="hero-copy-area">
              <p className="eyebrow">{PROFILE.role} · {PROFILE.domain}</p>
              <h1>
                {PROFILE.name}
                <span>Portfolio</span>
              </h1>
              <p className="hero-copy">{PROFILE.intro}</p>
              <div className="hero-actions">
                <a className="btn primary" href="#projects">프로젝트 보기</a>
                <a className="btn ghost" href="#contact">연락하기</a>
              </div>
              <p className="hero-tag">{PROFILE.tagline}</p>
            </div>

            <aside className="hero-panel panel">
              <p className="panel-kicker">Profile Snapshot</p>
              <h2>{PROFILE.name}</h2>
              <ul className="hero-panel-list">
                {METRICS.map((item) => (
                  <li key={item.label}>
                    <span className="badge"><Icon type={item.icon} /></span>
                    <div>
                      <p>{item.label}</p>
                      <strong>{item.value}</strong>
                    </div>
                  </li>
                ))}
              </ul>
              <a href={PROFILE.github} target="_blank" rel="noreferrer">
                {PROFILE.github.replace("https://", "")}
              </a>
            </aside>
          </div>
        </section>

        <section id="summary" className="section reveal d3">
          <SectionHead
            label="Summary"
            title="업무 맥락을 빠르게 파악해 안정적으로 구현합니다"
            subtitle="SCM 무역/물류 도메인에서 설계-개발-운영 전환까지 일관되게 수행합니다."
            icon="route"
          />
          <div className="metric-grid">
            {METRICS.map((item) => (
              <article key={item.label} className="metric-card panel">
                <div className="badge"><Icon type={item.icon} /></div>
                <p>{item.label}</p>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section reveal d4">
          <SectionHead
            label="Projects"
            title="개발 프로젝트"
            subtitle="프로덕션 환경에서 검증한 구현 경험을 중심으로 정리했습니다."
            icon="box"
          />
          <div className="featured-head">
            <h3>대표 프로젝트</h3>
            <p>핵심 기여와 운영 영향도가 큰 프로젝트를 우선 배치했습니다.</p>
          </div>
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
          {restDevelopmentProjects.length ? (
            <>
              <div className="project-subhead">
                <h3>추가 프로젝트</h3>
              </div>
              <div className="project-grid">
                {restDevelopmentProjects.map((project) => (
                  <ProjectCard key={project.name} project={project} />
                ))}
              </div>
            </>
          ) : null}
        </section>

        <section id="qa" className="section reveal d4">
          <SectionHead
            label="Projects"
            title="QA 프로젝트"
            subtitle="데이터 정합성과 쿼리 변환 이슈 중심으로 검증한 이력입니다."
            icon="shield"
          />
          <div className="project-grid">
            {qaProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        <section id="stack" className="section reveal d5">
          <SectionHead
            label="Skill Set"
            title="사용 가능한 기술 스택"
            subtitle="백엔드 중심으로 데이터베이스, 배포 파이프라인, 협업 도구를 다룹니다."
            icon="server"
          />
          <div className="stack-grid">
            {STACK.map((group) => (
              <article key={group.title} className="stack-card panel">
                <h3><Icon type={group.icon} />{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section reveal d5">
          <SectionHead
            label="Experience"
            title="경력 및 학습 타임라인"
            subtitle="실무 경험, 학력, 교육 이력을 분리해 성장 흐름을 보여줍니다."
            icon="clock"
          />
          <div className="timeline-groups">
            <TimelineGroup title="실무 경력" items={EXPERIENCE} />
            <TimelineGroup title="학력" items={EDUCATION} />
            <TimelineGroup title="교육 이력" items={TRAINING} />
          </div>
        </section>

        <section id="focus" className="section reveal d6">
          <SectionHead
            label="What I Build"
            title="중점 업무 영역"
            subtitle="기능 구현뿐 아니라 연동 안정성과 운영 효율까지 함께 고려합니다."
            icon="link"
          />
          <div className="focus-grid">
            {FOCUS.map((item, index) => (
              <article key={item.title} className={`focus-card c${index + 1} panel`}>
                <h3><Icon type={item.icon} />{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section reveal d6">
          <article className="contact-card panel">
            <p>Contact</p>
            <h2><span className="contact-emoji" aria-hidden="true">✉️</span>{PROFILE.email}</h2>
            <a href={PROFILE.github} target="_blank" rel="noreferrer">
              <span className="contact-emoji" aria-hidden="true">🐙</span>
              {PROFILE.github.replace("https://", "")}
            </a>
            <small>{year} · Ready for better systems</small>
          </article>
        </section>
      </main>
    </>
  );
}