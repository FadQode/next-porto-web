import Image from "next/image";
import clsx from "clsx";
import {profileConfig} from "@/public/section-reference/profile-config";
import { ReactNode } from "react";


type CardProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};


const SystemCard = ({ title, children, className = "" }: CardProps) => {
  return (
    <div
      className={`
        relative group
        bg-[#2d626a]/60
        border border-[#6f9c97]/40
        p-6
        transition-all duration-200
        hover:border-[#eabc3a]
        ${className}
      `}
    >
      {/* === CORNER FRAME (hover only) === */}
      <div className="pointer-events-none absolute inset-0">
        {/* TL */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#eabc3a] opacity-0 group-hover:opacity-100" />
        {/* TR */}
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#eabc3a] opacity-0 group-hover:opacity-100" />
        {/* BL */}
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#eabc3a] opacity-0 group-hover:opacity-100" />
        {/* BR */}
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#eabc3a] opacity-0 group-hover:opacity-100" />
      </div>

      {/* TITLE */}
      <div
        className="
          mb-3 text-lg font-semibold
          text-[#f0f1c7]
          group-hover:text-[#eabc3a]
          transition-colors
        "
      >
        {title}
      </div>

      {/* CONTENT */}
      {children}
    </div>
  );
};

export default function ProfileSummary() {
  const { profile, techStack, teaching, ability, activity } = profileConfig;

  return (
    <section className="relative py-24 overflow-hidden">
      {/* HERO-CONTINUATION BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1f3f44] via-[#2d626a] to-[#2d626a]" />

      {/* subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #f0f1c7 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-5 py-2 border border-[#eabc3a]/70 text-[#eabc3a] text-xs tracking-[0.25em] font-semibold">
            SYSTEM PROFILE
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-[#f0f1c7] mb-4">
            Operational Overview
          </h2>

          <p className="max-w-xl mx-auto text-[#aecdc7] leading-relaxed">
            Identity, tools, and signals — rendered as a continuous system.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Identity */}
          <SystemCard title="IDENTITY">
            <Image
              src={profile.image}
              alt={profile.name}
              width={400}
              height={400}
              className="mb-4 border border-[#6f9c97]/50 object-cover"
            />

            <div className="text-lg font-semibold text-[#f0f1c7]">
              {profile.name}
            </div>

            <div className="text-sm text-[#aecdc7] mb-2">
              {profile.subtitle}
            </div>

            <p className="text-sm text-[#aecdc7] leading-relaxed">
              {profile.description}
            </p>
          </SystemCard>

          {/* Tech Stack */}
          <SystemCard title={techStack.title}>
            <p className="text-sm text-[#aecdc7] mb-4 leading-relaxed">
              {techStack.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {techStack.stacks.map((stack) => (
                <span
                  key={stack}
                  className="
                    px-3 py-1
                    text-xs
                    border border-[#6f9c97]/50
                    bg-[#428a91]/25
                    text-[#aecdc7]
                  "
                >
                  {stack}
                </span>
              ))}
            </div>
          </SystemCard>

          {/* Teaching */}
          <SystemCard title={teaching.title}>
            <div className="text-[#f0f1c7] font-medium mb-1">
              {teaching.subtitle}
            </div>
            <div className="text-sm text-[#aecdc7]">
              {teaching.place}
            </div>
          </SystemCard>

          {/* Ability */}
          <SystemCard title={ability.title}>
            <p className="text-sm text-[#aecdc7] leading-relaxed">
              {ability.description}
            </p>
          </SystemCard>

          {/* Activity */}
          <SystemCard title={activity.title} className="md:col-span-2">
            <p className="text-sm text-[#aecdc7] mb-5 leading-relaxed">
              {activity.description}
            </p>

            <div className="h-28 bg-[#428a91]/20 border border-[#6f9c97]/40" />
          </SystemCard>
        </div>
      </div>
    </section>
  );
}