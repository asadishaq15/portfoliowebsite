import React from 'react';
import blog1 from "../assets/blog/blog1.png"
import blog2 from "../assets/blog/blog2.png"
import blog3 from "../assets/blog/blog3.png"
import GradientButton from './GradientButton';

const BlogSection = () => {
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
      }
    ];
  
    return (
      <div className="bg-black w-full">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Dive into our blogs
            </h1>
            <GradientButton>
            Read All Blogs
            </GradientButton>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div 
                key={index} 
                className="bg-[#111111] rounded-3xl overflow-hidden group transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-72 object-cover rounded-t-3xl transition-transform duration-1000 ease-in-out group-hover:scale-110 group-hover:translate-y-[-5%] group-hover:grayscale"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-white font-medium text-lg">
                        READ BLOG
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-8 transition-colors duration-500 group-hover:bg-[#1a1a1a]">
                  <span className="text-[#E97F4E] text-sm font-semibold tracking-wider">
                    {blog.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mt-2 mb-4 hover:text-[#E97F4E] cursor-pointer transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <span className="mr-2">{blog.author}</span>
                    <span className="before:content-['•'] before:mx-2">
                      {blog.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <div className="md:hidden flex justify-center mt-8">
            <GradientButton>
            Read All Blogs
            </GradientButton>

          </div>
        </div>
      </div>
    );
};

export default BlogSection;