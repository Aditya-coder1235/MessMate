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
            <div className="bg-white max-w-4xl w-full rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
                <div
                    className="hidden md:flex flex-col justify-center bg-linear-to-br  text-white p-10"
                    style={{
                        backgroundColor: "#AD343E",
                    }}
                >
                    <h2 className="text-3xl font-bold mb-4">
                        Welcome to MessMate
                    </h2>
                    <p className="text-emerald-100 mb-6">
                        Find affordable & healthy mess near you with real photos
                        and honest reviews.
                    </p>

                    <ul className="space-y-3 text-sm">
                        <li> Verified mess listings</li>
                        <li> Location based search</li>
                        <li> Multiple food images</li>
                        <li> Trusted by food lovers</li>
                    </ul>
                </div>

                <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-800 text-center">
                        Create Account
                    </h2>
                    <p className="text-gray-500 text-sm text-center mb-6">
                        Join MessMate in less than a minute
                    </p>

                    <form onSubmit={handleOnSubmit} className="space-y-3">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 outline-none"
                            value={formData.name}
                            onChange={handleOnChange}
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 outline-none"
                            value={formData.email}
                            onChange={handleOnChange}
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 outline-none"
                            value={formData.password}
                            onChange={handleOnChange}
                        />

                        <input
                            type="number"
                            name="phone"
                            placeholder="Phone Number"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 outline-none"
                            value={formData.phone}
                            onChange={handleOnChange}
                        />

                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 outline-none"
                            value={formData.address}
                            onChange={handleOnChange}
                        />

                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 outline-none"
                            value={formData.city}
                            onChange={handleOnChange}
                        />

                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleOnChange}
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 outline-none"
                        >
                            <option value="">Select Role</option>
                            <option value="user">User</option>
                            <option value="owner">Mess Owner</option>
                        </select>

                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}

                        <button
                            type="submit"
                            className="w-full  text-white py-2 rounded-md font-semibold -700 transition"
                            style={{
                                backgroundColor: "#AD343E",
                            }}
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className="text-sm text-center text-gray-500 mt-4">
                        Already have an account?
                        <Link
                            to="/login"
                            className="text-emerald-600 font-medium ml-1"
                            style={{
                                color: "#AD343E",
                            }}
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserSignup;
