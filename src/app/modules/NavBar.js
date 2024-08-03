"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import "../globals.css";

const NavBar = () => {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.metaKey && event.key === "k") {
        event.preventDefault();
        toggleDarkMode();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [theme]);

  return (
    <nav className="absolute h-40 w-full flex items-center justify-between px-16 pt-8">
      <div className="flex items-center space-x-4 lg:space-x-12">
        <Link
          href="/"
          className="text-3xl sm:text-5xl md:text-7xl font-orange-variable text-poople hover:text-poople-dark transform hover:scale-105 transition-transform duration-200 whitespace-nowrap"
        >
          sophie wang
          <span className="text-gray-300 text-[2.75rem] pl-[0.2rem]">.</span>
        </Link>
        <div className="relative group">
          <button
            onClick={toggleDarkMode}
            className="text-lg  font-orange-variable text-poople hover:text-poople-dark transform hover:scale-105 transition-transform duration-200"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <div className="text-poople bg-poople/10 px-2 py-0.5 rounded-xl absolute top-full left-1/2 transform -translate-x-1/2 mt-1 hidden group-hover:block text-xs whitespace-nowrap">
            Cmd + K
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-12">
        <Link
          href="/projects"
          className="text-lg sm:text-xl md:text-2xl font-orange-variable text-poople hover:text-poople-dark transform hover:scale-105 transition-transform duration-200"
        >
          projects
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
