import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-kopin-gradient">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Konsorsium
                <br />
                Pendidikan Islam
                <br />
                Internasional
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Membangun ekosistem pendidikan Islam yang kolaboratif dan berstandar global
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-kopin-green-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Pelajari Lebih Lanjut
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-kopin-green-dark transition-colors duration-200">
                  Hubungi Kami
                </button>
              </div>
            </div>

            {/* Logo Placeholder */}
            <div className="flex justify-center">
              <div className="w-96 h-96 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-kopin-green-dark font-bold text-4xl">KOPIN</span>
                  </div>
                  <p className="text-white font-semibold text-lg">
                    Logo KOPIN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
