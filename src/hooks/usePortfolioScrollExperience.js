import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function usePortfolioScrollExperience({ enabled }) {
  useEffect(() => {
    if (!enabled || typeof window === "undefined" || typeof document === "undefined") {
      return undefined;
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotionQuery.matches) {
      return undefined;
    }

    document.documentElement.classList.add("is-scroll-enhanced");

    const lenis = new Lenis({
      duration: 1.02,
      smoothWheel: true,
      smoothTouch: true,
      syncTouch: true,
      touchMultiplier: 1.02,
      anchors: {
        offset: -112
      }
    });

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    const sections = gsap.utils.toArray(".portfolio-section");

    const context = gsap.context(() => {
      sections.forEach((section) => {
        const body = section.querySelector(".portfolio-section-body") ?? section;

        gsap.fromTo(
          body,
          { y: 64, opacity: 0.42, scale: 0.988 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              end: "top 26%",
              scrub: true
            }
          }
        );
      });

      gsap.fromTo(
        ".home-hero-card",
        { y: 0, scale: 1 },
        {
          y: -24,
          scale: 0.992,
          ease: "none",
          scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        }
      );

      gsap.fromTo(
        ".project-grid",
        { y: 0 },
        {
          y: -18,
          ease: "none",
          scrollTrigger: {
            trigger: "#projects",
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        }
      );
    });

    ScrollTrigger.refresh();

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      context.revert();
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      document.documentElement.classList.remove("is-scroll-enhanced");
    };
  }, [enabled]);
}
