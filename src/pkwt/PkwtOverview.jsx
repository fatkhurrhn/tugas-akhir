// src/pages/DashboardOverview.jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardOverview() {
    // Data dummy perusahaan
    const companyData = {
        name: 'CV. Teknologi Maju Indonesia',
        address: 'Jl. Sudirman No. 123, Kabupaten Paser, Kalimantan Timur',
        phone: '(0543) 12345',
        email: 'hrd@teknologimaju.co.id',
        npwp: '12.345.678.9-012.345',
        nib: '123456789012345',
        establishmentDate: '15 Januari 2020',
        employeeCount: 47,
        companyType: 'Perseroan Terbatas (PT)',
        businessField: 'Teknologi Informasi dan Konsultan'
    }

    const stats = [
        {
            title: 'Total Karyawan PKWT',
            value: '23',
            change: '+3',
            changeType: 'positive',
            icon: 'ri-file-text-line',
            color: 'bg-blue-500',
            link: '/dashboard/pkwt',
            description: 'Karyawan kontrak aktif'
        },
        {
            title: 'Total Karyawan PKWTT',
            value: '24',
            change: '+2',
            changeType: 'positive',
            icon: 'ri-user-follow-line',
            color: 'bg-green-500',
            link: '/dashboard/pkwtt',
            description: 'Karyawan tetap'
        },
        {
            title: 'PKWT Aktif',
            value: '18',
            change: '-2',
            changeType: 'negative',
            icon: 'ri-checkbox-circle-line',
            color: 'bg-emerald-500',
            link: '/dashboard/pkwt',
            description: 'Sedang berjalan'
        },
        {
            title: 'Akan Berakhir',
            value: '5',
            change: '+2',
            changeType: 'warning',
            icon: 'ri-alarm-warning-line',
            color: 'bg-orange-500',
            link: '/dashboard/pkwt',
            description: 'Dalam 30 hari'
        }
    ]

    const recentActivities = [
        {
            id: 1,
            type: 'pkwt_created',
            description: 'PKWT baru dibuat untuk Andi Wijaya - Frontend Developer',
            date: '2 jam yang lalu',
            icon: 'ri-add-circle-line',
            color: 'text-blue-500',
            status: 'completed'
        },
        {
            id: 2,
            type: 'pkwt_extended',
            description: 'Perpanjangan PKWT Siti Rahayu - HR Specialist',
            date: '1 hari yang lalu',
            icon: 'ri-calendar-event-line',
            color: 'text-green-500',
            status: 'completed'
        },
        {
            id: 3,
            type: 'employee_added',
            description: 'Karyawan baru ditambahkan - Rizki Pratama (UI/UX Designer)',
            date: '2 hari yang lalu',
            icon: 'ri-user-add-line',
            color: 'text-purple-500',
            status: 'completed'
        }
    ]

    const quickActions = [
        {
            title: 'Buat PKWT Baru',
            description: 'Buat perjanjian kerja waktu tertentu baru',
            icon: 'ri-add-circle-line',
            color: 'bg-blue-500',
            link: '/dashboard/form-pkwt',
            buttonText: 'Buat Baru'
        },
        {
            title: 'Kelola PKWT',
            description: 'Lihat dan kelola semua karyawan kontrak',
            icon: 'ri-file-text-line',
            color: 'bg-green-500',
            link: '/dashboard/pkwt',
            buttonText: 'Lihat Daftar'
        },
        {
            title: 'Data PKWTT',
            description: 'Kelola data karyawan tetap',
            icon: 'ri-user-follow-line',
            color: 'bg-purple-500',
            link: '/dashboard/pkwtt',
            buttonText: 'Kelola'
        }
    ]

    return (
        <div className="space-y-6">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-[#355485] to-[#4f90c6] rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-3xl font-bold mb-3">
                                Selamat Datang di E-PKWT!
                            </h1>
                            <p className="text-blue-100 text-lg mb-4">
                                Kelola perjanjian kerja waktu tertentu dengan mudah dan efisien
                            </p>
                            <div className="flex items-center gap-2 text-blue-100">
                                <i className="ri-building-line"></i>
                                <span className="font-medium">{companyData.name}</span>
                            </div>
                        </div>
                        <div className="bg-white/20 rounded-xl p-4">
                            <i className="ri-rocket-line text-3xl"></i>
                        </div>
                    </div>
                </div>
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <Link
                        key={index}
                        to={stat.link}
                        className="bg-white rounded-2xl p-6 border border-[#e5e7eb] shadow-sm hover:shadow-lg transition-all duration-300 group hover:border-[#4f90c6]"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-xl ${stat.color} text-white shadow-lg`}>
                                <i className={`${stat.icon} text-xl`}></i>
                            </div>
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.changeType === 'positive'
                                    ? 'bg-green-100 text-green-800 border border-green-200'
                                    : stat.changeType === 'negative'
                                        ? 'bg-red-100 text-red-800 border border-red-200'
                                        : 'bg-orange-100 text-orange-800 border border-orange-200'
                                }`}>
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#2a436c] mb-1">{stat.value}</h3>
                        <p className="text-[#355485] font-medium text-sm mb-1">{stat.title}</p>
                        <p className="text-[#6b7280] text-xs">{stat.description}</p>
                        <div className="mt-4 pt-3 border-t border-[#e5e7eb]">
                            <span className="text-xs text-[#4f90c6] group-hover:text-[#355485] transition-colors font-medium flex items-center gap-1">
                                Lihat detail
                                <i className="ri-arrow-right-s-line group-hover:translate-x-1 transition-transform"></i>
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Company Information */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-[#e5e7eb] shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#355485] to-[#4f90c6] rounded-xl flex items-center justify-center shadow-lg">
                            <i className="ri-building-2-line text-white text-xl"></i>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-[#2a436c]">Informasi Perusahaan</h2>
                            <p className="text-[#6b7280] text-sm">Data lengkap perusahaan Anda</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { icon: 'ri-building-3-line', label: 'Nama Perusahaan', value: companyData.name },
                            { icon: 'ri-map-pin-line', label: 'Alamat', value: companyData.address },
                            { icon: 'ri-phone-line', label: 'Telepon', value: companyData.phone },
                            { icon: 'ri-mail-line', label: 'Email', value: companyData.email },
                            { icon: 'ri-file-copy-line', label: 'NPWP', value: companyData.npwp },
                            { icon: 'ri-folder-info-line', label: 'NIB', value: companyData.nib },
                            { icon: 'ri-calendar-line', label: 'Tanggal Berdiri', value: companyData.establishmentDate },
                            { icon: 'ri-user-line', label: 'Total Karyawan', value: `${companyData.employeeCount} orang` },
                            { icon: 'ri-shield-check-line', label: 'Bentuk Usaha', value: companyData.companyType },
                            { icon: 'ri-briefcase-line', label: 'Bidang Usaha', value: companyData.businessField }
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-3 p-3 hover:bg-[#f9fafb] rounded-lg transition-colors border border-transparent hover:border-[#e5e7eb]">
                                <i className={`${item.icon} text-[#4f90c6] mt-0.5 flex-shrink-0`}></i>
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium text-[#355485] mb-1">{item.label}</div>
                                    <div className="text-[#6b7280] text-sm leading-relaxed">{item.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-[#e5e7eb] flex gap-3">
                        <Link
                            to="/dashboard/profile"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] transition-colors font-medium text-sm"
                        >
                            <i className="ri-edit-line"></i>
                            Edit Profil Perusahaan
                        </Link>
                        <button className="inline-flex items-center gap-2 px-4 py-2 border border-[#e5e7eb] text-[#6b7280] rounded-lg hover:bg-[#f9fafb] transition-colors font-medium text-sm">
                            <i className="ri-download-line"></i>
                            Export Data
                        </button>
                    </div>
                </div>

                {/* Recent Activities & Quick Actions */}
                <div className="space-y-6">
                    {/* Quick Actions */}
                    <div className="bg-white rounded-2xl p-6 border border-[#e5e7eb] shadow-sm">
                        <h2 className="text-xl font-bold text-[#2a436c] mb-4">Aksi Cepat</h2>
                        <div className="space-y-3">
                            {quickActions.map((action, index) => (
                                <Link
                                    key={index}
                                    to={action.link}
                                    className="flex items-center gap-4 p-4 border border-[#e5e7eb] rounded-xl hover:border-[#4f90c6] hover:shadow-md transition-all group bg-[#f9fafb] hover:bg-white"
                                >
                                    <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                        <i className={`${action.icon} text-white text-lg`}></i>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-[#2a436c] mb-1">{action.title}</h3>
                                        <p className="text-sm text-[#6b7280]">{action.description}</p>
                                    </div>
                                    <div className="text-xs text-[#4f90c6] group-hover:text-[#355485] transition-colors font-medium">
                                        {action.buttonText}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Recent Activities */}
                    <div className="bg-white rounded-2xl p-6 border border-[#e5e7eb] shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-[#2a436c]">Aktivitas Terbaru</h2>
                            <span className="text-xs text-[#6b7280] bg-[#f9fafb] px-2 py-1 rounded-full">
                                {recentActivities.length} aktivitas
                            </span>
                        </div>

                        <div className="space-y-4">
                            {recentActivities.map((activity) => (
                                <div key={activity.id} className="flex items-start gap-3 p-3 hover:bg-[#f9fafb] rounded-lg transition-colors group">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${activity.status === 'completed' ? 'bg-green-100' : 'bg-orange-100'
                                        }`}>
                                        <i className={`${activity.icon} ${activity.color} text-sm`}></i>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm text-[#355485] leading-relaxed">{activity.description}</div>
                                        <div className="text-xs text-[#6b7280] mt-1 flex items-center gap-1">
                                            <i className="ri-time-line"></i>
                                            {activity.date}
                                        </div>
                                    </div>
                                    <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${activity.status === 'completed' ? 'bg-green-500' : 'bg-orange-500'
                                        }`}></div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 pt-4 border-t border-[#e5e7eb]">
                            <button className="w-full text-center text-sm text-[#4f90c6] hover:text-[#355485] transition-colors font-medium py-2">
                                Lihat Semua Aktivitas
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* System Status */}
            <div className="bg-gradient-to-r from-[#355485] to-[#4f90c6] rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-bold mb-2">Status Sistem E-PKWT</h3>
                        <p className="text-blue-100">Semua sistem berjalan normal</p>
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">Online</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-center">
                    {[
                        { label: 'PKWT Aktif', value: '18' },
                        { label: 'Total Karyawan', value: '47' },
                        { label: 'Dokumen Tervalidasi', value: '42' },
                        { label: 'Masa Tenggang', value: '5' }
                    ].map((item, index) => (
                        <div key={index} className="bg-white/10 rounded-lg p-3">
                            <div className="text-2xl font-bold">{item.value}</div>
                            <div className="text-xs text-blue-100">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}