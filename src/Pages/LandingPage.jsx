// src/Components/LandingPage.jsx

import React from 'react';
import Hero from '../Components/Hero';
import FeaturedPortfolio from '../Components/ProjectsCards';
import VideoGrid from '../Components/VideoGrid';
import AboutAgency from '../Components/About';


const LandingPage = () => {
  return (
    <div>
      <Hero />
      <FeaturedPortfolio />
      <VideoGrid/>
      <AboutAgency/>
    </div>
  );
};

export default LandingPage;