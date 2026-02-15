import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const AboutUs = () => {
    return (
        <div>
            <NavBar />
            <section className="py-20 bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2 relative">
                        <div className="absolute top-0 -left-4 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                        <div className="absolute -bottom-8 right-0 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80"
                                alt="Mess Food"
                                className="w-full h-auto md:h-100 object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h2 className="text-red-600 font-bold mb-4">
                            WHO WE ARE
                        </h2>
                        <h3 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
                            Healthy, Hygienic Meals for <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-orange-600">
                                Everyday Living
                            </span>
                        </h3>
                        <p className="text-slate-600 text-lg mb-8">
                            We are a trusted mess management platform connecting
                            students and working professionals with affordable,
                            nutritious, and hygienic mess services across
                            cities.
                        </p>

                        <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-8">
                            <div>
                                <p className="text-3xl font-bold text-slate-900">
                                    500+
                                </p>
                                <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">
                                    Active Members
                                </p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-slate-900">
                                    Daily
                                </p>
                                <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">
                                    Fresh Meals
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AboutUs;
