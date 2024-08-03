"use client";
import React, { useState, useEffect } from "react";
const courses = [
  { number: "6.390", title: "Fundamentals of Programming" },
  { number: "6.121", title: "Intro to Algorithms" },
  { number: "6.190", title: "Intro to Low-Level Programming in C & Assembly" },
  { number: "6.390", title: "Intro to Machine Learning" },
  { number: "18.03", title: "Differential Equations" },
  { number: "18.06", title: "Linear Algebra" },
  { number: "18.100B", title: "Real Analysis" },
  { number: "18.600", title: "Probabiliy & Random Variables" },
  { number: "18.C20", title: "Intro to Computational Science & Engineering" },
  { number: "8.01", title: "Physics I" },
  { number: "8.02", title: "Physics II" },
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
