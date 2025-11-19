import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/try/Navbar';
import Footer from '../../components/try/Footer';

export default function DetailBlog() {
    const navigate = useNavigate();

    // Data blog post langsung
    const post = {
        judul: 'Pelatihan Keterampilan Teknologi untuk Tenaga Kerja',
        excerpt: 'Program pelatihan gratis untuk meningkatkan kompetensi tenaga kerja dalam bidang teknologi informasi dan digital marketing.',
        konten: `
            <p class="mb-6">DISNAKER Kabupaten Paser dengan bangga mempersembahkan Program Pelatihan Keterampilan Teknologi bagi tenaga kerja di wilayah Paser. Program ini dirancang untuk menjawab tantangan era digital dan meningkatkan daya saing tenaga kerja lokal.</p>

            <h2 class="text-2xl font-bold text-[#355485] mb-4 mt-8">Program Pelatihan yang Tersedia</h2>
            <p class="mb-4">Kami menyediakan berbagai program pelatihan yang disesuaikan dengan kebutuhan pasar kerja saat ini:</p>
            
            <div class="bg-[#cbdde9] rounded-xl p-6 mb-6">
                <h3 class="text-xl font-semibold text-[#355485] mb-4">Digital Marketing</h3>
                <ul class="space-y-3">
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-[#4f90c6] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span class="text-[#355485]">Strategi pemasaran media sosial (Facebook, Instagram, TikTok)</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-[#4f90c6] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span class="text-[#355485]">Content creation dan copywriting</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-[#4f90c6] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span class="text-[#355485]">Google Ads dan Facebook Ads</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-[#4f90c6] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span class="text-[#355485]">Analytics dan performance tracking</span>
                    </li>
                </ul>
            </div>

            <div class="bg-[#cbdde9] rounded-xl p-6 mb-6">
                <h3 class="text-xl font-semibold text-[#355485] mb-4">Web Development</h3>
                <ul class="space-y-3">
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-[#4f90c6] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span class="text-[#355485]">HTML, CSS, dan JavaScript dasar</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-[#4f90c6] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span class="text-[#355485]">WordPress untuk pemula</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-[#4f90c6] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span class="text-[#355485]">Responsive web design</span>
                    </li>
                </ul>
            </div>

            <div class="bg-[#cbdde9] rounded-xl p-6 mb-6">
                <h3 class="text-xl font-semibold text-[#355485] mb-4">Data Analysis</h3>
                <ul class="space-y-3">
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-[#4f90c6] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span class="text-[#355485]">Microsoft Excel tingkat lanjut</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-[#4f90c6] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span class="text-[#355485]">Google Sheets dan data visualization</span>
                    </li>
                    <li class="flex items-start">
                        <svg class="w-5 h-5 text-[#4f90c6] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span class="text-[#355485]">Dasar-dasar SQL untuk analisis data</span>
                    </li>
                </ul>
            </div>

            <h2 class="text-2xl font-bold text-[#355485] mb-4 mt-8">Fasilitas Pelatihan</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div class="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-sm">
                    <h3 class="text-lg font-semibold text-[#355485] mb-3">Fasilitas yang Disediakan</h3>
                    <ul class="space-y-2 text-[#6b7280]">
                        <li class="flex items-start">
                            <span class="text-[#4f90c6] mr-2">•</span>
                            Komputer dan perangkat lengkap
                        </li>
                        <li class="flex items-start">
                            <span class="text-[#4f90c6] mr-2">•</span>
                            Akses internet gratis
                        </li>
                        <li class="flex items-start">
                            <span class="text-[#4f90c6] mr-2">•</span>
                            Materi pelatihan digital dan fisik
                        </li>
                        <li class="flex items-start">
                            <span class="text-[#4f90c6] mr-2">•</span>
                            Sertifikat kelulusan
                        </li>
                    </ul>
                </div>
                <div class="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-sm">
                    <h3 class="text-lg font-semibold text-[#355485] mb-3">Benefit Peserta</h3>
                    <ul class="space-y-2 text-[#6b7280]">
                        <li class="flex items-start">
                            <span class="text-[#4f90c6] mr-2">•</span>
                            Gratis tanpa biaya
                        </li>
                        <li class="flex items-start">
                            <span class="text-[#4f90c6] mr-2">•</span>
                            Instruktur berpengalaman
                        </li>
                        <li class="flex items-start">
                            <span class="text-[#4f90c6] mr-2">•</span>
                            Jaringan dengan perusahaan
                        </li>
                        <li class="flex items-start">
                            <span class="text-[#4f90c6] mr-2">•</span>
                            Bantuan penempatan kerja
                        </li>
                    </ul>
                </div>
            </div>

            <h2 class="text-2xl font-bold text-[#355485] mb-4 mt-8">Jadwal dan Pendaftaran</h2>
            <div class="bg-[#f9fafb] rounded-xl p-6 mb-6 border border-[#e5e7eb]">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 class="text-lg font-semibold text-[#355485] mb-3">Jadwal Pelatihan</h3>
                        <ul class="space-y-2 text-[#6b7280]">
                            <li class="flex justify-between">
                                <span>Batch 1:</span>
                                <span class="font-medium text-[#355485]">15 Januari 2025</span>
                            </li>
                            <li class="flex justify-between">
                                <span>Batch 2:</span>
                                <span class="font-medium text-[#355485]">1 Februari 2025</span>
                            </li>
                            <li class="flex justify-between">
                                <span>Batch 3:</span>
                                <span class="font-medium text-[#355485]">15 Maret 2025</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold text-[#355485] mb-3">Lokasi</h3>
                        <p class="text-[#6b7280]">Gedung DISNAKER Paser<br>Jl. Jenderal Sudirman No. 123<br>Tanah Grogot, Kabupaten Paser</p>
                    </div>
                </div>
            </div>

            <blockquote class="border-l-4 border-[#4f90c6] pl-4 italic text-[#6b7280] my-8">
                "Program pelatihan ini merupakan komitmen kami dalam menyiapkan tenaga kerja yang kompeten dan siap bersaing di era digital. Kami percaya bahwa dengan keterampilan yang tepat, setiap warga Paser dapat meraih kesempatan kerja yang lebih baik."
            </blockquote>

            <p class="mb-6">Hingga saat ini, program pelatihan telah diikuti oleh lebih dari 500 peserta dengan tingkat penyerapan kerja mencapai 75%. Banyak alumni yang berhasil mendapatkan pekerjaan di perusahaan ternama atau bahkan memulai usaha mandiri.</p>

            <div class="bg-[#cbdde9] rounded-xl p-6 text-center">
                <h3 class="text-xl font-semibold text-[#355485] mb-3">Tertarik Mengikuti Pelatihan?</h3>
                <p class="text-[#355485] mb-4">Daftar sekarang melalui website DISNAKER Paser atau datang langsung ke kantor kami.</p>
                <button class="px-6 py-3 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] transition font-semibold">
                    Daftar Pelatihan
                </button>
            </div>
        `,
        thumbnail: 'https://picsum.photos/800/450?random=2',
        tanggalPublish: '2024-12-10',
        kategori: 'Pelatihan',
        tag: ['pelatihan', 'teknologi', 'digital-skills'],
        penulis: 'Tim Pelatihan DISNAKER',
        durasiBaca: '4 menit'
    };

    // Data artikel terkait (dummy)
    const relatedPosts = [
        {
            id: 1,
            judul: 'Tips Mempersiapkan Diri untuk Dunia Kerja Digital',
            excerpt: 'Pelajari cara mempersiapkan diri menghadapi tantangan dunia kerja di era digital...',
            thumbnail: 'https://picsum.photos/300/200?random=1',
            tanggalPublish: '2024-12-05',
            kategori: 'Tips Karir',
            durasiBaca: '3 menit'
        },
        {
            id: 2,
            judul: 'Peluang Kerja di Bidang Teknologi Informasi 2025',
            excerpt: 'Simak peluang kerja terbaru di bidang TI yang sedang booming di tahun 2025...',
            thumbnail: 'https://picsum.photos/300/200?random=3',
            tanggalPublish: '2024-12-03',
            kategori: 'Lowongan Kerja',
            durasiBaca: '5 menit'
        },
        {
            id: 3,
            judul: 'Sukses Berwirausaha dengan Modal Digital',
            excerpt: 'Kisah inspiratif para wirausaha yang sukses memanfaatkan teknologi digital...',
            thumbnail: 'https://picsum.photos/300/200?random=4',
            tanggalPublish: '2024-11-28',
            kategori: 'Inspirasi',
            durasiBaca: '4 menit'
        },
        {
            id: 4,
            judul: 'Workshop Gratis: Digital Marketing untuk UMKM',
            excerpt: 'DISNAKER Paser mengadakan workshop digital marketing khusus untuk pelaku UMKM...',
            thumbnail: 'https://picsum.photos/300/200?random=5',
            tanggalPublish: '2024-11-25',
            kategori: 'Workshop',
            durasiBaca: '2 menit'
        }
    ];

    // Data artikel populer (dummy)
    const popularPosts = [
        {
            id: 5,
            judul: 'Cara Membuat CV yang Menarik di Era Digital',
            excerpt: 'Panduan lengkap membuat CV yang menarik perhatian recruiter...',
            thumbnail: 'https://picsum.photos/100/80?random=6',
            tanggalPublish: '2024-12-01',
            views: 1245
        },
        {
            id: 6,
            judul: 'Skill yang Paling Dicari Perusahaan di 2025',
            excerpt: 'Ketahui skill apa saja yang paling banyak dicari perusahaan...',
            thumbnail: 'https://picsum.photos/100/80?random=7',
            tanggalPublish: '2024-11-30',
            views: 987
        },
        {
            id: 7,
            judul: 'Program Magang Berbayar di Perusahaan Teknologi',
            excerpt: 'Daftar program magang berbayar untuk fresh graduate...',
            thumbnail: 'https://picsum.photos/100/80?random=8',
            tanggalPublish: '2024-11-27',
            views: 765
        }
    ];

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    const sharePost = (platform) => {
        const url = window.location.href;
        const title = post.judul;

        const shareUrls = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
            whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        };

        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    };

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#f9fafb]">
                

                {/* Article Header */}
                <div className="bg-gradient-to-r from-[#355485] to-[#2a436c] text-white py-16">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <div className="flex justify-center mb-4">
                            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                                {post.kategori}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            {post.judul}
                        </h1>
                        <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto leading-relaxed">
                            {post.excerpt}
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-white/80">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                                <span>Oleh {post.penulis}</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                <span>{formatDate(post.tanggalPublish)}</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                <span>{post.durasiBaca} membaca</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <article className="bg-white rounded-xl shadow-lg border border-[#e5e7eb] overflow-hidden">
                                {/* Featured Image */}
                                <div className="relative">
                                    <img
                                        src={post.thumbnail}
                                        alt={post.judul}
                                        className="w-full h-64 md:h-96 object-cover"
                                    />
                                </div>

                                {/* Article Content */}
                                <div className="p-8">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {post.tag.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-[#cbdde9] text-[#355485] text-sm font-medium rounded-full hover:bg-[#b8d0e3] transition cursor-pointer"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Article Body */}
                                    <div
                                        className="prose prose-lg max-w-none"
                                        dangerouslySetInnerHTML={{ __html: post.konten }}
                                    />

                                    {/* Share Section */}
                                    <div className="mt-12 pt-8 border-t border-[#e5e7eb]">
                                        <h3 className="text-lg font-semibold text-[#355485] mb-4">Bagikan Artikel</h3>
                                        <div className="flex flex-wrap gap-3">
                                            <button
                                                onClick={() => sharePost('facebook')}
                                                className="flex items-center px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#166FE5] transition font-medium"
                                            >
                                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" />
                                                </svg>
                                                Facebook
                                            </button>
                                            <button
                                                onClick={() => sharePost('twitter')}
                                                className="flex items-center px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1a91da] transition font-medium"
                                            >
                                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                </svg>
                                                Twitter
                                            </button>
                                            <button
                                                onClick={() => sharePost('whatsapp')}
                                                className="flex items-center px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#22c55e] transition font-medium"
                                            >
                                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M16.8 5.7C14.4 2 9.5.9 5.7 3.2 2 5.5.8 10.5 3.2 14.2l.2.3-.8 3 3-.8.3.2c1.3.7 2.7 1.1 4.1 1.1 1.5 0 3-.4 4.3-1.2 3.7-2.3 4.8-7.3 2.5-11.1zm-2.1 7.7c-.4.6-.9 1-1.6 1.1-.4 0-.9.2-2.9-.6-1.7-.8-3.1-2.1-4.1-3.6-.6-.7-.9-1.6-1-2.5 0-.8.3-1.5.8-2 .2-.2.5-.3.8-.3h.5c.2 0 .4 0 .6.4.2.5.7 1.7.7 1.8.1.1.1.3 0 .4.1.2 0 .4-.1.5-.1.1-.2.3-.3.4-.2.1-.3.3-.2.5.4.6.9 1.2 1.4 1.7.6.5 1.2.9 1.9 1.2.2.1.4.1.5-.1s.6-.7.8-.9c.2-.2.3-.2.5-.1l1.3.7c.2.1.4.2.5.3.1.3.1.7-.1 1z" />
                                                </svg>
                                                WhatsApp
                                            </button>
                                            <button
                                                onClick={() => sharePost('linkedin')}
                                                className="flex items-center px-4 py-2 bg-[#0A66C2] text-white rounded-lg hover:bg-[#0959a8] transition font-medium"
                                            >
                                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                                                </svg>
                                                LinkedIn
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            {/* Related Posts */}
                            <div className="mt-12">
                                <h2 className="text-2xl font-bold text-[#355485] mb-6">Artikel Terkait</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {relatedPosts.map((relatedPost) => (
                                        <div key={relatedPost.id} className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] overflow-hidden hover:shadow-md transition">
                                            <div className="flex flex-col md:flex-row">
                                                <div className="md:w-1/3">
                                                    <img
                                                        src={relatedPost.thumbnail}
                                                        alt={relatedPost.judul}
                                                        className="w-full h-32 md:h-full object-cover"
                                                    />
                                                </div>
                                                <div className="md:w-2/3 p-4">
                                                    <span className="inline-block px-2 py-1 bg-[#cbdde9] text-[#355485] text-xs font-medium rounded mb-2">
                                                        {relatedPost.kategori}
                                                    </span>
                                                    <h3 className="font-semibold text-[#355485] mb-2 line-clamp-2">
                                                        {relatedPost.judul}
                                                    </h3>
                                                    <p className="text-[#6b7280] text-sm mb-2 line-clamp-2">
                                                        {relatedPost.excerpt}
                                                    </p>
                                                    <div className="flex items-center justify-between text-xs text-[#9ca3af]">
                                                        <span>{formatDate(relatedPost.tanggalPublish)}</span>
                                                        <span>{relatedPost.durasiBaca}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-6 space-y-6">
                                {/* Author Info */}
                                <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-6 text-center">
                                    <div className="w-20 h-20 bg-[#355485] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                                        TD
                                    </div>
                                    <h3 className="font-semibold text-[#355485] mb-2">{post.penulis}</h3>
                                    <p className="text-[#6b7280] text-sm mb-4">Tim Pelatihan DISNAKER Paser</p>
                                    <p className="text-[#6b7280] text-sm">
                                        Menyediakan informasi terbaru seputar pelatihan kerja dan pengembangan karir di Kabupaten Paser.
                                    </p>
                                </div>

                                {/* Popular Posts */}
                                <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-6">
                                    <h3 className="font-semibold text-[#355485] mb-4 text-lg">Artikel Populer</h3>
                                    <div className="space-y-4">
                                        {popularPosts.map((popularPost) => (
                                            <div key={popularPost.id} className="flex items-start space-x-3 group cursor-pointer">
                                                <img
                                                    src={popularPost.thumbnail}
                                                    alt={popularPost.judul}
                                                    className="w-16 h-12 object-cover rounded flex-shrink-0"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-medium text-[#355485] text-sm group-hover:text-[#2a436c] transition line-clamp-2 mb-1">
                                                        {popularPost.judul}
                                                    </h4>
                                                    <div className="flex items-center justify-between text-xs text-[#9ca3af]">
                                                        <span>{formatDate(popularPost.tanggalPublish)}</span>
                                                        <span>{popularPost.views} views</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Categories */}
                                <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-6">
                                    <h3 className="font-semibold text-[#355485] mb-4 text-lg">Kategori</h3>
                                    <div className="space-y-2">
                                        {['Pelatihan', 'Lowongan Kerja', 'Tips Karir', 'Workshop', 'Inspirasi'].map((category, index) => (
                                            <div key={index} className="flex items-center justify-between py-2 border-b border-[#f3f4f6] last:border-0">
                                                <span className="text-[#6b7280] hover:text-[#355485] transition cursor-pointer">
                                                    {category}
                                                </span>
                                                <span className="px-2 py-1 bg-[#cbdde9] text-[#355485] text-xs rounded-full">
                                                    {Math.floor(Math.random() * 20) + 5}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Back to Blog */}
                                <button
                                    onClick={() => navigate('/blog')}
                                    className="w-full py-3 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] transition font-semibold flex items-center justify-center"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Kembali ke Blog
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}