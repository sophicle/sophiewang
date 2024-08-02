"use client";
import React from "react";
import Link from "next/link"; // Use Next.js Link
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import "../globals.css";

const NavBar = () => {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="absolute h-40 w-full flex items-center justify-between px-16 pt-8">
      <div className="flex items-center space-x-8">
        <Link
          href="/"
          className="text-5xl md:text-7xl font-orange-variable text-poople hover:text-poople-dark transform hover:scale-105 transition-transform duration-200"
        >
          sophie wang
          <span className="text-gray-300 text-[2.75rem] pl-[0.2rem]">.</span>
        </Link>
        <button
          onClick={toggleDarkMode}
          className="text-lg ml-4 font-orange-variable text-poople hover:text-poople-dark transform hover:scale-105 transition-transform duration-200"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      <div className="flex items-center space-x-12">
        <Link
          href="/projects"
          className="text-2xl font-orange-variable text-poople hover:text-poople-dark transform hover:scale-105 transition-transform duration-200"
        >
          projects
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
