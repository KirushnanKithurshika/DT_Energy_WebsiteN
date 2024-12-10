import React from 'react';
import CareerBG from '../../assets/CareerBG.png';
import Navbar from '../../components/Navbar/navbar';
import './career.css';

import JobDescription from '../../components/Jobform/jobdapply';
import Contact from '../../components/Contact/contact';




function Careers() {
  return (
    <div className='career-container'> 
     <div
      className="career-background"
      style={{
        backgroundImage: `url(${CareerBG})`
      }}
    >
      <div className="nav_container">
        <Navbar />
      </div>
      <div className='careerpageheadsubhead'>
      
      <div className='careerpage-subheading'>


Join the Green Revolution with DT Energy 🌱</div>
    </div>
    </div>
<div className='career-head'>
At DT Energy, we are dedicated to providing sustainable solar energy solutions across Sri Lanka. As a leader in solar panel installations and energy storage systems, we aim to create a cleaner, greener future. We are looking for passionate individuals to join our growing team and contribute to our mission of making renewable energy accessible to all. If you're ready to be part of an innovative and dynamic company, DT Energy offers exciting career opportunities in the renewable energy sector.
</div>

<JobDescription/>
  
<Contact/>

   
   
  
    
  
   
    </div>
  );
}
export default Careers;