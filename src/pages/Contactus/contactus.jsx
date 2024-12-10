import React from 'react'
import Navbar from '../../components/Navbar/navbar';
import backgroundImagecontactus from '../../assets/contactusBG.png';
import Contactusdown from '../../components/Contact/contactusdown';
import Contact from '../../components/Contact/contact';

function Contactus() {
    return (
        <div className='product-container'> 
         <div
          className="product-background"
          style={{
            backgroundImage: `url(${backgroundImagecontactus})`
          }}
        >
          <div className="nav_container">
            <Navbar />
          </div>
          <div className='Productheadsubhead'>
          <div className='Product'>Contact</div>
          <div className='product-subheading'>We offer quality solar panels, inverters, and batteries for reliable and sustainable energy solutions.</div>
        </div>
        </div>

        <Contactusdown/>
        <Contact/>
        
        
      
       
        </div>
      );
    }
    
export default Contactus