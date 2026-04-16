import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../../api/axiosInstance";
import AdminLayout from "./AdminLayout";

export default function ManageBlogs() {
    const queryClient = useQueryClient();
    const [showForm, setShowForm] = useState(false);
    const [editBlog, setEditBlog] = useState(null);
    const [form, setForm] = useState({ title: "", content: "", imageUrl: "", category: "স্বাস্থ্য", author: "Admin" });

    const { data, isLoading } = useQuery({
        queryKey: ["adminBlogs"],
        queryFn: () => axios.get("/blogs/all").then((r) => r.data),
    });

    const createMutation = useMutation({
        mutationFn: (data) => axios.post("/blogs", data),
        onSuccess: () => { queryClient.invalidateQueries(["adminBlogs"]); setShowForm(false); },
    });

    const updateMutation = useMutation({
        mutationFn: ({ id, data }) => axios.put(`/blogs/${id}`, data),
        onSuccess: () => { queryClient.invalidateQueries(["adminBlogs"]); setShowForm(false); setEditBlog(null); },
    });

    const deleteMutation = useMutation({
        mutationFn: (id) => axios.delete(`/blogs/${id}`),
        onSuccess: () => queryClient.invalidateQueries(["adminBlogs"]),
    });

    const handleSubmit = () => {
        if (editBlog) {
            updateMutation.mutate({ id: editBlog._id, data: form });
        } else {
            createMutation.mutate(form);
        }
    };

    const handleEdit = (blog) => {
        setEditBlog(blog);
        setForm(blog);
        setShowForm(true);
    };

    return (
        <AdminLayout>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">ব্লগ ম্যানেজ</h1>
                    <p className="text-gray-500 mt-1">মোট {data?.blogs?.length || 0}টি ব্লগ</p>
                </div>
                <button onClick={() => { setShowForm(true); setEditBlog(null); setForm({ title: "", content: "", imageUrl: "", category: "স্বাস্থ্য", author: "Admin" }); }} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    ➕ নতুন ব্লগ
                </button>
            </div>

            {showForm && (
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                    <h2 className="font-semibold mb-4">{editBlog ? "ব্লগ সম্পাদনা" : "নতুন ব্লগ লিখুন"}</h2>
                    <div className="space-y-4">
                        {[["title", "শিরোনাম"], ["imageUrl", "Image URL"], ["author", "লেখক"], ["category", "বিভাগ"]].map(([key, label]) => (
                            <div key={key}>
                                <label className="text-sm text-gray-600 block mb-1">{label}</label>
                                <input value={form[key]} onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                            </div>
                        ))}
                        <div>
                            <label className="text-sm text-gray-600 block mb-1">বিষয়বস্তু</label>
                            <textarea
                                value={form.content}
                                onChange={(e) => setForm((p) => ({ ...p, content: e.target.value }))}
                                rows={8}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="ব্লগের বিষয়বস্তু লিখুন..."
                            />
                        </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                        <button onClick={handleSubmit} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">{editBlog ? "আপডেট" : "প্রকাশ করুন"}</button>
                        <button onClick={() => { setShowForm(false); setEditBlog(null); }} className="border border-gray-200 px-6 py-2 rounded-lg">বাতিল</button>
                    </div>
                </div>
            )}

            {isLoading ? (
                <div className="text-center py-10 text-gray-400">লোড হচ্ছে...</div>
            ) : (
                <div className="space-y-4">
                    {data?.blogs?.map((blog) => (
                        <div key={blog._id} className="bg-white rounded-xl shadow-sm p-6 flex gap-4">
                            {blog.imageUrl && <img src={blog.imageUrl} alt={blog.title} className="w-24 h-24 object-cover rounded-lg flex-shrink-0" onError={(e) => e.target.style.display = "none"} />}
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-800">{blog.title}</h3>
                                <p className="text-sm text-gray-500 mt-1">{blog.category} • {blog.author}</p>
                                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{blog.content}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <button onClick={() => handleEdit(blog)} className="text-blue-600 text-sm hover:text-blue-700">✏️ Edit</button>
                                <button onClick={() => deleteMutation.mutate(blog._id)} className="text-red-500 text-sm hover:text-red-600">🗑️ Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </AdminLayout>
    );
}