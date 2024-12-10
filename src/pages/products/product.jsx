import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import backgroundImagepProduct from '../../assets/PageBG.jpg';
import './product.css';
import Products from '../../components/products/products';
import Partners from '../../components/Partners/partners';
import Contact from '../../components/Contact/contact';

function Product() {
  return (
    <div className='product-container'> 
     <div
      className="product-background"
      style={{
        backgroundImage: `url(${backgroundImagepProduct})`
      }}
    >
      <div className="nav_container">
        <Navbar />
      </div>
      <div className='Productheadsubhead'>
      <div className='Product'>Products</div>
      <div className='product-subheading'>We offer quality solar panels, inverters, and batteries for reliable and sustainable energy solutions.</div>
    </div>
    </div>
    <Products/>
    <Partners/>
    <div id="contact-section">
      <Contact />
    </div>
  
    
  
   
    </div>
  );
}

export default Product;
