import React from "react";
import {
    Utensils,
    Calendar,
    Users,
    MapPin,
    Shield,
    Wallet,
} from "lucide-react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Services = () => {
    const services = [
        {
            title: "Daily Meal Plans",
            icon: <Utensils />,
            desc: "Breakfast, lunch, and dinner with balanced nutrition.",
        },
        {
            title: "Monthly Subscriptions",
            icon: <Calendar />,
            desc: "Affordable plans with flexible pricing options.",
        },
        {
            title: "Verified Mess Owners",
            icon: <Shield />,
            desc: "Hygienic kitchens and trusted food providers.",
        },
        {
            title: "City-based Search",
            icon: <MapPin />,
            desc: "Find mess services easily near your location.",
        },
        {
            title: "User Management",
            icon: <Users />,
            desc: "Simple dashboard for users and mess owners.",
        },
        {
            title: "Secure Payments",
            icon: <Wallet />,
            desc: "Safe and transparent payment handling.",
        },
    ];

    return (
        <div>
            <NavBar/>
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-red-600 font-semibold uppercase">
                            Our Services
                        </h2>
                        <p className="mt-2 text-4xl font-extrabold text-gray-900">
                            Everything You Need in One Platform
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                            We simplify mess management for both customers and
                            owners.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="p-8 bg-gray-50 rounded-3xl hover:shadow-2xl transition"
                            >
                                <div className="w-12 h-12 bg-red-600 text-white flex items-center justify-center rounded-xl mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Services;
