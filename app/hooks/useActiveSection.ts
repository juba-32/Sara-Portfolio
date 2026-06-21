"use client";

import { useEffect, useState } from "react";

export const useActiveSection = (
  sections: string[]
) => {
  const [activeSection, setActiveSection] =
    useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const element =
        document.getElementById(id);

      if (!element) return;

      const observer =
        new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          {
            threshold: 0.4,
          }
        );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) =>
        observer.disconnect()
      );
    };
  }, [sections]);

  return activeSection;
};