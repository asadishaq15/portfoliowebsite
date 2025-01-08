import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GradientButton from './GradientButton';

gsap.registerPlugin(ScrollTrigger);

const JourneySection = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const [expandedCard, setExpandedCard] = useState(null);

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
      <style jsx>{`
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
          overflow: hidden;
          transition: all 0.5s ease;
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
            width: 24px; /* Reduced width */
            height: 24px; /* Reduced height */
            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, 0.3); /* Reduced border size */
            transition: all 0.3s ease;
          }
  
          .arrow-icon {
            transition: all 0.3s ease;
            font-size: 0.75rem; /* Adjusted icon size */
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
            <h1 className="text-2xl md:text-5xl font-bold leading-tight">
              From Concept<br />
              To Completion:<br />
              We've Got You<br />
              Covered!
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