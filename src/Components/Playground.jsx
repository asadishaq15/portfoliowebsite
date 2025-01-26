import React, { useState, useEffect } from 'react';

const ValuesSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const values = [
    {
      number: "01",
      title: "Creativity",
      description: "We believe in the power of imagination and creative thinking. We strive to infuse innovation and originality into everything we do, producing unique and captivating video content.",
      position: "left"
    },
    {
      number: "02",
      title: "Quality",
      description: "Excellence is non-negotiable. We are committed to delivering top-notch video production services that meet and exceed our clients' expectations, from concept to final product.",
      position: "right"
    },
    {
      number: "03",
      title: "Collaboration",
      description: "We value teamwork and collaboration. We work closely with our clients, understanding their vision and goals, to ensure that every project is a true collaboration resulting in success.",
      position: "left"
    },
    {
      number: "04",
      title: "Collaboration",
      description: "We value teamwork and collaboration. We work closely with our clients, understanding their vision and goals, to ensure that every project is a true collaboration resulting in success.",
      position: "right"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8 md:p-16">
      <div className="max-w-6xl mx-auto relative">
        {/* Background Lines */}
        <div className={`absolute inset-0 w-full h-full ${isMobile ? "hidden" : ""}`}>
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="absolute h-full"
              style={{
                left: `${(index + 1) * 10}%`,
                width: "1px",
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
                opacity: 0.4,
              }}
            />
          ))}
        </div>

        {values.map((value, index) => (
          <div 
            key={index}
            className={`relative min-h-[300px] mb-24 ${
              value.position === 'right' ? 'ml-auto' : ''
            }`}
            style={{ width: '75%' }}
          >
            <div className="relative">
              <span className="absolute -top-20 -left-4 text-[8rem] md:text-[12rem] font-bold font-syne text-gray-600/60 pointer-events-none select-none">
                {value.number}
              </span>
              
              <div className={`relative z-10 pt-20 pl-24`}>
                <h3 className="text-3xl md:text-4xl font-light font-syne mb-6">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-lg md:text-xl font-light font-syne max-w-2xl leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ValuesSection;