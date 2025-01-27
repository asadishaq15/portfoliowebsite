import React from 'react';
import { motion } from 'framer-motion';

import img1 from "../assets/blog/blog1.png"
import img2 from "../assets/blog/blog2.png"
import img3 from "../assets/blog/blog3.png"
import img4 from "../assets/blog/blog4.png"
import img5 from "../assets/blog/blog5.png"

const MarqueeSection = () => {
const images = [img1, img2, img3, img4, img5];

return (
<div className="w-full min-h-screen bg-black text-white p-8 flex items-center justify-center">
<div className="max-w-6xl w-full mx-auto rounded-[40px] bg-black border border-white/20 relative overflow-hidden">
{/* Content Section */}
<div className="max-w-4xl mx-auto p-8 pb-12">
<h1 className="text-3xl md:text-4xl font-bold">
We're the storytellers, visionaries, and creative dreamers who turn your{' '}
<span className="text-gray-500">ideas into cinematic adventures.</span>{' '}
With us, work feels like play, and every project is a chance to{' '}
<span className="text-gray-500">make magic</span> happen.
</h1>
</div>
    {/* Marquee Section */}
    <div className="relative w-full overflow-hidden h-80">
      {/* Left Overlay */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
      
      {/* Right Overlay */}
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

      <motion.div
        className="flex absolute"
        animate={{
            x: [-1600, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {images.concat(images).map((image, idx) => (
          <motion.div
            key={idx}
            className="relative min-w-[400px] h-80" 
            initial={{ width: '100%' }}
            whileInView={{
              width: ['100%', '60%', '100%'],
            }}
            transition={{
              duration: 4,
              times: [0, 0.5, 1],
              ease: "easeInOut",
            }}
            viewport={{
              once: false,
              margin: "0px -25% 0px -25%"
            }}
          >
            <div
              className="w-full h-full bg-cover bg-center rounded-2xl" 
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</div>
);
};

export default MarqueeSection;