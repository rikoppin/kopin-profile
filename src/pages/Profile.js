import React, { useState, useEffect } from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-kopin-gradient">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Profile
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Konsorsium Pendidikan Islam Internasional
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Konsorsium lembaga pendidikan Islam berakreditasi A & berstandar global
            </p>
          </div>
        </div>
      </section>

      {/* Identitas Lembaga Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Identitas Lembaga */}
            <div>
              <h3 className="text-3xl font-bold text-kopin-green-dark mb-8">
                Identitas Lembaga
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <span className="font-semibold text-kopin-green-dark text-lg">Nama:</span>
                  <span className="text-gray-700 sm:col-span-3 leading-relaxed">
                    Konsorsium Pendidikan Islam Internasional (KOPIN)
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <span className="font-semibold text-kopin-green-dark text-lg">Bentuk:</span>
                  <span className="text-gray-700 sm:col-span-3 leading-relaxed">
                    Konsorsium lembaga pendidikan Islam berakreditasi A & berstandar global
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <span className="font-semibold text-kopin-green-dark text-lg">Wilayah Kerja:</span>
                  <span className="text-gray-700 sm:col-span-3 leading-relaxed">
                    Nasional & Internasional
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <span className="font-semibold text-kopin-green-dark text-lg">Bidang:</span>
                  <span className="text-gray-700 sm:col-span-3 leading-relaxed">
                    Pendidikan, Riset, Pelatihan, Kolaborasi Global
                  </span>
                </div>
              </div>
            </div>

            {/* Logo KOPIN */}
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-kopin-accent rounded-2xl flex items-center justify-center border-2 border-kopin-teal/20 shadow-lg p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-kopin-teal/40 animate-pulse-slow">
                <img 
                  src="/kopin-logo.png" 
                  alt="Logo KOPIN - Konsorsium Pendidikan Islam Internasional" 
                  className="w-full h-full object-contain transform transition-transform duration-700 hover:rotate-3 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latar Belakang Section */}
      <section className="py-16 enhanced-islamic-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-kopin-teal/10">
            <h3 className="text-3xl font-bold text-kopin-green-dark mb-6 text-center">
              Latar Belakang
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              Dalam menghadapi dinamika global, pendidikan Islam dituntut untuk mampu beradaptasi dengan standar internasional tanpa meninggalkan nilai-nilai Islami. KOPIN hadir sebagai langkah strategis untuk membangun ekosistem kolaboratif antar sekolah Islam/pesantren unggulan di Indonesia. Konsorsium ini menjadi forum bersama dalam pengembangan kurikulum, pertukaran pelajar dan guru, riset kolaboratif, hingga promosi pendidikan Islam Indonesia di kancah global.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-kopin-green-dark mb-4">
              Visi & Misi
            </h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-kopin-accent rounded-2xl p-8 shadow-lg border border-kopin-teal/10 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-kopin-teal/30 group cursor-pointer">
              <div className="relative">
                <h4 className="text-2xl font-bold text-kopin-green-dark mb-6 relative transform transition-all duration-300 group-hover:text-kopin-teal">
                  <span className="relative z-10">Visi</span>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-kopin-teal to-kopin-green rounded-full group-hover:w-full transition-all duration-500 ease-out"></div>
                </h4>
                <p className="text-gray-700 leading-relaxed italic transform transition-all duration-300 group-hover:text-gray-800 relative">
                  <span className="group-hover:underline decoration-kopin-teal/30 decoration-2 underline-offset-2 transition-all duration-300">
                    "Menjadi konsorsium pendidikan Islam terkemuka yang berperan sebagai pusat kolaborasi, inovasi, dan diplomasi pendidikan Islam di tingkat global."
                  </span>
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-kopin-accent rounded-2xl p-8 shadow-lg border border-kopin-teal/10 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-kopin-teal/30 group cursor-pointer">
              <div className="relative">
                <h4 className="text-2xl font-bold text-kopin-green-dark mb-6 relative transform transition-all duration-300 group-hover:text-kopin-teal">
                  <span className="relative z-10">Misi</span>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-kopin-green to-kopin-teal rounded-full group-hover:w-full transition-all duration-500 ease-out"></div>
                </h4>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start transform transition-all duration-300">
                    <span className="w-2 h-2 bg-kopin-teal rounded-full mt-2 mr-3 flex-shrink-0 transform transition-all duration-300 group-hover:bg-kopin-green group-hover:scale-125"></span>
                    <span className="transform transition-all duration-300 group-hover:text-gray-800 group-hover:underline decoration-kopin-teal/30 decoration-1 underline-offset-2">
                      Meningkatkan mutu & daya saing lembaga pendidikan Islam
                    </span>
                  </li>
                  <li className="flex items-start transform transition-all duration-300">
                    <span className="w-2 h-2 bg-kopin-teal rounded-full mt-2 mr-3 flex-shrink-0 transform transition-all duration-300 group-hover:bg-kopin-green group-hover:scale-125"></span>
                    <span className="transform transition-all duration-300 group-hover:text-gray-800 group-hover:underline decoration-kopin-teal/30 decoration-1 underline-offset-2">
                      Menyediakan platform kolaborasi akademik & riset
                    </span>
                  </li>
                  <li className="flex items-start transform transition-all duration-300">
                    <span className="w-2 h-2 bg-kopin-teal rounded-full mt-2 mr-3 flex-shrink-0 transform transition-all duration-300 group-hover:bg-kopin-green group-hover:scale-125"></span>
                    <span className="transform transition-all duration-300 group-hover:text-gray-800 group-hover:underline decoration-kopin-teal/30 decoration-1 underline-offset-2">
                      Mendorong kurikulum internasional berlandaskan nilai Islam
                    </span>
                  </li>
                  <li className="flex items-start transform transition-all duration-300">
                    <span className="w-2 h-2 bg-kopin-teal rounded-full mt-2 mr-3 flex-shrink-0 transform transition-all duration-300 group-hover:bg-kopin-green group-hover:scale-125"></span>
                    <span className="transform transition-all duration-300 group-hover:text-gray-800 group-hover:underline decoration-kopin-teal/30 decoration-1 underline-offset-2">
                      Memberdayakan guru & siswa melalui pelatihan
                    </span>
                  </li>
                  <li className="flex items-start transform transition-all duration-300">
                    <span className="w-2 h-2 bg-kopin-teal rounded-full mt-2 mr-3 flex-shrink-0 transform transition-all duration-300 group-hover:bg-kopin-green group-hover:scale-125"></span>
                    <span className="transform transition-all duration-300 group-hover:text-gray-800 group-hover:underline decoration-kopin-teal/30 decoration-1 underline-offset-2">
                      Memperluas jejaring pendidikan Islam Indonesia di dunia
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai Utama Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-kopin-green-dark mb-4">
              Nilai Utama
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai fundamental yang menjadi landasan dalam setiap aktivitas dan program KOPIN
            </p>
          </div>

          <ValuesSlider />
        </div>
      </section>

      {/* Manfaat Bergabung Section */}
      <section className="py-16 islamic-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-kopin-green-dark mb-4">
              Manfaat Bergabung dengan KOPIN
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Keuntungan strategis yang diperoleh lembaga pendidikan Islam yang bergabung dengan KOPIN
            </p>
          </div>

          <BenefitFlashcards />
        </div>
      </section>

      {/* Bidang Layanan Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-kopin-green-dark mb-4">
              Bidang Layanan
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Layanan komprehensif KOPIN untuk mendukung pengembangan lembaga pendidikan Islam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Development",
                subtitle: "Pengembangan Akademik",
                description: "Kurikulum internasional, akreditasi, penguatan mutu",
                icon: "🎓",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Training & Certification",
                subtitle: "Pelatihan & Sertifikasi",
                description: "Pelatihan guru, sertifikasi profesional, pengembangan SDM",
                icon: "📜",
                color: "from-green-500 to-green-600"
              },
              {
                title: "Research & Publication",
                subtitle: "Riset & Publikasi",
                description: "Riset kolaboratif, publikasi jurnal internasional, prosiding",
                icon: "🔬",
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Exchange Program",
                subtitle: "Program Pertukaran",
                description: "Pertukaran guru, siswa, dan penelitian antar lembaga",
                icon: "🔄",
                color: "from-orange-500 to-orange-600"
              },
              {
                title: "Education Expo & Promotion",
                subtitle: "Expo & Promosi Pendidikan",
                description: "Promosi pendidikan Islam Indonesia di forum global",
                icon: "🌟",
                color: "from-teal-500 to-teal-600"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-kopin-accent to-white rounded-2xl p-6 shadow-lg border border-kopin-teal/10 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-lg font-bold text-kopin-green-dark mb-1">
                    {service.title}
                  </h4>
                  <h5 className="text-md font-semibold text-kopin-teal mb-3">
                    {service.subtitle}
                  </h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan Kompetitif Section */}
      <section className="py-16 enhanced-islamic-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-kopin-green-dark mb-4">
              Keunggulan Kompetitif
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Keunggulan yang membedakan KOPIN dari konsorsium pendidikan lainnya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Akreditasi & Kualitas Terjamin",
                description: "Berbasis akreditasi A dan lembaga unggulan",
                icon: "🏅"
              },
              {
                title: "Jejaring Global",
                description: "Memiliki jejaring nasional & internasional yang luas",
                icon: "🌐"
              },
              {
                title: "Dukungan Pakar",
                description: "Didukung oleh pakar pendidikan, akademisi, dan praktisi global",
                icon: "👨‍🎓"
              },
              {
                title: "Standar Internasional",
                description: "Terintegrasi dengan agenda nasional (Indonesia Emas 2045) dan standar internasional (ISO 21001, SDGs Education Goals)",
                icon: "🎯"
              }
            ].map((advantage, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-kopin-teal/10 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl flex-shrink-0">{advantage.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-kopin-green-dark mb-3">
                      {advantage.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Utama Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-kopin-green-dark mb-4">
              Program Utama
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Program-program unggulan KOPIN dalam membangun ekosistem pendidikan Islam global
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "EduNation Fest",
                description: "Pameran pendidikan Islam internasional tahunan",
                icon: "🎪"
              },
              {
                title: "International Training Series",
                description: "Pelatihan guru dan manajemen pendidikan",
                icon: "📚"
              },
              {
                title: "Collaborative Research Hub",
                description: "Riset lintas lembaga & publikasi global",
                icon: "🔬"
              },
              {
                title: "Student & Teacher Exchange",
                description: "Pertukaran akademik ke luar negeri",
                icon: "✈️"
              },
              {
                title: "Islamic Education Summit",
                description: "Forum internasional pendidikan Islam",
                icon: "🏛️"
              }
            ].map((program, index) => (
              <div key={index} className="bg-kopin-accent rounded-2xl p-6 shadow-lg border border-kopin-teal/10 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h4 className="text-xl font-semibold text-kopin-green-dark mb-3">
                    {program.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Struktur Organisasi Section */}
      <section className="py-16 islamic-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-kopin-green-dark mb-4">
              Struktur Organisasi
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Struktur Pengurus & Pengawas KOPIN
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pengurus */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-kopin-teal/10">
              <h4 className="text-2xl font-bold text-kopin-green-dark mb-6 text-center">
                Pengurus
              </h4>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-3">
                  <span className="font-semibold text-kopin-teal w-32 mb-1 sm:mb-0">Ketua:</span>
                  <span className="text-gray-700">Dr. Ali Saman Hasan, Lc., LL.B., M.A.</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-3">
                  <span className="font-semibold text-kopin-teal w-32 mb-1 sm:mb-0">Sekretaris:</span>
                  <span className="text-gray-700">Muhammad Suja'i Anhar, S.Ag.</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-3">
                  <span className="font-semibold text-kopin-teal w-32 mb-1 sm:mb-0">Wakil Sekretaris:</span>
                  <span className="text-gray-700">Zainal Abidin, Lc.</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-kopin-teal w-32 mb-1 sm:mb-0">Bendahara:</span>
                  <span className="text-gray-700">R. Moh. Taopik Rohman, S.E., M.Kom.</span>
                </div>
              </div>
            </div>

            {/* Pengawas */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-kopin-teal/10">
              <h4 className="text-2xl font-bold text-kopin-green-dark mb-6 text-center">
                Pengawas
              </h4>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center border-b border-gray-100 pb-2">
                  <span className="font-semibold text-kopin-teal w-20 mb-1 sm:mb-0">Ketua:</span>
                  <span className="text-gray-700">Marullah Marzuq, M.Ag., LL.M.</span>
                </div>
                <div className="space-y-2">
                  <span className="font-semibold text-kopin-teal block">Anggota:</span>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• Kartiko Adi Pramono, Dipl.Ing.HTL., ACMC.</li>
                    <li>• Yusuf Utsman Baisa, Lc.</li>
                    <li>• Ir. Mohamad Bawazeer</li>
                    <li>• Nurdin</li>
                    <li>• Agung Wahyu Adhy, Lc.</li>
                    <li>• Abdurrahim</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontak Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-kopin-green-dark mb-4">
              Kontak Resmi
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hubungi kami untuk informasi lebih lanjut tentang KOPIN
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-kopin-accent rounded-2xl p-8 shadow-lg border border-kopin-teal/10">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-kopin-green-dark mb-4">
                  Sekretariat KOPIN
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-2xl">📍</span>
                    <div className="text-left">
                      <p className="text-gray-700 font-medium">
                        Grand Galaxy City, Jl. Boulevard Raya Blok RGF No.16,
                      </p>
                      <p className="text-gray-700">
                        Bekasi, Jawa Barat 17147
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="flex items-center justify-center space-x-3">
                      <span className="text-2xl">📧</span>
                      <div>
                        <p className="text-gray-600 text-sm">Email</p>
                        <a href="mailto:info@kopinindonesia.org" className="text-kopin-teal font-medium hover:text-kopin-green-dark transition-colors">
                          info@kopinindonesia.org
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-3">
                      <span className="text-2xl">📞</span>
                      <div>
                        <p className="text-gray-600 text-sm">Telepon</p>
                        <a href="tel:+6282118087397" className="text-kopin-teal font-medium hover:text-kopin-green-dark transition-colors">
                          +62 821-1808-7397 (Urwah)
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-3">
                      <span className="text-2xl">🌐</span>
                      <div>
                        <p className="text-gray-600 text-sm">Website</p>
                        <a href="https://kopinindonesia.org" target="_blank" rel="noopener noreferrer" className="text-kopin-teal font-medium hover:text-kopin-green-dark transition-colors">
                          kopinindonesia.org
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-kopin-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Bergabung dengan KOPIN
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Mari bergabung dalam membangun ekosistem pendidikan Islam yang kolaboratif dan berstandar global. 
            Bersama KOPIN, wujudkan pendidikan Islam Indonesia yang unggul di kancah internasional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-kopin-green-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Hubungi Kami
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-kopin-green-dark transition-colors duration-200">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// ValuesSlider Component
const ValuesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const values = [
    {
      title: "Integrity",
      subtitle: "Integritas",
      description: "Kejujuran & akuntabilitas dalam setiap tindakan dan keputusan",
      icon: "🤝",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Excellence",
      subtitle: "Keunggulan",
      description: "Mutu & kualitas global yang berkelanjutan",
      icon: "⭐",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Collaboration",
      subtitle: "Kolaborasi",
      description: "Kerja sama lintas lembaga dan negara",
      icon: "🌐",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Innovation",
      subtitle: "Inovasi",
      description: "Kreativitas & riset untuk kemajuan pendidikan",
      icon: "💡",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Islamic Character",
      subtitle: "Karakter Islami",
      description: "Nilai & akhlak Islami sebagai fondasi",
      icon: "🕌",
      color: "from-teal-500 to-teal-600"
    }
  ];

  // Auto slide effect
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isAutoPlay, values.length]);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    // Resume auto play after 3 seconds
    setTimeout(() => setIsAutoPlay(true), 3000);
  };

  const getCardStyle = (index) => {
    const diff = index - currentIndex;
    const totalCards = values.length;
    
    // Normalize diff to handle circular array
    let normalizedDiff = diff;
    if (Math.abs(diff) > totalCards / 2) {
      normalizedDiff = diff > 0 ? diff - totalCards : diff + totalCards;
    }

    if (normalizedDiff === 0) {
      // Center card
      return {
        transform: 'translateX(0%) scale(1) rotateY(0deg)',
        zIndex: 30,
        opacity: 1,
        filter: 'brightness(1)'
      };
    } else if (normalizedDiff === 1) {
      // Right card
      return {
        transform: 'translateX(80%) scale(0.8) rotateY(-25deg)',
        zIndex: 20,
        opacity: 0.7,
        filter: 'brightness(0.8)'
      };
    } else if (normalizedDiff === -1) {
      // Left card
      return {
        transform: 'translateX(-80%) scale(0.8) rotateY(25deg)',
        zIndex: 20,
        opacity: 0.7,
        filter: 'brightness(0.8)'
      };
    } else if (normalizedDiff === 2 || normalizedDiff === -3) {
      // Far right silhouette
      return {
        transform: 'translateX(140%) scale(0.6) rotateY(-45deg)',
        zIndex: 10,
        opacity: 0.4,
        filter: 'brightness(0.6)'
      };
    } else if (normalizedDiff === -2 || normalizedDiff === 3) {
      // Far left silhouette
      return {
        transform: 'translateX(-140%) scale(0.6) rotateY(45deg)',
        zIndex: 10,
        opacity: 0.4,
        filter: 'brightness(0.6)'
      };
    } else {
      // Hidden cards
      return {
        transform: 'translateX(200%) scale(0.4)',
        zIndex: 0,
        opacity: 0,
        filter: 'brightness(0.5)'
      };
    }
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Slider Container */}
      <div className="relative w-full h-full flex items-center justify-center perspective-1000">
        {values.map((value, index) => {
          const style = getCardStyle(index);
          const isCenter = index === currentIndex;
          
          return (
            <div
              key={index}
              className={`absolute w-80 h-80 cursor-pointer transition-all duration-700 ease-out preserve-3d ${
                isCenter ? 'hover:scale-105' : 'hover:scale-90'
              }`}
              style={style}
              onClick={() => handleSlideChange(index)}
            >
              <div className={`w-full h-full rounded-2xl p-8 shadow-2xl border-2 transform transition-all duration-500 ${
                isCenter 
                  ? 'bg-white border-kopin-teal/30 shadow-kopin-teal/20' 
                  : 'bg-kopin-accent border-kopin-teal/10'
              }`}>
                <div className="text-center h-full flex flex-col justify-center">
                  <div className={`text-6xl mb-6 transition-all duration-500 ${
                    isCenter ? 'animate-bounce' : ''
                  }`}>
                    {value.icon}
                  </div>
                  <h4 className={`text-2xl font-bold mb-2 transition-all duration-500 ${
                    isCenter ? 'text-kopin-green-dark' : 'text-kopin-green'
                  }`}>
                    {value.title}
                  </h4>
                  <h5 className={`text-lg font-semibold mb-4 transition-all duration-500 ${
                    isCenter ? 'text-kopin-teal' : 'text-kopin-teal/70'
                  }`}>
                    {value.subtitle}
                  </h5>
                  <p className={`text-sm leading-relaxed transition-all duration-500 ${
                    isCenter ? 'text-gray-700' : 'text-gray-600'
                  }`}>
                    {value.description}
                  </p>
                </div>
                
                {/* Gradient overlay for non-center cards */}
                {!isCenter && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl pointer-events-none" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {values.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-kopin-teal scale-125 shadow-lg'
                : 'bg-kopin-teal/40 hover:bg-kopin-teal/60'
            }`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-40"
        onClick={() => handleSlideChange((currentIndex - 1 + values.length) % values.length)}
      >
        <svg className="w-6 h-6 text-kopin-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-40"
        onClick={() => handleSlideChange((currentIndex + 1) % values.length)}
      >
        <svg className="w-6 h-6 text-kopin-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4">
        <div className={`w-2 h-2 rounded-full ${isAutoPlay ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
      </div>
    </div>
  );
};

// BenefitFlashcards Component
const BenefitFlashcards = () => {
  const [flippedCards, setFlippedCards] = useState(new Set());

  const benefits = [
    {
      title: "Kurikulum Internasional",
      description: "Akses dan adopsi kurikulum berstandar global dengan sertifikasi internasional yang diakui di seluruh dunia. Memberikan kesempatan kepada siswa untuk bersaing di tingkat global.",
      icon: "📚"
    },
    {
      title: "Reputasi Meningkat",
      description: "Penguatan kredibilitas lembaga di mata publik dan dunia akademik melalui kemitraan strategis dengan institusi pendidikan terkemuka di berbagai negara.",
      icon: "🏆"
    },
    {
      title: "Kolaborasi Global",
      description: "Peluang pertukaran pelajar, riset, dan kemitraan luar negeri yang membuka wawasan internasional serta memperluas jejaring akademik dan profesional.",
      icon: "🌍"
    },
    {
      title: "Pelatihan Guru",
      description: "Program pengembangan profesional guru dan staf dengan sertifikasi yang meningkatkan kompetensi pedagogik dan manajerial sesuai standar internasional.",
      icon: "👨‍🏫"
    },
    {
      title: "Perluasan Layanan",
      description: "Membuka peluang ekspansi program internasional dan cabang baru dengan dukungan sistem manajemen yang terintegrasi dan berkelanjutan.",
      icon: "🚀"
    },
    {
      title: "Daya Saing Tinggi",
      description: "Kemampuan menarik siswa lokal maupun internasional serta akses ke pendanaan global melalui program beasiswa dan hibah penelitian yang kompetitif.",
      icon: "💪"
    }
  ];

  const handleCardClick = (index) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => {
        const isFlipped = flippedCards.has(index);
        
        return (
          <div
            key={index}
            className="relative h-64 cursor-pointer group perspective-1000"
            onClick={() => handleCardClick(index)}
          >
            {/* Card Container */}
            <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
              isFlipped ? 'rotate-y-180' : ''
            }`}>
              
              {/* Front Side */}
              <div className="absolute inset-0 w-full h-full backface-hidden">
                <div className={`w-full h-full bg-white rounded-2xl p-6 shadow-lg border border-kopin-teal/10 flex flex-col items-center justify-center text-center transform transition-all duration-300 ${
                  !isFlipped ? 'group-hover:scale-105 group-hover:shadow-xl group-hover:border-kopin-teal/30 group-hover:-translate-y-2' : ''
                }`}>
                  <div className={`text-5xl mb-4 transition-all duration-300 ${
                    !isFlipped ? 'group-hover:scale-110 group-hover:animate-pulse' : ''
                  }`}>
                    {benefit.icon}
                  </div>
                  <h4 className={`text-xl font-semibold text-kopin-green-dark mb-2 transition-all duration-300 ${
                    !isFlipped ? 'group-hover:text-kopin-teal' : ''
                  }`}>
                    {benefit.title}
                  </h4>
                  <div className={`text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    !isFlipped ? 'group-hover:text-kopin-green' : ''
                  }`}>
                    Klik untuk detail
                  </div>
                  
                  {/* Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-kopin-teal/5 to-kopin-green/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute top-2 right-2 w-3 h-3 bg-kopin-teal rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                <div className="w-full h-full bg-gradient-to-br from-kopin-green to-kopin-teal rounded-2xl p-6 shadow-xl border border-kopin-teal/30 flex flex-col justify-center text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="text-3xl mb-3 animate-bounce">
                      {benefit.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-3 text-white">
                      {benefit.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-white/90">
                      {benefit.description}
                    </p>
                    <div className="text-xs text-white/70 mt-3">
                      Klik lagi untuk kembali
                    </div>
                  </div>
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full" />
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-white rounded-full" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-white rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Animation on Hover */}
            <div className={`absolute -inset-1 bg-gradient-to-r from-kopin-teal to-kopin-green rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm ${
              !isFlipped ? 'group-hover:animate-pulse' : ''
            }`} />
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
