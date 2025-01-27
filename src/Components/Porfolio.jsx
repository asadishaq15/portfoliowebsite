import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link
import project1 from "../assets/projects/proj1.png";

const VideoPortfolio = () => {
    const categories = [
        'Animation', 'Commercials', 'Corporate', 'Documentary', 'Educational',
        'Entertainment', 'Event', 'Fashion', 'Interview', 'Lifestyle',
        'Product Video', 'Real Estate', 'Social Media'
      ];
    
      const videos = [
        {
          category: 'REAL ESTATE',
          author: 'METROLIFE',
          title: 'Urban Explorers: Embracing the Metro Lifestyle',
          image: project1,
          projectData: {
            title: "Urban Explorers",
            description: "MetroLife Realty, a prominent real estate developer specializing in urban living, partnered with [Your Video Production Company Name] to create a compelling lifestyle video that showcases the unique and vibrant urban lifestyle offered by their latest residential project, CityScape Apartments. The goal was to attract prospective homebuyers and renters by highlighting the features, culture, and experiences of urban living.",
            client: "MetroLife Realty",
            videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
            year: "2023",
            services: "Lifestyle Video Production, Animation",
            category: "Real Estate",
            heroImage: "https://framerusercontent.com/images/OmZ03GRrvHNpZjVOJIby3KD8.jpg?scale-down-to=1024",
            projectScope: {
              title: "Project Scope:",
              description: "The project encompassed the following key aspects:",
              points: [
                "Concept Development: Brainstorming creative ideas to depict the urban lifestyle, exploring the unique selling points of CityScape Apartments, and defining the overall narrative.",
                "Pre-Production: Planning the video shoot, selecting locations, casting talent, and organizing logistics.",
                "Production: Capturing footage of the residential property, surrounding neighborhood, amenities, and lifestyle activities.",
                "Post-Production: Editing and post-processing, adding music and voiceover, and refining the video to create an engaging narrative.",
                "Distribution: Sharing the lifestyle video on MetroLife Realty's website, social media channels, and during property tours."
              ]
            },
            execution: {
              title: "Project Execution:",
              sections: [
                {
                  title: "Concept Development:",
                  points: [
                    "Collaborative sessions with the client to understand the project's unique selling points.",
                    "Ideation to create a compelling narrative that highlights the urban lifestyle, showcasing the property as a central character."
                  ]
                },
                {
                  title: "Pre-Production:",
                  points: [
                    "Location scouting to identify iconic urban spots, local cafes, parks, and attractions.",
                    "Casting local talent to portray residents authentically.",
                    "Scheduling and logistics planning."
                  ]
                }
              ]
            },
            production: {
              title: "Production:",
              points: [
                "Multiple days of shooting to capture diverse urban scenes, residential interiors, and lifestyle activities.",
                "Utilizing cinematic techniques to evoke the essence of urban living.",
                "Ensuring a balance between showcasing the property's features and the surrounding urban culture."
              ]
            },
            postProduction: {
              title: "Post-Production:",
              points: [
                "Careful editing to craft a visually engaging story.",
                "Adding music and voiceover to create an emotional connection with viewers.",
                "Color grading to enhance the video's aesthetics.",
                "Incorporating MetroLife Realty's branding elements and contact information."
              ]
            },
            distribution: {
              title: "Distribution:",
              points: [
                "Uploading the lifestyle video to the MetroLife Realty website.",
                "Sharing teasers and snippets on social media platforms.",
                "Playing the video during property tours and open houses."
              ]
            },
            projectOutcome: {
              title: "Project Outcome:",
              description: 'The lifestyle video, "Urban Explorers: Embracing the Metro Lifestyle," produced by [Your Video Production Company Name], achieved the following outcomes:',
              outcomes: [
                {
                  title: "Engagement:",
                  description: "The video resonated with the target audience, generating high engagement on social media and the MetroLife Realty website."
                },
                {
                  title: "Leads:",
                  description: "The video attracted potential homebuyers and renters, leading to increased inquiries about CityScape Apartments."
                },
                {
                  title: "Brand Perception:",
                  description: "MetroLife Realty received positive feedback on their innovative approach to showcasing urban living, positioning them as a forward-thinking real estate developer."
                },
                {
                  title: "Sales:",
                  description: "CityScape Apartments experienced increased interest and occupancy rates due to the lifestyle video's influence on potential residents."
                }
              ]
            },
            closingText: "By effectively capturing the urban lifestyle and the allure of CityScape Apartments, MetroLife Realty successfully attracted a new wave of residents seeking the dynamic experiences of urban living.",
            projectImages: [
              {
                url: 'https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?cs=srgb&dl=pexels-pixabay-158827.jpg&fm=jpg',
                alt: 'Urban street art and bicycle against yellow wall'
              },
              {
                url: 'https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?cs=srgb&dl=pexels-pixabay-158827.jpg&fm=jpg',
                alt: 'Modern apartment interior with city view'
              },
              {
                url: 'https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?cs=srgb&dl=pexels-pixabay-158827.jpg&fm=jpg',
                alt: 'Local cafe and community spaces'
              }
            ],
            testimonial: {
              rating: 5,
              text: "Our collaboration with you for the 'Urban Explorers' lifestyle video was a game-changer in our marketing efforts. They skillfully captured the essence of urban living and our CityScape Apartments project, creating a video that truly resonates with our target audience. The video has become a powerful tool in attracting potential residents and enhancing our brand image. We're thrilled with the results and look forward to future projects with you.",
              author: "Sarah Thompson",
              position: "Marketing Manager"
            }
          }
        },
        {
          category: 'REAL ESTATE',
          author: 'METROLIFE',
          title: 'Urban Explorers: Embracing the Metro Lifestyle',
          image: project1,
          projectData: {
            title: "Urban Explorers",
            description: "MetroLife Realty, a prominent real estate developer specializing in urban living, partnered with [Your Video Production Company Name] to create a compelling lifestyle video that showcases the unique and vibrant urban lifestyle offered by their latest residential project, CityScape Apartments. The goal was to attract prospective homebuyers and renters by highlighting the features, culture, and experiences of urban living.",
            client: "MetroLife Realty",
            videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
            year: "2023",
            services: "Lifestyle Video Production, Animation",
            category: "Real Estate",
            heroImage: "https://framerusercontent.com/images/OmZ03GRrvHNpZjVOJIby3KD8.jpg?scale-down-to=1024",
            projectScope: {
              title: "Project Scope:",
              description: "The project encompassed the following key aspects:",
              points: [
                "Concept Development: Brainstorming creative ideas to depict the urban lifestyle, exploring the unique selling points of CityScape Apartments, and defining the overall narrative.",
                "Pre-Production: Planning the video shoot, selecting locations, casting talent, and organizing logistics.",
                "Production: Capturing footage of the residential property, surrounding neighborhood, amenities, and lifestyle activities.",
                "Post-Production: Editing and post-processing, adding music and voiceover, and refining the video to create an engaging narrative.",
                "Distribution: Sharing the lifestyle video on MetroLife Realty's website, social media channels, and during property tours."
              ]
            },
            execution: {
              title: "Project Execution:",
              sections: [
                {
                  title: "Concept Development:",
                  points: [
                    "Collaborative sessions with the client to understand the project's unique selling points.",
                    "Ideation to create a compelling narrative that highlights the urban lifestyle, showcasing the property as a central character."
                  ]
                },
                {
                  title: "Pre-Production:",
                  points: [
                    "Location scouting to identify iconic urban spots, local cafes, parks, and attractions.",
                    "Casting local talent to portray residents authentically.",
                    "Scheduling and logistics planning."
                  ]
                }
              ]
            },
            production: {
              title: "Production:",
              points: [
                "Multiple days of shooting to capture diverse urban scenes, residential interiors, and lifestyle activities.",
                "Utilizing cinematic techniques to evoke the essence of urban living.",
                "Ensuring a balance between showcasing the property's features and the surrounding urban culture."
              ]
            },
            postProduction: {
              title: "Post-Production:",
              points: [
                "Careful editing to craft a visually engaging story.",
                "Adding music and voiceover to create an emotional connection with viewers.",
                "Color grading to enhance the video's aesthetics.",
                "Incorporating MetroLife Realty's branding elements and contact information."
              ]
            },
            distribution: {
              title: "Distribution:",
              points: [
                "Uploading the lifestyle video to the MetroLife Realty website.",
                "Sharing teasers and snippets on social media platforms.",
                "Playing the video during property tours and open houses."
              ]
            },
            projectOutcome: {
              title: "Project Outcome:",
              description: 'The lifestyle video, "Urban Explorers: Embracing the Metro Lifestyle," produced by [Your Video Production Company Name], achieved the following outcomes:',
              outcomes: [
                {
                  title: "Engagement:",
                  description: "The video resonated with the target audience, generating high engagement on social media and the MetroLife Realty website."
                },
                {
                  title: "Leads:",
                  description: "The video attracted potential homebuyers and renters, leading to increased inquiries about CityScape Apartments."
                },
                {
                  title: "Brand Perception:",
                  description: "MetroLife Realty received positive feedback on their innovative approach to showcasing urban living, positioning them as a forward-thinking real estate developer."
                },
                {
                  title: "Sales:",
                  description: "CityScape Apartments experienced increased interest and occupancy rates due to the lifestyle video's influence on potential residents."
                }
              ]
            },
            closingText: "By effectively capturing the urban lifestyle and the allure of CityScape Apartments, MetroLife Realty successfully attracted a new wave of residents seeking the dynamic experiences of urban living.",
            projectImages: [
              {
                url: 'https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?cs=srgb&dl=pexels-pixabay-158827.jpg&fm=jpg',
                alt: 'Urban street art and bicycle against yellow wall'
              },
              {
                url: 'https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?cs=srgb&dl=pexels-pixabay-158827.jpg&fm=jpg',
                alt: 'Modern apartment interior with city view'
              },
              {
                url: 'https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?cs=srgb&dl=pexels-pixabay-158827.jpg&fm=jpg',
                alt: 'Local cafe and community spaces'
              }
            ],
            testimonial: {
              rating: 5,
              text: "Our collaboration with you for the 'Urban Explorers' lifestyle video was a game-changer in our marketing efforts. They skillfully captured the essence of urban living and our CityScape Apartments project, creating a video that truly resonates with our target audience. The video has become a powerful tool in attracting potential residents and enhancing our brand image. We're thrilled with the results and look forward to future projects with you.",
              author: "Sarah Thompson",
              position: "Marketing Manager"
            }
          }
        }
      ];
    

  return (
    <div className="min-h-screen bg-black p-8">
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-12 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 rounded-full text-gray-300 border border-white/30 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-300"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Video grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <Link
            to="/project-details" // Navigate to ProjectDetails
            state={{ project: video.projectData }} // Pass project data
            key={index}
          >
            <div
              className="group rounded-3xl overflow-hidden relative bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-950 transition-all duration-500 hover:from-neutral-700 hover:via-neutral-800 hover:to-neutral-900 border border-neutral-800/50 shadow-lg shadow-black/20"
            >
              <div className="p-4">
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <div className="px-4 py-1.5 rounded-full text-xs text-white border-[1px] border-white/100 bg-black/30 backdrop-blur-sm">
                      {video.category}
                    </div>
                  </div>

                  {/* Image with zoom effect */}
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={video.image}
                      alt={video.title}
                      className="w-full h-64 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>

                <div className="p-4">
                  <div className="text-gray-400 text-sm mb-1">{video.author}</div>
                  <h3 className="text-white text-2xl font-light">{video.title}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoPortfolio;