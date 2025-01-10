import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GradientButton from './GradientButton';

gsap.registerPlugin(ScrollTrigger);

const AboutAgency = () => {
    const titleRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (window.innerWidth >= 1024) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom center',
                    scrub: true,
                    markers: false,
                    pin: false,
                    smoothChildTiming: true,
                }
            });

            tl.to(titleRef.current, {
                y: window.innerHeight * 0.65,
                ease: 'linear',
            });

            return () => {
                tl.kill();
            };
        }
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen bg-black text-white px-4 py-28 overflow-hidden relative">
            {/* Background Lines */}
            <div className="absolute inset-0 w-full h-full">
            {[...Array(10)].map((_, index) => (
                <div
                    key={index}
                    className="absolute h-full"
                    style={{
                        left: `${(index + 1) * 10}%`,
                        width: '1px',
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
                        opacity: 0.4,
                    }}
                />
            ))}
        </div>

            <div className="max-w-7xl mx-auto flex flex-col gap-16 h-full relative z-10">
                {/* Top Section (only visible on mobile) */}
                <div className="lg:hidden">
                    <h2 className="text-3xl font-syne mb-8">About Our Agency</h2>
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row gap-16 flex-1">
                    {/* Left Section (hidden on mobile) */}
                    <div className="hidden lg:block lg:w-1/3 relative">
                        <div className="h-full flex flex-col justify-between lg:sticky lg:top-24">
                            <h2 
                                ref={titleRef} 
                                className="text-4xl font-bold font-syne"
                            >
                                About Our Agency
                            </h2>
                            <div className="mt-auto pt-2">
                                <GradientButton>
                                    Know More About Us
                                </GradientButton>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="lg:w-2/3">
                        <div className="space-y-24">
                            <div>
                                <p className="text-2xl lg:text-3xl font-light mb-12 font-inter">
                                    <span className="text-gray-400">Established in 2015, we have dedicated ourselves to</span>{" "}
                                    <span className="text-white">crafting captivating visual narratives</span>{" "}
                                    <span className="text-gray-400">defined by creativity, innovation, and an unwavering commitment to</span>{" "}
                                    <span className="text-white">excellence in video production.</span>
                                </p>
                                <p className="text-gray-300 leading-relaxed font-inter">
                                    Our mission is clear: to transform ideas into compelling visual stories. We believe that every project is an opportunity to create something extraordinary. Whether it's a corporate video, a commercial, an event coverage, or an animation, we approach each endeavor with creativity, enthusiasm, and a commitment to exceeding our clients' expectations.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-y-4 gap-x-0 mt-24">
                                {/* Stats Items */}
                                <div className="relative h-32">
                                    <span className="absolute inset-0 text-[6rem] font-bold text-gray-500/60 pointer-events-none select-none">13+</span>
                                    <h3 className="absolute inset-x-0 bottom-11 flex items-center text-md font-syne uppercase tracking-wider z-10 text-white">
                                        Years of Experience
                                    </h3>
                                </div>
                                
                                <div className="relative h-32">
                                    <span className="absolute inset-0 text-[6rem] font-bold text-gray-500/60 pointer-events-none select-none">200+</span>
                                    <h3 className="absolute inset-x-0 bottom-11 flex items-center text-md font-syne uppercase tracking-wider z-10 text-white">
                                        Repeated Clients
                                    </h3>
                                </div>
                                
                                <div className="relative h-32">
                                    <span className="absolute inset-0 text-[6rem] font-bold text-gray-500/60 pointer-events-none select-none">478</span>
                                    <h3 className="absolute inset-x-0 bottom-11 flex items-center text-md font-syne uppercase tracking-wider z-10 text-white">
                                        Completed Projects
                                    </h3>
                                </div>
                                
                                <div className="relative h-32">
                                    <span className="absolute inset-0 text-[6rem] font-bold text-gray-500/60 pointer-events-none select-none">350+</span>
                                    <h3 className="absolute inset-x-0 bottom-11 flex items-center text-md font-syne uppercase tracking-wider z-10 text-white">
                                        Happy Clients
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Button (only visible on mobile) */}
                <div className="lg:hidden mt-8 text-center">
                    <GradientButton>
                        Know More About Us
                    </GradientButton>
                </div>
            </div>
        </div>
    );
};

export default AboutAgency;