import React from "react";
import { Mail, Phone } from "lucide-react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const ContactUs = () => {
    return (
        <div>
            <NavBar/>
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
                        <div className="lg:w-1/3 bg-red-700 p-12 text-white flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">
                                    Contact Us
                                </h2>
                                <p className="text-red-100 leading-relaxed mb-12">
                                    Need help choosing a mess or managing your
                                    subscription? We’re here for you.
                                </p>

                                <ul className="space-y-8">
                                    <li className="flex items-center gap-5">
                                        <div className="bg-white/10 p-3 rounded-full">
                                            <Phone size={20} />
                                        </div>
                                        <span className="font-medium">
                                            +91 98765 43210
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-5">
                                        <div className="bg-white/10 p-3 rounded-full">
                                            <Mail size={20} />
                                        </div>
                                        <span className="font-medium">
                                            support@messmate.com
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-12 text-red-200 text-sm italic">
                                "Good food is the foundation of happiness."
                            </div>
                        </div>

                        <div className="lg:w-2/3 p-12 bg-white">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full bg-gray-50 rounded-xl p-4 focus:ring-2 focus:ring-red-700"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full bg-gray-50 rounded-xl p-4 focus:ring-2 focus:ring-red-700"
                                    />
                                </div>

                                <textarea
                                    rows="4"
                                    placeholder="Your message..."
                                    className="w-full bg-gray-50 rounded-xl p-4 focus:ring-2 focus:ring-red-700"
                                ></textarea>

                                <button className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default ContactUs;
