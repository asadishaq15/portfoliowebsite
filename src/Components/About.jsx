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

            // Animate only the heading text
            tl.to(titleRef.current, {
                y: window.innerHeight * 0.3, // Reduced movement
                ease: 'linear',
            });

            return () => {
                tl.kill();
            };
        }
    }, []);

    return (
        <div ref={containerRef} className="min-h-[80vh] bg-black text-white px-4 py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                {/* Top Section (only visible on mobile) */}
                <div className="lg:hidden">
                    <h2 className="text-3xl font-syne mb-8">About Our Agency</h2>
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Section (hidden on mobile) */}
                    <div className="hidden lg:block lg:w-1/3 relative">
                        <div className="h-full flex flex-col justify-between lg:sticky lg:top-0" style={{ paddingTop: '5rem' }}>
                            <h2 
                                ref={titleRef} 
                                className="text-3xl font-bold font-syne"
                            >
                                About Our Agency
                            </h2>
                            <div className="mt-auto pt-8">
                                <GradientButton>
                                    Know More About Us
                                </GradientButton>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="lg:w-2/3">
                        <div className="space-y-16 pt-8">
                            <div>
                                <p className="text-2xl lg:text-3xl font-light mb-8">
                                    <span className="text-gray-500">Established in 2015, we have dedicated ourselves to</span>{" "}
                                    <span className="text-white">crafting captivating visual narratives</span>{" "}
                                    <span className="text-gray-500">defined by creativity, innovation, and an unwavering commitment to</span>{" "}
                                    <span className="text-white">excellence in video production.</span>
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    Our mission is clear: to transform ideas into compelling visual stories. We believe that every project is an opportunity to create something extraordinary. Whether it's a corporate video, a commercial, an event coverage, or an animation, we approach each endeavor with creativity, enthusiasm, and a commitment to exceeding our clients' expectations.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                                <div>
                                    <h3 className="text-4xl font-syne lg:text-6xl font-bold text-gray-700">13+</h3>
                                    <p className="text-sm font-syne uppercase tracking-wider mt-2">Years of Experience</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-syne lg:text-6xl font-bold text-gray-700">200+</h3>
                                    <p className="text-sm font-syne uppercase tracking-wider mt-2">Repeated Clients</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-syne lg:text-6xl font-bold text-gray-700">478</h3>
                                    <p className="text-sm font-syne uppercase tracking-wider mt-2">Completed Projects</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-syne lg:text-6xl font-bold text-gray-700">350+</h3>
                                    <p className="text-sm font-syne uppercase tracking-wider mt-2">Happy Clients</p>
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