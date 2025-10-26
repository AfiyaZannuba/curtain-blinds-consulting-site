import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

const Faq = () => {
    const faqData = [
        {
            question: "What is Curtain Blinds?",
            answer: "Curtain Blinds is a revolutionary platform that combines the elegance of curtains with the functionality of blinds, offering customizable window treatments for modern homes."
        },
        {
            question: "What materials are available for curtains and blinds?",
            answer: "We offer a wide range of materials including cotton, linen, polyester, and blackout fabrics for curtains, and wood, faux wood, aluminum, and PVC for blinds."
        },
        {
            question: "Can I customize the size and color of my curtains or blinds?",
            answer: "Absolutely! All our products are made-to-measure and available in a variety of colors, textures, and finishes to perfectly match your home décor."
        },
        {
            question: "Do you provide installation services?",
            answer: "Yes, we provide professional installation services to ensure your curtains and blinds fit perfectly and function smoothly."
        },
        {
            question: "Are motorized or smart blinds available?",
            answer: "Yes, we offer motorized blinds that can be controlled via remote, smartphone app, or voice assistants for ultimate convenience."
        },
        {
            question: "How do I clean and maintain my curtains and blinds?",
            answer: "Most of our curtains are machine washable, while blinds can be easily wiped with a damp cloth. We also provide care instructions with every purchase."
        },
        {
            question: "How long does delivery and installation take?",
            answer: "Delivery typically takes 5–10 business days, and installation is scheduled immediately after delivery to ensure a seamless experience."
        },
        {
            question: "Do you offer a warranty on your products?",
            answer: "Yes, all our curtains and blinds come with a standard 2-year warranty covering manufacturing defects and mechanical issues."
        }
    ];

    const [openFaq, setOpenFaq] = useState();
    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }} // 👈 animates on scroll into view
            className="w-4/5 m-auto my-20 p-4"
        >
            <h1 className="text-2xl font-semibold text-gray-600 mb-6 text-center">
                Frequently Asked Questions
            </h1>

            {faqData.map((faq, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: false, amount: 0.2 }} // 👈 triggers every time item enters viewport
                    className="mb-4"
                >
                    <div
                        onClick={() => toggleFaq(index)}
                        className="flex justify-between items-center bg-white shadow-md px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                    >
                        <h2 className="text-lg font-medium text-gray-700">{faq.question}</h2>
                        <span className="text-xl text-gray-500">
                            {openFaq === index ? "−" : "+"}
                        </span>
                    </div>

                    <AnimatePresence>
                        {openFaq === index && (
                            <motion.div
                                key="answer"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <p className="p-4 text-gray-500">{faq.answer}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default Faq
