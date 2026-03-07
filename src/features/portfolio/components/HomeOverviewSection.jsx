import Icon from "../../../components/Icon";
import PortfolioSection from "./PortfolioSection";

export default function HomeOverviewSection({
  t,
  localizedProfile,
  localizedMetrics,
  summaryQuick,
  primaryCaseStudies,
  heroProofs
}) {
  return (
    <PortfolioSection
      id="home"
      label={t.summaryLabel}
      title={localizedProfile.name}
      subtitle={summaryQuick.coreLine}
      className="portfolio-home"
    >
      <div className="home-reboot-grid">
        <article className="home-hero-card home-card">
          <div className="home-hero-topline">
            <p>{t.heroConsoleLabel}</p>
            <span>{summaryQuick.fit}</span>
          </div>
          <h3>{localizedProfile.role} · {localizedProfile.domain}</h3>
          <p className="home-hero-copy">{localizedProfile.intro}</p>

          <div className="home-proof-rail">
            {heroProofs.map((item) => (
              <div key={item.id} className="home-proof-chip">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

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
        </article>

        <aside className="home-sidebar-stack" aria-label={t.featuredHead}>
          <article className="home-card home-card--accent">
            <p>{t.summaryQuickStrengthsLabel}</p>
            <ul className="home-impact-list">
              {summaryQuick.strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="home-card home-card--selected">
            <div className="home-selected-head">
              <p>{t.heroFeaturedLinkLabel}</p>
              <a href="#projects">{t.projectsTitle}</a>
            </div>
            <ul className="home-selected-work-list">
              {primaryCaseStudies.map((project) => (
                <li key={project.id}>
                  <div>
                    <strong>{project.name}</strong>
                    <span>{project.period}</span>
                  </div>
                  <Icon type="link" />
                </li>
              ))}
            </ul>
          </article>
        </aside>
      </div>
    </PortfolioSection>
  );
}
