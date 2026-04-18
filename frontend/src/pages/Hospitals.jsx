import { useState, useEffect } from "react";
import axios from "../api/axiosInstance";

export default function Hospitals() {
    const [hospitals, setHospitals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [filterType, setFilterType] = useState("সব");

    useEffect(() => {
        axios.get("/hospitals").then(res => {
            setHospitals(res.data);
            setLoading(false);
        }).catch(() => setLoading(false));
    }, []);

    const filtered = hospitals.filter(h => {
        const matchSearch = h.name.includes(search) || h.location.includes(search);
        const matchType = filterType === "সব" || h.type === filterType;
        return matchSearch && matchType;
    });

    return (
        <div style={{ fontFamily: "'Hind Siliguri', sans-serif", minHeight: "100vh", background: "#f8faf8" }}>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');`}</style>

            <div style={{ background: "linear-gradient(135deg, #0d3b1e, #1a6b3a)", padding: "48px 24px", textAlign: "center" }}>
                <h1 style={{ color: "#fff", fontSize: "28px", fontWeight: 700, margin: "0 0 8px" }}>🏥 হাসপাতাল তালিকা</h1>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", margin: "0 0 24px" }}>বাংলাদেশের বিভিন্ন হাসপাতালের তথ্য</p>
                <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="হাসপাতাল বা জেলা খুঁজুন..."
                    style={{ width: "100%", maxWidth: "400px", padding: "12px 20px", borderRadius: "50px", border: "none", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                />
            </div>

            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px" }}>
                {/* Filter */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "28px" }}>
                    {["সব", "সরকারি", "বেসরকারি"].map(type => (
                        <button key={type} onClick={() => setFilterType(type)} style={{
                            padding: "8px 20px", borderRadius: "50px", border: "none", cursor: "pointer",
                            fontSize: "13px", fontWeight: 600, fontFamily: "'Hind Siliguri', sans-serif",
                            background: filterType === type ? "#2e9e56" : "#fff",
                            color: filterType === type ? "#fff" : "#555",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.08)", transition: "all 0.2s"
                        }}>{type}</button>
                    ))}
                </div>

                {loading ? (
                    <p style={{ textAlign: "center", color: "#999", padding: "60px" }}>লোড হচ্ছে...</p>
                ) : filtered.length === 0 ? (
                    <div style={{ textAlign: "center", padding: "60px", color: "#999" }}>
                        <p style={{ fontSize: "40px" }}>🔍</p>
                        <p>কোনো হাসপাতাল পাওয়া যায়নি</p>
                    </div>
                ) : (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
                        {filtered.map(h => (
                            <div key={h._id} style={{
                                background: "#fff", borderRadius: "16px", border: "1px solid #e8f5e9",
                                padding: "24px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                                transition: "transform 0.2s, box-shadow 0.2s",
                            }}
                                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}
                            >
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                                    <span style={{ fontSize: "36px" }}>{h.icon}</span>
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
                )}
            </div>
        </div>
    );
}