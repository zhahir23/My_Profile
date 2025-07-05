'use client';

import { useState } from 'react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce lengkap dengan sistem pembayaran, manajemen produk, dan dashboard admin yang komprehensif.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20showing%20product%20grid%2C%20shopping%20cart%2C%20clean%20design%20with%20green%20accents%2C%20professional%20layout%2C%20desktop%20and%20mobile%20views&width=600&height=400&seq=project1&orientation=landscape',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express'],
      features: ['Authentication', 'Payment Gateway', 'Real-time Chat', 'Admin Dashboard'],
      status: 'Completed',
      year: '2023'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas dengan fitur kolaborasi tim, timeline tracking, dan notifikasi real-time.',
      image: 'https://readdy.ai/api/search-image?query=Task%20management%20application%20interface%20with%20kanban%20board%2C%20colorful%20task%20cards%2C%20clean%20dashboard%20design%2C%20productivity%20app%20layout%2C%20modern%20UI&width=600&height=400&seq=project2&orientation=landscape',
      technologies: ['React', 'Tailwind CSS', 'Firebase', 'PWA'],
      features: ['Drag & Drop', 'Team Collaboration', 'Push Notifications', 'Offline Mode'],
      status: 'In Progress',
      year: '2024'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard cuaca interaktif dengan prediksi 7 hari, peta interaktif, dan visualisasi data yang menarik.',
      image: 'https://readdy.ai/api/search-image?query=Weather%20dashboard%20application%20showing%20temperature%20charts%2C%20weather%20maps%2C%20forecast%20cards%2C%20modern%20interface%20design%2C%20data%20visualization%20with%20blue%20and%20green%20themes&width=600&height=400&seq=project3&orientation=landscape',
      technologies: ['JavaScript', 'Chart.js', 'Weather API', 'CSS3'],
      features: ['Real-time Data', 'Interactive Maps', 'Weather Alerts', 'Mobile Responsive'],
      status: 'Completed',
      year: '2023'
    },
    {
      id: 4,
      title: 'Learning Management System',
      description: 'Platform pembelajaran online dengan video streaming, quiz interaktif, dan tracking progress siswa.',
      image: 'https://readdy.ai/api/search-image?query=Online%20learning%20platform%20interface%20with%20course%20cards%2C%20video%20player%2C%20student%20dashboard%2C%20educational%20technology%20design%2C%20clean%20academic%20layout&width=600&height=400&seq=project4&orientation=landscape',
      technologies: ['Vue.js', 'Nuxt.js', 'MySQL', 'Video.js'],
      features: ['Video Streaming', 'Interactive Quizzes', 'Progress Tracking', 'Certificates'],
      status: 'Completed',
      year: '2022'
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'Tool analitik media sosial untuk tracking engagement, growth metrics, dan competitor analysis.',
      image: 'https://readdy.ai/api/search-image?query=Social%20media%20analytics%20dashboard%20showing%20graphs%2C%20charts%2C%20engagement%20metrics%2C%20data%20visualization%2C%20modern%20analytics%20interface%20with%20colorful%20elements&width=600&height=400&seq=project5&orientation=landscape',
      technologies: ['React', 'D3.js', 'Node.js', 'Social APIs'],
      features: ['Data Visualization', 'Report Generation', 'API Integration', 'Real-time Updates'],
      status: 'In Progress',
      year: '2024'
    },
    {
      id: 6,
      title: 'Restaurant Booking System',
      description: 'Sistem reservasi restoran dengan manajemen meja, menu digital, dan integrasi sistem pembayaran.',
      image: 'https://readdy.ai/api/search-image?query=Restaurant%20booking%20system%20interface%20showing%20table%20reservations%2C%20menu%20display%2C%20booking%20calendar%2C%20elegant%20restaurant%20app%20design%2C%20warm%20color%20scheme&width=600&height=400&seq=project6&orientation=landscape',
      technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Stripe'],
      features: ['Table Management', 'Online Booking', 'Menu Display', 'Payment Processing'],
      status: 'Completed',
      year: '2023'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Proyek Portfolio</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berikut adalah beberapa proyek yang telah saya kerjakan dengan berbagai teknologi modern
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Teknologi:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Fitur Utama:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span 
                        key={feature}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {selectedProject === project.id ? 'Tutup Detail' : 'Lihat Detail'}
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors cursor-pointer">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-external-link-line"></i>
                    </div>
                  </button>
                </div>

                {selectedProject === project.id && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Detail Proyek:</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Proyek ini dikembangkan menggunakan teknologi modern dengan fokus pada 
                      performa, keamanan, dan user experience yang optimal.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Status:</span> {project.status}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Tahun:</span> {project.year}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
