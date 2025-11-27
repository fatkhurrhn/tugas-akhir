// src/pages/PkwtPage.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function PkwtPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('all')
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 8

    // Data dummy PKWT
    const pkwtData = [
        {
            id: 'PKWT-001',
            employeeName: 'Andi Wijaya',
            position: 'Frontend Developer',
            startDate: '2024-01-15',
            endDate: '2024-07-15',
            status: 'active',
            salary: '8.500.000',
            department: 'IT',
            remainingDays: 45,
            documentStatus: 'verified'
        },
        {
            id: 'PKWT-002',
            employeeName: 'Siti Rahayu',
            position: 'HR Specialist',
            startDate: '2024-02-01',
            endDate: '2024-08-01',
            status: 'active',
            salary: '7.200.000',
            department: 'HR',
            remainingDays: 76,
            documentStatus: 'verified'
        },
        {
            id: 'PKWT-003',
            employeeName: 'Rizki Pratama',
            position: 'UI/UX Designer',
            startDate: '2024-03-10',
            endDate: '2024-09-10',
            status: 'active',
            salary: '9.000.000',
            department: 'Design',
            remainingDays: 112,
            documentStatus: 'verified'
        },
        {
            id: 'PKWT-004',
            employeeName: 'Budi Santoso',
            position: 'Backend Developer',
            startDate: '2023-11-01',
            endDate: '2024-05-01',
            status: 'expiring',
            salary: '10.500.000',
            department: 'IT',
            remainingDays: 12,
            documentStatus: 'verified'
        },
        {
            id: 'PKWT-005',
            employeeName: 'Maya Sari',
            position: 'Digital Marketer',
            startDate: '2024-01-20',
            endDate: '2024-04-20',
            status: 'expired',
            salary: '6.800.000',
            department: 'Marketing',
            remainingDays: -5,
            documentStatus: 'verified'
        },
        {
            id: 'PKWT-006',
            employeeName: 'David Lee',
            position: 'Data Analyst',
            startDate: '2024-03-15',
            endDate: '2024-09-15',
            status: 'active',
            salary: '11.200.000',
            department: 'Data',
            remainingDays: 118,
            documentStatus: 'pending'
        },
        {
            id: 'PKWT-007',
            employeeName: 'Sarah Putri',
            position: 'Content Writer',
            startDate: '2024-02-28',
            endDate: '2024-08-28',
            status: 'active',
            salary: '5.500.000',
            department: 'Content',
            remainingDays: 103,
            documentStatus: 'verified'
        },
        {
            id: 'PKWT-008',
            employeeName: 'Ahmad Fauzi',
            position: 'QA Engineer',
            startDate: '2023-12-10',
            endDate: '2024-06-10',
            status: 'expiring',
            salary: '8.000.000',
            department: 'IT',
            remainingDays: 23,
            documentStatus: 'verified'
        },
        {
            id: 'PKWT-009',
            employeeName: 'Lisa Permata',
            position: 'Product Manager',
            startDate: '2024-01-05',
            endDate: '2024-07-05',
            status: 'active',
            salary: '15.000.000',
            department: 'Product',
            remainingDays: 35,
            documentStatus: 'verified'
        },
        {
            id: 'PKWT-010',
            employeeName: 'Kevin Hartono',
            position: 'DevOps Engineer',
            startDate: '2023-10-15',
            endDate: '2024-04-15',
            status: 'expired',
            salary: '12.500.000',
            department: 'IT',
            remainingDays: -15,
            documentStatus: 'verified'
        }
    ]

    // Filter data berdasarkan search dan status
    const filteredData = pkwtData.filter(item => {
        const matchesSearch = item.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.id.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesStatus = statusFilter === 'all' || item.status === statusFilter

        return matchesSearch && matchesStatus
    })

    // Pagination
    const totalPages = Math.ceil(filteredData.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage)

    const getStatusBadge = (status) => {
        const statusConfig = {
            active: { color: 'bg-green-100 text-green-800 border-green-200', text: 'Aktif' },
            expiring: { color: 'bg-orange-100 text-orange-800 border-orange-200', text: 'Akan Berakhir' },
            expired: { color: 'bg-red-100 text-red-800 border-red-200', text: 'Kadaluarsa' }
        }
        const config = statusConfig[status] || statusConfig.active

        return (
            <span className={`px-2 py-1 text-xs font-medium rounded-full border ${config.color}`}>
                {config.text}
            </span>
        )
    }

    const getDocumentStatusBadge = (status) => {
        const statusConfig = {
            verified: { color: 'bg-emerald-100 text-emerald-800 border-emerald-200', text: 'Terverifikasi', icon: 'ri-checkbox-circle-line' },
            pending: { color: 'bg-yellow-100 text-yellow-800 border-yellow-200', text: 'Menunggu', icon: 'ri-time-line' },
            rejected: { color: 'bg-red-100 text-red-800 border-red-200', text: 'Ditolak', icon: 'ri-close-circle-line' }
        }
        const config = statusConfig[status] || statusConfig.pending

        return (
            <span className={`px-2 py-1 text-xs font-medium rounded-full border ${config.color} flex items-center gap-1`}>
                <i className={config.icon}></i>
                {config.text}
            </span>
        )
    }

    const getRemainingDaysText = (days) => {
        if (days < 0) return { text: `${Math.abs(days)} hari lewat`, color: 'text-red-600' }
        if (days <= 30) return { text: `${days} hari lagi`, color: 'text-orange-600' }
        return { text: `${days} hari lagi`, color: 'text-green-600' }
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-[#2a436c]">Manajemen PKWT</h1>
                    <p className="text-[#6b7280]">Kelola perjanjian kerja waktu tertentu perusahaan</p>
                </div>
                <Link
                    to="/dashboard/form-pkwt"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] transition-colors font-medium"
                >
                    <i className="ri-add-line"></i>
                    Tambah PKWT Baru
                </Link>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    {
                        title: 'Total PKWT',
                        value: pkwtData.length,
                        icon: 'ri-file-text-line',
                        color: 'bg-blue-500',
                        description: 'Semua kontrak'
                    },
                    {
                        title: 'Aktif',
                        value: pkwtData.filter(item => item.status === 'active').length,
                        icon: 'ri-checkbox-circle-line',
                        color: 'bg-green-500',
                        description: 'Sedang berjalan'
                    },
                    {
                        title: 'Akan Berakhir',
                        value: pkwtData.filter(item => item.status === 'expiring').length,
                        icon: 'ri-alarm-warning-line',
                        color: 'bg-orange-500',
                        description: 'Dalam 30 hari'
                    },
                    {
                        title: 'Kadaluarsa',
                        value: pkwtData.filter(item => item.status === 'expired').length,
                        icon: 'ri-error-warning-line',
                        color: 'bg-red-500',
                        description: 'Perlu perpanjangan'
                    }
                ].map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 border border-[#e5e7eb] shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[#6b7280] text-sm mb-1">{stat.title}</p>
                                <p className="text-2xl font-bold text-[#2a436c]">{stat.value}</p>
                                <p className="text-xs text-[#6b7280] mt-1">{stat.description}</p>
                            </div>
                            <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                                <i className={`${stat.icon} text-white text-lg`}></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Filters and Search */}
            <div className="bg-white rounded-xl p-4 border border-[#e5e7eb] shadow-sm">
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Search */}
                    <div className="flex-1">
                        <div className="relative">
                            <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af]"></i>
                            <input
                                type="text"
                                placeholder="Cari nama karyawan, jabatan, atau ID PKWT..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                            />
                        </div>
                    </div>

                    {/* Status Filter */}
                    <div className="flex gap-2">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="px-3 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                        >
                            <option value="all">Semua Status</option>
                            <option value="active">Aktif</option>
                            <option value="expiring">Akan Berakhir</option>
                            <option value="expired">Kadaluarsa</option>
                        </select>

                        <button className="px-4 py-2 border border-[#e5e7eb] text-[#6b7280] rounded-lg hover:bg-[#f9fafb] transition-colors">
                            <i className="ri-download-line"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-[#f9fafb] border-b border-[#e5e7eb]">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider">
                                    Karyawan
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider">
                                    Masa Kontrak
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider">
                                    Gaji
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider">
                                    Dokumen
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e5e7eb]">
                            {currentData.map((item) => {
                                const remainingDaysInfo = getRemainingDaysText(item.remainingDays)

                                return (
                                    <tr key={item.id} className="hover:bg-[#f9fafb] transition-colors">
                                        <td className="px-6 py-4">
                                            <div>
                                                <div className="font-medium text-[#2a436c]">{item.employeeName}</div>
                                                <div className="text-sm text-[#6b7280]">{item.position}</div>
                                                <div className="text-xs text-[#9ca3af] mt-1">{item.id} • {item.department}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm">
                                                <div className="text-[#2a436c]">
                                                    {new Date(item.startDate).toLocaleDateString('id-ID')} - {new Date(item.endDate).toLocaleDateString('id-ID')}
                                                </div>
                                                <div className={`text-xs font-medium ${remainingDaysInfo.color}`}>
                                                    {remainingDaysInfo.text}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-medium text-[#2a436c]">
                                                Rp {item.salary}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {getStatusBadge(item.status)}
                                        </td>
                                        <td className="px-6 py-4">
                                            {getDocumentStatusBadge(item.documentStatus)}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <button className="p-1 text-[#6b7280] hover:text-[#355485] transition-colors" title="Lihat Detail">
                                                    <i className="ri-eye-line"></i>
                                                </button>
                                                <button className="p-1 text-[#6b7280] hover:text-[#355485] transition-colors" title="Edit">
                                                    <i className="ri-edit-line"></i>
                                                </button>
                                                <button className="p-1 text-[#6b7280] hover:text-[#4f90c6] transition-colors" title="Download">
                                                    <i className="ri-download-line"></i>
                                                </button>
                                                {item.status === 'expiring' && (
                                                    <button className="p-1 text-orange-600 hover:text-orange-700 transition-colors" title="Perpanjang">
                                                        <i className="ri-calendar-event-line"></i>
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Empty State */}
                {currentData.length === 0 && (
                    <div className="text-center py-12">
                        <i className="ri-file-search-line text-4xl text-[#9ca3af] mb-4"></i>
                        <h3 className="text-lg font-medium text-[#6b7280] mb-2">Tidak ada data ditemukan</h3>
                        <p className="text-[#6b7280] mb-4">Coba ubah filter pencarian Anda</p>
                        <button
                            onClick={() => { setSearchTerm(''); setStatusFilter('all') }}
                            className="px-4 py-2 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] transition-colors"
                        >
                            Reset Filter
                        </button>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="px-6 py-4 border-t border-[#e5e7eb] bg-[#f9fafb]">
                        <div className="flex items-center justify-between">
                            <div className="text-sm text-[#6b7280]">
                                Menampilkan {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredData.length)} dari {filteredData.length} data
                            </div>
                            <div className="flex gap-1">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="px-3 py-1 border border-[#e5e7eb] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors"
                                >
                                    <i className="ri-arrow-left-s-line"></i>
                                </button>

                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`px-3 py-1 border rounded-lg transition-colors ${currentPage === page
                                                ? 'bg-[#355485] text-white border-[#355485]'
                                                : 'border-[#e5e7eb] text-[#6b7280] hover:bg-white'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className="px-3 py-1 border border-[#e5e7eb] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors"
                                >
                                    <i className="ri-arrow-right-s-line"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Quick Actions Footer */}
            <div className="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-sm">
                <h3 className="text-lg font-medium text-[#2a436c] mb-4">Aksi Cepat</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        {
                            title: 'Buat PKWT Baru',
                            description: 'Tambah perjanjian kerja waktu tertentu baru',
                            icon: 'ri-add-circle-line',
                            color: 'bg-blue-500',
                            link: '/dashboard/form-pkwt'
                        },
                        {
                            title: 'Import Data',
                            description: 'Upload data PKWT dari file Excel',
                            icon: 'ri-upload-cloud-line',
                            color: 'bg-green-500',
                            link: '#'
                        },
                        {
                            title: 'Export Laporan',
                            description: 'Download laporan PKWT perusahaan',
                            icon: 'ri-download-cloud-line',
                            color: 'bg-purple-500',
                            link: '#'
                        }
                    ].map((action, index) => (
                        <Link
                            key={index}
                            to={action.link}
                            className="p-4 border border-[#e5e7eb] rounded-xl hover:border-[#4f90c6] hover:shadow-md transition-all group"
                        >
                            <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-3`}>
                                <i className={`${action.icon} text-white text-xl`}></i>
                            </div>
                            <h4 className="font-semibold text-[#2a436c] mb-1">{action.title}</h4>
                            <p className="text-sm text-[#6b7280]">{action.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}