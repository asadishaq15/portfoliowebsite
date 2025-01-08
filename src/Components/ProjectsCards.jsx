import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';
import GradientButton from './GradientButton';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Project 1',
    subtitle: 'Eco-Warriors',
    videoId: 'ZhhTD7LfDRY'
  },
  {
    id: 2,
    title: 'Project 2',
    subtitle: 'ModeElite',
    videoId: 'AbyfuW5Aocg'
  },
  {
    id: 3,
    title: 'Project 3',
    subtitle: 'ModeElite',
    videoId: '1iIKbO3Bkn0'
  },
  {
    id: 4,
    title: 'Project 4',
    subtitle: 'ModeElite',
    videoId: '8R7XqslaEUE'
  },
  {
    id: 5,
    title: 'Project 5',
    subtitle: 'ModeElite',
    videoId: 'WvhYuDvH17I'
  },
];

const YouTubeCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const iframeRef = useRef(null);
    const cursorRef = useRef(null);
  
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    };
  
    const handleMouseEnter = () => {
      setIsHovered(true);
      if (iframeRef.current) {
        iframeRef.current.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          '*'
        );
      }
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
      if (iframeRef.current) {
        iframeRef.current.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          '*'
        );
      }
    };
  
    return (
      <div
        className="relative flex-shrink-0 overflow-hidden rounded-[2rem] group cursor-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{ width: '400px', height: '400px',  cursor: 'none'  }}
      >
        <div className={`absolute inset-0 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        {isHovered && (
          <div
            ref={cursorRef}
            className="pointer-events-none custom-cursor absolute z-30 flex items-center justify-center"
            style={{
              transform: `translate(${mousePosition.x - 50}px, ${mousePosition.y - 50}px)`,
              width: '100px',
              height: '100px',
              transition: 'transform 0.1s ease-out',
            }}
          >
            <div className="absolute inset-0 rounded-full border-2 border-gray-500 bg-white/20" />
            <span className="relative text-white text-sm font-semibold tracking-wider text-center whitespace-nowrap">
              WATCH<br />FULL VIDEO
            </span>
          </div>
        )}
        
        {isHovered ? (
          <iframe
            ref={iframeRef}
            className="w-full h-full absolute top-0 left-0 z-0"
            src={`https://www.youtube.com/embed/${project.videoId}?enablejsapi=1&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${project.videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
        ) : (
          <img
            src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
        
        <div className="absolute bottom-8 left-8 text-white z-20">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm opacity-80">{project.subtitle}</p>
        </div>
      </div>
    );
};
const ProjectsCards = () => {
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    if (isMobile) return;

    const container = containerRef.current;
    const cardsContainer = cardsContainerRef.current;

    gsap.set(cardsContainer, {
      x: () => window.innerWidth / 2
    });

    gsap.to(cardsContainer, {
      x: () => -(cardsContainer.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${cardsContainer.scrollWidth - window.innerWidth + (window.innerWidth / 2)}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile]);

  return (
    <section 
      ref={containerRef}
      className={`relative ${isMobile ? 'min-h-screen' : 'h-screen'} w-full overflow-hidden bg-black pt-24`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className={`${isMobile ? 'text-center mb-12' : 'flex justify-between items-center mb-8'}`}>
          <h2 className="text-2xl md-text-4xl font-bold text-white mb-4 md:mb-0">
            Our Handpicked Featured Portfolio
          </h2>
          {!isMobile && (
             <GradientButton>
             See All Projects
       </GradientButton>
          )}
        </div>

        <div 
          ref={cardsContainerRef}
          className={`
            ${isMobile 
              ? 'flex flex-col gap-8 items-center' 
              : 'flex gap-4 absolute'
            }
          `}
          style={!isMobile ? { paddingRight: '50vw' } : {}}
        >
          {projects.map((project) => (
            <YouTubeCard key={project.id} project={project} />
          ))}
          
          {isMobile && (
            <GradientButton>
                  See All Projects
            </GradientButton>

          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCards;