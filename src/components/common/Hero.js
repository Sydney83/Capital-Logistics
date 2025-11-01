import React from 'react';

const Hero = ({ title, subtitle, showButton = false }) => {
  return (
    <section className="hero">
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {showButton && (
          <button className="cta-button">Get In Touch</button>
        )}
      </div>
    </section>
  );
};

export default Hero;