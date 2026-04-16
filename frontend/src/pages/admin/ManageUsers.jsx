import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../../api/axiosInstance";
import AdminLayout from "./AdminLayout";

export default function ManageUsers() {
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery({
        queryKey: ["adminUsers"],
        queryFn: () => axios.get("/admin/users").then((r) => r.data),
    });

    const deleteMutation = useMutation({
        mutationFn: (id) => axios.delete(`/admin/users/${id}`),
        onSuccess: () => queryClient.invalidateQueries(["adminUsers"]),
    });

    return (
        <AdminLayout>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">ব্যবহারকারী ম্যানেজ</h1>
                <p className="text-gray-500 mt-1">মোট {data?.users?.length || 0} জন ব্যবহারকারী</p>
            </div>

            {isLoading ? (
                <div className="text-center py-10 text-gray-400">লোড হচ্ছে...</div>
            ) : (
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                {["নাম", "ফোন", "ইমেইল", "Role", "যোগদান", "Action"].map((h) => (
                                    <th key={h} className="text-left px-6 py-3 text-sm font-medium text-gray-600">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {data?.users?.map((user) => (
                                <tr key={user._id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-800">{user.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{user.phone}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{user.email || "-"}</td>
                                    <td className="px-6 py-4">
                                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${user.role === "admin" ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-600"}`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {new Date(user.createdAt).toLocaleDateString("bn-BD")}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => deleteMutation.mutate(user._id)} className="text-red-500 hover:text-red-600 text-sm font-medium">
                                            🗑️ Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </AdminLayout>
    );
}