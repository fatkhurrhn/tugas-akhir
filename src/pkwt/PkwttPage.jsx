// src/pages/PkwttPage.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function PkwttPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [departmentFilter, setDepartmentFilter] = useState('all')
    const [statusFilter, setStatusFilter] = useState('all')
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 8

    // Data dummy PKWTT
    const pkwttData = [
        {
            id: 'PKWTT-001',
            employeeName: 'Ahmad Hidayat',
            position: 'Senior Software Engineer',
            joinDate: '2020-03-15',
            nik: '6401234567890001',
            salary: '18.500.000',
            department: 'IT',
            status: 'active',
            employmentStatus: 'Permanent',
            lastPromotion: '2023-06-01',
            bpjsStatus: 'active'
        },
        {
            id: 'PKWTT-002',
            employeeName: 'Dewi Anggraini',
            position: 'HR Manager',
            joinDate: '2019-08-10',
            nik: '6401234567890002',
            salary: '15.200.000',
            department: 'HR',
            status: 'active',
            employmentStatus: 'Permanent',
            lastPromotion: '2023-03-15',
            bpjsStatus: 'active'
        },
        {
            id: 'PKWTT-003',
            employeeName: 'Rudi Hermawan',
            position: 'Finance Controller',
            joinDate: '2021-01-20',
            nik: '6401234567890003',
            salary: '12.800.000',
            department: 'Finance',
            status: 'active',
            employmentStatus: 'Permanent',
            lastPromotion: '2023-09-01',
            bpjsStatus: 'active'
        },
        {
            id: 'PKWTT-004',
            employeeName: 'Maya Sari',
            position: 'Marketing Director',
            joinDate: '2018-11-05',
            nik: '6401234567890004',
            salary: '22.000.000',
            department: 'Marketing',
            status: 'active',
            employmentStatus: 'Permanent',
            lastPromotion: '2023-01-01',
            bpjsStatus: 'active'
        },
        {
            id: 'PKWTT-005',
            employeeName: 'Bambang Sutrisno',
            position: 'Operations Manager',
            joinDate: '2020-06-30',
            nik: '6401234567890005',
            salary: '16.500.000',
            department: 'Operations',
            status: 'active',
            employmentStatus: 'Permanent',
            lastPromotion: '2023-12-01',
            bpjsStatus: 'active'
        },
        {
            id: 'PKWTT-006',
            employeeName: 'Citra Lestari',
            position: 'Product Designer',
            joinDate: '2022-03-12',
            nik: '6401234567890006',
            salary: '11.500.000',
            department: 'Design',
            status: 'probation',
            employmentStatus: 'Probation',
            lastPromotion: '-',
            bpjsStatus: 'active'
        },
        {
            id: 'PKWTT-007',
            employeeName: 'Fajar Nugroho',
            position: 'Data Scientist',
            joinDate: '2021-09-18',
            nik: '6401234567890007',
            salary: '14.200.000',
            department: 'Data',
            status: 'active',
            employmentStatus: 'Permanent',
            lastPromotion: '2023-11-01',
            bpjsStatus: 'active'
        },
        {
            id: 'PKWTT-008',
            employeeName: 'Gita Wulandari',
            position: 'Quality Assurance Lead',
            joinDate: '2019-12-01',
            nik: '6401234567890008',
            salary: '13.800.000',
            department: 'IT',
            status: 'active',
            employmentStatus: 'Permanent',
            lastPromotion: '2023-04-01',
            bpjsStatus: 'active'
        },
        {
            id: 'PKWTT-009',
            employeeName: 'Hendra Pratama',
            position: 'System Administrator',
            joinDate: '2022-08-22',
            nik: '6401234567890009',
            salary: '10.500.000',
            department: 'IT',
            status: 'active',
            employmentStatus: 'Permanent',
            lastPromotion: '-',
            bpjsStatus: 'pending'
        },
        {
            id: 'PKWTT-010',
            employeeName: 'Indah Permata',
            position: 'Content Strategist',
            joinDate: '2023-01-15',
            nik: '6401234567890010',
            salary: '9.200.000',
            department: 'Content',
            status: 'probation',
            employmentStatus: 'Probation',
            lastPromotion: '-',
            bpjsStatus: 'active'
        },
        {
            id: 'PKWTT-011',
            employeeName: 'Joko Susilo',
            position: 'Senior Accountant',
            joinDate: '2020-04-10',
            nik: '6401234567890011',
            salary: '12.000.000',
            department: 'Finance',
            status: 'inactive',
            employmentStatus: 'Resigned',
            lastPromotion: '2022-08-01',
            bpjsStatus: 'inactive'
        },
        {
            id: 'PKWTT-012',
            employeeName: 'Kartika Sari',
            position: 'Sales Manager',
            joinDate: '2021-07-25',
            nik: '6401234567890012',
            salary: '13.500.000',
            department: 'Sales',
            status: 'active',
            employmentStatus: 'Permanent',
            lastPromotion: '2023-07-01',
            bpjsStatus: 'active'
        }
    ]

    // Filter data berdasarkan search dan filter
    const filteredData = pkwttData.filter(item => {
        const matchesSearch = item.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.nik.includes(searchTerm)
        const matchesDepartment = departmentFilter === 'all' || item.department === departmentFilter
        const matchesStatus = statusFilter === 'all' || item.status === statusFilter

        return matchesSearch && matchesDepartment && matchesStatus
    })

    // Pagination
    const totalPages = Math.ceil(filteredData.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage)

    // Statistics
    const stats = {
        total: pkwttData.length,
        active: pkwttData.filter(item => item.status === 'active').length,
        probation: pkwttData.filter(item => item.status === 'probation').length,
        inactive: pkwttData.filter(item => item.status === 'inactive').length,
        departments: [...new Set(pkwttData.map(item => item.department))].length
    }

    const getStatusBadge = (status) => {
        const statusConfig = {
            active: { color: 'bg-green-100 text-green-800 border-green-200', text: 'Aktif', icon: 'ri-checkbox-circle-line' },
            probation: { color: 'bg-blue-100 text-blue-800 border-blue-200', text: 'Masa Percobaan', icon: 'ri-time-line' },
            inactive: { color: 'bg-red-100 text-red-800 border-red-200', text: 'Non-Aktif', icon: 'ri-close-circle-line' }
        }
        const config = statusConfig[status] || statusConfig.active

        return (
            <span className={`px-2 py-1 text-xs font-medium rounded-full border ${config.color} flex items-center gap-1`}>
                <i className={config.icon}></i>
                {config.text}
            </span>
        )
    }

    const getBpjsStatusBadge = (status) => {
        const statusConfig = {
            active: { color: 'bg-emerald-100 text-emerald-800 border-emerald-200', text: 'Aktif', icon: 'ri-heart-pulse-line' },
            pending: { color: 'bg-yellow-100 text-yellow-800 border-yellow-200', text: 'Proses', icon: 'ri-time-line' },
            inactive: { color: 'bg-red-100 text-red-800 border-red-200', text: 'Non-Aktif', icon: 'ri-heart-line' }
        }
        const config = statusConfig[status] || statusConfig.pending

        return (
            <span className={`px-2 py-1 text-xs font-medium rounded-full border ${config.color} flex items-center gap-1`}>
                <i className={config.icon}></i>
                {config.text}
            </span>
        )
    }

    const getEmploymentType = (type) => {
        const typeConfig = {
            Permanent: { color: 'text-purple-600 bg-purple-100 border-purple-200', icon: 'ri-award-line' },
            Probation: { color: 'text-blue-600 bg-blue-100 border-blue-200', icon: 'ri-user-search-line' },
            Resigned: { color: 'text-red-600 bg-red-100 border-red-200', icon: 'ri-logout-box-line' }
        }
        const config = typeConfig[type] || typeConfig.Permanent

        return (
            <span className={`px-2 py-1 text-xs font-medium rounded-full border ${config.color} flex items-center gap-1`}>
                <i className={config.icon}></i>
                {type}
            </span>
        )
    }

    const calculateYearsOfService = (joinDate) => {
        const join = new Date(joinDate)
        const now = new Date()
        const diffYears = now.getFullYear() - join.getFullYear()
        const diffMonths = now.getMonth() - join.getMonth()

        if (diffMonths < 0) {
            return `${diffYears - 1} tahun ${12 + diffMonths} bulan`
        }
        return `${diffYears} tahun ${diffMonths} bulan`
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-[#2a436c]">Manajemen PKWTT</h1>
                    <p className="text-[#6b7280]">Kelola data karyawan tetap perusahaan</p>
                </div>
                <div className="flex gap-2">
                    <button className="inline-flex items-center gap-2 px-4 py-2 border border-[#e5e7eb] text-[#6b7280] rounded-lg hover:bg-[#f9fafb] transition-colors font-medium">
                        <i className="ri-upload-cloud-line"></i>
                        Import Data
                    </button>
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] transition-colors font-medium">
                        <i className="ri-user-add-line"></i>
                        Tambah Karyawan
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                    {
                        title: 'Total Karyawan',
                        value: stats.total,
                        icon: 'ri-team-line',
                        color: 'bg-blue-500',
                        description: 'Semua status'
                    },
                    {
                        title: 'Aktif',
                        value: stats.active,
                        icon: 'ri-user-follow-line',
                        color: 'bg-green-500',
                        description: 'Karyawan aktif'
                    },
                    {
                        title: 'Masa Percobaan',
                        value: stats.probation,
                        icon: 'ri-user-search-line',
                        color: 'bg-orange-500',
                        description: 'Dalam percobaan'
                    },
                    {
                        title: 'Non-Aktif',
                        value: stats.inactive,
                        icon: 'ri-user-unfollow-line',
                        color: 'bg-red-500',
                        description: 'Tidak aktif'
                    },
                    {
                        title: 'Departemen',
                        value: stats.departments,
                        icon: 'ri-building-line',
                        color: 'bg-purple-500',
                        description: 'Total divisi'
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
                                placeholder="Cari nama karyawan, jabatan, atau NIK..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                            />
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="flex gap-2">
                        <select
                            value={departmentFilter}
                            onChange={(e) => setDepartmentFilter(e.target.value)}
                            className="px-3 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                        >
                            <option value="all">Semua Departemen</option>
                            <option value="IT">IT</option>
                            <option value="HR">HR</option>
                            <option value="Finance">Finance</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Operations">Operations</option>
                            <option value="Design">Design</option>
                            <option value="Data">Data</option>
                            <option value="Content">Content</option>
                            <option value="Sales">Sales</option>
                        </select>

                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="px-3 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                        >
                            <option value="all">Semua Status</option>
                            <option value="active">Aktif</option>
                            <option value="probation">Masa Percobaan</option>
                            <option value="inactive">Non-Aktif</option>
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
                                    Masa Kerja
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider">
                                    Gaji & Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider">
                                    BPJS
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-[#6b7280] uppercase tracking-wider">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e5e7eb]">
                            {currentData.map((item) => (
                                <tr key={item.id} className="hover:bg-[#f9fafb] transition-colors">
                                    <td className="px-6 py-4">
                                        <div>
                                            <div className="font-medium text-[#2a436c]">{item.employeeName}</div>
                                            <div className="text-sm text-[#6b7280]">{item.position}</div>
                                            <div className="text-xs text-[#9ca3af] mt-1 flex items-center gap-2">
                                                <span>{item.id}</span>
                                                <span className="w-1 h-1 bg-[#9ca3af] rounded-full"></span>
                                                <span>{item.department}</span>
                                                <span className="w-1 h-1 bg-[#9ca3af] rounded-full"></span>
                                                <span>NIK: {item.nik}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm">
                                            <div className="text-[#2a436c] font-medium">
                                                {new Date(item.joinDate).toLocaleDateString('id-ID', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric'
                                                })}
                                            </div>
                                            <div className="text-[#6b7280] text-xs mt-1">
                                                {calculateYearsOfService(item.joinDate)}
                                            </div>
                                            {item.lastPromotion !== '-' && (
                                                <div className="text-[#4f90c6] text-xs mt-1">
                                                    Promosi: {new Date(item.lastPromotion).toLocaleDateString('id-ID')}
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="space-y-2">
                                            <div className="text-sm font-medium text-[#2a436c]">
                                                Rp {item.salary}
                                            </div>
                                            <div className="flex flex-wrap gap-1">
                                                {getStatusBadge(item.status)}
                                                {getEmploymentType(item.employmentStatus)}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {getBpjsStatusBadge(item.bpjsStatus)}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button className="p-1 text-[#6b7280] hover:text-[#355485] transition-colors" title="Lihat Detail">
                                                <i className="ri-eye-line"></i>
                                            </button>
                                            <button className="p-1 text-[#6b7280] hover:text-[#355485] transition-colors" title="Edit">
                                                <i className="ri-edit-line"></i>
                                            </button>
                                            <button className="p-1 text-[#6b7280] hover:text-[#4f90c6] transition-colors" title="Download Kontrak">
                                                <i className="ri-file-download-line"></i>
                                            </button>
                                            <button className="p-1 text-[#6b7280] hover:text-green-600 transition-colors" title="Riwayat">
                                                <i className="ri-history-line"></i>
                                            </button>
                                            {item.status === 'active' && (
                                                <button className="p-1 text-[#6b7280] hover:text-purple-600 transition-colors" title="Promosi">
                                                    <i className="ri-award-line"></i>
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Empty State */}
                {currentData.length === 0 && (
                    <div className="text-center py-12">
                        <i className="ri-user-search-line text-4xl text-[#9ca3af] mb-4"></i>
                        <h3 className="text-lg font-medium text-[#6b7280] mb-2">Tidak ada data ditemukan</h3>
                        <p className="text-[#6b7280] mb-4">Coba ubah filter pencarian Anda</p>
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setDepartmentFilter('all');
                                setStatusFilter('all');
                            }}
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

            {/* Department Overview */}
            <div className="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-sm">
                <h3 className="text-lg font-medium text-[#2a436c] mb-4">Overview Departemen</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {[...new Set(pkwttData.map(item => item.department))].map(dept => {
                        const deptCount = pkwttData.filter(item => item.department === dept && item.status === 'active').length
                        return (
                            <div key={dept} className="text-center p-4 border border-[#e5e7eb] rounded-lg hover:border-[#4f90c6] transition-colors">
                                <div className="text-2xl font-bold text-[#2a436c] mb-1">{deptCount}</div>
                                <div className="text-sm text-[#6b7280]">{dept}</div>
                                <div className="text-xs text-[#9ca3af] mt-1">Karyawan Aktif</div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Quick Actions Footer */}
            <div className="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-sm">
                <h3 className="text-lg font-medium text-[#2a436c] mb-4">Aksi Cepat</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                        {
                            title: 'Tambah Karyawan',
                            description: 'Input data karyawan tetap baru',
                            icon: 'ri-user-add-line',
                            color: 'bg-blue-500'
                        },
                        {
                            title: 'Laporan BPJS',
                            description: 'Kelola data BPJS Ketenagakerjaan',
                            icon: 'ri-heart-pulse-line',
                            color: 'bg-green-500'
                        },
                        {
                            title: 'Rekap Gaji',
                            description: 'Lihat rekap penggajian bulanan',
                            icon: 'ri-money-dollar-circle-line',
                            color: 'bg-orange-500'
                        },
                        {
                            title: 'Export Data',
                            description: 'Download data karyawan lengkap',
                            icon: 'ri-download-cloud-line',
                            color: 'bg-purple-500'
                        }
                    ].map((action, index) => (
                        <button
                            key={index}
                            className="p-4 border border-[#e5e7eb] rounded-xl hover:border-[#4f90c6] hover:shadow-md transition-all text-left group"
                        >
                            <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-3`}>
                                <i className={`${action.icon} text-white text-xl`}></i>
                            </div>
                            <h4 className="font-semibold text-[#2a436c] mb-1">{action.title}</h4>
                            <p className="text-sm text-[#6b7280]">{action.description}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}