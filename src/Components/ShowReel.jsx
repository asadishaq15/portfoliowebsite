import React, { useState, useEffect } from 'react';
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
  
  const videoScale = useTransform(scrollYProgress, [0, 0.7], [0.8, isMobile ? 1 : 2.3]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, isMobile ? 0.7 : 0.3]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, isMobile ? 0.8 : 0.7]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [0.7, isMobile ? 0.4 : 0]);
  
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, isMobile ? 50 : 200]); 
  const videoY = useTransform(scrollYProgress, [0, 0.7], [0, isMobile ? -50 : -100]); 

  return (
    <div className={`relative ${isMobile ? 'min-h-screen' : 'min-h-[300vh]'} bg-black -top-4`}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-black z-10"
          style={{ opacity: overlayOpacity }}
        />

        <motion.div 
          className="absolute top-12 md:top-0 left-0 right-0 w-full z-20"
          style={{ 
            y: textY,
            scale: textScale,
          }}
        >
          <motion.h1 
            className="text-white text-center"
            style={{ 
              opacity: textOpacity,
              fontFamily: '"Syne", "Syne Placeholder", sans-serif',
              fontSize: isMobile ? '4.2rem' : '12rem',
              fontWeight: 700,
              letterSpacing: '-0.05em',
              WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
              maskImage: 'linear-gradient(to right, black 80%, transparent 100%)',
            }}
          >
            SHOWREEL
          </motion.h1>
        </motion.div>

        <motion.div 
          className="absolute inset-0 flex items-center justify-center mt-16 md:mt-40"
          style={{ 
            scale: videoScale,
            y: videoY,
            zIndex: 30
          }}
        >
          <div className={`
            relative
            w-full
            mx-auto
            px-4
            md:px-8
            ${isMobile ? 'aspect-[9/14] max-w-base' : 'aspect-video max-w-5xl'}
          `}>
            <div className="absolute inset-0 rounded-[55px] md:rounded-3xl overflow-hidden bg-gray-900">
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollVideo;