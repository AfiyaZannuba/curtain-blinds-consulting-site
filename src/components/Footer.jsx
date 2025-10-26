import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [tooltipMessage, setTooltipMessage] = useState("");
    const [showTooltip, setShowTooltip] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email.trim() === "") {
            setTooltipMessage("Missing your email address.");
            setIsError(true);
        } else {
            setTooltipMessage("You're subscribed!");
            setIsError(false);
            setEmail("");
        }
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2000);
    };

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const footerVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeInOut" },
        },
    };

    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            variants={footerVariant}
            viewport={{ amount: 0.5 }}
            className="py-20 bg-gradient-to-t from-cyan-100 via-white to-white border-t"
        >
            <div className="w-4/5 m-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-4 text-gray-700">
                {/* Address Section */}
                <div>
                    <h2 className="text-xl font-bold mb-3 text-gray-900">Address</h2>
                    <p className="flex items-start gap-3">
                        <span className="p-2 rounded-full bg-cyan-600 text-white flex items-center justify-center">
                            <FaMapMarkerAlt />
                        </span>
                        Jumeirah Beach Road, Villa 399b, Jumeirah 2, Opposite Jumeirah Beach Park, Gate no 6. (PO BOX)
                    </p>
                    <p className="mt-3 flex items-center gap-3 font-semibold text-gray-800">
                        <span className="p-2 rounded-full bg-cyan-600 text-white flex items-center justify-center">
                            <FaPhoneAlt />
                        </span>
                        055 862 1062
                    </p>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h2 className="text-xl font-bold mb-3 text-gray-900">Quick Links</h2>
                    <ul className="space-y-2">
                        {[
                            { name: "Home", path: "/" },
                            { name: "About Us", path: "/aboutus" },
                            { name: "Portfolio", path: "/portfolio" },
                            { name: "FAQ", path: "/faq" },
                            { name: "Contact Us", path: "/contact" },
                        ].map((item, idx) => (
                            <li key={idx}>
                                <button
                                    onClick={() => handleNavigation(item.path)}
                                    className="transition-all hover:text-black hover:font-bold"
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Media Section */}
                <div>
                    <h2 className="text-xl font-bold mb-3 text-gray-900">Follow Us</h2>
                    <ul className="space-y-2">
                        {[
                            { name: "Facebook", link: "https://facebook.com" },
                            { name: "Instagram", link: "https://instagram.com" },
                            { name: "YouTube", link: "https://youtube.com" },
                        ].map((item, idx) => (
                            <li key={idx}>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-all hover:text-black hover:font-bold"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Newsletter</h3>
                    <p className="text-gray-600 mb-3">
                        Enter your email to get the latest news and updates.
                    </p>
                    <form onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            className="p-2 w-full rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:border-cyan-500"
                        />
                        <button
                            type="submit"
                            data-tooltip-id="footer-tooltip"
                            onClick={handleSubscribe}
                            className="mt-3 w-full p-2 text-white font-semibold rounded-md transition-all 
                                       bg-black hover:bg-purple-600 sm:bg-purple-600 sm:hover:bg-purple-600"
                        >
                            Subscribe
                        </button>
                    </form>

                    {/* Tooltip */}
                    {showTooltip && (
                        <Tooltip
                            id="footer-tooltip"
                            isOpen={showTooltip}
                            place="top"
                            effect="solid"
                            afterHide={() => setShowTooltip(false)}
                        >
                            <span className="flex items-center gap-2">
                                {isError ? <FaExclamationCircle /> : <FaCheckCircle />}
                                {tooltipMessage}
                            </span>
                        </Tooltip>
                    )}
                </div>
            </div>

            <div className="text-center text-gray-500 mt-12 text-sm">
                <p>&copy; {new Date().getFullYear()} Veil & View. All rights reserved.</p>
            </div>
        </motion.footer>
    );
};

export default Footer;
