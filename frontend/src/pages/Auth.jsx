import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { loginApi, registerApi } from '../api/authApi';

export function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({ phone: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const res = await loginApi(form);
            if (res.data) {
                login(res.data);
                if (res.data.role === 'admin') {
                    navigate('/admin');
                } else {
                    navigate('/');
                }
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Login হয়নি, আবার চেষ্টা করুন');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 w-full max-w-sm">
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
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 font-medium transition-colors disabled:bg-gray-400"
                    >
                        {loading ? 'প্রবেশ হচ্ছে...' : 'Login করুন'}
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500 mt-4">
                    নতুন ব্যবহারকারী?{' '}
                    <Link to="/register" className="text-green-600 font-medium">নিবন্ধন করুন</Link>
                </p>
            </div>
        </div>
    );
}

export function Register() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: '', phone: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const res = await registerApi(form);
            if (res.data) {
                login(res.data);
                navigate('/');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'নিবন্ধন সম্পন্ন হয়নি। আবার চেষ্টা করুন।');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 w-full max-w-sm">
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
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600 block mb-1">ফোন নম্বর</label>
                        <input
                            value={form.phone}
                            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                            placeholder="01XXXXXXXXX"
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600 block mb-1">পাসওয়ার্ড</label>
                        <input
                            type="password"
                            value={form.password}
                            onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                            placeholder="কমপক্ষে ৬ অক্ষর"
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            minLength={6}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 font-medium transition-colors disabled:bg-gray-400"
                    >
                        {loading ? 'নিবন্ধন হচ্ছে...' : 'নিবন্ধন করুন'}
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500 mt-4">
                    আগে থেকেই আছেন?{' '}
                    <Link to="/login" className="text-green-600 font-medium">Login করুন</Link>
                </p>
            </div>
        </div>
    );
}

export function LogoutButton() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 font-medium transition-colors"
        >
            Logout
        </button>
    );
}