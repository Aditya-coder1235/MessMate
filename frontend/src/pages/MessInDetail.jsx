import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import NavBar from "../components/NavBar";
import { toast, ToastContainer } from "react-toastify";

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

function StarRow({ count, size = "text-lg" }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
                <span
                    key={i}
                    className={`${size} ${i <= count ? "text-amber-400" : "text-stone-200"}`}
                >
                    ★
                </span>
            ))}
        </div>
    );
}

const MessInDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [mess, setMess] = useState(null);
    const [reviews, setReviews] = useState([]);

    const userId = localStorage.getItem("userId");

    const [formData, setFormData] = useState({
        rating: "",
        comment: "",
        mess: id,
    });

    const fetchAllReviews = async () => {
        try {
            const res = await axios.get(
                `https://messmate-backend-r94e.onrender.com/api/review/getReview/${id}`,
                { withCredentials: true },
            );
            setReviews(res.data.reviews);
        } catch (error) {
            console.error(error.response?.data.message || error.message);
        }
    };

    const deleteReview = async (reviewId) => {
        try {
            const res = await axios.delete(
                `${import.meta.env.VITE_API_URL}/api/review/delete/${reviewId}`,
                { withCredentials: true },
            );
            console.log(res.data);
            fetchAllReviews();
        } catch (error) {
            console.error(error.response?.data.message || error.message);
        }
    };

    const fetchById = async () => {
        try {
            const res = await axios.get(
                `https://messmate-backend-r94e.onrender.com/api/mess/getById/${id}`,
                { withCredentials: true },
            );
            setMess(res.data.Mess);
        } catch (error) {
            console.error(error.response?.data.message || error.message);
        }
    };

    useEffect(() => {
        fetchById();
        fetchAllReviews();
    }, [id]);

    const createReviews = async () => {
        if (!formData.rating || !formData.comment.trim()) {
            alert("Please enter rating and comment");
            return;
        }
        try {
            await axios.post(
                `${import.meta.env.VITE_API_URL}/api/review/create`,
                formData,
                { withCredentials: true },
            );
            setFormData({ rating: "", comment: "", mess: id });
            fetchAllReviews();
            toast.success("Review uploaded!");
            setTimeout(() => {
                console.log()
            }, 1500);
        } catch (error) {
            console.error(error.response?.data.message || error.message);
        }
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === "rating" ? Number(value) : value,
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        createReviews();
    };

    if (!mess) {
        return (
            <div className="min-h-screen bg-amber-50 flex items-center justify-center">
                <p className="text-stone-400 text-sm">Loading mess details…</p>
            </div>
        );
    }

    const type = mess.vegNonveg || "both";
    const bg = bgMap[type] || bgMap.both;
    const emoji = emojiMap[type] || "🍱";

    return (
        <div className="min-h-screen bg-amber-50">
            <NavBar />
            <ToastContainer position="top-right" autoClose={3000} />

            <div className="bg-white border-b border-stone-100">
                {mess.images ? (
                    <div className="h-56 md:h-64 w-full overflow-hidden">
                        <img
                            src={mess.images}
                            alt={mess.messName}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                                e.target.style.display = "none";
                                e.target.parentElement.classList.add(
                                    "bg-gradient-to-br",
                                    ...bg.split(" "),
                                    "flex",
                                    "items-center",
                                    "justify-center",
                                    "text-8xl",
                                );
                                e.target.parentElement.textContent = emoji;
                            }}
                        />
                    </div>
                ) : (
                    <div
                        className={`h-56 md:h-64 bg-gradient-to-br ${bg} flex items-center justify-center text-8xl`}
                    >
                        {emoji}
                    </div>
                )}

                <div className="flex flex-wrap items-start gap-4 md:gap-6 px-4 md:px-8 py-5">
                    <div className="flex-1 min-w-0">
                        <h1
                            className="text-xl md:text-2xl font-bold text-stone-900 mb-1"
                            style={{ fontFamily: "Sora, sans-serif" }}
                        >
                            {mess.messName}
                        </h1>
                        <div className="text-sm text-stone-400 mb-3">
                            📍 {mess.address}, {mess.city}
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {[
                                type === "veg"
                                    ? "🥗 Veg Only"
                                    : type === "nonveg"
                                      ? "🔴 Non-Veg"
                                      : "🔵 Veg + Non-Veg",
                                `💰 ₹${mess.price}/month`,
                                "🏠 Home Style",
                            ].map((c) => (
                                <span
                                    key={c}
                                    className="text-xs font-medium px-3 py-1 rounded-full border border-stone-200 text-stone-500 bg-amber-50"
                                >
                                    {c}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-6 flex-shrink-0">
                        {[
                            {
                                val: reviews.length,
                                label: "Reviews",
                                color: "text-stone-800",
                            },
                            {
                                val: "Active",
                                label: "Status",
                                color: "text-green-600",
                            },
                        ].map((s) => (
                            <div key={s.label} className="text-center">
                                <div
                                    className={`text-xl font-bold ${s.color}`}
                                    style={{ fontFamily: "Sora, sans-serif" }}
                                >
                                    {s.val}
                                </div>
                                <div className="text-xs text-stone-400">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 md:px-6 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-5">
                    {mess.description && (
                        <div className="bg-white rounded-2xl border border-stone-100 p-5 shadow-sm">
                            <h3
                                className="font-bold text-stone-800 mb-3"
                                style={{ fontFamily: "Sora, sans-serif" }}
                            >
                                ℹ️ About this Mess
                            </h3>
                            <p className="text-sm text-stone-500 leading-relaxed">
                                {mess.description}
                            </p>
                        </div>
                    )}

                    {/* Owner */}
                    {mess.owner && (
                        <div className="bg-white rounded-2xl border border-stone-100 p-5 shadow-sm">
                            <h3
                                className="font-bold text-stone-800 mb-4"
                                style={{ fontFamily: "Sora, sans-serif" }}
                            >
                                👤 Mess Owner
                            </h3>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xl font-bold flex-shrink-0">
                                    {mess.owner.name?.[0]?.toUpperCase()}
                                </div>
                                <div>
                                    <div className="font-bold text-stone-800">
                                        {mess.owner.name}
                                    </div>
                                    <div className="text-sm text-stone-400 mt-0.5">
                                        {mess.owner.email}
                                    </div>
                                    <div className="text-sm text-stone-400">
                                        {mess.owner.phone}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="bg-white rounded-2xl border border-stone-100 p-5 shadow-sm">
                        <h3
                            className="font-bold text-stone-800 mb-4"
                            style={{ fontFamily: "Sora, sans-serif" }}
                        >
                            📋 Mess Details
                        </h3>
                        <div className="space-y-0">
                            {[
                                {
                                    icon: "📍",
                                    label: "Address",
                                    val: `${mess.address}, ${mess.city}`,
                                },
                                {
                                    icon: "💰",
                                    label: "Price",
                                    val: `₹${mess.price} / month`,
                                },
                                {
                                    icon: "🍽️",
                                    label: "Type",
                                    val:
                                        type === "both"
                                            ? "Veg & Non-Veg"
                                            : type === "veg"
                                              ? "Veg Only"
                                              : "Non-Veg Only",
                                },
                            ].map((row, i, arr) => (
                                <div
                                    key={row.label}
                                    className={`flex gap-3 py-3 text-sm ${i < arr.length - 1 ? "border-b border-stone-100" : ""}`}
                                >
                                    <span className="w-5 flex-shrink-0 text-orange-400">
                                        {row.icon}
                                    </span>
                                    <span className="text-stone-400 w-20 flex-shrink-0">
                                        {row.label}
                                    </span>
                                    <span className="text-stone-700 font-medium">
                                        {row.val}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Reviews */}
                    <div className="bg-white rounded-2xl border border-stone-100 p-5 shadow-sm">
                        <h3
                            className="font-bold text-stone-800 mb-4"
                            style={{ fontFamily: "Sora, sans-serif" }}
                        >
                            ⭐ Reviews
                        </h3>

                        <div className="space-y-0">
                            {reviews.length === 0 ? (
                                <p className="text-stone-400 text-sm text-center py-6">
                                    No reviews yet. Be the first to review!
                                </p>
                            ) : (
                                reviews.map((review, i) => (
                                    <div
                                        key={review._id}
                                        className={`py-4 ${i < reviews.length - 1 ? "border-b border-stone-100" : ""}`}
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-full bg-stone-100 text-stone-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                                                {review.user?.name?.[0]?.toUpperCase() ||
                                                    "U"}
                                            </div>
                                            <span className="font-semibold text-stone-800 text-sm">
                                                {review.user?.name ||
                                                    "Anonymous"}
                                            </span>
                                            <div className="ml-auto">
                                                <StarRow
                                                    count={review.rating}
                                                    size="text-sm"
                                                />
                                            </div>
                                        </div>
                                        <p className="text-sm text-stone-500 leading-relaxed">
                                            {review.comment}
                                        </p>
                                        <div className="flex items-center justify-between mt-1.5">
                                            <p className="text-xs text-stone-300">
                                                {new Date(
                                                    review.createdAt,
                                                ).toLocaleDateString()}
                                            </p>
                                            {userId === review.user?._id && (
                                                <button
                                                    onClick={() =>
                                                        deleteReview(review._id)
                                                    }
                                                    className="text-xs text-red-400 hover:text-red-600 font-medium transition-colors"
                                                >
                                                    Delete
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <form className="mt-4 pt-4 border-t border-stone-100">
                            <h4 className="font-semibold text-stone-700 text-sm mb-3">
                                Add your review
                            </h4>
                            <div className="flex gap-1 mb-3">
                                <input
                                    type="number"
                                    name="rating"
                                    placeholder="Enter your rating bet 1 to 5"
                                    value={formData.rating}
                                    onChange={handleOnChange}
                                    min={1}
                                    max={5}
                                    required
                                    className="w-70  border-2 border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:border-orange-400 transition-colors resize-none placeholder:text-stone-300"
                                />
                            </div>
                            <textarea
                                name="comment"
                                value={formData.comment}
                                onChange={handleOnChange}
                                placeholder="Share your experience with this mess…"
                                className="w-full border-2 border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 outline-none focus:border-orange-400 transition-colors resize-none placeholder:text-stone-300"
                            />
                            <button
                                type="submit"
                                onClick={handleOnSubmit} // this is fine, but remove e.preventDefault() since there's no form
                                className="w-full mt-2 py-3 bg-orange-500 ... rounded-2xl"
                            >
                                Post Review
                            </button>
                        </form>
                    </div>
                </div>

                <div>
                    <div className="bg-white rounded-2xl border border-stone-100 p-5 shadow-sm sticky top-6 lg:top-24">
                        <h3
                            className="font-bold text-stone-800 mb-4"
                            style={{ fontFamily: "Sora, sans-serif" }}
                        >
                            📞 Get in touch
                        </h3>
                        <div className="space-y-3">
                            <a
                                href={`tel:${mess.owner?.phone}`}
                                className="block"
                            >
                                <button
                                    className="w-full py-3.5 bg-green-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all"
                                    style={{ fontFamily: "Sora, sans-serif" }}
                                >
                                    📞 Call Mess Owner
                                </button>
                            </a>
                            <button
                                onClick={() =>
                                    navigate(`/menuInDetail/${mess._id}`)
                                }
                                className="w-full py-3.5 bg-orange-50 text-orange-500 border-2 border-orange-400 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-white transition-all"
                                style={{ fontFamily: "Sora, sans-serif" }}
                            >
                                📋 View Today's Menu
                            </button>
                        </div>

                        <div className="mt-4 pt-4 border-t border-stone-100">
                            <div className="space-y-0">
                                {[
                                    {
                                        icon: "👤",
                                        label: "Owner",
                                        val: mess.owner?.name || "N/A",
                                    },
                                    {
                                        icon: "📧",
                                        label: "Email",
                                        val: mess.owner?.email || "N/A",
                                    },
                                    {
                                        icon: "📞",
                                        label: "Phone",
                                        val: mess.owner?.phone || "N/A",
                                    },
                                ].map((row, i, arr) => (
                                    <div
                                        key={row.label}
                                        className={`flex gap-3 py-2.5 text-xs ${i < arr.length - 1 ? "border-b border-stone-100" : ""}`}
                                    >
                                        <span className="text-orange-400">
                                            {row.icon}
                                        </span>
                                        <span className="text-stone-400 w-12 flex-shrink-0">
                                            {row.label}
                                        </span>
                                        <span className="text-stone-600 font-medium truncate">
                                            {row.val}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessInDetail;
