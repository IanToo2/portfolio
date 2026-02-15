import { useEffect, useMemo, useState } from "react";
import Icon from "./components/Icon";
import ProjectCard from "./components/ProjectCard";
import SectionHead from "./components/SectionHead";
import TimelineGroup from "./components/TimelineGroup";
import {
  EDUCATION,
  EXPERIENCE,
  FOCUS,
  METRICS,
  NAV_ITEMS,
  PROFILE,
  PROJECTS,
  STACK,
  TRAINING
} from "./data/portfolioData";

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