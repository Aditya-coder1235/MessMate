import {useState} from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import axios from 'axios'

const Login = () => {
    const navigate=useNavigate()
        const [formData, setFormData] = useState({
            email: "",
            password: ""
        });
        const[error,setError]=useState('')
    
        const loginUser = async () => {
            try {
                let res = await axios.post(
                    "https://messmate-backend-r94e.onrender.com/api/auth/login",
                    formData,
                    { withCredentials: true },
                );
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("userId", res.data.user._id);
                localStorage.setItem("role",res.data.user.role);
                navigate('/home')
            } catch (error) {
                console.error(error.response?.data.message || error.message);
                setError(error.response?.data.message);
            }
        };
    
        const handleOnSubmit = (e) => {
            e.preventDefault();
            loginUser()
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
                    Welcome Back
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Login to continue to MessMate
                </p>

                <form className="space-y-4" onSubmit={handleOnSubmit}>
                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mt-1 px-4 py-2 border rounded-md
                         focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            value={formData.email}
                            onChange={handleOnChange}
                            name="email"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full mt-1 px-4 py-2 border rounded-md
                         focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            value={formData.password}
                            onChange={handleOnChange}
                            name="password"
                        />
                    </div>
                    {
                        error && <p className="text-red-500">{error}</p>
                    }

                    <button
                        type="submit"
                        className="w-full bg-emerald-600 text-white py-2 rounded-md font-semibold
                       hover:bg-emerald-700 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-sm text-center text-gray-500 mt-6">
                    Don’t have an account?
                    <Link
                        to={"/signup"}
                        className="text-emerald-600 font-medium ml-1 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
