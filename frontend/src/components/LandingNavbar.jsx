import React from "react";
import { Link } from "react-router";

const LandingNavbar = () => {
    return (
        <nav
            className="w-full md:gap-70 gap-5 px-2 justify-between md:px-10 shadow-md h-19 flex md:justify-around items-center  
                 backdrop-blur-md"
            style={{ backgroundColor: "#DBDFD0" }}
        >
            <div className="flex items-center gap- md:gap-2">
                <img src="/messMateLogo.png" alt="" className="h-7 md:h-15" />
                <h2
                    className="text-[12px] md:text-2xl font-mono text- tracking-wide"
                    //  style={{ color: "#AD343E" }}
                >
                    MessMate
                </h2>
            </div>
            <div className="flex md:gap-20 gap-3 font-semibold md:text-[15px] text-[12px]">
                <Link
                    to="/login"
                    className="text-gray-700 hover:text-red-700 font-medium"
                >
                    Home
                </Link>
                <Link
                    to="/login"
                    className="text-gray-700 hover:text-red-700 font-medium"
                >
                    About
                </Link>
                <Link
                    to="/login"
                    className="text-gray-700 hover:text-red-700 font-medium"
                >
                    Menu
                </Link>
                <Link
                    to="/login"
                    className="text-gray-700 hover:text-red-700 font-medium"
                >
                    Contact
                </Link>
                
            </div>
            <div className="flex items-center gap-2 md:gap-10 md:text-[15px] text-[12px]">
                <Link
                    to={"/login"}
                    className="text- hover:text--200 transition font-semibold"
                >
                    Login
                </Link>

                <Link
                    to={"/signup"}
                    className="text- hover:text--200 transition font-semibold"
                >
                    Signup
                </Link>
            </div>
        </nav>
    );
};

export default LandingNavbar;
