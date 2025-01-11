import React, { useState, useEffect, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const testimonials = [
  {
    id: 1,
    logo: "LOGO IPSUM",
    text: "Working with CreativeEdge Productions was exceptional! Their team's calm and accommodating demeanor, paired with a positive environment, ensured the successful completion of our promotional videos.",
    author: "MICHAEL LEE",
    position: "Director of Sales, EcoGrowth Enterprises",
  },
  {
    id: 2,
    logo: "LOGO IPSUM",
    text: "Collaborating with CreativeEdge Productions was fantastic! Their approachable and friendly staff, along with a vibrant atmosphere, facilitated the effective creation of our marketing videos.",
    author: "EMILY RODRIGUEZ",
    position: "Creative Director, TechVision Solutions",
  },
  {
    id: 3,
    logo: "LOGO IPSUM",
    text: "Partnering with CreativeEdge Productions was a pleasure! Their team's supportive and easy-going style, combined with an enjoyable setting, led to the successful production of our training videos.",
    author: "JAMES SMITH",
    position: "Marketing Manager, GreenTech Innovations",
  },
];

const TestimonialCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isMobile, setIsMobile] = useState(false);
  const [dragStart, setDragStart] = useState(null);
  const [dragEnd, setDragEnd] = useState(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const paginate = useCallback((newDirection) => {
    const newPage = page + newDirection;
    if (newPage < 0) {
      setPage([testimonials.length - 1, newDirection]);
    } else if (newPage >= testimonials.length) {
      setPage([0, newDirection]);
    } else {
      setPage([newPage, newDirection]);
    }
  }, [page]);

  const handleDragStart = (e) => {
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    setDragEnd(null);
    setDragStart(clientX);
  };

  const handleDragMove = (e) => {
    if (!dragStart) return;
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    setDragEnd(clientX);
  };

  const handleDragEnd = () => {
    if (!dragStart || !dragEnd) return;
    
    const distance = dragStart - dragEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      paginate(1);
    } else if (isRightSwipe) {
      paginate(-1);
    }

    setDragStart(null);
    setDragEnd(null);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative min-h-screen w-full bg-black bg-opacity-95 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-10 md:py-20">
        <h1 className="text-white font-syne text-center text-2xl md:text-3xl font-semibold mb-10 md:mb-20">
          Our Client Chronicles:
          <br />
          Stories that Make Us Smile!
        </h1>

        <div className="relative max-w-[1400px] h-[600px] md:h-[500px] mx-auto">
          {!isMobile && (
            <>
              <motion.div 
                initial={{ opacity: 0.7, scale: 0.9, x: "-95%" }}
                animate={{ opacity: 0.7, scale: 0.9, x: "-95%" }}
                transition={{ duration: 0.8 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-3xl p-8 border border-white/10"
              >
                <div className="opacity-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white bg-opacity-20 px-4 py-2 rounded">
                      <p className="text-gray-300 text-sm font-medium">
                        {testimonials[(page - 1 + testimonials.length) % testimonials.length].logo}
                      </p>
                    </div>
                  </div>
                  <p className="text-white font-inter text-3xl font-light leading-relaxed">
                    {testimonials[(page - 1 + testimonials.length) % testimonials.length].text}
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0.7, scale: 0.9, x: "95%" }}
                animate={{ opacity: 0.7, scale: 0.9, x: "95%" }}
                transition={{ duration: 0.8 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-3xl p-8 border border-white/10"
              >
                <div className="opacity-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white bg-opacity-20 px-4 py-2 rounded">
                      <p className="text-gray-300 text-sm font-medium">
                        {testimonials[(page + 1) % testimonials.length].logo}
                      </p>
                    </div>
                  </div>
                  <p className="text-white font-inter text-3xl font-light leading-relaxed">
                    {testimonials[(page + 1) % testimonials.length].text}
                  </p>
                </div>
              </motion.div>
            </>
          )}

          <div className="absolute w-full h-full flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 150, damping: 30 },
                  opacity: { duration: 0.5 },
                }}
                className="group absolute w-[80vw] md:w-[1100px] h-[400px] md:h-[530px] bg-[rgba(255,255,255,0.05)] backdrop-blur-md rounded-3xl p-6 md:p-12 border border-white/30 overflow-hidden z-10 cursor-grab active:cursor-grabbing"
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="bg-white bg-opacity-20 px-3 md:px-4 py-1 md:py-2 rounded">
                    <p className="text-gray-300 text-xs md:text-sm font-medium">
                      {testimonials[page].logo}
                    </p>
                  </div>
                </div>

                <div className="mb-6 md:mb-8">
                  <p className="text-white font-inter text-base md:text-4xl font-light leading-relaxed">
                    {testimonials[page].text}
                  </p>

                  <div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 opacity-20">
                    <AlertTriangle className="text-white text-4xl md:text-7xl" />
                  </div>
                </div>

                <div className="text-gray-400 mt-8 md:mt-12">
                  <p className="text-lg md:text-xl font-medium">{testimonials[page].author}</p>
                  <p className="text-sm md:text-base">{testimonials[page].position}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => paginate(-1)}
            className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 md:p-4 rounded-full z-20 transition-all duration-300"
          >
            <FiChevronLeft className="text-white text-xl md:text-2xl" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 md:p-4 rounded-full z-20 transition-all duration-300"
          >
            <FiChevronRight className="text-white text-xl md:text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;