import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds, initialSection = "home") {
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
        rootMargin: "-20% 0px -58% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return { activeSection, setActiveSection };
}
