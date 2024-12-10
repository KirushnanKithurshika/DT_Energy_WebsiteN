import React, { useEffect } from 'react';
import './services.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from 'react-router-dom'
import solarInstallation from '../../assets/solarinstallation.jpg';
import batteryStorage from '../../assets/energystorage.png';
import consultation from '../../assets/consultation.png';
import financing from '../../assets/Financial.jpg';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      once: true, // Ensures the animation triggers only once when it scrolls into view
    });
  }, []);

  return (
    <div className="solutions-container">
      <h2 className="title"  data-aos="slide-right" 
            data-aos-delay="500" >Tailored Solutions for You...</h2>
      <div className="solutions-grid">
        <div className="solution-card" data-aos="fade-up">
          <img src={solarInstallation} alt="Solar Installation" className="solution-image" />
          <p className="solution-title">Solar Installation</p>
          <div className="solution-overlay">
            <Link to="/service"className="solution-text-button">Solar Installation →</Link>
            <p className="solution-description">DT Energy offers customized, efficient solar installations to suit all energy requirements.</p>
          </div>
        </div>
        <div className="solution-card" data-aos="fade-up" data-aos-delay="100">
          <img src={batteryStorage} alt="Battery Storage Solutions" className="solution-image" />
          <p className="solution-title">Battery Storage Solutions</p>
          <div className="solution-overlay">
            <Link to="/service"className="solution-text-button">Battery Storage Solutions →</Link>
            <p className="solution-description">DT Energy provides reliable energy storage solutions, keeping power accessible whenever you need it.</p>
          </div>
        </div>
        <div className="solution-card" data-aos="fade-up" data-aos-delay="200">
          <img src={consultation} alt="Consultation & Site Assessment" className="solution-image" />
          <p className="solution-title">Consultation</p>
          <div className="solution-overlay">
            <Link to="/service"className="solution-text-button">Consultation →</Link>
            <p className="solution-description">DT Energy offers professional consultation for optimal, efficient solar solutions.</p>
          </div>
        </div>
        <div className="solution-card" data-aos="fade-up" data-aos-delay="300">
          <img src={financing} alt="Financing Assistance" className="solution-image" />
          <p className="solution-title">Financing Assistance</p>
          <div className="solution-overlay">
            <Link to="/service" className="solution-text-button">Financing Assistance →</Link>
            <p className="solution-description">DT Energy makes going solar easy with financing options that fit your needs and budget.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
