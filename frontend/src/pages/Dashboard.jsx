import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    fetchAllMess,
    searchMess,
    filterForVegNonVeg,
    filterByCity,
} from "../features/messSlice";
import axios from "axios";

const vegFilters = [
    { label: "🍽️ All", key: "all" },
    { label: "🥗 Veg", key: "veg" },
    { label: "🍖 Non-Veg", key: "nonveg" },
    { label: "🥘 Both", key: "both" },
];

const cityFilters = [
    { label: "📍 All Cities", key: "all" },
    { label: "📍 Pune", key: "Pune" },
    { label: "📍 Mumbai", key: "Mumbai" },
    { label: "📍 Ahilyanagar", key: "Ahilyanagar" },
    { label: "📍 Thane", key: "Thane" },
    { label: "📍 Nashik", key: "Nashik" },
    { label: "📍 Nagpur", key: "Nagpur" },
];

const badgeMap = {
    veg: { label: "🥗 Veg", bg: "bg-green-50 text-green-700" },
    nonveg: { label: "🍖 Non-Veg", bg: "bg-red-50 text-red-600" },
    both: { label: "🥘 Veg & Non-Veg", bg: "bg-amber-50 text-amber-700" },
};

const bgMap = {
    veg: "from-green-50 to-emerald-100",
    nonveg: "from-red-50 to-orange-100",
    both: "from-amber-50 to-yellow-100",
};

const emojiMap = {
    veg: "🥗",
    nonveg: "🍖",
    both: "🍱",
};

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { mess, loading, error } = useSelector((state) => state.mess);

    console.log(mess)

    const [input, setInput] = useState("");
    const [activeVeg, setActiveVeg] = useState("all");
    const [activeCity, setActiveCity] = useState("all");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchAllMess());
    }, [dispatch]);

    const handleSearchChange = (e) => {
        setInput(e.target.value);
        dispatch(searchMess(e.target.value));
    };

    const handleVegFilter = (key) => {
        setActiveVeg(key);
        dispatch(filterForVegNonVeg(key));
    };

    const handleCityFilter = (key) => {
        setActiveCity(key);
        dispatch(filterByCity(key));
    };

    const userName = localStorage.getItem("name");
    const role = localStorage.getItem("role");


    const logout = async () => {
        try {
            await axios.post(
                "https://messmate-backend-r94e.onrender.com/api/auth/logout",
                {},
                { withCredentials: true },
            );
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            localStorage.removeItem("role");
            localStorage.removeItem("name");
            navigate("/login");
        } catch (error) {
            console.error(error.response?.data.message || error.message);
        }
    };

    return (
        <div className="min-h-screen bg-amber-50">
            <nav className="bg-white border-b border-stone-100 sticky top-0 z-50 shadow-sm">
                <div className="h-16 flex items-center px-4 md:px-6 gap-3">
                    <div className="flex items-center gap-2 cursor-pointer select-none flex-shrink-0">
                        <div onClick={()=>navigate("/home")} className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                            <svg
                                viewBox="0 0 28 28"
                                fill="none"
                                className="w-5 h-5"
                            >
                                <path
                                    d="M5 9h18M5 14h12M7 19h8"
                                    stroke="white"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <span
                            className="font-bold text-xl text-orange-500"
                            style={{ fontFamily: "Sora, sans-serif" }}
                        >
                            MessMate
                        </span>
                    </div>

                    <div className="hidden sm:flex flex-1 max-w-lg">
                        <div className="flex items-center gap-2.5 bg-amber-50 border-2 border-stone-200 rounded-xl px-4 py-2 focus-within:border-orange-400 transition-colors w-full">
                            <svg
                                className="w-4 h-4 text-stone-400 flex-shrink-0"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <circle
                                    cx="7"
                                    cy="7"
                                    r="5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M11 11l3 3"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <input
                                placeholder="Search mess by name or area…"
                                value={input}
                                onChange={handleSearchChange}
                                className="bg-transparent text-sm text-stone-700 outline-none w-full placeholder:text-stone-300"
                            />
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-2 ml-auto flex-shrink-0">
                        {role === "owner" && (
                            <>
                                <button
                                    onClick={() => navigate("/manageMess")}
                                    className="px-3 py-2 rounded-lg border border-stone-200 text-stone-600 text-sm font-medium hover:border-orange-400 hover:text-orange-500 transition-all"
                                >
                                    Manage Mess
                                </button>
                                <button
                                    onClick={() => navigate("/createMess")}
                                    className="px-3 py-2 rounded-lg border border-stone-200 text-stone-600 text-sm font-medium hover:border-orange-400 hover:text-orange-500 transition-all"
                                >
                                    Upload Mess
                                </button>
                            </>
                        )}

                        <button
                            onClick={logout}
                            className="px-3 py-2 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-all"
                        >
                            Logout
                        </button>
                        <div className="w-9 h-9 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
                            {userName?.[0]?.toUpperCase()}
                        </div>
                    </div>

                    <div className="flex md:hidden items-center gap-2 ml-auto">
                        <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">
                            {userName?.[0]?.toUpperCase()}
                        </div>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="w-9 h-9 flex items-center justify-center rounded-lg border border-stone-200 text-stone-500"
                        >
                            <svg
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="sm:hidden px-4 pb-2">
                    <div className="flex items-center gap-2.5 bg-amber-50 border-2 border-stone-200 rounded-xl px-4 py-2 focus-within:border-orange-400 transition-colors">
                        <svg
                            className="w-4 h-4 text-stone-400 flex-shrink-0"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <circle
                                cx="7"
                                cy="7"
                                r="5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M11 11l3 3"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                        <input
                            placeholder="Search mess…"
                            value={input}
                            onChange={handleSearchChange}
                            className="bg-transparent text-sm text-stone-700 outline-none w-full placeholder:text-stone-300"
                        />
                    </div>
                </div>

                {menuOpen && (
                    <div className="md:hidden border-t border-stone-100 px-4 py-3 flex flex-col gap-2 bg-white">
                        <button
                            onClick={() => {
                                navigate("/manageMess");
                                setMenuOpen(false);
                            }}
                            className="w-full text-left px-3 py-2 rounded-lg border border-stone-200 text-stone-600 text-sm font-medium hover:border-orange-400 hover:text-orange-500 transition-all"
                        >
                            Manage Mess
                        </button>
                        <button
                            onClick={() => {
                                navigate("/createMess");
                                setMenuOpen(false);
                            }}
                            className="w-full text-left px-3 py-2 rounded-lg border border-stone-200 text-stone-600 text-sm font-medium hover:border-orange-400 hover:text-orange-500 transition-all"
                        >
                            Upload Mess
                        </button>
                        <button
                            onClick={logout}
                            className="w-full px-3 py-2 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-all"
                        >
                            Logout
                        </button>
                    </div>
                )}

                <div className="flex gap-2 px-4 md:px-6 pb-3 pt-1 overflow-x-auto scrollbar-hide">
                    {vegFilters.map((f) => (
                        <button
                            key={f.key}
                            onClick={() => handleVegFilter(f.key)}
                            className={`flex-shrink-0 px-3 md:px-4 py-1.5 rounded-full text-xs font-semibold border-2 transition-all whitespace-nowrap ${
                                activeVeg === f.key
                                    ? "bg-orange-500 border-orange-500 text-white"
                                    : "bg-white border-stone-200 text-stone-500 hover:border-orange-300 hover:text-orange-500"
                            }`}
                        >
                            {f.label}
                        </button>
                    ))}

                    <div className="w-px bg-stone-200 mx-1 self-stretch" />

                    {cityFilters.map((f) => (
                        <button
                            key={f.key}
                            onClick={() => handleCityFilter(f.key)}
                            className={`flex-shrink-0 px-3 md:px-4 py-1.5 rounded-full text-xs font-semibold border-2 transition-all whitespace-nowrap ${
                                activeCity === f.key
                                    ? "bg-orange-500 border-orange-500 text-white"
                                    : "bg-white border-stone-200 text-stone-500 hover:border-orange-300 hover:text-orange-500"
                            }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    {loading && (
                        <p className="text-center text-stone-400 col-span-full mt-10">
                            Loading messes...
                        </p>
                    )}

                    {error && (
                        <p className="text-center text-red-400 col-span-full mt-10">
                            {error}
                        </p>
                    )}

                    {!loading &&
                        mess.map((item) => {
                            const type = item.vegNonveg || "both";
                            const badge = badgeMap[type] || badgeMap.both;
                            const bg = bgMap[type] || bgMap.both;
                            const emoji = emojiMap[type] || "🍱";

                            return (
                                <div
                                    key={item._id}
                                    onClick={() =>
                                        navigate(`/mess/${item._id}`)
                                    }
                                    className="bg-white rounded-2xl border border-stone-100 overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-100 transition-all duration-200 shadow-sm"
                                >
                                    {/* Image area */}
                                    <div
                                        className={`relative h-36 md:h-40 bg-gradient-to-br ${bg} flex items-center justify-center overflow-hidden`}
                                    >
                                        <img
                                            src={
                                                Array.isArray(item.images)
                                                    ? item.images[0]
                                                    : item.images
                                            }
                                            alt={item.name || "product image"}
                                            className="w-full h-full object-cover"
                                        />

                                        <div
                                            className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${badge.bg}`}
                                        >
                                            {badge.label}
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <h3
                                            className="font-bold text-stone-800 text-base mb-1 truncate"
                                            style={{
                                                fontFamily: "Sora, sans-serif",
                                            }}
                                        >
                                            {item.messName}
                                        </h3>

                                        <p className="text-xs text-stone-400 truncate mb-3">
                                            📍 {item.address}, {item.city}
                                        </p>

                                        {item.description && (
                                            <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed mb-3">
                                                {item.description}
                                            </p>
                                        )}

                                        <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                                            <div className="text-sm">
                                                <span className="font-bold text-stone-800">
                                                    ₹{item.price}
                                                </span>
                                                <span className="text-stone-400 text-xs">
                                                    {" "}
                                                    /month
                                                </span>
                                            </div>
                                            <div className="text-xs text-stone-500 bg-amber-50 px-2.5 py-1 rounded-lg truncate max-w-[110px] md:max-w-[130px]">
                                                {item.owner?.name || "N/A"}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    {!loading && mess.length === 0 && (
                        <div className="col-span-full mt-16 text-center">
                            <p className="text-4xl mb-3">🍽️</p>
                            <p className="text-stone-400 font-medium">
                                No mess found nearby
                            </p>
                            <p className="text-stone-300 text-sm mt-1">
                                Try adjusting your filters
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
