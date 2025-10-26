import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

// Team members data
const teamMembers = [
    {
        name: "Alice Johnson",
        role: "Frontend Developer",
        image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
        name: "Bob Smith",
        role: "Backend Developer",
        image: "https://randomuser.me/api/portraits/women/48.jpg",
    },
    {
        name: "Catherine Lee",
        role: "UI/UX Designer",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
        name: "David Brown",
        role: "Project Manager",
        image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
];

const ExpertTeam = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="py-20 bg-gradient-to-b from-white via-cyan-50/30 to-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-black rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto text-center space-y-6 px-4 relative z-10">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-cyan-600 font-semibold flex items-center justify-center gap-2 text-lg md:text-xl"
                >
                    <span className="text-2xl">🏗️</span> Meet Our Team{" "}
                    <span className="text-2xl">🏗️</span>
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-black"
                >
                    Our Expert Team
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg"
                >
                    Passionate professionals dedicated to transforming your vision into reality
                </motion.p>

                {/* Team Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 pt-12"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
                        >
                            <div className="relative overflow-hidden h-80 sm:h-72">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/0 to-cyan-400/0 group-hover:from-cyan-500/20 group-hover:to-cyan-400/10 transition-all duration-500"></div>
                            </div>

                            <div className="bg-white p-5 border-t-4 border-cyan-500">
                                <h3 className="text-lg sm:text-xl font-bold text-black mb-1 group-hover:text-cyan-600 transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 font-medium mb-4">
                                    {member.role}
                                </p>

                                <div className="flex gap-3 justify-center">
                                    <a
                                        href="https://www.facebook.com/"
                                        className="w-10 h-10 rounded-full bg-cyan-100 hover:bg-cyan-500 text-cyan-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    >
                                        <FaFacebookF className="text-sm" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/"
                                        className="w-10 h-10 rounded-full bg-cyan-100 hover:bg-cyan-500 text-cyan-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    >
                                        <FaLinkedinIn className="text-sm" />
                                    </a>
                                    <a
                                        href="https://x.com/"
                                        className="w-10 h-10 rounded-full bg-cyan-100 hover:bg-cyan-500 text-cyan-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    >
                                        <FaTwitter className="text-sm" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/"
                                        className="w-10 h-10 rounded-full bg-cyan-100 hover:bg-cyan-500 text-cyan-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    >
                                        <FaInstagram className="text-sm" />
                                    </a>
                                </div>
                            </div>


                            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

const AboutUs = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    return (
        <div className="w-full bg-white">
            <div className="w-4/5 mx-auto my-20 space-y-32 text-gray-800">
                <motion.div
                    className="text-center space-y-5 relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-cyan-600 mx-auto mb-4"></div>

                    <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tight">
                        Our Journey
                    </h1>
                    <h3 className="text-lg md:text-2xl text-cyan-600 font-medium max-w-4xl mx-auto leading-relaxed">
                        From blinds and curtains to full home furnishings — two dreamers turning spaces into stories
                    </h3>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-cyan-50 to-white rounded-3xl p-10 md:p-14 shadow-xl border border-cyan-100 relative overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-200 rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black rounded-full blur-3xl opacity-5"></div>

                    <motion.div
                        className="space-y-6 relative z-10"
                        variants={slideInLeft}
                    >
                        <div className="inline-block">
                            <h3 className="text-3xl md:text-4xl font-bold text-black mb-2">
                                Our Story
                            </h3>
                            <div className="w-20 h-1 bg-cyan-500"></div>
                        </div>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            What started as a passion for quality curtains and blinds soon grew into
                            a full-scale home furnishing venture. We've dedicated ourselves to
                            blending modern design with traditional craftsmanship to create elegant,
                            functional spaces that reflect your personality.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                                ✓
                            </div>
                            <div>
                                <p className="font-semibold text-black">Quality First</p>
                                <p className="text-sm text-gray-600">Excellence in every detail</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex justify-center relative z-10"
                        variants={slideInRight}
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                            <img
                                src="./our_office_image.webp"
                                alt="Our Company"
                                className="relative rounded-2xl w-full h-96 object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-gray-100 relative overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <div className="absolute top-20 left-20 w-40 h-40 bg-cyan-100 rounded-full blur-2xl opacity-50"></div>

                    <motion.div
                        className="flex justify-center relative z-10 order-2 md:order-1"
                        variants={slideInLeft}
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                            <img
                                src="./our_first_team.jpg"
                                alt="Our Work"
                                className="relative rounded-2xl w-full h-96 object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="space-y-6 relative z-10 order-1 md:order-2"
                        variants={slideInRight}
                    >
                        <div className="inline-block">
                            <h3 className="text-3xl md:text-4xl font-bold text-black mb-2">
                                Real Experts. Real Advice.
                            </h3>
                            <h4 className="text-xl md:text-2xl font-semibold text-cyan-600 mb-3">
                                No Pushy Sales.
                            </h4>
                            <div className="w-20 h-1 bg-black"></div>
                        </div>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            At Two Guys, we don't just hire staff — we have built a team of over 60 people who care about your home like it's their own. Our team is friendly, honest, and never pushy. Shiraz, our founder, notices every little detail — even a crooked curtain! That's how much we care. When you choose us, you're part of the Two Guys family.
                        </p>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="bg-cyan-50 p-4 rounded-xl">
                                <p className="text-3xl font-bold text-cyan-600">60+</p>
                                <p className="text-sm text-gray-600">Team Members</p>
                            </div>
                            <div className="bg-black p-4 rounded-xl">
                                <p className="text-3xl font-bold text-white">100%</p>
                                <p className="text-sm text-gray-300">Dedicated</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="text-center py-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-3xl shadow-2xl relative overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                >
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgydjMwem0wIDMwdi0yaDMwdjJIMzZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Real People. Real Spaces.
                        </h2>
                        <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            We believe every home tells a story — and we're here to make yours beautiful.
                        </p>
                    </motion.div>
                </motion.div>
                <ExpertTeam />
            </div>
        </div>
    );
};

export default AboutUs;