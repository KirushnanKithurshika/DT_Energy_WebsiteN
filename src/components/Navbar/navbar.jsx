import React, { useState, useEffect } from 'react';
import './Navbar.css';

import { NavLink } from 'react-router-dom'; // Import NavLink
import { HashLink } from 'react-router-hash-link'; // Import HashLink
import DTlogo from '../../assets/dtnlogo.png';
import { FaEnvelope, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import Navsubarmobileview from './navsubbar_vertical'; // Ensure mobile view is correctly imported

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="navbar-container">
      <div className="navbar-grid">
        <div className="navbar-logo">
          <NavLink to="/">
            <img src={DTlogo} alt="DT Energy Logo" className="logo-image" />
          </NavLink>
        </div>

        <div className="navbar-contactnumber">
          <div className="icon-container">
            <div className="wave"></div>
            <a href='tel:+94713339203'>
            <FaPhoneAlt className="icon" />
            </a>
          </div>
          <span className="phone-number">+94713339203</span>
        </div>

        <div className="navbar-contactemail">
          <div className='icon-container'>
            <a href='mailto:dreamtrillions100@gmail.com'>
          <FaEnvelope className="icon" />
          </a>
          </div>
          <span>dreamtrillions100@gmail.com</span>
        </div>

        <div className="navbar-humburger" onClick={toggleMenu}><div className='icon-container'>
          {isMenuOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="navsubbar">
          <Navsubarmobileview />
        </div>
      )}

      <nav className="navbar-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>
        <NavLink 
          to="/product" 
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Products
        </NavLink>
        <NavLink 
          to="/service" 
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Services
        </NavLink>
        {/* <NavLink 
          to="/projects" 
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Projects
        </NavLink> */}
        <NavLink 
          to="/career" 
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Careers
        </NavLink>
        <NavLink 
          smooth 
          to="/contact" 
          className="nav-link"
        >
          Contact Us
        </NavLink >
      </nav>
    </header>
  );
};

export default Navbar;
