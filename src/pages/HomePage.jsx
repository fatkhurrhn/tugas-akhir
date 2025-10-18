import React from 'react'
import BottomNav from '../components/BottomNav'

export default function HomePage() {
    // Data kategori pembelajaran
    const learningCategories = [
        {
            id: 1,
            title: "Baca Huruf",
            icon: "ri-abc",
            color: "bg-gradient-to-br from-[#4f90c6] to-[#355485]",
            emoji: "🔤",
            items: "26 Huruf",
            route: "/literasi"
        },
        {
            id: 2,
            title: "Hitung Angka",
            icon: "ri-calculator-line",
            color: "bg-gradient-to-br from-[#355485] to-[#2a436c]",
            emoji: "🔢",
            items: "20 Angka",
            route: "/numerasi"
        },
        {
            id: 3,
            title: "Doa Harian",
            icon: "ri-moon-fill",
            color: "bg-gradient-to-br from-[#2a436c] to-[#4f90c6]",
            emoji: "🌙",
            items: "5 Doa",
            route: "/islamic"
        },
        {
            id: 4,
            title: "Warna & Bentuk",
            icon: "ri-palette-line",
            color: "bg-gradient-to-br from-[#90b6d5] to-[#4f90c6]",
            emoji: "🎨",
            items: "8 Warna",
            route: "/literasi"
        }
    ];

    // Aktivitas harian
    const dailyActivities = [
        {
            id: 1,
            title: "Huruf A-E",
            category: "Literasi",
            icon: "ri-abc",
            status: "completed",
            duration: "10m",
            points: 50
        },
        {
            id: 2,
            title: "Angka 1-10",
            category: "Numerasi",
            icon: "ri-calculator-line",
            status: "current",
            duration: "15m",
            points: 75
        },
        {
            id: 3,
            title: "Doa Makan",
            category: "Islami",
            icon: "ri-moon-fill",
            status: "upcoming",
            duration: "5m",
            points: 30
        }
    ];

    // Game & Aktivitas seru
    const funActivities = [
        {
            id: 1,
            title: "Tebak Gambar",
            description: "Tebak nama benda dari gambar",
            emoji: "🖼️",
            color: "from-[#4f90c6] to-[#90b6d5]",
            players: "1.2k",
            rating: "4.8"
        },
        {
            id: 2,
            title: "Puzzle Huruf",
            description: "Susun huruf menjadi kata",
            emoji: "🧩",
            color: "from-[#355485] to-[#4f90c6]",
            players: "890",
            rating: "4.9"
        },
        {
            id: 3,
            title: "Tebak Angka",
            description: "Hitung benda dan pilih jawaban",
            emoji: "🔢",
            color: "from-[#2a436c] to-[#355485]",
            players: "756",
            rating: "4.7"
        }
    ];

    // Pencapaian
    const achievements = [
        {
            id: 1,
            title: "Pembaca Handal",
            description: "Level huruf",
            progress: 8,
            total: 10,
            badge: "🥇",
            color: "from-yellow-400 to-orange-500"
        },
        {
            id: 2,
            title: "Ahli Berhitung",
            description: "Angka 1-15",
            progress: 15,
            total: 20,
            badge: "🎯",
            color: "from-green-500 to-emerald-600"
        },
        {
            id: 3,
            title: "Anak Sholeh",
            description: "3 doa harian",
            progress: 3,
            total: 5,
            badge: "⭐",
            color: "from-blue-500 to-[#4f90c6]"
        }
    ];

    const getStatusConfig = (status) => {
        switch (status) {
            case 'completed':
                return {
                    bg: 'bg-green-50 border border-green-200',
                    icon: 'ri-checkbox-circle-fill text-green-500',
                    text: 'text-green-700'
                };
            case 'current':
                return {
                    bg: 'bg-blue-50 border border-blue-200',
                    icon: 'ri-play-circle-fill text-blue-600',
                    text: 'text-blue-700'
                };
            case 'upcoming':
                return {
                    bg: 'bg-gray-50 border border-gray-200',
                    icon: 'ri-time-line text-gray-400',
                    text: 'text-gray-600'
                };
            default:
                return {
                    bg: 'bg-white border border-gray-200',
                    icon: 'ri-circle-line text-gray-400',
                    text: 'text-gray-600'
                };
        }
    };

    return (
        <div className="min-h-screen max-w-[450px] mx-auto bg-white pb-20">
            {/* Fresh New Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="pt-6 pb-4 px-4">
                    {/* Top Bar dengan Avatar dan Progress */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#4f90c6] to-[#355485] rounded-2xl flex items-center justify-center shadow-lg">
                                <i className="ri-book-2-fill text-white text-lg"></i>
                            </div>
                            <div>
                                <h1 className="font-bold text-gray-800 text-lg">EduKids</h1>
                                <p className="text-gray-500 text-xs">TK Az-Zahra</p>
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="flex items-center justify-end space-x-1 mb-1">
                                <i className="ri-fire-fill text-orange-500 text-sm"></i>
                                <span className="text-gray-800 font-bold text-sm">5 hari</span>
                            </div>
                            <p className="text-gray-500 text-xs">Streak aktif</p>
                        </div>
                    </div>

                    {/* Welcome Card */}
                    <div className="bg-gradient-to-r from-[#355485] to-[#4f90c6] rounded-2xl p-4 text-white shadow-lg">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-white/80 text-sm mb-1">Selamat datang!</p>
                                <h2 className="font-bold text-lg mb-2">Siap belajar hari ini? 🎉</h2>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-1">
                                        <i className="ri-coin-fill text-yellow-300"></i>
                                        <span className="text-white font-bold text-sm">175 poin</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <i className="ri-trophy-fill text-yellow-300"></i>
                                        <span className="text-white font-bold text-sm">Level 3</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                                <i className="ri-star-smile-fill text-2xl text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="px-4 mt-2">
                {/* Quick Access Grid */}
                <section className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-bold text-gray-800 text-lg">Pelajaran</h2>
                        <span className="text-[#4f90c6] text-xs bg-blue-50 px-2 py-1 rounded-full font-medium">
                            4 Materi
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        {learningCategories.map((category) => (
                            <div
                                key={category.id}
                                className="bg-white rounded-2xl p-3 border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#4f90c6]/20 transition-all duration-300 group"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className={`w-10 h-10 ${category.color} rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                                        <span className="text-lg">{category.emoji}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-gray-800 text-sm mb-0.5">{category.title}</h3>
                                        <p className="text-gray-500 text-[10px]">{category.items}</p>
                                    </div>
                                </div>
                                <div className="mt-3 flex justify-between items-center">
                                    <span className="text-[#4f90c6] text-xs font-medium">Mulai →</span>
                                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#4f90c6] group-hover:text-white transition-colors">
                                        <i className="ri-arrow-right-line text-xs"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Today's Progress */}
                <section className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-bold text-gray-800 text-lg">Progress Hari Ini</h2>
                        <div className="flex items-center space-x-1 text-[#4f90c6]">
                            <span className="text-xs font-medium">75% selesai</span>
                            <i className="ri-arrow-right-s-line text-xs"></i>
                        </div>
                    </div>

                    <div className="space-y-2">
                        {dailyActivities.map((activity) => {
                            const config = getStatusConfig(activity.status);
                            return (
                                <div
                                    key={activity.id}
                                    className={`${config.bg} rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <i className={`${config.icon} text-base`}></i>
                                            <div>
                                                <h3 className={`font-semibold text-sm mb-0.5 ${config.text}`}>{activity.title}</h3>
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded-full">
                                                        {activity.category}
                                                    </span>
                                                    <span className="text-[10px] text-gray-400">•</span>
                                                    <span className="text-[10px] text-gray-500">{activity.duration}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <span className="text-amber-600 text-xs font-bold bg-amber-100 px-2 py-1 rounded-full">
                                                +{activity.points}
                                            </span>
                                            {activity.status === 'current' && (
                                                <button className="bg-[#4f90c6] text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md hover:bg-[#355485] transition-colors">
                                                    Lanjut
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Fun Games */}
                <section className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="font-bold text-gray-800 text-lg">Game Seru</h2>
                            <p className="text-gray-500 text-xs mt-0.5">Belajar sambil bermain</p>
                        </div>
                        <div className="w-8 h-8 bg-[#4f90c6] rounded-full flex items-center justify-center">
                            <i className="ri-gamepad-fill text-white text-sm"></i>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        {funActivities.map((activity) => (
                            <div
                                key={activity.id}
                                className={`bg-gradient-to-br ${activity.color} rounded-2xl p-4 text-white relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
                            >
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-start space-x-3">
                                            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                                                <span className="text-2xl">{activity.emoji}</span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg mb-1">{activity.title}</h3>
                                                <p className="text-white/90 text-xs mb-2">{activity.description}</p>
                                                <div className="flex items-center space-x-3">
                                                    <div className="flex items-center space-x-1">
                                                        <i className="ri-user-line text-white/80 text-xs"></i>
                                                        <span className="text-white/80 text-xs">{activity.players}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <i className="ri-star-fill text-yellow-300 text-xs"></i>
                                                        <span className="text-white/80 text-xs">{activity.rating}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="bg-white text-[#355485] px-4 py-2 rounded-xl text-xs font-bold hover:bg-gray-100 transition-colors shadow-md flex items-center space-x-1">
                                        <i className="ri-play-circle-fill"></i>
                                        <span>Main Sekarang</span>
                                    </button>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute top-2 right-2 w-12 h-12 bg-white/10 rounded-full"></div>
                                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/5 rounded-full"></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Achievements */}
                <section className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="font-bold text-gray-800 text-lg">Pencapaian</h2>
                            <p className="text-gray-500 text-xs mt-0.5">Prestasi belajar kamu</p>
                        </div>
                        <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                            <i className="ri-trophy-fill text-white text-sm"></i>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        {achievements.map((achievement) => {
                            const progressPercent = (achievement.progress / achievement.total) * 100;
                            return (
                                <div
                                    key={achievement.id}
                                    className="bg-white rounded-2xl p-3 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center shadow-md`}>
                                            <span className="text-2xl">{achievement.badge}</span>
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <h3 className="font-bold text-gray-800 text-sm">{achievement.title}</h3>
                                                <span className="text-[#4f90c6] font-bold text-xs">
                                                    {achievement.progress}/{achievement.total}
                                                </span>
                                            </div>

                                            <p className="text-gray-500 text-xs mb-2">{achievement.description}</p>

                                            <div className="flex items-center space-x-2">
                                                <div className="flex-1 bg-gray-100 rounded-full h-1.5 overflow-hidden">
                                                    <div
                                                        className={`bg-gradient-to-r ${achievement.color} h-1.5 rounded-full transition-all duration-1000 ease-out`}
                                                        style={{ width: `${progressPercent}%` }}
                                                    ></div>
                                                </div>
                                                <span className="text-[10px] font-bold text-gray-500">
                                                    {Math.round(progressPercent)}%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Daily Motivation */}
                <div className="bg-gradient-to-r from-[#f0f7ff] to-[#e8f2ff] rounded-2xl p-4 border border-[#4f90c6]/20">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#4f90c6] rounded-2xl flex items-center justify-center">
                            <i className="ri-lightbulb-flash-fill text-white text-lg"></i>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#355485] text-sm">Tips Hari Ini</h3>
                            <p className="text-[#6b7280] text-xs">Belajar sedikit setiap hari lebih baik daripada belajar banyak sekaligus!</p>
                        </div>
                    </div>
                </div>
            </div>

            <BottomNav />
        </div>
    )
}