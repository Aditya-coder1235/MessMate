import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const ManageMess = () => {
    const ownerId = localStorage.getItem("userId");
    const navigate = useNavigate();

    const [ownerMess, setOwnerMess] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchOwnerMess() {
        try {
            const res = await axios.get(
                `https://messmate-backend-r94e.onrender.com/api/mess/getOwnerMess/${ownerId}`,
                { withCredentials: true },
            );
            setOwnerMess(res.data.Mess);
            console.log(res.data)
        } catch (error) {
            console.error(error.response?.data?.message || error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchOwnerMess();
    }, []);
// console.log(ownerMess)
   
    async function delteMess(id) {
        try {
            const res = await axios.delete(
                `https://messmate-backend-r94e.onrender.com/api/mess/delete/${id}`,
                { withCredentials: true },
            );
            alert("Mess Deleted Successfully")
            navigate('/home')
        } catch (error) {
            console.error(error.response?.data?.message || error.message);
        } 
    }

    async function deleteMenu(id) {
        try {
            const res = await axios.delete(
                `https://messmate-backend-r94e.onrender.com/api/menu/delete/${id}`,
                { withCredentials: true },
            );
            alert("Menu Deleted Successfully");
            // navigate("/home");
        } catch (error) {
            console.error(error.response?.data?.message || error.message);
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 pt-20 ">
            <NavBar />

            <div className="max-w-5xl mx-auto px-4 pb-20">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">
                    Manage Your Mess
                </h1>

                {loading && (
                    <div className="text-center text-gray-600">Loading...</div>
                )}

                {!loading && !ownerMess && (
                    <div className="bg-white p-6 rounded-xl shadow text-center">
                        <p className="text-gray-600 mb-4">
                            You haven’t added your mess yet.
                        </p>
                        <button
                            onClick={() => navigate("/createMess")}
                            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
                        >
                            Upload Mess
                        </button>
                    </div>
                )}

                {ownerMess && (
                    <div className="bg-white rounded-xl shadow-md p-6 ">
                        <div className="flex flex-col md:flex-row md:justify-between gap-6 ">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">
                                    {ownerMess.messName}
                                </h2>

                                <p className="text-gray-600 mt-1">
                                    {ownerMess.address}, {ownerMess.city}
                                </p>

                                <span className="inline-block mt-2 px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                                    {ownerMess.vegNonveg === "both"
                                        ? "Veg&NonVeg"
                                        : ownerMess.vegNonveg}
                                </span>

                                <p className="text-gray-700 mt-4">
                                    {ownerMess.description}
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 min-w-50 ">
                                <button
                                    onClick={() =>
                                        navigate(`/addMenu/${ownerMess._id}`)
                                    }
                                    className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                                >
                                    Add Today’s Menu
                                </button>
                                <button
                                    onClick={() =>
                                        navigate(`/editMenu/${ownerMess._id}`)
                                    }
                                    className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                                >
                                    Edit Today’s Menu
                                </button>
                                <button
                                    onClick={() => deleteMenu(ownerMess._id)}
                                    className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
                                >
                                    Delete Today’s Menu
                                </button>

                                <button
                                    onClick={() =>
                                        navigate(`/editMess/${ownerMess._id}`)
                                    }
                                    className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                                >
                                    Edit Mess
                                </button>

                                <button
                                    onClick={() => delteMess(ownerMess._id)}
                                    className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
                                >
                                    Delete Mess
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default ManageMess;
