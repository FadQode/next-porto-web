'use client';

import React from 'react';
import Image from 'next/image';
import { Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { contactLinks, navItems } from '@/lib/content/site';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2d626a] border-t-4 border-[#428a91] relative overflow-hidden">

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(0deg, transparent 48%, #eabc3a 50%, transparent 52%)',
            backgroundSize: '100% 4px',
            animation: 'scan 8s linear infinite',
          }}
        />
      </div>

      {/* ===== CENTER WRAPPER (INI YANG BARU) ===== */}
      <div className="relative z-10 flex justify-center">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

          {/* GRID TETAP SAMA PERSIS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center md:text-left place-items-center md:place-items-start">

            {/* Column 1 */}
            <div className="pr-10">
              <div className="flex items-center space-x-2 mb-4">
                <Terminal className="w-8 h-8 text-[#eabc3a]" />
                <span className="text-2xl font-bold text-[#f0f1c7]">
                  PORTFOLIO.SYS
                </span>
              </div>
              <p className="text-[#aecdc7] leading-relaxed mb-4">
                Digital portfolio system v1.0.0 
              </p>
              <div className="flex items-center space-x-2 text-sm text-[#6f9c97]">
                <span>STATUS:</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-[#eabc3a] rounded-full animate-pulse"></div>
                  <span className="text-[#eabc3a]">ONLINE</span>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="px-20">
              <h3 className="text-lg font-bold text-[#f0f1c7] mb-4 uppercase tracking-wider">
                Quick Access
              </h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="text-[#aecdc7] hover:text-[#eabc3a] transition-colors duration-300 flex items-center space-x-2 group"
                      >
                        <span className="w-0 h-px bg-[#eabc3a] group-hover:w-4 transition-all duration-300"></span>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="px-30">
              <h3 className="text-lg font-bold text-[#f0f1c7] mb-4 uppercase tracking-wider">
                Connect
              </h3>

              <div className="space-y-3">

                <a
                  href={contactLinks.email}
                  className="flex items-center space-x-3 text-[#aecdc7] hover:text-[#eabc3a] transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-[#428a91]/30 border-2 border-[#6f9c97] flex items-center justify-center group-hover:border-[#eabc3a] transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm">Email</span>
                </a>

                <a
                  href={contactLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-[#aecdc7] hover:text-[#eabc3a] transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-[#428a91]/30 border-2 border-[#6f9c97] flex items-center justify-center group-hover:border-[#eabc3a] transition-colors duration-300">
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="text-sm">GitHub</span>
                </a>

                <a
                  href={contactLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-[#aecdc7] hover:text-[#eabc3a] transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-[#428a91]/30 border-2 border-[#6f9c97] flex items-center justify-center group-hover:border-[#eabc3a] transition-colors duration-300">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="text-sm">LinkedIn</span>
                </a>

                <a
                  href={contactLinks.huggingFace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-[#aecdc7] hover:text-[#eabc3a] transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-[#428a91]/30 border-2 border-[#6f9c97] flex items-center justify-center group-hover:border-[#eabc3a] transition-colors duration-300">
                    <Image
                      src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
                      alt="Hugging Face"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </div>
                  <span className="text-sm">HF Spaces</span>
                </a>

              </div>
            </div>

          </div>

          {/* Bottom */}
          <div className="pt-8 border-t-2 border-[#428a91]">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-[#aecdc7] text-sm">
                <span className="text-[#6f9c97]">© {currentYear}</span> • All systems operational
              </div>
              <div className="flex items-center space-x-2 text-sm text-[#aecdc7]">
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>

    </footer>
  );
};

export default Footer;