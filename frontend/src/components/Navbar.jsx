import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <span className="text-2xl">🏥</span>
                    <span className="font-bold text-green-700 text-lg">স্বাস্থ্য খোঁজি</span>
                </Link>
                <div className="flex items-center gap-4">
                    <Link to="/search" className="text-gray-600 hover:text-green-600 text-sm font-medium">
                        ডাক্তার খুঁজুন
                    </Link>
                    {user ? (
                        <>
                            <Link to="/appointments" className="text-gray-600 hover:text-green-600 text-sm font-medium">
                                অ্যাপয়েন্টমেন্ট
                            </Link>
                            <button onClick={handleLogout} className="text-sm text-red-500 hover:text-red-600">
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="btn-primary text-sm">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}