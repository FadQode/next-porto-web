"use client";

import React, { useState } from "react";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import Image, { StaticImageData } from 'next/image'

import bangkit from "../asset/bangkit.png";
import MuslimPergi from "../asset/MulimPergi.jpeg";
import gemastik from "../asset/Gemastik.jpeg";
import aslab from "../asset/Aslab.jpeg";
import { image } from "motion/react-client";


const educationData = [
  {
    id: 1,
    title: "Muhammadiyah University of Surakarta",
    subtitle: "Informatics Engineering",
    period: "2022 – Present",
    image: "",
    description:
      "Learning Basics and experimenting, Doing Projects, Gaining Experience, Connecting with fellow developers",
  },
  {
    id: 2,
    title: "Bangkit Academy",
    subtitle: "Machine Learning Cohort",
    period: "2024",
    image: bangkit,
    description:
      "Intensive industry-led program covering ML engineering, teamwork, and product thinking.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Computer Laboratory Assistant",
    subtitle: "Faculty of Communication & Informatics",
    period: "February  2024 – January 2026",
    image: aslab,
    description:
      "Maintained lab systems, assisted practicum sessions, and supported students technically.",
  },
  {
    id: 2,
    title: "Muslim Pergi(PT. Muslimina Indo Persada) - Full Stack Web Developer Intern",
    subtitle: "Independent & Academic Projects",
    period: "May 2025 – June 2025",
    image: MuslimPergi,
    description:
      "Using Vue to develop Umroh Travel Landing page and Laravel to develop School Management System, collaborating with cross-functional teams, and delivering a functional web application.",
  },
  {
    id: 3,
    title: "Finalist of GEMASTIK XVII 2025 - Data Mining Competition",
    subtitle: "Competition",
    period: "October 2025",
    image: gemastik,
    description:
      "Built and experimented with various cases for various models, including Computer Vision, Tabular Data, Video, even LLM",
  },
];


type CardProps = {
  title: string;
  subtitle: string;
  period: string;
  image ?: StaticImageData | string;
  description: string;
};

const SystemTimelineCard = ({
  title,
  subtitle,
  period,
  description,
  image,
}: CardProps) => {
  return (
    <div
      className="
        relative group
        bg-[#2d626a]/50
        border border-[#6f9c97]/40
        p-6
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

      {/* CONTENT GRID */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-6 items-start">
        {/* TEXT */}
        <div>
          <h3 className="text-lg font-semibold text-[#f0f1c7] group-hover:text-[#eabc3a] transition-colors">
            {title}
          </h3>

          <p className="text-sm text-[#aecdc7] mb-1">{subtitle}</p>

          <div className="text-xs text-[#6f9c97] mb-3">{period}</div>

          <p className="text-sm text-[#aecdc7] leading-relaxed">
            {description}
          </p>
        </div>

        {/* IMAGE (RIGHT SIDE) */}
        {/* IMAGE (RIGHT SIDE) */}
      {image && (
          <div className="relative w-full h-48 md:h-auto md:min-h-[180px] border border-[#6f9c97]/40 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
      )}    </div>
    </div>
  );
};


  const EducationSection = () => {
    const [activeTab, setActiveTab] = useState<"education" | "experience">(
      "education"
    );

    const data = activeTab === "education" ? educationData : experienceData;
    const Icon = activeTab === "education" ? GraduationCap : Briefcase;

    return (
  <section
    id = "education"
    className="
    relative py-24
    before:absolute before:inset-0
    before:bg-teal-900/20
    before:content-['']
    before:pointer-events-none
  ">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 border border-[#eabc3a]/70 text-[#eabc3a] text-xs tracking-widest font-bold">
            BACKGROUND LOG
          </div>

          <h2 className="text-4xl font-bold text-[#f0f1c7] mb-3">
            Education & Experience
          </h2>

          <p className="text-[#aecdc7] max-w-xl mx-auto">
            A chronological record of learning and real-world application.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-16">
          {[
            { key: "education", label: "Education" },
            { key: "experience", label: "Experience" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() =>
                setActiveTab(tab.key as "education" | "experience")
              }
              className={`
                px-6 py-2 border-2 text-sm font-bold uppercase tracking-wider transition
                ${
                  activeTab === tab.key
                    ? "bg-[#eabc3a] text-[#2d626a] border-[#eabc3a]"
                    : "text-[#aecdc7] border-[#6f9c97]/50 hover:border-[#eabc3a]"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-[#6f9c97]/40" />

          <div className="space-y-10 pl-16">
            {data.map((item) => (
              <div key={item.id} className="relative">
                {/* Node */}
                <div className="absolute -left-[38px] top-2 w-10 h-10 flex items-center justify-center border border-[#6f9c97] bg-[#2d626a]">
                  <Icon className="w-5 h-5 text-[#eabc3a]" />
                </div>

                <SystemTimelineCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
