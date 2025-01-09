// TestimonialCarousel.jsx
import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteRight } from 'react-icons/fa';
import bgimg from "../assets/bg/testmonialsBg.png";

const testimonials = [
    {
        id: 1,
        logo: "LOGO IPSUM",
        text: "Our experience with CreativeEdge Productions was outstanding! Their team's relaxed and patient approach, along with the creation of a delightful atmosphere, led to the successful delivery of our corporate videos.",
        author: "MICHAEL LEE",
        position: "Director of Sales, EcoGrowth Enterprises"
    },
    {
        id: 2,
        logo: "LOGO IPSUM",
        text: "After years of consistent collaboration and extensive projects...",
        author: "EMILY RODRIGUEZ",
        position: "Creative Director, TechVision Solutions"
    },
];

const TestimonialCarousel = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const paginate = (newDirection) => {
        const newPage = page + newDirection;
        if (newPage < 0) {
            setPage([testimonials.length - 1, newDirection]);
        } else if (newPage >= testimonials.length) {
            setPage([0, newDirection]);
        } else {
            setPage([newPage, newDirection]);
        }
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? (isMobile ? 300 : 1000) : (isMobile ? -300 : -1000),
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? (isMobile ? 300 : 1000) : (isMobile ? -300 : -1000),
            opacity: 0
        })
    };

    return (
        <div className="relative min-h-screen w-full bg-black bg-opacity-95 overflow-hidden">
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                    backgroundImage: `url(${bgimg})`,
                    transform: 'scale(1.1)'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-10 md:py-20">
                <h1 className="text-white font-syne text-center text-2xl md:text-3xl font-semibold mb-10 md:mb-20">
                    Our Client Chronicles:<br />
                    Stories that Make Us Smile!
                </h1>

                <div className="relative max-w-[1400px] h-[600px] md:h-[500px] mx-auto">
                    <div className="absolute w-full h-full flex items-center justify-center">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={page}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="group absolute w-[80vw] md:w-[1000px] bg-[rgba(255,255,255,0.05)] backdrop-blur-md rounded-3xl p-6 md:p-12 border border-white/10 overflow-hidden"
                                style={{
                                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                                <div className="flex items-center gap-4 mb-6 md:mb-8">
                                    <div className="bg-white bg-opacity-20 px-3 md:px-4 py-1 md:py-2 rounded">
                                        <p className="text-gray-300 text-xs md:text-sm font-medium">
                                            {testimonials[page].logo}
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-6 md:mb-8">
                                    <p className="text-white text-base md:text-4xl font-syne font-light leading-relaxed">
                                        {testimonials[page].text}
                                    </p>
                                </div>

                                <div className="text-gray-400 mt-8 md:mt-12">
                                    <p className="text-lg md:text-xl font-medium">{testimonials[page].author}</p>
                                    <p className="text-sm md:text-base">{testimonials[page].position}</p>
                                </div>

                                <div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 opacity-20">
                                    <FaQuoteRight className="text-white text-4xl md:text-7xl" />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button 
                        onClick={() => paginate(-1)}
                        className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 md:p-4 rounded-full z-20 transition-all duration-300"
                    >
                        <FiChevronLeft className="text-white text-xl md:text-2xl" />
                    </button>

                    <button 
                        onClick={() => paginate(1)}
                        className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 md:p-4 rounded-full z-20 transition-all duration-300"
                    >
                        <FiChevronRight className="text-white text-xl md:text-2xl" />
                    </button>

                    {!isMobile && (
                        <>
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 w-[1000px] h-[500px] bg-[rgba(255,255,255,0.02)] rounded-3xl transform scale-95 blur-sm hidden md:block" />
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[1000px] h-[500px] bg-[rgba(255,255,255,0.02)] rounded-3xl transform scale-95 blur-sm hidden md:block" />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TestimonialCarousel;