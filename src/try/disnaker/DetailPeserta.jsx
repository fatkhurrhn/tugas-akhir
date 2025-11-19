import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/try/Navbar';
import Footer from '../../components/try/Footer';

export default function DetailPeserta() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [peserta, setPeserta] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Data dummy peserta dan riwayat pelatihan
    const allPeserta = [
        {
            id: 1,
            nama: 'Ahmad Wijaya',
            email: 'ahmad.wijaya@email.com',
            telepon: '081234567890',
            alamat: 'Jl. Merdeka No. 123, Tanah Grogot, Kabupaten Paser',
            pekerjaan: 'Pengembang Web Freelance',
            pendidikan: 'S1 Teknik Informatika - Universitas Mulawarman',
            foto: 'https://picsum.photos/200/200?random=1',
            tanggalDaftar: '2023-05-15',
            status: 'Aktif',
            kategori: 'Teknologi',
            riwayatPelatihan: [
                {
                    id: 1,
                    namaPelatihan: 'Web Development Fundamentals',
                    penyelenggara: 'DISNAKER Paser',
                    tanggalMulai: '2024-01-10',
                    tanggalSelesai: '2024-03-15',
                    durasi: '60 Jam',
                    nilai: 'A',
                    sertifikat: 'Tersedia',
                    status: 'Selesai',
                    deskripsi: 'Pelatihan pengembangan web dasar menggunakan HTML, CSS, dan JavaScript'
                },
                {
                    id: 2,
                    namaPelatihan: 'React.js Advanced',
                    penyelenggara: 'DISNAKER Paser',
                    tanggalMulai: '2024-06-01',
                    tanggalSelesai: '2024-08-15',
                    durasi: '80 Jam',
                    nilai: 'A-',
                    sertifikat: 'Tersedia',
                    status: 'Selesai',
                    deskripsi: 'Pelatihan pengembangan aplikasi web modern menggunakan React.js dan Node.js'
                },
                {
                    id: 3,
                    namaPelatihan: 'Digital Marketing Strategy',
                    penyelenggara: 'DISNAKER Paser',
                    tanggalMulai: '2024-11-01',
                    tanggalSelesai: '2024-11-15',
                    durasi: '30 Jam',
                    nilai: 'B+',
                    sertifikat: 'Tersedia',
                    status: 'Selesai',
                    deskripsi: 'Strategi pemasaran digital untuk meningkatkan penjualan online'
                }
            ],
            skills: ['HTML/CSS', 'JavaScript', 'React.js', 'Node.js', 'UI/UX Design'],
            pencapaian: ['Lulusan Terbaik Web Development 2024', 'Proyek Terinovatif 2024']
        }
        // Data peserta lainnya sama seperti di halaman utama...
    ];

    useEffect(() => {
        const foundPeserta = allPeserta.find(p => p.id === parseInt(id));
        if (foundPeserta) {
            setPeserta(foundPeserta);
        } else {
            navigate('/pelatihan');
        }
        setIsLoading(false);
    }, [id, navigate]);

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    if (isLoading) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-[#f9fafb] flex items-center justify-center">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#355485] mx-auto"></div>
                        <p className="mt-4 text-[#6b7280]">Memuat data peserta...</p>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    if (!peserta) {
        return null;
    }

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#f9fafb]">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#355485] to-[#2a436c] text-white py-12">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex items-center gap-6">
                            <img
                                src={peserta.foto}
                                alt={peserta.nama}
                                className="w-24 h-24 rounded-full border-4 border-white"
                            />
                            <div>
                                <h1 className="text-4xl font-bold mb-2">{peserta.nama}</h1>
                                <p className="text-xl opacity-90">{peserta.pekerjaan}</p>
                                <p className="opacity-80">{peserta.email} • {peserta.telepon}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Riwayat Pelatihan */}
                            <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-6">
                                <h2 className="text-2xl font-bold text-[#355485] mb-6">Riwayat Pelatihan</h2>
                                <div className="space-y-6">
                                    {peserta.riwayatPelatihan.map(pelatihan => (
                                        <div key={pelatihan.id} className="border border-[#e5e7eb] rounded-lg p-4 hover:shadow-md transition">
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="text-lg font-semibold text-[#355485]">{pelatihan.namaPelatihan}</h3>
                                                <span className={`px-3 py-1 text-xs font-medium rounded-full ${pelatihan.status === 'Selesai'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                    }`}>
                                                    {pelatihan.status}
                                                </span>
                                            </div>
                                            <p className="text-[#6b7280] mb-3">{pelatihan.deskripsi}</p>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-[#6b7280]">
                                                <div>
                                                    <div className="font-medium text-[#355485]">Penyelenggara</div>
                                                    <div>{pelatihan.penyelenggara}</div>
                                                </div>
                                                <div>
                                                    <div className="font-medium text-[#355485]">Periode</div>
                                                    <div>{formatDate(pelatihan.tanggalMulai)} - {formatDate(pelatihan.tanggalSelesai)}</div>
                                                </div>
                                                <div>
                                                    <div className="font-medium text-[#355485]">Durasi</div>
                                                    <div>{pelatihan.durasi}</div>
                                                </div>
                                                <div>
                                                    <div className="font-medium text-[#355485]">Nilai</div>
                                                    <div className={`font-bold ${pelatihan.nilai === 'A' ? 'text-green-600' :
                                                            pelatihan.nilai === 'A-' ? 'text-blue-600' :
                                                                pelatihan.nilai === 'B+' ? 'text-yellow-600' : 'text-gray-600'
                                                        }`}>
                                                        {pelatihan.nilai}
                                                    </div>
                                                </div>
                                            </div>
                                            {pelatihan.sertifikat === 'Tersedia' && (
                                                <button className="mt-3 px-4 py-2 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] transition text-sm">
                                                    Unduh Sertifikat
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Skills & Pencapaian */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Skills */}
                                <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-6">
                                    <h3 className="text-xl font-semibold text-[#355485] mb-4">Skills</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {peserta.skills.map((skill, index) => (
                                            <span key={index} className="px-3 py-1 bg-[#cbdde9] text-[#355485] text-sm rounded-full">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Pencapaian */}
                                <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-6">
                                    <h3 className="text-xl font-semibold text-[#355485] mb-4">Pencapaian</h3>
                                    <ul className="space-y-2">
                                        {peserta.pencapaian.map((pencapaian, index) => (
                                            <li key={index} className="flex items-center text-[#6b7280]">
                                                <svg className="w-5 h-5 text-[#4f90c6] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                {pencapaian}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Profile Info */}
                            <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-6">
                                <h3 className="text-lg font-semibold text-[#355485] mb-4">Informasi Profil</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-[#6b7280]">Status:</span>
                                        <span className={`font-medium ${peserta.status === 'Aktif' ? 'text-green-600' : 'text-red-600'
                                            }`}>
                                            {peserta.status}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-[#6b7280]">Kategori:</span>
                                        <span className="font-medium text-[#355485]">{peserta.kategori}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-[#6b7280]">Tanggal Daftar:</span>
                                        <span className="font-medium text-[#355485]">{formatDate(peserta.tanggalDaftar)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-[#6b7280]">Total Pelatihan:</span>
                                        <span className="font-medium text-[#355485]">{peserta.riwayatPelatihan.length}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-6">
                                <h3 className="text-lg font-semibold text-[#355485] mb-4">Kontak</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center text-[#6b7280]">
                                        <svg className="w-4 h-4 mr-3 text-[#4f90c6]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        {peserta.email}
                                    </div>
                                    <div className="flex items-center text-[#6b7280]">
                                        <svg className="w-4 h-4 mr-3 text-[#4f90c6]" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                        {peserta.telepon}
                                    </div>
                                    <div className="flex items-start text-[#6b7280]">
                                        <svg className="w-4 h-4 mr-3 mt-0.5 text-[#4f90c6] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        {peserta.alamat}
                                    </div>
                                </div>
                            </div>

                            {/* Education & Work */}
                            <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-6">
                                <h3 className="text-lg font-semibold text-[#355485] mb-4">Pendidikan & Pekerjaan</h3>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <div className="text-[#6b7280]">Pendidikan Terakhir:</div>
                                        <div className="font-medium text-[#355485]">{peserta.pendidikan}</div>
                                    </div>
                                    <div>
                                        <div className="text-[#6b7280]">Pekerjaan:</div>
                                        <div className="font-medium text-[#355485]">{peserta.pekerjaan}</div>
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