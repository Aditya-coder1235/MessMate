import React from "react";
import { useNavigate } from "react-router-dom";

const PermissionD = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-lg p-10 md:p-16 text-center max-w-md w-full">
                <h1 className="text-4xl font-bold text-red-700 mb-4">
                    Access Denied
                </h1>
                <p className="text-gray-600 mb-8">
                    You do not have permission to view this page. Please contact
                    the administrator if you think this is an error.
                </p>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-xl transition"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default PermissionD;
