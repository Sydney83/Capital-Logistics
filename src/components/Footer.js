import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Link to="/">
                <img 
                  src="/Blacklogo.png" 
                  alt="Capital Logistics Ltd" 
                  className="logo-image-footer"
                />
              </Link>
            </div>
            <p>Premier Malawian Logistics Solutions Provider</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Anamwino Complex, City Centre</p>
            <p>P.O. Box 3186, Lilongwe</p>
            <p>sales@cll.mw</p>
            <p>+265 0 999 150 433</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
  &copy; 2024 
  <a href="https://www.capitallogistics.com" target="_blank" rel="noopener noreferrer" title="Visit Capital Logistics website"> Capital Logistics Ltd. </a> 
  All rights reserved. | Developed by 
  <a href="https://www.imperialsystems.com" target="_blank" rel="noopener noreferrer" title="Visit Imperial Systems website"> Imperial Systems </a> 
  in collaboration with 
  <a href="https://www.beleaenterprise.com" target="_blank" rel="noopener noreferrer" title="Visit Belea Enterprise website"> Belea Enterprise </a>
</p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;