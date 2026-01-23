const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="max-w-6xl mx-auto px-6 py-12 text-center">
                <h2 className="text-2xl font-semibold text-white">MessMate</h2>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-xl mx-auto">
                    MessMate helps students discover nearby mess options that
                    are affordable, hygienic, and feel like home.
                </p>
            </div>

            <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} MessMate. Made for students.
            </div>
        </footer>
    );
};

export default Footer;
