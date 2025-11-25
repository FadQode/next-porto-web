import React from 'react';
import { MapPin, Mail, Shield } from 'lucide-react';
// import { portfolioConfig } from '../data/portfolio-config';

const HeroSection = () => {
  const { personal } = {
    personal: {
        name: "Fadhil Erdya Qashmal",
    }
      };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2d626a] via-[#428a91] to-[#2d626a]">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1760813360432-9b5d79eb9679?w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}></div>
        {/* Grid overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#428a91 1px, transparent 1px), linear-gradient(90deg, #428a91 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.1
        }}></div>
      </div>

      {/* Scan lines effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scan-line"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#428a91]/30 border-2 border-[#eabc3a] backdrop-blur-sm mb-6 animate-pulse-glow">
          <div className="w-2 h-2 bg-[#eabc3a] rounded-full animate-ping"></div>
          <span className="text-[#eabc3a] text-sm font-bold tracking-wider">SYSTEM ONLINE</span>
        </div>

        {/* Avatar */}
        <div className="relative inline-block mb-8">
          <div className="w-32 h-32 mx-auto relative">
            <div className="absolute inset-0 border-4 border-[#eabc3a] rotate-45 animate-spin-slow"></div>
            <img
              src={personal.avatar}
              alt={personal.name}
              className="w-full h-full rounded-full border-4 border-[#6f9c97] object-cover relative z-10"
            />
          </div>
          {/* Rank badge */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#c09317] border-2 border-[#eabc3a] px-3 py-1 flex items-center space-x-1">
            <Shield className="w-4 h-4 text-[#2d626a]" />
            <span className="text-[#2d626a] text-xs font-bold">{personal.rank}</span>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-[#f0f1c7] mb-4 tracking-tight">
          <span className="inline-block animate-glitch">{personal.name}</span>
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#eabc3a] to-transparent mx-auto mb-6"></div>
        <h2 className="text-2xl md:text-3xl font-medium text-[#aecdc7] mb-4">{personal.title}</h2>
        <p className="text-lg text-[#6f9c97] max-w-2xl mx-auto mb-8 leading-relaxed">
          {personal.tagline}
        </p>

        {/* Info badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center space-x-2 px-4 py-2 bg-[#2d626a]/50 border border-[#428a91] backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-[#eabc3a]" />
            <span className="text-[#aecdc7] text-sm">{personal.location}</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-[#2d626a]/50 border border-[#428a91] backdrop-blur-sm">
            <Mail className="w-4 h-4 text-[#eabc3a]" />
            <span className="text-[#aecdc7] text-sm">{personal.email}</span>
          </div>
        </div>

        {/* Bio */}
        <p className="text-[#aecdc7] max-w-3xl mx-auto leading-relaxed mb-12">
          {personal.bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#quests"
            className="group relative px-8 py-3 bg-[#eabc3a] text-[#2d626a] font-bold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#eabc3a]/50 hover:-translate-y-1"
          >
            <span className="relative z-10">VIEW QUESTS</span>
            <div className="absolute inset-0 bg-[#c09317] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
          <a
            href="#platforms"
            className="group relative px-8 py-3 border-2 border-[#aecdc7] text-[#aecdc7] font-bold overflow-hidden transition-all duration-300 hover:text-[#2d626a] hover:-translate-y-1"
          >
            <span className="relative z-10">CONNECT</span>
            <div className="absolute inset-0 bg-[#aecdc7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#aecdc7] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#eabc3a] rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
