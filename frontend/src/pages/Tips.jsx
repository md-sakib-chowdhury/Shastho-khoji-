import { useState, useEffect } from "react";
import axios from "../api/axiosInstance";

export default function Tips() {
    const [tips, setTips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("সব");

    useEffect(() => {
        axios.get("/tips").then(res => {
            setTips(res.data);
            setLoading(false);
        }).catch(() => setLoading(false));
    }, []);

    const categories = ["সব", ...new Set(tips.map(t => t.category))];

    const filtered = tips.filter(t => {
        const matchCat = activeCategory === "সব" || t.category === activeCategory;
        const matchSearch = t.title.includes(search) || t.excerpt.includes(search);
        return matchCat && matchSearch;
    });

    return (
        <div style={{ fontFamily: "'Hind Siliguri', sans-serif", minHeight: "100vh", background: "#f8faf8" }}>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');`}</style>

            <div style={{ background: "linear-gradient(135deg, #0d3b1e, #1a6b3a)", padding: "48px 24px", textAlign: "center" }}>
                <h1 style={{ color: "#fff", fontSize: "28px", fontWeight: 700, margin: "0 0 8px" }}>💡 স্বাস্থ্য টিপস</h1>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", margin: "0 0 24px" }}>সুস্থ থাকুন, সুন্দর থাকুন</p>
                <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="টিপস খুঁজুন..."
                    style={{ width: "100%", maxWidth: "400px", padding: "12px 20px", borderRadius: "50px", border: "none", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                />
            </div>

            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px" }}>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "28px" }}>
                    {categories.map(cat => (
                        <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                            padding: "8px 18px", borderRadius: "50px", border: "none", cursor: "pointer",
                            fontSize: "13px", fontWeight: 600, fontFamily: "'Hind Siliguri', sans-serif",
                            background: activeCategory === cat ? "#2e9e56" : "#fff",
                            color: activeCategory === cat ? "#fff" : "#555",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.08)", transition: "all 0.2s"
                        }}>{cat}</button>
                    ))}
                </div>

                {loading ? (
                    <p style={{ textAlign: "center", color: "#999", padding: "60px" }}>লোড হচ্ছে...</p>
                ) : filtered.length === 0 ? (
                    <div style={{ textAlign: "center", padding: "60px", color: "#999" }}>
                        <p style={{ fontSize: "40px" }}>🔍</p>
                        <p>কোনো টিপস পাওয়া যায়নি</p>
                    </div>
                ) : (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
                        {filtered.map(tip => (
                            <div key={tip._id} style={{
                                background: "#fff", borderRadius: "16px", border: "1px solid #e8f5e9",
                                padding: "24px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                                transition: "transform 0.2s, box-shadow 0.2s", cursor: "pointer"
                            }}
                                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; }}
                            >
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                                    <span style={{ fontSize: "32px" }}>{tip.icon}</span>
                                    <span style={{ background: "#e8f5e9", color: "#2e7d32", fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "50px" }}>
                                        {tip.category}
                                    </span>
                                </div>
                                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1a3a1a", margin: "0 0 8px", lineHeight: 1.4 }}>{tip.title}</h3>
                                <p style={{ fontSize: "13px", color: "#666", margin: "0 0 16px", lineHeight: 1.6 }}>{tip.excerpt}</p>
                                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#999", borderTop: "1px solid #f0f0f0", paddingTop: "12px" }}>
                                    <span>📅 {new Date(tip.createdAt).toLocaleDateString("bn-BD")}</span>
                                    <span>⏱ {tip.readTime}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}