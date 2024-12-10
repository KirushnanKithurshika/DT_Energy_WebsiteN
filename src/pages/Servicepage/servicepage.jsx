import React from 'react';
import backgroundImagepProduct from '../../assets/servicepageBG.jpg';
import Navbar from '../../components/Navbar/navbar';
import './servicepage.css';
import Solarintallation from '../../components/Services/solarinstallation'

function Servicepage() {
  return (
    <div className='servicepage-container'> 
     <div
      className="servicepage-background"
      style={{
        backgroundImage: `url(${backgroundImagepProduct})`
      }}
    >
      <div className="nav_container">
        <Navbar />
      </div>
      <div className='servicepageheadsubhead'>
      <div className='servicepage'>Services</div>
      <div className='servicepage-subheading'>Comprehensive Solar Solutions: Installation, Battery Storage, Consultation & Financial Assistance</div>
    </div>
    </div>

    <Solarintallation/>
   
   
  
    
  
   
    </div>
  );
}
export default Servicepage;