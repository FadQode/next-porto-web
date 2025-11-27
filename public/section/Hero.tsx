import React from "react";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Aesthetic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1f2937] to-[#0b1120]">
        {/* Soft color blobs */}
        <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-[#38bdf8]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-10 h-96 w-96 rounded-full bg-[#22c55e]/25 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eab308]/10 blur-3xl" />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#1f2937 1px, transparent 1px), linear-gradient(90deg, #1f2937 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Faint texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-soft-light"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.4) 1px, transparent 0)",
            backgroundSize: "3px 3px",
          }}
        />
      </div>

      {/* Optional scan-line effect if you already have the CSS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scan-line"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-[#38bdf8]/50 rounded-full backdrop-blur-md mb-6 animate-pulse-glow">
          <Sparkles className="w-4 h-4 text-[#eab308]" />
          <span className="text-xs font-semibold tracking-[0.2em] text-slate-200">
            CRAFTING CALM, FOCUSED EXPERIENCES
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-50 mb-4 tracking-tight leading-tight">
          <span className="block">
            Turning scattered ideas into
          </span>
          <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#38bdf8] via-[#eab308] to-[#22c55e]">
            interfaces that actually feel calm.
          </span>
        </h1>

        {/* Divider */}
        <div className="h-px w-28 bg-gradient-to-r from-transparent via-slate-400/70 to-transparent mx-auto my-6" />

        {/* Subtext */}
        <p className="text-base sm:text-lg text-slate-300/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Thoughtful layouts, readable typography, and small details that make
          every interaction feel intentional—without shouting for attention.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#quests"
            className="group relative px-8 py-3 rounded-full bg-[#eab308] text-slate-900 font-semibold text-sm sm:text-base tracking-wide overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#eab308]/40"
          >
            <span className="relative z-10">Explore the Work</span>
            <div className="absolute inset-0 bg-[#facc15] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>

          <a
            href="#platforms"
            className="group relative px-8 py-3 rounded-full border border-slate-400/60 text-slate-100 font-semibold text-sm sm:text-base tracking-wide overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:text-slate-900"
          >
            <span className="relative z-10">See How It’s Built</span>
            <div className="absolute inset-0 bg-slate-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-11 border border-slate-400/70 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-[#eab308] animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
