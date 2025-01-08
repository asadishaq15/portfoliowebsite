import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GradientButton from './GradientButton';

gsap.registerPlugin(ScrollTrigger);

const JourneySection = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Only run GSAP animation on desktop screens
    if (window.innerWidth > 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom center',
          scrub: true,
          markers: false,
          pin: false,
          smoothChildTiming: true,
        }
      });

      tl.to(titleRef.current, {
        y: window.innerHeight * 0.5,
        ease: 'linear',
      });

      return () => {
        tl.kill();
      };
    }
  }, []);

  const cards = [
    {
      title: 'Pre-Production',
      description:
        'Pre-production serves as the pivotal phase in any creative endeavor, encompassing planning, idea refinement, budgeting, schedule creation, and the meticulous organization of logistical details.',
    },
    {
      title: 'Production',
      description:
        'Production represents the dynamic phase of a creative project, where the plans from pre-production spring to life, with cameras rolling, actors delivering their performances, and the realization of the creative vision.',
    },
    {
      title: 'Post-Production',
      description:
        'Post-production is where the magic comes together, combining all elements into a cohesive final product through editing, sound design, visual effects, and careful refinement.',
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/3 md:pr-8 relative mb-8 md:mb-0">
        <div 
            ref={titleRef} 
            className="md:sticky md:top-0"
            style={{ paddingTop: '5rem' }}
          >
            <h1 className="text-2xl md:text-5xl font-bold leading-tight">
              From Concept
              <br />
              To Completion:
              <br />
              We've Got You
              <br />
              Covered!
            </h1>
          </div>
          {/* Button only visible on desktop */}
          <div className="hidden md:block absolute bottom-0 left-0">
            <GradientButton>
              Learn More
            </GradientButton>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3 space-y-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-20" />
              <div className="relative z-10">
                <h2 className="text-3xl font-semibold mb-4">{card.title}</h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {card.description}
                </p>
                <button className="inline-flex items-center px-6 py-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors duration-300">
                  <span className="mr-2">LEARN MORE</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Button visible only on mobile, at the bottom */}
        <div className="md:hidden mt-8 text-center">
          <GradientButton>
            Learn More
          </GradientButton>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;