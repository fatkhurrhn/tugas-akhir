import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/try/Navbar';
import Footer from '../../components/try/Footer';

// Component untuk setiap tab
function PengertianPKWT() {
    const faqData = [
        {
            question: "Apa beda PKWT dan PKWTT?",
            answer: "PKWT untuk pekerjaan tertentu dan waktu terbatas, sedangkan PKWTT (Perjanjian Kerja Waktu Tidak Tertentu) untuk pekerjaan tetap tanpa batas waktu."
        },
        {
            question: "Berapa lama maksimal masa PKWT?",
            answer: "Maksimal 5 tahun sesuai UU Ketenagakerjaan, dengan perpanjangan maksimal 2 kali dan masa istirahat minimal 30 hari antara perpanjangan."
        },
        {
            question: "Apakah pekerja PKWT berhak mendapat THR?",
            answer: "Ya, pekerja PKWT berhak mendapat THR setelah bekerja secara terus-menerus selama 1 bulan atau lebih."
        },
        {
            question: "Bagaimana jika PKWT berakhir?",
            answer: "Perusahaan wajib memberikan uang pesangon dan/atau uang penghargaan masa kerja sesuai ketentuan yang berlaku."
        }
    ];

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-200">
                    <h3 className="text-xl font-bold text-[#355485] mb-4 flex items-center">
                        <span className="text-2xl mr-3">🎯</span>
                        Karakteristik PKWT
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <div className="w-6 h-6 bg-[#355485] text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                                1
                            </div>
                            <span className="text-[#355485]">Untuk pekerjaan tertentu dan sementara</span>
                        </li>
                        <li className="flex items-start">
                            <div className="w-6 h-6 bg-[#355485] text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                                2
                            </div>
                            <span className="text-[#355485]">Jangka waktu maksimal 5 tahun</span>
                        </li>
                        <li className="flex items-start">
                            <div className="w-6 h-6 bg-[#355485] text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                                3
                            </div>
                            <span className="text-[#355485]">Harus dibuat secara tertulis</span>
                        </li>
                        <li className="flex items-start">
                            <div className="w-6 h-6 bg-[#355485] text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                                4
                            </div>
                            <span className="text-[#355485]">Didaftarkan ke instansi ketenagakerjaan</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 border border-green-200">
                    <h3 className="text-xl font-bold text-[#355485] mb-4 flex items-center">
                        <span className="text-2xl mr-3">📅</span>
                        Kapan Digunakan?
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                                🌾
                            </div>
                            <span className="text-[#355485]">Pekerjaan musiman</span>
                        </li>
                        <li className="flex items-start">
                            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                                🏗️
                            </div>
                            <span className="text-[#355485]">Pekerjaan proyek tertentu</span>
                        </li>
                        <li className="flex items-start">
                            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                                ✅
                            </div>
                            <span className="text-[#355485]">Pekerjaan sekali selesai</span>
                        </li>
                        <li className="flex items-start">
                            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                                🔬
                            </div>
                            <span className="text-[#355485]">Pekerjaan baru dalam percobaan</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-8">
                <h3 className="text-2xl font-bold text-[#355485] mb-6 flex items-center">
                    <span className="text-2xl mr-3">❓</span>
                    Pertanyaan Umum
                </h3>
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-sm hover:shadow-md transition">
                            <h4 className="font-semibold text-[#355485] mb-3 flex items-center">
                                <span className="text-blue-500 mr-2">Q:</span>
                                {faq.question}
                            </h4>
                            <p className="text-[#6b7280] pl-6 border-l-2 border-[#4f90c6]">
                                <span className="text-green-500 font-medium mr-2">A:</span>
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function SyaratKetentuanPKWT() {
    const syaratKetentuan = [
        {
            title: "Syarat Sah PKWT",
            items: [
                "Dibuat secara tertulis dalam bahasa Indonesia",
                "Mencantumkan identitas lengkap kedua belah pihak",
                "Menyebutkan jenis pekerjaan yang diperjanjikan",
                "Mencantumkan besarnya upah dan cara pembayarannya",
                "Menyebutkan jangka waktu berlakunya perjanjian",
                "Mencantumkan tempat pekerjaan"
            ]
        },
        {
            title: "Jenis Pekerjaan yang Bisa PKWT",
            items: [
                "Pekerjaan yang sekali selesai atau sementara",
                "Pekerjaan yang diperkirakan penyelesaiannya ≤ 3 tahun",
                "Pekerjaan musiman",
                "Pekerjaan yang berhubungan dengan produk baru, aktivitas baru, atau produk tambahan yang masih dalam percobaan",
                "Pekerjaan yang bersifat musiman"
            ]
        }
    ];

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {syaratKetentuan.map((section, index) => (
                    <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl p-6 border border-purple-200">
                        <h3 className="text-xl font-bold text-[#355485] mb-4 flex items-center">
                            <span className="text-2xl mr-3">{index === 0 ? '📝' : '💼'}</span>
                            {section.title}
                        </h3>
                        <ul className="space-y-3">
                            {section.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start">
                                    <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                                        {itemIndex + 1}
                                    </div>
                                    <span className="text-[#355485]">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Legal Requirements */}
            <div className="bg-gradient-to-r from-[#355485] to-[#4f90c6] rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="text-2xl mr-3">⚖️</span>
                    Persyaratan Legal
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-white text-[#355485] rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">
                            🇮🇩
                        </div>
                        Harus dibuat dalam bahasa Indonesia
                    </div>
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-white text-[#355485] rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">
                            📋
                        </div>
                        Wajib didaftarkan ke Dinas Tenaga Kerja
                    </div>
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-white text-[#355485] rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">
                            🔄
                        </div>
                        Maksimal 2 kali perpanjangan
                    </div>
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-white text-[#355485] rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">
                            ⏰
                        </div>
                        Masa istirahat minimal 30 hari
                    </div>
                </div>
            </div>
        </div>
    );
}

function HakKewajibanPKWT() {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Hak Pekerja */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 border border-green-200">
                    <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                        <span className="text-2xl mr-3">🛡️</span>
                        Hak Pekerja PKWT
                    </h3>
                    <ul className="space-y-4">
                        {[
                            "Upah sesuai kesepakatan",
                            "Jaminan sosial (BPJS)",
                            "Cuti tahunan setelah 12 bulan",
                            "Uang pesangon saat berakhir",
                            "Keselamatan dan kesehatan kerja"
                        ].map((hak, index) => (
                            <li key={index} className="flex items-center">
                                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mr-4 flex-shrink-0">
                                    ✓
                                </div>
                                <span className="text-green-800 font-medium">{hak}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Kewajiban Pekerja */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-6 border border-blue-200">
                    <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                        <span className="text-2xl mr-3">📋</span>
                        Kewajiban Pekerja PKWT
                    </h3>
                    <ul className="space-y-4">
                        {[
                            "Melaksanakan pekerjaan dengan baik",
                            "Mematuhi peraturan perusahaan",
                            "Menjaga kerahasiaan perusahaan",
                            "Menyelesaikan pekerjaan tepat waktu",
                            "Mengikuti prosedur K3"
                        ].map((kewajiban, index) => (
                            <li key={index} className="flex items-center">
                                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-4 flex-shrink-0">
                                    ✓
                                </div>
                                <span className="text-blue-800 font-medium">{kewajiban}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

function TemplateDokumenPKWT() {
    const templateDokumen = [
        {
            nama: "Template PKWT Proyek Konstruksi",
            jenis: "Konstruksi",
            ukuran: "45 KB",
            format: "PDF",
            link: "#"
        },
        {
            nama: "Template PKWT Pekerja Musiman",
            jenis: "Pertanian",
            ukuran: "38 KB",
            format: "PDF",
            link: "#"
        },
        {
            nama: "Template PKWT Teknologi Informasi",
            jenis: "Teknologi",
            ukuran: "42 KB",
            format: "DOCX",
            link: "#"
        },
        {
            nama: "Template PKWT Retail",
            jenis: "Retail",
            ukuran: "40 KB",
            format: "PDF",
            link: "#"
        }
    ];

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {templateDokumen.map((template, index) => (
                    <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl p-6 border border-orange-200 hover:shadow-lg transition transform hover:-translate-y-1">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-lg font-bold text-[#355485] mb-2">{template.nama}</h3>
                                <div className="flex items-center space-x-3 text-sm text-[#6b7280]">
                                    <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-xs font-medium">
                                        {template.jenis}
                                    </span>
                                    <span>{template.ukuran}</span>
                                    <span>{template.format}</span>
                                </div>
                            </div>
                            <div className="text-3xl text-orange-500">
                                {template.format === 'PDF' ? '📄' : '📝'}
                            </div>
                        </div>
                        <button className="w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl hover:from-orange-600 hover:to-amber-600 transition font-semibold shadow-md">
                            📥 Download Template
                        </button>
                    </div>
                ))}
            </div>

            <div className="bg-gradient-to-r from-[#355485] to-[#4f90c6] rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
                    <span className="text-3xl mr-3">🎯</span>
                    Butuh Template Khusus?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                    Tim hukum DISNAKER siap membantu membuat template PKWT yang disesuaikan dengan kebutuhan spesifik perusahaan Anda.
                </p>
                <button className="px-8 py-4 bg-white text-[#355485] rounded-xl hover:bg-gray-100 transition font-bold text-lg shadow-lg">
                    🗓️ Konsultasi Template Khusus
                </button>
            </div>
        </div>
    );
}

function KonsultasiPKWT() {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-6 border border-purple-200">
                    <h3 className="text-xl font-bold text-[#355485] mb-4 flex items-center">
                        <span className="text-2xl mr-3">💼</span>
                        Layanan Konsultasi
                    </h3>
                    <ul className="space-y-4">
                        {[
                            "Review dan analisis kontrak PKWT",
                            "Bantuan penyusunan dokumen",
                            "Mediasi perselisihan",
                            "Pendaftaran ke Dinas Tenaga Kerja",
                            "Konsultasi hukum ketenagakerjaan"
                        ].map((layanan, index) => (
                            <li key={index} className="flex items-center">
                                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm mr-4 flex-shrink-0">
                                    {index + 1}
                                </div>
                                <span className="text-[#355485] font-medium">{layanan}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl p-6 border border-cyan-200">
                    <h3 className="text-xl font-bold text-[#355485] mb-4 flex items-center">
                        <span className="text-2xl mr-3">📞</span>
                        Hubungi Kami
                    </h3>
                    <div className="space-y-4 text-[#355485]">
                        <div className="flex items-center p-3 bg-white rounded-lg">
                            <div className="w-10 h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center text-lg mr-4">
                                📞
                            </div>
                            <div>
                                <div className="font-semibold">Telepon</div>
                                <div>(0543) 12345</div>
                            </div>
                        </div>
                        <div className="flex items-center p-3 bg-white rounded-lg">
                            <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-lg mr-4">
                                📧
                            </div>
                            <div>
                                <div className="font-semibold">Email</div>
                                <div>pkwt@disnaker.paserkab.go.id</div>
                            </div>
                        </div>
                        <div className="flex items-center p-3 bg-white rounded-lg">
                            <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg mr-4">
                                📍
                            </div>
                            <div>
                                <div className="font-semibold">Alamat</div>
                                <div className="text-sm">Jl. Jenderal Sudirman No. 123, Tanah Grogot</div>
                            </div>
                        </div>
                    </div>
                    <button className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition font-bold text-lg shadow-md">
                        🗓️ Jadwalkan Konsultasi
                    </button>
                </div>
            </div>
        </div>
    );
}

// Main PKWT Component dengan Routing
export default function PKWT() {
    const { tab } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(tab || 'pengertian');

    const tabs = [
        { 
            id: 'pengertian', 
            label: 'Pengertian PKWT',
            icon: '📋',
            component: <PengertianPKWT />
        },
        { 
            id: 'syarat', 
            label: 'Syarat & Ketentuan',
            icon: '⚖️',
            component: <SyaratKetentuanPKWT />
        },
        { 
            id: 'hak-kewajiban', 
            label: 'Hak & Kewajiban',
            icon: '👥',
            component: <HakKewajibanPKWT />
        },
        { 
            id: 'template', 
            label: 'Template Dokumen',
            icon: '📄',
            component: <TemplateDokumenPKWT />
        },
        { 
            id: 'konsultasi', 
            label: 'Konsultasi',
            icon: '💬',
            component: <KonsultasiPKWT />
        }
    ];

    useEffect(() => {
        if (tab && tab !== activeTab) {
            setActiveTab(tab);
        }
    }, [tab, activeTab]);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        navigate(`/pkwt/${tabId}`);
    };

    const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#f9fafb]">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-[#355485] to-[#2a436c] text-white py-16">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h1 className="text-5xl font-bold mb-6">Perjanjian Kerja Waktu Tertentu (PKWT)</h1>
                        <p className="text-xl opacity-90 max-w-3xl mx-auto">
                            Informasi lengkap tentang kontrak kerja sementara dengan jangka waktu yang telah ditentukan
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar Tabs */}
                        <div className="lg:w-1/4">
                            <div className="bg-white rounded-xl shadow-lg border border-[#e5e7eb] sticky top-6">
                                <div className="p-6 border-b border-[#e5e7eb]">
                                    <h3 className="text-lg font-bold text-[#355485]">Navigasi PKWT</h3>
                                </div>
                                <nav className="p-4">
                                    {tabs.map(tab => (
                                        <button
                                            key={tab.id}
                                            onClick={() => handleTabChange(tab.id)}
                                            className={`w-full flex items-center px-4 py-4 mb-2 rounded-xl transition-all ${
                                                activeTab === tab.id
                                                    ? 'bg-gradient-to-r from-[#355485] to-[#4f90c6] text-white shadow-lg transform scale-105'
                                                    : 'text-[#6b7280] hover:bg-[#f9fafb] hover:text-[#355485] hover:shadow-md'
                                            }`}
                                        >
                                            <span className="text-xl mr-3">{tab.icon}</span>
                                            <span className="font-medium text-left">{tab.label}</span>
                                            {activeTab === tab.id && (
                                                <svg className="w-5 h-5 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                        </button>
                                    ))}
                                </nav>
                                
                                {/* Quick Stats */}
                                <div className="p-4 border-t border-[#e5e7eb] bg-[#f9fafb] rounded-b-xl">
                                    <h4 className="font-semibold text-[#355485] mb-3">Fakta Cepat</h4>
                                    <div className="space-y-2 text-sm text-[#6b7280]">
                                        <div className="flex justify-between">
                                            <span>Maksimal Masa:</span>
                                            <span className="font-medium text-[#355485]">5 Tahun</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Perpanjangan:</span>
                                            <span className="font-medium text-[#355485]">2 Kali</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Masa Istirahat:</span>
                                            <span className="font-medium text-[#355485]">30 Hari</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:w-3/4">
                            <div className="bg-white rounded-xl shadow-lg border border-[#e5e7eb] overflow-hidden">
                                {/* Tab Content Header */}
                                <div className="bg-gradient-to-r from-[#355485] to-[#4f90c6] text-white p-6">
                                    <h2 className="text-2xl font-bold">
                                        {currentTab.label}
                                    </h2>
                                    <p className="opacity-90 mt-2">
                                        {activeTab === 'pengertian' && 'Memahami konsep dasar Perjanjian Kerja Waktu Tertentu'}
                                        {activeTab === 'syarat' && 'Persyaratan legal dan ketentuan yang harus dipenuhi'}
                                        {activeTab === 'hak-kewajiban' && 'Hak yang diperoleh dan kewajiban yang harus dipenuhi'}
                                        {activeTab === 'template' && 'Template dokumen siap pakai untuk berbagai sektor'}
                                        {activeTab === 'konsultasi' && 'Layanan bantuan dan konsultasi profesional'}
                                    </p>
                                </div>

                                {/* Tab Content */}
                                <div className="p-8">
                                    {currentTab.component}
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

// Export individual components untuk routing
export { 
    PengertianPKWT, 
    SyaratKetentuanPKWT, 
    HakKewajibanPKWT, 
    TemplateDokumenPKWT, 
    KonsultasiPKWT 
};