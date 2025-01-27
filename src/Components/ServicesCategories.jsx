import gsap from "gsap";
import React, { useState, useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi"; // Import the arrow icon
import Img1 from '../assets/blog/blog1.png';
import Img2 from '../assets/blog/blog2.png';
import Img3 from '../assets/blog/blog3.png';
const Categories = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [openCards, setOpenCards] = useState([]); // Tracks all open cards

    // Refs to store DOM elements for GSAP
    const textRefs = useRef([]);
    const arrowRefs = useRef([]);
    const openCardRefs = useRef([]);
    const imageRefs = useRef([]);

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

    const categoryData = [
        {
            paragraph:
                "Our corporate video production service provides professional and polished content for business needs.",
            images: [
                Img1,
                Img2,
                Img3
            ],
        },
        {
            paragraph:
                "Our corporate video production service provides professional and polished content for business needs.",
            images: [
                Img1,
                Img2,
                Img3
            ],
        }, {
            paragraph:
                "Our corporate video production service provides professional and polished content for business needs.",
            images: [
                Img1,
                Img2,
                Img3
            ],
        }, {
            paragraph:
                "Our corporate video production service provides professional and polished content for business needs.",
            images: [
                Img1,
                Img2,
                Img3
            ],
        }, {
            paragraph:
                "Our corporate video production service provides professional and polished content for business needs.",
            images: [
                Img1,
                Img2,
                Img3
            ],
        }, {
            paragraph:
                "Our corporate video production service provides professional and polished content for business needs.",
            images: [
                Img1,
                Img2,
                Img3
            ],
        }, {
            paragraph:
                "Our corporate video production service provides professional and polished content for business needs.",
            images: [
                Img1,
                Img2,
                Img3
            ],
        }, {
            paragraph:
                "Our corporate video production service provides professional and polished content for business needs.",
            images: [
                Img1,
                Img2,
                Img3
            ],
        }, {
            paragraph:
                "Our corporate video production service provides professional and polished content for business needs.",
            images: [
                Img1,
                Img2,
                Img3
            ],
        }, {
            paragraph:
                "Our corporate video production service provides professional and polished content for business needs.",
            images: [
                Img1,
                Img2,
                Img3
            ],
        }, {
            paragraph:
                "Our corporate video production service provides professional and polished content for business needs.",
            images: [
                Img1,
                Img2,
                Img3
            ],
        }, {
            paragraph:
                "Our corporate video production service provides professional and polished content for business needs.",
            images: [
                Img1,
                Img2,
                Img3
            ],
        },
    ];
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleMouseEnter = (index) => {
        // Prevent hover effect if the card is already open
        if (openCards.includes(index)) return;

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
            color: "orange", // Change arrow color to orange on hover

        });
    };

    const handleMouseLeave = (index) => {
        // Prevent hover effect if the card is already open
        if (openCards.includes(index)) return;

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
            color: "white", // Change arrow color to white when opened

        });
    };

    const toggleCard = (index) => {
        setOpenCards((prev) => {
            const isOpen = prev.includes(index);
            const headingElement = textRefs.current[index];
            const cardElement = openCardRefs.current[index];
            const arrowElement = arrowRefs.current[index];

            if (!isOpen) {
                // Open card animation
                gsap.to(headingElement, {
                    y: 100,
                    duration: 0.6,
                });
                gsap.to(cardElement, {
                    maxHeight: 500, // Adjust according to content size
                    marginTop: '2rem', // Add margin to ensure spacing
                    duration: 0.6,
                    ease: "power2.out",
                    overflow: "visible",
                    position: "fixed", // Apply fixed position
                    top: "10vh", // Adjust based on the position of your content
                    left: "50%", // Center horizontally
                    transform: "translateX(-50%)", // Adjust for perfect centering
                });
                gsap.to(arrowElement, {
                    rotate: -90,
                    duration: 0.6,
                    ease: "power2.out",
                    color: "white", // Change arrow color to white when opened


                });
            } else {
                gsap.to(headingElement, {
                    y: 0,
                    duration: 0.6,
                });
                gsap.to(cardElement, {
                    maxHeight: 0,
                    marginTop: 0, // Reset margin when closed
                    duration: 0.6,
                    ease: "power2.in",
                    overflow: "hidden",
                    position: "static", // Reset to default positioning
                });
                gsap.to(arrowElement, {
                    rotate: 0,
                    duration: 0.6,
                    ease: "power2.in",
                });
            }

            return isOpen ? prev.filter((card) => card !== index) : [...prev, index];
        });
    };

    // Initialize multiple refs for each image inside imageRefs
    useEffect(() => {
        imageRefs.current = imageRefs.current.slice(0, categoryData.length); // Ensure correct length
    }, [categoryData.length]);
    useEffect(() => {
        let currentIndex = 0;

        // Function to animate images
        const animateImages = () => {
            categoryData.forEach((category, categoryIndex) => {
                const images = imageRefs.current[categoryIndex]; // Get the images for this category
                if (!images) return; // If no images for this category, skip

                const totalImages = images.length;

                // Reset all images to 20% width except the active one
                images.forEach((image, imgIndex) => {
                    const isActive = imgIndex === currentIndex;
                    gsap.to(image, {
                        width: isActive ? "100%" : "20%", // Active image is 100%, others are 20%
                        duration: 0.6,
                        ease: "power2.out",
                    });
                });

                // Move to the next image
                currentIndex = (currentIndex + 1) % totalImages;
            });

            // Delay the next animation cycle
            setTimeout(animateImages, 1500); // Adjust the delay as necessary
        };

        animateImages(); // Start the animation loop

    }, []); // Empty dependency array ensures this runs only once




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
                            onMouseLeave={() => handleMouseLeave(index)} onClick={() => toggleCard(index)}
                        >
                            {/* Number */}
                            <div className="md:text-[11rem] text-[6rem] font-bold text-gray-200 opacity-30">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            {/* Text on the right side of the number */}
                            <div className="md:ml-[-60px] ml-[-120px] mt-4 md:mt-20 md:text-4xl text-lg font-semibold text-white relative z-10 group-hover:text-gray-300 transition whitespace-nowrap"
                                ref={(el) => (textRefs.current[index] = el)}
                            >
                                {category}
                            </div>

                            {/* Arrow on the right */}
                            <div ref={(el) => (arrowRefs.current[index] = el)}
                                className="absolute right-[-2rem]  text-gray-400 md:text-6xl text-2xl  transition">
                                <FiArrowRight style={{ stroke: "currentColor", strokeWidth: 1 }} /> {/* React Icons Arrow */}
                            </div>
                            {/* Render the additional content if card is open */}

                            {openCards.includes(index) && (
                                <div
                                    ref={(el) => (openCardRefs.current[index] = el)}
                                    className="flex flex-wrap ml-[-20rem] mt-[12rem] "
                                > <div className="flex max-w-80 ">
                                        {categoryData[index]?.images.map((img, imgIndex) => (
                                            <img
                                                key={imgIndex}
                                                src={img}
                                                alt={`Category Image ${index + 1}`}
                                                ref={(el) => {
                                                    // Create a ref array for each category's images
                                                    imageRefs.current[index] = imageRefs.current[index] || [];
                                                    imageRefs.current[index][imgIndex] = el;
                                                }}
                                                className="w-20 h-40 z-10 rounded-[1rem] transition-all duration-700 ease-in-out"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-lg mt-28 pr-[32rem] ">
                                        {categoryData[index]?.paragraph || "Default Description"}
                                    </p>

                                </div>

                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
