'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

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
    { label: 'STATUS', href: '#hero' },
    { label: 'PLATFORMS', href: '#platforms' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'QUESTS', href: '#quests' },
    { label: 'ACHIEVEMENTS', href: '#achievements' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
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
            <span className="text-xl font-bold text-[#f0f1c7] tracking-wider">PORTFOLIO.SYS</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="relative px-4 py-2 text-sm font-medium text-[#aecdc7] hover:text-[#eabc3a] transition-colors duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-[#428a91]/20 scale-0 group-hover:scale-100 transition-transform duration-300 clip-hexagon"></div>
              </a>
            ))}
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
