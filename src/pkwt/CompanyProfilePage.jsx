// src/pages/CompanyProfilePage.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CompanyProfilePage() {
    const [isEditing, setIsEditing] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    // Data dummy perusahaan
    const [companyData, setCompanyData] = useState({
        // Data Umum
        companyName: 'CV. Teknologi Maju Indonesia',
        companyType: 'Perseroan Terbatas (PT)',
        businessField: 'Teknologi Informasi dan Konsultan',
        establishmentDate: '2020-01-15',
        companyEmail: 'hrd@teknologimaju.co.id',
        companyPhone: '(0543) 12345',
        companyWebsite: 'www.teknologimaju.co.id',

        // Alamat
        address: 'Jl. Sudirman No. 123, Kelurahan Sungai Bedungun',
        district: 'Kecamatan Tanah Grogot',
        city: 'Kabupaten Paser',
        province: 'Kalimantan Timur',
        postalCode: '76251',

        // Data Legal
        npwp: '12.345.678.9-012.345',
        nib: '123456789012345',
        businessLicense: '503/12345/DISNAKER/2024',
        siup: 'SIUP-12345/TPK/2024',

        // Kontak Perusahaan
        picName: 'Budi Santoso',
        picPosition: 'HR Manager',
        picPhone: '081234567890',
        picEmail: 'budi.santoso@teknologimaju.co.id',

        // Statistik
        employeeCount: '47',
        pkwtCount: '23',
        pkwttCount: '24',
        averageEmployeeAge: '28',

        // Dokumen
        documents: {
            aktaPendirian: 'akta_pendirian.pdf',
            npwpFile: 'npwp_perusahaan.pdf',
            siupFile: 'siup_dokumen.pdf',
            companyLogo: 'logo_perusahaan.png'
        }
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setCompanyData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSave = async () => {
        setIsLoading(true)
        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 2000))
            setIsEditing(false)
            console.log('Company data saved:', companyData)
        } catch (error) {
            console.error('Error saving data:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleCancel = () => {
        // Reset to original data (in real app, you might want to fetch from API)
        setCompanyData({
            ...companyData
        })
        setIsEditing(false)
    }

    const stats = [
        {
            title: 'Total Karyawan',
            value: companyData.employeeCount,
            icon: 'ri-team-line',
            color: 'bg-blue-500',
            description: 'Semua karyawan'
        },
        {
            title: 'Karyawan PKWT',
            value: companyData.pkwtCount,
            icon: 'ri-file-text-line',
            color: 'bg-green-500',
            description: 'Kontrak waktu tertentu'
        },
        {
            title: 'Karyawan PKWTT',
            value: companyData.pkwttCount,
            icon: 'ri-user-follow-line',
            color: 'bg-purple-500',
            description: 'Karyawan tetap'
        },
        {
            title: 'Rata-rata Usia',
            value: companyData.averageEmployeeAge,
            icon: 'ri-user-heart-line',
            color: 'bg-orange-500',
            description: 'Tahun'
        }
    ]

    const documentList = [
        {
            name: 'Akta Pendirian Perusahaan',
            file: companyData.documents.aktaPendirian,
            icon: 'ri-file-text-line',
            color: 'text-blue-600',
            uploadDate: '15 Jan 2020'
        },
        {
            name: 'NPWP Perusahaan',
            file: companyData.documents.npwpFile,
            icon: 'ri-file-copy-line',
            color: 'text-green-600',
            uploadDate: '20 Jan 2020'
        },
        {
            name: 'SIUP/TDP',
            file: companyData.documents.siupFile,
            icon: 'ri-briefcase-line',
            color: 'text-purple-600',
            uploadDate: '25 Jan 2020'
        },
        {
            name: 'Logo Perusahaan',
            file: companyData.documents.companyLogo,
            icon: 'ri-image-line',
            color: 'text-orange-600',
            uploadDate: '10 Feb 2020'
        }
    ]

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-[#2a436c]">Profil Perusahaan</h1>
                    <p className="text-[#6b7280]">Kelola data dan informasi perusahaan Anda</p>
                </div>
                <div className="flex gap-2">
                    {!isEditing ? (
                        <>
                            <button
                                onClick={() => setIsEditing(true)}
                                className="inline-flex items-center gap-2 px-4 py-2 border border-[#e5e7eb] text-[#6b7280] rounded-lg hover:bg-[#f9fafb] transition-colors font-medium"
                            >
                                <i className="ri-edit-line"></i>
                                Edit Profil
                            </button>
                            <button className="inline-flex items-center gap-2 px-4 py-2 border border-[#e5e7eb] text-[#6b7280] rounded-lg hover:bg-[#f9fafb] transition-colors font-medium">
                                <i className="ri-download-line"></i>
                                Export Data
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={handleCancel}
                                className="inline-flex items-center gap-2 px-4 py-2 border border-[#e5e7eb] text-[#6b7280] rounded-lg hover:bg-[#f9fafb] transition-colors font-medium"
                            >
                                <i className="ri-close-line"></i>
                                Batal
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={isLoading}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] disabled:opacity-50 transition-colors font-medium"
                            >
                                {isLoading ? (
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                        Menyimpan...
                                    </div>
                                ) : (
                                    <div className="flex items-center">
                                        <i className="ri-save-line"></i>
                                        Simpan Perubahan
                                    </div>
                                )}
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* Company Header Card */}
            <div className="bg-gradient-to-r from-[#355485] to-[#4f90c6] rounded-2xl p-6 text-white">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                            <i className="ri-building-line text-3xl"></i>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold mb-2">{companyData.companyName}</h1>
                            <p className="text-blue-100">{companyData.businessField}</p>
                            <div className="flex items-center gap-4 mt-2 text-blue-100 text-sm">
                                <span className="flex items-center gap-1">
                                    <i className="ri-calendar-line"></i>
                                    Berdiri sejak {new Date(companyData.establishmentDate).toLocaleDateString('id-ID', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                                <span className="flex items-center gap-1">
                                    <i className="ri-shield-check-line"></i>
                                    Terdaftar DISNAKER Paser
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold">{companyData.employeeCount}</div>
                        <div className="text-blue-100 text-sm">Total Karyawan</div>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-sm">
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Company Information */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Basic Information */}
                    <div className="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                <i className="ri-building-2-line text-white text-lg"></i>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-[#2a436c]">Informasi Perusahaan</h2>
                                <p className="text-[#6b7280]">Data umum dan legal perusahaan</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Nama Perusahaan *
                                </label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={companyData.companyName}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] disabled:bg-[#f9fafb] disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Bentuk Badan Usaha *
                                </label>
                                <select
                                    name="companyType"
                                    value={companyData.companyType}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] disabled:bg-[#f9fafb] disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                >
                                    <option value="Perseroan Terbatas (PT)">Perseroan Terbatas (PT)</option>
                                    <option value="CV (Commanditaire Vennootschap)">CV (Commanditaire Vennootschap)</option>
                                    <option value="Firma">Firma</option>
                                    <option value="UD (Usaha Dagang)">UD (Usaha Dagang)</option>
                                    <option value="Koperasi">Koperasi</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Bidang Usaha *
                                </label>
                                <input
                                    type="text"
                                    name="businessField"
                                    value={companyData.businessField}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] disabled:bg-[#f9fafb] disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Tanggal Berdiri *
                                </label>
                                <input
                                    type="date"
                                    name="establishmentDate"
                                    value={companyData.establishmentDate}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] disabled:bg-[#f9fafb] disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Email Perusahaan *
                                </label>
                                <input
                                    type="email"
                                    name="companyEmail"
                                    value={companyData.companyEmail}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] disabled:bg-[#f9fafb] disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Telepon Perusahaan *
                                </label>
                                <input
                                    type="text"
                                    name="companyPhone"
                                    value={companyData.companyPhone}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] disabled:bg-[#f9fafb] disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Website
                                </label>
                                <input
                                    type="text"
                                    name="companyWebsite"
                                    value={companyData.companyWebsite}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] disabled:bg-[#f9fafb] disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Legal Information */}
                    <div className="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                                <i className="ri-shield-check-line text-white text-lg"></i>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-[#2a436c]">Data Legal</h2>
                                <p className="text-[#6b7280]">Dokumen dan izin legal perusahaan</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    NPWP Perusahaan *
                                </label>
                                <input
                                    type="text"
                                    name="npwp"
                                    value={companyData.npwp}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] disabled:bg-[#f9fafb] disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    NIB (Nomor Induk Berusaha) *
                                </label>
                                <input
                                    type="text"
                                    name="nib"
                                    value={companyData.nib}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] disabled:bg-[#f9fafb] disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Izin Usaha (SIUP) *
                                </label>
                                <input
                                    type="text"
                                    name="siup"
                                    value={companyData.siup}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] disabled:bg-[#f9fafb] disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Izin DISNAKER *
                                </label>
                                <input
                                    type="text"
                                    name="businessLicense"
                                    value={companyData.businessLicense}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] disabled:bg-[#f9fafb] disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Address Information */}
                    <div className="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                                <i className="ri-map-pin-line text-white text-lg"></i>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-[#2a436c]">Alamat Perusahaan</h2>
                                <p className="text-[#6b7280]">Lokasi kantor sesuai legal</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Alamat Lengkap *
                                </label>
                                <textarea
                                    name="address"
                                    value={companyData.address}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    rows={3}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] disabled:bg-[#f9fafb] disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Kelurahan *
                                </label>
                                <input
                                    type="text"
                                    name="district"
                                    value={companyData.district}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] disabled:bg-[#f9fafb] disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Kecamatan *
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    value={companyData.city}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] disabled:bg-[#f9fafb] disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Kabupaten/Kota *
                                </label>
                                <input
                                    type="text"
                                    name="province"
                                    value={companyData.province}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] disabled:bg-[#f9fafb] disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Kode Pos *
                                </label>
                                <input
                                    type="text"
                                    name="postalCode"
                                    value={companyData.postalCode}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] disabled:bg-[#f9fafb] disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Contact Person */}
                    <div className="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                                <i className="ri-contacts-line text-white text-lg"></i>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-[#2a436c]">Penanggung Jawab</h2>
                                <p className="text-[#6b7280]">Contact person perusahaan</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Nama PIC *
                                </label>
                                <input
                                    type="text"
                                    name="picName"
                                    value={companyData.picName}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] disabled:bg-[#f9fafb] disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Jabatan *
                                </label>
                                <input
                                    type="text"
                                    name="picPosition"
                                    value={companyData.picPosition}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] disabled:bg-[#f9fafb] disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Telepon PIC *
                                </label>
                                <input
                                    type="text"
                                    name="picPhone"
                                    value={companyData.picPhone}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] disabled:bg-[#f9fafb] disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Email PIC *
                                </label>
                                <input
                                    type="email"
                                    name="picEmail"
                                    value={companyData.picEmail}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] disabled:bg-[#f9fafb] disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Documents */}
                    <div className="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                                <i className="ri-folder-line text-white text-lg"></i>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-[#2a436c]">Dokumen Perusahaan</h2>
                                <p className="text-[#6b7280]">Berkas legal yang diupload</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {documentList.map((doc, index) => (
                                <div key={index} className="flex items-center justify-between p-3 border border-[#e5e7eb] rounded-lg hover:bg-[#f9fafb] transition-colors">
                                    <div className="flex items-center gap-3">
                                        <i className={`${doc.icon} ${doc.color} text-lg`}></i>
                                        <div>
                                            <div className="text-sm font-medium text-[#2a436c]">{doc.name}</div>
                                            <div className="text-xs text-[#6b7280]">Upload: {doc.uploadDate}</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-1">
                                        <button className="p-1 text-[#6b7280] hover:text-[#355485] transition-colors" title="Download">
                                            <i className="ri-download-line"></i>
                                        </button>
                                        {isEditing && (
                                            <button className="p-1 text-[#6b7280] hover:text-[#355485] transition-colors" title="Upload Ulang">
                                                <i className="ri-upload-line"></i>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {isEditing && (
                            <button className="w-full mt-4 py-2 border-2 border-dashed border-[#e5e7eb] text-[#6b7280] rounded-lg hover:border-[#4f90c6] hover:text-[#355485] transition-colors">
                                <i className="ri-add-line mr-2"></i>
                                Upload Dokumen Baru
                            </button>
                        )}
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-xl p-6 border border-[#e5e7eb] shadow-sm">
                        <h3 className="text-lg font-medium text-[#2a436c] mb-4">Aksi Cepat</h3>
                        <div className="space-y-2">
                            {[
                                {
                                    title: 'Update Logo',
                                    icon: 'ri-image-line',
                                    color: 'text-blue-600'
                                },
                                {
                                    title: 'Unduh Data Perusahaan',
                                    icon: 'ri-download-line',
                                    color: 'text-green-600'
                                },
                                {
                                    title: 'Riwayat Perubahan',
                                    icon: 'ri-history-line',
                                    color: 'text-purple-600'
                                },
                                {
                                    title: 'Bantuan DISNAKER',
                                    icon: 'ri-customer-service-line',
                                    color: 'text-orange-600'
                                }
                            ].map((action, index) => (
                                <button
                                    key={index}
                                    className="w-full flex items-center gap-3 p-3 text-left text-[#6b7280] hover:text-[#355485] hover:bg-[#f9fafb] rounded-lg transition-colors"
                                >
                                    <i className={`${action.icon} ${action.color} text-lg`}></i>
                                    <span className="font-medium">{action.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}