import React from "react";

const DotNavigation = ({ sections, currentSection, onDotClick }) => {
  return (
    <div className="space-x-2">
      {sections.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-3 h-3 rounded-full ${
            currentSection === index ? "bg-poople" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default DotNavigation;
