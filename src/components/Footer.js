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
                  src="/Logo.png" 
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
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Capital Logistics Ltd. All rights reserved. | Registered under the Business Registration Act</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;