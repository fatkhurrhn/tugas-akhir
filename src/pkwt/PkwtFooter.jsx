import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer className="bg-[#2a436c] text-white pt-12 pb-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        {/* Company Info */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                    <i className="ri-file-text-line text-white text-lg"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">E-PKWT</h4>
                                    <p className="text-xs text-[#cbdde9]">DISNAKER Paser</p>
                                </div>
                            </div>
                            <p className="text-sm text-[#cbdde9] leading-relaxed mb-4">
                                Sistem Elektronik Perjanjian Kerja Waktu Tertentu
                                DISNAKER Kabupaten Paser untuk memudahkan perusahaan
                                dalam mengelola perjanjian kerja.
                            </p>
                            <div className="flex space-x-3">
                                <a href="#" className="w-8 h-8 bg-[#355485] hover:bg-[#4f90c6] rounded-full flex items-center justify-center transition-colors">
                                    <i className="ri-facebook-fill text-sm"></i>
                                </a>
                                <a href="#" className="w-8 h-8 bg-[#355485] hover:bg-[#4f90c6] rounded-full flex items-center justify-center transition-colors">
                                    <i className="ri-instagram-line text-sm"></i>
                                </a>
                                <a href="#" className="w-8 h-8 bg-[#355485] hover:bg-[#4f90c6] rounded-full flex items-center justify-center transition-colors">
                                    <i className="ri-twitter-line text-sm"></i>
                                </a>
                                <a href="#" className="w-8 h-8 bg-[#355485] hover:bg-[#4f90c6] rounded-full flex items-center justify-center transition-colors">
                                    <i className="ri-youtube-line text-sm"></i>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h5 className="font-semibold mb-4 text-white">Menu Cepat</h5>
                            <ul className="space-y-2">
                                {[
                                    { name: 'Beranda', path: '/' },
                                    { name: 'Tentang E-PKWT', path: '/tentang' },
                                    { name: 'Panduan Penggunaan', path: '/panduan' },
                                    { name: 'Login Perusahaan', path: '/login' },
                                    { name: 'Daftar Perusahaan', path: '/register' }
                                ].map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            to={link.path}
                                            className="text-[#cbdde9] hover:text-white text-sm transition-colors block py-1"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Layanan PKWT */}
                        <div>
                            <h5 className="font-semibold mb-4 text-white">Layanan PKWT</h5>
                            <ul className="space-y-2">
                                {[
                                    'Pengajuan PKWT Baru',
                                    'Perpanjangan PKWT',
                                    'Perubahan PKWT',
                                    'Pelaporan PKWTT',
                                    'Status Pengajuan',
                                    'Arsip Dokumen'
                                ].map((service, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-[#cbdde9] hover:text-white text-sm transition-colors block py-1">
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Kontak & Support */}
                        <div>
                            <h5 className="font-semibold mb-4 text-white">Kontak & Dukungan</h5>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <i className="ri-map-pin-line text-[#4f90c6] mt-0.5"></i>
                                    <div>
                                        <p className="text-sm text-[#cbdde9]">
                                            Jl. Jenderal Sudirman No. 123<br />
                                            Kabupaten Paser, Kalimantan Timur
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <i className="ri-phone-line text-[#4f90c6]"></i>
                                    <p className="text-sm text-[#cbdde9]">(0543) 12345</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <i className="ri-mail-line text-[#4f90c6]"></i>
                                    <p className="text-sm text-[#cbdde9]">epkwt@disnaker.paser.go.id</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <i className="ri-time-line text-[#4f90c6]"></i>
                                    <p className="text-sm text-[#cbdde9]">Senin - Jumat, 08:00 - 16:00 WITA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="pt-8 border-t border-[#355485]">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-sm text-[#90b6d5] text-center md:text-left">
                                &copy; 2025 Sistem E-PKWT - Dinas Tenaga Kerja Kabupaten Paser.
                                Hak Cipta Dilindungi.
                            </p>
                            <div className="flex space-x-6 text-sm text-[#90b6d5]">
                                <a href="#" className="hover:text-white transition-colors">
                                    Kebijakan Privasi
                                </a>
                                <a href="#" className="hover:text-white transition-colors">
                                    Syarat & Ketentuan
                                </a>
                                <a href="#" className="hover:text-white transition-colors">
                                    Peta Situs
                                </a>
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <div className="mt-4 text-center">
                            <p className="text-xs text-[#6b7280]">
                                Sistem ini dikelola oleh Dinas Tenaga Kerja Kabupaten Paser untuk
                                memfasilitasi pengelolaan Perjanjian Kerja Waktu Tertentu secara elektronik.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer