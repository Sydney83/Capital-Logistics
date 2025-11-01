import React from 'react';
import Hero from '../components/common/Hero';

const About = () => {
  const values = [
    {
      title: "Excellence",
      description: "Commitment to delivering superior products and services."
    },
    {
      title: "Community Empowerment",
      description: "Creating opportunities for youth and supporting societal progress."
    },
    {
      title: "Innovation",
      description: "Continuous improvement and creativity in our offerings."
    },
    {
      title: "Integrity",
      description: "Adherence to ethical practices in all business dealings."
    }
  ];

  return (
    <>
      <Hero 
        title="About Us"
        subtitle="Learn more about Capital Logistics Limited - Malawi's premier logistics solutions provider"
      />

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Company Description</h2>
              <p>
                <strong>Capital Logistics Limited</strong> is a premier Malawian logistics solutions provider 
                specializing in the transportation, warehousing, and distribution of high-volume 
                goods across both domestic and regional markets.
              </p>
              
              <h3>Our Experience</h3>
              <p>
                With over 4 years of operational excellence, Capital Logistics Limited has built 
                an enviable reputation for on-time delivery, competitive pricing, and seamless 
                operational execution.
              </p>

              <h3>Our Fleet & Technology</h3>
              <p>
                Our operations are powered by a modern, well-maintained fleet consisting of 
                high-capacity trucks, trailers, and specialized carriers, all equipped with 
                GPS tracking and supported by advanced route-planning software.
              </p>
            </div>
            <div className="about-images">
              <div className="image-grid-main">
                <img src="/Images/1.jpeg" alt="Our Transportation Fleet" />
              </div>
              <div className="image-grid-side">
                <img src="/Images/2.jpeg" alt="Warehouse Operations" />
                <img src="/Images/3.jpeg" alt="Distribution Services" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section vision-mission-section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card">
              <h2>Our Vision</h2>
              <p>
                To be Malawi's most trusted and efficient logistics partner, connecting industries 
                and markets through innovative, reliable, and sustainable transportation solutions.
              </p>
            </div>
            <div className="vm-card">
              <h2>Our Mission</h2>
              <p>
                To provide reliable, efficient, and value-driven logistics solutions that empower 
                our clients' supply chains and support their business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;