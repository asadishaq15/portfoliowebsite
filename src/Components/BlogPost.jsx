import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BlogPost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog;
  const primaryHeading = location.state?.primaryHeading; 
  const conclusion = location.state?.conclusion; 
  const bulletPoint = location.state?.bulletPoint; 

  React.useEffect(() => {
    if (!blog) {
      navigate('/blogs');
    }
  }, [blog, navigate]);

  if (!blog) return null;
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative h-full container mx-auto px-4 flex flex-col">
          {/* Title - Adjusted positioning and styling */}
          <div className="mt-[65vh] max-w-[100%]">
            <h1 className="text-white font-syne text-5xl md:text-7xl xl:text-6xl font-bold leading-[1.1] tracking-wide">
              {blog.title}
            </h1>
          </div>

          {/* Metadata */}
          <div className="mt-auto mb-12 flex justify-between items-center text-white/80 font-syne text-sm tracking-wider">
            <div className="flex items-center space-x-3">
              <span className="uppercase text-xs">[BY]</span>
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="uppercase text-xs">[CATEGORY]</span>
              <span>{blog.category}</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="uppercase text-xs">[DATE]</span>
              <span>{blog.date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 relative z-10"> {/* Changed mt-16 to mt-8 */}
    <div className="bg-[#111111] rounded-[32px] p-6 md:p-8 max-w-3xl mx-auto border border-white/30"> 
        <p className="text-white/90 font-syne text-xl md:text-3xl leading-relaxed text-center font-normal">
            {blog.introduction}
        </p>
    </div>
</div>

{/* Content Section */}
<div className="container max-w-3xl mx-auto px-4 py-8">
    <div className="max-w-4xl mx-auto">
        {/* Primary heading with no numbering */}
        <h2 className="text-white font-inter text-base md:text-lg font-bold mb-4"> {/* Adjusted mb to fit new bullet */}
            {primaryHeading}
        </h2>
        {/* Bullet Point after Primary Heading */}
        <ul className="list-disc pl-5 mb-4"> 
            <li className="text-white/80 font-inter leading-relaxed text-base">
                {bulletPoint} 
            </li>
        </ul>
        {/* Content Sections */}
        <ul className="space-y-4">
            {blog.contentSections?.map((section, index) => (
                <li key={index} className="text-white/80">
                    <h3 className="font-inter text-xl md:text-lg mb-2 text-white">
                        <span className="font-normal">{index + 1}. </span>
                        <span className="font-bold">{section.title}</span>
                    </h3>
                    <ul className="list-disc pl-5">
                        <li className="font-inter leading-relaxed text-md mb-2">
                            {section.content}
                        </li>
                    </ul>
                </li>
            ))}
        </ul>
        {/* Conclusion Section */}
        <h3 className="font-inter text-xl md:text-lg font-bold mb-2 text-white">
            Conclusion
        </h3>
        <p className="font-inter leading-relaxed text-base mb-2 text-white/80">
            {conclusion}
        </p>
    </div>
</div>
    </div>
  );
};

export default BlogPost;