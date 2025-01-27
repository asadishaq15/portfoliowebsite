import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import Footer from './Components/Footer';
import Blogs from './Pages/Blogs';
import BlogPost from './Components/BlogPost';
import Services from './Pages/Services';
import About from './Pages/About';
import Porfolio from './Pages/Portfolio';
import ProjectDetails from './Components/PorjectDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="bg-black">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Porfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/project-details" element={<ProjectDetails />} /> {/* New route */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;