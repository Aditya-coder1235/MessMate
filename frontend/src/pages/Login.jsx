import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Logo } from "../components/Navbar";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const loginUser = async () => {
        try {
            setLoading(true);
            const res = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/auth/login`,
                formData,
                { withCredentials: true },
            );
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userId", res.data.user._id);
            localStorage.setItem("role", res.data.user.role);
            localStorage.setItem("name", res.data.user.name);

            toast.success("Login successfully!");
            setTimeout(() => {
                navigate("/home");
            }, 1500);
        } catch (error) {
            console.error(error.response?.data.message || error.message);
            setError(error.response?.data.message);
            toast.error(error.response?.data.message);
        } finally {
            setLoading(false);
        }
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 py-12"
            style={{ background: "linear-gradient(135deg, #FDF8F2 0%, #FFF0E9 100%)" }}
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
                    Welcome back
                </h2>
                <p className="text-stone-400 text-sm mb-7">
                    Log in to find your daily meal.
                </p>

                <div className="mb-4">
                    <label className="block text-xs font-semibold text-stone-500 mb-1.5">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="ravi@example.com"
                        value={formData.email}
                        onChange={handleOnChange}
                        className="w-full border-2 border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-800 outline-none focus:border-orange-400 transition-colors placeholder:text-stone-300"
                    />
                </div>

                <div className="mb-1">
                    <label className="block text-xs font-semibold text-stone-500 mb-1.5">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Your password"
                        value={formData.password}
                        onChange={handleOnChange}
                        className="w-full border-2 border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-800 outline-none focus:border-orange-400 transition-colors placeholder:text-stone-300"
                    />
                </div>

                <div className="text-right mb-6">
                    {/* <span className="text-xs text-orange-500 cursor-pointer hover:underline">
                        Forgot password?
                    </span> */}
                </div>

                {error && (
                    <p className="text-red-500 text-sm mb-3">{error}</p>
                )}

                <button
                    onClick={loginUser}
                    className="w-full py-3.5 bg-orange-500 text-white rounded-xl font-semibold text-base hover:bg-orange-600 transition-all shadow-lg shadow-orange-100"
                >
                    {loading ? (
                        <span className="loading loading-spinner loading-sm"></span>
                    ) : (
                        "Log In"
                    )}
                </button>

                <p className="text-center mt-5 text-sm text-stone-400">
                    New to MessMate?{" "}
                    <Link
                        to="/signup"
                        className="text-orange-500 font-semibold cursor-pointer hover:underline"
                    >
                        Sign up free
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
