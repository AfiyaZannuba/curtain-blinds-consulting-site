import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
    const slides = [
        "/curtain_bind_opening-banner-3.png",
        "/woman-opening-curtains-at-sunrise-symbolizing-freedom-and-joy-free-photo.jpg",
        "/curtain_bind_home_banner_2.jpg",
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 2000); // change slide every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background slideshow */}
            <AnimatePresence>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full"
                    style={{
                        background: `url(${slides[currentSlide]}) center/cover no-repeat`,
                    }}
                ></motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative w-4/5 flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0 z-10">
                <div className="md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
                    <p className="text-lg md:text-xl text-white md:text-white">
                        ___Innovation Requires Courage
                    </p>
                    <h1 className="text-4xl md:text-7xl font-bold text-white">
                        Shades Made Brilliantly Simple
                    </h1>
                    <p className="text-md md:text-lg text-white">
                        Quality Blinds, Shades, Shutters & Drapes for Any Window, Door or Style
                    </p>

                    <div className="flex justify-center md:justify-start space-x-5">
                        <Link to="/contact">
                            <button className="px-5 py-3 rounded-full font-semibold bg-violet-500 text-white hover:bg-violet-600 transition-all md:bg-black md:hover:bg-violet-500">
                                Book Us Today
                            </button>
                        </Link>
                    </div>
                </div>


            </div>


            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-gray-400"
                            }`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Hero
