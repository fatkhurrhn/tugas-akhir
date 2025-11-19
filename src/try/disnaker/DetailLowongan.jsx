import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/try/Navbar';
import Footer from '../../components/try/Footer';

export default function DetailLowongan() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Data lowongan
    const allJobs = [
        {
            id: 1,
            posisi: 'Frontend Developer',
            perusahaan: 'PT Solusi Digital',
            logo: 'https://picsum.photos/200/200?random=1',
            lokasi: 'Bandung',
            kategori: 'Teknologi',
            pendidikan: 'S1',
            gaji: 'Rp 8 - 12 Juta',
            tanggalTutup: '2025-11-30',
            deskripsi: 'Kami mencari Frontend Developer untuk membangun antarmuka web modern menggunakan React.js dan Tailwind CSS. Anda akan bergabung dengan tim yang dinamis dan berkolaborasi dalam pengembangan produk digital inovatif.',
            tanggungJawab: [
                'Mengembangkan UI/UX berbasis dari desain Figma',
                'Berkoordinasi dengan backend developer untuk integrasi API',
                'Memastikan aplikasi responsif dan memiliki performa optimal',
                'Melakukan testing dan debugging aplikasi',
                'Berpartisipasi dalam code review dan diskusi teknis'
            ],
            kriteria: [
                'Pendidikan S1 Teknik Informatika atau bidang terkait',
                'Mahir React.js, HTML, CSS, JavaScript ES6+',
                'Pengalaman 2+ tahun di posisi Frontend Developer',
                'Memahami Git, REST API, dan responsive design',
                'Portofolio proyek wajib disertakan',
                'Memiliki kemampuan problem solving yang baik'
            ],
            fasilitas: ['WFH 2x/minggu', 'Asuransi Kesehatan', 'Training Skill', 'Bonus Tahunan', 'Laptop Perusahaan'],
            alamat: 'Gedung TechHub, Jl. Cikutra No. 85, Bandung',
            status: 'Aktif',
            type: 'Full-time',
            experience: '2-3 tahun'
        },
        {
            id: 2,
            posisi: 'Operator Produksi',
            perusahaan: 'CV Makmur Abadi',
            logo: 'https://picsum.photos/200/200?random=2',
            lokasi: 'Bekasi',
            kategori: 'Manufaktur',
            pendidikan: 'SMK',
            gaji: 'Rp 4 - 5 Juta',
            tanggalTutup: '2025-11-25',
            deskripsi: 'Mengoperasikan mesin produksi dan menjaga kualitas produk sesuai standar perusahaan. Bergabunglah dengan tim produksi kami yang profesional.',
            tanggungJawab: [
                'Mengoperasikan mesin produksi harian',
                'Melakukan pemeriksaan kualitas produk',
                'Menjaga kebersihan dan kerapian area kerja',
                'Melaporkan hasil produksi kepada supervisor'
            ],
            kriteria: [
                'Lulusan SMK jurusan Teknik Mesin/Elektro',
                'Usia maksimal 35 tahun',
                'Sehat jasmani dan rohani',
                'Siap kerja shift',
                'Memiliki pengalaman di bidang manufaktur lebih diutamakan'
            ],
            fasilitas: ['Seragam', 'Makan Siang', 'THR', 'Asuransi Kecelakaan Kerja'],
            alamat: 'Jl. Raya Industri No. 12, Cikarang, Bekasi',
            status: 'Aktif',
            type: 'Full-time',
            experience: '0-1 tahun'
        },
        {
            id: 3,
            posisi: 'Petugas Lapangan',
            perusahaan: 'UD Tani Maju',
            logo: 'https://picsum.photos/200/200?random=3',
            lokasi: 'Temanggung',
            kategori: 'Pertanian',
            pendidikan: 'D3',
            gaji: 'Rp 3 - 4 Juta',
            tanggalTutup: '2025-11-20',
            deskripsi: 'Melakukan pemantauan lahan dan memberikan bimbingan teknis kepada petani binaan dalam program pengembangan pertanian organik.',
            tanggungJawab: [
                'Mengunjungi lahan petani secara rutin',
                'Memberikan edukasi metode pertanian organik',
                'Mencatat perkembangan hasil panen',
                'Melaporkan kondisi lahan kepada koordinator'
            ],
            kriteria: [
                'Lulusan D3 Pertanian',
                'Memiliki SIM C aktif',
                'Mampu bekerja di lapangan',
                'Komunikatif dan suka bekerja tim',
                'Memahami dasar-dasar pertanian organik'
            ],
            fasilitas: ['Sepeda Motor Dinas', 'Asuransi', 'Insentif Panen', 'Seragam Kerja'],
            alamat: 'Desa Sumbermulyo, Kec. Ngadirejo, Temanggung',
            status: 'Aktif',
            type: 'Full-time',
            experience: '1-2 tahun'
        },
        {
            id: 4,
            posisi: 'Backend Developer',
            perusahaan: 'PT Tech Innovation',
            logo: 'https://picsum.photos/200/200?random=4',
            lokasi: 'Jakarta',
            kategori: 'Teknologi',
            pendidikan: 'S1',
            gaji: 'Rp 12 - 18 Juta',
            tanggalTutup: '2025-12-15',
            deskripsi: 'Membangun dan mengembangkan sistem backend yang scalable dan maintainable menggunakan teknologi terbaru.',
            tanggungJawab: [
                'Mengembangkan RESTful API',
                'Mengoptimasi performa database',
                'Implementasi security best practices',
                'Kolaborasi dengan tim frontend'
            ],
            kriteria: [
                'Pengalaman dengan Node.js/Python',
                'Memahami database SQL dan NoSQL',
                'Pengalaman dengan cloud services',
                'Memahami microservices architecture'
            ],
            fasilitas: ['Flexible Hours', 'Asuransi Premium', 'Training Budget'],
            alamat: 'Kuningan City, Jakarta Selatan',
            status: 'Aktif',
            type: 'Full-time',
            experience: '3-5 tahun'
        },
        {
            id: 5,
            posisi: 'Digital Marketing',
            perusahaan: 'Creative Media Group',
            logo: 'https://picsum.photos/200/200?random=5',
            lokasi: 'Surabaya',
            kategori: 'Marketing',
            pendidikan: 'S1',
            gaji: 'Rp 6 - 9 Juta',
            tanggalTutup: '2025-12-10',
            deskripsi: 'Mengelola kampanye digital marketing dan meningkatkan brand awareness perusahaan melalui berbagai channel online.',
            tanggungJawab: [
                'Mengelola media sosial',
                'Membuat konten marketing',
                'Analisis performa kampanye',
                'SEO dan SEM management'
            ],
            kriteria: [
                'Pengalaman digital marketing 1+ tahun',
                'Memahami Google Analytics',
                'Kreatif dan inovatif',
                'Kemampuan copywriting yang baik'
            ],
            fasilitas: ['Bonus Performance', 'Gadget Support', 'Workshop'],
            alamat: 'Jl. Pemuda No. 45, Surabaya',
            status: 'Aktif',
            type: 'Full-time',
            experience: '1-2 tahun'
        }
    ];

    useEffect(() => {
        const foundJob = allJobs.find(j => j.id === parseInt(id));
        if (foundJob) {
            setJob(foundJob);
        } else {
            navigate('/lowongan');
        }
        setIsLoading(false);
    }, [id, navigate]);

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    const isExpired = (dateString) => new Date(dateString) < new Date();

    const getDaysLeft = (dateString) => {
        const today = new Date();
        const closingDate = new Date(dateString);
        const diffTime = closingDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    if (isLoading) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-[#f9fafb] flex items-center justify-center">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#355485] mx-auto"></div>
                        <p className="mt-4 text-[#6b7280]">Memuat detail lowongan...</p>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    if (!job) {
        return null;
    }

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#f9fafb]">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-[#355485] to-[#2a436c] text-white py-12">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="flex items-center gap-6">
                            <img
                                src={job.logo}
                                alt={job.perusahaan}
                                className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-lg"
                            />
                            <div>
                                <h1 className="text-4xl font-bold mb-2">{job.posisi}</h1>
                                <p className="text-xl opacity-90">{job.perusahaan}</p>
                                <p className="opacity-80 mt-1">{job.alamat}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-6 py-8 -mt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Quick Info Cards */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-[#e5e7eb]">
                                    <div className="text-2xl font-bold text-[#355485] mb-1">
                                        {getDaysLeft(job.tanggalTutup)}
                                    </div>
                                    <div className="text-sm text-[#6b7280]">Hari Lagi</div>
                                </div>
                                <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-[#e5e7eb]">
                                    <div className="text-lg font-bold text-[#355485] mb-1">{job.type}</div>
                                    <div className="text-sm text-[#6b7280]">Tipe Kerja</div>
                                </div>
                                <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-[#e5e7eb]">
                                    <div className="text-lg font-bold text-[#355485] mb-1">{job.experience}</div>
                                    <div className="text-sm text-[#6b7280]">Pengalaman</div>
                                </div>
                                <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-[#e5e7eb]">
                                    <div className={`text-lg font-bold mb-1 ${isExpired(job.tanggalTutup) ? 'text-red-600' : 'text-[#355485]'}`}>
                                        {isExpired(job.tanggalTutup) ? 'TUTUP' : 'DIBUKA'}
                                    </div>
                                    <div className="text-sm text-[#6b7280]">Status</div>
                                </div>
                            </div>

                            {/* Job Details */}
                            <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] overflow-hidden">
                                <div className="p-6 border-b border-[#e5e7eb]">
                                    <h2 className="text-2xl font-bold text-[#355485]">Detail Pekerjaan</h2>
                                </div>

                                <div className="p-6 space-y-8">
                                    {/* Deskripsi */}
                                    <section>
                                        <h3 className="text-xl font-semibold text-[#355485] mb-4 flex items-center">
                                            <svg className="w-5 h-5 text-[#4f90c6] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                            </svg>
                                            Deskripsi Pekerjaan
                                        </h3>
                                        <p className="text-[#6b7280] leading-relaxed">{job.deskripsi}</p>
                                    </section>

                                    {/* Tanggung Jawab */}
                                    <section>
                                        <h3 className="text-xl font-semibold text-[#355485] mb-4 flex items-center">
                                            <svg className="w-5 h-5 text-[#4f90c6] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            Tanggung Jawab
                                        </h3>
                                        <ul className="space-y-3">
                                            {job.tanggungJawab.map((tanggungJawab, index) => (
                                                <li key={index} className="flex items-start bg-[#cbdde9] rounded-lg p-3">
                                                    <span className="flex-shrink-0 w-6 h-6 bg-[#355485] text-white rounded-full text-sm flex items-center justify-center mr-3">
                                                        {index + 1}
                                                    </span>
                                                    <span className="text-[#355485]">{tanggungJawab}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>

                                    {/* Kriteria */}
                                    <section>
                                        <h3 className="text-xl font-semibold text-[#355485] mb-4 flex items-center">
                                            <svg className="w-5 h-5 text-[#4f90c6] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            Kriteria
                                        </h3>
                                        <ul className="space-y-3">
                                            {job.kriteria.map((kriteria, index) => (
                                                <li key={index} className="flex items-start">
                                                    <svg className="w-5 h-5 text-[#4f90c6] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-[#6b7280]">{kriteria}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Action Card */}
                            <div className="bg-white rounded-xl shadow-lg border border-[#e5e7eb] p-6 text-center">
                                <div className="mb-4">
                                    <div className="text-3xl font-bold text-[#355485]">{job.gaji}</div>
                                    <div className="text-[#6b7280]">Gaji Per Bulan</div>
                                </div>

                                {!isExpired(job.tanggalTutup) ? (
                                    <>
                                        <button className="w-full py-4 bg-gradient-to-r from-[#355485] to-[#4f90c6] hover:from-[#2a436c] hover:to-[#355485] text-white font-bold rounded-xl transition shadow-lg mb-3">
                                            Lamar Sekarang
                                        </button>
                                        <p className="text-sm text-[#6b7280]">
                                            Tutup pada <span className="font-semibold text-[#355485]">{formatDate(job.tanggalTutup)}</span>
                                        </p>
                                        <div className="mt-2 text-xs text-[#4f90c6] font-medium">
                                            {getDaysLeft(job.tanggalTutup)} hari lagi
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            disabled
                                            className="w-full py-4 bg-[#9ca3af] text-white font-bold rounded-xl cursor-not-allowed mb-3"
                                        >
                                            Lowongan Ditutup
                                        </button>
                                        <p className="text-sm text-[#6b7280]">
                                            Ditutup pada <span className="font-semibold text-[#355485]">{formatDate(job.tanggalTutup)}</span>
                                        </p>
                                    </>
                                )}
                            </div>

                            {/* Fasilitas */}
                            {job.fasilitas && job.fasilitas.length > 0 && (
                                <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-6">
                                    <h3 className="text-lg font-semibold text-[#355485] mb-4 flex items-center">
                                        <svg className="w-5 h-5 text-[#4f90c6] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                        </svg>
                                        Fasilitas
                                    </h3>
                                    <div className="grid gap-3">
                                        {job.fasilitas.map((fasilitas, index) => (
                                            <div key={index} className="flex items-center p-3 bg-[#cbdde9] rounded-lg border border-[#90b6d5]">
                                                <svg className="w-4 h-4 text-[#355485] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-[#355485] font-medium">{fasilitas}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Company Info */}
                            <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-6">
                                <h3 className="text-lg font-semibold text-[#355485] mb-4">Tentang Perusahaan</h3>
                                <div className="flex items-center gap-3 mb-4">
                                    <img
                                        src={job.logo}
                                        alt={job.perusahaan}
                                        className="w-12 h-12 rounded-lg object-cover border border-[#e5e7eb]"
                                    />
                                    <div>
                                        <h4 className="font-bold text-[#355485]">{job.perusahaan}</h4>
                                        <p className="text-sm text-[#6b7280]">{job.lokasi}</p>
                                    </div>
                                </div>
                                <div className="space-y-2 text-sm text-[#6b7280]">
                                    <div className="flex justify-between">
                                        <span>Industri:</span>
                                        <span className="font-medium text-[#355485]">{job.kategori}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Lokasi:</span>
                                        <span className="font-medium text-[#355485]">{job.lokasi}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Pendidikan:</span>
                                        <span className="font-medium text-[#355485]">{job.pendidikan}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Jobs */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-[#355485] mb-6">Lowongan Serupa</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {allJobs
                                .filter(j => j.id !== job.id)
                                .slice(0, 3)
                                .map(relatedJob => (
                                    <div
                                        key={relatedJob.id}
                                        className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-6 hover:shadow-lg transition cursor-pointer group"
                                        onClick={() => navigate(`/lowongan/detail/${relatedJob.id}`)}
                                    >
                                        <div className="flex items-start gap-4">
                                            <img
                                                src={relatedJob.logo}
                                                alt={relatedJob.perusahaan}
                                                className="w-12 h-12 rounded-lg object-cover border border-[#e5e7eb] group-hover:scale-110 transition"
                                            />
                                            <div className="flex-1">
                                                <h4 className="font-bold text-[#355485] group-hover:text-[#4f90c6] transition mb-2">
                                                    {relatedJob.posisi}
                                                </h4>
                                                <p className="text-[#6b7280] text-sm mb-3">{relatedJob.perusahaan}</p>
                                                <div className="flex flex-wrap gap-1">
                                                    <span className="px-2 py-1 bg-[#cbdde9] text-[#355485] text-xs rounded-full">
                                                        {relatedJob.kategori}
                                                    </span>
                                                    <span className="px-2 py-1 bg-[#cbdde9] text-[#355485] text-xs rounded-full">
                                                        {relatedJob.lokasi}
                                                    </span>
                                                </div>
                                                <div className="mt-3 text-sm text-[#6b7280]">
                                                    {relatedJob.gaji} • {relatedJob.type}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}