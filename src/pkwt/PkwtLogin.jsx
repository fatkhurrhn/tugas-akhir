import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function PkwtLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Handle login logic here
    console.log('Login data:', formData, rememberMe)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9fafb] to-[#cbdde9] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#2a436c]">
            Masuk ke E-PKWT
          </h2>
          <p className="mt-2 text-[#6b7280]">
            Sistem Elektronik Perjanjian Kerja Waktu Tertentu
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#e5e7eb]">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#355485] mb-2">
                Email Perusahaan
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-mail-line text-[#9ca3af]"></i>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-colors"
                  placeholder="nama@perusahaan.com"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-[#355485]">
                  Kata Sandi
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-[#4f90c6] hover:text-[#355485] transition-colors"
                >
                  Lupa kata sandi?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-lock-line text-[#9ca3af]"></i>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-colors"
                  placeholder="Masukkan kata sandi"
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-[#355485] border-[#e5e7eb] rounded focus:ring-[#4f90c6]"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-[#6b7280]">
                  Ingat saya
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#355485] hover:bg-[#2a436c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4f90c6] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Memproses...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <i className="ri-login-box-line mr-2"></i>
                    Masuk ke Sistem
                  </div>
                )}
              </button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#e5e7eb]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-[#6b7280]">Butuh bantuan?</span>
              </div>
            </div>

            {/* Support Links */}
            <div className="text-center space-y-3">
              <div>
                <Link
                  to="/help"
                  className="text-sm text-[#4f90c6] hover:text-[#355485] transition-colors inline-flex items-center"
                >
                  <i className="ri-customer-service-line mr-2"></i>
                  Pusat Bantuan
                </Link>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="text-sm text-[#4f90c6] hover:text-[#355485] transition-colors inline-flex items-center"
                >
                  <i className="ri-contacts-line mr-2"></i>
                  Hubungi Admin DISNAKER
                </Link>
              </div>
            </div>
          </form>
        </div>

        {/* Register Link */}
        <div className="text-center">
          <p className="text-[#6b7280]">
            Belum memiliki akun?{' '}
            <Link
              to="/register"
              className="font-medium text-[#4f90c6] hover:text-[#355485] transition-colors"
            >
              Daftar Perusahaan
            </Link>
          </p>
        </div>

      </div>
    </div>
  )
}