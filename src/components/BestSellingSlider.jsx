import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
    { id: 1, image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop", offer: true, title: "Luxury Curtains" },
    { id: 2, image: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800&h=600&fit=crop", offer: false, title: "Modern Blinds" },
    { id: 3, image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop", offer: true, title: "Bedroom Curtains" },
    { id: 4, image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop", offer: false, title: "Roller Blinds" },
    { id: 5, image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop", offer: true, title: "Living Room Drapes" },
    { id: 6, image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop", offer: false, title: "Roman Blinds" },
    { id: 7, image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=600&fit=crop", offer: true, title: "Sheer Curtains" },
    { id: 8, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop", offer: false, title: "Blackout Blinds" },
];

const BestSellingSlider = () => {
    return (
        <div className="relative w-full py-16 bg-gradient-to-b from-white to-cyan-50/30">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-3">
                        Our Best Selling Curtains & Blinds
                    </h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
                </motion.div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed={800}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                        }}
                        navigation={{
                            nextEl: ".custom-swiper-button-next",
                            prevEl: ".custom-swiper-button-prev",
                        }}
                        className="pb-12"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={slide.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative group rounded-2xl overflow-hidden shadow-xl bg-white h-full"
                                >
                                    <div className="relative h-72 md:h-80 overflow-hidden">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />


                                        {slide.offer && (
                                            <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                                                OFFER
                                            </div>
                                        )}


                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Link to="/contact">
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-full shadow-lg transition-colors duration-300"
                                                >
                                                    Book Consultation
                                                </motion.button>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Info Card */}
                                    <div className="p-5 bg-white">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {slide.title}
                                        </h3>
                                        <span className="text-cyan-600 font-semibold text-sm">
                                            Premium Quality
                                        </span>
                                    </div>

                                    {/* Decorative Border */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600"></div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button className="custom-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-cyan-500 text-gray-800 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 -translate-x-4 md:-translate-x-6">
                        <ChevronLeft size={24} />
                    </button>
                    <button className="custom-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-cyan-500 text-gray-800 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 translate-x-4 md:translate-x-6">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* ✅ Standard React style tag instead of styled-jsx */}
            <style>{`
                .swiper-pagination-bullet {
                    background: #06b6d4;
                    opacity: 0.5;
                }
                .swiper-pagination-bullet-active {
                    opacity: 1;
                    background: #06b6d4;
                }
            `}</style>
        </div>
    );
};

export default BestSellingSlider;
