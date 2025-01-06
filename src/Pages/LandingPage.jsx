// src/Components/LandingPage.jsx

import React from 'react';
import Hero from '../Components/Hero';
import FeaturedPortfolio from '../Components/ProjectsCards';


const LandingPage = () => {
  return (
    <div>
      <Hero />
      <FeaturedPortfolio />
      <Hero />
    </div>
  );
};

export default LandingPage;