"use client";
import React from "react";
const courses = [
  { number: "6.191", title: "Computation Structures" },
  { number: "18.650", title: "Fundamentals of Statistics" },
  { number: "18.901", title: "Intro to Topology" },
  { number: "14.12", title: "Economic Applications of Game Theory" },
  { number: "9.58", title: "Projects in the Science of Intelligence" },
  { number: "24.900", title: "Intro to Linguistics" },
];

const Coursework = () => {
  return (
    <div className="pt-4 text-sm md:text-md text-white">
      {courses.map((course, index) => (
        <div key={index} className="mb-0.5  lg:mb-1">
          <strong className="font-bold">{course.number}</strong> {course.title}
        </div>
      ))}
    </div>
  );
};

export default Coursework;
