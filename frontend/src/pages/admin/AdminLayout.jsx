import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const menuItems = [
    { path: "/admin", icon: "📊", label: "ড্যাশবোর্ড" },
    { path: "/admin/doctors", icon: "👨‍⚕️", label: "ডাক্তার" },
    { path: "/admin/appointments", icon: "📅", label: "অ্যাপয়েন্টমেন্ট" },
    { path: "/admin/users", icon: "👥", label: "ব্যবহারকারী" },
    { path: "/admin/banners", icon: "🖼️", label: "ব্যানার" },
    { path: "/admin/blogs", icon: "📝", label: "ব্লগ" },
];

export default function AdminLayout({ children }) {
    const { logout } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-green-800 text-white flex flex-col fixed h-full">
                <div className="p-6 border-b border-green-700">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🏥</span>
                        <div>
                            <h1 className="font-bold text-lg">স্বাস্থ্য খোঁজি</h1>
                            <p className="text-green-300 text-xs">Admin Panel</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium ${location.pathname === item.path
                                    ? "bg-green-600 text-white"
                                    : "text-green-100 hover:bg-green-700"
                                }`}
                        >
                            <span className="text-lg">{item.icon}</span>
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-green-700">
                    <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-lg text-green-100 hover:bg-green-700 text-sm mb-2">
                        🌐 Website দেখুন
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-300 hover:bg-green-700 text-sm"
                    >
                        🚪 Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="ml-64 flex-1 p-8">
                {children}
            </div>
        </div>
    );
}