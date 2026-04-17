// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

// function Navbar() { // এখানে export default সরিয়ে দিয়েছি
//     const auth = useAuth();
//     const navigate = useNavigate();

//     if (!auth) return null;

//     const { user, logout } = auth;

//     const handleLogout = () => {
//         logout();
//         navigate("/");
//     };

//     return (
//         <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
//             <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
//                 <Link to="/" className="flex items-center gap-2">
//                     <span className="text-2xl">🏥</span>
//                     <span className="font-bold text-green-700 text-lg">স্বাস্থ্য খোঁজি</span>
//                 </Link>
//                 <div className="flex items-center gap-4">
//                     <Link to="/search" className="text-gray-600 hover:text-green-600 text-sm font-medium">
//                         ডাক্তার খুঁজুন
//                     </Link>
//                     {user ? (
//                         <>
//                             <Link to="/appointments" className="text-gray-600 hover:text-green-600 text-sm font-medium">
//                                 অ্যাপয়েন্টমেন্ট
//                             </Link>
//                             <button
//                                 onClick={handleLogout}
//                                 className="text-sm text-red-500 hover:text-red-600 font-medium"
//                             >
//                                 Logout
//                             </button>
//                         </>
//                     ) : (
//                         <Link
//                             to="/login"
//                             className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700"
//                         >
//                             Login
//                         </Link>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar; // শুধু এই এক জায়গায় এক্সপোর্ট থাকবে
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Serif+Bengali:wght@700;800;900&display=swap');

                .nav-root {
                    position: sticky;
                    top: 0;
                    z-index: 100;
                    background: rgba(13, 59, 30, 0.97);
                    backdrop-filter: blur(16px);
                    border-bottom: 1px solid rgba(255,255,255,0.08);
                    font-family: 'Hind Siliguri', sans-serif;
                    animation: navSlideDown 0.5s ease both;
                }

                @keyframes navSlideDown {
                    from { transform: translateY(-100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                .nav-inner {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 0 28px;
                    height: 64px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .nav-brand {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    text-decoration: none;
                }

                .nav-logo-box {
                    width: 38px;
                    height: 38px;
                    background: linear-gradient(135deg, #5ecb87, #2e9e56);
                    border-radius: 11px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    box-shadow: 0 0 0 3px rgba(94,203,135,0.2);
                    flex-shrink: 0;
                }

                .nav-brand-title {
                    font-family: 'Noto Serif Bengali', serif;
                    font-size: 20px;
                    font-weight: 800;
                    color: #fff;
                    letter-spacing: -0.3px;
                }

                .nav-brand-title span { color: #5ecb87; }

                .nav-links-row {
                    display: flex;
                    align-items: center;
                    gap: 2px;
                    list-style: none;
                }

                .nav-links-row a {
                    text-decoration: none;
                    color: rgba(255,255,255,0.7);
                    font-size: 14px;
                    font-weight: 500;
                    padding: 8px 14px;
                    border-radius: 8px;
                    transition: all 0.2s ease;
                }

                .nav-links-row a:hover,
                .nav-links-row a.active {
                    color: #fff;
                    background: rgba(255,255,255,0.08);
                }

                .nav-links-row a.active {
                    color: #5ecb87;
                    background: rgba(94,203,135,0.1);
                }

                .nav-cta-btn {
                    background: linear-gradient(135deg, #2e9e56, #5ecb87) !important;
                    color: #fff !important;
                    padding: 9px 20px !important;
                    border-radius: 50px !important;
                    font-weight: 600 !important;
                    box-shadow: 0 4px 16px rgba(46,158,86,0.4);
                }

                .nav-cta-btn:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 6px 20px rgba(46,158,86,0.55) !important;
                }

                .nav-hamburger {
                    display: none;
                    background: none;
                    border: 1.5px solid rgba(255,255,255,0.2);
                    color: #fff;
                    width: 38px;
                    height: 38px;
                    border-radius: 9px;
                    cursor: pointer;
                    font-size: 18px;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.2s;
                }

                .nav-hamburger:hover { background: rgba(255,255,255,0.08); }

                /* Mobile drawer */
                .nav-mobile-drawer {
                    background: #0d3b1e;
                    border-top: 1px solid rgba(255,255,255,0.06);
                    padding: 12px 20px 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .nav-mobile-drawer a {
                    text-decoration: none;
                    color: rgba(255,255,255,0.7);
                    font-size: 15px;
                    font-weight: 500;
                    padding: 11px 14px;
                    border-radius: 10px;
                    transition: all 0.2s;
                }

                .nav-mobile-drawer a:hover { background: rgba(255,255,255,0.07); color: #fff; }
                .nav-mobile-drawer .mob-cta {
                    margin-top: 8px;
                    background: linear-gradient(135deg, #2e9e56, #5ecb87);
                    color: #fff !important;
                    text-align: center;
                    border-radius: 50px;
                    font-weight: 700;
                }

                @media (max-width: 720px) {
                    .nav-links-row { display: none; }
                    .nav-hamburger { display: flex; }
                }
            `}</style>

            <nav className="nav-root">
                <div className="nav-inner">
                    <Link to="/" className="nav-brand">
                        <div className="nav-logo-box">🏥</div>
                        <span className="nav-brand-title">
                            স্বাস্থ্য<span>খোঁজি</span>
                        </span>
                    </Link>

                    <ul className="nav-links-row">
                        <li><NavLink to="/" end>হোম</NavLink></li>
                        <li><NavLink to="/search">ডাক্তার খুঁজুন</NavLink></li>
                        <li><NavLink to="/hospitals">হাসপাতাল</NavLink></li>
                        <li><NavLink to="/tips">স্বাস্থ্য টিপস</NavLink></li>
                        <li><NavLink to="/about">আমাদের সম্পর্কে</NavLink></li>
                        <li>
                            <NavLink to="/appointment" className="nav-cta-btn">
                                অ্যাপয়েন্টমেন্ট
                            </NavLink>
                        </li>
                    </ul>

                    <button
                        className="nav-hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="মেনু"
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>
                </div>

                {menuOpen && (
                    <div className="nav-mobile-drawer">
                        <NavLink to="/" end onClick={() => setMenuOpen(false)}>হোম</NavLink>
                        <NavLink to="/search" onClick={() => setMenuOpen(false)}>ডাক্তার খুঁজুন</NavLink>
                        <NavLink to="/hospitals" onClick={() => setMenuOpen(false)}>হাসপাতাল</NavLink>
                        <NavLink to="/tips" onClick={() => setMenuOpen(false)}>স্বাস্থ্য টিপস</NavLink>
                        <NavLink to="/about" onClick={() => setMenuOpen(false)}>আমাদের সম্পর্কে</NavLink>
                        <NavLink to="/appointment" className="mob-cta" onClick={() => setMenuOpen(false)}>
                            📅 অ্যাপয়েন্টমেন্ট নিন
                        </NavLink>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;