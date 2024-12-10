import React, { useState, useEffect } from "react";
import "./project.css"; 
import project1A from "../../assets/projects/project1A.jpeg"; // Ensure the correct file extensions
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
import ProjectShowcasesmall from "./projectssmallscreen";

const ProjectShowcase = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Track screen size

  // Image arrays
  const images1 = [project1A, project1B, project1C, project1D];
  const images2 = [project2A, project2B, project2C, project2D];
  const images3 = [project3A, project3B, project3C, project3D];

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1500); 
    };

   
    window.addEventListener("resize", handleResize);

  
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener on unmount
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images1.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (isSmallScreen) {
    return <ProjectShowcasesmall />; // Render small screen component on small screens
  }

  return (
    <div className="projects">
      <div className="projectheading" data-aos="fade-up">
        <span>Our Solar Projects Bringing Reliable Energy Solutions</span>
      </div>
  
      {/* Project 1 */}
      <div className="project-showcase" data-aos="fade-up" data-aos-delay="100">
        <div className="images-container" data-aos="zoom-in">
          {images1.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Project ${index + 1}`}
              className={`project-image ${
                index === currentImageIndex ? "active" : ""
              }`}
            />
          ))}
        </div>
        <div className="details-box"  data-aos="fade-up">
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
  
      {/* Project 2 */}
      <div className="project-showcase" data-aos="fade-up" data-aos-delay="200">
        <div className="images-container" data-aos="zoom-in">
          {images2.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Project ${index + 1}`}
              className={`project-image ${
                index === currentImageIndex ? "active" : ""
              }`}
            />
          ))}
        </div>
        <div className="details-box"  data-aos="fade-up">
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
  
      {/* Project 3 */}
      <div className="project-showcase" data-aos="fade-up" data-aos-delay="300">
        <div className="images-container" data-aos="zoom-in">
          {images3.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Project ${index + 1}`}
              className={`project-image ${
                index === currentImageIndex ? "active" : ""
              }`}
            />
          ))}
        </div>
        <div className="details-box"  data-aos="fade-up">
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
    </div>
  );
};  

export default ProjectShowcase;
