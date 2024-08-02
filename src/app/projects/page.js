"use client";
import React, { useState, useEffect } from "react";
import ArtCarousel from "./modules/ArtCarousel";
import { FaCheckCircle, FaHourglassHalf, FaLink } from "react-icons/fa";

const Projects = () => {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      name: "memoia",
      description: (
        <>
          <p className="mb-4">
            A web-based productivity tool built within 3 weeks through MIT
            web.lab (web dev crash course!). Used the MERN stack to create a
            calendar tool synced with assignment due dates and personal notes.
            Made timer and stopwatch with each assignment to track study time
            through weekly summary. Designed pixel art pets using Adobe
            Illustrator.
          </p>
          <p>
            Finished 3rd place out of 400+ students and awarded the
            Render-sponsored Most Responsive UI Design prize.
          </p>
        </>
      ),
      image: "/memoia.png", // Updated path
      link: "https://memoia.onrender.com",
      status: null,
    },
    {
      name: "modeling discrete-time stochastic reaction-diffusion",
      description: (
        <>
          <p>
            Generated Python-based simulations modeling discrete-time stochastic
            reaction-diffusion processes by implementing the Gillespie
            algorithm, combined with a Brownian motion simulation and realistic
            microscopy noise. Blur in fluorescence microscopy is simulated by
            convolution with the microscope’s Point Spread Function using the
            Gibson-Lanni model.
          </p>
        </>
      ),
      image: "/hansen.gif", // Updated path
      link: null,
      status: "In Progress",
    },
    {
      name: "automanim",
      description: (
        <>
          <p className="mb-4">
            Math and physics animation and lesson generator built within 36
            hours at TreeHacks (Stanford Hackathon) using the MERN stack, Manim
            animation engine, and OpenAI API.
          </p>
          <p>
            <strong>Example animation:</strong> Lorentz Force
          </p>
        </>
      ),
      image: "/automanim.mp4", // Updated path
      link: "https://devpost.com/software/automanim",
      status: null,
    },
    {
      name: "dashboard",
      description: (
        <>
          <p>
            Customizable new tab dashboard to track all your favorite web links
            and local files.
          </p>
        </>
      ),
      image: "/dashboard.jpg", // Updated path
      link: null,
      status: "In Progress",
    },
    {
      name: "predicting antibody-antigen binding affinity",
      description: (
        <>
          <p>
            Building a deep learning model using persistent homology and
            topological neural networks to predict antibody-antigen binding
            affinity.
          </p>
        </>
      ),
      image: null,
      link: null,
      status: "In Progress",
    },
    {
      name: "hackMIT",
      description: (
        <>
          <p>
            Designed graphics and frontend for HackMIT landing page. Used
            React.js for frontend and Flask for backend in our all-in-one
            registration, project submission, and judging platform, Plume.
          </p>
        </>
      ),
      image: "/hack.jpg", // Updated path
      link: "https://hackmit.org/",
      status: null,
    },
    {
      name: "Condor software",
      description: (
        <>
          <p>
            Developed a Python script to automate extraction and consolidation
            of stock information from NASDAQ and NYSE exchanges. Used the
            yfinance library to fetch real-time stock data and pandas for data
            manipulation and CSV operations.
          </p>
        </>
      ),
      image: null,
      link: null,
      status: null,
    },
    {
      name: "random art!",
      description: (
        <>
          <p>
            Doodles from the past year. :) Designs selected for the MIT Class of
            2027 Shirt and Hoodie.
          </p>
        </>
      ),
      link: null,
      status: null,
    },
  ];

  const distributeProjects = (projects, numColumns) => {
    const distributed = Array.from({ length: numColumns }, () => []);
    projects.forEach((project, index) => {
      distributed[index % numColumns].push(project);
    });
    return distributed;
  };

  const distributedProjects = distributeProjects(projects, columns);

  return (
    <div className="pt-40 text-lg text-white px-16">
      <div style={{ display: "flex", gap: "1rem" }}>
        {distributedProjects.map((columnProjects, colIndex) => (
          <div
            key={colIndex}
            style={{
              flex: `1 1 ${100 / columns}%`,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {columnProjects.map((project, index) => (
              <div
                key={index}
                className="bg-poople/[1] p-6 pt-12 rounded-xl relative"
              >
                <div className="absolute top-2 right-2 flex items-center space-x-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-xs px-2 py-1 transition-colors"
                    >
                      <FaLink className="text-white" />
                    </a>
                  )}
                  {project.status && (
                    <div className="flex items-center space-x-1 bg-gray-300/[.4] text-white text-xs px-3 py-1 rounded-xl">
                      {project.status === "Completed" ? (
                        <FaCheckCircle className="text-white" />
                      ) : (
                        <FaHourglassHalf className="text-white" />
                      )}
                      <span>{project.status}</span>
                    </div>
                  )}
                </div>
                <div className="text-2xl font-extrabold">{project.name}</div>
                <div className="mb-4 text-sm mt-2">{project.description}</div>
                {project.name === "random art!" ? (
                  <ArtCarousel />
                ) : project.name === "automanim" ? (
                  <video controls className="rounded-lg w-full">
                    <source src={project.image} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  project.image && (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="rounded-lg w-full"
                    />
                  )
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
