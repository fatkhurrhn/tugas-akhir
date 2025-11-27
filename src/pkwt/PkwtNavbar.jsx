import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation()

    // Cek apakah user sudah login (ini contoh, sesuaikan dengan logic authentication)
    const isLoggedIn = false // Ganti dengan state login yang sesungguhnya
    const userRole = 'company' // 'company' atau 'admin'

    return (
        <div>
            <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#355485] rounded-lg flex items-center justify-center">
                                    <i className="ri-file-text-line text-white text-lg"></i>
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-[#2a436c]">E-PKWT</h1>
                                    <p className="text-xs text-[#6b7280] -mt-1">DISNAKER Paser</p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                {isLoggedIn ? (
                                    // Navigation untuk user yang sudah login
                                    userRole === 'company' ? (
                                        // Navigation untuk perusahaan
                                        <>
                                            <Link
                                                to="/dashboard"
                                                className={`font-medium transition-colors ${location.pathname === '/dashboard'
                                                        ? 'text-[#355485] border-b-2 border-[#355485]'
                                                        : 'text-[#6b7280] hover:text-[#355485]'
                                                    }`}
                                            >
                                                Dashboard
                                            </Link>
                                            <Link
                                                to="/pkwt"
                                                className={`font-medium transition-colors ${location.pathname === '/pkwt'
                                                        ? 'text-[#355485] border-b-2 border-[#355485]'
                                                        : 'text-[#6b7280] hover:text-[#355485]'
                                                    }`}
                                            >
                                                PKWT
                                            </Link>
                                            <Link
                                                to="/pkwtt"
                                                className={`font-medium transition-colors ${location.pathname === '/pkwtt'
                                                        ? 'text-[#355485] border-b-2 border-[#355485]'
                                                        : 'text-[#6b7280] hover:text-[#355485]'
                                                    }`}
                                            >
                                                PKWTT
                                            </Link>
                                            <Link
                                                to="/profile"
                                                className={`font-medium transition-colors ${location.pathname === '/profile'
                                                        ? 'text-[#355485] border-b-2 border-[#355485]'
                                                        : 'text-[#6b7280] hover:text-[#355485]'
                                                    }`}
                                            >
                                                Profil Perusahaan
                                            </Link>
                                        </>
                                    ) : (
                                        // Navigation untuk admin (jika diperlukan)
                                        <>
                                            <Link
                                                to="/admin/dashboard"
                                                className="text-[#6b7280] hover:text-[#355485] font-medium transition-colors"
                                            >
                                                Dashboard
                                            </Link>
                                            <Link
                                                to="/admin/verification"
                                                className="text-[#6b7280] hover:text-[#355485] font-medium transition-colors"
                                            >
                                                Verifikasi
                                            </Link>
                                            <Link
                                                to="/admin/reports"
                                                className="text-[#6b7280] hover:text-[#355485] font-medium transition-colors"
                                            >
                                                Laporan
                                            </Link>
                                        </>
                                    )
                                ) : (
                                    // Navigation untuk user belum login
                                    <>
                                        <Link
                                            to="/"
                                            className={`font-medium transition-colors ${location.pathname === '/'
                                                    ? 'text-[#355485] border-b-2 border-[#355485]'
                                                    : 'text-[#6b7280] hover:text-[#355485]'
                                                }`}
                                        >
                                            Beranda
                                        </Link>
                                        <Link
                                            to="/tentang"
                                            className={`font-medium transition-colors ${location.pathname === '/tentang'
                                                    ? 'text-[#355485] border-b-2 border-[#355485]'
                                                    : 'text-[#6b7280] hover:text-[#355485]'
                                                }`}
                                        >
                                            Tentang
                                        </Link>
                                        <Link
                                            to="/panduan"
                                            className={`font-medium transition-colors ${location.pathname === '/panduan'
                                                    ? 'text-[#355485] border-b-2 border-[#355485]'
                                                    : 'text-[#6b7280] hover:text-[#355485]'
                                                }`}
                                        >
                                            Panduan
                                        </Link>
                                        <Link
                                            to="/kontak"
                                            className={`font-medium transition-colors ${location.pathname === '/kontak'
                                                    ? 'text-[#355485] border-b-2 border-[#355485]'
                                                    : 'text-[#6b7280] hover:text-[#355485]'
                                                }`}
                                        >
                                            Kontak
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Auth Buttons / User Menu */}
                        <div className="hidden md:flex items-center gap-4">
                            {isLoggedIn ? (
                                // User menu untuk yang sudah login
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-[#4f90c6] rounded-full flex items-center justify-center text-white text-sm font-medium">
                                        CP
                                    </div>
                                    <div className="text-sm">
                                        <p className="text-[#2a436c] font-medium">Nama Perusahaan</p>
                                        <p className="text-[#6b7280] text-xs">Perusahaan</p>
                                    </div>
                                    <button className="text-[#6b7280] hover:text-[#355485] transition-colors">
                                        <i className="ri-logout-box-r-line text-lg"></i>
                                    </button>
                                </div>
                            ) : (
                                // Button untuk belum login
                                <>
                                    <Link
                                        to="/login"
                                        className="text-[#355485] hover:text-[#2a436c] font-medium transition-colors"
                                    >
                                        Masuk
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="bg-[#355485] hover:bg-[#2a436c] text-white px-4 py-2 rounded-lg transition-colors font-medium"
                                    >
                                        Daftar Perusahaan
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button className="text-[#2a436c] p-2">
                                <i className="ri-menu-line text-xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar