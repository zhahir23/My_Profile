'use client';

import { useState, useEffect } from 'react';

export default function SkillsSection() {
  const [visibleBars, setVisibleBars] = useState<boolean[]>([]);

  const skills = [
    { name: 'HTML', level: 95, icon: 'ri-html5-line', color: 'bg-orange-500' },
    { name: 'CSS', level: 90, icon: 'ri-css3-line', color: 'bg-blue-500' },
    { name: 'JavaScript', level: 88, icon: 'ri-javascript-line', color: 'bg-yellow-500' },
    { name: 'Vue.js', level: 85, icon: 'ri-vuejs-line', color: 'bg-green-500' },
    { name: 'React', level: 82, icon: 'ri-reactjs-line', color: 'bg-cyan-500' },
    { name: 'Tailwind CSS', level: 90, icon: 'ri-palette-line', color: 'bg-teal-500' },
    { name: 'Node.js', level: 80, icon: 'ri-nodejs-line', color: 'bg-green-600' },
    { name: 'Express.js', level: 78, icon: 'ri-server-line', color: 'bg-gray-600' },
    { name: 'MongoDB', level: 75, icon: 'ri-database-2-line', color: 'bg-green-700' },
    { name: 'Git', level: 85, icon: 'ri-git-branch-line', color: 'bg-red-500' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleBars(new Array(skills.length).fill(true));
            }, 300);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillsElement = document.getElementById('skills');
    if (skillsElement) {
      observer.observe(skillsElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Keahlian</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Teknologi dan tools yang saya kuasai untuk mengembangkan aplikasi web modern
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-blue-500 mr-4">
                    <i className={`${skill.icon} text-2xl text-white`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                    <p className="text-sm text-gray-600">{skill.level}% Proficient</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: visibleBars[index] ? `${skill.level}%` : '0%' 
                      }}
                    ></div>
                  </div>
                  <div className="absolute right-0 top-4 text-sm font-semibold text-gray-700">
                    {skill.level}%
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tools & Environment</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <i className="ri-code-s-slash-line text-3xl text-green-600"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700">VS Code</span>
                </div>
                <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <i className="ri-github-fill text-3xl text-gray-800"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700">GitHub</span>
                </div>
                <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <i className="ri-terminal-line text-3xl text-blue-600"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Terminal</span>
                </div>
                <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <i className="ri-layout-line text-3xl text-purple-600"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Figma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}