import React from 'react';
import { NavLink } from 'react-router-dom';
import './navsubbar.css';

const Navsubarmobileview = () => {
  return (
    <nav className='navsubbar-container'>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink to="/product" className={({ isActive }) => (isActive ? 'active' : '')}>
        Products
      </NavLink>
      <NavLink to="/service" className={({ isActive }) => (isActive ? 'active' : '')}>
        Services
      </NavLink>
      <NavLink to="/career" className={({ isActive }) => (isActive ? 'active' : '')}>
        Careers
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
        Contact Us
      </NavLink>
    </nav>
  );
};

export default Navsubarmobileview;
