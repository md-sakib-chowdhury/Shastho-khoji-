import React from "react";
import { Link } from "react-router-dom";

export default function DoctorCard({ doctor }) {
    if (!doctor) return null;

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden">
            {/* Doctor Image */}
            <div className="w-full h-48 bg-green-50 overflow-hidden">
                <img
                    src={doctor.imageUrl || "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg"}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg";
                    }}
                />
            </div>

            {/* Doctor Info */}
            <div className="p-4">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-semibold text-gray-800 text-lg">ডা. {doctor.name}</h3>
                        <p className="text-sm text-green-600 font-medium">{doctor.specialization}</p>
                        <p className="text-xs text-gray-500 mt-1">📍 {doctor.district}, {doctor.division}</p>
                        <p className="text-xs text-gray-500">💰 ফি: ৳{doctor.consultationFee}</p>
                    </div>
                    {doctor.rating > 0 && (
                        <span className="text-xs bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full">
                            ⭐ {doctor.rating}
                        </span>
                    )}
                </div>

                <Link
                    to={`/doctor/${doctor._id}`}
                    className="btn-primary w-full text-center block mt-3 text-sm"
                >
                    বিস্তারিত দেখুন
                </Link>
            </div>
        </div>
    );
}