import React from 'react';
import { Facebook, Linkedin } from 'lucide-react';
import member1 from "../assets/about/team1.png"
import member2 from "../assets/about/team2.png"
import member3 from "../assets/about/team3.png"
const TeamMember = () => {
  const teamMembers = [
    {
      name: 'John Davis',
      role: 'CREATIVE DIRECTOR',
      image: member1,
    },
    {
      name: 'Michael Carter',
      role: 'CINEMATOGRAPHER',
      image: member2,
    },
    {
      name: 'David Smith',
      role: 'VIDEO EDITOR',
      image: member3,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-normal font-syne mb-16 tracking-wide">
        Peek Behind the Curtain: Meet Our Fantastic Team!
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="bg-neutral-950 rounded-3xl overflow-hidden p-4 transition-transform duration-300 hover:transform hover:scale-105"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-4">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>

            <div className="px-2 text-center">
              <h2 className="text-xl font-medium mb-1">{member.name}</h2>
              <p className="text-sm text-neutral-400 tracking-wider mb-6">
                {member.role}
              </p>

              <div className="space-y-3">
                <button className="flex items-center w-full bg-neutral-800 rounded-xl p-4 hover:bg-neutral-700 transition-colors duration-200">
                  <Facebook className="w-5 h-5 mr-3" />
                  <span className="text-sm">FACEBOOK</span>
                  <span className="ml-auto">→</span>
                </button>

                <button className="flex items-center w-full bg-neutral-800 rounded-xl p-4 hover:bg-neutral-700 transition-colors duration-200">
                  <Linkedin className="w-5 h-5 mr-3" />
                  <span className="text-sm">LINKEDIN</span>
                  <span className="ml-auto">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default TeamMember;