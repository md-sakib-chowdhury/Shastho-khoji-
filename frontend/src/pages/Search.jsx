import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDoctors } from "../hooks/useDoctors";
import DoctorCard from "../components/DoctorCard";
import MapView from "../components/MapView";

const divisions = ["ঢাকা", "চট্টগ্রাম", "রাজশাহী", "খুলনা", "বরিশাল", "সিলেট", "রংপুর", "ময়মনসিংহ"];

export default function Search() {
    const [searchParams] = useSearchParams();
    const [filters, setFilters] = useState({
        search: searchParams.get("search") || "",
        specialization: searchParams.get("specialization") || "",
        division: "",
        page: 1,
    });
    const [showMap, setShowMap] = useState(false);
    const { data, isLoading } = useDoctors(filters);

    return (
        <div className="min-h-screen bg-gray-50 py-6 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="card mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <input
                            value={filters.search}
                            onChange={(e) => setFilters((p) => ({ ...p, search: e.target.value, page: 1 }))}
                            placeholder="নাম বা বিশেষজ্ঞতা..."
                            className="input-field"
                        />
                        <input
                            value={filters.specialization}
                            onChange={(e) => setFilters((p) => ({ ...p, specialization: e.target.value, page: 1 }))}
                            placeholder="বিশেষজ্ঞতা..."
                            className="input-field"
                        />
                        <select
                            value={filters.division}
                            onChange={(e) => setFilters((p) => ({ ...p, division: e.target.value, page: 1 }))}
                            className="input-field"
                        >
                            <option value="">সব বিভাগ</option>
                            {divisions.map((d) => <option key={d}>{d}</option>)}
                        </select>
                    </div>
                    <button
                        onClick={() => setShowMap((p) => !p)}
                        className="mt-3 text-sm text-green-600 underline"
                    >
                        {showMap ? "ম্যাপ লুকান" : "ম্যাপে দেখুন"}
                    </button>
                </div>

                {showMap && <div className="mb-6"><MapView doctors={data?.doctors} /></div>}

                {isLoading ? (
                    <div className="text-center py-10 text-gray-400">লোড হচ্ছে...</div>
                ) : (
                    <>
                        <p className="text-sm text-gray-500 mb-3">মোট {data?.total || 0} জন ডাক্তার পাওয়া গেছে</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {data?.doctors?.map((doc) => <DoctorCard key={doc._id} doctor={doc} />)}
                        </div>
                        {data?.pages > 1 && (
                            <div className="flex justify-center gap-2 mt-6">
                                {Array.from({ length: data.pages }, (_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setFilters((p) => ({ ...p, page: i + 1 }))}
                                        className={`px-3 py-1 rounded-lg text-sm ${filters.page === i + 1 ? "bg-green-600 text-white" : "bg-white border"}`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}