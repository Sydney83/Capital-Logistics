import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <img 
                src="/Logo.png" 
                alt="Capital Logistics Ltd" 
                className="logo-image"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="nav-links">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
            <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
          </ul>

          {/* Mobile Hamburger Menu */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className={`hamburger-line ${isMenuOpen ? 'line1' : ''}`}></div>
            <div className={`hamburger-line ${isMenuOpen ? 'line2' : ''}`}></div>
            <div className={`hamburger-line ${isMenuOpen ? 'line3' : ''}`}></div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
            <div className="mobile-menu-content">
              <div className="mobile-logo">
                <img 
                  src="/Logo.png" 
                  alt="Capital Logistics Ltd" 
                  className="logo-image"
                />
              </div>
              <ul className="mobile-nav-links">
                <li>
                  <Link 
                    to="/" 
                    className={location.pathname === '/' ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className={location.pathname === '/about' ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    className={location.pathname === '/services' ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className={location.pathname === '/contact' ? 'active' : ''}
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="mobile-contact-info">
                <div className="contact-item">
                  <strong>Phone:</strong>
                  <div>+265 0 999 150 433</div>
                  <div>+265 0 989 429 305</div>
                  <div>+265 0 888 944 332</div>
                </div>
                <div className="contact-item">
                  <strong>Email:</strong>
                  <div>charlesmwale.mw@gmail.com</div>
                </div>
              </div>
              <button className="mobile-cta-button" onClick={closeMenu}>
                Get In Touch
              </button>
            </div>
          </div>

          {/* Overlay when menu is open */}
          <div 
            className={`mobile-menu-overlay ${isMenuOpen ? 'overlay-open' : ''}`}
            onClick={closeMenu}
          ></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;