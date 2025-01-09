// HeroSection.jsx
import React, { useEffect } from 'react';

const HeroSection = ({ 
  backgroundImage, 
  title, 
  description,
  scrollText = "SCROLL" 
}) => {
  useEffect(() => {
    // Animation for the line
    const line = document.querySelector('.scroll-line');
    const animateLine = () => {
      line.style.transform = 'scaleY(1)';
      setTimeout(() => {
        line.style.transform = 'scaleY(0)';
      }, 1500);
    };

    // Run animation every 3 seconds
    const interval = setInterval(animateLine, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-start justify-center px-8 md:px-16 text-white">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 ml-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl ml-4">
          {description}
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8  flex flex-col px-8 md:px-16 items-center text-white">
        <span className="text-sm tracking-widest mb-4">
          {scrollText}
        </span>
        <div className="scroll-line h-16 w-[1px] bg-white transform origin-top scale-y-0 transition-transform duration-1000" />
      </div>
    </div>
  );
};

export default HeroSection;