import React, { useState, useEffect } from "react";
import "./project.css"; 
import "./projectssmallscreen.css"; 
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import project1A from "../../assets/projects/project1A.jpeg"; 
import project1B from "../../assets/projects/project1B.jpeg";
import project1C from "../../assets/projects/project1C.jpeg";
import project1D from "../../assets/projects/project1D.jpeg";
import project2A from "../../assets/projects/project2A.jpeg";
import project2B from "../../assets/projects/project2B.jpeg";
import project2C from "../../assets/projects/project2C.jpeg";
import project2D from "../../assets/projects/project2D.jpeg";
import project3A from "../../assets/projects/project3A.png";
import project3B from "../../assets/projects/project3B.png";
import project3C from "../../assets/projects/project3C.png";
import project3D from "../../assets/projects/project3D.png";

const ProjectShowcasesmall = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSet, setActiveSet] = useState(1); // To track which project set is active

  // Arrays for images
  const images1 = [project1A, project1B, project1C, project1D];
  const images2 = [project2A, project2B, project2C, project2D];
  const images3 = [project3A, project3B, project3C, project3D];

  // Handling the image change with interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images1.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in ms
      once: true, // Whether animations should happen only once
    });
  }, []);

  return (
    <div className="projects">
      <div className="projectheading" data-aos="fade-up">
        <span>Some of our finished Solar Projects</span>
      </div>

      {/* Buttons to change project sets */}
      <div className="project-buttons" data-aos="fade-up">
        <button onClick={() => setActiveSet(1)} className={activeSet === 1 ? 'active' : ''}> 1</button>
        <button onClick={() => setActiveSet(2)} className={activeSet === 2 ? 'active' : ''}>2</button>
        <button onClick={() => setActiveSet(3)} className={activeSet === 3 ? 'active' : ''}>3</button>
      </div>

      {/* Show Project Set 1 */}
      {activeSet === 1 && (
        <div className="project-showcase" >
          <div className="images-container">
            {images1.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Project ${index + 1}`}
                className={`project-image ${index === currentImageIndex ? "active" : ""}`}
              
              />
            ))}
          </div>
          <div className="details-box" >
            <h2>5 kW Roof Top Solar Panel Installation</h2>
            <p><strong>City:</strong> Trincomalee</p>
            <p><strong>Units:</strong> 500-600 per month</p>
            <h3>Key Benefits:</h3>
            <ul>
              <li>Reliable energy supply</li>
              <li>Eco-friendly solution</li>
              <li>Cost-effective power generation</li>
            </ul>
          </div>
        </div>
      )}

      {/* Show Project Set 2 */}
      {activeSet === 2 && (
        <div className="project-showcase" >
          <div className="images-container">
            {images2.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Project ${index + 1}`}
                className={`project-image ${index === currentImageIndex ? "active" : ""}`}
               
              />
            ))}
          </div>
          <div className="details-box" >
            <h2>5 kW Roof Top Solar Panel Installation</h2>
            <p><strong>City:</strong> China Bay</p>
            <p><strong>Units:</strong> 500-600 per month</p>
            <h3>Key Benefits:</h3>
            <ul>
              <li>Reliable energy supply</li>
              <li>Eco-friendly solution</li>
              <li>Cost-effective power generation</li>
            </ul>
          </div>
        </div>
      )}

      {/* Show Project Set 3 */}
      {activeSet === 3 && (
        <div className="project-showcase" >
          <div className="images-container">
            {images3.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Project ${index + 1}`}
                className={`project-image ${index === currentImageIndex ? "active" : ""}`}
              
              />
            ))}
          </div>
          <div className="details-box" >
            <h2>40 kW Roof Top Solar Panel Installation</h2>
            <p><strong>City:</strong> Trincomalee Town</p>
            <p><strong>Units:</strong> 4400-4600 per month</p>
            <h3>Key Benefits:</h3>
            <ul>
              <li>Reliable energy supply</li>
              <li>Eco-friendly solution</li>
              <li>Cost-effective power generation</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcasesmall;
