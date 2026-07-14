import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { TEXT } from "./data/portfolioText";
import CapabilitySection from "./features/portfolio/components/CapabilitySection";
import CareerSection from "./features/portfolio/components/CareerSection";
import ContactPanel from "./features/portfolio/components/ContactPanel";
import HomeOverviewSection from "./features/portfolio/components/HomeOverviewSection";
import PortfolioIntroOverlay from "./features/portfolio/components/PortfolioIntroOverlay";
import PortfolioTopBar from "./features/portfolio/components/PortfolioTopBar";
import ProjectsHubSection from "./features/portfolio/components/ProjectsHubSection";
import ResumeDocument from "./features/portfolio/document/ResumeDocument";
import useActiveSection from "./hooks/useActiveSection";
import usePortfolioPdfExport from "./hooks/usePortfolioPdfExport";
import usePortfolioScrollExperience from "./hooks/usePortfolioScrollExperience";
import usePortfolioHomeModel from "./features/portfolio/usePortfolioHomeModel";
import useViewMode from "./hooks/useViewMode";
import useViewportFlags from "./hooks/useViewportFlags";

export default function App() {
  const [lang, setLang] = useState<"ko" | "en">("ko");
  const [introPhase, setIntroPhase] = useState<"boot" | "active" | "leaving" | "done">("boot");
  const [typedLength, setTypedLength] = useState(0);
  const navLinkRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const year = useMemo(() => new Date().getFullYear(), []);
  const t = TEXT[lang];

  const {
    localizedProfile,
    navItems,
    scanHierarchy,
    localizedMetrics,
    summaryQuick,
    heroProofs,
    featuredProjects,
    projectGroups,
    resumeProjectGroups,
    capabilityPillars,
    stackGroups,
    localizedExperience,
    experienceGroups,
    learningGroups,
    projectCardLabels
  } = usePortfolioHomeModel({ lang, t });

  const { viewMode, resumeHref, showCard } = useViewMode();
  const isDocument = viewMode === "document";
  const { showTopButton } = useViewportFlags();
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
  const introGreeting = t.introGreeting;
  const isIntroVisible = introPhase !== "done";
  const isIntroScrollLocked = introPhase === "boot" || introPhase === "active";
  const isIntroLeaving = introPhase === "leaving";
  const typedGreeting = introGreeting.slice(0, typedLength);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (typeof window === "undefined") {
      setIntroPhase("done");
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setTypedLength(introGreeting.length);
      setIntroPhase("done");
      return undefined;
    }

    setTypedLength(0);
    setIntroPhase("active");
    return undefined;
  }, [introGreeting]);

  useEffect(() => {
    if (introPhase !== "active") {
      return undefined;
    }

    const typeInterval = window.setInterval(() => {
      setTypedLength((prev) => {
        if (prev >= introGreeting.length) {
          window.clearInterval(typeInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 70);

    return () => window.clearInterval(typeInterval);
  }, [introGreeting, introPhase]);

  useEffect(() => {
    if (introPhase !== "active" || typedLength < introGreeting.length) {
      return undefined;
    }

    const leaveTimer = window.setTimeout(() => setIntroPhase("leaving"), 480);
    const doneTimer = window.setTimeout(() => setIntroPhase("done"), 980);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
    };
  }, [introGreeting.length, introPhase, typedLength]);

  useEffect(() => {
    if (typeof window === "undefined" || introPhase === "done") {
      return undefined;
    }

    const failSafeTimer = window.setTimeout(() => setIntroPhase("done"), 2600);
    return () => window.clearTimeout(failSafeTimer);
  }, [introPhase]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    document.body.classList.toggle("is-intro-active", !isDocument && isIntroScrollLocked);
    return () => document.body.classList.remove("is-intro-active");
  }, [isDocument, isIntroScrollLocked]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    document.body.classList.toggle("is-resume-view", isDocument);
    return () => document.body.classList.remove("is-resume-view");
  }, [isDocument]);

  usePortfolioScrollExperience({
    enabled: !isDocument && (introPhase === "leaving" || introPhase === "done")
  });

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

  if (isDocument) {
    return (
      <>
        <a className="skip-link" href="#home">{t.skipToMain}</a>
        <ResumeDocument
          t={t}
          localizedProfile={localizedProfile}
          summaryQuick={summaryQuick}
          resumeProjectGroups={resumeProjectGroups}
          stackGroups={stackGroups}
          experienceGroups={experienceGroups}
          learningGroups={learningGroups}
          projectCardLabels={projectCardLabels}
          year={year}
          switchLang={toggleLang}
          switchLabel={t.switchLang}
          langSwitchAriaLabel={langSwitchAriaLabel}
          onExportPdf={exportPortfolioPdf}
          isExportingPdf={isExportingPdf}
          onShowCard={showCard}
        />
      </>
    );
  }

  return (
    <>
      <a className="skip-link" href="#home">{t.skipToMain}</a>
      <div className="page-bg" aria-hidden="true" />
      <div className="page-grain" aria-hidden="true" />

      {isIntroVisible ? (
        <PortfolioIntroOverlay typedGreeting={typedGreeting} isLeaving={isIntroLeaving} />
      ) : null}

      <PortfolioTopBar
        className="page-reveal is-visible"
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
        statusLabel={t.navStatus}
        resumeHref={resumeHref}
        resumeLabel={t.resumeViewLabel}
        resumeAriaLabel={t.resumeViewAriaLabel}
      />

      <main id="top" className="page-shell page-reveal-group is-visible">
        <HomeOverviewSection
          t={t}
          localizedProfile={localizedProfile}
          localizedMetrics={localizedMetrics}
          summaryQuick={summaryQuick}
          heroProofs={heroProofs}
          featuredProjects={featuredProjects}
          scanHierarchy={scanHierarchy}
        />
        <ProjectsHubSection
          t={t}
          featuredProjects={featuredProjects}
          projectGroups={projectGroups}
          projectCardLabels={projectCardLabels}
        />
        <CapabilitySection
          t={t}
          capabilityPillars={capabilityPillars}
          stackGroups={stackGroups}
        />
        <CareerSection
          t={t}
          localizedExperience={localizedExperience}
          learningGroups={learningGroups}
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
