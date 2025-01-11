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
import ScrollVideo from '../Components/ShowReel';


const LandingPage = () => {
  return (
    <div>
      <Hero />
      <ScrollVideo/>
      <LogoMarquee/>
      <FeaturedPortfolio />
      <JourneySection/>
      <VideoGrid/>
      <AboutAgency/>
      <TestimonialCarousel/>
      <BlogSection/>
      <MarqueeText/>
    </div>
  );
};

export default LandingPage;