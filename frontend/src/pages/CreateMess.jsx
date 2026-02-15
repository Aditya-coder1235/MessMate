import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router";

const CreateMess = () => {
    const navigate = useNavigate();
    // const [formData, setFormData] = useState({
    //     messName: "",
    //     price: "",
    //     vegNonveg: "veg",
    //     address: "",
    //     city: "",
    //     description: "",
    // });
    const [messName, setMessName] = useState("");
    const [price, setPrice] = useState("");
    const [vegNonveg, setVegNonveg] = useState("veg");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);


    const[error,setError]=useState('')

    const createMess = async () => {
        const formData = new FormData();

        formData.append("messName", messName);
        formData.append("price", price);
        formData.append("vegNonveg", vegNonveg);
        formData.append("address", address);
        formData.append("city", city);
        formData.append("description", description);
        formData.append("image", image);

        try {
            
            let res = await axios.post(
                "https://messmate-backend-r94e.onrender.com/api/mess/create",
                formData,
                { withCredentials: true },
            );
            //    console.log(res.data)
            alert("Mess Upload Successfully.");
            navigate("/home");
        } catch (error) {
            console.error(error.response?.data.message || error.message);
            setError(error.response?.data.message);
        } 
    };

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        createMess();
    };
    return (
        <div className="min-h-screen bg-gray-100 ">
            <NavBar />
            <div className="min-h-screen bg-gray-100 flex md:items-center justify-center px-4 py-10">
                <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-1">
                        Add Your Mess
                    </h2>
                    <p className="text-gray-500 mb-6">
                        Fill the details to list your mess on MessMate
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
                                value={messName}
                                onChange={(e) => setMessName(e.target.value)}
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
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-700 outline-none"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm text-gray-600">
                                        Upload Mess Image
                                    </label>
                                    <input
                                        type="file"
                                        name="image"
                                        // placeholder="2500"
                                        onChange={(e) =>
                                            setImage(e.target.files[0])
                                        }
                                        className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-700 outline-none"
                                        accept="image/*"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">
                                    Mess Type
                                </label>
                                <select
                                    name="vegNonveg"
                                    value={vegNonveg}
                                    onChange={(e) =>
                                        setVegNonveg(e.target.value)
                                    }
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
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
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
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
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
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-700 outline-none resize-none"
                            ></textarea>
                        </div>
                        {error && <p className="text-red-500">{error}</p>}

                        <button
                            className="w-full bg--600 text-white py-3 rounded-md font-semibold hover:bg--700 transition"
                            style={{
                                backgroundColor: "#AD343E",
                                color: "white",
                            }}
                        >
                            Publish Mess
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CreateMess;
