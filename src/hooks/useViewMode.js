import { useCallback, useEffect, useState } from "react";

const RESUME_HASH = "#/resume";
const CV_HASH = "#/cv";
const CARD_HASH = "#/card";

function resolveViewMode(view) {
  if (view.startsWith("card")) return "card";
  if (view === "cv") return "cv";
  return "document";
}

function readRoute() {
  if (typeof window === "undefined") {
    return { viewMode: "document", variantId: null };
  }

  // #/<view>/<variant>: view is resume|cv|card, variant is an optional role id (e.g. #/resume/qa).
  // document = 경력기술서, cv = 이력서, card = 웹 뷰.
  const [view = "", variantId = ""] = window.location.hash.replace(/^#\/?/, "").toLowerCase().split("/");
  // Default entry is the document (resume) view; the other views are opt-in via their hash.
  return { viewMode: resolveViewMode(view), variantId: variantId || null };
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

  // Switching views keeps the role variant; the hashchange listener updates the route.
  const goTo = useCallback(
    (hash) => {
      if (typeof window === "undefined") {
        return;
      }

      const target = withVariant(hash, variantId);
      if (window.location.hash !== target) {
        window.location.hash = target;
      }
    },
    [variantId]
  );

  const showResume = useCallback(() => goTo(RESUME_HASH), [goTo]);
  const showCv = useCallback(() => goTo(CV_HASH), [goTo]);
  const showCard = useCallback(() => goTo(CARD_HASH), [goTo]);

  return {
    viewMode,
    variantId,
    resumeHref: withVariant(RESUME_HASH, variantId),
    cvHref: withVariant(CV_HASH, variantId),
    cardHref: withVariant(CARD_HASH, variantId),
    showResume,
    showCv,
    showCard
  };
}
