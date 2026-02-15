import { useEffect, useMemo, useState } from "react";
import Icon from "./components/Icon";
import ProjectCard from "./components/ProjectCard";
import SectionHead from "./components/SectionHead";
import TimelineGroup from "./components/TimelineGroup";
import {
  EDUCATION,
  EXPERIENCE,
  FOCUS,
  HIGHLIGHTS,
  METRICS,
  NAV_ITEMS,
  PROFILE,
  PROJECTS,
  STACK,
  TRAINING
} from "./data/portfolioData";

const TEXT = {
  ko: {
    navLabel: "포트폴리오",
    heroActionProjects: "프로젝트 보기",
    heroActionContact: "연락하기",
    heroActionMail: "이메일 문의",
    panelSnapshot: "Profile Snapshot",
    summaryLabel: "Summary",
    summaryTitle: "업무 맥락을 빠르게 파악해 안정적으로 구현합니다",
    summarySubtitle: "SCM 무역/물류 도메인에서 설계-개발-운영 전환까지 일관되게 수행합니다.",
    highlightsLabel: "Highlights",
    highlightsTitle: "핵심 성과",
    highlightsSubtitle: "개발·전환·운영 연계 전 과정을 통해 얻은 운영 품질 경험을 정리했습니다.",
    projectsLabel: "Projects",
    projectsTitle: "개발 프로젝트",
    projectsSubtitle: "프로덕션 환경에서 검증한 구현 경험을 중심으로 정리했습니다.",
    featuredHead: "대표 프로젝트",
    featuredSub:
      "핵심 기여와 운영 영향도가 큰 프로젝트를 우선 배치했습니다.",
    additionalHead: "추가 프로젝트",
    qaTitle: "QA 프로젝트",
    qaSubtitle: "데이터 정합성과 쿼리 변환 이슈 중심으로 검증한 이력입니다.",
    stackLabel: "Skill Set",
    stackTitle: "사용 가능한 기술 스택",
    stackSubtitle: "백엔드 중심으로 데이터베이스, 배포 파이프라인, 협업 도구를 다룹니다.",
    stackProficiencyLabel: "숙련도",
    experienceLabel: "Experience",
    experienceTitle: "경력 및 학습 타임라인",
    experienceSubtitle: "실무 경험, 학력, 교육 이력을 분리해 성장 흐름을 보여줍니다.",
    focusLabel: "What I Build",
    focusTitle: "중점 업무 영역",
    focusSubtitle: "기능 구현뿐 아니라 연동 안정성과 운영 효율까지 함께 고려합니다.",
    contactLabel: "Contact",
    contactFooter: "더 나은 운영을 위한 준비가 된 파트너",
    contactEmail: "GitHub 보기",
    contactMailLabel: "이메일 문의",
    contactCopyLabel: "이메일 복사",
    contactCopiedLabel: "이메일 복사됨",
    switchLang: "EN",
    projectCard: {
      projectTypeLabel: "프로젝트 성격",
      scopeLabel: "담당 범위",
      technologiesLabel: "기술 스택",
      contributionsLabel: "주요 기여",
      metricsLabel: "성과 지표",
      statusDone: "완료",
      statusPending: "진행 중인 프로젝트",
      copySubject: "포트폴리오 문의드립니다",
      copyBody: "안녕하세요, 포트폴리오를 보고 연락드립니다."
    },
    timelineTitles: {
      work: "실무 경력",
      education: "학력",
      training: "교육 이력"
    }
  },
  en: {
    navLabel: "Portfolio",
    heroActionProjects: "View Projects",
    heroActionContact: "Contact",
    heroActionMail: "Send Email",
    panelSnapshot: "Profile Snapshot",
    summaryLabel: "Summary",
    summaryTitle: "I understand business context quickly and build reliable solutions.",
    summarySubtitle: "I consistently handle design, development, and operations handoff in SCM trade/logistics.",
    highlightsLabel: "Highlights",
    highlightsTitle: "Key Highlights",
    highlightsSubtitle: "I focus on quality outcomes across development, migration, and operations.",
    projectsLabel: "Projects",
    projectsTitle: "Development Projects",
    projectsSubtitle: "Production-validated implementation experience.",
    featuredHead: "Featured Projects",
    featuredSub: "Priority is given to projects with major contribution and operational impact.",
    additionalHead: "Additional Projects",
    qaTitle: "QA Projects",
    qaSubtitle: "Migration and SQL conversion cases validated for data consistency.",
    stackLabel: "Skill Set",
    stackTitle: "Available Technology Stack",
    stackSubtitle: "Core backend focus on databases, delivery pipelines, and collaboration tools.",
    stackProficiencyLabel: "Proficiency",
    experienceLabel: "Experience",
    experienceTitle: "Career & Learning Timeline",
    experienceSubtitle: "Work, education, and training paths with practical growth context.",
    focusLabel: "What I Build",
    focusTitle: "Focus Areas",
    focusSubtitle: "I build for integration reliability and operational efficiency, not only feature delivery.",
    contactLabel: "Contact",
    contactFooter: "A steady partner ready for better operations.",
    contactEmail: "Open GitHub",
    contactMailLabel: "Email Me",
    contactCopyLabel: "Copy Email",
    contactCopiedLabel: "Email Copied",
    switchLang: "KO",
    projectCard: {
      projectTypeLabel: "Project Type",
      scopeLabel: "Responsibility",
      technologiesLabel: "Tech Stack",
      contributionsLabel: "Key Contributions",
      metricsLabel: "Impact Metrics",
      statusDone: "Completed",
      statusPending: "In Progress",
      copySubject: "Portfolio Inquiry",
      copyBody: "Hello, I read your portfolio and would like to discuss a potential opportunity."
    },
    timelineTitles: {
      work: "Work Experience",
      education: "Education",
      training: "Training"
    }
  }
};

export default function App() {
  const [activeSection, setActiveSection] = useState("summary");
  const [lang, setLang] = useState("ko");
  const [emailCopied, setEmailCopied] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);
  const t = TEXT[lang];

  const isQaProject = (project) =>
    project.kind === "QA" ||
    project.kindEn === "QA" ||
    project.scope.includes("QA") ||
    project.scope.includes("테스트");

  const localize = (item, field, fallbackField = field) =>
    lang === "en" ? item[`${field}En`] ?? item[fallbackField] : item[field];
  const localizeList = (item, field, fallbackField = field) => {
    const resolved = localize(item, field, fallbackField);
    return Array.isArray(resolved) ? resolved : item[fallbackField];
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

  const subject = encodeURIComponent(t.projectCard.copySubject);
  const body = encodeURIComponent(t.projectCard.copyBody);
  const mailTo = useMemo(() => `mailto:${PROFILE.email}?subject=${subject}&body=${body}`, [subject, body]);

  const localizedNavItems = NAV_ITEMS.map((item) => ({ ...item, label: localize(item, "label") }));
  const localizedMetrics = METRICS.map((item) => ({
    ...item,
    label: localize(item, "label"),
    value: localize(item, "value")
  }));
  const localizedHighlights = HIGHLIGHTS.map((item) => ({
    ...item,
    title: localize(item, "title"),
    text: localize(item, "text")
  }));
  const localizedProjects = PROJECTS.map((project) => ({
    ...project,
    name: localize(project, "name"),
    period: localize(project, "period"),
    kind: localize(project, "kind"),
    scope: localizeList(project, "scope"),
    tech: localizeList(project, "tech"),
    contributions: localizeList(project, "contributions"),
    metrics: project.metrics?.map((metric) => ({
      label: localize(metric, "label"),
      value: localize(metric, "value")
    }))
  }));

  const localizedStack = STACK.map((group) => ({
    ...group,
    title: localize(group, "title"),
    items: localizeList(group, "items")
  }));
  const localizedExperience = EXPERIENCE.map((item) => ({
    ...item,
    period: localize(item, "period"),
    organization: localize(item, "organization"),
    title: localize(item, "title"),
    bullets: localizeList(item, "bullets")
  }));
  const localizedEducation = EDUCATION.map((item) => ({
    ...item,
    period: localize(item, "period"),
    organization: localize(item, "organization"),
    title: localize(item, "title"),
    bullets: localizeList(item, "bullets")
  }));
  const localizedTraining = TRAINING.map((item) => ({
    ...item,
    period: localize(item, "period"),
    organization: localize(item, "organization"),
    title: localize(item, "title"),
    bullets: localizeList(item, "bullets")
  }));
  const localizedFocus = FOCUS.map((item) => ({
    ...item,
    title: localize(item, "title"),
    desc: localize(item, "desc")
  }));

  const developmentProjects = localizedProjects.filter((project) => !isQaProject(project));
  const qaProjects = localizedProjects.filter((project) => isQaProject(project));
  const featuredProjects = developmentProjects.slice(0, 2);
  const restDevelopmentProjects = developmentProjects.slice(2);

  const toggleLang = () => setLang((prev) => (prev === "ko" ? "en" : "ko"));

  const copyEmail = () => {
    if (!navigator?.clipboard?.writeText) return;
    navigator.clipboard.writeText(PROFILE.email).then(() => {
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 1600);
    });
  };

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
        <div className="topbar-right">
          <nav className="menu">
            {localizedNavItems.map((item) => (
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
          <button className="lang-switch" type="button" onClick={toggleLang}>
            {t.switchLang}
          </button>
        </div>
      </header>

      <main id="top" className="container">
        <section className="hero reveal d2">
          <div className="hero-main">
            <div className="hero-copy-area">
              <p className="eyebrow">{localizedProfile.role} · {localizedProfile.domain}</p>
              <h1>
                {localizedProfile.name}
                <span>{t.navLabel}</span>
              </h1>
              <p className="hero-copy">{localizedProfile.intro}</p>
              <div className="hero-actions">
                <a className="btn primary" href="#projects">{t.heroActionProjects}</a>
                <a className="btn ghost" href="#contact">{t.heroActionContact}</a>
                <a className="btn ghost" href={mailTo}>
                  {t.heroActionMail}
                </a>
              </div>
              <p className="hero-tag">{localizedProfile.tagline}</p>
            </div>

            <aside className="hero-panel panel">
              <p className="panel-kicker">{t.panelSnapshot}</p>
              <h2>{localizedProfile.name}</h2>
              <ul className="hero-panel-list">
                {localizedMetrics.map((item) => (
                  <li key={item.label}>
                    <span className="badge"><Icon type={item.icon} /></span>
                    <div>
                      <p>{item.label}</p>
                      <strong>{item.value}</strong>
                    </div>
                  </li>
                ))}
              </ul>
              <a href={localizedProfile.github} target="_blank" rel="noreferrer">
                {localizedProfile.github.replace("https://", "")}
              </a>
            </aside>
          </div>
        </section>

        <section id="summary" className="section reveal d3">
          <SectionHead
            label={t.summaryLabel}
            title={t.summaryTitle}
            subtitle={t.summarySubtitle}
            icon="route"
          />
          <div className="metric-grid">
            {localizedMetrics.map((item) => (
              <article key={item.label} className="metric-card panel">
                <div className="badge"><Icon type={item.icon} /></div>
                <p>{item.label}</p>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="highlights" className="section reveal d4">
          <SectionHead
            label={t.highlightsLabel}
            title={t.highlightsTitle}
            subtitle={t.highlightsSubtitle}
            icon="shield"
          />
          <div className="metric-grid">
            {localizedHighlights.map((item) => (
              <article key={item.title} className="metric-card panel">
                <div className="badge"><Icon type={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section reveal d4">
          <SectionHead
            label={t.projectsLabel}
            title={t.projectsTitle}
            subtitle={t.projectsSubtitle}
            icon="box"
          />
          <div className="featured-head">
            <h3>{t.featuredHead}</h3>
            <p>{t.featuredSub}</p>
          </div>
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} labels={t.projectCard} />
            ))}
          </div>
          {restDevelopmentProjects.length ? (
            <>
              <div className="project-subhead">
                <h3>{t.additionalHead}</h3>
              </div>
              <div className="project-grid">
                {restDevelopmentProjects.map((project) => (
                  <ProjectCard key={project.name} project={project} labels={t.projectCard} />
                ))}
              </div>
            </>
          ) : null}
        </section>

        <section id="qa" className="section reveal d4">
          <SectionHead
            label={t.projectsLabel}
            title={t.qaTitle}
            subtitle={t.qaSubtitle}
            icon="shield"
          />
          <div className="project-grid">
            {qaProjects.map((project) => (
              <ProjectCard key={project.name} project={project} labels={t.projectCard} />
            ))}
          </div>
        </section>

        <section id="stack" className="section reveal d5">
          <SectionHead
            label={t.stackLabel}
            title={t.stackTitle}
            subtitle={t.stackSubtitle}
            icon="server"
          />
          <div className="stack-grid">
            {localizedStack.map((group) => (
              <article key={group.title} className="stack-card panel">
                <h3><Icon type={group.icon} />{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {typeof group.proficiency === "number" ? (
                  <>
                    <p className="stack-meter-label">
                      {t.stackProficiencyLabel}: {group.proficiency}%
                    </p>
                    <div className="stack-meter" role="progressbar" aria-valuenow={group.proficiency} aria-valuemin={0} aria-valuemax={100}>
                      <span style={{ width: `${group.proficiency}%` }} />
                    </div>
                  </>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section reveal d5">
          <SectionHead
            label={t.experienceLabel}
            title={t.experienceTitle}
            subtitle={t.experienceSubtitle}
            icon="clock"
          />
          <div className="timeline-groups">
            <TimelineGroup title={t.timelineTitles.work} items={localizedExperience} />
            <TimelineGroup title={t.timelineTitles.education} items={localizedEducation} />
            <TimelineGroup title={t.timelineTitles.training} items={localizedTraining} />
          </div>
        </section>

        <section id="focus" className="section reveal d6">
          <SectionHead
            label={t.focusLabel}
            title={t.focusTitle}
            subtitle={t.focusSubtitle}
            icon="link"
          />
          <div className="focus-grid">
            {localizedFocus.map((item, index) => (
              <article key={item.title} className={`focus-card c${index + 1} panel`}>
                <h3><Icon type={item.icon} />{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section reveal d6">
          <article className="contact-card panel">
            <p>{t.contactLabel}</p>
            <h2><span className="contact-emoji" aria-hidden="true">✉️</span>{localizedProfile.email}</h2>
            <a href={localizedProfile.github} target="_blank" rel="noreferrer">
              <span className="contact-emoji" aria-hidden="true">🐙</span>
              {localizedProfile.github.replace("https://", "")}
            </a>
            <div className="contact-links">
              <a className="btn ghost" href={mailTo}>
                {t.contactMailLabel}
              </a>
              <a className="btn ghost" href={localizedProfile.github} target="_blank" rel="noreferrer">
                {t.contactEmail}
              </a>
              <button className="btn ghost" type="button" onClick={copyEmail}>
                {emailCopied ? t.contactCopiedLabel : t.contactCopyLabel}
              </button>
            </div>
            <small>{year} · {t.contactFooter}</small>
          </article>
        </section>
      </main>
    </>
  );
}
