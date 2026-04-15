import { Link } from "react-router-dom";

export default function DoctorCard({ doctor }) {
    return (
        <div className="card hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    👨‍⚕️
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">ডা. {doctor.name}</h3>
                    <p className="text-sm text-green-600">{doctor.specialization}</p>
                    <p className="text-xs text-gray-500 mt-1">📍 {doctor.district}, {doctor.division}</p>
                    <p className="text-xs text-gray-500">💰 ফি: ৳{doctor.consultationFee}</p>
                </div>
                <div className="text-right">
                    {doctor.rating > 0 && (
                        <span className="text-xs bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full">
                            ⭐ {doctor.rating}
                        </span>
                    )}
                </div>
            </div>
            <Link
                to={`/doctor/${doctor._id}`}
                className="btn-primary w-full text-center block mt-3 text-sm"
            >
                বিস্তারিত দেখুন
            </Link>
        </div>
    );
}