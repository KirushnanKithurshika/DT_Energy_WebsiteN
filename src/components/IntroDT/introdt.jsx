import React, { useEffect } from 'react';
import './introdt.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import introbackgroundImage from '../../assets/wave.png';
import intropic from '../../assets/Introimage.png';

function Introdt() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div className="intodt_container">
      <div className="spanC" data-aos="fade-down">
        <span className="intro-span">DT Energy who we are?</span>
        <span className="intro-subspan">Leading Sri Lanka Towards a Greener Tomorrow with Solar Power</span>
      </div>
      
      <div className="introC" data-aos="fade-up">
        <div 
          className="introC-background" 
          style={{
            backgroundImage: `url(${introbackgroundImage})`,
          }}
        ></div>
        <div className="introimage" data-aos="fade-right">
          <img src={intropic} alt="Intro" className="intro-image-content" />
        </div>
        <div className="introtext" data-aos="fade-left">
          At DT Energy, we are passionate about utilizing the sun's abundant energy to create a more sustainable and eco-friendly future for Sri Lanka. As a trusted leader in solar energy solutions, we focus on delivering reliable and efficient rooftop solar systems tailored to meet the energy needs of homes and businesses.
          Our goal is simple: reduce your energy bills while contributing to a cleaner environment. By choosing DT Energy, you’re investing in a renewable future, where solar power provides long-term savings and environmental benefits for generations to come.
        </div>
      </div>
    </div>
  );
}

export default Introdt;
