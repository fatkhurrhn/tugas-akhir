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

            <main className="min-h-screen bg-gray-50">
                {/* Header - Style konsisten dengan sebelumnya */}
                <div className="bg-white shadow-sm border-b">
                    <div className="max-w-7xl mx-auto px-6 py-12">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-gray-800 mb-4">Temukan Lowongan Kerja</h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Jelajahi berbagai peluang karir dari perusahaan terpercaya
                            </p>
                        </div>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto mt-8">
                            <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-2">
                                <div className="flex">
                                    <input
                                        type="text"
                                        placeholder="Cari posisi, perusahaan, atau kata kunci..."
                                        value={filters.keyword}
                                        onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
                                        className="flex-1 px-4 py-3 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button className="ml-2 px-8 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                                        Cari
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar Filters - Dipertahankan */}
                        <div className="lg:w-1/4">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter Lowongan</h3>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
                                        <select
                                            value={filters.kategori}
                                            onChange={(e) => setFilters({ ...filters, kategori: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">Semua Kategori</option>
                                            {kategoriList.map(kat => (
                                                <option key={kat} value={kat}>{kat}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Lokasi</label>
                                        <select
                                            value={filters.lokasi}
                                            onChange={(e) => setFilters({ ...filters, lokasi: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">Semua Lokasi</option>
                                            {lokasiList.map(loc => (
                                                <option key={loc} value={loc}>{loc}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Pendidikan</label>
                                        <select
                                            value={filters.pendidikan}
                                            onChange={(e) => setFilters({ ...filters, pendidikan: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">Semua Pendidikan</option>
                                            {pendidikanList.map(pdd => (
                                                <option key={pdd} value={pdd}>{pdd}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Tipe Pekerjaan</label>
                                        <select
                                            value={filters.type}
                                            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                                        className="w-full py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
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
                                    <h2 className="text-2xl font-bold text-gray-800">
                                        Lowongan Tersedia
                                        {filters.keyword && (
                                            <span className="text-blue-600"> untuk "{filters.keyword}"</span>
                                        )}
                                    </h2>
                                    <p className="text-gray-600 mt-1">
                                        Menampilkan {filteredJobs.length} dari {allJobs.length} lowongan
                                    </p>
                                </div>
                                <div className="text-sm text-gray-500">
                                    Diperbarui hari ini
                                </div>
                            </div>

                            {/* Featured Jobs - Style lebih subtle */}
                            {filteredJobs.filter(job => job.featured).length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Lowongan Unggulan</h3>
                                    <div className="space-y-4">
                                        {filteredJobs.filter(job => job.featured).map(job => (
                                            <div
                                                key={job.id}
                                                className="bg-white rounded-xl shadow-sm border border-yellow-200 p-6 hover:shadow-md transition cursor-pointer"
                                                onClick={() => window.location.href = `/lowongan/detail/${job.id}`}
                                            >
                                                <div className="flex items-start gap-4">
                                                    <img
                                                        src={job.logo}
                                                        alt={job.perusahaan}
                                                        className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                                                    />
                                                    <div className="flex-1">
                                                        <div className="flex items-start justify-between">
                                                            <div>
                                                                <h3 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition">
                                                                    {job.posisi}
                                                                </h3>
                                                                <p className="text-gray-600 mt-1">{job.perusahaan} • {job.lokasi}</p>
                                                            </div>
                                                            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                                                                Unggulan
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-wrap gap-2 mt-3">
                                                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                                                {job.kategori}
                                                            </span>
                                                            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                                                {job.lokasi}
                                                            </span>
                                                            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                                                                {job.gaji}
                                                            </span>
                                                            <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
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
                                            className="bg-white rounded-xl shadow-sm hover:shadow-md transition cursor-pointer border border-gray-200"
                                            onClick={() => window.location.href = `/lowongan/detail/${job.id}`}
                                        >
                                            <div className="p-6 flex flex-col md:flex-row md:items-center gap-4">
                                                <img
                                                    src={job.logo}
                                                    alt={job.perusahaan}
                                                    className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                                                />
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition">
                                                        {job.posisi}
                                                    </h3>
                                                    <p className="text-gray-600 mt-1">{job.perusahaan} • {job.lokasi}</p>
                                                    <div className="flex flex-wrap gap-2 mt-3">
                                                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                                            {job.kategori}
                                                        </span>
                                                        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                                            {job.pendidikan}
                                                        </span>
                                                        <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                                                            {job.gaji}
                                                        </span>
                                                        <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
                                                            {job.experience}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="text-right md:text-left whitespace-nowrap">
                                                    <p className="text-sm text-gray-500 mb-1">
                                                        {getDaysLeft(job.tanggalTutup) > 0 ?
                                                            `${getDaysLeft(job.tanggalTutup)} hari lagi` :
                                                            'Tutup'
                                                        }
                                                    </p>
                                                    <p className={`font-medium text-sm ${isExpired(job.tanggalTutup) ? 'text-red-600' : 'text-green-600'}`}>
                                                        {formatDate(job.tanggalTutup)}
                                                    </p>
                                                    <span className={`inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full ${isExpired(job.tanggalTutup)
                                                            ? 'bg-red-100 text-red-800'
                                                            : 'bg-green-100 text-green-800'
                                                        }`}>
                                                        {isExpired(job.tanggalTutup) ? 'TUTUP' : 'AKTIF'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
                                        <div className="text-gray-400 mb-4">
                                            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Tidak ada lowongan yang cocok</h3>
                                        <p className="text-gray-600 mb-4">Coba ubah filterr pencarian Anda atau gunakan kata kunci yang berbeda.</p>
                                        <button
                                            onClick={() => setFilters({
                                                keyword: '',
                                                kategori: '',
                                                lokasi: '',
                                                pendidikan: '',
                                                type: ''
                                            })}
                                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
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