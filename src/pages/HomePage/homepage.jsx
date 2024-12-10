import React, { useRef } from "react";
import backgroundImage from '../../assets/BG.jpg';
import Navbar from '../../components/Navbar/navbar';
import './homepage.css';
import Introdt from '../../components/IntroDT/introdt';
import Services from '../../components/Services/services';
import Partners from '../../components/Partners/partners';
import BankPartners from '../../components/Bankingpartens/bankingpartners';
import Contact from '../../components/Contact/contact';
import Getaquote from '../../components/getaquote/getaquote';
import ProjectShowcase from '../../components/Projects/projects';

function Homepage() {

  const targetRef = useRef(null);

  const handleScroll = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className='home_container'> 
     <div
      className="homepage-background"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className="nav_container">
        <Navbar />
      </div>
      <div className="home-intro">
        <span className="intro-text">Sustainable Energy for
          a Brighter Future</span>
        <span className="intro-subtext">Power Your Life with DT Energy a sustainable
          solar service providers</span>
        <button className="intro-button" onClick={handleScroll}>Learn More</button>
      </div>
    </div>
    <div ref={targetRef}>
      <Introdt />
    </div>
    <Services/>
    <ProjectShowcase/>
    <Getaquote/>
    <Partners/>
    <BankPartners/>
    <Contact />
    </div>
  );
}

export default Homepage;
