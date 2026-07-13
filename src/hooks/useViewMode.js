import { useCallback, useEffect, useState } from "react";

const RESUME_HASH = "#/resume";

function readViewMode() {
  if (typeof window === "undefined") {
    return "card";
  }

  const hash = window.location.hash.replace(/^#\/?/, "").toLowerCase();
  return hash.startsWith("resume") ? "document" : "card";
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

    if (window.location.hash !== RESUME_HASH) {
      window.location.hash = RESUME_HASH;
    }
  }, []);

  const showCard = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    const { pathname, search } = window.location;
    window.history.replaceState(null, "", pathname + search);
    setViewMode("card");
  }, []);

  return { viewMode, resumeHref: RESUME_HASH, showResume, showCard };
}
