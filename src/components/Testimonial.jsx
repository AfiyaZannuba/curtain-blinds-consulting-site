import React from 'react'
import { motion } from "framer-motion"

const Testimonial = () => {

    const testimonialVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeInOut",
            }
        }
    }

    const testimonialsData = [
        {
            image: "https://randomuser.me/api/portraits/men/24.jpg",
            name: "Michael Renner",
            position: "Home Appliance Owner",
            feedback: "The custom blinds they installed completely transformed our living space — elegant, smooth, and perfectly fitted!"
        },
        {
            image: "https://randomuser.me/api/portraits/women/45.jpg",
            name: "Samira Johnson",
            position: "Interior Designer",
            feedback: "Their curtain designs brought life into my client’s rooms. The fabrics and finishes are absolutely premium."
        },
        {
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            name: "Alex Woods",
            position: "Home Renovation Consultant",
            feedback: "From consultation to installation, their team handled everything seamlessly. The results exceeded my expectations."
        }
    ]

    return (
        <div className="bg-[url('/map.jpg')] bg-contain bg-no-repeat bg-top">
            <div className="py-10 bg-white/50">
                <div className="w-4/5 m-auto space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-5"
                    >
                        <h1 className="text-center text-lg">___Client Reviews</h1>
                        <h2 className="text-sm md:text-xl md:font-semibold text-center">
                            Hear from homeowners and designers who trusted us to elevate their spaces with our
                            bespoke curtains, blinds, and décor solutions. Every stitch reflects comfort, craftsmanship, and class.
                        </h2>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-4 py-10">
                        {testimonialsData.map((testimonial, index) => (
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                variants={testimonialVariant}
                                viewport={{ amount: 0.5 }}
                                key={index}
                                className="p-5 space-y-5 border border-black rounded-lg flex flex-col items-center">
                                <div className="flex items-center space-x-2 ">
                                    <img src={testimonial.image} alt="" className="w-16 h-16 rounded-full border-2" />
                                    <div>
                                        <h1 className="font-bold text-lg">{testimonial.name}</h1>
                                        <p className="text-sm text-gray-400">{testimonial.position}</p>
                                    </div>
                                </div>
                                <p className="text-center text-lg">{testimonial.feedback}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Testimonial
