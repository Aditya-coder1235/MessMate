import {useState} from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
// import {  } from 'react-router';

const EditMess = () => {
    let {id}=useParams()
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        messName: "",
        price: "",
        vegNonveg: "veg",
        address: "",
        city: "",
        description: "",
    });
    const [loading, setLoading] = useState(false);

    const editMess = async () => {
        try {
            setLoading(true);
            let res = await axios.put(
                `https://messmate-backend-r94e.onrender.com/api/mess/update/${id}`,
                formData,
                { withCredentials: true },
            );
               console.log(res.data)
            alert("Mess Updated Successfully.");
            navigate("/manageMess");
        } catch (error) {
            console.error(error.response?.data.message || error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editMess();
    };
    return (
        <div className="min-h-screen bg-gray-100 ">
            <NavBar />
            <div className="min-h-screen bg-gray-100 flex md:items-center justify-center px-4 py-5">
                <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">
                        Edit Your Mess
                    </h2>
                    <p className="text-gray-500 mb-6">
                        Fill the details to list your updated mess on MessMate
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="text-sm text-gray-600">
                                Mess Name
                            </label>
                            <input
                                type="text"
                                name="messName"
                                placeholder="e.g. Shiv Mess"
                                value={formData.messName}
                                onChange={handleChange}
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-700 outline-none"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm text-gray-600">
                                    Monthly Price (₹)
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="2500"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-700 outline-none"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">
                                    Mess Type
                                </label>
                                <select
                                    name="vegNonveg"
                                    value={formData.vegNonveg}
                                    onChange={handleChange}
                                    className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-700 outline-none"
                                >
                                    <option value="veg">Veg</option>
                                    <option value="nonveg">Non-Veg</option>
                                    <option value="both">Veg & Non-Veg</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Street, Area"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-700 outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">
                                City
                            </label>
                            <input
                                type="text"
                                name="city"
                                placeholder="Pune"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-700 outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">
                                Description (Optional)
                            </label>
                            <textarea
                                name="description"
                                rows="3"
                                placeholder="Home-style food, hygienic kitchen..."
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-700 outline-none resize-none"
                            ></textarea>
                        </div>

                        <button
                            disabled={loading}
                            className="w-full bg--600 text-white py-3 rounded-md font-semibold hover:bg--700 transition"
                            style={{
                                backgroundColor: "#AD343E",
                                color: "white",
                            }}
                        >
                            {loading ? "Adding..." : "Edit Mess"}
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EditMess;