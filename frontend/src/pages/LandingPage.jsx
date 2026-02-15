import React from "react";
import LandingNavbar from "../components/LandingNavbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router";
// import { UtensilsCrossed } from "lucide-react";
import { CookingPot } from "lucide-react";
import { HandPlatter } from "lucide-react";
import { UtensilsCrossed } from "lucide-react";
import { SquareMenu } from "lucide-react";

const LandingPage = () => {
    const navigate=useNavigate()
    return (
        <div>
            <LandingNavbar />

            <div
                className="relative h-120 md:h-screen w-full bg-center bg-cover flex items-center justify-center pt-1 "
                style={{ backgroundImage: "url('/landingPage2.png')" }}
            >
                <div className="absolute inset-0 bg-linear-to-r from-black/50 to-black/20"></div>

                <div className="relative z-10 text-center text- px-4 flex flex-col gap-3 items-center">
                    <h1 className="text-2xl md:text-7xl font-bold">
                        Find the Best Mess <br /> Near You
                    </h1>

                    <p className="text-lg md:text-xl text--200">
                        Affordable • Hygienic • Home-Style Food
                    </p>

                    <Link
                        className="bg-emerald-600 px-6 py-3 rounded-md font-semibold hover:bg--700 transition mt-5 cursor-pointer"
                        to={"/signup"}
                        style={{ backgroundColor: "#AD343E", color: "white" }}
                    >
                        Get Started
                    </Link>
                </div>
            </div>

            <section className="bg-gray-100 py-16 relative z-20">
                <h2 className="text-center text-4xl md:text-5xl">Browse Our Features</h2>
                <div className="max-w-6xl mx-auto px-6 pt-14">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300 cursor-pointer text-center flex flex-col justify-center items-center">
                            <UtensilsCrossed />
                            <h3 className="text-xl font-semibold mb-2 pt-5">
                                Breakfast
                            </h3>
                            <p className="text-gray-600">
                                Nutritious morning meals including grains,
                                dairy, fruits, and energy-rich options.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300 cursor-pointer flex flex-col justify-center items-center  text-center">
                            <CookingPot />
                            <h3 className="text-xl font-semibold mb-2  pt-5">
                                Lunch
                            </h3>
                            <p className="text-gray-600">
                                Balanced meals with rice, roti, vegetables, dal,
                                and protein.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300 cursor-pointer flex flex-col justify-center items-center  text-center">
                            <HandPlatter />
                            <h3 className="text-xl font-semibold mb-2 pt-5">
                                Dinner
                            </h3>
                            <p className="text-gray-600">
                                Light, healthy dinners ensuring easy digestion
                                and satisfaction.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300 cursor-pointer flex flex-col justify-center items-center">
                            <SquareMenu />
                            <h3 className="text-xl font-semibold mb-2 pt-5">
                                Daily Menu
                            </h3>
                            <p className="text-gray-600 text-center">
                                Daily planned menu providing variety, nutrition,
                                and taste consistency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex bg-gray-100 py-16   justify-center gap-10">
                <div>
                    <img
                        src="/tf.jpg"
                        alt=""
                        className="ms-3 m:ms-0 md:w-100 md:h-110 h-70 w-70 rounded-2xl"
                    />
                </div>
                <div className="text-start pt-7">
                    <h2 className=" md:text-4xl">
                        We Provide healthy food <br /> for Students and
                        Professionals.
                    </h2>
                    <p className="text-[6px] md:text-sm pt-5">
                        We are committed to providing quality mess services with{" "}
                        <br />
                        high hygiene standards. Our meals are freshly prepared
                        <br />
                        using healthy and nutritious ingredients. We design
                        <br />
                        menus that offer both taste and balanced nutrition. Our
                        <br />
                        services cater to students, professionals, and working
                        <br />
                        individuals. We focus on consistency, cleanliness, and
                        <br />
                        timely meal delivery. Customer satisfaction is our top
                        <br />
                        priority every day. We follow strict food safety and
                        <br />
                        kitchen hygiene practices. Our team works hard to
                        <br />
                        maintain quality and affordability. We aim to make daily
                        <br />
                        meals stress-free and reliable. Our mission is to serve
                        <br />
                        healthy food with care and trust.
                    </p>
                </div>
            </section>

            <section className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Trusted by Food Lovers
                    </h2>

                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl  shadow-sm  transition duration-300 cursor-pointer">
                            <p
                                className="text-3xl font-bold text-green-600"
                                style={{
                                    color: "#AD343E",
                                }}
                            >
                                150+
                            </p>
                            <p className="mt-2 text-gray-600">Messes Listed</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm transition duration-300 cursor-pointer">
                            <p
                                className="text-3xl font-bold text-green-600"
                                style={{
                                    color: "#AD343E",
                                }}
                            >
                                1,200+
                            </p>
                            <p className="mt-2 text-gray-600">Users</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm  transition duration-300 cursor-pointer">
                            <p
                                className="text-3xl font-bold text-green-600"
                                style={{
                                    color: "#AD343E",
                                }}
                            >
                                4.5
                            </p>
                            <p className="mt-2 text-gray-600">Average Rating</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm  transition duration-300 cursor-pointer">
                            <p
                                className="text-3xl font-bold text-green-600"
                                style={{
                                    color: "#AD343E",
                                }}
                            >
                                3+
                            </p>
                            <p className="mt-2 text-gray-600">Cities</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LandingPage;
