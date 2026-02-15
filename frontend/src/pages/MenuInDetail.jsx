import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const MenuInDetail = () => {
    const navigate=useNavigate()
    const [menu, setMenu] = useState([]);
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
        }
    };

    useEffect(() => {
        fetchMenu();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 ">
            <NavBar />

            <div className="max-w-4xl mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    🍽️ Today’s Menu
                </h1>

                {menu.length === 0 && (
                    <div className="bg-white p-6 rounded-xl shadow text-center text-gray-600">
                        Menu not available for today.
                    </div>
                )}

                {menu.map((item) => (
                    <div
                        key={item._id}
                        className="bg-white rounded-2xl shadow-lg p-6 mb-6 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-semibold text-gray-800">
                                {item.day}
                            </h2>
                            <span className="text-sm bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full">
                                Active Menu
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div className="border rounded-xl p-5 bg-gray-50 hover:bg-gray-100 transition">
                                <h3 className="font-semibold text-gray-700 mb-2">
                                    Breakfast
                                </h3>
                                <p className="text-gray-600">
                                    {item.breakfast}
                                </p>
                            </div>

                            <div className="border rounded-xl p-5 bg-gray-50 hover:bg-gray-100 transition">
                                <h3 className="font-semibold text-gray-700 mb-2">
                                    Lunch
                                </h3>
                                <p className="text-gray-600">{item.lunch}</p>
                            </div>

                            <div className="border rounded-xl p-5 bg-gray-50 hover:bg-gray-100 transition">
                                <h3 className="font-semibold text-gray-700 mb-2">
                                    Dinner
                                </h3>
                                <p className="text-gray-600">{item.dinner}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <button
                    className="mt-4 ms-4 bg--600 text-white py-2 md:py-3 rounded-md hover:bg--700 transition w-30 md:w-40"
                    onClick={() => navigate(`/mess/${id}`)}
                    style={{
                        color: "white",
                        backgroundColor: "#AD343E",
                    }}
                >
                    Go Back
                </button>
            </div>

            <Footer />
        </div>
    );
};

export default MenuInDetail;
