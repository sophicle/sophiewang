import React from "react";
import "../globals.css";
const ScrollSection = ({ title, content }) => {
  return (
    <div
      className={`h-3/4 min-h-80  w-3/4 md:w-full flex flex-col items-center justify-center`}
    >
      <div className={`h-3/4 w-3/4 rounded-xl p-8 bg-poople min-w-80`}>
        {title === "relevant courses" ? (
          <div className="flex justify-between items-center">
            <div className="text-2xl font-extrabold">{title}</div>

            <div className="text-right text-sm ml-4">5.0/5.0</div>
          </div>
        ) : (
          <div className="text-2xl font-extrabold">{title}</div>
        )}
        {content}
      </div>
    </div>
  );
};

export default ScrollSection;
