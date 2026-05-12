// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useAuth } from "../hooks/useAuth";

// function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const { user, logout } = useAuth();
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         logout();
//         navigate("/login");
//         setMenuOpen(false);
//     };

//     return (
//         <>
//             <style>{`
//                 @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Serif+Bengali:wght@700;800;900&display=swap');

//                 .nav-root {
//                     position: sticky;
//                     top: 0;
//                     z-index: 100;
//                     background: rgba(13, 59, 30, 0.97);
//                     backdrop-filter: blur(16px);
//                     border-bottom: 1px solid rgba(255,255,255,0.08);
//                     font-family: 'Hind Siliguri', sans-serif;
//                     animation: navSlideDown 0.5s ease both;
//                 }

//                 @keyframes navSlideDown {
//                     from { transform: translateY(-100%); opacity: 0; }
//                     to { transform: translateY(0); opacity: 1; }
//                 }

//                 .nav-inner {
//                     margin: 0 auto;
//                     padding: 0 28px;
//                     height: 64px;
//                     display: flex;
//                     align-items: center;
//                     justify-content: space-between;
//                 }

//                 /* Desktop বড় (1280px+) */
//                 @media (min-width: 1280px) {
//                     .nav-inner { max-width: 1280px; padding: 0 40px; }
//                     .nav-brand-title { font-size: 22px; }
//                     .nav-links-row a { font-size: 15px; padding: 9px 16px; }
//                 }

//                 /* Laptop 14 inch (1024px - 1279px) */
//                 @media (min-width: 1024px) and (max-width: 1279px) {
//                     .nav-inner { max-width: 1100px; padding: 0 28px; }
//                     .nav-brand-title { font-size: 20px; }
//                     .nav-links-row a { font-size: 13.5px; padding: 8px 12px; }
//                 }

//                 /* Tablet (768px - 1023px) */
//                 @media (min-width: 768px) and (max-width: 1023px) {
//                     .nav-inner { padding: 0 20px; height: 60px; }
//                     .nav-brand-title { font-size: 18px; }
//                     .nav-links-row { gap: 1px; }
//                     .nav-links-row a { font-size: 12.5px; padding: 7px 9px; }
//                     .nav-cta-btn { padding: 7px 14px !important; font-size: 12.5px !important; }
//                     .nav-logout-btn { padding: 6px 12px; font-size: 12.5px; }
//                     .nav-user-name { font-size: 12px; padding: 0 4px; }
//                 }

//                 /* Mobile (max 767px) */
//                 @media (max-width: 767px) {
//                     .nav-inner { padding: 0 16px; height: 56px; }
//                     .nav-brand-title { font-size: 17px; }
//                     .nav-logo-box { width: 34px; height: 34px; font-size: 16px; }
//                 }

//                 .nav-brand {
//                     display: flex;
//                     align-items: center;
//                     gap: 10px;
//                     text-decoration: none;
//                 }

//                 .nav-logo-box {
//                     width: 38px;
//                     height: 38px;
//                     background: linear-gradient(135deg, #5ecb87, #2e9e56);
//                     border-radius: 11px;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     font-size: 18px;
//                     box-shadow: 0 0 0 3px rgba(94,203,135,0.2);
//                     flex-shrink: 0;
//                 }

//                 .nav-brand-title {
//                     font-family: 'Noto Serif Bengali', serif;
//                     font-size: 20px;
//                     font-weight: 800;
//                     color: #fff;
//                     letter-spacing: -0.3px;
//                 }

//                 .nav-brand-title span { color: #5ecb87; }

//                 .nav-links-row {
//                     display: flex;
//                     align-items: center;
//                     gap: 2px;
//                     list-style: none;
//                     margin: 0;
//                     padding: 0;
//                 }

//                 .nav-links-row a {
//                     text-decoration: none;
//                     color: rgba(255,255,255,0.7);
//                     font-size: 14px;
//                     font-weight: 500;
//                     padding: 8px 14px;
//                     border-radius: 8px;
//                     transition: all 0.2s ease;
//                 }

//                 .nav-links-row a:hover,
//                 .nav-links-row a.active {
//                     color: #fff;
//                     background: rgba(255,255,255,0.08);
//                 }

//                 .nav-links-row a.active {
//                     color: #5ecb87;
//                     background: rgba(94,203,135,0.1);
//                 }

//                 .nav-cta-btn {
//                     background: linear-gradient(135deg, #2e9e56, #5ecb87) !important;
//                     color: #fff !important;
//                     padding: 9px 20px !important;
//                     border-radius: 50px !important;
//                     font-weight: 600 !important;
//                     box-shadow: 0 4px 16px rgba(46,158,86,0.4);
//                 }

//                 .nav-cta-btn:hover {
//                     transform: translateY(-1px);
//                     box-shadow: 0 6px 20px rgba(46,158,86,0.55) !important;
//                 }

//                 .nav-logout-btn {
//                     background: none;
//                     border: 1.5px solid rgba(255, 100, 100, 0.5);
//                     color: #ff8080;
//                     font-size: 14px;
//                     font-weight: 500;
//                     padding: 7px 16px;
//                     border-radius: 50px;
//                     cursor: pointer;
//                     font-family: 'Hind Siliguri', sans-serif;
//                     transition: all 0.2s;
//                 }

//                 .nav-logout-btn:hover {
//                     background: rgba(255,100,100,0.12);
//                     color: #ffaaaa;
//                 }

//                 .nav-user-name {
//                     color: rgba(255,255,255,0.6);
//                     font-size: 13px;
//                     padding: 0 8px;
//                 }

//                 .nav-admin-link {
//                     color: #f9c74f !important;
//                     background: rgba(249,199,79,0.1) !important;
//                     border-radius: 8px;
//                     padding: 8px 14px !important;
//                     font-size: 13px !important;
//                     font-weight: 600 !important;
//                 }

//                 .nav-admin-link:hover {
//                     background: rgba(249,199,79,0.2) !important;
//                 }

//                 /* Hamburger - শুধু tablet ও mobile এ */
//                 .nav-hamburger {
//                     display: none;
//                     background: none;
//                     border: 1.5px solid rgba(255,255,255,0.2);
//                     color: #fff;
//                     width: 38px;
//                     height: 38px;
//                     border-radius: 9px;
//                     cursor: pointer;
//                     font-size: 18px;
//                     align-items: center;
//                     justify-content: center;
//                     transition: background 0.2s;
//                 }

//                 .nav-hamburger:hover { background: rgba(255,255,255,0.08); }

//                 /* Desktop বড় ও Laptop 14 → links দেখাবে */
//                 @media (min-width: 1024px) {
//                     .nav-links-row { display: flex; }
//                     .nav-hamburger { display: none !important; }
//                 }

//                 /* Tablet → hamburger দেখাবে */
//                 @media (min-width: 768px) and (max-width: 1023px) {
//                     .nav-links-row { display: none; }
//                     .nav-hamburger { display: flex; }
//                 }

//                 /* Mobile → hamburger দেখাবে */
//                 @media (max-width: 767px) {
//                     .nav-links-row { display: none; }
//                     .nav-hamburger { display: flex; width: 34px; height: 34px; }
//                 }

//                 /* Mobile Drawer */
//                 .nav-mobile-drawer {
//                     background: #0d3b1e;
//                     border-top: 1px solid rgba(255,255,255,0.06);
//                     padding: 12px 20px 20px;
//                     display: flex;
//                     flex-direction: column;
//                     gap: 4px;
//                 }

//                 .nav-mobile-drawer a {
//                     text-decoration: none;
//                     color: rgba(255,255,255,0.7);
//                     font-size: 15px;
//                     font-weight: 500;
//                     padding: 11px 14px;
//                     border-radius: 10px;
//                     transition: all 0.2s;
//                 }

//                 .nav-mobile-drawer a:hover { background: rgba(255,255,255,0.07); color: #fff; }

//                 /* Tablet drawer এ একটু ছোট */
//                 @media (min-width: 768px) and (max-width: 1023px) {
//                     .nav-mobile-drawer { padding: 10px 24px 18px; }
//                     .nav-mobile-drawer a { font-size: 14px; padding: 10px 14px; }
//                 }

//                 .mob-cta {
//                     margin-top: 8px;
//                     background: linear-gradient(135deg, #2e9e56, #5ecb87);
//                     color: #fff !important;
//                     text-align: center;
//                     border-radius: 50px;
//                     font-weight: 700;
//                 }

//                 .mob-logout {
//                     margin-top: 4px;
//                     border: 1.5px solid rgba(255,100,100,0.4);
//                     color: #ff8080 !important;
//                     text-align: center;
//                     border-radius: 50px;
//                     cursor: pointer;
//                     background: none;
//                     font-size: 15px;
//                     font-weight: 500;
//                     padding: 11px 14px;
//                     font-family: 'Hind Siliguri', sans-serif;
//                     width: 100%;
//                     transition: all 0.2s;
//                 }

//                 .mob-logout:hover { background: rgba(255,100,100,0.1); }
//             `}</style>

//             <nav className="nav-root">
//                 <div className="nav-inner">
//                     <Link to="/" className="nav-brand">
//                         <div className="nav-logo-box">🏥</div>
//                         <span className="nav-brand-title">
//                             স্বাস্থ্য<span>খোঁজি</span>
//                         </span>
//                     </Link>

//                     <ul className="nav-links-row">
//                         <li><NavLink to="/" end>হোম</NavLink></li>
//                         <li><NavLink to="/search">ডাক্তার খুঁজুন</NavLink></li>
//                         <li><NavLink to="/hospitals">হাসপাতাল</NavLink></li>
//                         <li><NavLink to="/tips">স্বাস্থ্য টিপস</NavLink></li>
//                         <li><NavLink to="/about">আমাদের সম্পর্কে</NavLink></li>

//                         {user ? (
//                             <>
//                                 {user.role === 'admin' ? (
//                                     <li>
//                                         <NavLink to="/admin" className="nav-admin-link">
//                                             ⚙️ Admin Panel
//                                         </NavLink>
//                                     </li>
//                                 ) : (
//                                     <li>
//                                         <NavLink to="/appointments" className="nav-cta-btn">
//                                             অ্যাপয়েন্টমেন্ট
//                                         </NavLink>
//                                     </li>
//                                 )}
//                                 <li>
//                                     <span className="nav-user-name">👤 {user.name}</span>
//                                 </li>
//                                 <li>
//                                     <button className="nav-logout-btn" onClick={handleLogout}>
//                                         Logout
//                                     </button>
//                                 </li>
//                             </>
//                         ) : (
//                             <li>
//                                 <NavLink to="/login" className="nav-cta-btn">
//                                     Login
//                                 </NavLink>
//                             </li>
//                         )}
//                     </ul>

//                     <button
//                         className="nav-hamburger"
//                         onClick={() => setMenuOpen(!menuOpen)}
//                         aria-label="মেনু"
//                     >
//                         {menuOpen ? "✕" : "☰"}
//                     </button>
//                 </div>

//                 {menuOpen && (
//                     <div className="nav-mobile-drawer">
//                         <NavLink to="/" end onClick={() => setMenuOpen(false)}>হোম</NavLink>
//                         <NavLink to="/search" onClick={() => setMenuOpen(false)}>ডাক্তার খুঁজুন</NavLink>
//                         <NavLink to="/hospitals" onClick={() => setMenuOpen(false)}>হাসপাতাল</NavLink>
//                         <NavLink to="/tips" onClick={() => setMenuOpen(false)}>স্বাস্থ্য টিপস</NavLink>
//                         <NavLink to="/about" onClick={() => setMenuOpen(false)}>আমাদের সম্পর্কে</NavLink>

//                         {user ? (
//                             <>
//                                 {user.role === 'admin' ? (
//                                     <NavLink to="/admin" onClick={() => setMenuOpen(false)}
//                                         style={{ color: '#f9c74f' }}>
//                                         ⚙️ Admin Panel
//                                     </NavLink>
//                                 ) : (
//                                     <NavLink to="/appointments" className="mob-cta" onClick={() => setMenuOpen(false)}>
//                                         📅 অ্যাপয়েন্টমেন্ট নিন
//                                     </NavLink>
//                                 )}
//                                 <button className="mob-logout" onClick={handleLogout}>
//                                     Logout ({user.name})
//                                 </button>
//                             </>
//                         ) : (
//                             <NavLink to="/login" className="mob-cta" onClick={() => setMenuOpen(false)}>
//                                 🔐 Login করুন
//                             </NavLink>
//                         )}
//                     </div>
//                 )}
//             </nav>
//         </>
//     );
// }

// export default Navbar;

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

/* ═══════════════════════════════════════════════
   RESPONSIVE CSS
   Mobile      ── max-width: 767px
   Tablet      ── 768px  – 1023px
   Laptop 14"  ── 1024px – 1279px
   Laptop 15"  ── 1280px – 1439px
   Desktop     ── 1440px+
═══════════════════════════════════════════════ */
const NAV_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Serif+Bengali:wght@700;800;900&display=swap');

/* ── Root ── */
.nav-root {
    position: sticky; top: 0; z-index: 1000;
    background: rgba(13,59,30,0.97);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255,255,255,0.08);
    font-family: 'Hind Siliguri', sans-serif;
    animation: navSlide .5s ease both;
}
@keyframes navSlide { from{transform:translateY(-100%);opacity:0} to{transform:translateY(0);opacity:1} }

/* ── Inner wrapper ── */
.nav-inner {
    margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between;
}

/* Desktop 1440px+ */
@media(min-width:1440px) {
    .nav-inner { max-width:1400px; padding:0 48px; height:68px; }
}
/* Laptop 15"  1280–1439 */
@media(min-width:1280px)and(max-width:1439px) {
    .nav-inner { max-width:1280px; padding:0 40px; height:66px; }
}
/* Laptop 14"  1024–1279 */
@media(min-width:1024px)and(max-width:1279px) {
    .nav-inner { max-width:1100px; padding:0 28px; height:64px; }
}
/* Tablet  768–1023 */
@media(min-width:768px)and(max-width:1023px) {
    .nav-inner { max-width:100%; padding:0 20px; height:60px; }
}
/* Mobile  ≤767 */
@media(max-width:767px) {
    .nav-inner { padding:0 16px; height:56px; }
}

/* ── Brand ── */
.nav-brand {
    display: flex; align-items: center; gap: 10px;
    text-decoration: none; flex-shrink: 0;
}
.nav-logo {
    border-radius: 11px;
    background: linear-gradient(135deg,#5ecb87,#2e9e56);
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 0 0 3px rgba(94,203,135,.2);
}
@media(min-width:1280px) { .nav-logo{width:38px;height:38px;font-size:18px;} }
@media(min-width:1024px)and(max-width:1279px) { .nav-logo{width:36px;height:36px;font-size:17px;} }
@media(min-width:768px) and(max-width:1023px) { .nav-logo{width:34px;height:34px;font-size:16px;} }
@media(max-width:767px) { .nav-logo{width:32px;height:32px;font-size:15px;} }

.nav-brand-title {
    font-family: 'Noto Serif Bengali', serif;
    font-weight: 800; color: #fff; letter-spacing: -0.3px;
}
.nav-brand-title span { color: #5ecb87; }
@media(min-width:1440px)                      { .nav-brand-title{font-size:22px;} }
@media(min-width:1280px)and(max-width:1439px) { .nav-brand-title{font-size:21px;} }
@media(min-width:1024px)and(max-width:1279px) { .nav-brand-title{font-size:20px;} }
@media(min-width:768px) and(max-width:1023px) { .nav-brand-title{font-size:18px;} }
@media(max-width:767px)                       { .nav-brand-title{font-size:17px;} }

/* ── Desktop Nav Links (visible 1024px+) ── */
.nav-links {
    display: flex; align-items: center; gap: 2px;
    list-style: none; margin: 0; padding: 0;
}
/* Hide on mobile & tablet, show on laptop+ */
@media(max-width:1023px) { .nav-links{display:none!important;} }

.nav-links a {
    text-decoration: none; color: rgba(255,255,255,.7);
    font-weight: 500; padding: 8px 14px; border-radius: 8px;
    transition: all .2s ease;
    white-space: nowrap;
}
.nav-links a:hover, .nav-links a.active {
    color: #fff; background: rgba(255,255,255,.08);
}
.nav-links a.active { color: #5ecb87; background: rgba(94,203,135,.1); }

/* Font sizes per device */
@media(min-width:1440px)                      { .nav-links a{font-size:15px;padding:9px 16px;} }
@media(min-width:1280px)and(max-width:1439px) { .nav-links a{font-size:14.5px;padding:9px 14px;} }
@media(min-width:1024px)and(max-width:1279px) { .nav-links a{font-size:13.5px;padding:8px 11px;} }

/* CTA button */
.nav-cta {
    background: linear-gradient(135deg,#2e9e56,#5ecb87) !important;
    color: #fff !important; border-radius: 50px !important;
    font-weight: 600 !important;
    box-shadow: 0 4px 16px rgba(46,158,86,.4);
    transition: transform .2s, box-shadow .2s !important;
}
.nav-cta:hover { transform:translateY(-1px)!important; box-shadow:0 6px 20px rgba(46,158,86,.55)!important; }
@media(min-width:1440px)                      { .nav-cta{padding:9px 20px!important;font-size:15px!important;} }
@media(min-width:1280px)and(max-width:1439px) { .nav-cta{padding:9px 18px!important;font-size:14.5px!important;} }
@media(min-width:1024px)and(max-width:1279px) { .nav-cta{padding:8px 15px!important;font-size:13.5px!important;} }

/* Admin link */
.nav-admin {
    color: #f9c74f !important;
    background: rgba(249,199,79,.1) !important;
    border-radius: 8px; font-weight: 600 !important;
}
.nav-admin:hover { background:rgba(249,199,79,.2)!important; }

/* User name */
.nav-user {
    color: rgba(255,255,255,.6);
    white-space: nowrap;
    overflow: hidden; text-overflow: ellipsis; max-width: 120px;
}
@media(min-width:1440px)                      { .nav-user{font-size:13px;padding:0 8px;} }
@media(min-width:1024px)and(max-width:1279px) { .nav-user{font-size:12px;padding:0 4px;max-width:90px;} }

/* Logout button */
.nav-logout {
    background: none;
    border: 1.5px solid rgba(255,100,100,.5);
    color: #ff8080; font-weight: 500;
    padding: 7px 16px; border-radius: 50px;
    cursor: pointer; font-family: 'Hind Siliguri', sans-serif;
    transition: all .2s; white-space: nowrap;
}
.nav-logout:hover { background:rgba(255,100,100,.12); color:#ffaaaa; }
@media(min-width:1440px)                      { .nav-logout{font-size:14px;} }
@media(min-width:1280px)and(max-width:1439px) { .nav-logout{font-size:14px;} }
@media(min-width:1024px)and(max-width:1279px) { .nav-logout{font-size:12.5px;padding:6px 12px;} }

/* ── Hamburger (tablet & mobile only) ── */
.nav-hamburger {
    display: none;
    background: none;
    border: 1.5px solid rgba(255,255,255,.2);
    color: #fff; border-radius: 9px;
    cursor: pointer; align-items: center; justify-content: center;
    transition: background .2s; flex-shrink: 0;
}
.nav-hamburger:hover { background:rgba(255,255,255,.08); }
@media(min-width:768px)and(max-width:1023px) { .nav-hamburger{display:flex;width:38px;height:38px;font-size:18px;} }
@media(max-width:767px)                      { .nav-hamburger{display:flex;width:34px;height:34px;font-size:17px;} }

/* ── Mobile / Tablet Drawer ── */
.nav-drawer {
    background: #0d3b1e;
    border-top: 1px solid rgba(255,255,255,.06);
    display: flex; flex-direction: column; gap: 4px;
}
@media(min-width:768px)and(max-width:1023px) { .nav-drawer{padding:10px 24px 18px;} }
@media(max-width:767px)                      { .nav-drawer{padding:12px 16px 20px;} }

.nav-drawer a {
    text-decoration: none; color: rgba(255,255,255,.7);
    font-weight: 500; border-radius: 10px; transition: all .2s;
}
.nav-drawer a:hover { background:rgba(255,255,255,.07); color:#fff; }
@media(min-width:768px)and(max-width:1023px) { .nav-drawer a{font-size:14px;padding:10px 14px;} }
@media(max-width:767px)                      { .nav-drawer a{font-size:15px;padding:11px 14px;} }

.drawer-cta {
    margin-top: 8px;
    background: linear-gradient(135deg,#2e9e56,#5ecb87) !important;
    color: #fff !important; text-align: center;
    border-radius: 50px !important; font-weight: 700 !important;
}
.drawer-logout {
    margin-top: 4px;
    border: 1.5px solid rgba(255,100,100,.4);
    color: #ff8080 !important; text-align: center;
    border-radius: 50px; cursor: pointer;
    background: none; font-family: 'Hind Siliguri', sans-serif;
    font-weight: 500; width: 100%; transition: all .2s;
}
.drawer-logout:hover { background:rgba(255,100,100,.1); }
@media(min-width:768px)and(max-width:1023px) { .drawer-logout{font-size:14px;padding:10px 14px;} }
@media(max-width:767px)                      { .drawer-logout{font-size:15px;padding:11px 14px;} }
`;

function Navbar() {
    const [open, setOpen] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => { logout(); navigate("/login"); setOpen(false); };
    const close = () => setOpen(false);

    return (
        <>
            <style>{NAV_CSS}</style>

            <nav className="nav-root">
                <div className="nav-inner">

                    {/* ── Brand ── */}
                    <Link to="/" className="nav-brand">
                        <div className="nav-logo">🏥</div>
                        <span className="nav-brand-title">স্বাস্থ্য<span>খোঁজি</span></span>
                    </Link>

                    {/* ── Desktop Links (1024px+) ── */}
                    <ul className="nav-links">
                        <li><NavLink to="/" end>হোম</NavLink></li>
                        <li><NavLink to="/search">ডাক্তার খুঁজুন</NavLink></li>
                        <li><NavLink to="/hospitals">হাসপাতাল</NavLink></li>
                        <li><NavLink to="/tips">স্বাস্থ্য টিপস</NavLink></li>
                        <li><NavLink to="/about">আমাদের সম্পর্কে</NavLink></li>

                        {user ? (
                            <>
                                {user.role === "admin" ? (
                                    <li><NavLink to="/admin" className="nav-admin">⚙️ Admin Panel</NavLink></li>
                                ) : (
                                    <li><NavLink to="/appointments" className="nav-cta">অ্যাপয়েন্টমেন্ট</NavLink></li>
                                )}
                                <li><span className="nav-user">👤 {user.name}</span></li>
                                <li>
                                    <button className="nav-logout" onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        ) : (
                            <li><NavLink to="/login" className="nav-cta">Login</NavLink></li>
                        )}
                    </ul>

                    {/* ── Hamburger (tablet & mobile) ── */}
                    <button className="nav-hamburger" onClick={() => setOpen(!open)} aria-label="মেনু">
                        {open ? "✕" : "☰"}
                    </button>
                </div>

                {/* ── Mobile / Tablet Drawer ── */}
                {open && (
                    <div className="nav-drawer">
                        <NavLink to="/" end onClick={close}>হোম</NavLink>
                        <NavLink to="/search" onClick={close}>ডাক্তার খুঁজুন</NavLink>
                        <NavLink to="/hospitals" onClick={close}>হাসপাতাল</NavLink>
                        <NavLink to="/tips" onClick={close}>স্বাস্থ্য টিপস</NavLink>
                        <NavLink to="/about" onClick={close}>আমাদের সম্পর্কে</NavLink>

                        {user ? (
                            <>
                                {user.role === "admin" ? (
                                    <NavLink to="/admin" onClick={close} style={{ color: "#f9c74f" }}>⚙️ Admin Panel</NavLink>
                                ) : (
                                    <NavLink to="/appointments" className="drawer-cta" onClick={close}>📅 অ্যাপয়েন্টমেন্ট নিন</NavLink>
                                )}
                                <button className="drawer-logout" onClick={handleLogout}>
                                    Logout ({user.name})
                                </button>
                            </>
                        ) : (
                            <NavLink to="/login" className="drawer-cta" onClick={close}>🔐 Login করুন</NavLink>
                        )}
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;