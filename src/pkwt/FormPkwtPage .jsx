// src/pages/FormPkwtPage.jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function FormPkwtPage() {
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [formData, setFormData] = useState({
        // Data Karyawan
        employeeName: '',
        nik: '',
        placeOfBirth: '',
        dateOfBirth: '',
        gender: '',
        address: '',
        phone: '',
        email: '',

        // Data Pekerjaan
        position: '',
        department: '',
        workLocation: '',
        employeeType: 'pkwt',
        startDate: '',
        endDate: '',
        workingDays: '5',
        workingHours: '8',

        // Kompensasi
        basicSalary: '',
        transportAllowance: '',
        mealAllowance: '',
        otherAllowance: '',
        salaryPaymentMethod: 'transfer',
        bankName: '',
        accountNumber: '',
        accountHolder: '',

        // Hak & Kewajiban
        probationPeriod: '3',
        workingHoursDetail: '09:00 - 18:00',
        overtimeRules: 'sesuai-uu',
        leaveEntitlement: '12',
        bpjsRegistration: 'yes',
        otherBenefits: '',

        // Dokumen
        idCard: null,
        lastEducationCertificate: null,
        familyCard: null,
        photo: null,
        cv: null
    })

    const handleChange = (e) => {
        const { name, value, files, type } = e.target
        if (type === 'file') {
            setFormData(prev => ({
                ...prev,
                [name]: files[0]
            }))
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 2000))
            console.log('Form submitted:', formData)
            // Redirect to success page or PKWT list
            navigate('/dashboard/pkwt')
        } catch (error) {
            console.error('Error submitting form:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const calculateTotalSalary = () => {
        const basic = parseInt(formData.basicSalary || 0)
        const transport = parseInt(formData.transportAllowance || 0)
        const meal = parseInt(formData.mealAllowance || 0)
        const other = parseInt(formData.otherAllowance || 0)
        return basic + transport + meal + other
    }

    const calculateContractDuration = () => {
        if (formData.startDate && formData.endDate) {
            const start = new Date(formData.startDate)
            const end = new Date(formData.endDate)
            const diffTime = Math.abs(end - start)
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
            return diffDays
        }
        return 0
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-[#2a436c]">Buat PKWT Baru</h1>
                    <p className="text-[#6b7280]">Isi form untuk membuat Perjanjian Kerja Waktu Tertentu</p>
                </div>
                <Link
                    to="/dashboard/pkwt"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-[#e5e7eb] text-[#6b7280] rounded-lg hover:bg-[#f9fafb] transition-colors font-medium"
                >
                    <i className="ri-arrow-left-line"></i>
                    Kembali ke Daftar PKWT
                </Link>
            </div>

            {/* Form Container */}
            <div className="bg-white rounded-xl border border-[#e5e7eb] shadow-sm">
                <form onSubmit={handleSubmit} className="p-6 space-y-8">

                    {/* Section 1: Data Karyawan */}
                    <div className="border-b border-[#e5e7eb] pb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                <i className="ri-user-line text-white text-lg"></i>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-[#2a436c]">Data Pribadi Karyawan</h2>
                                <p className="text-[#6b7280]">Informasi lengkap identitas karyawan</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Nama Lengkap *
                                </label>
                                <input
                                    type="text"
                                    name="employeeName"
                                    value={formData.employeeName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                    placeholder="Masukkan nama lengkap"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    NIK *
                                </label>
                                <input
                                    type="text"
                                    name="nik"
                                    value={formData.nik}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                    placeholder="Nomor Induk Kependudukan"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Tempat Lahir *
                                </label>
                                <input
                                    type="text"
                                    name="placeOfBirth"
                                    value={formData.placeOfBirth}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                    placeholder="Kota tempat lahir"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Tanggal Lahir *
                                </label>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Jenis Kelamin *
                                </label>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                >
                                    <option value="">Pilih Jenis Kelamin</option>
                                    <option value="male">Laki-laki</option>
                                    <option value="female">Perempuan</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Nomor Telepon *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                    placeholder="08xxxxxxxxxx"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Alamat Lengkap *
                                </label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                    placeholder="Alamat lengkap sesuai KTP"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                    placeholder="email@example.com"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Data Pekerjaan */}
                    <div className="border-b border-[#e5e7eb] pb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                                <i className="ri-briefcase-line text-white text-lg"></i>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-[#2a436c]">Data Pekerjaan</h2>
                                <p className="text-[#6b7280]">Detail posisi dan masa kontrak</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Posisi/Jabatan *
                                </label>
                                <input
                                    type="text"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                    placeholder="Contoh: Frontend Developer"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Departemen *
                                </label>
                                <select
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                >
                                    <option value="">Pilih Departemen</option>
                                    <option value="IT">IT</option>
                                    <option value="HR">HR</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Operations">Operations</option>
                                    <option value="Design">Design</option>
                                    <option value="Content">Content</option>
                                    <option value="Sales">Sales</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Lokasi Kerja *
                                </label>
                                <input
                                    type="text"
                                    name="workLocation"
                                    value={formData.workLocation}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                    placeholder="Alamat kantor"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Jenis Pekerja *
                                </label>
                                <select
                                    name="employeeType"
                                    value={formData.employeeType}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                >
                                    <option value="pkwt">PKWT</option>
                                    <option value="pkwt-perpanjangan">PKWT Perpanjangan</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Tanggal Mulai *
                                </label>
                                <input
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Tanggal Berakhir *
                                </label>
                                <input
                                    type="date"
                                    name="endDate"
                                    value={formData.endDate}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Hari Kerja per Minggu *
                                </label>
                                <select
                                    name="workingDays"
                                    value={formData.workingDays}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                >
                                    <option value="5">5 Hari (Senin-Jumat)</option>
                                    <option value="6">6 Hari (Senin-Sabtu)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Jam Kerja per Hari *
                                </label>
                                <select
                                    name="workingHours"
                                    value={formData.workingHours}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                >
                                    <option value="7">7 Jam</option>
                                    <option value="8">8 Jam</option>
                                    <option value="9">9 Jam</option>
                                </select>
                            </div>
                        </div>

                        {/* Contract Summary */}
                        {formData.startDate && formData.endDate && (
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                                <div className="flex items-center gap-2 text-blue-800 mb-2">
                                    <i className="ri-information-line"></i>
                                    <span className="font-medium">Ringkasan Kontrak</span>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                    <div>
                                        <div className="text-blue-600">Durasi Kontrak</div>
                                        <div className="font-medium">{calculateContractDuration()} hari</div>
                                    </div>
                                    <div>
                                        <div className="text-blue-600">Tanggal Mulai</div>
                                        <div className="font-medium">{new Date(formData.startDate).toLocaleDateString('id-ID')}</div>
                                    </div>
                                    <div>
                                        <div className="text-blue-600">Tanggal Berakhir</div>
                                        <div className="font-medium">{new Date(formData.endDate).toLocaleDateString('id-ID')}</div>
                                    </div>
                                    <div>
                                        <div className="text-blue-600">Status</div>
                                        <div className="font-medium text-green-600">Akan Dimulai</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 3: Kompensasi */}
                    <div className="border-b border-[#e5e7eb] pb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                                <i className="ri-money-dollar-circle-line text-white text-lg"></i>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-[#2a436c]">Kompensasi</h2>
                                <p className="text-[#6b7280]">Gaji, tunjangan, dan metode pembayaran</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Gaji Pokok *
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b7280]">Rp</span>
                                    <input
                                        type="number"
                                        name="basicSalary"
                                        value={formData.basicSalary}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                        placeholder="0"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Tunjangan Transport *
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b7280]">Rp</span>
                                    <input
                                        type="number"
                                        name="transportAllowance"
                                        value={formData.transportAllowance}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                        placeholder="0"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Tunjangan Makan *
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b7280]">Rp</span>
                                    <input
                                        type="number"
                                        name="mealAllowance"
                                        value={formData.mealAllowance}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                        placeholder="0"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Tunjangan Lainnya
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b7280]">Rp</span>
                                    <input
                                        type="number"
                                        name="otherAllowance"
                                        value={formData.otherAllowance}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                        placeholder="0"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Metode Pembayaran *
                                </label>
                                <select
                                    name="salaryPaymentMethod"
                                    value={formData.salaryPaymentMethod}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                >
                                    <option value="transfer">Transfer Bank</option>
                                    <option value="cash">Tunai</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Nama Bank *
                                </label>
                                <input
                                    type="text"
                                    name="bankName"
                                    value={formData.bankName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                    placeholder="Nama bank"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Nomor Rekening *
                                </label>
                                <input
                                    type="text"
                                    name="accountNumber"
                                    value={formData.accountNumber}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                    placeholder="Nomor rekening"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Nama Pemilik Rekening *
                                </label>
                                <input
                                    type="text"
                                    name="accountHolder"
                                    value={formData.accountHolder}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                    placeholder="Nama sesuai rekening"
                                />
                            </div>
                        </div>

                        {/* Salary Summary */}
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2 text-green-800">
                                    <i className="ri-calculator-line"></i>
                                    <span className="font-medium">Ringkasan Kompensasi Bulanan</span>
                                </div>
                                <div className="text-lg font-bold text-green-800">
                                    Rp {calculateTotalSalary().toLocaleString('id-ID')}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div>
                                    <div className="text-green-600">Gaji Pokok</div>
                                    <div className="font-medium">Rp {(parseInt(formData.basicSalary) || 0).toLocaleString('id-ID')}</div>
                                </div>
                                <div>
                                    <div className="text-green-600">Transport</div>
                                    <div className="font-medium">Rp {(parseInt(formData.transportAllowance) || 0).toLocaleString('id-ID')}</div>
                                </div>
                                <div>
                                    <div className="text-green-600">Makan</div>
                                    <div className="font-medium">Rp {(parseInt(formData.mealAllowance) || 0).toLocaleString('id-ID')}</div>
                                </div>
                                <div>
                                    <div className="text-green-600">Lainnya</div>
                                    <div className="font-medium">Rp {(parseInt(formData.otherAllowance) || 0).toLocaleString('id-ID')}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 4: Hak & Kewajiban */}
                    <div className="border-b border-[#e5e7eb] pb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                                <i className="ri-scales-3-line text-white text-lg"></i>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-[#2a436c]">Hak & Kewajiban</h2>
                                <p className="text-[#6b7280]">Ketentuan kerja dan benefit</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Masa Percobaan (bulan) *
                                </label>
                                <select
                                    name="probationPeriod"
                                    value={formData.probationPeriod}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                >
                                    <option value="1">1 Bulan</option>
                                    <option value="2">2 Bulan</option>
                                    <option value="3">3 Bulan</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Jam Kerja *
                                </label>
                                <input
                                    type="text"
                                    name="workingHoursDetail"
                                    value={formData.workingHoursDetail}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                    placeholder="Contoh: 09:00 - 18:00"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Ketentuan Lembur *
                                </label>
                                <select
                                    name="overtimeRules"
                                    value={formData.overtimeRules}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                >
                                    <option value="sesuai-uu">Sesuai UU Ketenagakerjaan</option>
                                    <option value="perusahaan">Ketentuan Perusahaan</option>
                                    <option value="tidak-ada">Tidak Ada Lembur</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Hak Cuti (hari/tahun) *
                                </label>
                                <select
                                    name="leaveEntitlement"
                                    value={formData.leaveEntitlement}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                >
                                    <option value="12">12 Hari</option>
                                    <option value="18">18 Hari</option>
                                    <option value="24">24 Hari</option>
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Pendaftaran BPJS *
                                </label>
                                <div className="flex gap-4">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="bpjsRegistration"
                                            value="yes"
                                            checked={formData.bpjsRegistration === 'yes'}
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        <span>Ya, didaftarkan BPJS</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="bpjsRegistration"
                                            value="no"
                                            checked={formData.bpjsRegistration === 'no'}
                                            onChange={handleChange}
                                            className="mr-2"
                                        />
                                        <span>Tidak</span>
                                    </label>
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-[#355485] mb-2">
                                    Benefit Lainnya
                                </label>
                                <textarea
                                    name="otherBenefits"
                                    value={formData.otherBenefits}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                    placeholder="Contoh: Asuransi kesehatan, bonus tahunan, training, dll."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section 5: Dokumen */}
                    <div className="pb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                                <i className="ri-folder-line text-white text-lg"></i>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-[#2a436c]">Upload Dokumen</h2>
                                <p className="text-[#6b7280]">Berkas pendukung yang diperlukan</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    name: 'idCard',
                                    label: 'KTP',
                                    required: true,
                                    description: 'Scan/foto KTP yang masih berlaku',
                                    accept: '.pdf,.jpg,.jpeg,.png'
                                },
                                {
                                    name: 'lastEducationCertificate',
                                    label: 'Ijazah Terakhir',
                                    required: true,
                                    description: 'Scan/foto ijazah pendidikan terakhir',
                                    accept: '.pdf,.jpg,.jpeg,.png'
                                },
                                {
                                    name: 'familyCard',
                                    label: 'Kartu Keluarga',
                                    required: false,
                                    description: 'Scan/foto kartu keluarga (opsional)',
                                    accept: '.pdf,.jpg,.jpeg,.png'
                                },
                                {
                                    name: 'photo',
                                    label: 'Pas Foto 3x4',
                                    required: true,
                                    description: 'Foto terbaru ukuran 3x4 dengan background merah',
                                    accept: '.jpg,.jpeg,.png'
                                },
                                {
                                    name: 'cv',
                                    label: 'Curriculum Vitae (CV)',
                                    required: true,
                                    description: 'Dokumen CV terbaru',
                                    accept: '.pdf,.doc,.docx'
                                }
                            ].map((doc, index) => (
                                <div key={doc.name} className="border border-[#e5e7eb] rounded-lg p-4">
                                    <label className="block text-sm font-medium text-[#355485] mb-2">
                                        {doc.label} {doc.required && '*'}
                                    </label>
                                    <input
                                        type="file"
                                        name={doc.name}
                                        onChange={handleChange}
                                        required={doc.required}
                                        accept={doc.accept}
                                        className="w-full px-3 py-2 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-[#355485] file:text-white hover:file:bg-[#2a436c]"
                                    />
                                    <p className="text-xs text-[#6b7280] mt-1">{doc.description}</p>
                                    {formData[doc.name] && (
                                        <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
                                            <i className="ri-check-line"></i>
                                            File terpilih: {formData[doc.name].name}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Terms and Conditions */}
                        <div className="border-t border-[#e5e7eb] pt-6 mt-6">
                            <div className="flex items-start space-x-3">
                                <input
                                    type="checkbox"
                                    id="agreement"
                                    required
                                    className="w-4 h-4 text-[#355485] border-[#e5e7eb] rounded focus:ring-[#4f90c6] mt-1"
                                />
                                <label htmlFor="agreement" className="text-sm text-[#6b7280]">
                                    Saya menyatakan bahwa semua data dan dokumen yang saya berikan adalah benar dan sah.
                                    Saya memahami bahwa data ini akan digunakan untuk proses pembuatan Perjanjian Kerja
                                    Waktu Tertentu dan akan tunduk pada peraturan yang berlaku.
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-6 border-t border-[#e5e7eb]">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                        >
                            {isSubmitting ? (
                                <div className="flex items-center">
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                    Memproses...
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <i className="ri-check-line mr-2"></i>
                                    Simpan & Submit PKWT
                                </div>
                            )}
                        </button>
                    </div>
                </form>
            </div>

            {/* Quick Help */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                    <i className="ri-question-line text-blue-600 text-xl mt-0.5"></i>
                    <div>
                        <h3 className="font-medium text-blue-800 mb-2">Butuh Bantuan?</h3>
                        <p className="text-blue-700 text-sm mb-3">
                            Jika Anda mengalami kesulitan dalam mengisi form, silakan hubungi tim HR atau
                            konsultasikan dengan DISNAKER Kabupaten Paser.
                        </p>
                        <div className="flex gap-2">
                            <button className="text-xs text-blue-600 hover:text-blue-800 transition-colors">
                                <i className="ri-phone-line mr-1"></i>
                                Hubungi HR
                            </button>
                            <button className="text-xs text-blue-600 hover:text-blue-800 transition-colors">
                                <i className="ri-customer-service-line mr-1"></i>
                                Bantuan DISNAKER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}