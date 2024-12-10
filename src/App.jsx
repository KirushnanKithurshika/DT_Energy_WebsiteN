import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Homepage from './pages/HomePage/homepage';
import Product from './pages/products/product';
import Products from './components/products/products';
import Contact from './components/Contact/contact';
import Servicepage from './pages/Servicepage/servicepage';
import Careers from './pages/Career/career';
import Contactus from './pages/Contactus/contactus';
import Partners from './components/Partners/partners';

function App() {
  return (
    <BrowserRouter basename="/DT_Energy_WebsiteN">
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/product' element={<Product />} />
        <Route path='/service' element={<Servicepage />} />
        <Route path='/career' element={<Careers />} />
        <Route path='/contact' element={<Contactus />} />
        <Route path='/partners' elment={<Partners/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
