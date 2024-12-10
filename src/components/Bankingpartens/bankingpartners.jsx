import React, { useEffect } from 'react';
import './bankingpartners.css';
import logo10 from '../../assets/Bank/commercial.png';
import logo11 from '../../assets/Bank/boc.png';
import logo12 from '../../assets/Bank/hnb.png';
import logo13 from '../../assets/Bank/peoples.png';
import logo14 from '../../assets/Bank/sampath.png';
import logo15 from '../../assets/Bank/ndb.png';
import logo16 from '../../assets/Bank/sdb.png';
import logo17 from '../../assets/Bank/seylan.png';
import logo18 from '../../assets/Bank/hsbc.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function BankPartners() {
  useEffect(() => {
    
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div className="partners-container">
      <div className="partners-grid">
        
        <div className="partners-heading-container" data-aos="fade-up">
          <span className="partners-heading">
            Our Banking Partners
          </span>
        </div>

        <div className="partners-subheading-container" data-aos="fade-up" data-aos-delay="200">
          <span className="partners-subheading">
            Our banking partners help customers access solar energy solutions by providing tailored financing options
          </span>
        </div>

        <div className="partners-content-container" data-aos="fade-up" data-aos-delay="400">
          <div className="partners-background"></div>

          <div className="first">
            <div className="grid-box" data-aos="zoom-in" data-aos-delay="500">
              <img src={logo10} alt="Logo 1" />
            </div>
            <div className="grid-box" data-aos="zoom-in" data-aos-delay="600">
              <img src={logo11} alt="Logo 2" />
            </div>
            <div className="grid-box" data-aos="zoom-in" data-aos-delay="700">
              <img src={logo12} alt="Logo 3" />
            </div>
            <div className="grid-box" data-aos="zoom-in" data-aos-delay="800">
              <img src={logo13} alt="Logo 4" />
            </div>
            <div className="grid-box" data-aos="zoom-in" data-aos-delay="900">
              <img src={logo14} alt="Logo 5" />
            </div>
            <div className="grid-box" data-aos="zoom-in" data-aos-delay="1000">
              <img src={logo15} alt="Logo 6" />
            </div>
            <div className="grid-box" data-aos="zoom-in" data-aos-delay="1100">
              <img src={logo16} alt="Logo 7" />
            </div>
            <div className="grid-box" data-aos="zoom-in" data-aos-delay="1200">
              <img src={logo17} alt="Logo 8" />
            </div>
            <div className="grid-box" data-aos="zoom-in" data-aos-delay="1300">
              <img src={logo18} alt="Logo 9" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default BankPartners;
