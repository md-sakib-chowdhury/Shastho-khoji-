import { useState, useEffect } from "react";
import axios from "../../api/axiosInstance";
import AdminLayout from "./AdminLayout";

const empty = { title: "", excerpt: "", category: "", icon: "💡", readTime: "৩ মিনিট" };

export default function ManageTips() {
    const [tips, setTips] = useState([]);
    const [form, setForm] = useState(empty);
    const [editId, setEditId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => { fetchTips(); }, []);

    const fetchTips = async () => {
        const res = await axios.get("/tips");
        setTips(res.data);
        setLoading(false);
    };

    const handleSubmit = async () => {
        if (!form.title || !form.category) return alert("শিরোনাম ও বিভাগ দিন!");
        setSaving(true);
        try {
            if (editId) {
                await axios.put(`/tips/${editId}`, form);
            } else {
                await axios.post("/tips", form);
            }
            setForm(empty);
            setEditId(null);
            fetchTips();
        } catch {
            alert("সেভ হয়নি!");
        } finally {
            setSaving(false);
        }
    };

    const handleEdit = (t) => {
        setForm({ title: t.title, excerpt: t.excerpt, category: t.category, icon: t.icon, readTime: t.readTime });
        setEditId(t._id);
        window.scrollTo(0, 0);
    };

    const handleDelete = async (id) => {
        if (!confirm("মুছে ফেলবেন?")) return;
        await axios.delete(`/tips/${id}`);
        fetchTips();
    };

    return (
        <AdminLayout>
            <div style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                <style>{`@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');`}</style>

                <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#0d3b1e", marginBottom: "24px" }}>💡 স্বাস্থ্য টিপস ম্যানেজ</h1>

                {/* Form */}
                <div style={cardStyle}>
                    <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#0d3b1e", margin: "0 0 20px" }}>
                        {editId ? "✏️ টিপস সম্পাদনা" : "➕ নতুন টিপস"}
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px", marginBottom: "14px" }}>
                        <div>
                            <label style={labelStyle}>আইকন</label>
                            <input value={form.icon} onChange={e => setForm(p => ({ ...p, icon: e.target.value }))} style={{ ...inputStyle, textAlign: "center", fontSize: "20px" }} />
                        </div>
                        <div>
                            <label style={labelStyle}>শিরোনাম *</label>
                            <input value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} placeholder="টিপসের শিরোনাম" style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>বিভাগ *</label>
                            <input value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))} placeholder="যেমন: হৃদরোগ, পুষ্টি" style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>পড়ার সময়</label>
                            <input value={form.readTime} onChange={e => setForm(p => ({ ...p, readTime: e.target.value }))} placeholder="যেমন: ৩ মিনিট" style={inputStyle} />
                        </div>
                    </div>
                    <div style={{ marginBottom: "16px" }}>
                        <label style={labelStyle}>বিবরণ</label>
                        <textarea value={form.excerpt} onChange={e => setForm(p => ({ ...p, excerpt: e.target.value }))}
                            placeholder="টিপসের বিবরণ লিখুন..." rows={4}
                            style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <button onClick={handleSubmit} disabled={saving} style={saveBtnStyle}>
                            {saving ? "সেভ হচ্ছে..." : editId ? "✅ আপডেট করুন" : "➕ যোগ করুন"}
                        </button>
                        {editId && (
                            <button onClick={() => { setForm(empty); setEditId(null); }} style={cancelBtnStyle}>বাতিল</button>
                        )}
                    </div>
                </div>

                {/* List */}
                <div style={cardStyle}>
                    <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#0d3b1e", margin: "0 0 20px" }}>
                        সব টিপস ({tips.length}টি)
                    </h2>
                    {loading ? (
                        <p style={{ color: "#999", textAlign: "center", padding: "40px" }}>লোড হচ্ছে...</p>
                    ) : tips.length === 0 ? (
                        <p style={{ color: "#999", textAlign: "center", padding: "40px" }}>কোনো টিপস নেই</p>
                    ) : (
                        <div style={{ display: "grid", gap: "12px" }}>
                            {tips.map(t => (
                                <div key={t._id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f8faf8", padding: "16px", borderRadius: "12px", border: "1px solid #e8f5e9" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                        <span style={{ fontSize: "24px" }}>{t.icon}</span>
                                        <div>
                                            <p style={{ fontWeight: 700, color: "#1a3a1a", margin: "0 0 2px", fontSize: "15px" }}>{t.title}</p>
                                            <p style={{ color: "#666", fontSize: "13px", margin: 0 }}>{t.category} • ⏱ {t.readTime}</p>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", gap: "8px" }}>
                                        <button onClick={() => handleEdit(t)} style={editBtnStyle}>✏️</button>
                                        <button onClick={() => handleDelete(t._id)} style={deleteBtnStyle}>🗑️</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}

const cardStyle = { background: "#fff", borderRadius: "16px", padding: "28px", border: "1px solid #e8f5e9", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", marginBottom: "24px" };
const labelStyle = { fontSize: "13px", color: "#555", display: "block", marginBottom: "6px", fontWeight: 600 };
const inputStyle = { width: "100%", padding: "10px 14px", border: "1.5px solid #e0e0e0", borderRadius: "10px", fontSize: "14px", outline: "none", fontFamily: "'Hind Siliguri', sans-serif", boxSizing: "border-box" };
const saveBtnStyle = { background: "linear-gradient(135deg, #2e9e56, #5ecb87)", color: "#fff", border: "none", padding: "11px 24px", borderRadius: "50px", fontSize: "14px", fontWeight: 700, cursor: "pointer", fontFamily: "'Hind Siliguri', sans-serif" };
const cancelBtnStyle = { background: "#f0f0f0", color: "#555", border: "none", padding: "11px 24px", borderRadius: "50px", fontSize: "14px", fontWeight: 600, cursor: "pointer", fontFamily: "'Hind Siliguri', sans-serif" };
const editBtnStyle = { background: "#e8f5e9", border: "none", padding: "8px 12px", borderRadius: "8px", cursor: "pointer", fontSize: "16px" };
const deleteBtnStyle = { background: "#ffebee", border: "none", padding: "8px 12px", borderRadius: "8px", cursor: "pointer", fontSize: "16px" };