import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Navbar() { // এখানে export default সরিয়ে দিয়েছি
    const auth = useAuth();
    const navigate = useNavigate();

    if (!auth) return null;

    const { user, logout } = auth;

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
                            <button
                                onClick={handleLogout}
                                className="text-sm text-red-500 hover:text-red-600 font-medium"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar; // শুধু এই এক জায়গায় এক্সপোর্ট থাকবে
