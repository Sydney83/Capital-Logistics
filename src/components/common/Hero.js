import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ title, subtitle, showButton = false }) => {
  return (
    <section className="hero">
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {showButton && (
          <Link to="/contact" className="mobile-cta-button">
  Get In Touch
</Link>
        )}
      </div>
    </section>
  );
};

export default Hero;