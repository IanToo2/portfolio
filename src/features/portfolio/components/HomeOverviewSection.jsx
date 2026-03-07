import PortfolioSection from "./PortfolioSection";

export default function HomeOverviewSection({
  t,
  localizedProfile,
  localizedMetrics,
  summaryQuick,
  featuredProjects,
  localizedHighlights
}) {
  const topHighlights = localizedHighlights.slice(0, 3);
  const heroSignals = [t.heroSignalValue, ...summaryQuick.impacts.slice(0, 2)];

  return (
    <PortfolioSection
      id="home"
      label={t.summaryLabel}
      title={localizedProfile.name}
      subtitle={summaryQuick.coreLine}
      className="portfolio-home"
    >
      <div className="home-layout">
        <article className="home-hero-card home-card">
          <div className="home-hero-grid">
            <div>
              <div className="home-hero-topline">
                <p>{t.heroConsoleLabel}</p>
                <span>{t.summaryQuickFitLabel}</span>
              </div>
              <h3>{summaryQuick.fit}</h3>
              <p className="home-hero-copy">{localizedProfile.intro}</p>
              <div className="home-action-row">
                <a className="ui-btn ui-btn-primary" href="#projects">{t.heroActionProjects}</a>
                <a className="ui-btn ui-btn-ghost" href="#career">{t.heroActionExperience}</a>
                <a className="ui-btn ui-btn-ghost" href="#contact">{t.contactLabel}</a>
              </div>
              <div className="home-metric-grid">
                {localizedMetrics.map((item) => (
                  <div key={item.label} className="home-metric-card">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <aside className="hero-console-panel" aria-label={t.panelSnapshot}>
              <div className="hero-console-block">
                <span>{t.heroFocusLabel}</span>
                <strong>{localizedProfile.role} · {localizedProfile.domain}</strong>
                <p>{summaryQuick.coreLine}</p>
              </div>
              <div className="hero-console-block">
                <span>{t.heroSignalLabel}</span>
                <ul className="hero-signal-list">
                  {heroSignals.map((signal) => (
                    <li key={signal}>{signal}</li>
                  ))}
                </ul>
              </div>
              <div className="hero-console-block">
                <span>{t.heroFeaturedLinkLabel}</span>
                <ul className="home-featured-list home-featured-list--console">
                  {featuredProjects.map((project) => (
                    <li key={project.id}>
                      <strong>{project.name}</strong>
                      <span>{project.period}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </article>

        <div className="home-side-column">
          <article className="home-card home-card--accent">
            <p>{t.summaryQuickImpactLabel}</p>
            <ul className="home-impact-list">
              {summaryQuick.impacts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="home-card">
            <p>{t.featuredHead}</p>
            <ul className="home-featured-list">
              {featuredProjects.map((project) => (
                <li key={project.id}>
                  <strong>{project.name}</strong>
                  <span>{project.period}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="home-card">
            <p>{t.summaryQuickStrengthsLabel}</p>
            <div className="home-chip-list">
              {topHighlights.map((item) => (
                <span key={item.title}>{item.title}</span>
              ))}
            </div>
          </article>

          <article className="home-card">
            <p>GitHub</p>
            <a className="home-link" href={localizedProfile.github} target="_blank" rel="noreferrer">
              {localizedProfile.github.replace("https://", "")}
            </a>
          </article>
        </div>
      </div>
    </PortfolioSection>
  );
}
