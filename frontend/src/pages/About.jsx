const team = [
    { name: "ডা. রাহেলা বেগম", role: "প্রতিষ্ঠাতা ও CEO", icon: "👩‍⚕️", bio: "১৫ বছরের অভিজ্ঞতাসম্পন্ন চিকিৎসক" },
    { name: "তানভীর আহমেদ", role: "CTO", icon: "👨‍💻", bio: "প্রযুক্তি বিশেষজ্ঞ, ১০ বছরের অভিজ্ঞতা" },
    { name: "নাফিসা ইসলাম", role: "Head of Operations", icon: "👩‍💼", bio: "স্বাস্থ্যসেবা ব্যবস্থাপনায় বিশেষজ্ঞ" },
];

export default function About() {
    return (
        <div style={{ fontFamily: "'Hind Siliguri', sans-serif", minHeight: "100vh", background: "#f8faf8" }}>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Serif+Bengali:wght@700;800&display=swap');`}</style>

            {/* Hero */}
            <div style={{ background: "linear-gradient(135deg, #0d3b1e, #1a6b3a)", padding: "64px 24px", textAlign: "center" }}>
                <div style={{ fontSize: "56px", marginBottom: "16px" }}>🏥</div>
                <h1 style={{ fontFamily: "'Noto Serif Bengali', serif", color: "#fff", fontSize: "32px", fontWeight: 800, margin: "0 0 12px" }}>
                    স্বাস্থ্য<span style={{ color: "#5ecb87" }}>খোঁজি</span>
                </h1>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "16px", maxWidth: "500px", margin: "0 auto" }}>
                    বাংলাদেশের মানুষের জন্য সহজে ডাক্তার ও স্বাস্থ্যসেবা খোঁজার প্ল্যাটফর্ম
                </p>
            </div>

            <div style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 24px" }}>

                {/* Mission */}
                <div style={{ background: "#fff", borderRadius: "20px", padding: "36px", marginBottom: "28px", border: "1px solid #e8f5e9", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#0d3b1e", margin: "0 0 16px" }}>🎯 আমাদের লক্ষ্য</h2>
                    <p style={{ fontSize: "15px", color: "#444", lineHeight: 1.8, margin: "0 0 16px" }}>
                        স্বাস্থ্যখোঁজি তৈরি হয়েছে একটি সহজ লক্ষ্য নিয়ে — বাংলাদেশের প্রতিটি মানুষ যেন সহজেই সঠিক ডাক্তার খুঁজে পায় এবং দ্রুত অ্যাপয়েন্টমেন্ট নিতে পারে।
                    </p>
                    <p style={{ fontSize: "15px", color: "#444", lineHeight: 1.8, margin: 0 }}>
                        আমরা বিশ্বাস করি স্বাস্থ্যসেবা সবার জন্য সহজলভ্য হওয়া উচিত। তাই আমরা ডিজিটাল প্রযুক্তি ব্যবহার করে রোগী ও চিকিৎসকের মধ্যে সেতুবন্ধন তৈরি করছি।
                    </p>
                </div>

                {/* Stats */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px", marginBottom: "28px" }}>
                    {[
                        { number: "৫০০+", label: "নিবন্ধিত ডাক্তার", icon: "👨‍⚕️" },
                        { number: "১০,০০০+", label: "সন্তুষ্ট রোগী", icon: "😊" },
                        { number: "৬৪", label: "জেলায় সেবা", icon: "🗺️" },
                        { number: "২৪/৭", label: "সহায়তা", icon: "🕐" },
                    ].map((stat, i) => (
                        <div key={i} style={{
                            background: "#fff", borderRadius: "16px", padding: "24px", textAlign: "center",
                            border: "1px solid #e8f5e9", boxShadow: "0 2px 12px rgba(0,0,0,0.06)"
                        }}>
                            <div style={{ fontSize: "28px", marginBottom: "8px" }}>{stat.icon}</div>
                            <div style={{ fontSize: "24px", fontWeight: 700, color: "#2e9e56", marginBottom: "4px" }}>{stat.number}</div>
                            <div style={{ fontSize: "13px", color: "#666" }}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Team */}
                <div style={{ background: "#fff", borderRadius: "20px", padding: "36px", marginBottom: "28px", border: "1px solid #e8f5e9", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#0d3b1e", margin: "0 0 24px" }}>👥 আমাদের টিম</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
                        {team.map((member, i) => (
                            <div key={i} style={{
                                background: "#f8faf8", borderRadius: "14px", padding: "24px", textAlign: "center",
                                border: "1px solid #e8f5e9"
                            }}>
                                <div style={{ fontSize: "48px", marginBottom: "12px" }}>{member.icon}</div>
                                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1a3a1a", margin: "0 0 4px" }}>{member.name}</h3>
                                <p style={{ fontSize: "13px", color: "#2e9e56", fontWeight: 600, margin: "0 0 8px" }}>{member.role}</p>
                                <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <div style={{ background: "#fff", borderRadius: "20px", padding: "36px", border: "1px solid #e8f5e9", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                    <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#0d3b1e", margin: "0 0 8px" }}>📩 যোগাযোগ করুন</h2>
                    <p style={{ fontSize: "14px", color: "#666", margin: "0 0 24px" }}>যেকোনো প্রশ্ন বা পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন।</p>

                    <div style={{ display: "grid", gap: "16px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                            <div>
                                <label style={{ fontSize: "13px", color: "#555", display: "block", marginBottom: "6px", fontWeight: 600 }}>আপনার নাম</label>
                                <input placeholder="নাম লিখুন" style={{
                                    width: "100%", padding: "11px 14px", border: "1.5px solid #e0e0e0",
                                    borderRadius: "10px", fontSize: "14px", outline: "none",
                                    fontFamily: "'Hind Siliguri', sans-serif", boxSizing: "border-box",
                                    transition: "border 0.2s"
                                }}
                                    onFocus={e => e.target.style.border = "1.5px solid #2e9e56"}
                                    onBlur={e => e.target.style.border = "1.5px solid #e0e0e0"}
                                />
                            </div>
                            <div>
                                <label style={{ fontSize: "13px", color: "#555", display: "block", marginBottom: "6px", fontWeight: 600 }}>ইমেইল</label>
                                <input type="email" placeholder="email@example.com" style={{
                                    width: "100%", padding: "11px 14px", border: "1.5px solid #e0e0e0",
                                    borderRadius: "10px", fontSize: "14px", outline: "none",
                                    fontFamily: "'Hind Siliguri', sans-serif", boxSizing: "border-box",
                                    transition: "border 0.2s"
                                }}
                                    onFocus={e => e.target.style.border = "1.5px solid #2e9e56"}
                                    onBlur={e => e.target.style.border = "1.5px solid #e0e0e0"}
                                />
                            </div>
                        </div>
                        <div>
                            <label style={{ fontSize: "13px", color: "#555", display: "block", marginBottom: "6px", fontWeight: 600 }}>বিষয়</label>
                            <input placeholder="বিষয় লিখুন" style={{
                                width: "100%", padding: "11px 14px", border: "1.5px solid #e0e0e0",
                                borderRadius: "10px", fontSize: "14px", outline: "none",
                                fontFamily: "'Hind Siliguri', sans-serif", boxSizing: "border-box",
                                transition: "border 0.2s"
                            }}
                                onFocus={e => e.target.style.border = "1.5px solid #2e9e56"}
                                onBlur={e => e.target.style.border = "1.5px solid #e0e0e0"}
                            />
                        </div>
                        <div>
                            <label style={{ fontSize: "13px", color: "#555", display: "block", marginBottom: "6px", fontWeight: 600 }}>বার্তা</label>
                            <textarea placeholder="আপনার বার্তা লিখুন..." rows={5} style={{
                                width: "100%", padding: "11px 14px", border: "1.5px solid #e0e0e0",
                                borderRadius: "10px", fontSize: "14px", outline: "none", resize: "vertical",
                                fontFamily: "'Hind Siliguri', sans-serif", boxSizing: "border-box",
                                transition: "border 0.2s"
                            }}
                                onFocus={e => e.target.style.border = "1.5px solid #2e9e56"}
                                onBlur={e => e.target.style.border = "1.5px solid #e0e0e0"}
                            />
                        </div>
                        <button style={{
                            background: "linear-gradient(135deg, #2e9e56, #5ecb87)",
                            color: "#fff", border: "none", padding: "14px 32px",
                            borderRadius: "50px", fontSize: "15px", fontWeight: 700,
                            cursor: "pointer", fontFamily: "'Hind Siliguri', sans-serif",
                            boxShadow: "0 4px 16px rgba(46,158,86,0.4)", transition: "all 0.2s"
                        }}
                            onMouseEnter={e => e.target.style.transform = "translateY(-2px)"}
                            onMouseLeave={e => e.target.style.transform = "translateY(0)"}
                        >
                            📨 বার্তা পাঠান
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}