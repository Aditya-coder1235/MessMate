import React from "react";
import Navbar from "../components/NavBar";
import { useNavigate } from "react-router";

const previewMesses = [
    {
        emoji: "🥗",
        name: "Shree Krishna Tiffin",
        area: "Andheri West",
        type: "Veg only",
        rating: 4.8,
    },
    {
        emoji: "🍖",
        name: "Mama's Kitchen",
        area: "Bandra",
        type: "Veg + Non-veg",
        rating: 4.6,
    },
    {
        emoji: "🫘",
        name: "Ghar Ka Khana",
        area: "Dadar",
        type: "Veg only",
        rating: 4.9,
    },
];

const stats = [
    { value: "1,200+", label: "Messes Listed" },
    { value: "18K+", label: "Happy Members" },
    { value: "40+", label: "Areas Covered" },
];

const howSteps = [
    {
        num: "01",
        title: "Sign up & set your role",
        desc: "Join as a mess-seeker or as a mess owner. Each role gives you exactly what you need.",
    },
    {
        num: "02",
        title: "Discover or list your mess",
        desc: "Browse messes nearby or upload yours with photos, pricing, and location details.",
    },
    {
        num: "03",
        title: "Check menu & connect",
        desc: "View today's menu, call the owner directly, and leave a review after your meal.",
    },
];

const features = [
    {
        icon: "📅",
        title: "Daily menus",
        desc: "Updated every morning by owners",
    },
    { icon: "📞", title: "Direct calling", desc: "One tap to reach the owner" },
    {
        icon: "⭐",
        title: "Real reviews",
        desc: "Honest ratings from fellow eaters",
    },
    { icon: "🗺️", title: "Area filters", desc: "Find messes in your locality" },
    {
        icon: "🍃",
        title: "Veg / Non-veg",
        desc: "Filter by your food preference",
    },
    {
        icon: "💰",
        title: "Price filters",
        desc: "From budget to premium meals",
    },
];

const sampleMenu = [
    { name: "Dal Tadka", note: "Arhar dal" },
    { name: "Jeera Rice", note: "" },
    { name: "Aloo Gobi Sabzi", note: "" },
    { name: "Phulka × 4 + Salad", note: "" },
    { name: "Dahi (Curd)", note: "" },
];

export default function LandingPage({ onNavigate }) {
    const navigate=useNavigate()
    return (
        <div className="min-h-screen bg-amber-50">
            <Navbar page="landing" onNavigate={onNavigate} />

            <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
                        🍱 Daily Mess Discovery
                    </div>
                    <h1
                        className="text-5xl font-bold leading-tight text-stone-900 mb-5"
                        style={{ fontFamily: "Sora, sans-serif" }}
                    >
                        Find your{" "}
                        <span className="text-orange-500">perfect mess</span> —
                        every single day
                    </h1>
                    <p className="text-stone-500 text-lg mb-8 max-w-md leading-relaxed">
                        Browse home-style tiffin services and mess halls near
                        you. View daily menus, contact owners, and eat well
                        without the hassle.
                    </p>
                    <div className="flex gap-3 flex-wrap">
                        <button
                            onClick={() => navigate("/signup")}
                            className="px-8 py-4 bg-orange-500 text-white rounded-xl font-semibold text-base hover:bg-orange-600 transition-all shadow-lg shadow-orange-200"
                        >
                            Find a Mess Near You
                        </button>
                        <button
                            onClick={() => navigate("/signup")}
                            className="px-8 py-4 border-2 border-stone-200 text-stone-600 rounded-xl font-semibold text-base hover:border-orange-400 hover:text-orange-500 transition-all"
                        >
                            Register Your Mess
                        </button>
                    </div>

                    <div className="flex gap-8 mt-10 pt-10 border-t border-stone-200">
                        {stats.map((s) => (
                            <div key={s.label}>
                                <div
                                    className="text-2xl font-bold text-orange-500"
                                    style={{ fontFamily: "Sora, sans-serif" }}
                                >
                                    {s.value}
                                </div>
                                <div className="text-xs text-stone-400 mt-0.5">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-xl shadow-stone-100">
                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">
                        Nearby Messes
                    </p>
                    {previewMesses.map((m) => (
                        <div
                            key={m.name}
                            className="flex items-center gap-3 bg-amber-50 rounded-xl p-3 mb-2 border border-stone-100"
                        >
                            <div
                                className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${m.type.includes("Non") ? "bg-orange-50" : "bg-green-50"}`}
                            >
                                {m.emoji}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="font-semibold text-sm text-stone-800">
                                    {m.name}
                                </div>
                                <div className="text-xs text-stone-400 mt-0.5">
                                    📍 {m.area} · {m.type}
                                </div>
                            </div>
                            <div className="flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0">
                                ⭐ {m.rating}
                            </div>
                        </div>
                    ))}
                    <button
                        onClick={() => navigate("/signup")}
                        className="w-full mt-2 py-3 bg-orange-500 text-white rounded-xl font-semibold text-sm hover:bg-orange-600 transition-all"
                    >
                        View All Messes →
                    </button>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-2">
                        How it works
                    </div>
                    <h2
                        className="text-3xl font-bold text-stone-900 mb-3"
                        style={{ fontFamily: "Sora, sans-serif" }}
                    >
                        Simple for everyone
                    </h2>
                    <p className="text-stone-400 mb-12 max-w-lg">
                        Whether you're looking for a daily meal or running a
                        tiffin service, MessMate makes it easy.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {howSteps.map((s) => (
                            <div
                                key={s.num}
                                className="bg-white border border-stone-100 rounded-2xl p-7 shadow-sm"
                            >
                                <div
                                    className="text-4xl font-bold text-orange-100 mb-4"
                                    style={{ fontFamily: "Sora, sans-serif" }}
                                >
                                    {s.num}
                                </div>
                                <h3 className="font-semibold text-stone-800 mb-2">
                                    {s.title}
                                </h3>
                                <p className="text-stone-400 text-sm leading-relaxed">
                                    {s.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-2">
                        Features
                    </div>
                    <h2
                        className="text-3xl font-bold text-stone-900 mb-8"
                        style={{ fontFamily: "Sora, sans-serif" }}
                    >
                        Everything you need for your daily meal
                    </h2>
                    <div className="grid grid-cols-2 gap-5">
                        {features.map((f) => (
                            <div
                                key={f.title}
                                className="flex gap-3 items-start"
                            >
                                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-lg flex-shrink-0">
                                    {f.icon}
                                </div>
                                <div>
                                    <div className="font-semibold text-stone-800 text-sm">
                                        {f.title}
                                    </div>
                                    <div className="text-stone-400 text-xs mt-0.5">
                                        {f.desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-lg">
                    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-stone-100">
                        <div className="text-2xl">🍱</div>
                        <div>
                            <div className="font-semibold text-stone-800">
                                Today's Menu
                            </div>
                            <div className="text-xs text-stone-400">
                                Shree Krishna Tiffin · Mon
                            </div>
                        </div>
                        <div className="ml-auto bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                            Open Now
                        </div>
                    </div>
                    <div className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">
                        Lunch
                    </div>
                    {sampleMenu.map((item) => (
                        <div
                            key={item.name}
                            className="flex items-center gap-2.5 mb-2"
                        >
                            <div className="w-2 h-2 rounded-full bg-green-600 flex-shrink-0" />
                            <span className="text-sm text-stone-700">
                                {item.name}
                            </span>
                        </div>
                    ))}
                    <div className="flex justify-between items-center pt-4 mt-4 border-t border-stone-100">
                        <span className="text-xs text-stone-400">Per day</span>
                        <span className="text-xl font-bold text-orange-500">
                            ₹ 80
                        </span>
                    </div>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-6 mb-20">
                <div className="bg-orange-500 rounded-2xl p-14 text-center text-white">
                    <h2
                        className="text-3xl font-bold mb-3"
                        style={{ fontFamily: "Sora, sans-serif" }}
                    >
                        Ready to find your mess?
                    </h2>
                    <p className="text-orange-100 mb-8 text-lg">
                        Join thousands of people eating home-style meals every
                        day.
                    </p>
                    <div className="flex gap-3 justify-center flex-wrap">
                        <button
                            onClick={() => navigate("/signup")}
                            className="px-8 py-3.5 bg-white text-orange-500 rounded-xl font-semibold hover:bg-orange-50 transition-all"
                        >
                            Find a Mess
                        </button>
                        <button
                            onClick={() => navigate("/signup")}
                            className="px-8 py-3.5 border-2 border-white/50 text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
                        >
                            List Your Mess
                        </button>
                    </div>
                </div>
            </section>

            <footer className="bg-stone-900 text-stone-400 text-center py-6 text-sm">
                Made with ❤️ for daily meal-seekers ·{" "}
                <span className="text-orange-400">MessMate</span> © 2025
            </footer>
        </div>
    );
}
