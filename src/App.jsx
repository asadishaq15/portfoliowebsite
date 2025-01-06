// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; // Ensure Tailwind CSS is imported here
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <Router>
      <Navbar />
      <main >
        <Routes>
          {/* Define the route for the Home page */}
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;