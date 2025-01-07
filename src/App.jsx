// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; // Ensure Tailwind CSS is imported here
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="bg-black ">
        <Routes>
          {/* Define the route for the Home page */}
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;