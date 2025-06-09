// Validated

import { useEffect, useState } from 'react';

export const useActiveSection = (sections: string[]) => {
  const [activeSection, setActiveSection] = useState(sections[0] ?? '');

  useEffect(() => {
    const intersectingElements = new Map<string, number>();

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const sectionId = entry.target.id;

          // If the element is intersecting, add it to the Map with the intersection ratio
          if (entry.isIntersecting) {
            // Add the section ID and intersection ratio to the Map
            intersectingElements.set(sectionId, entry.intersectionRatio);
          } else {
            // If the element is not intersecting, remove it from the Map
            intersectingElements.delete(sectionId);
          }
        });

        // If there are intersecting elements, find the section with the highest intersection ratio
        if (intersectingElements.size > 0) {
          // Find the section with the highest intersection ratio by comparing
          // each entry's ratio (stored in the Map) and keeping the highest one
          const mostVisibleSection = Array.from(
            intersectingElements.entries(),
          ).reduce((prev, current) =>
            current[1] > prev[1] ? current : prev,
          )[0];

          // Set the active section to the section with the highest intersection ratio
          setActiveSection(mostVisibleSection);
        }
      },
      {
        threshold: [0, 0.1, 0.3, 0.5, 0.7, 1],
        rootMargin: '-80px 0px -20% 0px',
      },
    );

    sections.forEach(id => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  return activeSection;
};
