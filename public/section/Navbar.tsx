'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Phone, Linkedin, Github } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HERO', href: '#hero' },
    { label: 'PROFILE', href: '#profile' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'QUESTS', href: '#quests' },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#2d626a]/95 backdrop-blur-md shadow-lg border-b-2 border-[#428a91]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-2 group">
            <div className="relative">
              <Terminal className="w-8 h-8 text-[#eabc3a] transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#eabc3a] blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold text-[#f0f1c7] tracking-wider">
              PORTFOLIO.SYS
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="relative px-4 py-2 text-sm font-medium text-[#aecdc7] hover:text-[#eabc3a] transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}

            {/* Divider */}
            <div className="h-6 w-px bg-[#428a91] mx-3" />

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://wa.me/+6281358301954"
                className="text-[#aecdc7] hover:text-[#eabc3a] hover:scale-110 transition-all duration-300"
                target="_blank"
              >
                <Phone size={18} />
              </a>

              <a
                href="https://linkedin.com/in/fadhil-erdya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#aecdc7] hover:text-[#eabc3a] hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://github.com/fadqode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#aecdc7] hover:text-[#eabc3a] hover:scale-110 transition-all duration-300"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#aecdc7] hover:text-[#eabc3a] transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2d626a]/98 backdrop-blur-md border-t-2 border-[#428a91]">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-4 py-3 text-sm font-medium text-[#aecdc7] hover:text-[#eabc3a] hover:bg-[#428a91]/20 transition-all duration-300 border-l-4 border-transparent hover:border-[#eabc3a]"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Social Icons */}
            <div className="flex justify-center space-x-6 pt-4 border-t border-[#428a91]">
              <a
                href="https://wa.me/+6281358301954"
                className="text-[#aecdc7] hover:text-[#eabc3a] hover:scale-110 transition-all duration-300"
              >
                <Phone size={20} />
              </a>

              <a
                href="https://linkedin.com/in/fadhil-erdya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#aecdc7] hover:text-[#eabc3a] hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://github.com/fadqode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#aecdc7] hover:text-[#eabc3a] hover:scale-110 transition-all duration-300"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;