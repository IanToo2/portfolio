import { useCallback, useEffect, useMemo, useState } from "react";
import { TEXT } from "./data/portfolioText";
import ResumeDocument from "./features/portfolio/document/ResumeDocument";
import WebHome from "./features/portfolio/web/WebHome";
import usePortfolioPdfExport from "./hooks/usePortfolioPdfExport";
import usePortfolioHomeModel from "./features/portfolio/usePortfolioHomeModel";
import useViewMode from "./hooks/useViewMode";

export default function App() {
  const [lang, setLang] = useState<"ko" | "en">("ko");
  const year = useMemo(() => new Date().getFullYear(), []);
  const t = TEXT[lang];

  const {
    localizedProfile,
    summaryQuick,
    resumeProjectGroups,
    resumeStrengths,
    stackGroups,
    experienceGroups,
    learningGroups,
    projectCardLabels,
    webProjectGroups,
    webHistory
  } = usePortfolioHomeModel({ lang, t });

  const { viewMode, resumeHref, showCard } = useViewMode();
  const isDocument = viewMode === "document";
  const handlePdfExportError = useCallback(() => {
    window.alert(t.pdfExportError);
  }, [t.pdfExportError]);
  const { isExportingPdf, exportPortfolioPdf } = usePortfolioPdfExport({ onError: handlePdfExportError });

  const toggleLang = () => setLang((prev) => (prev === "ko" ? "en" : "ko"));
  const langSwitchAriaLabel =
    t.langSwitchAriaLabel ?? (lang === "ko" ? "Switch to English page" : "Switch to Korean page");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    document.body.classList.toggle("is-resume-view", isDocument);
    document.body.classList.toggle("is-web-view", !isDocument);
    return () => document.body.classList.remove("is-resume-view", "is-web-view");
  }, [isDocument]);

  if (isDocument) {
    return (
      <>
        <a className="skip-link" href="#home">{t.skipToMain}</a>
        <ResumeDocument
          t={t}
          localizedProfile={localizedProfile}
          summaryQuick={summaryQuick}
          resumeStrengths={resumeStrengths}
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
      <WebHome
        t={t}
        localizedProfile={localizedProfile}
        webProjectGroups={webProjectGroups}
        webHistory={webHistory}
        stackGroups={stackGroups}
        resumeHref={resumeHref}
        switchLang={toggleLang}
        switchLabel={t.switchLang}
        langSwitchAriaLabel={langSwitchAriaLabel}
      />
    </>
  );
}
