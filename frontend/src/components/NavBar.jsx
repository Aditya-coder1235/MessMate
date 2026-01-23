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
    let token=localStorage.getItem('token')
    let role=localStorage.getItem('role')
    // console.log(role)
   
    return (
        <nav className="fixed top-0 z-50 w-full bg-emerald-600 shadow-md backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
                <Link to="/home" className="flex items-center gap-2">
                    <img
                        src="/messMateLogo.png"
                        alt="MessMate"
                        className="h-10 w-auto"
                    />
                    <h2 className="text-lg font-bold text-white tracking-wide sm:text-xl">
                        MessMate
                    </h2>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link to="/home" className="nav-link">
                        Home
                    </Link>

                    {/* {role === "user" && (
                        <Link to="/userDash" className="nav-link">
                            User Info
                        </Link>
                    )} */}

                    {role === "owner" && (
                        <>
                            <Link to="/createMess" className="nav-link">
                                Upload Mess
                            </Link>
                            <Link to="/manageMess" className="nav-link">
                                Manage Mess
                            </Link>
                        </>
                    )}

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
                        <button onClick={logoutUser} className="nav-link">
                            Logout
                        </button>
                    )}
                </div>

                {/* <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white focus:outline-none"
                >
                    ☰
                </button> */}
            </div>

          
                <div className="md:hidden a bg-emerald-700 px-4 py-4 space-y-4">
                    <Link to="/home" className="mobile-link">
                        Home
                    </Link>


                    {role === "owner" && (
                        <>
                            <Link to="/createMess" className="mobile-link">
                                Upload Mess
                            </Link>
                            <Link to="/manageMess" className="mobile-link">
                                Manage Mess
                            </Link>
                        </>
                    )}

                    {!token ? (
                        <>
                            <Link to="/login" className="mobile-link">
                                Login
                            </Link>
                            <Link to="/signup" className="mobile-link">
                                Signup
                            </Link>
                        </>
                    ) : (
                        <button
                            onClick={logoutUser}
                            className="mobile-link text-left"
                        >
                            Logout
                        </button>
                    )}
                </div>
            
        </nav>
    );
};

export default NavBar;
