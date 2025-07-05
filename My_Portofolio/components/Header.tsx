
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-white/10 backdrop-blur-md border-b border-white/20'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-green-600' : 'text-white'
          }`}>
            Portfolio
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                isScrolled 
                  ? 'text-gray-700 hover:text-green-600' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className={`transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                isScrolled 
                  ? 'text-gray-700 hover:text-green-600' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Pendidikan
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                isScrolled 
                  ? 'text-gray-700 hover:text-green-600' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Keahlian
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                isScrolled 
                  ? 'text-gray-700 hover:text-green-600' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Proyek
            </button>
            <button 
              onClick={() => scrollToSection('certificates')}
              className={`transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                isScrolled 
                  ? 'text-gray-700 hover:text-green-600' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Sertifikat
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                isScrolled 
                  ? 'text-gray-700 hover:text-green-600' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Kontak
            </button>
          </nav>

          <button 
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className={`ri-menu-line text-xl transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}></i>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-white/20">
            <nav className="flex flex-col space-y-4 px-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer text-left whitespace-nowrap"
              >
                Beranda
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer text-left whitespace-nowrap"
              >
                Pendidikan
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer text-left whitespace-nowrap"
              >
                Keahlian
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer text-left whitespace-nowrap"
              >
                Proyek
              </button>
              <button 
                onClick={() => scrollToSection('certificates')}
                className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer text-left whitespace-nowrap"
              >
                Sertifikat
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer text-left whitespace-nowrap"
              >
                Kontak
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
