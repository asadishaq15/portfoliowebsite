import React from 'react';
import bg from "../assets/bg/hero-bg-portfolio.png";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
            backgroundImage: `url(${bg})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40" />

      {/* Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-black/100 to-transparent"></div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-black/100 to-transparent"></div>

      {/* Left Gradient */}
      <div className="absolute top-0 left-0 bottom-0 w-36 bg-gradient-to-r from-black/100 to-transparent"></div>

      {/* Right Gradient */}
      <div className="absolute top-0 right-0 bottom-0 w-36 bg-gradient-to-l from-black/100 to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-medium tracking-wide max-w-5xl leading-tight mb-6">
          Turning Video into Vibrant Conversations.
        </h1>
        
        <p className="text-white/90 text-base md:text-lg lg:text-xl max-w-3xl mb-10">
          We're your friendly video wizards creating fantastic commercials, corporate videos, social ads and many more.
        </p>
        
        <button className="px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-[#D76B30] to-[#2D9B8A] text-white rounded-full text-base md:text-lg font-medium hover:opacity-90 transition-opacity duration-300 border-2 border-[#FFFFFF] shadow-lg">
  Buy This Template
</button>
      </div>
    </div>
  );
};

export default Hero;