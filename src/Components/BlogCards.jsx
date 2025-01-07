import React from 'react';
import blog1 from "../assets/blog/blog1.png"
import blog2 from "../assets/blog/blog2.png"
import blog3 from "../assets/blog/blog3.png"
const BlogSection = () => {
    const blogs = [
      {
        image: blog1, // Replace with actual image paths
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Dive into our blogs
            </h1>
            <button className="hidden md:block bg-[#E97F4E] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#d17346] transition-colors">
              Read All Blogs
            </button>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div key={index} className="bg-[#111111] rounded-3xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover rounded-t-3xl"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[#E97F4E] text-sm font-semibold tracking-wider">
                    {blog.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mt-2 mb-4 hover:text-[#E97F4E] cursor-pointer transition-colors">
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
            <button className="bg-[#E97F4E] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#d17346] transition-colors">
              Read All Blogs
            </button>
          </div>
        </div>
      </div>
    );
};

export default BlogSection;