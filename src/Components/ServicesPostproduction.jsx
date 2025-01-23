import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStar } from "react-icons/fa"; // Example icon
gsap.registerPlugin(ScrollTrigger);
import { motion } from "framer-motion";
import Img1 from '../assets/blog/blog1.png';
import Img2 from '../assets/blog/blog2.png';
import Img3 from '../assets/blog/blog3.png';


const Postproduction = () => {
    const titleRef = useRef(null);
    const containerRef = useRef(null);
    const cardRefs = useRef([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const Images = [
        { id: 1, src: Img1 },
        { id: 2, src: Img2 },
        { id: 3, src: Img3 },


    ];
    useEffect(() => {
        if (window.innerWidth > 768) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=150%", // Increased the scroll distance
                    scrub: 1, // Slowed down the scrub effect
                    markers: false,
                    pin: false,
                    smoothChildTiming: true,
                },
            });

            tl.to(titleRef.current, {
                y: window.innerHeight * 1.3,
                ease: "linear",
            });

            return () => {
                tl.kill();
            };
        }
    }, []);
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const handleHover = (index) => {
        const card = cardRefs.current[index];
        const icon = card.querySelector(".icon"); // No change in class, just ensure it's referenced correctly

        // Card Tilt
        gsap.to(card, {
            rotation: -1,
            x: 2,
            y: 2,
            ease: "power2.out",
        });

        // Icon Circular Movement
        gsap.to(icon, {
            rotation: "+=360", // Continuous rotation

            duration: 1,
            ease: "power2.out",
        });

        // Change Title Color
        gsap.to(card.querySelector("h2"), {
            color: "orange",
            duration: 0.2,
        });
    };

    const handleMouseLeave = (index) => {
        const card = cardRefs.current[index];
        const icon = card.querySelector(".icon");

        // Reset Card Tilt
        gsap.to(card, {
            rotation: 0,
            x: 0,
            y: 0,
            ease: "power2.out",
        });

        // Reset Icon Movement
        gsap.to(icon, {
            rotation: 0,
            x: 0,
            y: 0,
            duration: 1,
            ease: "power2.out",
        });

        // Reset Title Color
        gsap.to(card.querySelector("h2"), {
            color: "white",
            duration: 0.2,
        });
    };

    const cards = [
        {
            icon: FaStar,
            title: "Concept Development",
            description:
                "Pre-production serves as the pivotal phase in any creative endeavor, encompassing planning, idea refinement, budgeting, schedule creation, and the meticulous organization of logistical details.",
        },
        {
            icon: FaStar,
            title: "Pre-Production",
            description:
                "Pre-production serves as the pivotal phase in any creative endeavor, encompassing planning, idea refinement, budgeting, schedule creation, and the meticulous organization of logistical details.",
        }, {
            icon: FaStar,
            title: "Pre-Production",
            description:
                "Pre-production serves as the pivotal phase in any creative endeavor, encompassing planning, idea refinement, budgeting, schedule creation, and the meticulous organization of logistical details.",
        }, {
            icon: FaStar,
            title: "Pre-Production",
            description:
                "Pre-production serves as the pivotal phase in any creative endeavor, encompassing planning, idea refinement, budgeting, schedule creation, and the meticulous organization of logistical details.",
        }, {
            icon: FaStar,
            title: "Pre-Production",
            description:
                "Pre-production serves as the pivotal phase in any creative endeavor, encompassing planning, idea refinement, budgeting, schedule creation, and the meticulous organization of logistical details.",
        }, {
            icon: FaStar,
            title: "Pre-Production",
            description:
                "Pre-production serves as the pivotal phase in any creative endeavor, encompassing planning, idea refinement, budgeting, schedule creation, and the meticulous organization of logistical details.",
        }, {
            icon: FaStar,
            title: "Pre-Production",
            description:
                "Pre-production serves as the pivotal phase in any creative endeavor, encompassing planning, idea refinement, budgeting, schedule creation, and the meticulous organization of logistical details.",
        },
    ];

    return (
        <div
            ref={containerRef}
            className="min-h-screen bg-black text-white overflow-visible relative pt-24 "
        >          <div className="border-[1px] border-gray-200 rounded-[50px] p-8 mx-[40px] overflow-hidden">

                {/* Background Lines */}
                <div
                    className={`absolute inset-0 w-full h-full  ${windowWidth < 1024 ? "hidden" : ""
                        }`}
                >
                    {[...Array(10)].map((_, index) => (
                        <div
                            key={index}
                            className="absolute h-full "
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
                <div className="max-w-8xl mx-auto md:px-4 md:py-2 mb-2 flex flex-col md:flex-row ">
                    <div className="w-full md:w-7/10 md:pr-2 relative  md:mb-0 ">
                        <div className="grid grid-rows-2"><div
                            ref={titleRef}
                            className="md:sticky z-20 top-0 flex flex-col justify-between h-full"
                        >
                            <h1 className="text-xl text-start md:text-start md:text-3xl  font-syne font-semibold leading-tight w-full md:w-full">
                                Post-Production
                            </h1>
                            <p className="text-gray-300 text-lg font-light font-inter mt-2">The real magic happens in post-production. This is where we take the raw footage and craft it into a polished, engaging video.</p>
                            <h1 className="text-3xl text-start md:text-start  font-syne  w-full mt-2" ><span className="text-gray-500">Our post-production</span> services cover video editing, sound design, color correction, visual effects, and more. We pay meticulous attention to detail to ensure your video looks and sounds its best.</h1>
                        </div>
                            <div className="absolute bottom-0 left-0 w-full h-[350px]  overflow-hidden "

                            >
                                <motion.div
                                    className="flex h-full gap-4 px-4"
                                    initial={{ x: 0 }}
                                    animate={{ x: -1000 }}
                                    transition={{
                                        duration: 8,
                                        ease: "linear",
                                        repeat: Infinity,
                                    }}
                                >
                                    {Images.map((img, index) => (
                                        <div
                                            key={index}
                                            className="min-w-full flex-shrink-0 rounded-xl overflow-hidden border-2 border-black"
                                        >
                                            <img
                                                src={img.src}
                                                alt={`Slide ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-3/10  md:pl-4 ">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                ref={(el) => (cardRefs.current[index] = el)}
                                className="card-container rounded-3xl relative cursor-pointer"
                                onMouseEnter={() => handleHover(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                            >
                                <div className="gradient-overlay " />
                                <div className="relative z-10 ">
                                    <div className="md:flex md:items-center md:space-x-4 md:mb-2">
                                        {card.icon && (
                                            <card.icon className="icon text-orange-500 text-xl" />
                                        )}
                                        <h2 className="text-lg font-semibold">{card.title}</h2>
                                    </div>
                                    <p className="text-gray-300 text-sm font-light font-inter mb-12 leading-relaxed md:pl-8 ">
                                        {card.description}
                                    </p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Postproduction;
