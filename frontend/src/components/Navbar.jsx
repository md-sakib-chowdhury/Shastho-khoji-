import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
        setMenuOpen(false);
    };

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
                    margin: 0;
                    padding: 0;
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

                .nav-logout-btn {
                    background: none;
                    border: 1.5px solid rgba(255, 100, 100, 0.5);
                    color: #ff8080;
                    font-size: 14px;
                    font-weight: 500;
                    padding: 7px 16px;
                    border-radius: 50px;
                    cursor: pointer;
                    font-family: 'Hind Siliguri', sans-serif;
                    transition: all 0.2s;
                }

                .nav-logout-btn:hover {
                    background: rgba(255,100,100,0.12);
                    color: #ffaaaa;
                }

                .nav-user-name {
                    color: rgba(255,255,255,0.6);
                    font-size: 13px;
                    padding: 0 8px;
                }

                .nav-admin-link {
                    color: #f9c74f !important;
                    background: rgba(249,199,79,0.1) !important;
                    border-radius: 8px;
                    padding: 8px 14px !important;
                    font-size: 13px !important;
                    font-weight: 600 !important;
                }

                .nav-admin-link:hover {
                    background: rgba(249,199,79,0.2) !important;
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

                .mob-cta {
                    margin-top: 8px;
                    background: linear-gradient(135deg, #2e9e56, #5ecb87);
                    color: #fff !important;
                    text-align: center;
                    border-radius: 50px;
                    font-weight: 700;
                }

                .mob-logout {
                    margin-top: 4px;
                    border: 1.5px solid rgba(255,100,100,0.4);
                    color: #ff8080 !important;
                    text-align: center;
                    border-radius: 50px;
                    cursor: pointer;
                    background: none;
                    font-size: 15px;
                    font-weight: 500;
                    padding: 11px 14px;
                    font-family: 'Hind Siliguri', sans-serif;
                    width: 100%;
                    transition: all 0.2s;
                }

                .mob-logout:hover { background: rgba(255,100,100,0.1); }

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

                        {user ? (
                            <>
                                {user.role === 'admin' ? (
                                    <li>
                                        <NavLink to="/admin" className="nav-admin-link">
                                            ⚙️ Admin Panel
                                        </NavLink>
                                    </li>
                                ) : (
                                    <li>
                                        <NavLink to="/appointments" className="nav-cta-btn">
                                            অ্যাপয়েন্টমেন্ট
                                        </NavLink>
                                    </li>
                                )}
                                <li>
                                    <span className="nav-user-name">👤 {user.name}</span>
                                </li>
                                <li>
                                    <button className="nav-logout-btn" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <li>
                                <NavLink to="/login" className="nav-cta-btn">
                                    Login
                                </NavLink>
                            </li>
                        )}
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

                        {user ? (
                            <>
                                {user.role === 'admin' ? (
                                    <NavLink to="/admin" onClick={() => setMenuOpen(false)}
                                        style={{ color: '#f9c74f' }}>
                                        ⚙️ Admin Panel
                                    </NavLink>
                                ) : (
                                    <NavLink to="/appointments" className="mob-cta" onClick={() => setMenuOpen(false)}>
                                        📅 অ্যাপয়েন্টমেন্ট নিন
                                    </NavLink>
                                )}
                                <button className="mob-logout" onClick={handleLogout}>
                                    Logout ({user.name})
                                </button>
                            </>
                        ) : (
                            <NavLink to="/login" className="mob-cta" onClick={() => setMenuOpen(false)}>
                                🔐 Login করুন
                            </NavLink>
                        )}
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;