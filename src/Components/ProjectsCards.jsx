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

const VideoOverlay = ({ videoId, onClose }) => {
    useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, []);
  
    return (
      <div 
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <div 
          className="relative w-full max-w-[1200px] aspect-video"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  };
  
  const YouTubeCard = ({ project, onVideoClick }) => {
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
        onClick={() => onVideoClick(project.videoId)}
        style={{ width: '400px', height: '400px' }}
      >
        <div className={`absolute inset-0transition-opacity duration-300 z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        {isHovered && (
        <div
          ref={cursorRef}
          className="pointer-events-none absolute z-30 flex items-center justify-center"
          style={{
            transform: `translate(${mousePosition.x - 60}px, ${mousePosition.y - 60}px)`,
            width: '120px',
            height: '120px',
            transition: 'transform 0.1s ease-out',
          }}
        >
      <div className="absolute inset-0 rounded-full border border-gray-400 bg-white/30 backdrop-blur-sm" />
          <span className="relative font-syne text-white text-sm font-light tracking-wider text-center whitespace-nowrap p-6">
            WATCH<br />FULL VIDEO
          </span>
        </div>
      )}
        
        {/* Update the iframe and img to include pointer-events-none */}
        {isHovered ? (
          <iframe
            ref={iframeRef}
            className="w-full h-full absolute top-0 left-0 z-0 pointer-events-none"
            src={`https://www.youtube.com/embed/${project.videoId}?enablejsapi=1&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${project.videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
        ) : (
          <img
            src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
            alt={project.title}
            className="w-full h-full object-cover pointer-events-none"
          />
        )}
        
        <div className="absolute bottom-8 left-8 text-white z-20 pointer-events-none">
          <h3 className="text-2xl font-bold font-syne mb-2">{project.title}</h3>
          <p className="text-sm opacity-80">{project.subtitle}</p>
        </div>
      </div>
    );
  };
  
  const ProjectsCards = () => {
    const containerRef = useRef(null);
    const cardsContainerRef = useRef(null);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const [activeVideoId, setActiveVideoId] = useState(null);
  
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
  
    const handleVideoClick = (videoId) => {
      setActiveVideoId(videoId);
    };
  
    const handleCloseOverlay = () => {
      setActiveVideoId(null);
    };
  
    return (
      <>
        <section 
          ref={containerRef}
          className={`relative ${isMobile ? 'min-h-screen' : 'h-screen'} w-full overflow-hidden bg-black pt-24`}
        >
          <div className="container mx-auto px-4 py-8">
            <div className={`${isMobile ? 'text-center mb-12' : 'flex justify-between items-center mb-8'}`}>
              <h2 className="text-3xl font-syne md-text-4xl font-bold text-white mb-4 md:mb-0">
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
                <YouTubeCard 
                  key={project.id} 
                  project={project} 
                  onVideoClick={handleVideoClick}
                />
              ))}
              
              {isMobile && (
                <GradientButton>
                  See All Projects
                </GradientButton>
              )}
            </div>
          </div>
        </section>
  
        {activeVideoId && (
          <VideoOverlay 
            videoId={activeVideoId} 
            onClose={handleCloseOverlay}
          />
        )}
      </>
    );
  };
  
  export default ProjectsCards;