import React from 'react';
import GradientButton from './GradientButton';
import blog1 from "../assets/blog/blog1.png";
import blog2 from "../assets/blog/blog2.png";
import blog3 from "../assets/blog/blog3.png";
import blog4 from "../assets/blog/blog4.png";
import blog5 from "../assets/blog/blog5.png";
import blog6 from "../assets/blog/blog6.png";
import blog7 from "../assets/blog/blog7.png";
import blog8 from "../assets/blog/blog8.png";

const ExtendedBlogSection = () => {
    const blogs = [
      {
        image: blog1,
        category: "NEWS",
        title: "StoryStream's Video Production Career Opportunities and Upcoming Event",
        author: "Michael Carter",
        date: "Aug 29, 2023"
      },
      {
        image: blog2,
        category: "TIPS & TRICKS",
        title: "Mastering the Art of Storytelling: The Power of Narrative in Video Production",
        author: "Michael Carter",
        date: "Oct 17, 2023"
      },
      {
        image: blog3,
        category: "STORIES",
        title: "Lights, Camera, Action! Behind the Scenes of a Video Production",
        author: "John Davis",
        date: "Oct 16, 2023"
      },
      {
        image: blog4,
        category: "TUTORIALS",
        title: "Essential Video Editing Techniques for Beginners",
        author: "Sarah Wilson",
        date: "Nov 05, 2023"
      },
      {
        image: blog5,
        category: "EQUIPMENT",
        title: "Top Camera Gear for Professional Video Production in 2024",
        author: "David Thompson",
        date: "Dec 12, 2023"
      },
      {
        image: blog6,
        category: "INDUSTRY",
        title: "The Future of Video Production: Trends to Watch",
        author: "Emma Roberts",
        date: "Jan 03, 2024"
      },
      {
        image: blog7,
        category: "INTERVIEWS",
        title: "A Day in the Life of a Video Production Director",
        author: "James Anderson",
        date: "Jan 15, 2024"
      },
      {
        image: blog8,
        category: "TECHNOLOGY",
        title: "AI in Video Production: Revolutionary Tools and Techniques",
        author: "Lisa Chen",
        date: "Jan 20, 2024"
      }
    ];
  
    return (
      <div className="bg-black w-full">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center mb-12">
          
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {blogs.map((blog, index) => (
              <div 
                key={index} 
                className="bg-[#111111] rounded-3xl overflow-hidden group transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-72 sm:h-80 object-cover rounded-t-3xl transition-transform duration-1000 ease-in-out group-hover:scale-110 group-hover:translate-y-[-5%] group-hover:grayscale"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-white font-syne text-sm sm:text-base">
                        READ BLOG
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8 transition-colors duration-500 group-hover:bg-[#1a1a1a]">
                  <span className="text-[#E97F4E] text-sm font-semibold font-syne tracking-wider">
                    {blog.category}
                  </span>
                  <h3 className="text-white text-base sm:text-lg font-syne font-bold mt-2 mb-4 hover:text-[#E97F4E] cursor-pointer transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>
                  <div className="flex items-center font-syne text-gray-400 text-xs sm:text-sm">
                    <span className="mr-2">{blog.author}</span>
                    <span className="before:content-['•'] before:mx-2">
                      {blog.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
         
        </div>
      </div>
    );
};

export default ExtendedBlogSection;