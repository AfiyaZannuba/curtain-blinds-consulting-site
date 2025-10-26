import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaClock,
    FaCommentDots,
    FaTools,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const QuoteForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        address: "",
        date: "",
        time: "",
        message: "",
    });

    const [tooltipText, setTooltipText] = useState("");
    const [showTooltip, setShowTooltip] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_q72f5vn",
                "template_6sycsap",
                formData,
                "y8Kv0WeecoU4s-jja"
            )
            .then(
                () => {
                    setTooltipText("✅ Message sent successfully!");
                    setShowTooltip(true);
                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        service: "",
                        address: "",
                        date: "",
                        time: "",
                        message: "",
                    });
                },
                (error) => {
                    setTooltipText("❌ Failed to send message. Please try again.");
                    setShowTooltip(true);
                    console.error(error);
                }
            );
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    return (
        <div className="bg-[url('/get_a_quote_image.jpg')] bg-cover bg-no-repeat bg-center min-h-[80vh] flex items-center justify-center py-16">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="w-11/12 sm:w-[500px] md:w-[580px] mx-auto p-6 md:p-8 rounded-xl bg-black/60 backdrop-blur-md text-white border border-gray-500"
            >
                <p className="text-cyan-400 font-semibold text-center">
                    Secure Your Property 🏠
                </p>
                <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                    Request A Quote
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-center border border-gray-500 rounded-md p-2">
                            <FaUser className="text-cyan-400 mr-2" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="bg-transparent outline-none w-full text-sm sm:text-base"
                            />
                        </div>
                        <div className="flex items-center border border-gray-500 rounded-md p-2">
                            <FaEnvelope className="text-cyan-400 mr-2" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="bg-transparent outline-none w-full text-sm sm:text-base"
                            />
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-center border border-gray-500 rounded-md p-2">
                            <FaPhone className="text-cyan-400 mr-2" />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="bg-transparent outline-none w-full text-sm sm:text-base"
                            />
                        </div>
                        <div className="flex items-center border border-gray-500 rounded-md p-2">
                            <FaTools className="text-cyan-400 mr-2" />
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="bg-transparent outline-none w-full text-gray-300 text-sm sm:text-base [&>option]:bg-gray-800 [&>option]:text-white"
                                required
                            >
                                <option value="" className="text-gray-400">
                                    Services
                                </option>
                                <option value="Curtains">Curtains</option>
                                <option value="Blinds">Blinds</option>
                                <option value="Motorized Systems">Motorized Systems</option>
                                <option value="Home Consultation">Home Consultation</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex items-center border border-gray-500 rounded-md p-2">
                        <FaMapMarkerAlt className="text-cyan-400 mr-2" />
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className="bg-transparent outline-none w-full text-sm sm:text-base"
                        />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-center border border-gray-500 rounded-md p-2">
                            <FaCalendarAlt className="text-cyan-400 mr-2" />
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="bg-transparent outline-none w-full text-gray-300 text-sm sm:text-base"
                                required
                            />
                        </div>
                        <div className="flex items-center border border-gray-500 rounded-md p-2">
                            <FaClock className="text-cyan-400 mr-2" />
                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="bg-transparent outline-none w-full text-gray-300 text-sm sm:text-base"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-start border border-gray-500 rounded-md p-2">
                        <FaCommentDots className="text-cyan-400 mt-1 mr-2" />
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="bg-transparent outline-none w-full resize-none text-sm sm:text-base"
                            required
                        ></textarea>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        data-tooltip-id="form-tooltip"
                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-md font-semibold tracking-wide transition-all"
                    >
                        SUBMIT
                    </motion.button>
                </form>

                {showTooltip && (
                    <Tooltip
                        id="form-tooltip"
                        isOpen={showTooltip}
                        place="top"
                        effect="solid"
                        afterHide={() => setShowTooltip(false)}
                    >
                        {tooltipText}
                    </Tooltip>
                )}
            </motion.div>
        </div>
    );
};

export default QuoteForm;