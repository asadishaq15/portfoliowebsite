import React from 'react';

const ValuesSection = () => {
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
    <div className="bg-black text-white min-h-screen p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
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