import { useMemo, useState } from "react";
import HeroDecorStrip from "./components/HeroDecorStrip";
import Icon from "./components/Icon";
import ProjectCard from "./components/ProjectCard";
import SectionHead from "./components/SectionHead";
import TimelineGroup from "./components/TimelineGroup";
import { TEXT } from "./data/portfolioText";
import useActiveSection from "./hooks/useActiveSection";
import usePortfolioViewModel from "./hooks/usePortfolioViewModel";
import useViewportFlags from "./hooks/useViewportFlags";

const NAV_ICON_BY_SECTION = {
  summary: "spark",
  focus: "target",
  highlights: "shield",
  projects: "box",
  stack: "layout",
  experience: "timeline",
  contact: "mail"
};

const STACK_TECH_LOGOS = {
  Java: "☕",
  "Spring Boot": "🌱",
  JPA: "JPA",
  MyBatis: "MB",
  Oracle: "OR",
  PostgreSQL: "🐘",
  MySQL: "🐬",
  "AWS EC2": "EC2",
  "AWS RDS": "RDS",
  "AWS S3": "S3",
  Docker: "🐳",
  Jenkins: "JK",
  "GitLab CI": "GL",
  Git: "Git",
  GitLab: "GL",
  Jira: "JR",
  JavaScript: "JS",
  Polymer: "PL",
  React: "⚛"
};

export default function App() {
  const [lang, setLang] = useState("ko");
  const [collapsedProjects, setCollapsedProjects] = useState({});
  const year = useMemo(() => new Date().getFullYear(), []);
  const t = TEXT[lang];

  const {
    localizedProfile,
    localizedNavItems,
    localizedMetrics,
    localizedHighlights,
    localizedStack,
    localizedExperience,
    localizedEducation,
    localizedTraining,
    localizedAwards,
    localizedCertifications,
    localizedFocus,
    featuredProjects,
    workScmProjects,
    workQaProjects,
    teamProjects,
    projectCardLabels
  } = usePortfolioViewModel({ lang, t });

  const { showTopButton, isMobile } = useViewportFlags();
  const sectionIds = useMemo(() => localizedNavItems.map((item) => item.id), [localizedNavItems]);
  const { activeSection, setActiveSection } = useActiveSection(sectionIds);

  const subject = encodeURIComponent(t.projectCard.copySubject);
  const body = encodeURIComponent(t.projectCard.copyBody);
  const mailTo = useMemo(
    () => `mailto:${localizedProfile.email}?subject=${subject}&body=${body}`,
    [localizedProfile.email, subject, body]
  );

  const getProjectKey = (project) => project.id ?? `${project.name}|${project.period}`;
  const isProjectCollapsed = (project) => (isMobile ? collapsedProjects[getProjectKey(project)] !== false : false);
  const toggleProjectCollapse = (project) => {
    const key = getProjectKey(project);
    setCollapsedProjects((prev) => ({ ...prev, [key]: !(prev[key] !== false) }));
  };

  const toggleLang = () => setLang((prev) => (prev === "ko" ? "en" : "ko"));

  const filteredWorkScmProjects = useMemo(() => {
    const featuredProjectIds = new Set(featuredProjects.map((project) => project.id));
    return workScmProjects.filter((project) => !featuredProjectIds.has(project.id));
  }, [featuredProjects, workScmProjects]);

  const renderProjectCards = (projects, className) => (
    <div className={className}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          labels={projectCardLabels}
          collapsible={isMobile}
          collapsed={isProjectCollapsed(project)}
          onToggleCollapse={() => toggleProjectCollapse(project)}
        />
      ))}
    </div>
  );

  const renderProjectGroup = ({ title, subtitle, projects }) => (
    <>
      <div className="project-subhead">
        <h3>{title}</h3>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      {projects.length ? (
        renderProjectCards(projects, "project-grid")
      ) : (
        <p className="empty-state panel">{t.projectEmpty}</p>
      )}
    </>
  );

  return (
    <>
      <a className="skip-link" href="#summary">{t.skipToMain}</a>
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
                <span className="menu-emoji" aria-hidden="true">
                  <Icon type={NAV_ICON_BY_SECTION[item.id] ?? "spark"} />
                </span>
                <span className="menu-label">{item.label}</span>
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
                <span className="hero-name">{localizedProfile.name}</span>
                <span className="hero-title">{t.navLabel}</span>
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
              <HeroDecorStrip />
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
                <li>
                  <span className="badge"><Icon type="link" /></span>
                  <div>
                    <p>GitHub</p>
                    <strong>
                      <a className="hero-panel-link" href={localizedProfile.github} target="_blank" rel="noreferrer">
                        {localizedProfile.github.replace("https://", "")}
                      </a>
                    </strong>
                  </div>
                </li>
              </ul>
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

        <section id="focus" className="section reveal d4">
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
            <div>
              <h3>{t.featuredHead}</h3>
              <p>{t.featuredSub}</p>
            </div>
          </div>
          {featuredProjects.length ? (
            renderProjectCards(featuredProjects, "featured-grid")
          ) : (
            <p className="empty-state panel">{t.projectEmpty}</p>
          )}

          <div className="project-subhead project-group-head">
            <h3>{t.workHead}</h3>
            <p>{t.workSub}</p>
          </div>
          {renderProjectGroup({
            title: t.scmHead,
            subtitle: t.scmSub,
            projects: filteredWorkScmProjects
          })}
          {renderProjectGroup({
            title: t.qaHead,
            subtitle: t.qaSub,
            projects: workQaProjects
          })}
          {renderProjectGroup({
            title: t.teamHead,
            subtitle: t.teamSub,
            projects: teamProjects
          })}
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
                    <li key={item}>
                      <span className="stack-tech-logo" aria-hidden="true">{STACK_TECH_LOGOS[item] ?? "•"}</span>
                      <span>{item}</span>
                    </li>
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
            <TimelineGroup
              title={t.timelineTitles.awards}
              items={localizedAwards}
              showOrganizationInHeading={false}
            />
            <TimelineGroup
              title={t.timelineTitles.certifications}
              items={localizedCertifications}
              showOrganizationInHeading={false}
            />
          </div>
        </section>

        <section id="contact" className="section reveal d6">
          <article className="contact-card panel">
            <p>{t.contactLabel}</p>
            <h2><span className="contact-emoji" aria-hidden="true">✉️</span>{localizedProfile.email}</h2>
            <a className="contact-direct-link" href={localizedProfile.github} target="_blank" rel="noreferrer">
              <span className="contact-emoji" aria-hidden="true">🐙</span>
              {localizedProfile.github.replace("https://", "")}
            </a>
            <div className="contact-badges" aria-hidden="true">
              <span className="contact-badge">📨 Quick Reply</span>
              <span className="contact-badge">🤝 Open to Collaboration</span>
              <span className="contact-badge">🛠️ Backend Focus</span>
            </div>
            <small>{year} · {t.contactFooter}</small>
          </article>
        </section>
      </main>
      <button
        type="button"
        className={`to-top ${showTopButton ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        tabIndex={showTopButton ? 0 : -1}
        aria-hidden={!showTopButton}
      >
        {t.toTop}
      </button>
    </>
  );
}
