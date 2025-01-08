import React from 'react';
import bg from "../assets/bg/hero-bg-portfolio.png";
import GradientButton from './GradientButton';

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
        <h1 className="font-syne text-white text-4xl md:text-6xl lg:text-7xl font-medium tracking-wide max-w-5xl leading-tight mb-6">
          Turning Video into Vibrant Conversations.
        </h1>
        
        <p className="font-syne text-white/90 text-base md:text-lg lg:text-xl max-w-3xl mb-10">
          We're your friendly video wizards creating fantastic commercials, corporate videos, social ads and many more.
        </p>
        
        <GradientButton onClick={() => console.log('clicked')}>
          Buy This Template
        </GradientButton>
      </div>
    </div>
  );
};

export default Hero;