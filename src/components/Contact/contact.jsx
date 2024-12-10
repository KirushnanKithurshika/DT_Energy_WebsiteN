import React from 'react';
import './contact.css';
import SLS from '../../assets/SLS.png';
import CEB from '../../assets/CEB.png';
import callL from '../../assets/call.png';
import whatsapp from '../../assets/whatsapp.png';
import website from '../../assets/website.png';
import facebook from '../../assets/facebook.png';
import emailL from '../../assets/email.png';
import locationL from '../../assets/location.png';
import whitelogo from '../../assets/whitelogo.png';

function Contact() {
  return (
    <div className="contact-container">
      <div className="Authorized-container">
        <div className="contact-heading">Authorized by</div>
        <div className="authorized-logos">
          <img src={SLS} alt="SLS Logo" />
          <img src={CEB} alt="CEB Logo" />
        </div>
      </div>
      
      <div className="contact-details">
        <div className="contact-info">
          <div className="contact-heading">Contact Us</div>

          <div className="contact-detailP">
            <span className="icon-container">
              <img src={locationL} alt="Location Icon" />
            </span>
            <strong>Address:</strong>
            <span className="detail-text">24/8, Green Road, Trincomalee.</span>
          </div>

          <div className="contact-detailP">
            <span className="icon-container">
              <a href="tel:+94713339203">
                <img src={callL} alt="Phone Icon" />
              </a>
            </span>
            <strong>Phone:</strong>
            <span className="detail-text">
              <a href="tel:+94713339203">+94713339203</a>
            </span>
          </div>

          <div className="contact-detailP">
            <span className="icon-container">
              <a href="mailto:dreamtrillions100@gmail.com">
                <img src={emailL} alt="Email Icon" />
              </a>
            </span>
            <strong>Email:</strong>
            <span className="detail-text">
              <a href="mailto:dreamtrillions100@gmail.com">dreamtrillions100@gmail.com</a>
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <h2>Want to be a partner with us?</h2>
        <p>If you're interested in our partnership and would like to find out some more information, one of our advisors is excited to help.</p>
        <button
  className="cta-button"
  onClick={() => {
    window.location.href = "mailto:dreamtrillions100@gmail.com?subject=Partnership&body=I am interested in a partnership.";
  }}
>
  Get Started
</button>

      </div>

      <div className="white-logocontainer">
        <div className="white-logo">
          <img src={whitelogo} alt="White Logo" />
        </div>
      </div>

      <div className="fbwhatsappweb">
        <div className="icon-container">
          <a href="https://web.facebook.com/profile.php?id=61565691174954">
            <img src={facebook} alt="Facebook Icon" />
          </a>
        </div>
        <div className="icon-container">
          <a
            href="https://wa.me/94713339203"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="WhatsApp Icon" />
          </a>
        </div>
        <div className="icon-container">
          <img src={website} alt="Website Icon" />
        </div>
      </div>

      <div className="middle-content">
        <p className="rights">@2024-2025.Dream Trillions(Pvt)Ltd. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Contact;
