import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const specializations = ["মেডিসিন", "শিশু রোগ", "গাইনি", "অর্থোপেডিক", "চর্মরোগ", "চক্ষু", "দন্ত রোগ", "মানসিক রোগ"];

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-green-700 text-white py-16 px-4 text-center">
                <h1 className="text-3xl font-bold mb-2">স্বাস্থ্য খোঁজি 🏥</h1>
                <p className="text-green-100 mb-8">বাংলাদেশের যেকোনো প্রান্তে ডাক্তার খুঁজুন</p>
                <div className="flex justify-center">
                    <SearchBar />
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-10">
                <h2 className="text-xl font-bold mb-4 text-gray-800">বিশেষজ্ঞতা অনুযায়ী খুঁজুন</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {specializations.map((s) => (
                        <Link
                            key={s}
                            to={`/search?specialization=${s}`}
                            className="card text-center hover:shadow-md transition-shadow cursor-pointer hover:border-green-200"
                        >
                            <p className="text-2xl mb-1">🩺</p>
                            <p className="text-sm font-medium text-gray-700">{s}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}