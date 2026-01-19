const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 ">
            <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-3">
                        MessMate
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        MessMate helps students find affordable, hygienic, and
                        home-style mess near their location.
                    </p>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">
                            Home
                        </li>
                        <li className="hover:text-white cursor-pointer">
                            Find Mess
                        </li>
                        <li className="hover:text-white cursor-pointer">
                            Login
                        </li>
                        <li className="hover:text-white cursor-pointer">
                            Signup
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">
                            Help Center
                        </li>
                        <li className="hover:text-white cursor-pointer">
                            Terms & Conditions
                        </li>
                        <li className="hover:text-white cursor-pointer">
                            Privacy Policy
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Contact</h3>
                    <p className="text-sm text-gray-400"> India</p>
                    <p className="text-sm text-gray-400">
                        support@messmate.com
                    </p>
                    <p className="text-sm text-gray-400"> +91 90000 00000</p>
                </div>
            </div>

            <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} MessMate. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
