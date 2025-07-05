'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Fullstack Developer';
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const typeText = () => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
        setTimeout(typeText, 150);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          index = 0;
          setDisplayText('');
          setIsTyping(true);
          typeText();
        }, 3000);
      }
    };
    typeText();
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20minimalist%20workspace%20setup%20with%20clean%20desk%2C%20laptop%2C%20code%20editor%20on%20screen%2C%20soft%20lighting%2C%20plants%20in%20background%2C%20professional%20developer%20environment%2C%20clean%20aesthetic%2C%20light%20green%20and%20blue%20tones&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Halo, Saya <span className="text-green-400">Alex</span>
            </h1>
            <div className="text-2xl md:text-4xl font-semibold text-blue-300 min-h-[50px] flex items-center justify-center">
              {displayText}
              {isTyping && <span className="animate-pulse ml-1">|</span>}
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Saya mengembangkan aplikasi web modern dengan fokus pada pengalaman pengguna yang luar biasa dan performa yang optimal
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              Lihat Proyek Saya
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Hubungi Saya
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-6 flex items-center justify-center cursor-pointer" onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}>
          <i className="ri-arrow-down-line text-2xl text-white"></i>
        </div>
      </div>
    </section>
  );
}