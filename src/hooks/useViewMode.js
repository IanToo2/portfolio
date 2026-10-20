import { useCallback, useEffect, useState } from "react";

const RESUME_HASH = "#/resume";
const CARD_HASH = "#/card";

function readRoute() {
  if (typeof window === "undefined") {
    return { viewMode: "document", variantId: null };
  }

  // #/<view>/<variant>: view is resume|card, variant is an optional role id (e.g. #/resume/qa).
  const [view = "", variantId = ""] = window.location.hash.replace(/^#\/?/, "").toLowerCase().split("/");
  // Default entry is the document (resume) view; the card view is opt-in via #/card.
  return { viewMode: view.startsWith("card") ? "card" : "document", variantId: variantId || null };
}

const withVariant = (hash, variantId) => (variantId ? `${hash}/${variantId}` : hash);

export default function useViewMode() {
  const [route, setRoute] = useState(readRoute);
  const { viewMode, variantId } = route;

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const handleHashChange = () => setRoute(readRoute());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const showResume = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    // Document is the default view, so clear the hash to return to the clean URL (keeping the role variant).
    const { pathname, search } = window.location;
    window.history.replaceState(null, "", pathname + search + (variantId ? withVariant(RESUME_HASH, variantId) : ""));
    setRoute({ viewMode: "document", variantId });
  }, [variantId]);

  const showCard = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    const cardHash = withVariant(CARD_HASH, variantId);
    if (window.location.hash !== cardHash) {
      window.location.hash = cardHash;
    }
  }, [variantId]);

  return {
    viewMode,
    variantId,
    resumeHref: withVariant(RESUME_HASH, variantId),
    cardHref: withVariant(CARD_HASH, variantId),
    showResume,
    showCard
  };
}
