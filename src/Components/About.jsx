import React from 'react';

const AboutAgency = () => {
    return (
      <div className="min-h-screen bg-black text-white px-4 py-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {/* Top Section (only visible on mobile) */}
          <div className="lg:hidden">
            <h2 className="text-4xl font-bold mb-8">About Our Agency</h2>
          </div>
  
          {/* Content Section */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Section (hidden on mobile) */}
            <div className="hidden lg:block lg:w-1/3">
              <h2 className="text-4xl font-bold mb-8">About Our Agency</h2>
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold hover:opacity-90 transition-opacity">
                Know More About Us
              </button>
            </div>
  
            {/* Right Section */}
            <div className="lg:w-2/3">
              <div className="space-y-8">
                <div>
                  <p className="text-2xl lg:text-3xl font-light mb-6">
                    <span className="text-gray-500">Established in 2015, we have dedicated ourselves to</span>{" "}
                    <span className="text-white">crafting captivating visual narratives</span>{" "}
                    <span className="text-gray-500">defined by creativity, innovation, and an unwavering commitment to</span>{" "}
                    <span className="text-white">excellence in video production.</span>
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Our mission is clear: to transform ideas into compelling visual stories. We believe that every project is an opportunity to create something extraordinary. Whether it's a corporate video, a commercial, an event coverage, or an animation, we approach each endeavor with creativity, enthusiasm, and a commitment to exceeding our clients' expectations.
                  </p>
                </div>
  
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                  <div>
                    <h3 className="text-4xl lg:text-6xl font-bold text-gray-700">13+</h3>
                    <p className="text-sm uppercase tracking-wider mt-2">Years of Experience</p>
                  </div>
                  <div>
                    <h3 className="text-4xl lg:text-6xl font-bold text-gray-700">200+</h3>
                    <p className="text-sm uppercase tracking-wider mt-2">Repeated Clients</p>
                  </div>
                  <div>
                    <h3 className="text-4xl lg:text-6xl font-bold text-gray-700">478</h3>
                    <p className="text-sm uppercase tracking-wider mt-2">Completed Projects</p>
                  </div>
                  <div>
                    <h3 className="text-4xl lg:text-6xl font-bold text-gray-700">350+</h3>
                    <p className="text-sm uppercase tracking-wider mt-2">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Button (only visible on mobile) */}
          <div className="lg:hidden mt-8">
            <button className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold hover:opacity-90 transition-opacity">
              Know More About Us
            </button>
          </div>
        </div>
      </div>
    );
};
  
export default AboutAgency;