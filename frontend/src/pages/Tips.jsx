import { useState } from "react";

const categories = ["সব", "হৃদরোগ", "ডায়াবেটিস", "পুষ্টি", "মানসিক স্বাস্থ্য", "শিশু স্বাস্থ্য"];

const tips = [
    { id: 1, category: "হৃদরোগ", title: "হৃদরোগ থেকে বাঁচতে ৫টি অভ্যাস", excerpt: "প্রতিদিন ৩০ মিনিট হাঁটা, লবণ কম খাওয়া এবং ধূমপান ছাড়া হৃদরোগের ঝুঁকি কমায়।", icon: "❤️", date: "১৫ জানুয়ারি ২০২৫", readTime: "৩ মিনিট" },
    { id: 2, category: "ডায়াবেটিস", title: "ডায়াবেটিস নিয়ন্ত্রণে রাখার উপায়", excerpt: "নিয়মিত রক্তের সুগার পরীক্ষা, সুষম খাবার এবং ব্যায়াম ডায়াবেটিস নিয়ন্ত্রণে রাখে।", icon: "🩸", date: "১০ জানুয়ারি ২০২৫", readTime: "৪ মিনিট" },
    { id: 3, category: "পুষ্টি", title: "সুষম খাবারের তালিকা", excerpt: "প্রতিদিনের খাবারে শাকসবজি, ফল, প্রোটিন ও কার্বোহাইড্রেটের সঠিক অনুপাত বজায় রাখুন।", icon: "🥗", date: "৮ জানুয়ারি ২০২৫", readTime: "৫ মিনিট" },
    { id: 4, category: "মানসিক স্বাস্থ্য", title: "মানসিক চাপ কমানোর কৌশল", excerpt: "মেডিটেশন, পর্যাপ্ত ঘুম এবং প্রিয়জনের সাথে সময় কাটানো মানসিক স্বাস্থ্য ভালো রাখে।", icon: "🧠", date: "৫ জানুয়ারি ২০২৫", readTime: "৩ মিনিট" },
    { id: 5, category: "শিশু স্বাস্থ্য", title: "শিশুর রোগ প্রতিরোধ ক্ষমতা বাড়ানোর উপায়", excerpt: "সময়মতো টিকা, বুকের দুধ এবং পুষ্টিকর খাবার শিশুর রোগ প্রতিরোধ ক্ষমতা বাড়ায়।", icon: "👶", date: "২ জানুয়ারি ২০২৫", readTime: "৪ মিনিট" },
    { id: 6, category: "পুষ্টি", title: "পানি পানের সঠিক নিয়ম", excerpt: "প্রতিদিন ৮ গ্লাস পানি পান করুন। সকালে খালি পেটে পানি শরীর পরিষ্কার রাখে।", icon: "💧", date: "২৮ ডিসেম্বর ২০২৪", readTime: "২ মিনিট" },
    { id: 7, category: "হৃদরোগ", title: "উচ্চ রক্তচাপ নিয়ন্ত্রণ", excerpt: "নিয়মিত ব্যায়াম, কম লবণ এবং মানসিক চাপ কমিয়ে উচ্চ রক্তচাপ নিয়ন্ত্রণ করুন।", icon: "🫀", date: "২৫ ডিসেম্বর ২০২৪", readTime: "৩ মিনিট" },
    { id: 8, category: "মানসিক স্বাস্থ্য", title: "ভালো ঘুমের জন্য ১০টি টিপস", excerpt: "প্রতিদিন একই সময়ে ঘুমানো, রাতে মোবাইল এড়ানো এবং আরামদায়ক পরিবেশ তৈরি করুন।", icon: "😴", date: "২০ ডিসেম্বর ২০২৪", readTime: "৩ মিনিট" },
];

export default function Tips() {
    const [activeCategory, setActiveCategory] = useState("সব");
    const [search, setSearch] = useState("");

    const filtered = tips.filter(t => {
        const matchCat = activeCategory === "সব" || t.category === activeCategory;
        const matchSearch = t.title.includes(search) || t.excerpt.includes(search);
        return matchCat && matchSearch;
    });

    return (
        <div style={{ fontFamily: "'Hind Siliguri', sans-serif", minHeight: "100vh", background: "#f8faf8" }}>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');`}</style>

            {/* Hero */}
            <div style={{ background: "linear-gradient(135deg, #0d3b1e, #1a6b3a)", padding: "48px 24px", textAlign: "center" }}>
                <h1 style={{ color: "#fff", fontSize: "28px", fontWeight: 700, margin: "0 0 8px" }}>💡 স্বাস্থ্য টিপস</h1>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", margin: "0 0 24px" }}>সুস্থ থাকুন, সুন্দর থাকুন</p>
                <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="টিপস খুঁজুন..."
                    style={{
                        width: "100%", maxWidth: "400px", padding: "12px 20px",
                        borderRadius: "50px", border: "none", fontSize: "14px",
                        outline: "none", boxSizing: "border-box"
                    }}
                />
            </div>

            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px" }}>
                {/* Categories */}
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "28px" }}>
                    {categories.map(cat => (
                        <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                            padding: "8px 18px", borderRadius: "50px", border: "none", cursor: "pointer",
                            fontSize: "13px", fontWeight: 600, fontFamily: "'Hind Siliguri', sans-serif",
                            background: activeCategory === cat ? "#2e9e56" : "#fff",
                            color: activeCategory === cat ? "#fff" : "#555",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                            transition: "all 0.2s"
                        }}>
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Cards */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
                    {filtered.map(tip => (
                        <div key={tip.id} style={{
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
                                <span>📅 {tip.date}</span>
                                <span>⏱ {tip.readTime}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div style={{ textAlign: "center", padding: "60px", color: "#999" }}>
                        <p style={{ fontSize: "40px" }}>🔍</p>
                        <p>কোনো টিপস পাওয়া যায়নি</p>
                    </div>
                )}
            </div>
        </div>
    );
}