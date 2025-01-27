// src/Components/LandingPage.jsx

import React from "react";
import HeroSection from "../Components/ReusableComponent";
import bgimg from "../assets/bg/testmonialsBg.png";
import ExtendedBlogSection from "../Components/ExtendedBlogSection";
import VerticalMarquee from "../Components/Playground";
import ValuesSection from "../Components/ValuesSection";
import HowWeWork from "../Components/HowWeWork";
import WhyUsSection from "../Components/WhyUsSection";
import TeamMember from "../Components/TeamMember";
import AboutAgency from "../Components/AboutAgency2";
import MarqueeText from "../Components/MarqueeText";
import TestimonialCarousel from "../Components/Testimonials";
import MarqueeSection from "../Components/MarqueeSection";

const About = () => {
  return (
    <div>
      <HeroSection
        backgroundImage={bgimg}
        title="About Us"
        description="Discover the Team That Adds a Dose of Fun to Video Production. This Is Us, the StoryStream Family, where passion meets pixels with a smile!"
      />
      <AboutAgency/>
      <MarqueeSection/>
      <VerticalMarquee/>
  <TeamMember/>
  <HowWeWork/>
  <WhyUsSection/>
  <TestimonialCarousel/>
  <MarqueeText/>
    </div>
  );
};

export default About;
