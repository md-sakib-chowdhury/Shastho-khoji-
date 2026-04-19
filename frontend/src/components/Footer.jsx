// src/components/Footer.jsx
function Footer() {
    return (
        <footer style={{
            background: "linear-gradient(160deg, #062210, #0d3b1e)",
            color: "#fff",
            padding: "48px 24px 24px",
            fontFamily: "'Hind Siliguri', sans-serif",
        }}>
            <div style={{ maxWidth: 960, margin: "0 auto" }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr 1fr 1fr",
                    gap: 32, marginBottom: 40,
                }}>
                    {/* Brand */}
                    <div>
                        <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>🏥 স্বাস্থ্য খোঁজি</div>
                        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 18 }}>
                            বাংলাদেশের সবচেয়ে বিশ্বস্ত অনলাইন স্বাস্থ্যসেবা প্ল্যাটফর্ম। সঠিক ডাক্তার খুঁজুন, সহজে অ্যাপয়েন্টমেন্ট নিন।
                        </p>
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: 7,
                            background: "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(255,255,255,0.15)",
                            borderRadius: 50, padding: "6px 14px",
                            fontSize: 12, color: "#a8e6c0", marginBottom: 14,
                        }}>
                            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#5ecb87", boxShadow: "0 0 8px #5ecb87", display: "inline-block" }} />
                            ২৪/৭ সেবা চালু আছে
                        </div>
                        <div style={{
                            background: "rgba(94,203,135,0.12)",
                            border: "1px solid rgba(94,203,135,0.2)",
                            borderRadius: 12, padding: "14px 16px",
                        }}>
                            <div style={{ fontSize: 11, color: "#5ecb87", fontWeight: 600, marginBottom: 4 }}>জরুরি হেল্পলাইন</div>
                            <div style={{ fontSize: 20, fontWeight: 800 }}>📞 ১৬০০০</div>
                        </div>
                    </div>

                    {/* Links */}
                    {[
                        { title: "সেবাসমূহ", links: ["ডাক্তার খুঁজুন", "অনলাইন পরামর্শ", "অ্যাপয়েন্টমেন্ট", "হাসপাতাল খুঁজুন", "ওষুধের তথ্য"] },
                        { title: "বিশেষজ্ঞতা", links: ["মেডিসিন", "শিশু রোগ", "গাইনি", "চর্মরোগ", "সব বিভাগ →"] },
                        { title: "সাহায্য", links: ["আমাদের সম্পর্কে", "যোগাযোগ", "গোপনীয়তা নীতি", "শর্তাবলী", "FAQ"] },
                    ].map((col) => (
                        <div key={col.title}>
                            <div style={{ fontSize: 13, fontWeight: 700, color: "#5ecb87", textTransform: "uppercase", letterSpacing: ".8px", marginBottom: 14 }}>
                                {col.title}
                            </div>
                            {col.links.map((l) => (
                                <a key={l} href="#" style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none", marginBottom: 9 }}>{l}</a>
                            ))}
                        </div>
                    ))}
                </div>

                <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: 20 }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>© ২০২৫ স্বাস্থ্য খোঁজি। সর্বস্বত্ব সংরক্ষিত।</div>
                    <div style={{ display: "flex", gap: 10 }}>
                        {["f", "in", "yt", "tw"].map((s) => (
                            <div key={s} style={{
                                width: 34, height: 34, borderRadius: "50%",
                                background: "rgba(255,255,255,0.07)",
                                border: "1px solid rgba(255,255,255,0.12)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: 13, cursor: "pointer",
                            }}>{s}</div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;