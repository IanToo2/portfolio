import { useCallback, useState } from "react";

const EXPORT_CLASS = "is-exporting-pdf";
const TARGET_SELECTOR = "main.page-shell";
const A4_WIDTH_MM = 210;
const A4_HEIGHT_MM = 297;
const PAGE_MARGIN_X_MM = 12;
const PAGE_MARGIN_Y_MM = 12;
const CONTENT_WIDTH_MM = A4_WIDTH_MM - PAGE_MARGIN_X_MM * 2;
const CONTENT_HEIGHT_MM = A4_HEIGHT_MM - PAGE_MARGIN_Y_MM * 2;
const MIN_PAGE_FILL_RATIO = 0.55;
const MAX_PAGE_STRETCH_RATIO = 1.15;
const MIN_SLICE_PX = 80;

const BREAKPOINT_SELECTORS = [
  "[data-breakpoint='true']",
  ".home-card",
  ".home-stat-card",
  ".featured-project-card",
  ".project-card",
  ".project-group-card",
  ".capability-card",
  ".stack-card",
  ".timeline-card",
  ".contact-card"
];

function formatDatePart(value) {
  return String(value).padStart(2, "0");
}

function createFileName() {
  const now = new Date();
  const year = now.getFullYear();
  const month = formatDatePart(now.getMonth() + 1);
  const day = formatDatePart(now.getDate());
  return `portfolio-${year}-${month}-${day}.pdf`;
}

function waitForImages(target) {
  const images = Array.from(target.querySelectorAll("img"));
  return Promise.all(
    images.map((image) => {
      if (image.complete) {
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        image.addEventListener("load", resolve, { once: true });
        image.addEventListener("error", resolve, { once: true });
      });
    })
  );
}

function nextPaint() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => resolve());
  });
}

function collectBreakpoints(target) {
  const targetRect = target.getBoundingClientRect();
  const maxHeight = targetRect.height;
  const points = new Set();
  points.add(0);

  BREAKPOINT_SELECTORS.forEach((selector) => {
    target.querySelectorAll(selector).forEach((element) => {
      const rect = element.getBoundingClientRect();
      const top = Math.round(rect.top - targetRect.top);
      const bottom = Math.round(rect.bottom - targetRect.top);

      if (top > 0 && top < maxHeight) {
        points.add(top);
      }
      if (bottom > 0 && bottom < maxHeight) {
        points.add(bottom);
      }
    });
  });

  points.add(Math.round(maxHeight));
  return Array.from(points).sort((a, b) => a - b);
}

function resolveSliceEnd({ startPx, pageHeightPx, maxCanvasHeightPx, breakpointsPx }) {
  const idealEnd = Math.min(startPx + pageHeightPx, maxCanvasHeightPx);
  if (idealEnd >= maxCanvasHeightPx) {
    return maxCanvasHeightPx;
  }

  const minEnd = startPx + Math.floor(pageHeightPx * MIN_PAGE_FILL_RATIO);
  const preferredEnd = breakpointsPx
    .filter((point) => point >= minEnd && point <= idealEnd && point - startPx >= MIN_SLICE_PX)
    .pop();

  if (preferredEnd) {
    return preferredEnd;
  }

  const maxStretchEnd = Math.min(
    maxCanvasHeightPx,
    startPx + Math.floor(pageHeightPx * MAX_PAGE_STRETCH_RATIO)
  );

  const nextEnd = breakpointsPx.find(
    (point) => point > idealEnd && point <= maxStretchEnd && point - startPx >= MIN_SLICE_PX
  );

  if (nextEnd) {
    return nextEnd;
  }

  return idealEnd;
}

export default function usePortfolioPdfExport({ onError }) {
  const [isExportingPdf, setIsExportingPdf] = useState(false);

  const exportPortfolioPdf = useCallback(async () => {
    if (isExportingPdf) {
      return;
    }

    const target = document.querySelector(TARGET_SELECTOR);
    if (!target) {
      onError?.();
      return;
    }

    setIsExportingPdf(true);

    try {
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }
      await waitForImages(target);
      await nextPaint();
      const sourceBreakpoints = collectBreakpoints(target);
      const sourceHeightPx = Math.max(1, Math.round(target.getBoundingClientRect().height));

      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf")
      ]);

      const scale = Math.min(2, window.devicePixelRatio || 1.5);
      const canvas = await html2canvas(target, {
        scale,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
        scrollX: 0,
        scrollY: -window.scrollY,
        onclone: (clonedDocument) => {
          clonedDocument.body.classList.add(EXPORT_CLASS);
        }
      });

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true
      });

      const pxPerMm = canvas.width / CONTENT_WIDTH_MM;
      const pageHeightPx = Math.max(1, Math.floor(CONTENT_HEIGHT_MM * pxPerMm));
      const scaleY = canvas.height / sourceHeightPx;
      const canvasBreakpoints = sourceBreakpoints
        .map((point) => Math.round(point * scaleY))
        .filter((point) => point >= 0 && point <= canvas.height)
        .sort((a, b) => a - b);

      let currentOffsetPx = 0;
      let pageIndex = 0;

      while (currentOffsetPx < canvas.height) {
        const endPx = resolveSliceEnd({
          startPx: currentOffsetPx,
          pageHeightPx,
          maxCanvasHeightPx: canvas.height,
          breakpointsPx: canvasBreakpoints
        });

        const safeEndPx = Math.max(currentOffsetPx + 1, endPx);
        const sliceHeightPx = Math.min(safeEndPx - currentOffsetPx, canvas.height - currentOffsetPx);
        const pageCanvas = document.createElement("canvas");
        pageCanvas.width = canvas.width;
        pageCanvas.height = sliceHeightPx;

        const pageCtx = pageCanvas.getContext("2d");
        pageCtx?.drawImage(
          canvas,
          0,
          currentOffsetPx,
          canvas.width,
          sliceHeightPx,
          0,
          0,
          canvas.width,
          sliceHeightPx
        );

        const pageImage = pageCanvas.toDataURL("image/png");
        const renderedHeightMm = sliceHeightPx / pxPerMm;

        if (pageIndex > 0) {
          pdf.addPage("a4", "portrait");
        }

        pdf.addImage(pageImage, "PNG", PAGE_MARGIN_X_MM, PAGE_MARGIN_Y_MM, CONTENT_WIDTH_MM, renderedHeightMm);
        currentOffsetPx += sliceHeightPx;
        pageIndex += 1;
      }

      pdf.save(createFileName());
    } catch (error) {
      console.error("PDF export failed:", error);
      onError?.();
    } finally {
      setIsExportingPdf(false);
    }
  }, [isExportingPdf, onError]);

  return {
    isExportingPdf,
    exportPortfolioPdf
  };
}
