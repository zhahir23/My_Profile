
'use client';

export default function CertificatesSection() {
  const certificates = [
    {
      id: 1,
      name: 'AWS Certified Developer Associate',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: 'ri-cloud-line',
      color: 'from-orange-500 to-yellow-500',
      description: 'Sertifikasi pengembangan aplikasi di platform AWS'
    },
    {
      id: 2,
      name: 'Vue.js 3 Complete Course',
      issuer: 'Vue School',
      year: '2023',
      icon: 'ri-vuejs-line',
      color: 'from-green-500 to-teal-500',
      description: 'Menguasai Vue.js 3 dengan Composition API'
    },
    {
      id: 3,
      name: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      year: '2022',
      icon: 'ri-reactjs-line',
      color: 'from-blue-500 to-cyan-500',
      description: 'Sertifikasi pengembangan aplikasi React'
    },
    {
      id: 4,
      name: 'Node.js Application Developer',
      issuer: 'Node.js Foundation',
      year: '2022',
      icon: 'ri-nodejs-line',
      color: 'from-green-600 to-lime-500',
      description: 'Pengembangan backend dengan Node.js'
    },
    {
      id: 5,
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      year: '2022',
      icon: 'ri-database-2-line',
      color: 'from-green-700 to-green-500',
      description: 'Database NoSQL dan agregasi data'
    },
    {
      id: 6,
      name: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      year: '2023',
      icon: 'ri-google-fill',
      color: 'from-red-500 to-yellow-500',
      description: 'Cloud computing dan deployment'
    },
    {
      id: 7,
      name: 'JavaScript Algorithms & Data Structures',
      issuer: 'freeCodeCamp',
      year: '2021',
      icon: 'ri-javascript-line',
      color: 'from-yellow-500 to-orange-500',
      description: 'Algoritma dan struktur data JavaScript'
    },
    {
      id: 8,
      name: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      year: '2021',
      icon: 'ri-responsive-line',
      color: 'from-purple-500 to-pink-500',
      description: 'Desain web responsif dan modern'
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sertifikat</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sertifikat dan kualifikasi yang menunjukkan komitmen saya dalam pembelajaran berkelanjutan
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certificates.map((cert) => (
              <div 
                key={cert.id}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="text-center flex-grow flex flex-col">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${cert.icon} text-2xl text-white`}></i>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {cert.name}
                  </h3>
                  
                  <p className="text-green-600 font-semibold mb-1">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-gray-500 text-sm mb-3">
                    {cert.year}
                  </p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {cert.description}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap">
                    Lihat Sertifikat
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <i className="ri-trophy-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pencapaian Lainnya</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-medal-line text-yellow-500"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Hackathon Winner</p>
                    <p className="text-sm text-gray-600">1st Place - Tech Innovation 2023</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-star-line text-blue-500"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Open Source Contributor</p>
                    <p className="text-sm text-gray-600">500+ contributions on GitHub</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}