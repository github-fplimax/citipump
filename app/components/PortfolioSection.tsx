"use client";

import { CaretDoubleDown, X } from "@phosphor-icons/react";
import React, { useState } from "react";
import { projects } from "../index";

const Portfolio: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="portfolio"
      className=" bg-gray-100 py-5"
      style={{ scrollMargin: "100px" }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-6 justify-between flex flex-col md:flex-row items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-red-500 font-semibold text-sm uppercase">
              Selected Projects
            </p>
            <h2 className="text-3xl font-bold">Our Portfolio</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="relative shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="inline-block text-white bg-red-500 rounded-lg font-semibold px-4 max-w-max">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center px-2">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 text-red-500 hover:text-black transition-all"
          >
            {showAll ? (
              <X size={40} weight="thin" />
            ) : (
              <CaretDoubleDown
                size={40}
                weight="thin"
                className="animate-bounce"
              />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
