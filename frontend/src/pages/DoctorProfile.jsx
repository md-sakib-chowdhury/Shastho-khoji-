import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDoctorByIdApi, bookAppointmentApi } from "../api/doctorApi";
import { useAuth } from "../hooks/useAuth";

export default function DoctorProfile() {
    const { id } = useParams();
    const { user } = useAuth();
    const [selectedSlot, setSelectedSlot] = useState("");
    const [date, setDate] = useState("");
    const [booked, setBooked] = useState(false);

    const { data: doctor, isLoading } = useQuery({
        queryKey: ["doctor", id],
        queryFn: () => getDoctorByIdApi(id).then((r) => r.data),
    });

    const handleBook = async () => {
        if (!selectedSlot || !date) return alert("তারিখ ও সময় বেছে নিন");
        try {
            await bookAppointmentApi({ doctorId: id, appointmentDate: date, timeSlot: selectedSlot });
            setBooked(true);
        } catch {
            alert("বুকিং হয়নি, আবার চেষ্টা করুন");
        }
    };

    if (isLoading) return <div className="min-h-screen flex items-center justify-center">লোড হচ্ছে...</div>;
    if (!doctor) return <div className="min-h-screen flex items-center justify-center">ডাক্তার পাওয়া যায়নি</div>;

    return (
        <div className="min-h-screen bg-gray-50 py-6 px-4">
            <div className="max-w-2xl mx-auto space-y-4">
                <div className="card">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl">👨‍⚕️</div>
                        <div>
                            <h1 className="text-xl font-bold">ডা. {doctor.name}</h1>
                            <p className="text-green-600">{doctor.specialization}</p>
                            <p className="text-sm text-gray-500">📍 {doctor.district}, {doctor.division}</p>
                        </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                        <div className="bg-gray-50 rounded-lg p-3">
                            <p className="text-gray-500">অভিজ্ঞতা</p>
                            <p className="font-semibold">{doctor.experience} বছর</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                            <p className="text-gray-500">পরামর্শ ফি</p>
                            <p className="font-semibold">৳{doctor.consultationFee}</p>
                        </div>
                    </div>
                </div>

                {user ? (
                    booked ? (
                        <div className="card text-center text-green-600 font-medium py-6">
                            ✅ অ্যাপয়েন্টমেন্ট সফলভাবে বুক হয়েছে!
                        </div>
                    ) : (
                        <div className="card">
                            <h2 className="font-semibold mb-3">অ্যাপয়েন্টমেন্ট নিন</h2>
                            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="input-field mb-3" />
                            <div className="flex flex-wrap gap-2 mb-4">
                                {doctor.timeSlots?.map((slot) => (
                                    <button
                                        key={slot}
                                        onClick={() => setSelectedSlot(slot)}
                                        className={`px-3 py-1 rounded-full text-sm border ${selectedSlot === slot ? "bg-green-600 text-white border-green-600" : "border-gray-200"}`}
                                    >
                                        {slot}
                                    </button>
                                ))}
                            </div>
                            <button onClick={handleBook} className="btn-primary w-full">অ্যাপয়েন্টমেন্ট নিন</button>
                        </div>
                    )
                ) : (
                    <div className="card text-center text-gray-500">
                        অ্যাপয়েন্টমেন্ট নিতে <a href="/login" className="text-green-600 font-medium">Login করুন</a>
                    </div>
                )}
            </div>
        </div>
    );
}