import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <img src={logo} alt="Unique Engineering" className="footer-logo" />
          <p>Manufacturers of premium quality Automobile Parts, Handicraft Products, and Universal Coupling Joints using advanced Kharad machining techniques.</p>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p style={{marginBottom: "0.75rem"}}>📍 Location: India</p>
          <p style={{marginBottom: "0.75rem"}}>
            📞 Phone: <a href="tel:+918178708236" style={{color: "inherit", textDecoration: "none", transition: "color 0.2s"}} onMouseOver={(e) => e.currentTarget.style.color = "var(--primary)"} onMouseOut={(e) => e.currentTarget.style.color = "inherit"}>+91 81787 08236</a>
          </p>
          <p style={{marginBottom: "0.75rem"}}>
            ✉️ Email: <a href="mailto:uniqueengineeringworks0786@gmail.com" style={{color: "inherit", textDecoration: "none", transition: "color 0.2s"}} onMouseOver={(e) => e.currentTarget.style.color = "var(--primary)"} onMouseOut={(e) => e.currentTarget.style.color = "inherit"}>uniqueengineeringworks0786@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Unique Engineering. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
