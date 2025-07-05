'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">Alex Portfolio</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Fullstack Developer yang berdedikasi untuk menciptakan solusi web modern 
              dan inovatif dengan teknologi terdepan.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-github-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigasi Cepat</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer"
                >
                  Pendidikan
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer"
                >
                  Keahlian
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-green-400 transition-colors cursor-pointer"
                >
                  Proyek
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <i className="ri-mail-line text-green-400"></i>
                <span className="text-gray-300">alex.developer@email.com</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-phone-line text-green-400"></i>
                <span className="text-gray-300">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-map-pin-line text-green-400"></i>
                <span className="text-gray-300">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} Alex Portfolio. Dibuat dengan ❤️ menggunakan React & Tailwind CSS
            </p>
            <button 
              onClick={scrollToTop}
              className="mt-4 md:mt-0 bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors cursor-pointer"
              aria-label="Kembali ke atas"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-arrow-up-line text-lg"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}