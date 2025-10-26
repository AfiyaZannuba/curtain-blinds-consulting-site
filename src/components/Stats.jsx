import React from 'react'
import { FaChartLine } from 'react-icons/fa'
import { motion } from "framer-motion"

const Stats = () => {
    const imageVariant = {
        hidden: {
            opacity: 0,
            x: -80
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.2,
                duration: 0.8,
                ease: "easeInOut",
            }
        }
    }
    return (
        <div className="bg-[url('/lightblue_bg.png')] bg-cover bg-no-repeat bg-top">
            <div className="py-20 bg-white/50 ">
                <div className="w-4/5 m-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
                    <div className="w-full md:w-1/3">
                        <motion.img
                            src="./lady_stats.png"
                            initial="hidden"
                            whileInView="visible"
                            variants={imageVariant}
                            viewport={{ amount: 0.5 }}
                            alt="" className="w-full" />
                    </div>
                    <div className="md:w-1/2 space-y-8">
                        <h1 className="text-4xl md:text-6xl font-bold">Over 10,000 Homes Styled</h1>
                        <p className="md:text-4xl font-bold">
                            From elegant drapes to modern blinds, we bring comfort, style, and functionality to every window.
                        </p>

                        <div className="flex">
                            <div className="space-y-5">
                                <div className="flex items-center space-x-2">
                                    <span className="p-3 rounded-full bg-violet-300 text-violet-800">
                                        <FaChartLine />
                                    </span>
                                    <h1>Custom Measurements</h1>
                                </div>
                                <p>
                                    Each curtain and blind is tailored to perfectly fit your space, ensuring precision and beauty in every fold.
                                </p>
                            </div>

                            <div className="space-y-5">
                                <div className="flex items-center space-x-2">
                                    <span className="p-3 rounded-full bg-violet-300 text-violet-800" >
                                        <FaChartLine />
                                    </span>
                                    <h1>Smart Light Control</h1>
                                </div>
                                <p>
                                    Enjoy effortless lighting with our motorized and manual blind options — designed for both elegance and convenience.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
