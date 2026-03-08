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
        <div className="contact-shell">
          <div className="contact-copy-block">
            <p>{t.contactConsoleLabel}</p>
            <h3>{localizedProfile.name}</h3>
            <strong>{localizedProfile.role} · {localizedProfile.domain}</strong>
            <span>{t.contactConsoleSummary}</span>

            <div className="contact-actions">
              <button className="ui-btn ui-btn-primary" type="button" onClick={copyEmail}>
                {copyState === "success" ? t.contactCopiedLabel : t.contactCopyLabel}
              </button>
              <button className="ui-btn ui-btn-ghost" type="button" onClick={onExportPdf} disabled={isExportingPdf}>
                {isExportingPdf ? t.pdfExportLoading : t.pdfExportLabel}
              </button>
            </div>
          </div>

          <div className="contact-grid contact-grid--condensed">
            <div className="contact-row">
              <span>{t.contactMailLabel}</span>
              <strong>{localizedProfile.email}</strong>
            </div>
            <div className="contact-row">
              <span>{t.contactEmail}</span>
              <strong>{localizedProfile.github.replace("https://", "")}</strong>
            </div>
            <div className="contact-row">
              <span>{t.contactAvailabilityLabel}</span>
              <strong>{t.contactAvailabilityValue}</strong>
            </div>
          </div>
        </div>

        <p className="contact-copy-status" role="status" aria-live="polite">
          {copyState === "success" ? t.contactCopiedLabel : ""}
          {copyState === "error" ? t.contactCopyFailedLabel : ""}
        </p>

        <div className="contact-footnote">
          <small>{t.contactAvailability}</small>
          <small>{year}</small>
        </div>
      </article>
    </PortfolioSection>
  );
}
