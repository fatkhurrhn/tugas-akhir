import React, { useState } from 'react';
import Navbar from '../../components/try/Navbar';
import Footer from '../../components/try/Footer';

export default function Blog() {
  // Dummy Data Berita
  const allPosts = [
    {
      id: 1,
      judul: 'Bursa Kerja Online DISNAKER Paser Resmi Diluncurkan',
      excerpt: 'Platform digital untuk mempertemukan pencari kerja dengan perusahaan telah resmi diluncurkan dan dapat diakses oleh masyarakat Kabupaten Paser.',
      thumbnail: 'https://picsum.photos/400/250?random=1',
      tanggalPublish: '2024-12-15',
      kategori: 'Pengumuman',
      tag: ['teknologi', 'inovasi'],
      penulis: 'Admin DISNAKER',
      durasiBaca: '3 menit',
      featured: true
    },
    {
      id: 2,
      judul: 'Pelatihan Keterampilan Teknologi untuk Tenaga Kerja',
      excerpt: 'Program pelatihan gratis untuk meningkatkan kompetensi tenaga kerja dalam bidang teknologi informasi dan digital marketing.',
      thumbnail: 'https://picsum.photos/400/250?random=2',
      tanggalPublish: '2024-12-10',
      kategori: 'Pelatihan',
      tag: ['pelatihan', 'teknologi'],
      penulis: 'Tim Pelatihan',
      durasiBaca: '4 menit',
      featured: true
    },
    {
      id: 3,
      judul: 'Kerjasama dengan 50 Perusahaan Swasta',
      excerpt: 'MoU dengan 50 perusahaan untuk penyerapan tenaga kerja lokal dalam berbagai sektor industri.',
      thumbnail: 'https://picsum.photos/400/250?random=3',
      tanggalPublish: '2024-12-05',
      kategori: 'Kerjasama',
      tag: ['kerjasama', 'perusahaan'],
      penulis: 'Tim Humas',
      durasiBaca: '5 menit',
      featured: false
    },
    {
      id: 4,
      judul: 'Tips Sukses Menghadapi Interview Kerja',
      excerpt: 'Panduan lengkap untuk mempersiapkan diri menghadapi sesi wawancara kerja dengan percaya diri.',
      thumbnail: 'https://picsum.photos/400/250?random=4',
      tanggalPublish: '2024-12-01',
      kategori: 'Tips Karir',
      tag: ['tips', 'karir'],
      penulis: 'Konsultan Karir',
      durasiBaca: '6 menit',
      featured: false
    },
    {
      id: 5,
      judul: 'Program Magang untuk Fresh Graduate',
      excerpt: 'DISNAKER Paser membuka program magang bagi lulusan baru untuk mendapatkan pengalaman kerja praktis.',
      thumbnail: 'https://picsum.photos/400/250?random=5',
      tanggalPublish: '2024-11-28',
      kategori: 'Program',
      tag: ['magang', 'fresh-graduate'],
      penulis: 'Tim Program',
      durasiBaca: '3 menit',
      featured: false
    },
    {
      id: 6,
      judul: 'Trend Pasar Kerja 2024 di Kabupaten Paser',
      excerpt: 'Analisis perkembangan pasar kerja dan sektor-sektor yang paling banyak menyerap tenaga kerja.',
      thumbnail: 'https://picsum.photos/400/250?random=6',
      tanggalPublish: '2024-11-25',
      kategori: 'Analisis',
      tag: ['trend', 'pasar-kerja'],
      penulis: 'Tim Riset',
      durasiBaca: '7 menit',
      featured: false
    },
    {
      id: 7,
      judul: 'Workshop Kewirausahaan untuk Pemuda',
      excerpt: 'Pelatihan kewirausahaan bagi pemuda Paser untuk menciptakan lapangan kerja mandiri.',
      thumbnail: 'https://picsum.photos/400/250?random=7',
      tanggalPublish: '2024-11-20',
      kategori: 'Workshop',
      tag: ['kewirausahaan', 'pemuda'],
      penulis: 'Tim UMKM',
      durasiBaca: '4 menit',
      featured: false
    },
    {
      id: 8,
      judul: 'Sukses Story: Dari Pencari Kerja Menjadi Entrepreneur',
      excerpt: 'Kisah inspiratif mantan pencari kerja yang berhasil membangun bisnis sendiri dengan bantuan DISNAKER.',
      thumbnail: 'https://picsum.photos/400/250?random=8',
      tanggalPublish: '2024-11-15',
      kategori: 'Inspirasi',
      tag: ['sukses-story', 'entrepreneur'],
      penulis: 'Tim Inspirasi',
      durasiBaca: '8 menit',
      featured: false
    }
  ];

  // State Filter
  const [filters, setFilters] = useState({
    keyword: '',
    kategori: '',
    tag: ''
  });

  // Ekstrak unique values untuk filter
  const kategoriList = [...new Set(allPosts.map(post => post.kategori))];
  const tagList = [...new Set(allPosts.flatMap(post => post.tag))];

  // Filter posts
  const filteredPosts = allPosts.filter(post => {
    return (
      (post.judul.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(filters.keyword.toLowerCase())) &&
      (filters.kategori === '' || post.kategori === filters.kategori) &&
      (filters.tag === '' || post.tag.includes(filters.tag))
    );
  });

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  const getFeaturedPosts = () => allPosts.filter(post => post.featured);
  const getRegularPosts = () => filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f9fafb]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#355485] to-[#2a436c] text-white py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">Blog & Berita</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Informasi terbaru seputar ketenagakerjaan, pelatihan, dan perkembangan karir di Kabupaten Paser
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-8">
              <div className="bg-white rounded-lg shadow-lg p-2">
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Cari artikel atau berita..."
                    value={filters.keyword}
                    onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
                    className="flex-1 px-4 py-3 text-[#355485] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6]"
                  />
                  <button className="ml-2 px-8 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] transition font-semibold">
                    Cari
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Featured Posts */}
              {getFeaturedPosts().length > 0 && (
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-[#355485] mb-6 flex items-center">
                    <svg className="w-6 h-6 text-[#4f90c6] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Artikel Unggulan
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {getFeaturedPosts().map(post => (
                      <article
                        key={post.id}
                        className="bg-white rounded-xl shadow-lg border border-[#e5e7eb] overflow-hidden hover:shadow-xl transition cursor-pointer group"
                        onClick={() => window.location.href = `/blog/detail/${post.id}`}
                      >
                        <div className="relative">
                          <img
                            src={post.thumbnail}
                            alt={post.judul}
                            className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-[#355485] text-white text-sm font-medium rounded-full">
                              {post.kategori}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-[#355485] group-hover:text-[#4f90c6] transition mb-3 line-clamp-2">
                            {post.judul}
                          </h3>
                          <p className="text-[#6b7280] mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-[#9ca3af]">
                            <div className="flex items-center space-x-4">
                              <span>{formatDate(post.tanggalPublish)}</span>
                              <span>•</span>
                              <span>{post.durasiBaca}</span>
                            </div>
                            <span>Oleh {post.penulis}</span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              {/* All Posts */}
              <section>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-[#355485]">
                    Semua Artikel
                    {filters.keyword && (
                      <span className="text-[#4f90c6]"> untuk "{filters.keyword}"</span>
                    )}
                  </h2>
                  <p className="text-[#6b7280]">
                    {filteredPosts.length} artikel ditemukan
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {getRegularPosts().length > 0 ? (
                    getRegularPosts().map(post => (
                      <article
                        key={post.id}
                        className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] overflow-hidden hover:shadow-md transition cursor-pointer group"
                        onClick={() => window.location.href = `/blog/detail/${post.id}`}
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-2/5">
                            <img
                              src={post.thumbnail}
                              alt={post.judul}
                              className="w-full h-40 md:h-full object-cover group-hover:scale-105 transition duration-300"
                            />
                          </div>
                          <div className="md:w-3/5 p-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="px-2 py-1 bg-[#cbdde9] text-[#355485] text-xs font-medium rounded">
                                {post.kategori}
                              </span>
                              <span className="text-xs text-[#9ca3af]">{post.durasiBaca}</span>
                            </div>
                            <h3 className="font-bold text-[#355485] group-hover:text-[#4f90c6] transition mb-2 line-clamp-2">
                              {post.judul}
                            </h3>
                            <p className="text-[#6b7280] text-sm mb-3 line-clamp-2">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-xs text-[#9ca3af]">
                              <span>{formatDate(post.tanggalPublish)}</span>
                              <span>Oleh {post.penulis}</span>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-12">
                      <div className="text-[#9ca3af] mb-4">
                        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-[#355485] mb-2">Tidak ada artikel yang cocok</h3>
                      <p className="text-[#6b7280] mb-4">Coba ubah filter pencarian Anda.</p>
                      <button
                        onClick={() => setFilters({
                          keyword: '',
                          kategori: '',
                          tag: ''
                        })}
                        className="px-6 py-2 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] transition font-semibold"
                      >
                        Reset Filter
                      </button>
                    </div>
                  )}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="space-y-6">
                {/* Filter Kategori */}
                <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-6">
                  <h3 className="text-lg font-semibold text-[#355485] mb-4">Filter Kategori</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setFilters({ ...filters, kategori: '' })}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition ${filters.kategori === ''
                          ? 'bg-[#355485] text-white'
                          : 'text-[#6b7280] hover:bg-[#f9fafb]'
                        }`}
                    >
                      Semua Kategori
                    </button>
                    {kategoriList.map(kategori => (
                      <button
                        key={kategori}
                        onClick={() => setFilters({ ...filters, kategori })}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition ${filters.kategori === kategori
                            ? 'bg-[#355485] text-white'
                            : 'text-[#6b7280] hover:bg-[#f9fafb]'
                          }`}
                      >
                        {kategori}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filter Tag */}
                <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-6">
                  <h3 className="text-lg font-semibold text-[#355485] mb-4">Filter Tag</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setFilters({ ...filters, tag: '' })}
                      className={`px-3 py-1 rounded-full text-sm transition ${filters.tag === ''
                          ? 'bg-[#355485] text-white'
                          : 'bg-[#cbdde9] text-[#355485] hover:bg-[#90b6d5]'
                        }`}
                    >
                      Semua Tag
                    </button>
                    {tagList.map(tag => (
                      <button
                        key={tag}
                        onClick={() => setFilters({ ...filters, tag })}
                        className={`px-3 py-1 rounded-full text-sm transition ${filters.tag === tag
                            ? 'bg-[#355485] text-white'
                            : 'bg-[#cbdde9] text-[#355485] hover:bg-[#90b6d5]'
                          }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-6">
                  <h3 className="text-lg font-semibold text-[#355485] mb-4">Artikel Terbaru</h3>
                  <div className="space-y-4">
                    {allPosts.slice(0, 3).map(post => (
                      <div
                        key={post.id}
                        className="flex items-center space-x-3 cursor-pointer group"
                        onClick={() => window.location.href = `/blog/detail/${post.id}`}
                      >
                        <img
                          src={post.thumbnail}
                          alt={post.judul}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="text-sm font-medium text-[#355485] group-hover:text-[#4f90c6] transition line-clamp-2">
                            {post.judul}
                          </h4>
                          <p className="text-xs text-[#9ca3af]">{formatDate(post.tanggalPublish)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}