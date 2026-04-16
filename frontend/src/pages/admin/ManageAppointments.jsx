import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../../api/axiosInstance";
import AdminLayout from "./AdminLayout";

export default function ManageAppointments() {
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery({
        queryKey: ["adminAppointments"],
        queryFn: () => axios.get("/admin/appointments").then((r) => r.data),
    });

    const updateMutation = useMutation({
        mutationFn: ({ id, status }) => axios.patch(`/admin/appointments/${id}/status`, { status }),
        onSuccess: () => queryClient.invalidateQueries(["adminAppointments"]),
    });

    const statusColor = {
        pending: "bg-yellow-100 text-yellow-700",
        confirmed: "bg-green-100 text-green-700",
        cancelled: "bg-red-100 text-red-700",
        completed: "bg-blue-100 text-blue-700",
    };

    const statusLabel = {
        pending: "অপেক্ষায়",
        confirmed: "নিশ্চিত",
        cancelled: "বাতিল",
        completed: "সম্পন্ন",
    };

    return (
        <AdminLayout>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">অ্যাপয়েন্টমেন্ট ম্যানেজ</h1>
                <p className="text-gray-500 mt-1">মোট {data?.appointments?.length || 0}টি অ্যাপয়েন্টমেন্ট</p>
            </div>

            {isLoading ? (
                <div className="text-center py-10 text-gray-400">লোড হচ্ছে...</div>
            ) : (
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                {["রোগী", "ডাক্তার", "তারিখ", "সময়", "অবস্থা", "Action"].map((h) => (
                                    <th key={h} className="text-left px-6 py-3 text-sm font-medium text-gray-600">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {data?.appointments?.map((apt) => (
                                <tr key={apt._id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-800">{apt.patient?.name}</td>
                                    <td className="px-6 py-4 text-sm text-green-600">ডা. {apt.doctor?.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {new Date(apt.appointmentDate).toLocaleDateString("bn-BD")}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{apt.timeSlot}</td>
                                    <td className="px-6 py-4">
                                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColor[apt.status]}`}>
                                            {statusLabel[apt.status]}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <select
                                            value={apt.status}
                                            onChange={(e) => updateMutation.mutate({ id: apt._id, status: e.target.value })}
                                            className="text-sm border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        >
                                            <option value="pending">অপেক্ষায়</option>
                                            <option value="confirmed">নিশ্চিত</option>
                                            <option value="cancelled">বাতিল</option>
                                            <option value="completed">সম্পন্ন</option>
                                        </select>
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