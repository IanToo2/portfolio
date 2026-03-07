import { useCallback, useEffect, useState } from "react";
import PortfolioSection from "./PortfolioSection";

export default function ContactPanel({ t, localizedProfile, year, onExportPdf, isExportingPdf }) {
  const [copyState, setCopyState] = useState("idle");

  useEffect(() => {
    if (copyState === "idle") {
      return undefined;
    }

    const timer = window.setTimeout(() => setCopyState("idle"), 1800);
    return () => window.clearTimeout(timer);
  }, [copyState]);

  const copyEmail = useCallback(async () => {
    const email = localizedProfile.email;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const tempInput = document.createElement("textarea");
        tempInput.value = email;
        tempInput.setAttribute("readonly", "");
        tempInput.style.position = "absolute";
        tempInput.style.left = "-9999px";
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
      }
      setCopyState("success");
    } catch {
      setCopyState("error");
    }
  }, [localizedProfile.email]);

  return (
    <PortfolioSection
      id="contact"
      label={t.contactLabel}
      title={t.contactTitle}
      subtitle={t.contactFooter}
      className="portfolio-contact"
    >
      <article className="contact-card" data-breakpoint="true">
        <div className="projects-console-bar contact-console-bar">
          <div className="projects-console-copy">
            <p>{t.contactConsoleLabel}</p>
            <strong>{t.contactConsoleSummary}</strong>
          </div>
        </div>
        <div className="contact-grid">
          <a className="contact-link-card" href={`mailto:${localizedProfile.email}`}>
            <span>{t.contactMailLabel}</span>
            <strong>{localizedProfile.email}</strong>
          </a>
          <a className="contact-link-card" href={localizedProfile.github} target="_blank" rel="noreferrer">
            <span>{t.contactEmail}</span>
            <strong>{localizedProfile.github.replace("https://", "")}</strong>
          </a>
        </div>
        <div className="contact-actions">
          <button className="ui-btn ui-btn-ghost" type="button" onClick={copyEmail}>
            {copyState === "success" ? (t.contactCopiedLabel ?? "Copied") : (t.contactCopyLabel ?? "Copy Email")}
          </button>
          <button className="ui-btn ui-btn-soft" type="button" onClick={onExportPdf} disabled={isExportingPdf}>
            {isExportingPdf ? t.pdfExportLoading : t.pdfExportLabel}
          </button>
        </div>
        <p className="contact-copy-status" role="status" aria-live="polite">
          {copyState === "success" ? (t.contactCopiedLabel ?? "Copied") : ""}
          {copyState === "error" ? (t.contactCopyFailedLabel ?? "Copy failed. Please try again.") : ""}
        </p>
        <small>{year}</small>
      </article>
    </PortfolioSection>
  );
}
