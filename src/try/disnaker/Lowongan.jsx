import React, { useState } from 'react';
import Navbar from '../../components/try/Navbar';
import Footer from '../../components/try/Footer';

export default function Lowongan2() {
    // Dummy Data Lowongan
    const allJobs = [
        {
            id: 1,
            posisi: 'Frontend Developer',
            perusahaan: 'PT Solusi Digital Indonesia',
            logo: 'https://picsum.photos/200/200?random=1',
            lokasi: 'Bandung',
            kategori: 'Teknologi',
            pendidikan: 'S1',
            gaji: 'Rp 8 - 12 Juta',
            tanggalTutup: '2025-01-15',
            type: 'Full-time',
            experience: '2-3 tahun',
            featured: true
        },
        {
            id: 2,
            posisi: 'Data Scientist',
            perusahaan: 'Tech Analytics Corp',
            logo: 'https://picsum.photos/200/200?random=2',
            lokasi: 'Jakarta',
            kategori: 'Teknologi',
            pendidikan: 'S2',
            gaji: 'Rp 15 - 20 Juta',
            tanggalTutup: '2025-01-20',
            type: 'Full-time',
            experience: '3-5 tahun',
            featured: true
        },
        {
            id: 3,
            posisi: 'Marketing Manager',
            perusahaan: 'Creative Solutions',
            logo: 'https://picsum.photos/200/200?random=3',
            lokasi: 'Surabaya',
            kategori: 'Marketing',
            pendidikan: 'S1',
            gaji: 'Rp 10 - 15 Juta',
            tanggalTutup: '2025-01-10',
            type: 'Full-time',
            experience: '4-6 tahun',
            featured: false
        },
        {
            id: 4,
            posisi: 'Graphic Designer',
            perusahaan: 'Design Studio Pro',
            logo: 'https://picsum.photos/200/200?random=4',
            lokasi: 'Yogyakarta',
            kategori: 'Desain',
            pendidikan: 'D3',
            gaji: 'Rp 5 - 8 Juta',
            tanggalTutup: '2025-01-08',
            type: 'Full-time',
            experience: '1-2 tahun',
            featured: false
        },
        {
            id: 5,
            posisi: 'Accountant',
            perusahaan: 'Finance Plus',
            logo: 'https://picsum.photos/200/200?random=5',
            lokasi: 'Jakarta',
            kategori: 'Keuangan',
            pendidikan: 'S1',
            gaji: 'Rp 7 - 10 Juta',
            tanggalTutup: '2025-01-12',
            type: 'Full-time',
            experience: '2-3 tahun',
            featured: false
        },
        {
            id: 6,
            posisi: 'Customer Service',
            perusahaan: 'Service Excellence',
            logo: 'https://picsum.photos/200/200?random=6',
            lokasi: 'Bandung',
            kategori: 'Layanan',
            pendidikan: 'D3',
            gaji: 'Rp 4 - 6 Juta',
            tanggalTutup: '2025-01-05',
            type: 'Full-time',
            experience: '0-1 tahun',
            featured: false
        }
    ];

    // State Filter
    const [filters, setFilters] = useState({
        keyword: '',
        kategori: '',
        lokasi: '',
        pendidikan: '',
        type: ''
    });

    // Ekstrak unique values untuk filter
    const kategoriList = [...new Set(allJobs.map(j => j.kategori))];
    const lokasiList = [...new Set(allJobs.map(j => j.lokasi))];
    const pendidikanList = [...new Set(allJobs.map(j => j.pendidikan))];
    const typeList = [...new Set(allJobs.map(j => j.type))];

    // Filter lowongan
    const filteredJobs = allJobs.filter(job => {
        return (
            (job.posisi.toLowerCase().includes(filters.keyword.toLowerCase()) ||
                job.perusahaan.toLowerCase().includes(filters.keyword.toLowerCase())) &&
            (filters.kategori === '' || job.kategori === filters.kategori) &&
            (filters.lokasi === '' || job.lokasi === filters.lokasi) &&
            (filters.pendidikan === '' || job.pendidikan === filters.pendidikan) &&
            (filters.type === '' || job.type === filters.type)
        );
    });

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

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#f9fafb]">
                {/* Header */}
                {/* <div className="bg-white shadow-sm border-b border-[#e5e7eb]">
                    <div className="max-w-7xl mx-auto px-6 py-12">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-[#355485] mb-4">Temukan Lowongan Kerja</h1>
                            <p className="text-xl text-[#6b7280] max-w-2xl mx-auto">
                                Jelajahi berbagai peluang karir dari perusahaan terpercaya
                            </p>
                        </div> */}

                        {/* Search Bar */}
                        {/* <div className="max-w-2xl mx-auto mt-8">
                            <div className="bg-white rounded-lg shadow-sm border border-[#e5e7eb] p-2">
                                <div className="flex">
                                    <input
                                        type="text"
                                        placeholder="Cari posisi, perusahaan, atau kata kunci..."
                                        value={filters.keyword}
                                        onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
                                        className="flex-1 px-4 py-3 text-[#355485] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                    />
                                    <button className="ml-2 px-8 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] transition font-semibold">
                                        Cari
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* Header */}
                <div className="bg-gradient-to-r from-[#355485] to-[#2a436c] text-white py-16">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h1 className="text-5xl font-bold mb-6">Temukan Lowongan Kerja</h1>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto">
                            Jelajahi berbagai peluang karir dari perusahaan terpercaya
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto mt-8">
                            <div className="bg-white rounded-lg shadow-lg p-2">
                                <div className="flex">
                                    <input
                                        type="text"
                                        placeholder="Cari posisi, perusahaan, atau kata kunci..."
                                        v value={filters.keyword}
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

                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar Filters */}
                        <div className="lg:w-1/4">
                            <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] p-6 sticky top-6">
                                <h3 className="text-lg font-semibold text-[#355485] mb-4">Filter Lowongan</h3>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-[#355485] mb-2">Kategori</label>
                                        <select
                                            value={filters.kategori}
                                            onChange={(e) => setFilters({ ...filters, kategori: e.target.value })}
                                            className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent text-[#355485]"
                                        >
                                            <option value="">Semua Kategori</option>
                                            {kategoriList.map(kat => (
                                                <option key={kat} value={kat}>{kat}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#355485] mb-2">Lokasi</label>
                                        <select
                                            value={filters.lokasi}
                                            onChange={(e) => setFilters({ ...filters, lokasi: e.target.value })}
                                            className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent text-[#355485]"
                                        >
                                            <option value="">Semua Lokasi</option>
                                            {lokasiList.map(loc => (
                                                <option key={loc} value={loc}>{loc}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#355485] mb-2">Pendidikan</label>
                                        <select
                                            value={filters.pendidikan}
                                            onChange={(e) => setFilters({ ...filters, pendidikan: e.target.value })}
                                            className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent text-[#355485]"
                                        >
                                            <option value="">Semua Pendidikan</option>
                                            {pendidikanList.map(pdd => (
                                                <option key={pdd} value={pdd}>{pdd}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#355485] mb-2">Tipe Pekerjaan</label>
                                        <select
                                            value={filters.type}
                                            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                                            className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent text-[#355485]"
                                        >
                                            <option value="">Semua Tipe</option>
                                            {typeList.map(type => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <button
                                        onClick={() => setFilters({
                                            keyword: '',
                                            kategori: '',
                                            lokasi: '',
                                            pendidikan: '',
                                            type: ''
                                        })}
                                        className="w-full py-2 border border-[#e5e7eb] text-[#6b7280] rounded-lg hover:bg-[#f9fafb] transition font-medium"
                                    >
                                        Reset Filter
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:w-3/4">
                            {/* Results Header */}
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-[#355485]">
                                        Lowongan Tersedia
                                        {filters.keyword && (
                                            <span className="text-[#4f90c6]"> untuk "{filters.keyword}"</span>
                                        )}
                                    </h2>
                                    <p className="text-[#6b7280] mt-1">
                                        Menampilkan {filteredJobs.length} dari {allJobs.length} lowongan
                                    </p>
                                </div>
                                <div className="text-sm text-[#9ca3af]">
                                    Diperbarui hari ini
                                </div>
                            </div>

                            {/* Featured Jobs */}
                            {filteredJobs.filter(job => job.featured).length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-[#355485] mb-4 flex items-center">
                                        <svg className="w-5 h-5 text-[#4f90c6] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        Lowongan Unggulan
                                    </h3>
                                    <div className="space-y-4">
                                        {filteredJobs.filter(job => job.featured).map(job => (
                                            <div
                                                key={job.id}
                                                className="bg-white rounded-xl shadow-sm border border-[#cbdde9] p-6 hover:shadow-md transition cursor-pointer group"
                                                onClick={() => window.location.href = `/lowongan/detail/${job.id}`}
                                            >
                                                <div className="flex items-start gap-4">
                                                    <img
                                                        src={job.logo}
                                                        alt={job.perusahaan}
                                                        className="w-16 h-16 rounded-lg object-cover border border-[#e5e7eb] group-hover:scale-105 transition"
                                                    />
                                                    <div className="flex-1">
                                                        <div className="flex items-start justify-between">
                                                            <div>
                                                                <h3 className="text-xl font-bold text-[#355485] group-hover:text-[#4f90c6] transition">
                                                                    {job.posisi}
                                                                </h3>
                                                                <p className="text-[#6b7280] mt-1">{job.perusahaan} • {job.lokasi}</p>
                                                            </div>
                                                            <span className="px-3 py-1 bg-[#cbdde9] text-[#355485] text-xs font-medium rounded-full">
                                                                Unggulan
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-wrap gap-2 mt-3">
                                                            <span className="px-3 py-1 bg-[#cbdde9] text-[#355485] text-xs font-medium rounded-full">
                                                                {job.kategori}
                                                            </span>
                                                            <span className="px-3 py-1 bg-[#cbdde9] text-[#355485] text-xs font-medium rounded-full">
                                                                {job.lokasi}
                                                            </span>
                                                            <span className="px-3 py-1 bg-[#cbdde9] text-[#355485] text-xs font-medium rounded-full">
                                                                {job.gaji}
                                                            </span>
                                                            <span className="px-3 py-1 bg-[#cbdde9] text-[#355485] text-xs font-medium rounded-full">
                                                                {job.type}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* All Jobs */}
                            <div className="space-y-4">
                                {filteredJobs.length > 0 ? (
                                    filteredJobs.map(job => (
                                        <div
                                            key={job.id}
                                            className="bg-white rounded-xl shadow-sm hover:shadow-md transition cursor-pointer border border-[#e5e7eb] group"
                                            onClick={() => window.location.href = `/lowongan/detail/${job.id}`}
                                        >
                                            <div className="p-6 flex flex-col md:flex-row md:items-center gap-4">
                                                <img
                                                    src={job.logo}
                                                    alt={job.perusahaan}
                                                    className="w-16 h-16 rounded-lg object-cover border border-[#e5e7eb] group-hover:scale-105 transition"
                                                />
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-[#355485] group-hover:text-[#4f90c6] transition">
                                                        {job.posisi}
                                                    </h3>
                                                    <p className="text-[#6b7280] mt-1">{job.perusahaan} • {job.lokasi}</p>
                                                    <div className="flex flex-wrap gap-2 mt-3">
                                                        <span className="px-3 py-1 bg-[#cbdde9] text-[#355485] text-xs font-medium rounded-full">
                                                            {job.kategori}
                                                        </span>
                                                        <span className="px-3 py-1 bg-[#cbdde9] text-[#355485] text-xs font-medium rounded-full">
                                                            {job.pendidikan}
                                                        </span>
                                                        <span className="px-3 py-1 bg-[#cbdde9] text-[#355485] text-xs font-medium rounded-full">
                                                            {job.gaji}
                                                        </span>
                                                        <span className="px-3 py-1 bg-[#cbdde9] text-[#355485] text-xs font-medium rounded-full">
                                                            {job.experience}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="text-right md:text-left whitespace-nowrap">
                                                    <p className="text-sm text-[#6b7280] mb-1">
                                                        {getDaysLeft(job.tanggalTutup) > 0 ?
                                                            `${getDaysLeft(job.tanggalTutup)} hari lagi` :
                                                            'Tutup'
                                                        }
                                                    </p>
                                                    <p className={`font-medium text-sm ${isExpired(job.tanggalTutup) ? 'text-red-600' : 'text-[#4f90c6]'}`}>
                                                        {formatDate(job.tanggalTutup)}
                                                    </p>
                                                    <span className={`inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full ${isExpired(job.tanggalTutup)
                                                        ? 'bg-red-100 text-red-800'
                                                        : 'bg-[#cbdde9] text-[#355485]'
                                                        }`}>
                                                        {isExpired(job.tanggalTutup) ? 'TUTUP' : 'AKTIF'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-16 bg-white rounded-xl border border-[#e5e7eb]">
                                        <div className="text-[#9ca3af] mb-4">
                                            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-[#355485] mb-2">Tidak ada lowongan yang cocok</h3>
                                        <p className="text-[#6b7280] mb-4">Coba ubah filter pencarian Anda atau gunakan kata kunci yang berbeda.</p>
                                        <button
                                            onClick={() => setFilters({
                                                keyword: '',
                                                kategori: '',
                                                lokasi: '',
                                                pendidikan: '',
                                                type: ''
                                            })}
                                            className="px-6 py-2 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] transition font-semibold"
                                        >
                                            Reset Filter
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}