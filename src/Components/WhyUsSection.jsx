import React from 'react';
import { LightbulbIcon, Users2Icon, SearchIcon, Sparkles, Trophy, HeartHandshake } from 'lucide-react';
import image from "../assets/about/howWeWork.jpg"
const WhyUsSection = () => {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter'] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Combined Section Container */}
        <div className="bg-black/40 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8">
          <div className="flex flex-col lg:flex-row gap-12 mb-12">
            {/* Left Image Section */}
            <div className="lg:w-1/2">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[#FF6B00]/20"></div>
                <img 
                  src={image}
                  alt="Camera operator silhouette"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Content Section */}
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-semibold">Why us?</h2>
              
              <p className="text-zinc-300">
                People hire us not just because we're good at what we do (spoiler: we are!), but because we bring the 'wow' and 'wow again' to every project. We're the team that believes in making the process as enjoyable as the final product.
              </p>

              <p className="text-zinc-300">
                Imagine us as the life of the party, but at work. People choose us because we're not your typical 'suit and tie' video crew. We're more like your 'let's roll up our sleeves and make something amazing' kind of team. We bring that extra spark of excitement to every project.
              </p>

              <div className="space-y-2">
                <h3 className="text-2xl">
                  We're the friendly faces who turn your ideas into <span className="text-[#FF6B00]">eye-popping video magic.</span>
                </h3>
              </div>

              <p className="text-zinc-300">
                From adding a sprinkle of fun to a dash of creativity, we've got the secret sauce that keeps our clients coming back for more. So, why hire us? Because we're not just your video crew; we're your partners in making dreams come true!
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-12 text-center">Wait! There's more....</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-[#FF6B00] flex-shrink-0" size={24} />
                  <h3 className="text-xl font-semibold">Exceptional Creativity</h3>
                </div>
                <p className="text-zinc-400">
                  Clients choose us for our unparalleled creative prowess. We breathe life into ideas, turning them into visually stunning, memorable videos.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Trophy className="text-[#FF6B00] flex-shrink-0" size={24} />
                  <h3 className="text-xl font-semibold">Proven Track Record</h3>
                </div>
                <p className="text-zinc-400">
                  Our portfolio is a testament to our success. We've consistently delivered outstanding results, earning the trust of clients time and again.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <HeartHandshake className="text-[#FF6B00] flex-shrink-0" size={24} />
                  <h3 className="text-xl font-semibold">Collaborative Approach</h3>
                </div>
                <p className="text-zinc-400">
                  We don't just work for our clients, we work with them. Our collaborative spirit ensures that each project is a true partnership, vision coming to life.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <LightbulbIcon className="text-[#FF6B00] flex-shrink-0" size={24} />
                  <h3 className="text-xl font-semibold">Innovative Solutions</h3>
                </div>
                <p className="text-zinc-400">
                  We're known for pushing boundaries and finding innovative solutions. Clients appreciate our ability to think outside the box and deliver beyond expectations.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users2Icon className="text-[#FF6B00] flex-shrink-0" size={24} />
                  <h3 className="text-xl font-semibold">Exceptional Team</h3>
                </div>
                <p className="text-zinc-400">
                  Our team is a powerhouse of talent, experience, and passion. Clients choose us for the depth of expertise and dedication we bring to every project.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <SearchIcon className="text-[#FF6B00] flex-shrink-0" size={24} />
                  <h3 className="text-xl font-semibold">Attention to Detail</h3>
                </div>
                <p className="text-zinc-400">
                  We obsess over the finer points. Every frame, every edit, every sound is carefully crafted to ensure the highest quality and maximum impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;