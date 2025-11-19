import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/try/Navbar';
import Footer from '../../components/try/Footer';

export default function Pelatihan() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterKategori, setFilterKategori] = useState('');

    // Data dummy peserta pelatihan
    const pesertaPelatihan = [
        {
            id: 1,
            nama: 'Ahmad Wijaya',
            email: 'ahmad.wijaya@email.com',
            telepon: '081234567890',
            alamat: 'Jl. Merdeka No. 123, Tanah Grogot',
            pekerjaan: 'Pengembang Web',
            pendidikan: 'S1 Teknik Informatika',
            foto: 'https://picsum.photos/100/100?random=1',
            totalPelatihan: 3,
            pelatihanTerakhir: '2024-11-15',
            status: 'Aktif',
            kategori: 'Teknologi'
        },
        {
            id: 2,
            nama: 'Siti Rahmawati',
            email: 'siti.rahma@email.com',
            telepon: '081234567891',
            alamat: 'Jl. Diponegoro No. 45, Batu Engau',
            pekerjaan: 'Digital Marketer',
            pendidikan: 'D3 Manajemen Pemasaran',
            foto: 'https://picsum.photos/100/100?random=2',
            totalPelatihan: 2,
            pelatihanTerakhir: '2024-10-20',
            status: 'Aktif',
            kategori: 'Marketing'
        },
        {
            id: 3,
            nama: 'Budi Santoso',
            email: 'budi.santoso@email.com',
            telepon: '081234567892',
            alamat: 'Jl. Pahlawan No. 67, Kuaro',
            pekerjaan: 'Operator Produksi',
            pendidikan: 'SMK Teknik Mesin',
            foto: 'https://picsum.photos/100/100?random=3',
            totalPelatihan: 1,
            pelatihanTerakhir: '2024-09-10',
            status: 'Aktif',
            kategori: 'Manufaktur'
        },
        {
            id: 4,
            nama: 'Maya Sari',
            email: 'maya.sari@email.com',
            telepon: '081234567893',
            alamat: 'Jl. Gatot Subroto No. 89, Paser Belengkong',
            pekerjaan: 'Desainer Grafis',
            pendidikan: 'S1 Desain Komunikasi Visual',
            foto: 'https://picsum.photos/100/100?random=4',
            totalPelatihan: 4,
            pelatihanTerakhir: '2024-12-01',
            status: 'Aktif',
            kategori: 'Desain'
        },
        {
            id: 5,
            nama: 'Rizki Pratama',
            email: 'rizki.pratama@email.com',
            telepon: '081234567894',
            alamat: 'Jl. Ahmad Yani No. 12, Tanah Grogot',
            pekerjaan: 'Analisis Data',
            pendidikan: 'S2 Statistika',
            foto: 'https://picsum.photos/100/100?random=5',
            totalPelatihan: 2,
            pelatihanTerakhir: '2024-08-15',
            status: 'Tidak Aktif',
            kategori: 'Teknologi'
        },
        {
            id: 6,
            nama: 'Dewi Anggraini',
            email: 'dewi.anggraini@email.com',
            telepon: '081234567895',
            alamat: 'Jl. Sudirman No. 34, Batu Sopang',
            pekerjaan: 'Wirausaha',
            pendidikan: 'S1 Ekonomi',
            foto: 'https://picsum.photos/100/100?random=6',
            totalPelatihan: 3,
            pelatihanTerakhir: '2024-11-30',
            status: 'Aktif',
            kategori: 'Kewirausahaan'
        },
        {
            id: 7,
            nama: 'Joko Widodo',
            email: 'joko.widodo@email.com',
            telepon: '081234567896',
            alamat: 'Jl. Kenanga No. 56, Muara Komam',
            pekerjaan: 'Petani',
            pendidikan: 'SMA',
            foto: 'https://picsum.photos/100/100?random=7',
            totalPelatihan: 1,
            pelatihanTerakhir: '2024-07-20',
            status: 'Aktif',
            kategori: 'Pertanian'
        },
        {
            id: 8,
            nama: 'Linda Permata',
            email: 'linda.permata@email.com',
            telepon: '081234567897',
            alamat: 'Jl. Mawar No. 78, Tanah Grogot',
            pekerjaan: 'Customer Service',
            pendidikan: 'D3 Administrasi Bisnis',
            foto: 'https://picsum.photos/100/100?random=8',
            totalPelatihan: 2,
            pelatihanTerakhir: '2024-10-05',
            status: 'Aktif',
            kategori: 'Layanan'
        }
    ];

    // Filter peserta berdasarkan pencarian dan kategori
    const filteredPeserta = pesertaPelatihan.filter(peserta => {
        const matchesSearch = peserta.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
            peserta.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            peserta.pekerjaan.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesKategori = filterKategori === '' || peserta.kategori === filterKategori;

        return matchesSearch && matchesKategori;
    });

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    const kategoriList = [...new Set(pesertaPelatihan.map(p => p.kategori))];

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#f9fafb]">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-[#355485] to-[#2a436c] text-white py-16">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h1 className="text-5xl font-bold mb-6">Database Peserta Pelatihan</h1>
                        <p className="text-xl opacity-90 max-w-3xl mx-auto">
                            Tracking dan manajemen peserta program pelatihan DISNAKER Kabupaten Paser
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-12">
                    {/* Search & Filter Section */}
                    <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-6 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="md:col-span-2">
                                <input
                                    type="text"
                                    placeholder="Cari nama, email, atau pekerjaan peserta..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent text-[#355485]"
                                />
                            </div>
                            <div>
                                <select
                                    value={filterKategori}
                                    onChange={(e) => setFilterKategori(e.target.value)}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent text-[#355485]"
                                >
                                    <option value="">Semua Kategori</option>
                                    {kategoriList.map(kategori => (
                                        <option key={kategori} value={kategori}>{kategori}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Results Info */}
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-[#355485]">
                                Daftar Peserta Pelatihan
                                {searchTerm && (
                                    <span className="text-[#4f90c6]"> untuk "{searchTerm}"</span>
                                )}
                            </h2>
                            <p className="text-[#6b7280] mt-1">
                                Menampilkan {filteredPeserta.length} dari {pesertaPelatihan.length} peserta
                            </p>
                        </div>
                        <div className="text-sm text-[#9ca3af]">
                            Diperbarui hari ini
                        </div>
                    </div>

                    {/* Participants Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredPeserta.length > 0 ? (
                            filteredPeserta.map(peserta => (
                                <div
                                    key={peserta.id}
                                    className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-6 hover:shadow-md transition cursor-pointer group"
                                    onClick={() => navigate(`/pelatihan/detail/${peserta.id}`)}
                                >
                                    <div className="text-center">
                                        {/* Profile Photo */}
                                        <img
                                            src={peserta.foto}
                                            alt={peserta.nama}
                                            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-[#cbdde9] group-hover:border-[#4f90c6] transition"
                                        />

                                        {/* Name & Status */}
                                        <h3 className="text-lg font-bold text-[#355485] group-hover:text-[#4f90c6] transition mb-2">
                                            {peserta.nama}
                                        </h3>
                                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${peserta.status === 'Aktif'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                            }`}>
                                            {peserta.status}
                                        </span>

                                        {/* Basic Info */}
                                        <div className="space-y-2 text-sm text-[#6b7280] mb-4">
                                            <p className="flex items-center justify-center">
                                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                                </svg>
                                                {peserta.email}
                                            </p>
                                            <p className="flex items-center justify-center">
                                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                </svg>
                                                {peserta.telepon}
                                            </p>
                                        </div>

                                        {/* Category & Training Info */}
                                        <div className="border-t border-[#e5e7eb] pt-4">
                                            <div className="flex justify-between items-center text-xs text-[#6b7280] mb-2">
                                                <span>Kategori:</span>
                                                <span className="font-medium text-[#355485]">{peserta.kategori}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-xs text-[#6b7280] mb-2">
                                                <span>Total Pelatihan:</span>
                                                <span className="font-medium text-[#355485]">{peserta.totalPelatihan}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-xs text-[#6b7280]">
                                                <span>Terakhir:</span>
                                                <span className="font-medium text-[#355485]">{formatDate(peserta.pelatihanTerakhir)}</span>
                                            </div>
                                        </div>

                                        {/* View Details Button */}
                                        <button className="w-full mt-4 px-4 py-2 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] transition font-medium text-sm">
                                            Lihat Detail
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-16 bg-white rounded-xl border border-[#e5e7eb]">
                                <div className="text-[#9ca3af] mb-4">
                                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-[#355485] mb-2">Tidak ada peserta yang cocok</h3>
                                <p className="text-[#6b7280] mb-4">Coba ubah kata kunci pencarian atau filter kategori.</p>
                                <button
                                    onClick={() => {
                                        setSearchTerm('');
                                        setFilterKategori('');
                                    }}
                                    className="px-6 py-2 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] transition font-semibold"
                                >
                                    Reset Pencarian
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Statistics */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-[#e5e7eb]">
                            <div className="text-3xl font-bold text-[#355485] mb-2">{pesertaPelatihan.length}</div>
                            <div className="text-[#6b7280]">Total Peserta</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-[#e5e7eb]">
                            <div className="text-3xl font-bold text-[#355485] mb-2">
                                {pesertaPelatihan.filter(p => p.status === 'Aktif').length}
                            </div>
                            <div className="text-[#6b7280]">Peserta Aktif</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-[#e5e7eb]">
                            <div className="text-3xl font-bold text-[#355485] mb-2">
                                {pesertaPelatihan.reduce((total, p) => total + p.totalPelatihan, 0)}
                            </div>
                            <div className="text-[#6b7280]">Total Pelatihan</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-[#e5e7eb]">
                            <div className="text-3xl font-bold text-[#355485] mb-2">{kategoriList.length}</div>
                            <div className="text-[#6b7280]">Kategori Pelatihan</div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}