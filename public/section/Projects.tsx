"use client";

import React, { useState } from 'react';
import { Github, ExternalLink, Star, GitFork, GitCommit, Calendar, Check, Clock } from 'lucide-react';
import {projectConfig} from "@/public/section-reference/projects-config";



const ProjectSection = () => {
  const { projects } = projectConfig;
  const [filter, setFilter] = useState<"all" | "completed" | "in-progress">(
    "all"
  );

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.status === filter);

  return (
    <section id="quests" className="relative py-28 overflow-hidden">
      {/* === SAME CANVAS AS HERO / PROFILE === */}
      <div className="absolute inset-0 bg-[#0b1120]" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0v100M0 50h100' stroke='%23f0f1c7' stroke-width='1' fill='none'/%3E%3Ccircle cx='50' cy='50' r='10' stroke='%23f0f1c7' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* ===== HEADER ===== */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-5 py-2 border border-[#eabc3a]/70 text-[#eabc3a] text-xs tracking-[0.25em] font-semibold">
            MISSION LOG
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-[#f0f1c7] mb-4">
            Quest Archive
          </h2>

          <p className="max-w-2xl mx-auto text-[#aecdc7] leading-relaxed mb-10">
            Completed missions and ongoing operations across the digital
            frontier.
          </p>

          {/* ===== FILTER ===== */}
          <div className="flex flex-wrap justify-center gap-3">
            {["all", "completed", "in-progress"].map((type) => (
              <button
                key={type}
                onClick={() =>
                  setFilter(type as "all" | "completed" | "in-progress")
                }
                className={`
                  px-6 py-2 border text-xs font-bold uppercase tracking-widest transition
                  ${
                    filter === type
                      ? "border-[#eabc3a] text-[#2d626a] bg-[#eabc3a]"
                      : "border-[#6f9c97]/50 text-[#aecdc7] hover:border-[#eabc3a]"
                  }
                `}
              >
                {type.replace("-", " ")}
              </button>
            ))}
          </div>
        </div>

        {/* ===== PROJECT GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="
                relative group
                bg-[#2d626a]/55
                border border-[#6f9c97]/40
                backdrop-blur-sm
                transition-all duration-200
                hover:border-[#eabc3a]
              "
            >
              {/* Hover gradient */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(234,188,58,0.18) 0%, rgba(234,188,58,0.05) 45%, transparent 75%)",
                }}
              />

              {/* Corner frame */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#eabc3a] opacity-0 group-hover:opacity-100" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#eabc3a] opacity-0 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#eabc3a] opacity-0 group-hover:opacity-100" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#eabc3a] opacity-0 group-hover:opacity-100" />
              </div>

              {/* IMAGE */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] to-transparent" />

                {/* STATUS */}
                <div
                  className={`
                    absolute top-4 right-4 flex items-center gap-2 px-3 py-1 border text-xs font-bold uppercase
                    ${
                      project.status === "completed"
                        ? "border-[#6f9c97] text-[#f0f1c7] bg-[#2d626a]/70"
                        : "border-[#eabc3a] text-[#2d626a] bg-[#eabc3a]/80"
                    }
                  `}
                >
                  {project.status === "completed" ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Clock className="w-4 h-4" />
                  )}
                  {project.status}
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative z-10 p-6">
                <h3 className="text-2xl font-bold text-[#f0f1c7] mb-3 group-hover:text-[#eabc3a] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[#aecdc7] mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#428a91]/25 border border-[#6f9c97] text-xs text-[#aecdc7] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* FOOTER */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-[#aecdc7]">
                    <Calendar className="w-4 h-4" />
                    {project.completionDate}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center justify-center gap-2 px-4 py-2
                        border border-[#6f9c97] text-[#aecdc7]
                        transition hover:border-[#eabc3a] hover:text-[#eabc3a]
                      "
                    >
                      <Github className="w-4 h-4" />
                      Repo
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex items-center justify-center px-4 py-2
                          border border-[#eabc3a] bg-[#eabc3a]
                          text-[#2d626a] transition hover:bg-[#c09317]
                        "
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-[#6f9c97]">
            No quests found for this filter.
          </div>
        )}
      </div>
    </section>
  );
};

export default  ProjectSection;