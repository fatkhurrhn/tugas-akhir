// src/components/DashboardLayout.jsx
import React, { useState } from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()

  const menuItems = [
    {
      path: '/dashboard',
      name: 'Overview',
      icon: 'ri-dashboard-line',
      description: 'Ringkasan informasi'
    },
    {
      path: '/dashboard/pkwt',
      name: 'PKWT',
      icon: 'ri-file-text-line',
      description: 'Karyawan kontrak'
    },
    {
      path: '/dashboard/pkwtt',
      name: 'PKWTT',
      icon: 'ri-user-follow-line',
      description: 'Karyawan tetap'
    },
    {
      path: '/dashboard/form-pkwt',
      name: 'Form PKWT',
      icon: 'ri-add-circle-line',
      description: 'Buat PKWT baru'
    },
    {
      path: '/dashboard/profile',
      name: 'Profil Perusahaan',
      icon: 'ri-building-line',
      description: 'Data perusahaan'
    }
  ]

  return (
    <div className="flex h-screen bg-[#f9fafb]">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-[#2a436c] text-white transition-all duration-300 flex flex-col`}>
        {/* Logo */}
        <div className="p-6 border-b border-[#355485]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <i className="ri-file-text-line text-white text-lg"></i>
            </div>
            {sidebarOpen && (
              <div>
                <h1 className="font-bold text-lg">E-PKWT</h1>
                <p className="text-xs text-[#90b6d5]">DISNAKER Paser</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors group ${
                      isActive 
                        ? 'bg-[#355485] text-white shadow-lg' 
                        : 'text-[#cbdde9] hover:bg-[#355485] hover:text-white'
                    }`}
                  >
                    <i className={`${item.icon} text-lg flex-shrink-0`}></i>
                    {sidebarOpen && (
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{item.name}</div>
                        <div className="text-xs text-[#90b6d5] group-hover:text-[#cbdde9]">
                          {item.description}
                        </div>
                      </div>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* User Profile & Logout */}
        <div className="p-4 border-t border-[#355485]">
          <div className="flex items-center gap-3 p-3">
            <div className="w-10 h-10 bg-[#4f90c6] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">CP</span>
            </div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm">CV. Contoh Perusahaan</div>
                <div className="text-xs text-[#90b6d5]">Administrator</div>
              </div>
            )}
          </div>
          <button className="w-full flex items-center gap-3 p-3 text-[#cbdde9] hover:text-white hover:bg-[#355485] rounded-lg transition-colors">
            <i className="ri-logout-box-r-line text-lg"></i>
            {sidebarOpen && <span className="text-sm">Keluar</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-[#e5e7eb]">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 text-[#6b7280] hover:text-[#355485] hover:bg-[#f9fafb] rounded-lg transition-colors"
              >
                <i className="ri-menu-line text-xl"></i>
              </button>
              <h1 className="text-xl font-bold text-[#2a436c]">
                {menuItems.find(item => item.path === location.pathname)?.name || 'Dashboard'}
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-2 text-[#6b7280] hover:text-[#355485] hover:bg-[#f9fafb] rounded-lg transition-colors relative">
                <i className="ri-notification-3-line text-xl"></i>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-8 h-8 bg-[#4f90c6] rounded-full flex items-center justify-center text-white text-sm font-medium">
                CP
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}