import React from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import axios from "axios";

const NavBar = () => {
    const navigate = useNavigate();

    const logoutUser = async () => {
        try {
            let res = await axios.post(
                "https://messmate-backend-r94e.onrender.com/api/auth/logout",
                {},
                { withCredentials: true },
            );
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            localStorage.removeItem("role");
            navigate("/login");
        } catch (error) {
            console.error(error.response?.data.message || error.message);
        }
    };
    let token = localStorage.getItem("token");
    let role = localStorage.getItem("role");
    // console.log(role)

    return (
        <nav
            className="w-full md:gap-60  gap-2 md:px-10 shadow-md h-18 flex justify-around items-center  
                         backdrop-blur-md"
            style={{ backgroundColor: "#DBDFD0" }}
        >
            <Link to="/home">
                <div className="flex items-center gap- md:gap-2">
                    <img
                        src="/messMateLogo.png"
                        alt=""
                        className="h-7 md:h-12"
                    />
                    <h2
                        className="text-[12px] md:text-xl font-mono text- tracking-wide"
                        //  style={{ color: "#AD343E" }}
                    >
                        MessMate
                    </h2>
                </div>
            </Link>

            <div className="flex gap-3 md:gap-11 font-semibold md:text-[15px] text-[8px]">
                <Link
                    to="/home"
                    className="text-gray-700 hover:text-red-700 font-medium"
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    className="text-gray-700 hover:text-red-700 font-medium"
                >
                    About Us
                </Link>

                <Link
                    to={role === "owner" ? "/createMess" : "/not"}
                    // to="/createMess"
                    className="text-gray-700 hover:text-red-700 font-medium"
                >
                    Add Mess
                </Link>
                <Link
                    to={role === "owner" ? "/manageMess" : "/not"}
                    // to="/manageMess"
                    className="text-gray-700 hover:text-red-700 font-medium"
                >
                    Manage Mess
                </Link>
            </div>
            <div className="flex items-center md:gap-10 md:text-[15px] text-[8px]">
                {!token ? (
                    <>
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
                        <Link to="/signup" className="nav-link">
                            Signup
                        </Link>
                    </>
                ) : (
                    <Link
                        onClick={logoutUser}
                        className="nav-link px-5 py-1 text-white rounded"
                        style={{ backgroundColor: "#AD343E" }}
                    >
                        Logout
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
