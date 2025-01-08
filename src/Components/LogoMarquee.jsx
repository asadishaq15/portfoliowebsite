import { motion } from "framer-motion";
import { useState } from "react";

const LogoMarquee = () => {
  const [hoveredLogo, setHoveredLogo] = useState(null);

  const logos = [
    { id: 1, text: "LOGO IPSUM" },
    { id: 2, text: "ロゴ" },
    { id: 3, text: "LOGO IPSUM" },
    { id: 4, text: "标识" },
    { id: 5, text: "LOGO IPSUM" },
    { id: 6, text: "LOGO IPSUM" },
  ];

  const LogoItem = ({ logo, index, setKey }) => {
    const isHovered = hoveredLogo === `${setKey}-${index}`;
    
    return (
      <div 
        className="flex items-center relative"
        onMouseEnter={() => setHoveredLogo(`${setKey}-${index}`)}
        onMouseLeave={() => setHoveredLogo(null)}
      >
        <motion.span 
          className="text-gray-300 text-xl font-light tracking-wider relative z-10 px-16 py-6"
          animate={{
            scale: isHovered ? 1.1 : 1,
            color: isHovered ? '#ffffff' : '#d1d5db'
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
        >
          {logo.text}
        </motion.span>
      </div>
    );
  };

  return (
    <div className="w-full bg-black py-16 px-4">
      <h1 className="text-center text-white font-playfair text-2xl md:text-4xl font-light mb-12">
        Standing Tall with Our Esteemed Brand Partners
      </h1>

      <div className="relative w-full overflow-hidden">
        <div className="relative max-w-[90%] mx-auto overflow-hidden rounded-full border border-gray-800">
          
          
          <motion.div
            className="flex items-center whitespace-nowrap"
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            <div className="flex items-center divide-x divide-gray-800">
              {logos.map((logo, index) => (
                <LogoItem 
                  key={`first-${index}`}
                  logo={logo}
                  index={index}
                  setKey="first"
                />
              ))}
            </div>

            <div className="flex items-center divide-x divide-gray-800">
              {logos.map((logo, index) => (
                <LogoItem 
                  key={`second-${index}`}
                  logo={logo}
                  index={index}
                  setKey="second"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;