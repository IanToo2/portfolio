import Icon from "../../../components/Icon";
import PortfolioSection from "./PortfolioSection";

export default function HomeOverviewSection({
  t,
  localizedProfile,
  localizedMetrics,
  summaryQuick,
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
      <article className="home-hero-card home-hero-card--condensed" data-breakpoint="true">
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

        <div className="home-summary-band">
          <section className="home-summary-block">
            <div className="home-card-head">
              <p>{t.summaryQuickStrengthsLabel}</p>
              <Icon type="spark" />
            </div>
            <ul className="home-inline-list">
              {summaryQuick.strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="home-summary-block">
            <div className="home-card-head">
              <p>{t.summaryProofTitle}</p>
              <Icon type="target" />
            </div>
            <ul className="home-inline-list home-inline-list--proof">
              {heroProofs.map((item) => (
                <li key={item.id}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>

      <div className="home-detail-grid home-detail-grid--condensed">
        <article className="home-snapshot-panel" data-breakpoint="true">
          <div className="home-panel-head">
            <p>{t.summaryMetricsLabel}</p>
            <strong>{summaryQuick.coreLine}</strong>
          </div>

          <div className="home-fact-list">
            {localizedMetrics.map((item) => (
              <div key={item.label} className="home-fact-row">
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
