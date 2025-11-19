import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import Navbar from '../../components/try/Navbar';
import Footer from '../../components/try/Footer';

// Component untuk setiap tab
function PengertianTKWT() {
    return (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#355485] mb-4">Apa itu Tenaga Kontrak Waktu Terbatas?</h2>
                <p className="text-lg text-[#6b7280] max-w-4xl mx-auto">
                    TKWT adalah pekerja yang dipekerjakan berdasarkan perjanjian kerja waktu tertentu untuk jangka waktu paling lama 5 tahun.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#cbdde9] rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-[#355485] mb-4">Karakteristik TKWT</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-[#4f90c6] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-[#355485]">Dipekerjakan untuk pekerjaan tertentu yang selesai dalam waktu tertentu</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-[#4f90c6] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-[#355485]">Masa kontrak maksimal 5 tahun</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-[#4f90c6] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-[#355485]">Memiliki perjanjian kerja tertulis</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-[#cbdde9] rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-[#355485] mb-4">Jenis Pekerjaan TKWT</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-[#4f90c6] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-[#355485]">Pekerjaan musiman</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-[#4f90c6] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-[#355485]">Pekerjaan berdasarkan proyek tertentu</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="w-5 h-5 text-[#4f90c6] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-[#355485]">Pekerjaan yang berhubungan dengan produk baru</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

function LowonganTKWT() {
    const lowonganTKWT = [
        {
            id: 1,
            posisi: 'Staff Administrasi Proyek (Kontrak 6 Bulan)',
            perusahaan: 'PT Pembangunan Paser Jaya',
            lokasi: 'Tanah Grogot',
            gaji: 'Rp 4 - 5 Juta',
            durasi: '6 Bulan',
            deadline: '2025-01-20',
            deskripsi: 'Membantu administrasi proyek pembangunan infrastruktur dengan kontrak waktu terbatas.'
        },
        {
            id: 2,
            posisi: 'Operator Produksi Musiman',
            perusahaan: 'CV Agro Paser Makmur',
            lokasi: 'Batu Sopang',
            gaji: 'Rp 3.5 - 4.5 Juta',
            durasi: '4 Bulan',
            deadline: '2025-01-15',
            deskripsi: 'Operator produksi untuk periode panen dengan sistem kontrak musiman.'
        },
        {
            id: 3,
            posisi: 'Surveyor Lapangan (Project Based)',
            perusahaan: 'Dinas Pekerjaan Umum Paser',
            lokasi: 'Kuaro',
            gaji: 'Rp 5 - 6 Juta',
            durasi: '3 Bulan',
            deadline: '2025-01-25',
            deskripsi: 'Surveyor untuk proyek pemetaan infrastruktur dengan sistem kontrak project based.'
        }
    ];

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#355485] mb-4">Lowongan TKWT Terbaru</h2>
                <p className="text-lg text-[#6b7280]">
                    Temukan peluang kerja kontrak di Kabupaten Paser
                </p>
            </div>

            <div className="space-y-4">
                {lowonganTKWT.map(lowongan => (
                    <div key={lowongan.id} className="bg-[#f9fafb] rounded-xl p-6 border border-[#e5e7eb] hover:shadow-md transition">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-[#355485] mb-2">{lowongan.posisi}</h3>
                                <p className="text-[#6b7280] mb-3">{lowongan.perusahaan} • {lowongan.lokasi}</p>
                                <p className="text-[#6b7280] mb-4">{lowongan.deskripsi}</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-[#cbdde9] text-[#355485] text-sm font-medium rounded-full">
                                        {lowongan.durasi}
                                    </span>
                                    <span className="px-3 py-1 bg-[#cbdde9] text-[#355485] text-sm font-medium rounded-full">
                                        {lowongan.gaji}
                                    </span>
                                </div>
                            </div>
                            <div className="text-right md:text-left whitespace-nowrap">
                                <p className="text-sm text-[#6b7280] mb-2">
                                    Tutup: {formatDate(lowongan.deadline)}
                                </p>
                                <button className="px-6 py-2 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] transition font-semibold">
                                    Lamar Sekarang
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function HakKewajibanTKWT() {
    const hakKewajiban = {
        hak: [
            'Mendapatkan upah sesuai kesepakatan dalam perjanjian kerja',
            'Mendapatkan cuti tahunan setelah bekerja 12 bulan berturut-turut',
            'Mendapatkan jaminan sosial ketenagakerjaan (BPJS Ketenagakerjaan)',
            'Mendapatkan perlindungan keselamatan dan kesehatan kerja',
            'Mendapatkan pembayaran upah saat tidak bekerja pada hari libur resmi',
            'Mendapatkan pesangon jika kontrak berakhir sebelum waktunya'
        ],
        kewajiban: [
            'Melaksanakan pekerjaan sesuai dengan perjanjian kerja',
            'Mematuhi peraturan perusahaan yang berlaku',
            'Menjaga kerahasiaan informasi perusahaan',
            'Bertanggung jawab atas pekerjaan yang diberikan',
            'Mengikuti prosedur keselamatan dan kesehatan kerja',
            'Menyelesaikan kewajiban selama masa kontrak'
        ]
    };

    return (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#355485] mb-4">Hak dan Kewajiban TKWT</h2>
                <p className="text-lg text-[#6b7280]">
                    Ketahui hak dan kewajiban Anda sebagai Tenaga Kontrak Waktu Terbatas
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Hak TKWT
                    </h3>
                    <ul className="space-y-3">
                        {hakKewajiban.hak.map((hak, index) => (
                            <li key={index} className="flex items-start">
                                <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-green-800">{hak}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Kewajiban TKWT
                    </h3>
                    <ul className="space-y-3">
                        {hakKewajiban.kewajiban.map((kewajiban, index) => (
                            <li key={index} className="flex items-start">
                                <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-blue-800">{kewajiban}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

function TipsPanduanTKWT() {
    const tipsTKWT = [
        {
            icon: '📝',
            title: 'Pahami Perjanjian Kerja',
            deskripsi: 'Baca dan pahami seluruh isi perjanjian kerja sebelum menandatanganinya.'
        },
        {
            icon: '💰',
            title: 'Ketahui Hak Finansial',
            deskripsi: 'Pastikan Anda memahami sistem pengupahan, tunjangan, dan bonus.'
        },
        {
            icon: '📅',
            title: 'Kelola Masa Kontrak',
            deskripsi: 'Rencanakan langkah selanjutnya sebelum kontrak berakhir.'
        },
        {
            icon: '📚',
            title: 'Tingkatkan Kompetensi',
            deskripsi: 'Manfaatkan masa kontrak untuk belajar dan meningkatkan skill.'
        }
    ];

    return (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#355485] mb-4">Tips & Panduan untuk TKWT</h2>
                <p className="text-lg text-[#6b7280]">
                    Panduan praktis untuk sukses sebagai Tenaga Kontrak Waktu Terbatas
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tipsTKWT.map((tip, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-sm hover:shadow-md transition text-center">
                        <div className="text-3xl mb-4">{tip.icon}</div>
                        <h3 className="text-lg font-semibold text-[#355485] mb-3">{tip.title}</h3>
                        <p className="text-[#6b7280] text-sm">{tip.deskripsi}</p>
                    </div>
                ))}
            </div>

            <div className="bg-[#cbdde9] rounded-xl p-6 mt-8">
                <h3 className="text-xl font-semibold text-[#355485] mb-4">Konsultasi TKWT</h3>
                <p className="text-[#355485] mb-4">
                    Butuh konsultasi lebih lanjut tentang hak-hak Anda sebagai TKWT?
                    DISNAKER Paser siap membantu dengan layanan konsultasi gratis.
                </p>
                <button className="px-6 py-2 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] transition font-semibold">
                    Jadwalkan Konsultasi
                </button>
            </div>
        </div>
    );
}

function RegulasiTKWT() {
    return (
        <div className="space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#355485] mb-4">Regulasi TKWT</h2>
                <p className="text-lg text-[#6b7280]">
                    Dasar hukum dan peraturan tentang Tenaga Kontrak Waktu Terbatas
                </p>
            </div>

            <div className="bg-[#f9fafb] rounded-xl p-6 border border-[#e5e7eb]">
                <h3 className="text-xl font-semibold text-[#355485] mb-4">Peraturan Terkait</h3>
                <ul className="space-y-3 text-[#6b7280]">
                    <li className="flex items-start">
                        <span className="text-[#4f90c6] mr-2">•</span>
                        <span>Undang-Undang No. 13 Tahun 2003 tentang Ketenagakerjaan</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#4f90c6] mr-2">•</span>
                        <span>Peraturan Pemerintah No. 35 Tahun 2021 tentang Perjanjian Kerja Waktu Tertentu</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#4f90c6] mr-2">•</span>
                        <span>Peraturan Menteri Ketenagakerjaan No. 6 Tahun 2023 tentang Tata Cara Pembuatan dan Pendaftaran Perjanjian Kerja Waktu Tertentu</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#4f90c6] mr-2">•</span>
                        <span>Peraturan Daerah Kabupaten Paser tentang Penempatan Tenaga Kerja</span>
                    </li>
                </ul>
            </div>

            <div className="bg-[#cbdde9] rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#355485] mb-4">Layanan DISNAKER untuk TKWT</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#355485]">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Pendaftaran dan pencatatan TKWT
                    </div>
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Konsultasi hukum ketenagakerjaan
                    </div>
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Mediasi perselisihan perjanjian kerja
                    </div>
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Bantuan pencarian lowongan TKWT
                    </div>
                </div>
            </div>
        </div>
    );
}

// Main TKWT Component dengan Routing
export default function TKWT() {
    const { tab } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(tab || 'pengertian');

    const tabs = [
        { id: 'pengertian', label: 'Pengertian TKWT', component: <PengertianTKWT /> },
        { id: 'lowongan', label: 'Lowongan TKWT', component: <LowonganTKWT /> },
        { id: 'hak-kewajiban', label: 'Hak & Kewajiban', component: <HakKewajibanTKWT /> },
        { id: 'tips-panduan', label: 'Tips & Panduan', component: <TipsPanduanTKWT /> },
        { id: 'regulasi', label: 'Regulasi', component: <RegulasiTKWT /> }
    ];

    useEffect(() => {
        if (tab && tab !== activeTab) {
            setActiveTab(tab);
        }
    }, [tab, activeTab]);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        navigate(`/disnaker/tkwt/${tabId}`);
    };

    const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#f9fafb]">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-[#355485] to-[#2a436c] text-white py-16">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h1 className="text-5xl font-bold mb-6">Tenaga Kontrak Waktu Terbatas (TKWT)</h1>
                        <p className="text-xl opacity-90 max-w-3xl mx-auto">
                            Informasi lengkap tentang pekerjaan kontrak, hak dan kewajiban, serta lowongan TKWT di Kabupaten Paser
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-12">
                    {/* Navigation Tabs */}
                    <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-2 mb-8">
                        <div className="flex flex-wrap gap-2">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => handleTabChange(tab.id)}
                                    className={`px-6 py-3 rounded-lg font-medium transition ${activeTab === tab.id
                                            ? 'bg-[#355485] text-white'
                                            : 'text-[#6b7280] hover:text-[#355485] hover:bg-[#f9fafb]'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-8">
                        {currentTab.component}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}

// Export individual components untuk routing
export {
    PengertianTKWT,
    LowonganTKWT,
    HakKewajibanTKWT,
    TipsPanduanTKWT,
    RegulasiTKWT
};