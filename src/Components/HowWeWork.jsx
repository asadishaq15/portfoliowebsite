import React from 'react';
import image from "../assets/about/howWeWork.jpg"
function HowWeWork() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-6">
      <div className="bg-black border border-white/20 rounded-[2rem] p-12 max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h2 className="font-inter text-4xl font-medium font-syne text-white">
              How We Work
            </h2>

            <p className="font-inter text-gray-400 text-base">
              At StoryStream, we're all about making the creative process feel like a breeze on a sunny day. We start by diving headfirst into your ideas, and then we sprinkle our creative magic like confetti at a party.
            </p>

            <div className="space-y-2">
              <h3 className="font-inter text-3xl text-white">
                We keep you in the loop every step of the way because,
                <span className="text-gray-500"> after all, it's your show!</span>
              </h3>
            </div>

            <p className="font-inter text-gray-400 text-base">
              We're the team that turns 'work' into 'wow,' and we do it with smiles, laughter, and a touch of video wizardry. So, grab your popcorn, because this creative journey is going to be a blast!
            </p>

            <p className="font-inter text-gray-400 text-base">
              We'll tap into our creative talents, dust off our brainstorming hats, and make sure that the journey from concept to creation is a toe-tapping, smile-inducing experience. Together, we'll create video magic that's not only effective but also unforgettable. Ready to dance to the beat of your story? Let's get started!
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden w-full h-[400px]">
              <img 
                src={image}
                alt="Cameraman silhouette at sunset"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HowWeWork;