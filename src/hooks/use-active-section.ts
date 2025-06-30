"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

export function useActiveSection(sectionIds: string[], options?: IntersectionObserverInit) {
  const [activeSection, setActiveSection] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    const y = window.scrollY;
    const intersectingEntries = entries.filter(e => e.isIntersecting);

    if (intersectingEntries.length > 0) {
      // If multiple are intersecting, find the one closest to the top of the viewport
      const bestEntry = intersectingEntries.reduce((prev, current) => {
        const prevTop = document.getElementById(prev.target.id)?.offsetTop ?? 0;
        const currentTop = document.getElementById(current.target.id)?.offsetTop ?? 0;
        return (Math.abs(currentTop - y) < Math.abs(prevTop - y)) ? current : prev;
      });
      setActiveSection(bestEntry.target.id);
    }
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(observerCallback, options || {
      rootMargin: `0% 0px -80% 0px`,
      threshold: 0,
    });

    const currentObserver = observer.current;

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        currentObserver.observe(el);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          currentObserver.unobserve(el);
        }
      });
    };
  }, [sectionIds, options, observerCallback]);

  return activeSection;
}
