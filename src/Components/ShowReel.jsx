import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollVideo = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const videoScale = useTransform(scrollYProgress, [0, 0.7], [isMobile ? 0.3 : 0.6, isMobile ? 1.2 : 2.3]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, isMobile ? 0.15 : 0.3]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [0.7, 0]);
  
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 200]); 
  const videoY = useTransform(scrollYProgress, [0, 0.7], [0, -100]); 

  return (
    <div className="relative min-h-[300vh] bg-black -top-4">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-black z-10"
          style={{ opacity: overlayOpacity }}
        />

        <motion.div 
          className="absolute -top-5 left-0 right-0 w-full z-20"
          style={{ 
            y: textY,
            scale: textScale,
          }}
        >
          <motion.h1 
            className="text-white text-center px-4"
            style={{ 
              opacity: textOpacity,
              fontFamily: '"Syne", "Syne Placeholder", sans-serif',
              fontSize: isMobile ? '100px' : '200px',
              fontWeight: 700,
              letterSpacing: '-0.05em',
              WebkitMaskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
              maskImage: 'linear-gradient(to right, black 60%, transparent 100%)',
            }}
          >
            SHOWREEL
          </motion.h1>
        </motion.div>

        <motion.div 
          className="absolute inset-0 flex items-center justify-center mt-40"
          style={{ 
            scale: videoScale,
            y: videoY,
            zIndex: 30
          }}
        >
          <div className="w-full max-w-5xl mx-4 aspect-video bg-gray-900 overflow-hidden rounded-[50px]">
            <video 
              className="w-full h-full object-cover"
              src="https://cdn.pixabay.com/video/2021/09/11/88207-602915574_large.mp4"
              autoPlay 
              loop 
              muted 
              playsInline
              onError={(e) => console.error("Video failed to load:", e)}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollVideo;