import { motion } from "framer-motion";
import { useState } from "react";
import Filming from "../assets/Services/filming.png";
import Motiongrid from "../assets/Services/motionGraphics.png";
import ScriptWriting from "../assets/Services/scriptwriting.png";
import soundDesign from "../assets/Services/sounddesign.png";
import vfx from "../assets/Services/vfx.png";


const MarqueeText = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      name: "Filming",
      image: Filming
    },
    {
      name: "Sound Design",
      image: soundDesign
    },
    {
      name: "Color Grading",
      image: vfx
    },
    {
      name: "Video Editing",
      image: Filming
    },
    {
      name: "Motion Graphics",
      image: Motiongrid
    },
    {
      name: "Visual Effects",
      image: vfx
    },
    {
      name: "Storyboarding",
      image: ScriptWriting
    },
  ];

  const ServiceItem = ({ service, index, setKey }) => {
    const isHovered = hoveredService === `${setKey}-${index}`;
    
    return (
      <div 
        className="flex items-center space-x-14 relative" 
        onMouseEnter={() => setHoveredService(`${setKey}-${index}`)}
        onMouseLeave={() => setHoveredService(null)}
      >
        <div className="relative">
          <motion.div
            initial={{ 
              opacity: 0,
              scale: 1.2,
              rotate: 0
            }}
            animate={{ 
              opacity: isHovered ? 0.8 : 0,
              scale: isHovered ? 0.75 : 1.2,
              rotate: isHovered ? 5 : 0
            }}
            exit={{
              opacity: 0,
              scale: 1.2,
              rotate: 0
            }}
            transition={{ 
              duration: 0.6,
              scale: {
                type: "spring",
                stiffness: 200,
                damping: 20
              },
              rotate: {
                type: "spring",
                stiffness: 150,
                damping: 15
              }
            }}
            className="absolute -z-10"
            style={{
              top: '50%',
              left: '50%',
              translateX: '-50%',
              translateY: '-50%',
              width: '350px',
              height: '350px'
            }}
          >
            <div className="w-full h-full rounded-3xl overflow-hidden">
              <motion.div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${service.image})`,
                  filter: 'brightness(0.8)',
                }}
                initial={{
                  scale: 1,
                  rotate: 0
                }}
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? 5 : 0
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1]
                }}
              />
            </div>
          </motion.div>
          <div className="relative">
            <div className="absolute left-0 w-12 h-full bg-gradient-to-r from-black to-transparent z-20" />
            <div className="absolute right-0 w-12 h-full bg-gradient-to-l from-black to-transparent z-20" />
            <motion.span 
              className="relative z-10 text-5xl font-bold tracking-wider"
              style={{ 
                fontFamily: 'Syne, sans-serif',
                background: 'linear-gradient(90deg, #808080 0%, #A0A0A0 50%, #808080 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
                padding: '0 10px'
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }} 
            >
              {service.name}
            </motion.span>
          </div>
        </div>
        <motion.div
          className="w-4 h-4 rounded-full bg-red-500"
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: [1, 0.5, 1]
          }}
          transition={{
            scale: {
              duration: 0.4,
              ease: "easeOut"
            },
            opacity: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </div>
    );
  };

  return (
    <div className="relative w-full h-[60vh] bg-black overflow-hidden">
      <div className="absolute left-0 md:w-24 w-16 h-full z-10 bg-gradient-to-r from-black via-black to-transparent" />
      <div className="absolute right-0 md:w-24 w-16 h-full z-10 bg-gradient-to-l from-black via-black to-transparent" />

      <motion.div
        className="flex items-center whitespace-nowrap h-full"
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
        <div className="flex items-center space-x-8">
          {services.map((service, index) => (
            <ServiceItem 
              key={`first-${index}`}
              service={service}
              index={index}
              setKey="first"
            />
          ))}
        </div>

        <div className="flex items-center space-x-8 ml-8">
          {services.map((service, index) => (
            <ServiceItem 
              key={`second-${index}`}
              service={service}
              index={index}
              setKey="second"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MarqueeText;