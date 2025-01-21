// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; // Ensure Tailwind CSS is imported here
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import Footer from './Components/Footer';
import Blogs from './Pages/Blogs';
import BlogPost from './Components/BlogPost';
import Services from './Pages/Services';


function App() {
  return (
    <Router>
      <Navbar />
      <main className="bg-black ">
        <Routes>
          {/* Define the route for the Home page */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
