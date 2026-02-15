import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds, initialSection = "summary") {
  const [activeSection, setActiveSection] = useState(initialSection);

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;
        const nextId = visible[0].target.id === "qa" ? "projects" : visible[0].target.id;
        setActiveSection(nextId);
      },
      {
        rootMargin: "-32% 0px -52% 0px",
        threshold: [0.25, 0.45, 0.7]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return { activeSection, setActiveSection };
}
