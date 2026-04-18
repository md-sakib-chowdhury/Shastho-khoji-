import { Link } from "react-router-dom";

const hospitals = [
    { id: 1, name: "ঢাকা মেডিকেল কলেজ হাসপাতাল", type: "সরকারি", location: "ঢাকা", beds: 2300, phone: "02-55165088", emergency: true, image: "🏥" },
    { id: 2, name: "স্কয়ার হাসপাতাল", type: "বেসরকারি", location: "ঢাকা", beds: 450, phone: "10616", emergency: true, image: "🏨" },
    { id: 3, name: "এভারকেয়ার হাসপাতাল", type: "বেসরকারি", location: "ঢাকা", beds: 600, phone: "10678", emergency: true, image: "🏨" },
    { id: 4, name: "চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল", type: "সরকারি", location: "চট্টগ্রাম", beds: 1300, phone: "031-630955", emergency: true, image: "🏥" },
    { id: 5, name: "ল্যাবএইড হাসপাতাল", type: "বেসরকারি", location: "ঢাকা", beds: 250, phone: "10606", emergency: false, image: "🏨" },
    { id: 6, name: "রাজশাহী মেডিকেল কলেজ হাসপাতাল", type: "সরকারি", location: "রাজশাহী", beds: 1000, phone: "0721-772150", emergency: true, image: "🏥" },
    { id: 7, name: "ইউনাইটেড হাসপাতাল", type: "বেসরকারি", location: "ঢাকা", beds: 350, phone: "10666", emergency: true, image: "🏨" },
    { id: 8, name: "সিলেট এমএজি ওসমানী হাসপাতাল", type: "সরকারি", location: "সিলেট", beds: 750, phone: "0821-716742", emergency: true, image: "🏥" },
];

export default function Hospitals() {
    return (
        <div style={{ fontFamily: "'Hind Siliguri', sans-serif", minHeight: "100vh", background: "#f8faf8" }}>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');`}</style>

            {/* Hero */}
            <div style={{ background: "linear-gradient(135deg, #0d3b1e, #1a6b3a)", padding: "48px 24px", textAlign: "center" }}>
                <h1 style={{ color: "#fff", fontSize: "28px", fontWeight: 700, margin: "0 0 8px" }}>🏥 হাসপাতাল তালিকা</h1>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", margin: 0 }}>বাংলাদেশের বিভিন্ন হাসপাতালের তথ্য</p>
            </div>

            {/* Cards */}
            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
                    {hospitals.map(h => (
                        <div key={h.id} style={{
                            background: "#fff",
                            borderRadius: "16px",
                            border: "1px solid #e8f5e9",
                            padding: "24px",
                            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                            transition: "transform 0.2s, box-shadow 0.2s",
                        }}
                            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                                <span style={{ fontSize: "36px" }}>{h.image}</span>
                                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                                    <span style={{
                                        background: h.type === "সরকারি" ? "#e8f5e9" : "#fff3e0",
                                        color: h.type === "সরকারি" ? "#2e7d32" : "#e65100",
                                        fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "50px"
                                    }}>{h.type}</span>
                                    {h.emergency && (
                                        <span style={{ background: "#ffebee", color: "#c62828", fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "50px" }}>
                                            🚨 জরুরি
                                        </span>
                                    )}
                                </div>
                            </div>
                            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1a3a1a", margin: "0 0 6px" }}>{h.name}</h3>
                            <p style={{ fontSize: "13px", color: "#666", margin: "0 0 12px" }}>📍 {h.location}</p>
                            <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "12px", display: "flex", justifyContent: "space-between" }}>
                                <span style={{ fontSize: "13px", color: "#555" }}>🛏 {h.beds} বেড</span>
                                <a href={`tel:${h.phone}`} style={{ fontSize: "13px", color: "#2e9e56", fontWeight: 600, textDecoration: "none" }}>
                                    📞 {h.phone}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}