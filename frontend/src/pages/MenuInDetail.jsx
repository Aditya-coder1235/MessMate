import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const MEAL_CONFIG = {
    breakfast: {
        label: "Breakfast",
        time: "7:30 AM",
        badgeBg: "bg-green-100",
        badgeText: "text-green-700",
        icon: "🌅",
    },
    lunch: {
        label: "Lunch",
        time: "12:30 PM",
        badgeBg: "bg-orange-100",
        badgeText: "text-orange-700",
        icon: "☀️",
    },
    dinner: {
        label: "Dinner",
        time: "8:00 PM",
        badgeBg: "bg-indigo-100",
        badgeText: "text-indigo-700",
        icon: "🌙",
    },
};

const MealCard = ({ type, content }) => {
    const config = MEAL_CONFIG[type];
    if (!config) return null;

    return (
        <div className="bg-white rounded-2xl border border-stone-100 overflow-hidden shadow-sm">
            {/* Meal header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-stone-100">
                <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${config.badgeBg} ${config.badgeText}`}
                >
                    {config.time} · {config.label}
                </span>
                <h3 className="font-bold text-stone-800 text-sm flex-1">
                    {config.icon} {config.label} Thali
                </h3>
            </div>

            {/* Items */}
            <div className="px-5 py-3">
                {content ? (
                    <p className="text-sm text-stone-600 leading-relaxed">
                        {content}
                    </p>
                ) : (
                    <p className="text-sm text-stone-400 italic">
                        Not specified
                    </p>
                )}
            </div>
        </div>
    );
};

const MenuInDetail = () => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const fetchMenu = async () => {
        try {
            const res = await axios.get(
                `https://messmate-backend-r94e.onrender.com/api/menu/getMenuForTheirMess/${id}`,
                { withCredentials: true },
            );
            setMenu(res.data.menu);
        } catch (error) {
            console.error(error.response?.data?.message || error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMenu();
    }, []);

    return (
        <div className="min-h-screen bg-amber-50">
            <NavBar />

            <div className="max-w-2xl mx-auto px-4 py-8 space-y-5">
                <div className="text-center mb-2">
                    <h1
                        className="text-2xl font-bold text-stone-800"
                        style={{ fontFamily: "Sora, sans-serif" }}
                    >
                        Weekly Menu
                    </h1>
                    <p className="text-sm text-stone-400 mt-1">
                        Full week's thali schedule
                    </p>
                </div>

                {loading && (
                    <div className="bg-white rounded-2xl border border-stone-100 p-8 text-center shadow-sm">
                        <div className="text-orange-400 text-2xl mb-2 animate-pulse">
                            🍽️
                        </div>
                        <p className="text-stone-500 text-sm">
                            Loading menu...
                        </p>
                    </div>
                )}

                {!loading && menu.length === 0 && (
                    <div className="bg-white rounded-2xl border border-stone-100 p-8 text-center shadow-sm">
                        <div className="text-4xl mb-3">🍽️</div>
                        <p className="text-stone-600 font-semibold text-sm">
                            No menu available
                        </p>
                        <p className="text-stone-400 text-xs mt-1">
                            The mess hasn't added a menu yet.
                        </p>
                    </div>
                )}

                {menu.map((item) => (
                    <div
                        key={item._id}
                        className="bg-white rounded-2xl border border-stone-100 overflow-hidden shadow-sm"
                    >
                        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100 bg-amber-50">
                            <h2
                                className="font-bold text-stone-800 text-base"
                                style={{ fontFamily: "Sora, sans-serif" }}
                            >
                                {item.day}
                            </h2>
                            <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
                                Active
                            </span>
                        </div>

                        <div className="p-4 space-y-3">
                            <MealCard
                                type="breakfast"
                                content={item.breakfast}
                            />
                            <MealCard type="lunch" content={item.lunch} />
                            <MealCard type="dinner" content={item.dinner} />
                        </div>
                    </div>
                ))}

                {!loading && (
                    <div className="pt-2">
                        <button
                            onClick={() => navigate(`/mess/${id}`)}
                            className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-sm transition-all"
                            style={{ fontFamily: "Sora, sans-serif" }}
                        >
                            ← Back to Mess
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuInDetail;
