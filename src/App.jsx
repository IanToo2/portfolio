import { useMemo, useState } from "react";
import HeroDecorStrip from "./components/HeroDecorStrip";
import Icon from "./components/Icon";
import ContactSection from "./components/sections/ContactSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import HighlightsSection from "./components/sections/HighlightsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import StackSection from "./components/sections/StackSection";
import SummarySection from "./components/sections/SummarySection";
import { TEXT } from "./data/portfolioText";
import useActiveSection from "./hooks/useActiveSection";
import usePortfolioViewModel from "./hooks/usePortfolioViewModel";
import useViewportFlags from "./hooks/useViewportFlags";

const NAV_ICON_BY_SECTION = {
  summary: "spark",
  highlights: "target",
  projects: "box",
  stack: "layout",
  experience: "timeline",
  contact: "mail"
};

export default function App() {
  const [lang, setLang] = useState("ko");
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

  const toggleLang = () => setLang((prev) => (prev === "ko" ? "en" : "ko"));

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

        <SummarySection t={t} localizedMetrics={localizedMetrics} />
        <HighlightsSection t={t} localizedHighlights={localizedHighlights} />
        <ProjectsSection
          t={t}
          featuredProjects={featuredProjects}
          workScmProjects={workScmProjects}
          workQaProjects={workQaProjects}
          teamProjects={teamProjects}
          projectCardLabels={projectCardLabels}
          isMobile={isMobile}
        />
        <StackSection t={t} localizedStack={localizedStack} />
        <ExperienceSection
          t={t}
          localizedExperience={localizedExperience}
          localizedEducation={localizedEducation}
          localizedTraining={localizedTraining}
          localizedAwards={localizedAwards}
          localizedCertifications={localizedCertifications}
        />
        <ContactSection t={t} localizedProfile={localizedProfile} year={year} />
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
