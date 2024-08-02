"use client";
import React, { useRef, useState, useEffect } from "react";
import ScrollSection from "./ScrollSection";
import useIsVisible from "./useIsVisible";
import About from "./About";
import Honors from "./Honors";
import DotNavigation from "./DotNavigation";
import Coursework from "./Coursework";
import "../globals.css";
const ScrollContainer = () => {
  const sections = [
    { title: "about me", content: <About /> },
    { title: "honors", content: <Honors /> },
    { title: "relevant courses", content: <Coursework /> },
  ];

  const refs = sections.map(() => useRef(null));
  const visibilities = refs.map((ref) => useIsVisible(ref));
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const visibleIndex = visibilities.findIndex((isVisible) => isVisible);
    if (visibleIndex !== -1 && visibleIndex !== currentSection) {
      setCurrentSection(visibleIndex);
    }
  }, [visibilities, currentSection]);

  const handleDotClick = (index) => {
    refs[index].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative h-full flex items-center">
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        <DotNavigation
          sections={sections}
          currentSection={currentSection}
          onDotClick={handleDotClick}
        />
      </div>
      <div className="h-full snap-y snap-mandatory overflow-y-scroll scrollbar-hide">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={refs[index]}
            className="snap-start h-full flex items-center justify-center"
          >
            <ScrollSection title={section.title} content={section.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollContainer;
