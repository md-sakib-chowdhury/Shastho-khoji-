// // import { Link } from "react-router-dom";
// // import SearchBar from "../components/SearchBar";

// // const specializations = ["মেডিসিন", "শিশু রোগ", "গাইনি", "অর্থোপেডিক", "চর্মরোগ", "চক্ষু", "দন্ত রোগ", "মানসিক রোগ"];

// // function Home() {
// //     return (
// //         <div className="min-h-screen bg-gray-50">
// //             <div className="bg-green-700 text-white py-16 px-4 text-center">
// //                 <h1 className="text-3xl font-bold mb-2">স্বাস্থ্য খোঁজি 🏥</h1>
// //                 <p className="text-green-100 mb-8">বাংলাদেশের যেকোনো প্রান্তে ডাক্তার খুঁজুন</p>
// //                 <div className="flex justify-center">
// //                     <SearchBar />
// //                 </div>
// //             </div>

// //             <div className="max-w-4xl mx-auto px-4 py-10">
// //                 <h2 className="text-xl font-bold mb-4 text-gray-800">বিশেষজ্ঞতা অনুযায়ী খুঁজুন</h2>
// //                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
// //                     {specializations.map((s) => (
// //                         <Link
// //                             key={s}
// //                             to={`/search?specialization=${s}`}
// //                             className="bg-white p-4 border rounded-xl text-center hover:shadow-md transition-all cursor-pointer"
// //                         >
// //                             <p className="text-2xl mb-1">🩺</p>
// //                             <p className="text-sm font-medium text-gray-700">{s}</p>
// //                         </Link>
// //                     ))}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // // একদম নিচে এক্সপোর্টটি দিয়ে দিলাম
// // export default Home;
// import { Link } from "react-router-dom";
// import SearchBar from "../components/SearchBar";

// const specializations = [
//     { name: "মেডিসিন", icon: "💊", color: "#e8f5e9", border: "#a5d6a7" },
//     { name: "শিশু রোগ", icon: "👶", color: "#e3f2fd", border: "#90caf9" },
//     { name: "গাইনি", icon: "🌸", color: "#fce4ec", border: "#f48fb1" },
//     { name: "অর্থোপেডিক", icon: "🦴", color: "#fff8e1", border: "#ffe082" },
//     { name: "চর্মরোগ", icon: "🧴", color: "#f3e5f5", border: "#ce93d8" },
//     { name: "চক্ষু", icon: "👁️", color: "#e0f7fa", border: "#80deea" },
//     { name: "দন্ত রোগ", icon: "🦷", color: "#e8eaf6", border: "#9fa8da" },
//     { name: "মানসিক রোগ", icon: "🧠", color: "#e8f5e9", border: "#a5d6a7" },
// ];

// const stats = [
//     { value: "৫০০+", label: "বিশেষজ্ঞ ডাক্তার" },
//     { value: "৬৪", label: "জেলায় সেবা" },
//     { value: "১০ লাখ+", label: "রোগী সেবা পেয়েছেন" },
// ];

// function Home() {
//     return (
//         <div className="min-h-screen" style={{ background: "#f0faf4", fontFamily: "'Hind Siliguri', sans-serif" }}>

//             {/* Hero Section */}
//             <div
//                 style={{
//                     background: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #388e3c 100%)",
//                     padding: "80px 20px 100px",
//                     textAlign: "center",
//                     position: "relative",
//                     overflow: "hidden",
//                 }}
//             >
//                 {/* Decorative circles */}
//                 <div style={{
//                     position: "absolute", top: -60, right: -60,
//                     width: 300, height: 300, borderRadius: "50%",
//                     background: "rgba(255,255,255,0.04)"
//                 }} />
//                 <div style={{
//                     position: "absolute", bottom: -80, left: -40,
//                     width: 250, height: 250, borderRadius: "50%",
//                     background: "rgba(255,255,255,0.04)"
//                 }} />

//                 <div style={{ position: "relative", zIndex: 1 }}>
//                     <div style={{
//                         display: "inline-flex", alignItems: "center", gap: 8,
//                         background: "rgba(255,255,255,0.15)", borderRadius: 50,
//                         padding: "6px 16px", marginBottom: 20,
//                         fontSize: 13, color: "#c8e6c9",
//                         backdropFilter: "blur(8px)",
//                         border: "1px solid rgba(255,255,255,0.2)"
//                     }}>
//                         🏥 বাংলাদেশের নির্ভরযোগ্য স্বাস্থ্যসেবা প্ল্যাটফর্ম
//                     </div>

//                     <h1 style={{
//                         fontSize: "clamp(2rem, 5vw, 3.2rem)",
//                         fontWeight: 800, color: "#ffffff",
//                         marginBottom: 12, letterSpacing: "-0.5px",
//                         textShadow: "0 2px 12px rgba(0,0,0,0.2)"
//                     }}>
//                         স্বাস্থ্য খোঁজি
//                     </h1>

//                     <p style={{ color: "#a5d6a7", fontSize: 17, marginBottom: 36 }}>
//                         বাংলাদেশের যেকোনো প্রান্তে সঠিক ডাক্তার খুঁজুন — সহজে, দ্রুত
//                     </p>

//                     <div style={{ display: "flex", justifyContent: "center" }}>
//                         <SearchBar />
//                     </div>

//                     {/* Stats bar */}
//                     <div style={{
//                         display: "flex", justifyContent: "center", gap: "40px",
//                         marginTop: 52, flexWrap: "wrap"
//                     }}>
//                         {stats.map((s) => (
//                             <div key={s.label} style={{ textAlign: "center" }}>
//                                 <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>{s.value}</div>
//                                 <div style={{ fontSize: 12, color: "#81c784", marginTop: 2 }}>{s.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Wave divider */}
//             <div style={{ marginTop: -2, lineHeight: 0 }}>
//                 <svg viewBox="0 0 1200 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 60 }}>
//                     <path d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z" fill="#f0faf4" />
//                 </svg>
//             </div>

//             {/* Specializations */}
//             <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 20px 60px" }}>

//                 <div style={{ textAlign: "center", marginBottom: 36 }}>
//                     <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1b5e20", marginBottom: 8 }}>
//                         বিশেষজ্ঞতা অনুযায়ী খুঁজুন
//                     </h2>
//                     <p style={{ color: "#555", fontSize: 14 }}>আপনার প্রয়োজন অনুযায়ী বিভাগ বেছে নিন</p>
//                     <div style={{ width: 48, height: 3, background: "#2e7d32", borderRadius: 4, margin: "12px auto 0" }} />
//                 </div>

//                 <div style={{
//                     display: "grid",
//                     gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
//                     gap: 16
//                 }}>
//                     {specializations.map((s) => (
//                         <Link
//                             key={s.name}
//                             to={`/search?specialization=${s.name}`}
//                             style={{ textDecoration: "none" }}
//                         >
//                             <div style={{
//                                 background: "#fff",
//                                 borderRadius: 16,
//                                 padding: "24px 16px",
//                                 textAlign: "center",
//                                 border: `1.5px solid ${s.border}`,
//                                 transition: "transform 0.2s ease, box-shadow 0.2s ease",
//                                 cursor: "pointer",
//                                 boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//                             }}
//                                 onMouseEnter={e => {
//                                     e.currentTarget.style.transform = "translateY(-4px)";
//                                     e.currentTarget.style.boxShadow = "0 8px 24px rgba(46,125,50,0.15)";
//                                 }}
//                                 onMouseLeave={e => {
//                                     e.currentTarget.style.transform = "translateY(0)";
//                                     e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
//                                 }}
//                             >
//                                 <div style={{
//                                     width: 56, height: 56, borderRadius: 14,
//                                     background: s.color,
//                                     display: "flex", alignItems: "center", justifyContent: "center",
//                                     fontSize: 26, margin: "0 auto 12px"
//                                 }}>
//                                     {s.icon}
//                                 </div>
//                                 <p style={{ fontSize: 14, fontWeight: 600, color: "#1b5e20", margin: 0 }}>{s.name}</p>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>

//                 {/* CTA banner */}
//                 <div style={{
//                     marginTop: 48,
//                     background: "linear-gradient(135deg, #2e7d32, #1b5e20)",
//                     borderRadius: 20, padding: "32px 28px",
//                     display: "flex", alignItems: "center",
//                     justifyContent: "space-between", flexWrap: "wrap", gap: 16,
//                     boxShadow: "0 8px 32px rgba(46,125,50,0.25)"
//                 }}>
//                     <div>
//                         <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 700, margin: "0 0 6px" }}>
//                             জরুরি সাহায্য দরকার?
//                         </h3>
//                         <p style={{ color: "#a5d6a7", fontSize: 14, margin: 0 }}>
//                             আমাদের হেল্পলাইনে যোগাযোগ করুন — ২৪/৭
//                         </p>
//                     </div>
//                     <a href="tel:16000" style={{
//                         background: "#fff", color: "#1b5e20",
//                         padding: "12px 28px", borderRadius: 50,
//                         fontWeight: 700, fontSize: 15,
//                         textDecoration: "none",
//                         boxShadow: "0 4px 16px rgba(0,0,0,0.15)"
//                     }}>
//                         📞 ১৬০০০
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;

// import { Link } from "react-router-dom";
// import SearchBar from "../components/SearchBar";

// const specializations = [
//     { name: "মেডিসিন", icon: "💊", bg: "#e8f5e9", count: "১২০+" },
//     { name: "শিশু রোগ", icon: "👶", bg: "#e3f2fd", count: "৮৫+" },
//     { name: "গাইনি", icon: "🌸", bg: "#fce4ec", count: "৭৪+" },
//     { name: "অর্থোপেডিক", icon: "🦴", bg: "#fff8e1", count: "৫২+" },
//     { name: "চর্মরোগ", icon: "🧴", bg: "#f3e5f5", count: "৪৮+" },
//     { name: "চক্ষু", icon: "👁️", bg: "#e0f7fa", count: "৩৯+" },
//     { name: "দন্ত রোগ", icon: "🦷", bg: "#e8eaf6", count: "৬১+" },
//     { name: "মানসিক রোগ", icon: "🧠", bg: "#e8f5e9", count: "৩৩+" },
// ];

// const stats = [
//     { value: "৫০০+", label: "বিশেষজ্ঞ ডাক্তার" },
//     { value: "৬৪", label: "জেলায় সেবা" },
//     { value: "১০ লাখ+", label: "রোগী সেবা পেয়েছেন" },
// ];

// const features = [
//     { icon: "⚡", title: "তাৎক্ষণিক বুকিং", desc: "মাত্র ৩০ সেকেন্ডে অ্যাপয়েন্টমেন্ট নিন, কোনো অপেক্ষা নেই" },
//     { icon: "✅", title: "যাচাইকৃত ডাক্তার", desc: "সকল ডাক্তার BMDC রেজিস্ট্রেশন যাচাইকৃত" },
//     { icon: "💬", title: "অনলাইন পরামর্শ", desc: "ঘরে বসেই ভিডিও কলে ডাক্তারের সাথে কথা বলুন" },
// ];

// function Home() {
//     return (
//         <div style={{ fontFamily: "'Hind Siliguri', sans-serif", background: "#f7fbf9", minHeight: "100vh" }}>

//             {/* ── Google Fonts ── */}
//             <link
//                 href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Serif+Bengali:wght@700;800;900&display=swap"
//                 rel="stylesheet"
//             />

//             {/* ── HERO ── */}
//             <section style={{
//                 position: "relative",
//                 background: "linear-gradient(160deg, #062210 0%, #0d3b1e 40%, #1a6b38 80%, #2e9e56 100%)",
//                 padding: "80px 24px 100px",
//                 textAlign: "center",
//                 overflow: "hidden",
//             }}>
//                 {/* Grid overlay */}
//                 <div style={{
//                     position: "absolute", inset: 0,
//                     backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
//                     backgroundSize: "60px 60px",
//                     pointerEvents: "none",
//                 }} />

//                 {/* Glow circles */}
//                 <div style={{
//                     position: "absolute", width: 500, height: 500, borderRadius: "50%",
//                     background: "radial-gradient(circle, rgba(94,203,135,0.12) 0%, transparent 70%)",
//                     top: -150, right: -150, pointerEvents: "none",
//                 }} />
//                 <div style={{
//                     position: "absolute", width: 350, height: 350, borderRadius: "50%",
//                     background: "radial-gradient(circle, rgba(240,192,64,0.07) 0%, transparent 70%)",
//                     bottom: -80, left: -80, pointerEvents: "none",
//                 }} />

//                 <div style={{ position: "relative", zIndex: 2, maxWidth: 720, margin: "0 auto" }}>
//                     {/* Badge */}
//                     <div style={{
//                         display: "inline-flex", alignItems: "center", gap: 8,
//                         background: "rgba(255,255,255,0.1)",
//                         border: "1px solid rgba(255,255,255,0.18)",
//                         borderRadius: 50, padding: "7px 18px",
//                         fontSize: 13, color: "#a8e6c0",
//                         marginBottom: 28,
//                         backdropFilter: "blur(8px)",
//                     }}>
//                         <span style={{
//                             width: 7, height: 7, borderRadius: "50%",
//                             background: "#5ecb87",
//                             boxShadow: "0 0 8px #5ecb87",
//                             display: "inline-block",
//                         }} />
//                         বাংলাদেশের নির্ভরযোগ্য স্বাস্থ্যসেবা প্ল্যাটফর্ম
//                     </div>

//                     {/* Title */}
//                     <h1 style={{
//                         fontFamily: "'Noto Serif Bengali', serif",
//                         fontSize: "clamp(2.6rem, 6vw, 4.6rem)",
//                         fontWeight: 900,
//                         color: "#fff",
//                         lineHeight: 1.15,
//                         letterSpacing: "-1px",
//                         marginBottom: 16,
//                         textShadow: "0 2px 12px rgba(0,0,0,0.2)",
//                     }}>
//                         সঠিক ডাক্তার,{" "}
//                         <span style={{
//                             background: "linear-gradient(135deg, #5ecb87, #f0c040)",
//                             WebkitBackgroundClip: "text",
//                             WebkitTextFillColor: "transparent",
//                         }}>
//                             সঠিক সময়ে
//                         </span>
//                     </h1>

//                     <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, marginBottom: 40, lineHeight: 1.7 }}>
//                         বাংলাদেশের যেকোনো প্রান্তে বিশেষজ্ঞ ডাক্তার খুঁজুন —<br />
//                         সহজে, দ্রুত এবং বিশ্বস্তভাবে
//                     </p>

//                     <div style={{ display: "flex", justifyContent: "center", marginBottom: 52 }}>
//                         <SearchBar />
//                     </div>

//                     {/* Stats */}
//                     <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
//                         {stats.map((s, i) => (
//                             <div key={s.label} style={{
//                                 padding: "0 32px",
//                                 textAlign: "center",
//                                 borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
//                             }}>
//                                 <div style={{
//                                     fontFamily: "'Noto Serif Bengali', serif",
//                                     fontSize: 26, fontWeight: 900,
//                                     color: "#fff", marginBottom: 4,
//                                 }}>{s.value}</div>
//                                 <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Wave */}
//             <div style={{ marginTop: -2, lineHeight: 0, background: "#0d3b1e" }}>
//                 <svg viewBox="0 0 1200 70" xmlns="http://www.w3.org/2000/svg"
//                     preserveAspectRatio="none"
//                     style={{ display: "block", width: "100%", height: 70 }}>
//                     <path d="M0,35 C200,70 400,0 600,35 C800,70 1000,10 1200,35 L1200,70 L0,70 Z" fill="#f7fbf9" />
//                 </svg>
//             </div>

//             {/* ── CONTENT ── */}
//             <div style={{ maxWidth: 960, margin: "0 auto", padding: "56px 24px 80px" }}>

//                 {/* Features */}
//                 <div style={{
//                     display: "grid",
//                     gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
//                     gap: 18,
//                     marginBottom: 64,
//                 }}>
//                     {features.map((f) => (
//                         <div key={f.title} style={{
//                             background: "#fff",
//                             borderRadius: 20,
//                             padding: "28px 22px",
//                             border: "1.5px solid #e4f0ea",
//                             transition: "all 0.2s ease",
//                         }}
//                             onMouseEnter={e => {
//                                 e.currentTarget.style.borderColor = "#5ecb87";
//                                 e.currentTarget.style.boxShadow = "0 8px 30px rgba(46,158,86,0.1)";
//                                 e.currentTarget.style.transform = "translateY(-3px)";
//                             }}
//                             onMouseLeave={e => {
//                                 e.currentTarget.style.borderColor = "#e4f0ea";
//                                 e.currentTarget.style.boxShadow = "none";
//                                 e.currentTarget.style.transform = "translateY(0)";
//                             }}
//                         >
//                             <div style={{
//                                 width: 48, height: 48,
//                                 borderRadius: 12,
//                                 background: "#eef9f2",
//                                 display: "flex", alignItems: "center", justifyContent: "center",
//                                 fontSize: 22, marginBottom: 14,
//                             }}>{f.icon}</div>
//                             <div style={{ fontWeight: 700, fontSize: 15, color: "#0d3b1e", marginBottom: 6 }}>{f.title}</div>
//                             <div style={{ fontSize: 13, color: "#5a7a66", lineHeight: 1.6 }}>{f.desc}</div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Section Header */}
//                 <div style={{ textAlign: "center", marginBottom: 40 }}>
//                     <span style={{
//                         display: "inline-block",
//                         background: "rgba(46,158,86,0.1)",
//                         color: "#2e9e56",
//                         border: "1px solid rgba(46,158,86,0.25)",
//                         borderRadius: 50,
//                         padding: "5px 16px",
//                         fontSize: 12, fontWeight: 600,
//                         letterSpacing: "0.5px",
//                         textTransform: "uppercase",
//                         marginBottom: 12,
//                     }}>বিভাগসমূহ</span>
//                     <h2 style={{
//                         fontFamily: "'Noto Serif Bengali', serif",
//                         fontSize: 28, fontWeight: 800,
//                         color: "#0d3b1e", marginBottom: 8,
//                     }}>বিশেষজ্ঞতা অনুযায়ী খুঁজুন</h2>
//                     <p style={{ color: "#5a7a66", fontSize: 14 }}>আপনার প্রয়োজন অনুযায়ী বিভাগ বেছে নিন</p>
//                     <div style={{
//                         width: 48, height: 4,
//                         background: "linear-gradient(90deg, #2e9e56, #5ecb87)",
//                         borderRadius: 4, margin: "12px auto 0",
//                     }} />
//                 </div>

//                 {/* Specialization Grid */}
//                 <div style={{
//                     display: "grid",
//                     gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
//                     gap: 16,
//                 }}>
//                     {specializations.map((s) => (
//                         <Link
//                             key={s.name}
//                             to={`/search?specialization=${s.name}`}
//                             style={{ textDecoration: "none" }}
//                         >
//                             <div
//                                 style={{
//                                     background: "#fff",
//                                     borderRadius: 20,
//                                     padding: "28px 16px 22px",
//                                     textAlign: "center",
//                                     border: "1.5px solid #e0f0e8",
//                                     cursor: "pointer",
//                                     transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
//                                     boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
//                                     position: "relative",
//                                     overflow: "hidden",
//                                 }}
//                                 onMouseEnter={e => {
//                                     e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
//                                     e.currentTarget.style.boxShadow = "0 16px 40px rgba(26,107,56,0.15)";
//                                     e.currentTarget.style.borderColor = "#2e9e56";
//                                 }}
//                                 onMouseLeave={e => {
//                                     e.currentTarget.style.transform = "translateY(0) scale(1)";
//                                     e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
//                                     e.currentTarget.style.borderColor = "#e0f0e8";
//                                 }}
//                             >
//                                 <div style={{
//                                     width: 60, height: 60,
//                                     borderRadius: 16,
//                                     background: s.bg,
//                                     display: "flex", alignItems: "center", justifyContent: "center",
//                                     fontSize: 28,
//                                     margin: "0 auto 14px",
//                                 }}>
//                                     {s.icon}
//                                 </div>
//                                 <p style={{ fontSize: 14, fontWeight: 600, color: "#0d3b1e", margin: 0 }}>{s.name}</p>
//                                 <p style={{ fontSize: 11, color: "#5a7a66", marginTop: 4 }}>{s.count} ডাক্তার</p>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>

//                 {/* CTA Banner */}
//                 <div style={{
//                     marginTop: 56,
//                     background: "linear-gradient(135deg, #0d3b1e 0%, #1a6b38 100%)",
//                     borderRadius: 24,
//                     padding: "44px 40px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     flexWrap: "wrap",
//                     gap: 20,
//                     boxShadow: "0 20px 60px rgba(13,59,30,0.3)",
//                     position: "relative",
//                     overflow: "hidden",
//                 }}>
//                     {/* Ghost emoji bg */}
//                     <div style={{
//                         position: "absolute", right: 160, top: "50%",
//                         transform: "translateY(-50%)",
//                         fontSize: 110, opacity: 0.06, pointerEvents: "none",
//                     }}>🏥</div>

//                     <div style={{ position: "relative" }}>
//                         <h3 style={{
//                             fontFamily: "'Noto Serif Bengali', serif",
//                             color: "#fff", fontSize: 22, fontWeight: 800, marginBottom: 6,
//                         }}>জরুরি সাহায্য দরকার?</h3>
//                         <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>
//                             আমাদের হেল্পলাইনে যোগাযোগ করুন — ২৪ ঘণ্টা, ৭ দিন
//                         </p>
//                     </div>

//                     <a href="tel:16000" style={{
//                         background: "#fff",
//                         color: "#0d3b1e",
//                         padding: "14px 32px",
//                         borderRadius: 50,
//                         fontFamily: "'Hind Siliguri', sans-serif",
//                         fontWeight: 700,
//                         fontSize: 16,
//                         textDecoration: "none",
//                         flexShrink: 0,
//                         boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
//                         display: "inline-flex",
//                         alignItems: "center",
//                         gap: 8,
//                         transition: "all 0.2s ease",
//                         position: "relative",
//                     }}
//                         onMouseEnter={e => {
//                             e.currentTarget.style.transform = "translateY(-2px)";
//                             e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.3)";
//                         }}
//                         onMouseLeave={e => {
//                             e.currentTarget.style.transform = "translateY(0)";
//                             e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
//                         }}
//                     >
//                         📞 ১৬০০০ তে কল করুন
//                     </a>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default Home;
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import SearchBar from "../components/SearchBar";

const specializations = [
    { name: "মেডিসিন", icon: "💊", bg: "#e8f5e9", count: "১২০+" },
    { name: "শিশু রোগ", icon: "👶", bg: "#e3f2fd", count: "৮৫+" },
    { name: "গাইনি", icon: "🌸", bg: "#fce4ec", count: "৭৪+" },
    { name: "অর্থোপেডিক", icon: "🦴", bg: "#fff8e1", count: "৫২+" },
    { name: "চর্মরোগ", icon: "🧴", bg: "#f3e5f5", count: "৪৮+" },
    { name: "চক্ষু", icon: "👁️", bg: "#e0f7fa", count: "৩৯+" },
    { name: "দন্ত রোগ", icon: "🦷", bg: "#e8eaf6", count: "৬১+" },
    { name: "মানসিক রোগ", icon: "🧠", bg: "#e8f5e9", count: "৩৩+" },
];

const stats = [
    { value: "৫০০+", label: "বিশেষজ্ঞ ডাক্তার" },
    { value: "৬৪", label: "জেলায় সেবা" },
    { value: "১০ লাখ+", label: "রোগী সেবা পেয়েছেন" },
];

const features = [
    { icon: "⚡", title: "তাৎক্ষণিক বুকিং", desc: "মাত্র ৩০ সেকেন্ডে অ্যাপয়েন্টমেন্ট নিন, কোনো অপেক্ষা নেই" },
    { icon: "✅", title: "যাচাইকৃত ডাক্তার", desc: "সকল ডাক্তার BMDC রেজিস্ট্রেশন যাচাইকৃত" },
    { icon: "💬", title: "অনলাইন পরামর্শ", desc: "ঘরে বসেই ভিডিও কলে ডাক্তারের সাথে কথা বলুন" },
];

const footerLinks = [
    {
        title: "সেবাসমূহ",
        links: ["ডাক্তার খুঁজুন", "অনলাইন পরামর্শ", "অ্যাপয়েন্টমেন্ট", "হাসপাতাল খুঁজুন", "ওষুধের তথ্য"],
    },
    {
        title: "বিশেষজ্ঞতা",
        links: ["মেডিসিন", "শিশু রোগ", "গাইনি", "চর্মরোগ", "সব বিভাগ →"],
    },
    {
        title: "সাহায্য",
        links: ["আমাদের সম্পর্কে", "যোগাযোগ", "গোপনীয়তা নীতি", "শর্তাবলী", "FAQ"],
    },
];

// ── Animated Specialization Grid ──
function SpecializationGrid() {
    const gridRef = useRef(null);

    useEffect(() => {
        const cards = gridRef.current?.querySelectorAll(".spec-card");
        if (!cards) return;

        // set initial hidden state
        cards.forEach((card, i) => {
            const isLeft = i < 4;
            card.style.opacity = "0";
            card.style.transform = `translateX(${isLeft ? "-80px" : "80px"}) scale(0.95)`;
            card.style.transition = "transform 0.55s cubic-bezier(0.34,1.2,0.64,1), opacity 0.45s ease, border-color 0.2s, box-shadow 0.2s";
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        cards.forEach((card, i) => {
                            const isLeft = i < 4;
                            const delay = isLeft ? i * 80 : (7 - i) * 80;
                            setTimeout(() => {
                                card.style.opacity = "1";
                                card.style.transform = "translateX(0) scale(1)";
                            }, delay);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (gridRef.current) observer.observe(gridRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={gridRef}
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 16,
            }}
        >
            {specializations.map((s, i) => (
                <Link
                    key={s.name}
                    to={`/search?specialization=${s.name}`}
                    style={{ textDecoration: "none" }}
                >
                    <div
                        className="spec-card"
                        style={{
                            background: "#fff",
                            borderRadius: 20,
                            padding: "28px 16px 22px",
                            textAlign: "center",
                            border: "1.5px solid #e0f0e8",
                            cursor: "pointer",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                            position: "relative",
                            overflow: "hidden",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-6px) scale(1.03)";
                            e.currentTarget.style.boxShadow = "0 16px 40px rgba(26,107,56,0.15)";
                            e.currentTarget.style.borderColor = "#2e9e56";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0) scale(1)";
                            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                            e.currentTarget.style.borderColor = "#e0f0e8";
                        }}
                    >
                        <div
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius: 16,
                                background: s.bg,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 28,
                                margin: "0 auto 14px",
                            }}
                        >
                            {s.icon}
                        </div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: "#0d3b1e", margin: 0 }}>{s.name}</p>
                        <p style={{ fontSize: 11, color: "#5a7a66", marginTop: 4 }}>{s.count} ডাক্তার</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

// ── Footer ──
function Footer() {
    return (
        <footer
            style={{
                background: "linear-gradient(160deg, #062210, #0d3b1e)",
                color: "#fff",
                padding: "52px 24px 28px",
                fontFamily: "'Hind Siliguri', sans-serif",
            }}
        >
            <div style={{ maxWidth: 960, margin: "0 auto" }}>
                {/* Top grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr 1fr 1fr",
                        gap: 36,
                        marginBottom: 44,
                    }}
                >
                    {/* Brand column */}
                    <div>
                        <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>
                            🏥 স্বাস্থ্য খোঁজি
                        </div>
                        <p
                            style={{
                                fontSize: 13,
                                color: "rgba(255,255,255,0.5)",
                                lineHeight: 1.75,
                                marginBottom: 18,
                            }}
                        >
                            বাংলাদেশের সবচেয়ে বিশ্বস্ত অনলাইন স্বাস্থ্যসেবা প্ল্যাটফর্ম।
                            সঠিক ডাক্তার খুঁজুন, সহজে অ্যাপয়েন্টমেন্ট নিন।
                        </p>
                        {/* Live badge */}
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 7,
                                background: "rgba(255,255,255,0.08)",
                                border: "1px solid rgba(255,255,255,0.15)",
                                borderRadius: 50,
                                padding: "6px 14px",
                                fontSize: 12,
                                color: "#a8e6c0",
                                marginBottom: 16,
                            }}
                        >
                            <span
                                style={{
                                    width: 7,
                                    height: 7,
                                    borderRadius: "50%",
                                    background: "#5ecb87",
                                    boxShadow: "0 0 8px #5ecb87",
                                    display: "inline-block",
                                }}
                            />
                            ২৪/৭ সেবা চালু আছে
                        </div>
                        {/* Hotline box */}
                        <div
                            style={{
                                background: "rgba(94,203,135,0.1)",
                                border: "1px solid rgba(94,203,135,0.2)",
                                borderRadius: 12,
                                padding: "14px 16px",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 11,
                                    color: "#5ecb87",
                                    fontWeight: 600,
                                    marginBottom: 5,
                                    textTransform: "uppercase",
                                    letterSpacing: ".6px",
                                }}
                            >
                                জরুরি হেল্পলাইন
                            </div>
                            <div style={{ fontSize: 20, fontWeight: 800 }}>📞 ১৬০০০</div>
                        </div>
                    </div>

                    {/* Link columns */}
                    {footerLinks.map((col) => (
                        <div key={col.title}>
                            <div
                                style={{
                                    fontSize: 12,
                                    fontWeight: 700,
                                    color: "#5ecb87",
                                    textTransform: "uppercase",
                                    letterSpacing: ".8px",
                                    marginBottom: 16,
                                }}
                            >
                                {col.title}
                            </div>
                            {col.links.map((l) => (
                                <a
                                    key={l}
                                    href="#"
                                    style={{
                                        display: "block",
                                        fontSize: 13,
                                        color: "rgba(255,255,255,0.5)",
                                        textDecoration: "none",
                                        marginBottom: 10,
                                        transition: "color 0.15s",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                                >
                                    {l}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <hr
                    style={{
                        border: "none",
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                        marginBottom: 22,
                    }}
                />

                {/* Bottom bar */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 12,
                    }}
                >
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
                        © ২০২৫ স্বাস্থ্য খোঁজি। সর্বস্বত্ব সংরক্ষিত।
                    </div>
                    <div style={{ display: "flex", gap: 10 }}>
                        {["f", "in", "yt", "tw"].map((s) => (
                            <div
                                key={s}
                                style={{
                                    width: 34,
                                    height: 34,
                                    borderRadius: "50%",
                                    background: "rgba(255,255,255,0.07)",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 12,
                                    cursor: "pointer",
                                    transition: "background 0.15s",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.background = "rgba(94,203,135,0.2)")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.background = "rgba(255,255,255,0.07)")
                                }
                            >
                                {s}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

// ── Home ──
function Home() {
    return (
        <div style={{ fontFamily: "'Hind Siliguri', sans-serif", background: "#f7fbf9", minHeight: "100vh" }}>

            <link
                href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Serif+Bengali:wght@700;800;900&display=swap"
                rel="stylesheet"
            />

            {/* ── HERO ── */}
            <section
                style={{
                    position: "relative",
                    background: "linear-gradient(160deg, #062210 0%, #0d3b1e 40%, #1a6b38 80%, #2e9e56 100%)",
                    padding: "80px 24px 100px",
                    textAlign: "center",
                    overflow: "hidden",
                }}
            >
                {/* Grid overlay */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                        pointerEvents: "none",
                    }}
                />
                {/* Glow circles */}
                <div
                    style={{
                        position: "absolute",
                        width: 500,
                        height: 500,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(94,203,135,0.12) 0%, transparent 70%)",
                        top: -150,
                        right: -150,
                        pointerEvents: "none",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        width: 350,
                        height: 350,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(240,192,64,0.07) 0%, transparent 70%)",
                        bottom: -80,
                        left: -80,
                        pointerEvents: "none",
                    }}
                />

                <div style={{ position: "relative", zIndex: 2, maxWidth: 720, margin: "0 auto" }}>
                    {/* Badge */}
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            background: "rgba(255,255,255,0.1)",
                            border: "1px solid rgba(255,255,255,0.18)",
                            borderRadius: 50,
                            padding: "7px 18px",
                            fontSize: 13,
                            color: "#a8e6c0",
                            marginBottom: 28,
                            backdropFilter: "blur(8px)",
                        }}
                    >
                        <span
                            style={{
                                width: 7,
                                height: 7,
                                borderRadius: "50%",
                                background: "#5ecb87",
                                boxShadow: "0 0 8px #5ecb87",
                                display: "inline-block",
                            }}
                        />
                        বাংলাদেশের নির্ভরযোগ্য স্বাস্থ্যসেবা প্ল্যাটফর্ম
                    </div>

                    {/* Title */}
                    <h1
                        style={{
                            fontFamily: "'Noto Serif Bengali', serif",
                            fontSize: "clamp(2.6rem, 6vw, 4.6rem)",
                            fontWeight: 900,
                            color: "#fff",
                            lineHeight: 1.15,
                            letterSpacing: "-1px",
                            marginBottom: 16,
                            textShadow: "0 2px 12px rgba(0,0,0,0.2)",
                        }}
                    >
                        সঠিক ডাক্তার,{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #5ecb87, #f0c040)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            সঠিক সময়ে
                        </span>
                    </h1>

                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, marginBottom: 40, lineHeight: 1.7 }}>
                        বাংলাদেশের যেকোনো প্রান্তে বিশেষজ্ঞ ডাক্তার খুঁজুন —<br />
                        সহজে, দ্রুত এবং বিশ্বস্তভাবে
                    </p>

                    <div style={{ display: "flex", justifyContent: "center", marginBottom: 52 }}>
                        <SearchBar />
                    </div>

                    {/* Stats */}
                    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                        {stats.map((s, i) => (
                            <div
                                key={s.label}
                                style={{
                                    padding: "0 32px",
                                    textAlign: "center",
                                    borderRight:
                                        i < stats.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
                                }}
                            >
                                <div
                                    style={{
                                        fontFamily: "'Noto Serif Bengali', serif",
                                        fontSize: 26,
                                        fontWeight: 900,
                                        color: "#fff",
                                        marginBottom: 4,
                                    }}
                                >
                                    {s.value}
                                </div>
                                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Wave */}
            <div style={{ marginTop: -2, lineHeight: 0, background: "#0d3b1e" }}>
                <svg
                    viewBox="0 0 1200 70"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    style={{ display: "block", width: "100%", height: 70 }}
                >
                    <path
                        d="M0,35 C200,70 400,0 600,35 C800,70 1000,10 1200,35 L1200,70 L0,70 Z"
                        fill="#f7fbf9"
                    />
                </svg>
            </div>

            {/* ── CONTENT ── */}
            <div style={{ maxWidth: 960, margin: "0 auto", padding: "56px 24px 80px" }}>

                {/* Features */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                        gap: 18,
                        marginBottom: 64,
                    }}
                >
                    {features.map((f) => (
                        <div
                            key={f.title}
                            style={{
                                background: "#fff",
                                borderRadius: 20,
                                padding: "28px 22px",
                                border: "1.5px solid #e4f0ea",
                                transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "#5ecb87";
                                e.currentTarget.style.boxShadow = "0 8px 30px rgba(46,158,86,0.1)";
                                e.currentTarget.style.transform = "translateY(-3px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "#e4f0ea";
                                e.currentTarget.style.boxShadow = "none";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            <div
                                style={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: 12,
                                    background: "#eef9f2",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 22,
                                    marginBottom: 14,
                                }}
                            >
                                {f.icon}
                            </div>
                            <div style={{ fontWeight: 700, fontSize: 15, color: "#0d3b1e", marginBottom: 6 }}>
                                {f.title}
                            </div>
                            <div style={{ fontSize: 13, color: "#5a7a66", lineHeight: 1.6 }}>{f.desc}</div>
                        </div>
                    ))}
                </div>

                {/* Section Header */}
                <div style={{ textAlign: "center", marginBottom: 40 }}>
                    <span
                        style={{
                            display: "inline-block",
                            background: "rgba(46,158,86,0.1)",
                            color: "#2e9e56",
                            border: "1px solid rgba(46,158,86,0.25)",
                            borderRadius: 50,
                            padding: "5px 16px",
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: "0.5px",
                            textTransform: "uppercase",
                            marginBottom: 12,
                        }}
                    >
                        বিভাগসমূহ
                    </span>
                    <h2
                        style={{
                            fontFamily: "'Noto Serif Bengali', serif",
                            fontSize: 28,
                            fontWeight: 800,
                            color: "#0d3b1e",
                            marginBottom: 8,
                        }}
                    >
                        বিশেষজ্ঞতা অনুযায়ী খুঁজুন
                    </h2>
                    <p style={{ color: "#5a7a66", fontSize: 14 }}>আপনার প্রয়োজন অনুযায়ী বিভাগ বেছে নিন</p>
                    <div
                        style={{
                            width: 48,
                            height: 4,
                            background: "linear-gradient(90deg, #2e9e56, #5ecb87)",
                            borderRadius: 4,
                            margin: "12px auto 0",
                        }}
                    />
                </div>

                {/* ── Animated Specialization Grid ── */}
                <SpecializationGrid />

                {/* CTA Banner */}
                <div
                    style={{
                        marginTop: 56,
                        background: "linear-gradient(135deg, #0d3b1e 0%, #1a6b38 100%)",
                        borderRadius: 24,
                        padding: "44px 40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: 20,
                        boxShadow: "0 20px 60px rgba(13,59,30,0.3)",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            right: 160,
                            top: "50%",
                            transform: "translateY(-50%)",
                            fontSize: 110,
                            opacity: 0.06,
                            pointerEvents: "none",
                        }}
                    >
                        🏥
                    </div>
                    <div style={{ position: "relative" }}>
                        <h3
                            style={{
                                fontFamily: "'Noto Serif Bengali', serif",
                                color: "#fff",
                                fontSize: 22,
                                fontWeight: 800,
                                marginBottom: 6,
                            }}
                        >
                            জরুরি সাহায্য দরকার?
                        </h3>
                        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>
                            আমাদের হেল্পলাইনে যোগাযোগ করুন — ২৪ ঘণ্টা, ৭ দিন
                        </p>
                    </div>
                    <a
                        href="tel:16000"
                        style={{
                            background: "#fff",
                            color: "#0d3b1e",
                            padding: "14px 32px",
                            borderRadius: 50,
                            fontFamily: "'Hind Siliguri', sans-serif",
                            fontWeight: 700,
                            fontSize: 16,
                            textDecoration: "none",
                            flexShrink: 0,
                            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            transition: "all 0.2s ease",
                            position: "relative",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.3)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
                        }}
                    >
                        📞 ১৬০০০ তে কল করুন
                    </a>
                </div>
            </div>

            {/* ── FOOTER ── */}
            <Footer />
        </div>
    );
}

export default Home;