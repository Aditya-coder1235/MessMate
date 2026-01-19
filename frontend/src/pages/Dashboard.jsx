import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    fetchAllMess,
    searchMess,
    filterForVegNonVeg,
    filterByCity,
} from "../features/messSlice";

const Dashboard = () => {
    const dispatch = useDispatch();
    const { mess, loading, error } = useSelector((state) => state.mess);
    const [input, setInput] = useState("");

    useEffect(() => {
        dispatch(fetchAllMess());
    }, [dispatch]);

    const handleVegChange = (e) => {
        dispatch(filterForVegNonVeg(e.target.value));
    };

    const handleCityChange = (e) => {
        dispatch(filterByCity(e.target.value));
    };

    const handleSearchChange = (e) => {
        setInput(e.target.value);
        dispatch(searchMess(e.target.value));
    };

    return (
        <div className="min-h-screen bg-gray-100 pt-20">
            <NavBar />

            <div className="max-w-7xl mx-auto px-4 py-15 lg:py-8">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-6">
                    <div className="w-full sm:max-w-md">
                        <input
                            type="text"
                            placeholder="Search mess by name..."
                            value={input}
                            onChange={handleSearchChange}
                            className="
                w-full
                px-4
                py-3
                rounded-lg
                border
                border-gray-300
                bg-white
                text-sm
                text-gray-700
                shadow-sm
                focus:outline-none
                focus:ring-2
                focus:ring-emerald-500
              "
                        />
                    </div>
                    <div className="flex gap-5">
                        <div className="flex flex-col w-45 sm:w-auto gap-1">
                            <label className="text-sm font-medium text-gray-600">
                                Veg / Non-Veg
                            </label>
                            <select
                                onChange={handleVegChange}
                                className="
                w-full
                sm:w-40
                px-3
                py-3
                border
                rounded-lg
                bg-white
                text-sm
                text-gray-700
                shadow-sm
                focus:outline-none
                focus:ring-2
                focus:ring-emerald-500
              "
                            >
                                <option value="all">All</option>
                                <option value="veg">Veg</option>
                                <option value="nonveg">Non-Veg</option>
                                <option value="both">Veg & Non-Veg</option>
                            </select>
                        </div>

                        <div className="flex flex-col w-45 sm:w-auto gap-1">
                            <label className="text-sm font-medium text-gray-600">
                                City
                            </label>
                            <select
                                onChange={handleCityChange}
                                className="
                w-full
                sm:w-40
                px-3
                py-3
                border
                rounded-lg
                bg-white
                text-sm
                text-gray-700
                shadow-sm
                focus:outline-none
                focus:ring-2
                focus:ring-emerald-500
              "
                            >
                                <option value="all">All</option>
                                <option value="Pune">Pune</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Ahilyanagar">Ahilyanagar</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Nearby Mess
                    </h2>
                </div>

                {loading && (
                    <p className="text-center text-gray-500">
                        Loading messes...
                    </p>
                )}

                {error && <p className="text-center text-red-500">{error}</p>}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mess.map((item) => (
                        <div
                            key={item._id}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
                        >
                            <div className="p-4 border-b flex justify-between items-center">
                                <h3 className="font-semibold text-lg text-gray-800">
                                    {item.messName}
                                </h3>

                                <span
                                    className={`text-xs px-2 py-1 rounded-full ${
                                        item.vegNonveg === "veg"
                                            ? "bg-green-100 text-green-700"
                                            : item.vegNonveg === "nonveg"
                                              ? "bg-red-100 text-red-700"
                                              : "bg-yellow-100 text-yellow-700"
                                    }`}
                                >
                                    {item.vegNonveg === "both"
                                        ? "Veg & NonVeg"
                                        : item.vegNonveg.toUpperCase()}
                                </span>
                            </div>

                            <div className="p-4 space-y-2">
                                <p className="text-gray-600 text-sm">
                                    ₹{item.price}/month
                                </p>

                                <p className="text-gray-500 text-sm">
                                    Address: {item.address}, {item.city}
                                </p>

                                {item.description && (
                                    <p className="text-gray-500 text-sm">
                                        Detail: {item.description}
                                    </p>
                                )}

                                <div className="mt-3 p-3 bg-gray-50 rounded-md">
                                    <p className="text-sm font-medium text-gray-700">
                                        Owner Details
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Name: {item.owner?.name || "N/A"}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Phone: {item.owner?.phone || "Hidden"}
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 border-t">
                                <Link
                                    to={`/mess/${item._id}`}
                                    className="block w-full text-center bg-emerald-600 text-white py-3 rounded-md hover:bg-emerald-700 transition"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {mess.length === 0 && !loading && (
                    <p className="text-center text-gray-500 mt-10">
                        No mess found nearby
                    </p>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default Dashboard;

// import React, { useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import axios from "axios";
// import { Link } from "react-router";
// import { useSelector, useDispatch } from "react-redux";
// import {
//     fetchAllMess,
//     searchMess,
//     filterForVegNonVeg,
//     filterByCity
// } from "../features/messSlice";

// const Dashboard = () => {
//     const dispatch = useDispatch();
//     const { mess, loading, error } = useSelector((state) => state.mess);
//     const [input, setInput] = useState("");

//     // const [city, setCity] = useState([]);

//     // const fetchMessbyCity = async () => {
//     //     try {
//     //         const res = await axios.get(
//     //             `http://localhost:8080/api/mess/getByCity/:city`,
//     //             { withCredentials: true },
//     //         );
//     //         setMess(res.data.AllMess);
//     //     } catch (error) {
//     //         console.error(error.response?.data.message || error.message);
//     //     }
//     // };

//     useEffect(() => {
//         dispatch(fetchAllMess());
//     }, []);

//     const handleOnChange = (e) => {
//         dispatch(filterForVegNonVeg(e.target.value));
//     };

//     const handleOnChange2=(e)=>{
//         dispatch(filterByCity(e.target.value))
//     }

//     const handleOnChangeForInput = (e) => {
//         setInput(e.target.value);
//         dispatch(searchMess(e.target.value));
//     };

//     // console.log(mess.images);

//     return (
//         <div className="min-h-screen bg-gray-100 pt-15">
//             <NavBar />

//             <div className="max-w-7xl mx-auto px-4 py-10">
//                 <div className="mb-8 flex justify-center items-center gap-10">
//                     <div className="relative w-full max-w-md">
//                         <span className="absolute inset-y-0 left-3 flex items-center text-gray-400"></span>

//                         <input
//                             type="text"
//                             placeholder="Search mess by name..."
//                             className="
//                 w-full
//                 pl-10
//                 pr-4
//                 py-3
//                 rounded-full
//                 border
//                 border-gray-300
//                 bg-white
//                 text-gray-700
//                 placeholder-gray-400
//                 shadow-sm
//                 focus:outline-none
//                 focus:ring-2
//                 focus:ring-emerald-500
//                 focus:border-emerald-500
//                 transition
//             "
//                             value={input}
//                             onChange={handleOnChangeForInput}
//                         />
//                     </div>
//                     <div className="flex items-center gap-3">
//                         <p>Choose Veg/NonVeg</p>
//                         <select
//                             onChange={handleOnChange}
//                             className="
//                 px- py-1
//                 border
//                 rounded-md
//                 bg-white
//                 text-gray-700
//                 shadow-sm
//                 focus:outline-none
//                 focus:ring-2
//                 focus:ring-emerald-500
//             "
//                         >
//                             <option value="all">All</option>
//                             <option value="veg">Veg</option>
//                             <option value="nonveg">Non-Veg</option>
//                             <option value="both">Veg & Non-Veg</option>
//                         </select>
//                     </div>

//                     <div className="flex items-center gap-3">
//                         <p>Choose Mess By City</p>
//                         <select
//                             onChange={handleOnChange2}
//                             className="
//                 px- py-1
//                 border
//                 rounded-md
//                 bg-white
//                 text-gray-700
//                 shadow-sm
//                 focus:outline-none
//                 focus:ring-2
//                 focus:ring-emerald-500
//             "
//                         >
//                             <option value="all">All</option>
//                             <option value="Pune">Pune</option>
//                             <option value="Mumbai">Mumbai</option>
//                             <option value="Ahilyanagar">Ahilyanagar</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-2xl font-bold text-gray-800">
//                         Nearby Mess
//                     </h2>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {mess.map((item) => (
//                         <div
//                             key={item._id}
//                             className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
//                         >
//                             <div className="p-4 border-b flex justify-between items-center">
//                                 <h3 className="font-semibold text-lg text-gray-800">
//                                     {item.messName}
//                                 </h3>

//                                 <span
//                                     className={`text-xs px-2 py-1 rounded-full ${
//                                         item.vegNonveg === "veg"
//                                             ? "bg-green-100 text-green-700"
//                                             : item.vegNonveg === "nonveg"
//                                               ? "bg-red-100 text-red-700"
//                                               : "bg-yellow-100 text-yellow-700"
//                                     }`}
//                                 >
//                                     {item.vegNonveg === "both"
//                                         ? "Veg & NonVeg"
//                                         : item.vegNonveg.toUpperCase()}
//                                 </span>
//                             </div>

//                             <div className="p-4 space-y-2">
//                                 <p className="text-gray-600 text-sm">
//                                     ₹{item.price}/month
//                                 </p>

//                                 <p className="text-gray-500 text-sm">
//                                     Address: {item.address}, {item.city}
//                                 </p>

//                                 {item.description && (
//                                     <p className="text-gray-500 text-sm">
//                                         Detail: {item.description}
//                                     </p>
//                                 )}

//                                 <div className="mt-3 p-3 bg-gray-50 rounded-md">
//                                     <p className="text-sm text-gray-700 font-medium">
//                                         Owner Details
//                                     </p>
//                                     <p className="text-sm text-gray-600">
//                                         Name: {item.owner?.name || "N/A"}
//                                     </p>
//                                     <p className="text-sm text-gray-600">
//                                         Phone: {item.owner?.phone || "Hidden"}
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="p-5 border-t">
//                                 <Link
//                                     to={`/mess/${item._id}`}
//                                     className="mt-4 p-5  bg-emerald-600 text-white py-3 rounded-md hover:bg-emerald-700 transition w-full"
//                                 >
//                                     View Details
//                                 </Link>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {mess.length === 0 && (
//                     <p className="text-center text-gray-500 mt-10">
//                         No mess found nearby
//                     </p>
//                 )}
//             </div>

//             <Footer />
//         </div>
//     );
// };

// export default Dashboard;
