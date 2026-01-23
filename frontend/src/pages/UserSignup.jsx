import React, { useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";

const UserSignup = () => {
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        role: "",
        address: "",
        city: "",
    });
    const[error,setError]=useState('')

    const createUser = async () => {
        try {
            let res = await axios.post("https://messmate-backend-r94e.onrender.com/api/auth/signup",formData);
            // console.log(res.data);
            navigate('/login')
        } catch (error) {
            console.error(error.response?.data.message || error.message);
            setError(error.response?.data.message);
        }
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        createUser()
    };

    const handleOnChange = (e) => {
        let { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                    Create Account
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Join MessMate and find the best mess near you
                </p>

                <form className="space-y-4" onSubmit={handleOnSubmit}>
                    <div>
                        <label className="text-sm text-gray-600">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            value={formData.name}
                            onChange={handleOnChange}
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            value={formData.email}
                            onChange={handleOnChange}
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Create password"
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            value={formData.password}
                            onChange={handleOnChange}
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Phone</label>
                        <input
                            type="number"
                            name="phone"
                            placeholder="Enter your Phone Number"
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            value={formData.phone}
                            onChange={handleOnChange}
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Adress</label>
                        <input
                            type="text"
                            name="address"
                            placeholder="Enter your Phone Number"
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            value={formData.address}
                            onChange={handleOnChange}
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">City</label>
                        <input
                            type="text"
                            name="city"
                            placeholder="Enter your Phone Number"
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            value={formData.city}
                            onChange={handleOnChange}
                        />
                    </div>

                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleOnChange}
                        className="w-full mt-1 px-4 py-2 border rounded-md"
                    >
                        <option value="">Select role</option>
                        <option value="user">User</option>
                        <option value="owner">Mess Owner</option>
                    </select>

                    {
                        error && <p className="text-red-500">{error}</p>
                    }

                    <button
                        type="submit"
                        className="w-full bg-emerald-600 text-white py-2 rounded-md font-semibold
                       hover:bg-emerald-700 transition"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-sm text-center text-gray-500 mt-6">
                    Already have an account?
                    <Link
                        to={"/login"}
                        className="text-emerald-600 font-medium ml-1 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default UserSignup;
