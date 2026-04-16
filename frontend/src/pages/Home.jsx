// import { Link } from "react-router-dom";
// import SearchBar from "../components/SearchBar";

// const specializations = ["মেডিসিন", "শিশু রোগ", "গাইনি", "অর্থোপেডিক", "চর্মরোগ", "চক্ষু", "দন্ত রোগ", "মানসিক রোগ"];

// function Home() {
//     return (
//         <div className="min-h-screen bg-gray-50">
//             <div className="bg-green-700 text-white py-16 px-4 text-center">
//                 <h1 className="text-3xl font-bold mb-2">স্বাস্থ্য খোঁজি 🏥</h1>
//                 <p className="text-green-100 mb-8">বাংলাদেশের যেকোনো প্রান্তে ডাক্তার খুঁজুন</p>
//                 <div className="flex justify-center">
//                     <SearchBar />
//                 </div>
//             </div>

//             <div className="max-w-4xl mx-auto px-4 py-10">
//                 <h2 className="text-xl font-bold mb-4 text-gray-800">বিশেষজ্ঞতা অনুযায়ী খুঁজুন</h2>
//                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//                     {specializations.map((s) => (
//                         <Link
//                             key={s}
//                             to={`/search?specialization=${s}`}
//                             className="bg-white p-4 border rounded-xl text-center hover:shadow-md transition-all cursor-pointer"
//                         >
//                             <p className="text-2xl mb-1">🩺</p>
//                             <p className="text-sm font-medium text-gray-700">{s}</p>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// // একদম নিচে এক্সপোর্টটি দিয়ে দিলাম
// export default Home;
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const specializations = [
    { name: "মেডিসিন", icon: "💊", color: "#e8f5e9", border: "#a5d6a7" },
    { name: "শিশু রোগ", icon: "👶", color: "#e3f2fd", border: "#90caf9" },
    { name: "গাইনি", icon: "🌸", color: "#fce4ec", border: "#f48fb1" },
    { name: "অর্থোপেডিক", icon: "🦴", color: "#fff8e1", border: "#ffe082" },
    { name: "চর্মরোগ", icon: "🧴", color: "#f3e5f5", border: "#ce93d8" },
    { name: "চক্ষু", icon: "👁️", color: "#e0f7fa", border: "#80deea" },
    { name: "দন্ত রোগ", icon: "🦷", color: "#e8eaf6", border: "#9fa8da" },
    { name: "মানসিক রোগ", icon: "🧠", color: "#e8f5e9", border: "#a5d6a7" },
];

const stats = [
    { value: "৫০০+", label: "বিশেষজ্ঞ ডাক্তার" },
    { value: "৬৪", label: "জেলায় সেবা" },
    { value: "১০ লাখ+", label: "রোগী সেবা পেয়েছেন" },
];

function Home() {
    return (
        <div className="min-h-screen" style={{ background: "#f0faf4", fontFamily: "'Hind Siliguri', sans-serif" }}>

            {/* Hero Section */}
            <div
                style={{
                    background: "linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #388e3c 100%)",
                    padding: "80px 20px 100px",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Decorative circles */}
                <div style={{
                    position: "absolute", top: -60, right: -60,
                    width: 300, height: 300, borderRadius: "50%",
                    background: "rgba(255,255,255,0.04)"
                }} />
                <div style={{
                    position: "absolute", bottom: -80, left: -40,
                    width: 250, height: 250, borderRadius: "50%",
                    background: "rgba(255,255,255,0.04)"
                }} />

                <div style={{ position: "relative", zIndex: 1 }}>
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        background: "rgba(255,255,255,0.15)", borderRadius: 50,
                        padding: "6px 16px", marginBottom: 20,
                        fontSize: 13, color: "#c8e6c9",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.2)"
                    }}>
                        🏥 বাংলাদেশের নির্ভরযোগ্য স্বাস্থ্যসেবা প্ল্যাটফর্ম
                    </div>

                    <h1 style={{
                        fontSize: "clamp(2rem, 5vw, 3.2rem)",
                        fontWeight: 800, color: "#ffffff",
                        marginBottom: 12, letterSpacing: "-0.5px",
                        textShadow: "0 2px 12px rgba(0,0,0,0.2)"
                    }}>
                        স্বাস্থ্য খোঁজি
                    </h1>

                    <p style={{ color: "#a5d6a7", fontSize: 17, marginBottom: 36 }}>
                        বাংলাদেশের যেকোনো প্রান্তে সঠিক ডাক্তার খুঁজুন — সহজে, দ্রুত
                    </p>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <SearchBar />
                    </div>

                    {/* Stats bar */}
                    <div style={{
                        display: "flex", justifyContent: "center", gap: "40px",
                        marginTop: 52, flexWrap: "wrap"
                    }}>
                        {stats.map((s) => (
                            <div key={s.label} style={{ textAlign: "center" }}>
                                <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>{s.value}</div>
                                <div style={{ fontSize: 12, color: "#81c784", marginTop: 2 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Wave divider */}
            <div style={{ marginTop: -2, lineHeight: 0 }}>
                <svg viewBox="0 0 1200 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 60 }}>
                    <path d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z" fill="#f0faf4" />
                </svg>
            </div>

            {/* Specializations */}
            <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 20px 60px" }}>

                <div style={{ textAlign: "center", marginBottom: 36 }}>
                    <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1b5e20", marginBottom: 8 }}>
                        বিশেষজ্ঞতা অনুযায়ী খুঁজুন
                    </h2>
                    <p style={{ color: "#555", fontSize: 14 }}>আপনার প্রয়োজন অনুযায়ী বিভাগ বেছে নিন</p>
                    <div style={{ width: 48, height: 3, background: "#2e7d32", borderRadius: 4, margin: "12px auto 0" }} />
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                    gap: 16
                }}>
                    {specializations.map((s) => (
                        <Link
                            key={s.name}
                            to={`/search?specialization=${s.name}`}
                            style={{ textDecoration: "none" }}
                        >
                            <div style={{
                                background: "#fff",
                                borderRadius: 16,
                                padding: "24px 16px",
                                textAlign: "center",
                                border: `1.5px solid ${s.border}`,
                                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                cursor: "pointer",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = "translateY(-4px)";
                                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(46,125,50,0.15)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
                                }}
                            >
                                <div style={{
                                    width: 56, height: 56, borderRadius: 14,
                                    background: s.color,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: 26, margin: "0 auto 12px"
                                }}>
                                    {s.icon}
                                </div>
                                <p style={{ fontSize: 14, fontWeight: 600, color: "#1b5e20", margin: 0 }}>{s.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA banner */}
                <div style={{
                    marginTop: 48,
                    background: "linear-gradient(135deg, #2e7d32, #1b5e20)",
                    borderRadius: 20, padding: "32px 28px",
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between", flexWrap: "wrap", gap: 16,
                    boxShadow: "0 8px 32px rgba(46,125,50,0.25)"
                }}>
                    <div>
                        <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 700, margin: "0 0 6px" }}>
                            জরুরি সাহায্য দরকার?
                        </h3>
                        <p style={{ color: "#a5d6a7", fontSize: 14, margin: 0 }}>
                            আমাদের হেল্পলাইনে যোগাযোগ করুন — ২৪/৭
                        </p>
                    </div>
                    <a href="tel:16000" style={{
                        background: "#fff", color: "#1b5e20",
                        padding: "12px 28px", borderRadius: 50,
                        fontWeight: 700, fontSize: 15,
                        textDecoration: "none",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.15)"
                    }}>
                        📞 ১৬০০০
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;