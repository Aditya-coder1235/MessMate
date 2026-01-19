import React from "react";
import { Link } from "react-router";

const LandingNavbar = () => {
 return (
     <nav
         className="w-full bg-emerald-600 gap-96  px-10 shadow-md h-17 flex justify-around items-center fixed top-0 z-50 
                 backdrop-blur-md"
     >
         <div className="flex items-center gap-2">
             <img src="/messMateLogo.png" alt="" className="h-15" />
             <h2 className="text-xl font-bold text-white tracking-wide">
                 MessMate
             </h2>
         </div>
         <p></p>
         <div className="flex items-center gap-10 ">
             <Link
                 to={"/login"}
                 className="text-white hover:text-emerald-200 transition"
             >
                 Login
             </Link>

             <Link
                 to={"/signup"}
                 className="text-white hover:text-emerald-200 transition"
             >
                 Signup
             </Link>
         </div>
     </nav>
 );

}

export default LandingNavbar;
