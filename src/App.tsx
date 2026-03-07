import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { TEXT } from "./data/portfolioText";
import CapabilitySection from "./features/portfolio/components/CapabilitySection";
import CareerSection from "./features/portfolio/components/CareerSection";
import ContactPanel from "./features/portfolio/components/ContactPanel";
import HomeOverviewSection from "./features/portfolio/components/HomeOverviewSection";
import PortfolioTopBar from "./features/portfolio/components/PortfolioTopBar";
import ProjectsHubSection from "./features/portfolio/components/ProjectsHubSection";
import useActiveSection from "./hooks/useActiveSection";
import usePortfolioPdfExport from "./hooks/usePortfolioPdfExport";
import usePortfolioHomeModel from "./features/portfolio/usePortfolioHomeModel";
import useViewportFlags from "./hooks/useViewportFlags";

export default function App() {
  const [lang, setLang] = useState<"ko" | "en">("ko");
  const navLinkRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const year = useMemo(() => new Date().getFullYear(), []);
  const t = TEXT[lang];

  const {
    localizedProfile,
    navItems,
    localizedMetrics,
    localizedHighlights,
    localizedStack,
    localizedExperience,
    localizedEducation,
    localizedTraining,
    localizedAwards,
    localizedCertifications,
    summaryQuick,
    featuredProjects,
    workScmProjects,
    workQaProjects,
    teamProjects,
    projectCardLabels
  } = usePortfolioHomeModel({ lang, t });

  const { showTopButton, isMobile } = useViewportFlags();
  const workProjectTotal = workScmProjects.length + workQaProjects.length;
  const sectionIds = useMemo(() => navItems.map((item) => item.id), [navItems]);
  const { activeSection, setActiveSection } = useActiveSection(sectionIds);
  const handlePdfExportError = useCallback(() => {
    window.alert(t.pdfExportError);
  }, [t.pdfExportError]);
  const { isExportingPdf, exportPortfolioPdf } = usePortfolioPdfExport({ onError: handlePdfExportError });

  const toggleLang = () => setLang((prev) => (prev === "ko" ? "en" : "ko"));
  const logoHomeAriaLabel = t.logoHomeAriaLabel ?? `${localizedProfile.name} portfolio home`;
  const langSwitchAriaLabel =
    t.langSwitchAriaLabel ?? (lang === "ko" ? "Switch to English page" : "Switch to Korean page");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const handleMenuKeyDown = useCallback((event: KeyboardEvent<HTMLAnchorElement>, index: number) => {
    const { key } = event;
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(key)) {
      return;
    }

    const total = navLinkRefs.current.length;
    if (!total) {
      return;
    }

    event.preventDefault();
    let nextIndex = index;
    if (key === "ArrowRight") {
      nextIndex = (index + 1) % total;
    } else if (key === "ArrowLeft") {
      nextIndex = (index - 1 + total) % total;
    } else if (key === "Home") {
      nextIndex = 0;
    } else if (key === "End") {
      nextIndex = total - 1;
    }

    navLinkRefs.current[nextIndex]?.focus();
  }, []);

  return (
    <>
      <a className="skip-link" href="#home">{t.skipToMain}</a>
      <div className="page-bg" aria-hidden="true" />
      <div className="page-grain" aria-hidden="true" />

      <PortfolioTopBar
        logoHomeAriaLabel={logoHomeAriaLabel}
        localizedProfile={localizedProfile}
        navItems={navItems}
        navLinkRefs={navLinkRefs}
        activeSection={activeSection}
        onSelectSection={setActiveSection}
        onMenuKeyDown={handleMenuKeyDown}
        langSwitchAriaLabel={langSwitchAriaLabel}
        switchLang={toggleLang}
        switchLabel={t.switchLang}
      />

      <main id="top" className="page-shell">
        <HomeOverviewSection
          t={t}
          localizedProfile={localizedProfile}
          localizedMetrics={localizedMetrics}
          summaryQuick={summaryQuick}
          featuredProjects={featuredProjects}
          localizedHighlights={localizedHighlights}
        />
        <ProjectsHubSection
          t={t}
          featuredProjects={featuredProjects}
          workScmProjects={workScmProjects}
          workQaProjects={workQaProjects}
          teamProjects={teamProjects}
          projectCardLabels={projectCardLabels}
          isMobile={isMobile}
        />
        <CapabilitySection
          t={t}
          localizedHighlights={localizedHighlights}
          localizedStack={localizedStack}
        />
        <CareerSection
          t={t}
          workProjectTotal={workProjectTotal}
          localizedExperience={localizedExperience}
          localizedEducation={localizedEducation}
          localizedTraining={localizedTraining}
          localizedAwards={localizedAwards}
          localizedCertifications={localizedCertifications}
        />
        <ContactPanel
          t={t}
          localizedProfile={localizedProfile}
          year={year}
          onExportPdf={exportPortfolioPdf}
          isExportingPdf={isExportingPdf}
        />
      </main>
      <button
        type="button"
        className={`to-top ${showTopButton ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        tabIndex={showTopButton ? 0 : -1}
        aria-hidden={!showTopButton}
        aria-label={t.toTop}
      >
        {t.toTop}
      </button>
    </>
  );
}
