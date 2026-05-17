// // src/components/Footer.jsx
// function Footer() {
//     return (
//         <footer style={{
//             background: "linear-gradient(160deg, #062210, #0d3b1e)",
//             color: "#fff",
//             padding: "48px 24px 24px",
//             fontFamily: "'Hind Siliguri', sans-serif",
//         }}>
//             <div style={{ maxWidth: 960, margin: "0 auto" }}>
//                 <div style={{
//                     display: "grid",
//                     gridTemplateColumns: "2fr 1fr 1fr 1fr",
//                     gap: 32, marginBottom: 40,
//                 }}>
//                     {/* Brand */}
//                     <div>
//                         <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>🏥 স্বাস্থ্য খোঁজি</div>
//                         <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 18 }}>
//                             বাংলাদেশের সবচেয়ে বিশ্বস্ত অনলাইন স্বাস্থ্যসেবা প্ল্যাটফর্ম। সঠিক ডাক্তার খুঁজুন, সহজে অ্যাপয়েন্টমেন্ট নিন।
//                         </p>
//                         <div style={{
//                             display: "inline-flex", alignItems: "center", gap: 7,
//                             background: "rgba(255,255,255,0.08)",
//                             border: "1px solid rgba(255,255,255,0.15)",
//                             borderRadius: 50, padding: "6px 14px",
//                             fontSize: 12, color: "#a8e6c0", marginBottom: 14,
//                         }}>
//                             <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#5ecb87", boxShadow: "0 0 8px #5ecb87", display: "inline-block" }} />
//                             ২৪/৭ সেবা চালু আছে
//                         </div>
//                         <div style={{
//                             background: "rgba(94,203,135,0.12)",
//                             border: "1px solid rgba(94,203,135,0.2)",
//                             borderRadius: 12, padding: "14px 16px",
//                         }}>
//                             <div style={{ fontSize: 11, color: "#5ecb87", fontWeight: 600, marginBottom: 4 }}>জরুরি হেল্পলাইন</div>
//                             <div style={{ fontSize: 20, fontWeight: 800 }}>📞 ১৬০০০</div>
//                         </div>
//                     </div>

//                     {/* Links */}
//                     {[
//                         { title: "সেবাসমূহ", links: ["ডাক্তার খুঁজুন", "অনলাইন পরামর্শ", "অ্যাপয়েন্টমেন্ট", "হাসপাতাল খুঁজুন", "ওষুধের তথ্য"] },
//                         { title: "বিশেষজ্ঞতা", links: ["মেডিসিন", "শিশু রোগ", "গাইনি", "চর্মরোগ", "সব বিভাগ →"] },
//                         { title: "সাহায্য", links: ["আমাদের সম্পর্কে", "যোগাযোগ", "গোপনীয়তা নীতি", "শর্তাবলী", "FAQ"] },
//                     ].map((col) => (
//                         <div key={col.title}>
//                             <div style={{ fontSize: 13, fontWeight: 700, color: "#5ecb87", textTransform: "uppercase", letterSpacing: ".8px", marginBottom: 14 }}>
//                                 {col.title}
//                             </div>
//                             {col.links.map((l) => (
//                                 <a key={l} href="#" style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none", marginBottom: 9 }}>{l}</a>
//                             ))}
//                         </div>
//                     ))}
//                 </div>

//                 <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: 20 }} />

//                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
//                     <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>© ২০২৫ স্বাস্থ্য খোঁজি। সর্বস্বত্ব সংরক্ষিত।</div>
//                     <div style={{ display: "flex", gap: 10 }}>
//                         {["f", "in", "yt", "tw"].map((s) => (
//                             <div key={s} style={{
//                                 width: 34, height: 34, borderRadius: "50%",
//                                 background: "rgba(255,255,255,0.07)",
//                                 border: "1px solid rgba(255,255,255,0.12)",
//                                 display: "flex", alignItems: "center", justifyContent: "center",
//                                 fontSize: 13, cursor: "pointer",
//                             }}>{s}</div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;

// src/components/Footer.jsx
import { Link } from "react-router-dom";

/* ═══════════════════════════════════════════════
   RESPONSIVE CSS
   Mobile      ── max-width: 767px
   Tablet      ── 768px  – 1023px
   Laptop 14"  ── 1024px – 1279px
   Laptop 15"  ── 1280px – 1439px
   Desktop     ── 1440px+
═══════════════════════════════════════════════ */
const FOOTER_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Serif+Bengali:wght@700;800;900&display=swap');

/* ── Root ── */
.ft-root {
    background: linear-gradient(160deg, #062210 0%, #0d3b1e 60%, #0f4a24 100%);
    color: #fff;
    font-family: 'Hind Siliguri', sans-serif;
    position: relative;
    overflow: hidden;
}

/* Decorative background circles */
.ft-root::before {
    content: '';
    position: absolute;
    width: 500px; height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(94,203,135,0.06) 0%, transparent 70%);
    top: -200px; right: -100px;
    pointer-events: none;
}
.ft-root::after {
    content: '';
    position: absolute;
    width: 300px; height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(46,158,86,0.05) 0%, transparent 70%);
    bottom: -100px; left: -50px;
    pointer-events: none;
}

/* ── Inner Container ── */
.ft-inner {
    margin: 0 auto;
    position: relative;
    z-index: 1;
}
@media(min-width:1440px)                      { .ft-inner { max-width:1200px; padding:72px 40px 32px; } }
@media(min-width:1280px)and(max-width:1439px) { .ft-inner { max-width:1060px; padding:64px 36px 28px; } }
@media(min-width:1024px)and(max-width:1279px) { .ft-inner { max-width:960px;  padding:56px 28px 24px; } }
@media(min-width:768px) and(max-width:1023px) { .ft-inner { max-width:100%;   padding:48px 20px 22px; } }
@media(max-width:767px)                       { .ft-inner { padding:40px 16px 20px; } }

/* ── Newsletter Banner (top strip) ── */
.ft-newsletter {
    background: linear-gradient(135deg, rgba(46,158,86,0.15), rgba(94,203,135,0.08));
    border: 1px solid rgba(94,203,135,0.2);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 56px;
}
@media(min-width:1280px)                      { .ft-newsletter { padding:24px 32px; } }
@media(min-width:1024px)and(max-width:1279px) { .ft-newsletter { padding:20px 28px; } }
@media(min-width:768px) and(max-width:1023px) { .ft-newsletter { padding:20px 24px; } }
@media(max-width:767px)                       { .ft-newsletter { padding:18px 16px; flex-direction:column; text-align:center; margin-bottom:36px; } }

.ft-nl-text h4 {
    font-family: 'Noto Serif Bengali', serif;
    font-weight: 800; color: #fff; margin: 0 0 4px;
}
@media(min-width:768px) { .ft-nl-text h4 { font-size:17px; } }
@media(max-width:767px) { .ft-nl-text h4 { font-size:16px; } }

.ft-nl-text p {
    font-size: 13px; color: rgba(255,255,255,0.5); margin: 0;
}

.ft-nl-form {
    display: flex; gap: 10px; flex-wrap: wrap;
}
@media(max-width:767px) { .ft-nl-form { width:100%; justify-content:center; } }

.ft-nl-input {
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 50px;
    color: #fff;
    font-family: 'Hind Siliguri', sans-serif;
    outline: none;
    transition: border-color .2s, background .2s;
}
.ft-nl-input::placeholder { color: rgba(255,255,255,0.35); }
.ft-nl-input:focus { border-color: #5ecb87; background: rgba(255,255,255,0.12); }
@media(min-width:768px) { .ft-nl-input { padding:10px 18px; font-size:13px; width:220px; } }
@media(max-width:767px) { .ft-nl-input { padding:10px 16px; font-size:13px; width:100%; max-width:280px; } }

.ft-nl-btn {
    background: linear-gradient(135deg, #2e9e56, #5ecb87);
    color: #fff; border: none; border-radius: 50px;
    font-family: 'Hind Siliguri', sans-serif;
    font-weight: 700; cursor: pointer;
    box-shadow: 0 4px 16px rgba(46,158,86,0.4);
    transition: transform .2s, box-shadow .2s;
    white-space: nowrap;
}
.ft-nl-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(46,158,86,0.55); }
@media(min-width:768px) { .ft-nl-btn { padding:10px 22px; font-size:13px; } }
@media(max-width:767px) { .ft-nl-btn { padding:10px 20px; font-size:13px; } }

/* ── Main Grid ── */
.ft-grid {
    display: grid;
    margin-bottom: 48px;
}
@media(min-width:1440px)                      { .ft-grid { grid-template-columns:2.2fr 1fr 1fr 1fr; gap:48px; } }
@media(min-width:1280px)and(max-width:1439px) { .ft-grid { grid-template-columns:2fr 1fr 1fr 1fr;   gap:36px; } }
@media(min-width:1024px)and(max-width:1279px) { .ft-grid { grid-template-columns:2fr 1fr 1fr 1fr;   gap:28px; } }
@media(min-width:768px) and(max-width:1023px) { .ft-grid { grid-template-columns:1fr 1fr;           gap:32px; margin-bottom:36px; } }
@media(max-width:767px)                       { .ft-grid { grid-template-columns:1fr;               gap:32px; margin-bottom:32px; } }

/* ── Brand Column ── */
.ft-brand-col {}
@media(min-width:768px)and(max-width:1023px) { .ft-brand-col { grid-column: 1 / -1; } }

.ft-brand-title {
    font-family: 'Noto Serif Bengali', serif;
    font-weight: 800; color: #fff; margin-bottom: 12px;
    display: flex; align-items: center; gap: 8px;
}
@media(min-width:1280px)                      { .ft-brand-title { font-size:24px; } }
@media(min-width:1024px)and(max-width:1279px) { .ft-brand-title { font-size:22px; } }
@media(min-width:768px) and(max-width:1023px) { .ft-brand-title { font-size:22px; } }
@media(max-width:767px)                       { .ft-brand-title { font-size:20px; } }

.ft-brand-logo {
    width: 40px; height: 40px; border-radius: 12px;
    background: linear-gradient(135deg, #5ecb87, #2e9e56);
    display: flex; align-items: center; justify-content: center;
    font-size: 20px; flex-shrink: 0;
    box-shadow: 0 4px 14px rgba(46,158,86,0.4);
}

.ft-brand-desc {
    font-size: 13px; color: rgba(255,255,255,0.5);
    line-height: 1.8; margin-bottom: 18px;
}
@media(min-width:768px)and(max-width:1023px) { .ft-brand-desc { max-width: 500px; } }

/* Live badge */
.ft-live-badge {
    display: inline-flex; align-items: center; gap: 7px;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 50px; font-size: 12px;
    color: #a8e6c0; margin-bottom: 18px;
}
@media(min-width:768px) { .ft-live-badge { padding:6px 14px; } }
@media(max-width:767px) { .ft-live-badge { padding:6px 12px; } }

.ft-live-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: #5ecb87; box-shadow: 0 0 8px #5ecb87;
    display: inline-block; flex-shrink: 0;
    animation: ftPulse 2s infinite;
}
@keyframes ftPulse {
    0%,100% { box-shadow: 0 0 8px #5ecb87; }
    50%      { box-shadow: 0 0 14px #5ecb87; }
}

/* Helpline box */
.ft-helpline {
    background: rgba(94,203,135,0.1);
    border: 1px solid rgba(94,203,135,0.22);
    border-radius: 14px;
    margin-bottom: 20px;
}
@media(min-width:768px) { .ft-helpline { padding:16px 18px; max-width:230px; } }
@media(max-width:767px) { .ft-helpline { padding:14px 16px; } }

.ft-helpline-label { font-size:11px; color:#5ecb87; font-weight:700; margin-bottom:5px; letter-spacing:.5px; text-transform:uppercase; }
.ft-helpline-num   { font-weight:800; color:#fff; }
@media(min-width:1280px)                      { .ft-helpline-num { font-size:22px; } }
@media(min-width:1024px)and(max-width:1279px) { .ft-helpline-num { font-size:20px; } }
@media(max-width:1023px)                      { .ft-helpline-num { font-size:20px; } }

/* App download badges */
.ft-app-badges { display:flex; gap:10px; flex-wrap:wrap; }

.ft-app-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 10px; text-decoration: none;
    color: #fff; transition: background .2s, border-color .2s;
}
.ft-app-badge:hover { background:rgba(255,255,255,0.12); border-color:rgba(255,255,255,0.25); }
@media(min-width:768px) { .ft-app-badge { padding:8px 14px; font-size:12px; } }
@media(max-width:767px) { .ft-app-badge { padding:8px 12px; font-size:12px; } }

.ft-app-badge-icon { font-size:18px; }
.ft-app-badge-sub  { font-size:10px; color:rgba(255,255,255,0.5); display:block; line-height:1.2; }
.ft-app-badge-name { font-size:13px; font-weight:600; display:block; line-height:1.4; }

/* ── Link Columns ── */
.ft-col-title {
    font-size: 12px; font-weight: 700; color: #5ecb87;
    text-transform: uppercase; letter-spacing: .8px;
    margin-bottom: 16px; padding-bottom: 10px;
    border-bottom: 1px solid rgba(94,203,135,0.15);
}

.ft-col-link {
    display: flex; align-items: center; gap: 6px;
    font-size: 13px; color: rgba(255,255,255,0.5);
    text-decoration: none; margin-bottom: 10px;
    transition: color .2s, gap .2s;
}
.ft-col-link:hover { color: #fff; gap: 10px; }
.ft-col-link-arrow { font-size:11px; opacity:.6; transition: opacity .2s; }
.ft-col-link:hover .ft-col-link-arrow { opacity:1; }

/* ── Stats Row (between grid and divider) ── */
.ft-stats-row {
    display: grid;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 18px;
    overflow: hidden;
    margin-bottom: 40px;
    background: rgba(255,255,255,0.03);
}
@media(min-width:768px)  { .ft-stats-row { grid-template-columns: repeat(3,1fr); } }
@media(max-width:767px)  { .ft-stats-row { grid-template-columns: 1fr; } }

.ft-stat-item {
    text-align: center;
    border-right: 1px solid rgba(255,255,255,0.08);
}
.ft-stat-item:last-child { border-right: none; }
@media(min-width:768px) { .ft-stat-item { padding:20px 16px; } }
@media(max-width:767px) {
    .ft-stat-item { padding:16px; border-right:none; border-bottom:1px solid rgba(255,255,255,0.08); }
    .ft-stat-item:last-child { border-bottom:none; }
}

.ft-stat-val {
    font-family: 'Noto Serif Bengali', serif;
    font-weight: 900; color: #5ecb87; margin-bottom: 4px;
}
@media(min-width:1280px)                      { .ft-stat-val { font-size:28px; } }
@media(min-width:1024px)and(max-width:1279px) { .ft-stat-val { font-size:26px; } }
@media(min-width:768px) and(max-width:1023px) { .ft-stat-val { font-size:24px; } }
@media(max-width:767px)                       { .ft-stat-val { font-size:26px; } }

.ft-stat-lbl { font-size:12px; color:rgba(255,255,255,0.45); }

/* ── Divider ── */
.ft-hr { border:none; border-top:1px solid rgba(255,255,255,0.08); margin-bottom:24px; }

/* ── Bottom Bar ── */
.ft-bottom {
    display: flex; align-items: center;
    justify-content: space-between; flex-wrap: wrap; gap: 14px;
}
@media(max-width:767px) { .ft-bottom { flex-direction:column; text-align:center; gap:16px; } }

.ft-copy { color:rgba(255,255,255,0.35); font-size:12px; }

.ft-bottom-links { display:flex; gap:16px; flex-wrap:wrap; }
@media(max-width:767px) { .ft-bottom-links { justify-content:center; } }

.ft-bottom-link {
    font-size:12px; color:rgba(255,255,255,0.4);
    text-decoration:none; transition:color .2s;
}
.ft-bottom-link:hover { color:#fff; }

/* Social Icons */
.ft-socials { display:flex; gap:10px; }
@media(max-width:767px) { .ft-socials { justify-content:center; } }

.ft-social {
    border-radius:50%;
    background:rgba(255,255,255,0.07);
    border:1px solid rgba(255,255,255,0.12);
    display:flex; align-items:center; justify-content:center;
    cursor:pointer; font-weight:600;
    color:rgba(255,255,255,0.6);
    text-decoration:none;
    transition:background .2s, border-color .2s, transform .2s, color .2s;
}
.ft-social:hover {
    background:rgba(255,255,255,0.14);
    border-color:rgba(255,255,255,0.3);
    color:#fff; transform:translateY(-2px);
}
@media(min-width:768px) { .ft-social { width:36px; height:36px; font-size:14px; } }
@media(max-width:767px) { .ft-social { width:40px; height:40px; font-size:15px; } }

/* ── BMDC Badge ── */
.ft-bmdc {
    display:inline-flex; align-items:center; gap:6px;
    background:rgba(240,192,64,0.1);
    border:1px solid rgba(240,192,64,0.25);
    border-radius:50px;
    font-size:11px; color:#f0c040; font-weight:600;
    padding:4px 12px;
}
`;

/* ── Data ── */
const footerCols = [
    {
        title: "সেবাসমূহ",
        links: [
            { label: "ডাক্তার খুঁজুন", to: "/search" },
            { label: "অনলাইন পরামর্শ", to: "/search?mode=online" },
            { label: "অ্যাপয়েন্টমেন্ট", to: "/appointments" },
            { label: "হাসপাতাল খুঁজুন", to: "/hospitals" },
            { label: "ওষুধের তথ্য", to: "/medicines" },
        ],
    },
    {
        title: "বিশেষজ্ঞতা",
        links: [
            { label: "মেডিসিন", to: "/search?specialization=মেডিসিন" },
            { label: "শিশু রোগ", to: "/search?specialization=শিশু রোগ" },
            { label: "গাইনি", to: "/search?specialization=গাইনি" },
            { label: "চর্মরোগ", to: "/search?specialization=চর্মরোগ" },
            { label: "সব বিভাগ →", to: "/search" },
        ],
    },
    {
        title: "সাহায্য",
        links: [
            { label: "আমাদের সম্পর্কে", to: "/about" },
            { label: "যোগাযোগ", to: "/contact" },
            { label: "গোপনীয়তা নীতি", to: "/privacy" },
            { label: "শর্তাবলী", to: "/terms" },
            { label: "FAQ", to: "/faq" },
        ],
    },
];

const stats = [
    { val: "৫০০+", lbl: "বিশেষজ্ঞ ডাক্তার" },
    { val: "৬৪", lbl: "জেলায় সেবা" },
    { val: "১০ লাখ+", lbl: "রোগী সেবা পেয়েছেন" },
];

const socials = [
    { icon: "f", title: "Facebook", href: "#" },
    { icon: "in", title: "LinkedIn", href: "#" },
    { icon: "yt", title: "YouTube", href: "#" },
    { icon: "tw", title: "Twitter", href: "#" },
];

const bottomLinks = ["গোপনীয়তা নীতি", "শর্তাবলী", "সাইটম্যাপ"];

/* ── Component ── */
function Footer() {
    const handleSubscribe = (e) => {
        e.preventDefault();
        const input = e.target.querySelector("input");
        if (!input?.value) return;
        alert(`✅ ${input.value} — সফলভাবে সাবস্ক্রাইব হয়েছে!`);
        input.value = "";
    };

    return (
        <footer className="ft-root">
            <style>{FOOTER_CSS}</style>
            <div className="ft-inner">

                {/* ══ Newsletter Banner ══ */}
                <div className="ft-newsletter">
                    <div className="ft-nl-text">
                        <h4>স্বাস্থ্য সংক্রান্ত আপডেট পান</h4>
                        <p>সর্বশেষ স্বাস্থ্য টিপস ও ডাক্তারদের পরামর্শ সরাসরি আপনার ইমেইলে</p>
                    </div>
                    <form className="ft-nl-form" onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            className="ft-nl-input"
                            placeholder="আপনার ইমেইল দিন..."
                            required
                        />
                        <button type="submit" className="ft-nl-btn">সাবস্ক্রাইব করুন →</button>
                    </form>
                </div>

                {/* ══ Main Grid ══ */}
                <div className="ft-grid">

                    {/* Brand Column */}
                    <div className="ft-brand-col">
                        <div className="ft-brand-title">
                            <div className="ft-brand-logo">🏥</div>
                            স্বাস্থ্য খোঁজি
                        </div>
                        <p className="ft-brand-desc">
                            বাংলাদেশের সবচেয়ে বিশ্বস্ত অনলাইন স্বাস্থ্যসেবা প্ল্যাটফর্ম।
                            সঠিক ডাক্তার খুঁজুন, সহজে অ্যাপয়েন্টমেন্ট নিন এবং ঘরে বসেই
                            বিশেষজ্ঞ পরামর্শ নিন।
                        </p>

                        {/* Live Badge */}
                        <div>
                            <div className="ft-live-badge">
                                <span className="ft-live-dot" />
                                ২৪/৭ সেবা চালু আছে
                            </div>
                        </div>

                        {/* Helpline */}
                        <div className="ft-helpline">
                            <div className="ft-helpline-label">জরুরি হেল্পলাইন</div>
                            <div className="ft-helpline-num">📞 ১৬০০০</div>
                        </div>

                        {/* BMDC Badge */}
                        <div className="ft-bmdc">
                            ✅ BMDC যাচাইকৃত প্ল্যাটফর্ম
                        </div>

                        {/* App Download */}
                        <div className="ft-app-badges" style={{ marginTop: 16 }}>
                            <a href="#" className="ft-app-badge">
                                <span className="ft-app-badge-icon">🍎</span>
                                <div>
                                    <span className="ft-app-badge-sub">Download on the</span>
                                    <span className="ft-app-badge-name">App Store</span>
                                </div>
                            </a>
                            <a href="#" className="ft-app-badge">
                                <span className="ft-app-badge-icon">🤖</span>
                                <div>
                                    <span className="ft-app-badge-sub">Get it on</span>
                                    <span className="ft-app-badge-name">Google Play</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {footerCols.map(col => (
                        <div key={col.title}>
                            <div className="ft-col-title">{col.title}</div>
                            {col.links.map(l => (
                                <Link key={l.label} to={l.to} className="ft-col-link">
                                    <span className="ft-col-link-arrow">›</span>
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>

                {/* ══ Stats Row ══ */}
                <div className="ft-stats-row">
                    {stats.map(s => (
                        <div key={s.lbl} className="ft-stat-item">
                            <div className="ft-stat-val">{s.val}</div>
                            <div className="ft-stat-lbl">{s.lbl}</div>
                        </div>
                    ))}
                </div>

                {/* ══ Divider ══ */}
                <hr className="ft-hr" />

                {/* ══ Bottom Bar ══ */}
                <div className="ft-bottom">
                    <div className="ft-copy">
                        © ২০২৫ স্বাস্থ্য খোঁজি। সর্বস্বত্ব সংরক্ষিত।
                    </div>

                    <div className="ft-bottom-links">
                        {bottomLinks.map(l => (
                            <a key={l} href="#" className="ft-bottom-link">{l}</a>
                        ))}
                    </div>

                    <div className="ft-socials">
                        {socials.map(s => (
                            <a key={s.icon} href={s.href} className="ft-social" title={s.title}>
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;