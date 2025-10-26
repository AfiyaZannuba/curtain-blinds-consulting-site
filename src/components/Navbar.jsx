import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/aboutus" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "FAQ", path: "/faq" },
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-4/5 m-auto flex justify-between items-center py-5 relative z-50">
            {/* Logo - Click to go Home */}
            <Link to="/" onClick={() => setIsOpen(false)}>
                <h1 className="text-xl font-bold cursor-pointer">
                    Veil & View
                </h1>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-5">
                {navItems.map((item, i) => (
                    <motion.li
                        key={i}
                        className="list-none"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to={item.path}
                            className="text-gray-700 hover:text-violet-500 transition-colors"
                        >
                            {item.name}
                        </Link>
                    </motion.li>
                ))}
            </nav>

            {/* Register Button (Desktop) */}
            <Link to="/contact">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-5 py-2 border border-black hover:bg-violet-400 hover:text-white font-semibold rounded-full transition-all hidden md:block"
                >
                    Get Started
                </motion.button>
            </Link>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiX size={25} /> : <HiMenu size={25} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.ul
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-20 left-0 w-full bg-white flex flex-col items-center space-y-3 py-5 shadow-md md:hidden z-50"
                >
                    {navItems.map((item, i) => (
                        <li key={i}>
                            <Link
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-700 hover:text-violet-500 text-lg"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}

                    {/* Mobile Get Started Button (always purple) */}
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-2 border border-black bg-violet-500 text-white font-semibold rounded-full transition-all"
                        >
                            Get Started
                        </motion.button>
                    </Link>
                </motion.ul>
            )}
        </div>
    );
};

export default Navbar;
