// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; // Ensure Tailwind CSS is imported here
import Navbar from './Components/Navbar';
import Hero from './Components/Hero'; // Import the Hero component

function App() {
  return (
    <Router>
      <Navbar />
      <main >
        <Routes>
          {/* Define the route for the Home page */}
          <Route path="/" element={<Hero />} />
          {/* You can add more routes here as you create more components */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;