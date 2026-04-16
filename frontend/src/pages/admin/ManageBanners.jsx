import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../../api/axiosInstance";
import AdminLayout from "./AdminLayout";

export default function ManageBanners() {
    const queryClient = useQueryClient();
    const [form, setForm] = useState({ title: "", subtitle: "", imageUrl: "", order: 0 });
    const [showForm, setShowForm] = useState(false);

    const { data, isLoading } = useQuery({
        queryKey: ["banners"],
        queryFn: () => axios.get("/banners").then((r) => r.data),
    });

    const createMutation = useMutation({
        mutationFn: (data) => axios.post("/banners", data),
        onSuccess: () => { queryClient.invalidateQueries(["banners"]); setShowForm(false); setForm({ title: "", subtitle: "", imageUrl: "", order: 0 }); },
    });

    const deleteMutation = useMutation({
        mutationFn: (id) => axios.delete(`/banners/${id}`),
        onSuccess: () => queryClient.invalidateQueries(["banners"]),
    });

    return (
        <AdminLayout>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">ব্যানার ম্যানেজ</h1>
                    <p className="text-gray-500 mt-1">Homepage এর ব্যানার নিয়ন্ত্রণ করুন</p>
                </div>
                <button onClick={() => setShowForm(true)} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    ➕ নতুন ব্যানার
                </button>
            </div>

            {showForm && (
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                    <h2 className="font-semibold mb-4">নতুন ব্যানার যোগ করুন</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {[["title", "শিরোনাম"], ["subtitle", "উপশিরোনাম"], ["imageUrl", "Image URL"]].map(([key, label]) => (
                            <div key={key}>
                                <label className="text-sm text-gray-600 block mb-1">{label}</label>
                                <input value={form[key]} onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                            </div>
                        ))}
                        <div>
                            <label className="text-sm text-gray-600 block mb-1">ক্রম (Order)</label>
                            <input type="number" value={form.order} onChange={(e) => setForm((p) => ({ ...p, order: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                        </div>
                    </div>
                    {form.imageUrl && (
                        <img src={form.imageUrl} alt="preview" className="mt-4 h-32 w-full object-cover rounded-lg" onError={(e) => e.target.style.display = "none"} />
                    )}
                    <div className="flex gap-3 mt-4">
                        <button onClick={() => createMutation.mutate(form)} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">যোগ করুন</button>
                        <button onClick={() => setShowForm(false)} className="border border-gray-200 px-6 py-2 rounded-lg">বাতিল</button>
                    </div>
                </div>
            )}

            {isLoading ? (
                <div className="text-center py-10 text-gray-400">লোড হচ্ছে...</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data?.banners?.map((banner) => (
                        <div key={banner._id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                            <img src={banner.imageUrl} alt={banner.title} className="w-full h-40 object-cover" onError={(e) => e.target.src = "https://placehold.co/400x200/16a34a/white?text=Banner"} />
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-800">{banner.title}</h3>
                                <p className="text-sm text-gray-500 mt-1">{banner.subtitle}</p>
                                <button onClick={() => deleteMutation.mutate(banner._id)} className="mt-3 text-red-500 text-sm hover:text-red-600">🗑️ Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </AdminLayout>
    );
}