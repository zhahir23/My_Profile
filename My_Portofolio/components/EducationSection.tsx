'use client';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pendidikan</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center">
                  <i className="ri-graduation-cap-line text-3xl text-white"></i>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  S1 Teknik Informatika
                </h3>
                <p className="text-xl text-green-600 font-semibold mb-2">
                  Universitas Teknologi Indonesia
                </p>
                <p className="text-gray-600 mb-4">
                  2019 - 2023 | GPA: 3.7/4.0
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Fokus pada pengembangan perangkat lunak, algoritma dan struktur data, 
                  database management, dan web development. Terlibat aktif dalam organisasi 
                  kemahasiswaan dan berbagai proyek pengembangan aplikasi.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                  <i className="ri-school-line text-3xl text-white"></i>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  SMA Negeri 1 Jakarta
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-2">
                  Jurusan IPA
                </p>
                <p className="text-gray-600 mb-4">
                  2016 - 2019 | Nilai UN: 87.5
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Mengambil jurusan IPA dengan fokus pada Matematika dan Fisika. 
                  Aktif dalam ekstrakurikuler robotika dan olimpiade komputer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}