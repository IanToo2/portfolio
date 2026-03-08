import Icon from "../../../components/Icon";
import PortfolioSection from "./PortfolioSection";

export default function HomeOverviewSection({
  t,
  localizedProfile,
  localizedMetrics,
  summaryQuick,
  primaryCaseStudies,
  heroProofs,
  scanHierarchy
}) {
  return (
    <PortfolioSection
      id="home"
      label={t.summaryLabel}
      title={t.summaryTitle}
      subtitle={t.summarySubtitle}
      className="portfolio-home"
    >
      <div className="home-stage">
        <article className="home-hero-card" data-breakpoint="true">
          <div className="home-hero-topline">
            <p>{t.heroConsoleLabel}</p>
            <span>{summaryQuick.fit}</span>
          </div>

          <div className="home-hero-copy-wrap">
            <div className="home-hero-title-block">
              <h3>{localizedProfile.name}</h3>
              <strong>{localizedProfile.role} · {localizedProfile.domain}</strong>
            </div>
            <p className="home-hero-copy">{localizedProfile.intro}</p>
          </div>

          <div className="home-action-row">
            <a className="ui-btn ui-btn-primary" href="#projects">{t.heroActionProjects}</a>
            <a className="ui-btn ui-btn-ghost" href="#career">{t.heroActionExperience}</a>
            <a className="ui-btn ui-btn-soft" href="#contact">{t.heroActionContact}</a>
          </div>

          <div className="home-proof-grid">
            {heroProofs.map((item) => (
              <div key={item.id} className="home-proof-chip">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </article>

        <aside className="home-sidebar-stack" aria-label={t.summaryProofTitle}>
          <article className="home-card home-card--accent" data-breakpoint="true">
            <div className="home-card-head">
              <p>{t.summaryQuickStrengthsLabel}</p>
              <Icon type="spark" />
            </div>
            <ul className="home-impact-list">
              {summaryQuick.strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="home-card home-card--selected" data-breakpoint="true">
            <div className="home-selected-head">
              <p>{t.summaryCaseStudyTitle}</p>
              <a href="#projects">{t.heroFeaturedLinkLabel}</a>
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

      <div className="home-detail-grid">
        <article className="home-snapshot-panel" data-breakpoint="true">
          <div className="home-panel-head">
            <p>{t.summaryMetricsLabel}</p>
            <strong>{t.summaryProofTitle}</strong>
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

        <article className="home-scan-panel" data-breakpoint="true">
          <div className="home-panel-head">
            <p>{t.summaryScanOrderLabel}</p>
            <strong>{scanHierarchy.sectionOrder.join(" → ")}</strong>
          </div>
          <ol className="home-scan-list">
            {scanHierarchy.stages.map((item) => (
              <li key={item.id}>
                <strong>{item.label}</strong>
                <span>{item.detail}</span>
              </li>
            ))}
          </ol>
        </article>
      </div>
    </PortfolioSection>
  );
}
