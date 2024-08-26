import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <nav className="navbar bg-[#7CA97C] p-4 sm:p-6 lg:p-8 flex justify-between items-center">
          <ul className="nav-links flex space-x-4 text-white text-lg sm:text-xl lg:text-2xl">
            <li>
              <Link to="/" className="nav-link uppercase">Home</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link uppercase">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="content-container px-4 sm:px-8 lg:px-16 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
