import React from "react";
import { FaGithubAlt, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";

const Links = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-10">
        <div className="relative group">
          <a href="mailto:sophielw@mit.edu">
            <FaEnvelope className="text-2xl text-poople hover:text-poople-dark transform hover:scale-105 transition-transform duration-200" />
          </a>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-poople bg-opacity-75 text-white text-xs rounded-xl py-1 px-2 max-w-xs overflow-hidden whitespace-nowrap">
            sophielw@mit.edu
          </span>
        </div>

        <div className="relative group">
          <a
            href="https://linkedin.com/in/sophielwang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-2xl text-poople hover:text-poople-dark transform hover:scale-105 transition-transform duration-200" />
          </a>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-poople bg-opacity-75 text-white text-xs rounded-xl py-1 px-2 max-w-xs overflow-hidden whitespace-nowrap">
            @sophielwang
          </span>
        </div>

        <div className="relative group">
          <a
            href="https://github.com/sophicle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubAlt className="text-2xl text-poople hover:text-poople-dark transform hover:scale-105 transition-transform duration-200" />
          </a>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-poople bg-opacity-75 text-white text-xs rounded-xl py-1 px-2 max-w-xs overflow-hidden whitespace-nowrap">
            @sophicle
          </span>
        </div>

        <div className="relative group">
          <a
            href="https://curius.app/sophie-wang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBookBookmark className="text-2xl text-poople hover:text-poople-dark transform hover:scale-105 transition-transform duration-200" />
          </a>
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-poople bg-opacity-75 text-white text-xs rounded-xl py-1 px-2 max-w-xs overflow-hidden whitespace-nowrap">
            @sophie-wang
          </span>
        </div>
      </div>
      {/* <div className="text-center text-xs text-poople">
        Feel free to reach out if you want to get in touch! :)
      </div> */}
    </div>
  );
};

export default Links;
