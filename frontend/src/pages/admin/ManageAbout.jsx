import { useState, useEffect } from "react";
import axios from "../../api/axiosInstance";
import AdminLayout from "./AdminLayout";

export default function ManageAbout() {
    const [about, setAbout] = useState({ missionText: "", stats: [], team: [] });
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState("about");
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        Promise.all([
            axios.get("/about"),
            axios.get("/about/contacts"),
        ]).then(([aboutRes, contactRes]) => {
            setAbout(aboutRes.data);
            setContacts(contactRes.data);
            setLoading(false);
        });
    }, []);

    const handleSave = async () => {
        setSaving(true);
        try {
            await axios.put("/about", about);
            setSaved(true);
            setTimeout(() => setSaved(false), 2000);
        } catch {
            alert("সেভ হয়নি!");
        } finally {
            setSaving(false);
        }
    };

    const updateStat = (i, field, value) => {
        const stats = [...about.stats];
        stats[i] = { ...stats[i], [field]: value };
        setAbout(p => ({ ...p, stats }));
    };

    const addStat = () => setAbout(p => ({ ...p, stats: [...p.stats, { number: "", label: "", icon: "📊" }] }));
    const removeStat = (i) => setAbout(p => ({ ...p, stats: p.stats.filter((_, idx) => idx !== i) }));

    const updateTeam = (i, field, value) => {
        const team = [...about.team];
        team[i] = { ...team[i], [field]: value };
        setAbout(p => ({ ...p, team }));
    };

    const addTeam = () => setAbout(p => ({ ...p, team: [...p.team, { name: "", role: "", bio: "", icon: "👤" }] }));
    const removeTeam = (i) => setAbout(p => ({ ...p, team: p.team.filter((_, idx) => idx !== i) }));

    const markRead = async (id) => {
        await axios.put(`/about/contacts/${id}/read`);
        setContacts(p => p.map(c => c._id === id ? { ...c, isRead: true } : c));
    };

    const deleteContact = async (id) => {
        if (!confirm("বার্তাটি মুছে ফেলবেন?")) return;
        await axios.delete(`/about/contacts/${id}`);
        setContacts(p => p.filter(c => c._id !== id));
    };

    if (loading) return <AdminLayout><p style={{ padding: "40px", color: "#999" }}>লোড হচ্ছে...</p></AdminLayout>;

    const tabStyle = (tab) => ({
        padding: "10px 20px", border: "none", borderRadius: "50px", cursor: "pointer",
        fontFamily: "'Hind Siliguri', sans-serif", fontSize: "14px", fontWeight: 600,
        background: activeTab === tab ? "#2e9e56" : "#f0f0f0",
        color: activeTab === tab ? "#fff" : "#555",
        transition: "all 0.2s"
    });

    return (
        <AdminLayout>
            <div style={{ fontFamily: "'Hind Siliguri', sans-serif", padding: "24px" }}>
                <style>{`@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');`}</style>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                    <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#0d3b1e", margin: 0 }}>আমাদের সম্পর্কে পেজ</h1>
                    {activeTab !== "contacts" && (
                        <button onClick={handleSave} disabled={saving} style={{
                            background: "linear-gradient(135deg, #2e9e56, #5ecb87)",
                            color: "#fff", border: "none", padding: "10px 24px",
                            borderRadius: "50px", fontSize: "14px", fontWeight: 700,
                            cursor: "pointer", fontFamily: "'Hind Siliguri', sans-serif",
                            opacity: saving ? 0.7 : 1
                        }}>
                            {saving ? "সেভ হচ্ছে..." : saved ? "✅ সেভ হয়েছে!" : "💾 সেভ করুন"}
                        </button>
                    )}
                </div>

                {/* Tabs */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "28px" }}>
                    <button style={tabStyle("about")} onClick={() => setActiveTab("about")}>লক্ষ্য ও পরিচিতি</button>
                    <button style={tabStyle("stats")} onClick={() => setActiveTab("stats")}>পরিসংখ্যান</button>
                    <button style={tabStyle("team")} onClick={() => setActiveTab("team")}>টিম</button>
                    <button style={tabStyle("contacts")} onClick={() => setActiveTab("contacts")}>
                        বার্তাসমূহ {contacts.filter(c => !c.isRead).length > 0 && `(${contacts.filter(c => !c.isRead).length})`}
                    </button>
                </div>

                {/* Mission Tab */}
                {activeTab === "about" && (
                    <div style={cardStyle}>
                        <h2 style={sectionTitle}>🎯 আমাদের লক্ষ্য</h2>
                        <textarea
                            value={about.missionText}
                            onChange={e => setAbout(p => ({ ...p, missionText: e.target.value }))}
                            rows={6}
                            style={{ ...inputStyle, resize: "vertical" }}
                            placeholder="আমাদের লক্ষ্য সম্পর্কে লিখুন..."
                        />
                    </div>
                )}

                {/* Stats Tab */}
                {activeTab === "stats" && (
                    <div style={cardStyle}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                            <h2 style={sectionTitle}>📊 পরিসংখ্যান</h2>
                            <button onClick={addStat} style={addBtnStyle}>+ নতুন যোগ করুন</button>
                        </div>
                        <div style={{ display: "grid", gap: "16px" }}>
                            {about.stats.map((stat, i) => (
                                <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr auto", gap: "12px", alignItems: "center", background: "#f8faf8", padding: "16px", borderRadius: "12px" }}>
                                    <input value={stat.icon} onChange={e => updateStat(i, "icon", e.target.value)}
                                        placeholder="আইকন" style={{ ...inputStyle, textAlign: "center", fontSize: "20px" }} />
                                    <input value={stat.number} onChange={e => updateStat(i, "number", e.target.value)}
                                        placeholder="সংখ্যা (যেমন: ৫০০+)" style={inputStyle} />
                                    <input value={stat.label} onChange={e => updateStat(i, "label", e.target.value)}
                                        placeholder="লেবেল" style={inputStyle} />
                                    <button onClick={() => removeStat(i)} style={deleteBtnStyle}>✕</button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Team Tab */}
                {activeTab === "team" && (
                    <div style={cardStyle}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                            <h2 style={sectionTitle}>👥 টিম সদস্য</h2>
                            <button onClick={addTeam} style={addBtnStyle}>+ নতুন সদস্য</button>
                        </div>
                        <div style={{ display: "grid", gap: "16px" }}>
                            {about.team.map((member, i) => (
                                <div key={i} style={{ background: "#f8faf8", padding: "20px", borderRadius: "12px", border: "1px solid #e8f5e9" }}>
                                    <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr auto", gap: "12px", marginBottom: "12px", alignItems: "center" }}>
                                        <input value={member.icon} onChange={e => updateTeam(i, "icon", e.target.value)}
                                            placeholder="আইকন" style={{ ...inputStyle, textAlign: "center", fontSize: "20px" }} />
                                        <input value={member.name} onChange={e => updateTeam(i, "name", e.target.value)}
                                            placeholder="নাম" style={inputStyle} />
                                        <input value={member.role} onChange={e => updateTeam(i, "role", e.target.value)}
                                            placeholder="পদবি" style={inputStyle} />
                                        <button onClick={() => removeTeam(i)} style={deleteBtnStyle}>✕</button>
                                    </div>
                                    <input value={member.bio} onChange={e => updateTeam(i, "bio", e.target.value)}
                                        placeholder="সংক্ষিপ্ত পরিচিতি" style={{ ...inputStyle, width: "100%", boxSizing: "border-box" }} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Contacts Tab */}
                {activeTab === "contacts" && (
                    <div style={cardStyle}>
                        <h2 style={{ ...sectionTitle, marginBottom: "20px" }}>📩 যোগাযোগ বার্তাসমূহ</h2>
                        {contacts.length === 0 ? (
                            <p style={{ color: "#999", textAlign: "center", padding: "40px" }}>কোনো বার্তা নেই</p>
                        ) : (
                            <div style={{ display: "grid", gap: "16px" }}>
                                {contacts.map(c => (
                                    <div key={c._id} style={{
                                        background: c.isRead ? "#f8faf8" : "#e8f5e9",
                                        borderRadius: "12px", padding: "20px",
                                        border: `1px solid ${c.isRead ? "#e0e0e0" : "#a5d6a7"}`
                                    }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                                            <div>
                                                <span style={{ fontWeight: 700, color: "#1a3a1a", fontSize: "15px" }}>{c.name}</span>
                                                <span style={{ color: "#666", fontSize: "13px", marginLeft: "8px" }}>{c.email}</span>
                                            </div>
                                            <div style={{ display: "flex", gap: "8px" }}>
                                                {!c.isRead && (
                                                    <button onClick={() => markRead(c._id)} style={{ ...addBtnStyle, padding: "5px 12px", fontSize: "12px" }}>
                                                        পড়া হয়েছে
                                                    </button>
                                                )}
                                                <button onClick={() => deleteContact(c._id)} style={{ ...deleteBtnStyle, width: "auto", padding: "5px 12px", fontSize: "12px" }}>
                                                    মুছুন
                                                </button>
                                            </div>
                                        </div>
                                        <p style={{ fontWeight: 600, color: "#2e7d32", fontSize: "14px", margin: "0 0 6px" }}>বিষয়: {c.subject}</p>
                                        <p style={{ color: "#444", fontSize: "14px", margin: "0 0 8px", lineHeight: 1.6 }}>{c.message}</p>
                                        <p style={{ color: "#999", fontSize: "12px", margin: 0 }}>
                                            {new Date(c.createdAt).toLocaleDateString("bn-BD")}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}

const cardStyle = {
    background: "#fff", borderRadius: "16px", padding: "28px",
    border: "1px solid #e8f5e9", boxShadow: "0 2px 12px rgba(0,0,0,0.06)"
};

const sectionTitle = {
    fontSize: "18px", fontWeight: 700, color: "#0d3b1e", margin: 0
};

const inputStyle = {
    width: "100%", padding: "10px 14px", border: "1.5px solid #e0e0e0",
    borderRadius: "10px", fontSize: "14px", outline: "none",
    fontFamily: "'Hind Siliguri', sans-serif", background: "#fff"
};

const addBtnStyle = {
    background: "#e8f5e9", color: "#2e7d32", border: "none",
    padding: "8px 16px", borderRadius: "50px", cursor: "pointer",
    fontSize: "13px", fontWeight: 600, fontFamily: "'Hind Siliguri', sans-serif"
};

const deleteBtnStyle = {
    background: "#ffebee", color: "#c62828", border: "none",
    width: "36px", height: "36px", borderRadius: "50%",
    cursor: "pointer", fontSize: "14px", fontWeight: 700
};