import React from "react";
import { useNavigate } from "react-router";

const Logo = ({ onClick }) => (
    <div
        onClick={onClick}
        className="flex items-center gap-2 cursor-pointer select-none"
    >
        <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 28 28" fill="none" className="w-5 h-5">
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
);

export default function NavBar({ page, onNavigate, user }) {
    const navigate=useNavigate()
    return (
        <nav className="bg-white border-b border-stone-100 sticky top-0 z-50 h-16 flex items-center px-6 justify-between shadow-sm">
            <Logo onClick={() => navigate("/home")} />

            <div className="flex items-center gap-3">
                {page === "landing" && (
                    <>
                        <button
                            onClick={() => navigate("/login")}
                            className="px-4 py-2 rounded-lg border border-stone-200 text-stone-600 text-sm font-medium hover:border-orange-400 hover:text-orange-500 transition-all"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => navigate("/signup")}
                            className="px-4 py-2 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-all"
                        >
                            Sign Up Free
                        </button>
                    </>
                )}

                {page === "main" && user && (
                    <>
                        <span className="text-sm text-stone-400">
                            Hello,{" "}
                            <span className="font-semibold text-stone-700">
                                {user.name}
                            </span>
                        </span>
                        <div className="w-9 h-9 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">
                            {user.name[0].toUpperCase()}
                        </div>
                    </>
                )}

                {page === "detail" && (
                    <button
                        onClick={() => onNavigate("main")}
                        className="flex items-center gap-1 text-sm text-stone-500 hover:text-orange-500 transition-colors font-medium"
                    >
                        ← Back to all messes
                    </button>
                )}

                {page === "menu" && (
                    <button
                        onClick={() => onNavigate("detail")}
                        className="flex items-center gap-1 text-sm text-stone-500 hover:text-orange-500 transition-colors font-medium"
                    >
                        ← Back to mess
                    </button>
                )}
            </div>
        </nav>
    );
}

export { Logo };
