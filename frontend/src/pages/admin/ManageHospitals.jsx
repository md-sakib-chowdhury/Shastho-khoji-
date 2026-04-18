import { useState, useEffect } from "react";
import axios from "../../api/axiosInstance";
import AdminLayout from "./AdminLayout";

const empty = { name: "", type: "সরকারি", location: "", beds: "", phone: "", emergency: false, icon: "🏥" };

export default function ManageHospitals() {
    const [hospitals, setHospitals] = useState([]);
    const [form, setForm] = useState(empty);
    const [editId, setEditId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetchHospitals();
    }, []);

    const fetchHospitals = async () => {
        const res = await axios.get("/hospitals");
        setHospitals(res.data);
        setLoading(false);
    };

    const handleSubmit = async () => {
        if (!form.name || !form.location) return alert("নাম ও জেলা দিন!");
        setSaving(true);
        try {
            if (editId) {
                await axios.put(`/hospitals/${editId}`, form);
            } else {
                await axios.post("/hospitals", form);
            }
            setForm(empty);
            setEditId(null);
            fetchHospitals();
        } catch {
            alert("সেভ হয়নি!");
        } finally {
            setSaving(false);
        }
    };

    const handleEdit = (h) => {
        setForm({ name: h.name, type: h.type, location: h.location, beds: h.beds, phone: h.phone, emergency: h.emergency, icon: h.icon });
        setEditId(h._id);
        window.scrollTo(0, 0);
    };

    const handleDelete = async (id) => {
        if (!confirm("মুছে ফেলবেন?")) return;
        await axios.delete(`/hospitals/${id}`);
        fetchHospitals();
    };

    return (
        <AdminLayout>
            <div style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
                <style>{`@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');`}</style>

                <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#0d3b1e", marginBottom: "24px" }}>🏥 হাসপাতাল ম্যানেজ</h1>

                {/* Form */}
                <div style={cardStyle}>
                    <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#0d3b1e", margin: "0 0 20px" }}>
                        {editId ? "✏️ হাসপাতাল সম্পাদনা" : "➕ নতুন হাসপাতাল"}
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px", marginBottom: "14px" }}>
                        <div>
                            <label style={labelStyle}>আইকন</label>
                            <input value={form.icon} onChange={e => setForm(p => ({ ...p, icon: e.target.value }))} style={{ ...inputStyle, textAlign: "center", fontSize: "20px" }} />
                        </div>
                        <div>
                            <label style={labelStyle}>হাসপাতালের নাম *</label>
                            <input value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="নাম লিখুন" style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>ধরন</label>
                            <select value={form.type} onChange={e => setForm(p => ({ ...p, type: e.target.value }))} style={inputStyle}>
                                <option>সরকারি</option>
                                <option>বেসরকারি</option>
                            </select>
                        </div>
                        <div>
                            <label style={labelStyle}>জেলা *</label>
                            <input value={form.location} onChange={e => setForm(p => ({ ...p, location: e.target.value }))} placeholder="জেলার নাম" style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>বেড সংখ্যা</label>
                            <input type="number" value={form.beds} onChange={e => setForm(p => ({ ...p, beds: e.target.value }))} placeholder="বেড" style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>ফোন নম্বর</label>
                            <input value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} placeholder="ফোন" style={inputStyle} />
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                        <input type="checkbox" id="emergency" checked={form.emergency} onChange={e => setForm(p => ({ ...p, emergency: e.target.checked }))} style={{ width: "18px", height: "18px", cursor: "pointer" }} />
                        <label htmlFor="emergency" style={{ fontSize: "14px", color: "#444", cursor: "pointer" }}>🚨 জরুরি সেবা আছে</label>
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
                        সব হাসপাতাল ({hospitals.length}টি)
                    </h2>
                    {loading ? (
                        <p style={{ color: "#999", textAlign: "center", padding: "40px" }}>লোড হচ্ছে...</p>
                    ) : hospitals.length === 0 ? (
                        <p style={{ color: "#999", textAlign: "center", padding: "40px" }}>কোনো হাসপাতাল নেই</p>
                    ) : (
                        <div style={{ display: "grid", gap: "12px" }}>
                            {hospitals.map(h => (
                                <div key={h._id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f8faf8", padding: "16px", borderRadius: "12px", border: "1px solid #e8f5e9" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                        <span style={{ fontSize: "24px" }}>{h.icon}</span>
                                        <div>
                                            <p style={{ fontWeight: 700, color: "#1a3a1a", margin: "0 0 2px", fontSize: "15px" }}>{h.name}</p>
                                            <p style={{ color: "#666", fontSize: "13px", margin: 0 }}>📍 {h.location} • {h.type} • 🛏 {h.beds} বেড {h.emergency ? "• 🚨 জরুরি" : ""}</p>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", gap: "8px" }}>
                                        <button onClick={() => handleEdit(h)} style={editBtnStyle}>✏️</button>
                                        <button onClick={() => handleDelete(h._id)} style={deleteBtnStyle}>🗑️</button>
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