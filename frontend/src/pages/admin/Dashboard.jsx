import React from "react";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import axios from "../../api/axiosInstance";
import AdminLayout from "./AdminLayout";

const COLORS = ["#16a34a", "#3b82f6", "#f59e0b", "#ef4444"];

export default function Dashboard() {
    const { data: stats, isLoading } = useQuery({
        queryKey: ["adminStats"],
        queryFn: () => axios.get("/admin/stats").then((r) => r.data),
    });

    if (isLoading) return (
        <AdminLayout>
            <div className="flex items-center justify-center h-64">
                <p className="text-gray-400 text-lg">লোড হচ্ছে...</p>
            </div>
        </AdminLayout>
    );

    const statCards = [
        { label: "মোট ব্যবহারকারী", value: stats?.totalUsers || 0, icon: "👥", color: "bg-blue-500" },
        { label: "মোট ডাক্তার", value: stats?.totalDoctors || 0, icon: "👨‍⚕️", color: "bg-green-500" },
        { label: "মোট অ্যাপয়েন্টমেন্ট", value: stats?.totalAppointments || 0, icon: "📅", color: "bg-yellow-500" },
        { label: "অপেক্ষায় আছে", value: stats?.pendingAppointments || 0, icon: "⏳", color: "bg-red-500" },
    ];

    const barData = [
        { name: "অপেক্ষায়", value: stats?.pendingAppointments || 0 },
        { name: "নিশ্চিত", value: stats?.confirmedAppointments || 0 },
        { name: "বাতিল", value: stats?.cancelledAppointments || 0 },
    ];

    const pieData = [
        { name: "ব্যবহারকারী", value: stats?.totalUsers || 0 },
        { name: "ডাক্তার", value: stats?.totalDoctors || 0 },
    ];

    return (
        <AdminLayout>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800">ড্যাশবোর্ড</h1>
                <p className="text-gray-500 mt-1">স্বাস্থ্য খোঁজি — সামগ্রিক পরিসংখ্যান</p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {statCards.map((card) => (
                    <div key={card.label} className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-4">
                        <div className={`${card.color} w-12 h-12 rounded-full flex items-center justify-center text-2xl`}>
                            {card.icon}
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-gray-800">{card.value}</p>
                            <p className="text-sm text-gray-500">{card.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="font-semibold text-gray-800 mb-4">অ্যাপয়েন্টমেন্ট অবস্থা</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={barData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#16a34a" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="font-semibold text-gray-800 mb-4">ব্যবহারকারী বনাম ডাক্তার</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({ name, value }) => `${name}: ${value}`}>
                                {pieData.map((_, index) => (
                                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </AdminLayout>
    );
}