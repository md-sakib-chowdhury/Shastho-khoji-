import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { loginApi, registerApi } from "../api/authApi";

export function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({ phone: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const res = await loginApi(form);
            login(res.data);
            navigate("/");
        } catch (err) {
            setError(err.response?.data?.message || "Login হয়নি, আবার চেষ্টা করুন");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="card w-full max-w-sm">
                <div className="text-center mb-6">
                    <span className="text-4xl">🏥</span>
                    <h1 className="text-xl font-bold mt-2">স্বাস্থ্য খোঁজি</h1>
                    <p className="text-gray-500 text-sm mt-1">আপনার অ্যাকাউন্টে প্রবেশ করুন</p>
                </div>
                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3 mb-4">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-sm text-gray-600 block mb-1">ফোন নম্বর</label>
                        <input
                            value={form.phone}
                            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                            placeholder="01XXXXXXXXX"
                            className="input-field"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600 block mb-1">পাসওয়ার্ড</label>
                        <input
                            type="password"
                            value={form.password}
                            onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                            placeholder="পাসওয়ার্ড দিন"
                            className="input-field"
                            required
                        />
                    </div>
                    <button type="submit" disabled={loading} className="btn-primary w-full">
                        {loading ? "প্রবেশ হচ্ছে..." : "Login করুন"}
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500 mt-4">
                    নতুন ব্যবহারকারী?{" "}
                    <Link to="/register" className="text-green-600 font-medium">নিবন্ধন করুন</Link>
                </p>
            </div>
        </div>
    );
}

export function Register() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", phone: "", email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const res = await registerApi(form);
            login(res.data);
            navigate("/");
        } catch (err) {
            setError(err.response?.data?.message || "নিবন্ধন হয়নি");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="card w-full max-w-sm">
                <div className="text-center mb-6">
                    <span className="text-4xl">🏥</span>
                    <h1 className="text-xl font-bold mt-2">নতুন অ্যাকাউন্ট</h1>
                    <p className="text-gray-500 text-sm mt-1">স্বাস্থ্য খোঁজিতে নিবন্ধন করুন</p>
                </div>
                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3 mb-4">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-sm text-gray-600 block mb-1">পূর্ণ নাম</label>
                        <input
                            value={form.name}
                            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                            placeholder="আপনার নাম"
                            className="input-field"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600 block mb-1">ফোন নম্বর</label>
                        <input
                            value={form.phone}
                            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                            placeholder="01XXXXXXXXX"
                            className="input-field"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600 block mb-1">ইমেইল (ঐচ্ছিক)</label>
                        <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                            placeholder="email@example.com"
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600 block mb-1">পাসওয়ার্ড</label>
                        <input
                            type="password"
                            value={form.password}
                            onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                            placeholder="কমপক্ষে ৬ অক্ষর"
                            className="input-field"
                            minLength={6}
                            required
                        />
                    </div>
                    <button type="submit" disabled={loading} className="btn-primary w-full">
                        {loading ? "নিবন্ধন হচ্ছে..." : "নিবন্ধন করুন"}
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500 mt-4">
                    আগে থেকেই আছেন?{" "}
                    <Link to="/login" className="text-green-600 font-medium">Login করুন</Link>
                </p>
            </div>
        </div>
    );
}