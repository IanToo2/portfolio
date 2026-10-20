import { useCallback, useEffect, useMemo, useState } from "react";
import { TEXT } from "./data/portfolioText";
import { resolveVariant } from "./data/variants";
import CvDocument from "./features/portfolio/document/CvDocument";
import ResumeDocument from "./features/portfolio/document/ResumeDocument";
import WebHome from "./features/portfolio/web/WebHome";
import usePortfolioPdfExport from "./hooks/usePortfolioPdfExport";
import usePortfolioHomeModel from "./features/portfolio/usePortfolioHomeModel";
import useViewMode from "./hooks/useViewMode";

export default function App() {
  const [lang, setLang] = useState<"ko" | "en">("ko");
  const year = useMemo(() => new Date().getFullYear(), []);
  const t = TEXT[lang];
  const { viewMode, variantId, resumeHref, showResume, showCv, showCard } = useViewMode();
  const variant = useMemo(() => resolveVariant(variantId), [variantId]);

  const {
    localizedProfile,
    summaryQuick,
    resumeProjectGroups,
    resumeProjectHistory,
    resumeStrengths,
    stackGroups,
    experienceGroups,
    learningGroups,
    projectCardLabels,
    webProjectGroups,
    webHistory
  } = usePortfolioHomeModel({ lang, t, variant });

  // 경력기술서(document)와 이력서(cv)는 같은 문서 스타일·PDF 내보내기를 쓴다.
  const isCv = viewMode === "cv";
  const isDocument = viewMode === "document" || isCv;
  const handlePdfExportError = useCallback(() => {
    window.alert(t.pdfExportError);
  }, [t.pdfExportError]);
  const { isExportingPdf, exportPortfolioPdf } = usePortfolioPdfExport({
    onError: handlePdfExportError,
    filePrefix: isCv ? "cv" : "portfolio",
    fileTag: variant?.id
  });

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

  if (isCv) {
    return (
      <>
        <a className="skip-link" href="#home">{t.skipToMain}</a>
        <CvDocument
          t={t}
          localizedProfile={localizedProfile}
          summaryQuick={summaryQuick}
          resumeProjectHistory={resumeProjectHistory}
          stackGroups={stackGroups}
          experienceGroups={experienceGroups}
          learningGroups={learningGroups}
          switchLang={toggleLang}
          switchLabel={t.switchLang}
          langSwitchAriaLabel={langSwitchAriaLabel}
          onExportPdf={exportPortfolioPdf}
          isExportingPdf={isExportingPdf}
          onShowCard={showCard}
          onShowResume={showResume}
        />
      </>
    );
  }

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
          resumeProjectHistory={resumeProjectHistory}
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
          onShowCv={showCv}
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
