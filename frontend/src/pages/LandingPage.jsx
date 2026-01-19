import React from "react";
import LandingNavbar from "../components/LandingNavbar";
import Footer from "../components/Footer";
import { Link } from "react-router";

const LandingPage = () => {
    return (
        <div>
            <LandingNavbar />

            <div
                className="relative h-screen w-full bg-center bg-cover flex items-center justify-center pt-16 "
                style={{ backgroundImage: "url('/landingPage2.jpg')" }}
            >
                <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/20"></div>

                <div className="relative z-10 text-center text-white px-4 flex flex-col gap-3 items-center">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Find the Best Mess Near You
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200">
                        Affordable • Hygienic • Home-Style Food
                    </p>

                    <Link className="bg-emerald-600 px-6 py-3 rounded-md font-semibold hover:bg-emerald-700 transition mt-5 cursor-pointer" to={'/signup'}>
                        Get Started
                    </Link>
                </div>
            </div>

            <section className="bg-gray-100 py-16 relative z-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300 cursor-pointer">
                            <h3 className="text-xl font-semibold mb-2">
                                 Daily Menu
                            </h3>
                            <p className="text-gray-600">
                                Check daily updated mess menus
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300 cursor-pointer">
                            <h3 className="text-xl font-semibold mb-2">
                                 Reviews
                            </h3>
                            <p className="text-gray-600">
                                Read reviews from students
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300 cursor-pointer">
                            <h3 className="text-xl font-semibold mb-2">
                                 Nearby Mess
                            </h3>
                            <p className="text-gray-600">
                                Find mess around your location
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LandingPage;
