
import React from "react";
import HeroSection from "../Components/ReusableComponent";
import bgimg from "../assets/bg/testmonialsBg.png";
import ExtendedBlogSection from "../Components/ExtendedBlogSection";
import StudioComponent from "../Components/Studio";

const Services = () => {
  return (
    <div>
      <HeroSection
        backgroundImage={bgimg}
        title="Services"
        description="Join us on a journey where ideas transform into captivating video content, with a dash of creativity and a whole lot of fun."
      />
    <StudioComponent/>
    </div>
  );
};

export default Services;
