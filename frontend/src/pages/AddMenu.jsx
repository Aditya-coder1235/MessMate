import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const AddMenu = () => {
    // const notify = () => toast("Menu Add successfully!");

    const navigate = useNavigate();
    let messId = useParams();
    // console.log(messId.id)
    const [formData, setFormData] = useState({
        day: "Monday",
        breakfast: "",
        lunch: "",
        dinner: "",
        mess: messId.id,
    });
    const [loading, setLoading] = useState(false);

    const uploadMenu = async () => {
        try {
            setLoading(true);
            let res = await axios.post(
                "https://messmate-backend-r94e.onrender.com/api/menu/create",
                formData,
                { withCredentials: true },
            );
            // console.log(res.data)
            // alert();
            toast.success("Menu Added Successfully!");
            setTimeout(() => {
                navigate("/manageMess");
            }, 1000);
        } catch (error) {
            console.error(error.response?.data.message || error.message);
            toast.error(error.response?.data.message || error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        uploadMenu();
    };

    const handleOnChange = (e) => {
        let { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 ">
            <NavBar />

            <div className="min-h-screen bg-gray-100 flex md:items-center justify-center px-4 py-10">
                <ToastContainer position="top-right" autoClose={3000} />

                <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">
                        Add Your Mess Menu
                    </h2>
                    <p className="text-gray-500 mb-6">
                        Fill the details to list your Menu for Your Mess
                    </p>

                    <form onSubmit={handleOnSubmit} className="space-y-5">
                        <div>
                            <label className="text-sm text-gray-600">
                                Select Day
                            </label>
                            <select
                                name="day"
                                value={formData.day}
                                onChange={handleOnChange}
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-700 outline-none"
                            >
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">
                                For Breakfast
                            </label>
                            <textarea
                                name="breakfast"
                                value={formData.breakfast}
                                onChange={handleOnChange}
                                placeholder="Enter Your Breakfast Menu in Detail..."
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-700 outline-none resize-none"
                                required
                            ></textarea>
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">
                                For Lunch
                            </label>
                            <textarea
                                name="lunch"
                                value={formData.lunch}
                                onChange={handleOnChange}
                                placeholder="Enter Your Lunch Menu in Detail..."
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-700 outline-none resize-none"
                                required
                            ></textarea>
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">
                                For Dinner
                            </label>
                            <textarea
                                name="dinner"
                                rows="3"
                                value={formData.dinner}
                                onChange={handleOnChange}
                                placeholder="Enter Your Dinner Menu in Detail..."
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-700 outline-none resize-none"
                            ></textarea>
                        </div>

                        <button
                            className="w-full bg-red-700 text-white py-3 rounded-md font-semibold hover-red-700 transition"
                            style={{
                                backgroundColor: "#AD343E",
                                color: "white",
                            }}
                        >
                            {loading ? (
                                <span className="loading loading-spinner loading-sm"></span>
                            ) : (
                                "Add Menu"
                            )}
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AddMenu;
