import React from "react";
import HeroSection from "../Components/ReusableComponent";
import bgimg from "../assets/bg/testmonialsBg.png";
import VideoPortfolio from "../Components/Porfolio";

const Porfolio = () => {
  return (
    <div>
      <HeroSection
        backgroundImage={bgimg}
        title="Portfolio"
        description="From coming up with creative concepts to delivering outstanding campaigns, we're your friendly, fun-loving crew ready to turn your project dreams into reality!"
      />
      <VideoPortfolio/>
     
    </div>
  );
};

export default Porfolio;
