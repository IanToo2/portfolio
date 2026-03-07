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
      duration: 1.05,
      smoothWheel: true,
      smoothTouch: true,
      syncTouch: true,
      touchMultiplier: 1.02,
      anchors: {
        offset: -118
      }
    });

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    const sections = gsap.utils.toArray(".portfolio-section");
    let snapPoints = [];

    const refreshSnapPoints = () => {
      const maxScroll = Math.max(1, ScrollTrigger.maxScroll(window));
      snapPoints = sections.map((section) => Math.min(1, section.offsetTop / maxScroll));
    };

    const context = gsap.context(() => {
      sections.forEach((section) => {
        const body = section.querySelector(".portfolio-section-body") ?? section;

        gsap.fromTo(
          body,
          { y: 72, opacity: 0.38, scale: 0.985 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 84%",
              end: "top 24%",
              scrub: true
            }
          }
        );
      });

      gsap.fromTo(
        ".home-hero-card",
        { y: 0, scale: 1 },
        {
          y: -32,
          scale: 0.985,
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
        ".project-case-grid",
        { y: 0 },
        {
          y: -28,
          ease: "none",
          scrollTrigger: {
            trigger: "#projects",
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        }
      );

      refreshSnapPoints();
      ScrollTrigger.addEventListener("refreshInit", refreshSnapPoints);

      ScrollTrigger.create({
        trigger: document.documentElement,
        start: 0,
        end: "max",
        snap: {
          snapTo: (progress) => {
            if (!snapPoints.length) {
              return progress;
            }
            return gsap.utils.snap(snapPoints, progress);
          },
          duration: { min: 0.16, max: 0.42 },
          delay: 0.04,
          ease: "power1.inOut"
        }
      });
    });

    ScrollTrigger.refresh();

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.removeEventListener("refreshInit", refreshSnapPoints);
      context.revert();
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      document.documentElement.classList.remove("is-scroll-enhanced");
    };
  }, [enabled]);
}
