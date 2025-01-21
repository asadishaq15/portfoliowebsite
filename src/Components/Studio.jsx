import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GradientButton from './GradientButton';

const images = [
  {
    title: "Professional Gears",
    url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Recording Facility",
    url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Studio Space",
    url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop"
  },
];

function StudioComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getPrevIndex = () => (currentIndex - 1 + images.length) % images.length;
  const getNextIndex = () => (currentIndex + 1) % images.length;

  return (
    <div className="min-h-screen bg-black py-16 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          {/* Content Container */}
          <div className="border-[1px] border-gray-400 rounded-[50px] p-8 overflow-hidden">
            <h1 className="text-4xl md:text-5xl text-white font-semibold text-center mb-6">
              Rent, Shoot, Wow: Our Studio Awaits!
            </h1>
            
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              We've got the coolest tech and all the resources to bring your ideas to life. 
              Book a tour and come be a part of the excitement – we're eager to show you around with a smile!
            </p>

            <GradientButton className="px-6 py-2 mb-8 rounded-full bg-gradient-to-r  mx-auto block">
              Book a Tour
            </GradientButton>

            {/* Slider Container with Overflow */}
            <div className="relative overflow-visible">
              <div className="flex items-center justify-center gap-8 h-[400px] -mx-32">
                {/* Previous Slide */}
                <motion.div 
                  className="relative w-2/5 h-full rounded-2xl overflow-hidden opacity-50 transform scale-90"
                  whileHover={{ scale: 0.95 }}
                  onClick={prev}
                >
                  <img
                    src={images[getPrevIndex()].url}
                    alt="Previous"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Current Slide */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-3/5 h-full rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img
                      src={images[currentIndex].url}
                      alt={images[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/70 to-transparent">
                      <h2 className="text-white text-2xl font-semibold">
                        {images[currentIndex].title}
                      </h2>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Next Slide */}
                <motion.div 
                  className="relative w-2/5 h-full rounded-2xl overflow-hidden opacity-50 transform scale-90"
                  whileHover={{ scale: 0.95 }}
                  onClick={next}
                >
                  <img
                    src={images[getNextIndex()].url}
                    alt="Next"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors z-10"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors z-10"
              >
                <ChevronRight size={24} />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudioComponent;