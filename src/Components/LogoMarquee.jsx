
import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
import Logo1 from '../assets/Logo/dummyLogo1.svg';
import Logo2 from '../assets/Logo/dummylogo2.svg';
import Logo3 from '../assets/Logo/dummylogo3.svg';
import Logo4 from '../assets/Logo/dummylogo4.svg';
import Logo5 from '../assets/Logo/dummylogo6.svg';
import Logo6 from '../assets/Logo/dummylogo7.svg';
import Logo7 from '../assets/Logo/dummylogo8.svg';

const LogoMarquee = () => {
    const [hoveredLogo, setHoveredLogo] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimationControls();
  
    const logos = [
      { id: 1, src: Logo1 },
      { id: 2, src: Logo2 },
      { id: 3, src: Logo3 },
      { id: 4, src: Logo4 },
      { id: 5, src: Logo5 },
      { id: 6, src: Logo6 },
      { id: 7, src: Logo7 },
    ];
  
    const LogoItem = ({ logo, index, setKey, isLast }) => {
      const isLogoHovered = hoveredLogo === `${setKey}-${index}`;
      
      return (
        <div 
          className="flex items-center justify-center px-8 min-w-[200px] h-[80px] relative"
          onMouseEnter={() => {
            setHoveredLogo(`${setKey}-${index}`);
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setHoveredLogo(null);
            setIsHovered(false);
          }}
        >
          <motion.img 
            src={logo.src} 
            alt={`Partner Logo ${index + 1}`} 
            className="h-8 md:h-10 w-auto object-contain" 
            animate={{
              scale: isLogoHovered ? 1.1 : 1,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
          />
          {!isLast && (
            <div className="absolute right-0 h-[100%] w-[2px] bg-gray-700"></div>
          )}
        </div>
      );
    };
  
    const LogoGroup = ({ setKey }) => (
      <div className="flex items-center relative">
        {logos.map((logo, index) => (
          <LogoItem 
            key={`${setKey}-${index}`}
            logo={logo}
            index={index}
            setKey={setKey}
            isLast={index === logos.length - 1}
          />
        ))}
        <div className="absolute right-0 h-[100%] w-[2px] bg-gray-700"></div>
      </div>
    );
  
    // Start the animation immediately when component mounts
    React.useEffect(() => {
      controls.start({
        x: -1920,
        transition: {
          duration: 20, // Default speed (faster)
          ease: "linear",
          repeat: Infinity,
        }
      });
    }, []);
  
    return (
      <div className="w-full bg-black py-16 px-4">
        <h2 className="text-white font-syne text-2xl md:text-2xl font-bold mb-12 max-w-[800px] mx-auto pl-4">
          Standing Tall with Our Esteemed Brand Partners
        </h2>
  
        <div className="relative w-full overflow-hidden">
          <div className="relative max-w-[85%] mx-auto overflow-hidden rounded-full border border-gray-800">
            {/* Left Gradient Overlay */}
            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
            
            <motion.div
              className="flex items-center"
              animate={controls}
              initial={{ x: 0 }}
              onMouseEnter={() => {
                controls.start({
                  x: -1920,
                  transition: {
                    duration: 60, // Slower speed when hovered
                    ease: "linear",
                    repeat: Infinity,
                  }
                });
              }}
              onMouseLeave={() => {
                controls.start({
                  x: -1920,
                  transition: {
                    duration: 20, // Back to default speed
                    ease: "linear",
                    repeat: Infinity,
                  }
                });
              }}
            >
              <LogoGroup setKey="first" />
              <LogoGroup setKey="second" />
              <LogoGroup setKey="third" />
            </motion.div>
  
            {/* Right Gradient Overlay */}
            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default LogoMarquee;