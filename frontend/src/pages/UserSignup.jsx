import React, { useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { Logo } from "../components/Navbar";

const UserSignup = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState("user");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        city: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const createUser = async () => {
        try {
            setLoading(true);
            await axios.post(
                `${import.meta.env.VITE_API_URL}/api/auth/signup`,
                { ...formData, role },
                { withCredentials: true },
            );
            toast.success("Register successfully!");
            setTimeout(() => {
                navigate("/login");
            }, 1500);
        } catch (error) {
            console.error(error.response);
            setError(error.response?.data.message);
            toast.error(error.response?.data.message);
        } finally {
            setLoading(false);
        }
    };

    const handleOnSubmit = () => {
        createUser();
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 py-12"
            style={{
                background: "linear-gradient(135deg, #FDF8F2 0%, #FFF0E9 100%)",
            }}
        >
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="bg-white rounded-2xl p-10 w-full max-w-md border border-stone-100 shadow-xl shadow-stone-100">
                <div className="mb-7">
                    <Logo onClick={() => navigate("/")} />
                </div>

                <h2
                    className="text-2xl font-bold text-stone-900 mb-1"
                    style={{ fontFamily: "Sora, sans-serif" }}
                >
                    Create your account
                </h2>
                <p className="text-stone-400 text-sm mb-7">
                    Join MessMate and never miss a good meal again.
                </p>

                <p className="text-xs font-semibold text-stone-500 mb-2.5">
                    I want to
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                        {
                            key: "user",
                            icon: "🍽️",
                            title: "Find a Mess",
                            sub: "Browse & discover",
                        },
                        {
                            key: "owner",
                            icon: "🏠",
                            title: "Own a Mess",
                            sub: "List & manage",
                        },
                    ].map((r) => (
                        <button
                            key={r.key}
                            onClick={() => setRole(r.key)}
                            className={`border-2 rounded-xl p-4 text-center cursor-pointer transition-all ${
                                role === r.key
                                    ? "border-orange-400 bg-orange-50"
                                    : "border-stone-200 bg-stone-50 hover:border-orange-200"
                            }`}
                        >
                            <div className="text-2xl mb-1.5">{r.icon}</div>
                            <div className="font-semibold text-stone-800 text-sm">
                                {r.title}
                            </div>
                            <div className="text-xs text-stone-400 mt-0.5">
                                {r.sub}
                            </div>
                        </button>
                    ))}
                </div>

                {[
                    {
                        label: "Full Name",
                        key: "name",
                        type: "text",
                        placeholder: "Ravi Sharma",
                    },
                    {
                        label: "Email Address",
                        key: "email",
                        type: "email",
                        placeholder: "ravi@example.com",
                    },
                    {
                        label: "Phone Number",
                        key: "phone",
                        type: "tel",
                        placeholder: "+91 98765 43210",
                    },
                    {
                        label: "Password",
                        key: "password",
                        type: "password",
                        placeholder: "Create a password",
                    },
                    {
                        label: "Address",
                        key: "address",
                        type: "text",
                        placeholder: "123, MG Road",
                    },
                    {
                        label: "City",
                        key: "city",
                        type: "text",
                        placeholder: "Mumbai",
                    },
                ].map((f) => (
                    <div key={f.key} className="mb-4">
                        <label className="block text-xs font-semibold text-stone-500 mb-1.5">
                            {f.label}
                        </label>
                        <input
                            type={f.type}
                            name={f.key}
                            placeholder={f.placeholder}
                            value={formData[f.key]}
                            onChange={handleOnChange}
                            className="w-full border-2 border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-800 outline-none focus:border-orange-400 transition-colors placeholder:text-stone-300"
                        />
                    </div>
                ))}

                {error && (
                    <p className="text-red-500 text-sm mb-3">{error}</p>
                )}

                <button
                    onClick={handleOnSubmit}
                    className="w-full mt-2 py-3.5 bg-orange-500 text-white rounded-xl font-semibold text-base hover:bg-orange-600 transition-all shadow-lg shadow-orange-100"
                >
                    {loading ? (
                        <span className="loading loading-spinner loading-sm"></span>
                    ) : (
                        "Create Account"
                    )}
                </button>

                <p className="text-center mt-5 text-sm text-stone-400">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-orange-500 font-semibold cursor-pointer hover:underline"
                    >
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default UserSignup;
