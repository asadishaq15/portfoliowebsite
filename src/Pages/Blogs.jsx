// src/Components/LandingPage.jsx

import React from "react";
import HeroSection from "../Components/ReusableComponent";
import bgimg from "../assets/bg/testmonialsBg.png";
import ExtendedBlogSection from "../Components/ExtendedBlogSection";

const Blogs = () => {
  return (
    <div>
      <HeroSection
        backgroundImage={bgimg}
        title="Blogs"
        description="Explore our blog hub, where we serve up a delightful mix of insightful articles, tips, and fun reads, tailored to spark your curiosity and inspire your creativity."
      />
      <ExtendedBlogSection />
    </div>
  );
};

export default Blogs;
