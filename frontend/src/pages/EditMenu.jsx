import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { useParams ,useNavigate} from "react-router";


const EditMenu = () => {
    const navigate=useNavigate()
    let {id} = useParams();
// console.log(messId.id)
    const [formData, setFormData] = useState({
        day: "Monday",
        breakfast: "",
        lunch: "",
        dinner: "",
        // mess: messId.id,
    });

    const updateMenu = async () => {
        try {
            let res = await axios.put(
                `https://messmate-backend-r94e.onrender.com/api/menu/update/:id/${id}`,
                formData,
                { withCredentials: true },
            );
            console.log(res.data)
            alert('Menu Update Successfully')
            navigate("/manageMess");
        } catch (error) {
            console.error(error.response?.data.message || error.message);
        }
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        updateMenu()
    };

    const handleOnChange = (e) => {
        let { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 pt-20 ">
            <NavBar />

            <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
                <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">
                        Update Your Mess Menu
                    </h2>
                    <p className="text-gray-500 mb-6">
                        Fill the details to list your Updated Menu for Your Mess
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
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 outline-none"
                            >
                                &nbsp;
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
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
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
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
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
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                            ></textarea>
                        </div>

                        <button className="w-full bg-emerald-600 text-white py-3 rounded-md font-semibold hover:bg-emerald-700 transition">
                            Update Menu
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default EditMenu;
