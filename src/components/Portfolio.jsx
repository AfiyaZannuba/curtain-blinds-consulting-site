import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
    const navigate = useNavigate();
    const projects = [
        {
            id: 1,
            title: 'Modern Living Room',
            category: 'Curtains & Blinds',
            image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
        },
        {
            id: 2,
            title: 'Luxury Bedroom Suite',
            category: 'Custom Curtains',
            image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=600&fit=crop',
        },
        {
            id: 3,
            title: 'Contemporary Office',
            category: 'Motorized Blinds',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop',
            span: 'md:col-span-2',
        },
        {
            id: 4,
            title: 'Elegant Dining Space',
            category: 'Sheer Curtains',
            image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop',
        },
        {
            id: 5,
            title: 'Spa & Wellness Center',
            category: 'Blackout Blinds',
            image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop',
        },
        {
            id: 6,
            title: 'Luxury Housing Villa',
            category: 'Full Home Installation',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop',
            span: 'md:col-span-2',
        },
        {
            id: 7,
            title: 'Master Bedroom',
            category: 'Premium Curtains',
            image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1600&h=900&fit=crop',
            span: 'md:col-span-2',
        },
        {
            id: 8,
            title: 'Penthouse Suite',
            category: 'Designer Blinds',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&fit=crop',
            span: 'md:col-span-2',
        },
    ];

    const [hoveredId, setHoveredId] = useState(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
            <div className="max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                        Our Projects
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Explore our stunning curtains & blinds installations
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className={`relative group rounded-xl overflow-hidden shadow-2xl ${project.span ? `col-span-1 ${project.span}` : 'col-span-1'}`}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="relative h-64 md:h-72 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-95"
                                />

                                <div
                                    className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                                        }`}
                                />
                                <div
                                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hoveredId === project.id
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-4 pointer-events-none'
                                        }`}
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => navigate('/contact')}
                                        className="flex items-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg font-semibold shadow-2xl transition-colors duration-300 text-base md:text-lg"
                                    >
                                        <Calendar size={22} />
                                        Book Consultation
                                    </motion.button>
                                </div>
                            </div>

                            <div className="bg-white p-4">
                                <h3 className="text-lg font-bold text-gray-900 mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-cyan-600 font-medium">
                                    {project.category}
                                </p>
                            </div>

                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-cyan-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Portfolio;
