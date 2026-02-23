import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {
    fetchAllMess,
    searchMess,
    filterForVegNonVeg,
    filterByCity,
} from "../features/messSlice";
import { Phone } from "lucide-react";

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { mess, loading, error } = useSelector((state) => state.mess);

    const [input, setInput] = useState("");
    const [foodType, setFoodType] = useState("all");
    const [city, setCity] = useState("all");

    useEffect(() => {
        dispatch(fetchAllMess());
    }, [dispatch]);

    const handleSearchChange = (e) => {
        setInput(e.target.value);
        dispatch(searchMess(e.target.value));
    };

    const handleVegChange = (e) => {
        setFoodType(e.target.value);
        dispatch(filterForVegNonVeg(e.target.value));
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
        dispatch(filterByCity(e.target.value));
    };

    const role = localStorage.getItem("role");
    // console.log(role);

    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar />

            <div className="max-w-6xl mx-auto px-2 py-5 md:px-4 md:py-8 flex flex-col lg:flex-row gap-6">
                <div
                    className={`fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 z-40
         md:translate-x-0 md:static md:shadow-none w-70 md:w-68 p-6 space-y-6 rounded-s-2xl hidden md:block`}
                >
                    <div className="text-xl font-bold text--700 mb-8 hidden md:block">
                        Mess Manager
                    </div>

                    <div className="flex flex-col space-y-3">
                        <Link
                            to={"/home"}
                            className="text-gray-700 hover:text-red-700 font-medium rounded-md px-3 py-2 transition-colors"
                        >
                            Dashboard
                        </Link>

                        <Link
                            to="/about"
                            className="text-gray-700 hover:text-red-700 font-medium rounded-md px-3 py-2 transition-colors"
                        >
                            About us
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-700 hover:text-red-700 font-medium rounded-md px-3 py-2 transition-colors"
                        >
                            Contact Us
                        </Link>
                        <Link
                            to={"/services"}
                            className="text-gray-700 hover:text-red-700 font-medium rounded-md px-3 py-2 transition-colors"
                        >
                            Services
                        </Link>
                    </div>

                    <hr className="my-4" />

                    <div className="flex flex-col space-y-4">
                        <input
                            type="text"
                            placeholder="Search by mess name..."
                            value={input}
                            onChange={handleSearchChange}
                            className="w-full px-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-red-700 outline-none"
                        />

                        <select
                            value={foodType}
                            onChange={handleVegChange}
                            className="w-full px-3 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-red-700 outline-none cursor-pointer"
                        >
                            <option value="all">All</option>
                            <option value="veg">Veg</option>
                            <option value="nonveg">Non-Veg</option>
                            <option value="both">Veg & Non-Veg</option>
                        </select>

                        <select
                            value={city}
                            onChange={handleCityChange}
                            className="w-full px-3 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-red-700 outline-none cursor-pointer"
                        >
                            <option value="all">All</option>
                            <option value="Pune">Pune</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Ahilyanagar">Ahilyanagar</option>
                        </select>
                    </div>
                </div>

                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {loading && (
                        <p className="text-center text-gray-500 col-span-full">
                            Loading messes...
                        </p>
                    )}

                    {error && (
                        <p className="text-center text-red-500 col-span-full">
                            {error}
                        </p>
                    )}

                    {!loading &&
                        mess.map((item) => (
                            <div
                                key={item._id}
                                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer h-77"
                                onClick={() => navigate(`/mess/${item._id}`)}
                            >
                                <div className="p-5 border-b flex justify-between items-center">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {item.messName}
                                    </h3>

                                    <span
                                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                                            item.vegNonveg === "veg"
                                                ? "bg-green-100 text-green-700"
                                                : item.vegNonveg === "nonveg"
                                                  ? "bg-red-100 text-red-700"
                                                  : "bg-yellow-100 text-yellow-700"
                                        }`}
                                    >
                                        {item.vegNonveg === "both"
                                            ? "Veg & Non-Veg"
                                            : item.vegNonveg.toUpperCase()}
                                    </span>
                                </div>

                                <div className="p-5 space-y-3">
                                    <p className="text-sm text-gray-700 font-medium">
                                        ₹ {item.price}{" "}
                                        <span className="text-gray-500">
                                            / month
                                        </span>
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        {item.address}, {item.city}
                                    </p>

                                    {item.description && (
                                        <p className="text-sm text-gray-500 line-clamp-2">
                                            {item.description}
                                        </p>
                                    )}

                                    <div className="mt-4 bg-gray-50 rounded-lg p-3">
                                        <p className="text-sm font-semibold text-gray-700">
                                            Owner Details
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {item.owner?.name || "N/A"}
                                        </p>
                                        <p className="text-sm text-gray-600 flex items-center gap-2 pt-1">
                                            <Phone size={13} />{" "}
                                            {item.owner?.phone || "Hidden"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    {!loading && mess.length === 0 && (
                        <p className="text-center text-gray-500 col-span-full mt-10">
                            No mess found nearby
                        </p>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Dashboard;
