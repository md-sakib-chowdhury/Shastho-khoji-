import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search?search=${search}`);
    };

    return (
        <form onSubmit={handleSearch} className="flex gap-2 w-full max-w-xl">
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ডাক্তার বা বিশেষজ্ঞতা লিখুন..."
                className="input-field flex-1"
            />
            <button type="submit" className="btn-primary px-6">
                🔍 খুঁজুন
            </button>
        </form>
    );
}