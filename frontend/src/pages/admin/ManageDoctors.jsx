import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../../api/axiosInstance";
import AdminLayout from "./AdminLayout";

const emptyForm = {
    name: "", specialization: "", phone: "", qualifications: "",
    experience: 0, consultationFee: 0, division: "", district: "",
    upazila: "", address: "", availableDays: [], timeSlots: [],
};

const divisions = ["ঢাকা", "চট্টগ্রাম", "রাজশাহী", "খুলনা", "বরিশাল", "সিলেট", "রংপুর", "ময়মনসিংহ"];
const days = ["শনিবার", "রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার"];

export default function ManageDoctors() {
    const queryClient = useQueryClient();
    const [showForm, setShowForm] = useState(false);
    const [editDoctor, setEditDoctor] = useState(null);
    const [form, setForm] = useState(emptyForm);
    const [timeSlotInput, setTimeSlotInput] = useState("");

    const { data, isLoading } = useQuery({
        queryKey: ["adminDoctors"],
        queryFn: () => axios.get("/doctors").then((r) => r.data),
    });

    const createMutation = useMutation({
        mutationFn: (data) => axios.post("/doctors", data),
        onSuccess: () => { queryClient.invalidateQueries(["adminDoctors"]); setShowForm(false); setForm(emptyForm); },
    });

    const updateMutation = useMutation({
        mutationFn: ({ id, data }) => axios.put(`/doctors/${id}`, data),
        onSuccess: () => { queryClient.invalidateQueries(["adminDoctors"]); setShowForm(false); setEditDoctor(null); },
    });

    const deleteMutation = useMutation({
        mutationFn: (id) => axios.delete(`/doctors/${id}`),
        onSuccess: () => queryClient.invalidateQueries(["adminDoctors"]),
    });

    const handleSubmit = () => {
        if (editDoctor) {
            updateMutation.mutate({ id: editDoctor._id, data: form });
        } else {
            createMutation.mutate(form);
        }
    };

    const handleEdit = (doctor) => {
        setEditDoctor(doctor);
        setForm(doctor);
        setShowForm(true);
    };

    const toggleDay = (day) => {
        setForm((p) => ({
            ...p,
            availableDays: p.availableDays.includes(day)
                ? p.availableDays.filter((d) => d !== day)
                : [...p.availableDays, day],
        }));
    };

    const addTimeSlot = () => {
        if (timeSlotInput) {
            setForm((p) => ({ ...p, timeSlots: [...p.timeSlots, timeSlotInput] }));
            setTimeSlotInput("");
        }
    };

    return (
        <AdminLayout>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">ডাক্তার ম্যানেজ</h1>
                    <p className="text-gray-500 mt-1">মোট {data?.total || 0} জন ডাক্তার</p>
                </div>
                <button onClick={() => { setShowForm(true); setEditDoctor(null); setForm(emptyForm); }} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2">
                    ➕ নতুন ডাক্তার
                </button>
            </div>

            {/* Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
                        <h2 className="text-lg font-bold mb-4">{editDoctor ? "ডাক্তার সম্পাদনা" : "নতুন ডাক্তার যোগ"}</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {[["name", "নাম"], ["specialization", "বিশেষজ্ঞতা"], ["phone", "ফোন"], ["qualifications", "যোগ্যতা"]].map(([key, label]) => (
                                <div key={key}>
                                    <label className="text-sm text-gray-600 block mb-1">{label}</label>
                                    <input value={form[key]} onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                                </div>
                            ))}
                            {[["experience", "অভিজ্ঞতা (বছর)"], ["consultationFee", "পরামর্শ ফি (৳)"]].map(([key, label]) => (
                                <div key={key}>
                                    <label className="text-sm text-gray-600 block mb-1">{label}</label>
                                    <input type="number" value={form[key]} onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                                </div>
                            ))}
                            <div>
                                <label className="text-sm text-gray-600 block mb-1">বিভাগ</label>
                                <select value={form.division} onChange={(e) => setForm((p) => ({ ...p, division: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                                    <option value="">বিভাগ বেছে নিন</option>
                                    {divisions.map((d) => <option key={d}>{d}</option>)}
                                </select>
                            </div>
                            {[["district", "জেলা"], ["upazila", "উপজেলা"], ["address", "ঠিকানা"]].map(([key, label]) => (
                                <div key={key}>
                                    <label className="text-sm text-gray-600 block mb-1">{label}</label>
                                    <input value={form[key]} onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))} className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                                </div>
                            ))}
                        </div>

                        <div className="mt-4">
                            <label className="text-sm text-gray-600 block mb-2">উপলব্ধ দিন</label>
                            <div className="flex flex-wrap gap-2">
                                {days.map((day) => (
                                    <button key={day} type="button" onClick={() => toggleDay(day)} className={`px-3 py-1 rounded-full text-sm border ${form.availableDays?.includes(day) ? "bg-green-600 text-white border-green-600" : "border-gray-200"}`}>
                                        {day}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="text-sm text-gray-600 block mb-2">সময় স্লট</label>
                            <div className="flex gap-2 mb-2">
                                <input value={timeSlotInput} onChange={(e) => setTimeSlotInput(e.target.value)} placeholder="যেমন: সকাল ৯টা - ১১টা" className="flex-1 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                                <button type="button" onClick={addTimeSlot} className="bg-green-600 text-white px-3 py-2 rounded-lg">যোগ</button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {form.timeSlots?.map((slot, i) => (
                                    <span key={i} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                                        {slot}
                                        <button onClick={() => setForm((p) => ({ ...p, timeSlots: p.timeSlots.filter((_, j) => j !== i) }))} className="text-red-400 ml-1">×</button>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-3 mt-6">
                            <button onClick={handleSubmit} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 flex-1">
                                {editDoctor ? "আপডেট করুন" : "যোগ করুন"}
                            </button>
                            <button onClick={() => { setShowForm(false); setEditDoctor(null); }} className="border border-gray-200 px-6 py-2 rounded-lg hover:bg-gray-50 flex-1">
                                বাতিল
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Doctor List */}
            {isLoading ? (
                <div className="text-center py-10 text-gray-400">লোড হচ্ছে...</div>
            ) : (
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b">
                            <tr>
                                {["নাম", "বিশেষজ্ঞতা", "জেলা", "ফি", "Action"].map((h) => (
                                    <th key={h} className="text-left px-6 py-3 text-sm font-medium text-gray-600">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {data?.doctors?.map((doc) => (
                                <tr key={doc._id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-800">ডা. {doc.name}</td>
                                    <td className="px-6 py-4 text-green-600 text-sm">{doc.specialization}</td>
                                    <td className="px-6 py-4 text-gray-500 text-sm">{doc.district}</td>
                                    <td className="px-6 py-4 text-gray-500 text-sm">৳{doc.consultationFee}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <button onClick={() => handleEdit(doc)} className="text-blue-600 hover:text-blue-700 text-sm font-medium">✏️ Edit</button>
                                            <button onClick={() => deleteMutation.mutate(doc._id)} className="text-red-500 hover:text-red-600 text-sm font-medium">🗑️ Delete</button>
                                        </div>
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