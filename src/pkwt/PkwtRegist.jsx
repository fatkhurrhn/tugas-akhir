import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

export default function PkwtRegister() {
    const { step } = useParams()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        // Step 1: Data Perusahaan
        companyName: '',
        companyEmail: '',
        phone: '',
        companyAddress: '',
        province: '',
        city: '',
        postalCode: '',
        employeeCount: '',

        // Step 2: Data Legal
        businessLicense: '',
        npwp: '',
        companyType: '',
        establishmentDate: '',

        // Step 3: Data Akun
        adminName: '',
        adminPosition: '',
        adminEmail: '',
        password: '',
        confirmPassword: '',

        // Step 4: Dokumen
        documents: {
            aktaPendirian: null,
            npwpFile: null,
            siup: null,
            ktpPenanggungJawab: null
        }
    })

    const [agreement, setAgreement] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    // Step configuration
    const steps = [
        {
            id: 'data-perusahaan',
            title: 'Data Perusahaan',
            icon: 'ri-building-line',
            path: '/pkwt/register/data-perusahaan'
        },
        {
            id: 'data-legal',
            title: 'Data Legal',
            icon: 'ri-file-text-line',
            path: '/pkwt/register/data-legal'
        },
        {
            id: 'data-akun',
            title: 'Data Akun',
            icon: 'ri-user-line',
            path: '/pkwt/register/data-akun'
        },
        {
            id: 'dokumen',
            title: 'Dokumen',
            icon: 'ri-folder-line',
            path: '/pkwt/register/dokumen'
        }
    ]

    // Get current step index
    const currentStepIndex = steps.findIndex(s => s.id === step) || 0
    const currentStep = steps[currentStepIndex]

    // Handle step change via URL
    useEffect(() => {
        // Jika step tidak valid, redirect ke step pertama
        if (!currentStep && step) {
            navigate('/pkwt/register/data-perusahaan')
        }
    }, [step, currentStep, navigate])

    const handleChange = (e) => {
        const { name, value, files } = e.target
        if (files) {
            setFormData(prev => ({
                ...prev,
                documents: {
                    ...prev.documents,
                    [name]: files[0]
                }
            }))
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }))
        }
    }

    const nextStep = () => {
        if (currentStepIndex < steps.length - 1) {
            const nextStep = steps[currentStepIndex + 1]
            navigate(nextStep.path)
        }
    }

    const prevStep = () => {
        if (currentStepIndex > 0) {
            const prevStep = steps[currentStepIndex - 1]
            navigate(prevStep.path)
        }
    }

    const goToStep = (stepIndex) => {
        if (stepIndex <= currentStepIndex) {
            navigate(steps[stepIndex].path)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        console.log('Registration data:', formData)
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false)
            // Redirect to success page or login
            navigate('/pkwt/register/success')
        }, 3000)
    }

    // Load saved data from localStorage on component mount
    useEffect(() => {
        const savedData = localStorage.getItem('pkwt-registration-data')
        if (savedData) {
            setFormData(JSON.parse(savedData))
        }
    }, [])

    // Save data to localStorage whenever formData changes
    useEffect(() => {
        localStorage.setItem('pkwt-registration-data', JSON.stringify(formData))
    }, [formData])

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f9fafb] to-[#cbdde9] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[#2a436c]">
                        Pendaftaran Perusahaan
                    </h1>
                    <p className="mt-2 text-[#6b7280]">
                        Daftarkan perusahaan Anda untuk mengelola PKWT secara digital
                    </p>
                </div>

                {/* Progress Steps */}
                <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-[#e5e7eb]">
                    <div className="flex justify-between items-center">
                        {steps.map((stepItem, index) => (
                            <div key={stepItem.id} className="flex items-center flex-1">
                                <div className={`flex flex-col items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}>
                                    <button
                                        type="button"
                                        onClick={() => goToStep(index)}
                                        disabled={index > currentStepIndex}
                                        className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${index <= currentStepIndex
                                                ? 'bg-[#355485] border-[#355485] text-white cursor-pointer hover:bg-[#2a436c]'
                                                : 'bg-white border-[#e5e7eb] text-[#9ca3af] cursor-not-allowed'
                                            } transition-colors`}
                                    >
                                        <i className={`${stepItem.icon} ${index <= currentStepIndex ? 'text-white' : 'text-[#9ca3af]'}`}></i>
                                    </button>
                                    <span className={`text-sm mt-2 font-medium ${index <= currentStepIndex ? 'text-[#355485]' : 'text-[#9ca3af]'
                                        }`}>
                                        {stepItem.title}
                                    </span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={`flex-1 h-1 mx-4 ${index < currentStepIndex ? 'bg-[#355485]' : 'bg-[#e5e7eb]'
                                        } transition-colors`}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form Container */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#e5e7eb]">
                    <form onSubmit={handleSubmit}>
                        {/* Step 1: Data Perusahaan */}
                        {step === 'data-perusahaan' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-[#2a436c] mb-6">Data Perusahaan</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-[#355485] mb-2">
                                            Nama Perusahaan *
                                        </label>
                                        <input
                                            type="text"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                            placeholder="PT. Contoh Indonesia"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#355485] mb-2">
                                            Email Perusahaan *
                                        </label>
                                        <input
                                            type="email"
                                            name="companyEmail"
                                            value={formData.companyEmail}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                            placeholder="admin@perusahaan.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#355485] mb-2">
                                            Telepon *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                            placeholder="081234567890"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#355485] mb-2">
                                            Jumlah Karyawan *
                                        </label>
                                        <select
                                            name="employeeCount"
                                            value={formData.employeeCount}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                        >
                                            <option value="">Pilih jumlah karyawan</option>
                                            <option value="1-10">1-10 Karyawan</option>
                                            <option value="11-50">11-50 Karyawan</option>
                                            <option value="51-200">51-200 Karyawan</option>
                                            <option value="201-500">201-500 Karyawan</option>
                                            <option value="500+">500+ Karyawan</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[#355485] mb-2">
                                        Alamat Lengkap *
                                    </label>
                                    <textarea
                                        name="companyAddress"
                                        value={formData.companyAddress}
                                        onChange={handleChange}
                                        required
                                        rows={3}
                                        className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                        placeholder="Jl. Contoh No. 123, Kelurahan, Kecamatan"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-[#355485] mb-2">
                                            Provinsi *
                                        </label>
                                        <select
                                            name="province"
                                            value={formData.province}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                        >
                                            <option value="">Pilih Provinsi</option>
                                            <option value="kaltim">Kalimantan Timur</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#355485] mb-2">
                                            Kota/Kabupaten *
                                        </label>
                                        <select
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                        >
                                            <option value="">Pilih Kota/Kabupaten</option>
                                            <option value="paser">Kabupaten Paser</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#355485] mb-2">
                                            Kode Pos *
                                        </label>
                                        <input
                                            type="text"
                                            name="postalCode"
                                            value={formData.postalCode}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                            placeholder="12345"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Data Legal */}
                        {step === 'data-legal' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-[#2a436c] mb-6">Data Legal Perusahaan</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-[#355485] mb-2">
                                            Nomor NPWP Perusahaan *
                                        </label>
                                        <input
                                            type="text"
                                            name="npwp"
                                            value={formData.npwp}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                            placeholder="12.345.678.9-012.345"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#355485] mb-2">
                                            NIB (Nomor Induk Berusaha) *
                                        </label>
                                        <input
                                            type="text"
                                            name="businessLicense"
                                            value={formData.businessLicense}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                            placeholder="123456789012345"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#355485] mb-2">
                                            Bentuk Badan Usaha *
                                        </label>
                                        <select
                                            name="companyType"
                                            value={formData.companyType}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                        >
                                            <option value="">Pilih Bentuk Usaha</option>
                                            <option value="pt">PT (Perseroan Terbatas)</option>
                                            <option value="cv">CV (Commanditaire Vennootschap)</option>
                                            <option value="firma">Firma</option>
                                            <option value="ud">UD (Usaha Dagang)</option>
                                            <option value="koperasi">Koperasi</option>
                                            <option value="lainnya">Lainnya</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#355485] mb-2">
                                            Tanggal Berdiri *
                                        </label>
                                        <input
                                            type="date"
                                            name="establishmentDate"
                                            value={formData.establishmentDate}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Data Akun */}
                        {step === 'data-akun' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-[#2a436c] mb-6">Data Administrator</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-[#355485] mb-2">
                                            Nama Lengkap Administrator *
                                        </label>
                                        <input
                                            type="text"
                                            name="adminName"
                                            value={formData.adminName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                            placeholder="Nama lengkap penanggung jawab"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#355485] mb-2">
                                            Jabatan *
                                        </label>
                                        <input
                                            type="text"
                                            name="adminPosition"
                                            value={formData.adminPosition}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                            placeholder="HR Manager / Direktur"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#355485] mb-2">
                                            Email Administrator *
                                        </label>
                                        <input
                                            type="email"
                                            name="adminEmail"
                                            value={formData.adminEmail}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                            placeholder="admin@perusahaan.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#355485] mb-2">
                                            Password *
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                            placeholder="Minimal 8 karakter"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-[#355485] mb-2">
                                            Konfirmasi Password *
                                        </label>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                                            placeholder="Ketik ulang password"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Dokumen */}
                        {step === 'dokumen' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-[#2a436c] mb-6">Unggah Dokumen</h2>
                                <p className="text-[#6b7280] mb-6">
                                    Silakan unggah dokumen-dokumen legal perusahaan dalam format PDF atau JPG (maks. 2MB per file)
                                </p>

                                <div className="space-y-4">
                                    {[
                                        {
                                            name: 'aktaPendirian',
                                            label: 'Akta Pendirian Perusahaan',
                                            required: true
                                        },
                                        {
                                            name: 'npwpFile',
                                            label: 'NPWP Perusahaan',
                                            required: true
                                        },
                                        {
                                            name: 'siup',
                                            label: 'SIUP/TDP',
                                            required: true
                                        },
                                        {
                                            name: 'ktpPenanggungJawab',
                                            label: 'KTP Penanggung Jawab',
                                            required: true
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
                                                accept=".pdf,.jpg,.jpeg,.png"
                                                className="w-full px-3 py-2 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-[#355485] file:text-white hover:file:bg-[#2a436c]"
                                            />
                                            <p className="text-xs text-[#6b7280] mt-1">Format: PDF, JPG, PNG (maks. 2MB)</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Agreement */}
                                <div className="border-t border-[#e5e7eb] pt-6 mt-6">
                                    <div className="flex items-start space-x-3">
                                        <input
                                            type="checkbox"
                                            id="agreement"
                                            checked={agreement}
                                            onChange={(e) => setAgreement(e.target.checked)}
                                            required
                                            className="w-4 h-4 text-[#355485] border-[#e5e7eb] rounded focus:ring-[#4f90c6] mt-1"
                                        />
                                        <label htmlFor="agreement" className="text-sm text-[#6b7280]">
                                            Saya menyatakan bahwa semua data dan dokumen yang saya berikan adalah benar dan sah.
                                            Saya bersedia mematuhi semua peraturan dan ketentuan yang berlaku dalam penggunaan sistem E-PKWT DISNAKER Kabupaten Paser.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between pt-8 mt-8 border-t border-[#e5e7eb]">
                            <div>
                                {currentStepIndex > 0 && (
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className="px-6 py-3 border border-[#e5e7eb] text-[#355485] rounded-lg hover:bg-[#f9fafb] transition-colors font-medium"
                                    >
                                        <i className="ri-arrow-left-line mr-2"></i>
                                        Kembali
                                    </button>
                                )}
                            </div>

                            <div>
                                {currentStepIndex < steps.length - 1 ? (
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="px-6 py-3 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] transition-colors font-medium"
                                    >
                                        Lanjut
                                        <i className="ri-arrow-right-line ml-2"></i>
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={!agreement || isLoading}
                                        className="px-6 py-3 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center">
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                                Memproses Pendaftaran...
                                            </div>
                                        ) : (
                                            <div className="flex items-center">
                                                <i className="ri-check-line mr-2"></i>
                                                Daftar Perusahaan
                                            </div>
                                        )}
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </div>

                {/* Login Link */}
                <div className="text-center mt-8">
                    <p className="text-[#6b7280]">
                        Sudah memiliki akun?{' '}
                        <Link
                            to="/login"
                            className="font-medium text-[#4f90c6] hover:text-[#355485] transition-colors"
                        >
                            Masuk di sini
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}