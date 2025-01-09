// src/Components/LandingPage.jsx

import React from 'react';
import Hero from '../Components/Hero';
import FeaturedPortfolio from '../Components/ProjectsCards';
import VideoGrid from '../Components/VideoGrid';
import AboutAgency from '../Components/About';
import TestimonialCarousel from '../Components/Testimonials';
import BlogSection from '../Components/BlogCards';
import MarqueeText from '../Components/MarqueeText';
import LogoMarquee from '../Components/LogoMarquee';
import JourneySection from '../Components/Journey';
import HeroSection from '../Components/ReusableComponent';
import bgimg from '../assets/bg/testmonialsBg.png'

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <LogoMarquee/>
      <FeaturedPortfolio />
      <JourneySection/>
      <VideoGrid/>
      <AboutAgency/>
      <TestimonialCarousel/>
      <HeroSection 
      backgroundImage={bgimg}
      title="Blogs"
      description="Explore our blog hub, where we serve up a delightful mix of insightful articles, tips, and fun reads, tailored to spark your curiosity and inspire your creativity."
    />
      <BlogSection/>
      <MarqueeText/>
    </div>
  );
};

export default LandingPage;