import gsap from "gsap";
import React, { useState, useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi"; // Import the arrow icon

const Categories = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // Refs to store DOM elements for GSAP
    const textRefs = useRef([]);
    const arrowRefs = useRef([]);
    // Categories data
    const categories = [
        "Corporate Video",
        "Commercial Video",
        "Documentary Film",
        "Product Video",
        "Animation",
        "Event Video",
        "Educational Video",
        "Entertainment Video",
        "Fashion Video",
        "Lifestyle",
        "Interview Video",
        "Social Media Video",
    ];

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Hover effect for GSAP animation
    const handleMouseEnter = (index) => {
        // Animate text to move forward (x) and upward (y)
        gsap.to(textRefs.current[index], {
            x: 20, // Move text forward
            y: -10, // Move text upward
            duration: 0.6,
        });
        // Rotate the arrow downwards
        gsap.to(arrowRefs.current[index], {
            rotate: 90, // Rotate arrow downwards
            duration: 0.6,
        });
    };

    const handleMouseLeave = (index) => {
        // Reset text position
        gsap.to(textRefs.current[index], {
            x: 0, // Reset text position
            y: 0, // Reset text position
            duration: 0.6,
        });
        // Reset arrow rotation
        gsap.to(arrowRefs.current[index], {
            rotate: 0, // Reset arrow rotation
            duration: 0.6,
        });
    };

    return (
        <div className="min-h-screen bg-black text-white overflow-visible relative md:pt-24 pt-20">
            {/* Background Section */}
            <div className="border-[1px] border-gray-200 rounded-[50px] p-8 mx-[40px] overflow-hidden relative">
                {/* Background Lines */}
                <div
                    className={`absolute inset-0 w-full h-full ${windowWidth < 1024 ? "hidden" : ""}`}
                >
                    {[...Array(10)].map((_, index) => (
                        <div
                            key={index}
                            className="absolute h-full"
                            style={{
                                left: `${(index + 1) * 10}%`,
                                width: "1px",
                                background:
                                    "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
                                opacity: 0.4,
                            }}
                        />
                    ))}
                </div>

                <link
                    href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700&display=swap"
                    rel="stylesheet"
                />

                {/* Main Heading */}
                <div className="max-w-8xl mx-auto md:px-4 md:py-2 mb-6 flex flex-col">
                    <h1 className="text-xl text-start md:text-3xl font-syne font-semibold leading-tight font-syne">
                        We are your experts in these categories
                    </h1>
                    <p className="text-gray-200 text-lg font-light font-inter mt-4 font-syne">
                        Our creative toolbox overflows with video possibilities! From
                        captivating stories to informative <br />animations, we craft videos that
                        fit every need.
                    </p>
                </div>

                {/* Numbers with Text and Arrows */}
                <div className="grid grid-cols  font-syne md:mx-10">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-start w-full group relative  cursor-pointer" onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}                  >
                            {/* Number */}
                            <div className="md:text-[11rem] text-[6rem] font-bold text-gray-200 opacity-30">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            {/* Text on the right side of the number */}
                            <div className="md:ml-[-60px] ml-[-120px] mt-4 md:mt-20 md:text-4xl text-lg font-semibold text-white relative z-10 group-hover:text-gray-300 transition"
                                ref={(el) => (textRefs.current[index] = el)}
                            >
                                {category}
                            </div>

                            {/* Arrow on the right */}
                            <div ref={(el) => (arrowRefs.current[index] = el)}
                                className="absolute right-[-2rem]  text-gray-400 md:text-6xl text-2xl group-hover:text-orange-400 transition">
                                <FiArrowRight style={{ stroke: "currentColor", strokeWidth: 1 }} /> {/* React Icons Arrow */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
