import { useCallback, useState } from "react";

// 브라우저 인쇄(PDF로 저장)로 내보낸다. 화면 캡처가 아니라 실제 텍스트·링크가 들어간 PDF가 나온다.
// 인쇄 레이아웃은 src/styles/resume.css의 @media print가 담당한다.

function formatDatePart(value) {
  return String(value).padStart(2, "0");
}

// Chrome/Edge는 문서 제목을 PDF 기본 파일명으로 쓴다.
function createFileName(fileTag) {
  const now = new Date();
  const year = now.getFullYear();
  const month = formatDatePart(now.getMonth() + 1);
  const day = formatDatePart(now.getDate());
  const prefix = fileTag ? `portfolio-${fileTag}` : "portfolio";
  return `${prefix}-${year}-${month}-${day}`;
}

export default function usePortfolioPdfExport({ onError, fileTag }) {
  const [isExportingPdf, setIsExportingPdf] = useState(false);

  const exportPortfolioPdf = useCallback(async () => {
    if (isExportingPdf) {
      return;
    }

    setIsExportingPdf(true);
    const originalTitle = document.title;

    try {
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      document.title = createFileName(fileTag);
      // print()는 인쇄 창이 닫힐 때까지 반환하지 않는다.
      window.print();
    } catch (error) {
      console.error("PDF export failed:", error);
      onError?.();
    } finally {
      document.title = originalTitle;
      setIsExportingPdf(false);
    }
  }, [fileTag, isExportingPdf, onError]);

  return {
    isExportingPdf,
    exportPortfolioPdf
  };
}
