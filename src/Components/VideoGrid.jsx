import React, { useState } from 'react';
import landscape1 from "../assets/grid/lanscape1.jpg";
import landscape2 from "../assets/grid/landscape2.jpg";
import landscape3 from "../assets/grid/landscape3.jpg";
import landscape4 from "../assets/grid/landscape4.jpg";
import medium1 from "../assets/grid/medium1.jpg";
import medium2 from "../assets/grid/medium2.jpg";
import portrait from "../assets/grid/portrait1.jpg";

const VideoGrid = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const serviceCards = [
        {
            id: 1,
            title: "Corporate Videos",
            description: "Professional corporate video production services tailored to enhance your business communications.",
            image: landscape1
        },
        {
            id: 2,
            title: "Documentaries",
            description: "Compelling storytelling through documentary filmmaking.",
            image: medium1
        },
        {
            id: 3,
            title: "Shorts & Reels",
            description: "Engaging short-form content for social media platforms.",
            image: portrait
        },
        {
            id: 4,
            title: "Entertainment",
            description: "Creative storytelling through cinematic narratives.",
            image: medium2
        },
        {
            id: 5,
            title: "Commercials",
            description: "Impactful advertising solutions for your brand.",
            image: landscape2
        },
        {
            id: 6,
            title: "Live Streaming",
            description: "Professional live event coverage and streaming services.",
            image: landscape3
        },
        {
            id: 7,
            title: "Animation & VFX",
            description: "Stunning visual effects and animation services.",
            image: landscape4
        }
    ];

    return (
        <div className="w-full px-4 md:px-16 bg-black">
            <h1 className="text-2xl md:text-3xl font-syne font-bold text-center mb-8 text-white pt-8">
                We're Video Pros in Many Industries!
            </h1>

          {/* Mobile View */}
          <div className="block md:hidden">
                {serviceCards.map((card) => (
                    <div key={card.id} className="mb-6">
                        <div 
                            className={`relative h-40 bg-gray-800 rounded-3xl overflow-hidden transition-all duration-500 ${
                                expandedCard === card.id ? 'h-52' : 'h-40'
                            }`}
                        >
                            <img 
                                src={card.image} 
                                alt="" 
                                className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
                                    expandedCard === card.id ? 'opacity-30' : 'opacity-55'
                                }`}
                            />
                            <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                                expandedCard === card.id ? 'opacity-80' : 'opacity-60'
                            }`}></div>
                            
                            <div className="absolute inset-0 p-4 flex flex-col justify-between">
                                <h2 className={`text-xl font-syne font-bold transition-all duration-500 ${
                                    expandedCard === card.id 
                                    ? 'bg-gradient-to-r from-[#D76B30] via-[#FF8F5C] to-[#2D9B8A] bg-clip-text text-transparent' 
                                    : 'text-white'
                                }`}>
                                    {card.title}
                                </h2>
                                <div>
                                    <div className={`overflow-hidden transition-all duration-500 ${
                                        expandedCard === card.id ? 'max-h-20' : 'max-h-0'
                                    }`}>
                                        <p className="text-white/90 font-syne text-sm mb-2">{card.description}</p>
                                    </div>
                                    <button
                                        onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
                                        className="text-white border border-white px-4 py-1 rounded-full text-sm hover:bg-white hover:text-black transition-colors"
                                    >
                                        {expandedCard === card.id ? 'Show Less' : 'Learn More →'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            {/* Desktop View */}
            <div className="hidden md:grid grid-cols-12 gap-4 auto-rows-min">
                {/* First Row + Vertical Card */}
                <div className="col-span-6 row-span-1">
                    <div className="group relative h-80 bg-gray-800 rounded-lg overflow-hidden">
                        <img src={landscape1} alt="" className="w-full h-full object-cover rounded-lg opacity-75" />
                        <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-95 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <h2 className="text-2xl font-semibold text-white transform translate-y-0 group-hover:translate-y-8 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#D76B30] group-hover:via-[#FF8F5C] group-hover:to-[#2D9B8A] group-hover:bg-clip-text group-hover:text-transparent">Corporate Videos</h2>
                            <p className="text-white/90 font-inter transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                                Professional corporate video production services tailored to enhance your business communications.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 row-span-1">
                    <div className="group relative h-80 bg-gray-800 rounded-lg overflow-hidden">
                        <img src={medium1} alt="" className="w-full h-full object-cover rounded-lg opacity-75" />
                        <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-95 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <h2 className="text-2xl font-semibold text-white transform translate-y-0 group-hover:translate-y-8 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#D76B30] group-hover:via-[#FF8F5C] group-hover:to-[#2D9B8A] group-hover:bg-clip-text group-hover:text-transparent">Documentaries</h2>
                            <p className="text-white/90 font-inter  transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                                Compelling storytelling through documentary filmmaking.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 row-span-2">
                    <div className="group relative h-full bg-gray-800 rounded-lg overflow-hidden">
                        <img src={portrait} alt="" className="w-full h-full object-cover rounded-lg opacity-75" />
                        <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-95 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <h2 className="text-2xl font-semibold text-white transform translate-y-0 group-hover:translate-y-8 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#D76B30] group-hover:via-[#FF8F5C] group-hover:to-[#2D9B8A] group-hover:bg-clip-text group-hover:text-transparent">Shorts & Reels</h2>
                            <p className="text-white/90 font-inter transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                                Engaging short-form content for social media platforms.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second Row */}
                <div className="col-span-3 row-span-1">
                    <div className="group relative h-80 bg-gray-800 rounded-lg overflow-hidden">
                        <img src={medium2} alt="" className="w-full h-full object-cover rounded-lg opacity-75" />
                        <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-95 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <h2 className="text-2xl font-semibold text-white transform translate-y-0 group-hover:translate-y-8 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#D76B30] group-hover:via-[#FF8F5C] group-hover:to-[#2D9B8A] group-hover:bg-clip-text group-hover:text-transparent">Entertainment</h2>
                            <p className="text-white/90 font-inter transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                                Creative storytelling through cinematic narratives.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-6 row-span-1">
                    <div className="group relative h-80 bg-gray-800 rounded-lg overflow-hidden">
                        <img src={landscape2} alt="" className="w-full h-full object-cover rounded-lg opacity-75" />
                        <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-95 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <h2 className="text-2xl font-semibold text-white transform translate-y-0 group-hover:translate-y-8 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#D76B30] group-hover:via-[#FF8F5C] group-hover:to-[#2D9B8A] group-hover:bg-clip-text group-hover:text-transparent">Commercials</h2>
                            <p className="text-white/90 font-inter transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                                Impactful advertising solutions for your brand.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Third Row */}
                <div className="col-span-6 row-span-1">
                    <div className="group relative h-80 bg-gray-800 rounded-lg overflow-hidden">
                        <img src={landscape3} alt="" className="w-full h-full object-cover rounded-lg opacity-75" />
                        <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-95 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <h2 className="text-2xl font-semibold text-white transform translate-y-0 group-hover:translate-y-8 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#D76B30] group-hover:via-[#FF8F5C] group-hover:to-[#2D9B8A] group-hover:bg-clip-text group-hover:text-transparent">Live Streaming</h2>
                            <p className="text-white/90 font-inter transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                                Professional live event coverage and streaming services.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-6 row-span-1">
                    <div className="group relative h-80 bg-gray-800 rounded-lg overflow-hidden">
                        <img src={landscape4} alt="" className="w-full h-full object-cover rounded-lg opacity-75" />
                        <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-95 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
                                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <h2 className="text-2xl font-semibold text-white transform translate-y-0 group-hover:translate-y-8 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#D76B30] group-hover:via-[#FF8F5C] group-hover:to-[#2D9B8A] group-hover:bg-clip-text group-hover:text-transparent">Animation & VFX</h2>
                            <p className="text-white/90 font-inter transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                                Stunning visual effects and animation services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoGrid;