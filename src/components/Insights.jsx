import React from 'react'
import { motion } from "framer-motion"
import { SiDatabricks, SiGoogleassistant } from 'react-icons/si'

const Insights = () => {
    const insightsData = [
        {
            title: "Eco-Performance Shades",
            date: "July 2023",
            icon: SiGoogleassistant,
            description: "Our Eco-friendly and Healthy Home solar shade collections contribute to a cleaner planet - and a cleaner home."
        },
        {
            title: "Remote Assistance",
            date: "Oct 2023",
            icon: SiDatabricks,
            description: "Professional support for teams operating from remote locations."
        }
    ]

    const cardVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
                ease: "easeInOut",
            },
        }),
    }

    return (
        <div className="">
            <div className="w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
                {/* Left side text section */}
                <div className="md:w-1/3 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-bold"
                    >
                        Company Insights
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Eight decades to know-how go into every Graber window treatment, backed by a limited lifetime warranty. We precisely place your shade with the lightest touch. Motorization ensures convenience, safety, and style within your home.
                    </motion.p>

                    <div className="flex items-center space-x-2">
                        <img
                            src="https://randomuser.me/api/portraits/men/1.jpg"
                            className='w-12 h-12 rounded-full border-4'
                            alt=""
                        />
                        <div>
                            <h1 className="font-bold text-lg">VeilanaView</h1>
                            <p className="text-sm text-gray-400">CEO, Founder</p>
                        </div>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="md:w-1/2 flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0">
                    {insightsData.map((insight, index) => (
                        <motion.div
                            className="w-full p-4 border-4 border-white/50 rounded-xl space-y-4"
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            custom={index}
                            viewport={{ amount: 0.5 }}
                            variants={cardVariant}
                        >
                            <div className="flex justify-between">
                                <div className="space-y-2">
                                    <button className="p-3 rounded-full bg-violet-300 text-violet-800">
                                        <insight.icon />
                                    </button>
                                    <h1 className="text-xl font-bold">{insight.title}</h1>
                                </div>
                                <p>{insight.date}</p>
                            </div>
                            <p className="text-lg leading-loose">{insight.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Insights
