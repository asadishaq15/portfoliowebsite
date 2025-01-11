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
    videoUrl: 'https://cdn.pixabay.com/video/2016/09/13/5129-183300007_large.mp4',
    thumbnailUrl: 'https://example.com/thumbnail1.jpg'
  },
  {
    id: 2,
    title: 'Project 2',
    subtitle: 'ModeElite',
    videoUrl: 'https://cdn.pixabay.com/video/2023/01/13/146336-789093861_large.mp4',
    thumbnailUrl: 'https://example.com/thumbnail2.jpg'
  },
  {
    id: 3,
    title: 'Project 2',
    subtitle: 'ModeElite',
    videoUrl: 'https://cdn.pixabay.com/video/2020/03/24/34198-400954373_large.mp4',
    thumbnailUrl: 'https://example.com/thumbnail2.jpg'
  },
  {
    id: 4,
    title: 'Project 2',
    subtitle: 'ModeElite',
    videoUrl: 'https://cdn.pixabay.com/video/2020/07/21/45249-442509432_large.mp4',
    thumbnailUrl: 'https://example.com/thumbnail2.jpg'
  },
  {
    id: 5,
    title: 'Project 2',
    subtitle: 'ModeElite',
    videoUrl: 'https://cdn.pixabay.com/video/2021/09/11/88207-602915574_large.mp4',
    thumbnailUrl: 'https://example.com/thumbnail2.jpg'
  },
 
];

const VideoOverlay = ({ videoUrl, onClose }) => {
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
        <video
          className="w-full h-full rounded-lg"
          src={videoUrl}
          controls
          autoPlay
        />
      </div>
    </div>
  );
};

const VideoCard = ({ project, onVideoClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const videoRef = useRef(null);
  const cursorRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [thumbnailCaptured, setThumbnailCaptured] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Load the video but keep it paused
    video.load();
    video.currentTime = 0;

    // Capture thumbnail when metadata is loaded
    video.addEventListener('loadeddata', () => {
      // Ensure we're at the start
      video.currentTime = 0;
      
      // Request a video frame callback to capture the thumbnail
      if ('requestVideoFrameCallback' in HTMLVideoElement.prototype) {
        video.requestVideoFrameCallback(() => {
          setThumbnailCaptured(true);
        });
      } else {
        // Fallback for browsers that don't support requestVideoFrameCallback
        setTimeout(() => {
          setThumbnailCaptured(true);
        }, 100);
      }
    });

    return () => {
      video.removeEventListener('loadeddata', () => {});
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      // Play from current position
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented
          console.log("Auto-play was prevented");
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      // Don't reset currentTime to keep the last frame
    }
  };

  return (
    <div className={`relative cursor-none ${isMobile ? 'w-[370px] h-[350px]' : 'w-[420px] h-[420px]'}`}>
      <div 
        className="absolute -inset-4 z-30 cursor-none"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered && (
          <div
            ref={cursorRef}
            className="pointer-events-none absolute z-30 flex items-center justify-center cursor-none"
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
      </div>

      <div
        className="relative h-full overflow-hidden rounded-[3rem] group cursor-none"
        onClick={() => onVideoClick(project.videoUrl)}
      >
        <div className={`absolute inset-0 transition-opacity duration-300 z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        <video
          ref={videoRef}
          className={`w-full h-full object-cover pointer-events-none ${thumbnailCaptured ? 'opacity-100' : 'opacity-0'}`}
          src={project.videoUrl}
          muted
          playsInline
          loop
          preload="auto"
        />
        
        {/* Loading state before thumbnail is captured */}
        {!thumbnailCaptured && (
          <div className="absolute inset-0 bg-gray-900 animate-pulse" />
        )}
        
        <div className="absolute bottom-8 left-8 text-white z-20 pointer-events-none">
          <h3 className="text-2xl font-bold font-syne mb-2">{project.title}</h3>
          <p className="text-sm opacity-80">{project.subtitle}</p>
        </div>
      </div>
    </div>
  );
};
const ProjectsCards = () => {
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);

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

  const handleVideoClick = (videoUrl) => {
    setActiveVideoUrl(videoUrl);
  };

  const handleCloseOverlay = () => {
    setActiveVideoUrl(null);
  };

  return (
    <>
      <section 
        ref={containerRef}
        className={`relative ${isMobile ? 'min-h-screen' : 'h-screen'} w-full overflow-hidden bg-black pt-24 mb-0`}
      >
        <div className="container mx-auto px-4 py-8">
          <div className={`${isMobile ? 'text-center mb-12' : 'flex justify-between items-center mb-8'}`}>
            <h2 className="text-2xl font-syne md-text-4xl font-bold text-white mb-4 md:mb-0">
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
            style={{ marginTop: '30px', ...(!isMobile ? { paddingRight: '50vw' } : {}) }} 
          >
            {projects.map((project) => (
              <VideoCard 
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

      {activeVideoUrl && (
        <VideoOverlay 
          videoUrl={activeVideoUrl} 
          onClose={handleCloseOverlay}
        />
      )}
    </>
  );
};

export default ProjectsCards;