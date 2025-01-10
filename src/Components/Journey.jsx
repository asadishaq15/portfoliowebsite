import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GradientButton from './GradientButton';
import img from "../assets/blog/blog2.png";
import img2 from "../assets/blog/blog1.png";
import img3 from "../assets/blog/blog3.png";
gsap.registerPlugin(ScrollTrigger);

const JourneySection = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
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

  const cardDetails = {
    'Post-Production': [
      'COLOR GRADING',
      'AUDIO ENHANCEMENT', 
      '3D ANIMATION AND CGI',
      'SUBTITLES AND CLOSED CAPTIONS',
      'WHITEBOARD ANIMATION',
      'DVD AND BLU-RAY AUTHORING',
      'DISTRIBUTION SERVICES',
      'ARCHIVING AND BACKUP'
    ],
    'Pre-Production': [
      'SCRIPT DEVELOPMENT',
      'STORYBOARDING',
      'LOCATION SCOUTING', 
      'CASTING',
      'BUDGETING',
      'SCHEDULING'
    ],
    'Production': [
      'FILMING',
      'LIGHTING',
      'SOUND RECORDING',
      'SET MANAGEMENT',
      'DIRECTION',
      'EQUIPMENT HANDLING'
    ]
  };

  const cards = [
    {
      title: 'Pre-Production',
      description:
        'Pre-production serves as the pivotal phase in any creative endeavor, encompassing planning, idea refinement, budgeting, schedule creation, and the meticulous organization of logistical details.',
      image: img
    },
    {
      title: 'Production', 
      description:
        'Production represents the dynamic phase of a creative project, where the plans from pre-production spring to life, with cameras rolling, actors delivering their performances, and the realization of the creative vision.',
      image: img2
    },
    {
      title: 'Post-Production',
      description:
        'Post-production is where the magic comes together, combining all elements into a cohesive final product through editing, sound design, visual effects, and careful refinement.',
      image: img3
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-visible relative">
         <div className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="absolute h-full"
            style={{
              left: `${(index + 1) * 10}%`,
              width: '1px',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700&display=swap" rel="stylesheet" />
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700&display=swap');

        body {
            font-family: 'Syne', sans-serif;
          }
        
          @keyframes gradientMoveIn {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        
          @keyframes gradientMoveOut {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        
          .card-container {
            position: relative;
            overflow: visible;
            transition: all 0.5s ease;
          }
        
          .floating-image {
            display: none; /* Hide by default on mobile */
            position: absolute;
            top: -85%;
            right: 10%;
            width: 250px;
            height: 280px;
            object-fit: cover;
            border-radius: 25px;
            opacity: 0;
            transform: translateX(100px) rotate(0deg);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            pointer-events: none;
            z-index: 20;
            filter: grayscale(100%) brightness(0.8);
          }
        
          @media (min-width: 768px) {
            .floating-image {
              display: block; /* Show only on desktop */
            }
        
            .card-container:hover .floating-image {
              opacity: 1;
              transform: translateX(-100px) rotate(-5deg);
              right: 20%;
            }
          }
        
          .card-container .gradient-overlay {
            animation: gradientMoveOut 1.5s ease-in-out forwards;
          }
        
          .card-container:hover .gradient-overlay {
            opacity: 1;
            animation: gradientMoveIn 1.5s ease-in-out forwards;
          }
        
          .card-container:hover .arrow-container {
            transform: rotate(90deg);
            background-color: rgba(255, 107, 0, 0.1);
            border-color: #ff6b00;
          }
        
          .card-container:hover .arrow-icon {
            color: #ff6b00;
          }

        .gradient-overlay {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          pointer-events: none;
        }

        .details-dropdown {
          max-height: 0;
          opacity: 0;
          transition: all 0.5s ease-in-out;
          overflow: hidden;
        }

        .details-dropdown.expanded {
          max-height: 500px;
          opacity: 1;
          margin-top: 1.5rem;
        }

        .arrow-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .arrow-icon {
          transition: all 0.3s ease;
          font-size: 0.75rem;
        }

        .learn-more-btn {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1rem;
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 9999px;
          transition: all 0.3s ease;
          font-size: 0.870rem;
        }

        .learn-more-btn:hover {
          border-color: #ff6b00;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 md:pr-8 relative mb-8 md:mb-0">
  <div 
    ref={titleRef} 
    className="md:sticky md:top-0"
    style={{ paddingTop: '5rem' }}
  >
    <h1 className="text-2xl md:text-2xl font-syne font-bold leading-tight w-full md:w-auto">
      From Concept To Completion:<br />
      We've Got You Covered!
    </h1>
  </div>
  <div className="hidden md:block absolute bottom-0 left-0">
    <GradientButton>Learn More</GradientButton>
  </div>
</div>

        <div className="w-full md:w-2/3 space-y-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card-container p-8 rounded-3xl relative cursor-pointer"
              onClick={() => setExpandedCard(expandedCard === card.title ? null : card.title)}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <img 
                src={card.image}
                alt={card.title}
                className="floating-image"
              />
              <div className="gradient-overlay" />
              <div className="relative z-10">
                <h2 className="text-3xl font-semibold mb-4">{card.title}</h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {card.description}
                </p>
                <div className="learn-more-btn">
                  <span className="mr-4">LEARN MORE</span>
                  <div className="arrow-container">
                    <svg
                      className="w-4 h-4 arrow-icon"
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
                  </div>
                </div>

                <div className={`details-dropdown ${expandedCard === card.title ? 'expanded' : ''}`}>
                  <div className="grid grid-cols-2 gap-4">
                    {cardDetails[card.title]?.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span>
                        <span className="text-white/80">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="md:hidden mt-8 text-center">
          <GradientButton>Learn More</GradientButton>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;