import { useCallback, useEffect, useState } from "react";

const RESUME_HASH = "#/resume";
const CARD_HASH = "#/card";

function readViewMode() {
  if (typeof window === "undefined") {
    return "document";
  }

  const hash = window.location.hash.replace(/^#\/?/, "").toLowerCase();
  // Default entry is the document (resume) view; the card view is opt-in via #/card.
  return hash.startsWith("card") ? "card" : "document";
}

export default function useViewMode() {
  const [viewMode, setViewMode] = useState(readViewMode);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const handleHashChange = () => setViewMode(readViewMode());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const showResume = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    // Document is the default view, so clear the hash to return to the clean URL.
    const { pathname, search } = window.location;
    window.history.replaceState(null, "", pathname + search);
    setViewMode("document");
  }, []);

  const showCard = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.location.hash !== CARD_HASH) {
      window.location.hash = CARD_HASH;
    }
  }, []);

  return { viewMode, resumeHref: RESUME_HASH, cardHref: CARD_HASH, showResume, showCard };
}
