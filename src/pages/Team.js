import React from 'react';
import Hero from '../components/common/Hero';

const Team = () => {
  const teamMembers = [
    {
      name: "Charles Mwale",
      position: "Chief Executive Officer",
      description: "Overall strategic leadership and business development with extensive experience in logistics management.",
      image: "/Images/9.jpeg" // Using your available image
    },
    {
      name: "Warehouse Manager",
      position: "Operations Lead",
      description: "Oversees all warehouse operations and inventory management with precision and efficiency.",
      image: "/Images/10.jpeg" // Using your available image
    },
    {
      name: "Operations Specialist",
      position: "Warehouse Officer",
      description: "Manages daily warehouse operations and logistics coordination across all departments.",
      image: "/Images/1.jpeg" // Fallback to existing image
    },
    {
      name: "Finance Director",
      position: "Finance Officer",
      description: "Financial management and accounting operations ensuring business sustainability and growth.",
      image: "/Images/2.jpeg" // Fallback to existing image
    },
    {
      name: "HR Manager",
      position: "HR Officer",
      description: "Staff management and organizational development fostering a positive work environment.",
      image: "/Images/3.jpeg" // Fallback to existing image
    },
    {
      name: "Logistics Coordinator",
      position: "Operations Team",
      description: "Coordinates transportation schedules and ensures timely delivery of all consignments.",
      image: "/Images/4.jpeg" // Fallback to existing image
    },
    {
      name: "Client Relations",
      position: "Customer Service",
      description: "Manages client relationships and ensures customer satisfaction throughout the service delivery.",
      image: "/Images/5.jpeg" // Fallback to existing image
    },
    {
      name: "Fleet Manager",
      position: "Transport Team",
      description: "Oversees vehicle maintenance and fleet operations for optimal performance and safety.",
      image: "/Images/6.jpeg" // Fallback to existing image
    }
  ];

  return (
    <>
      <Hero 
        title="Meet Our Team"
        subtitle="Dedicated professionals driving excellence in logistics and supply chain management"
      />

      <section className="section team-section-modern">
        <div className="container">
          <div className="team-header-modern">
            <h2>Our Expert Team</h2>
            <p className="team-subtitle">
              Meet the experienced professionals who make Capital Logistics Limited the premier choice 
              for logistics solutions in Malawi and beyond.
            </p>
          </div>

          <div className="team-grid-modern">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card-modern">
                <div className="team-member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="image-overlay"></div>
                </div>
                <div className="team-member-info">
                  <h3>{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <p className="member-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="team-cta">
            <h3>Ready to Work With Our Expert Team?</h3>
            <p>Get in touch with us today to discuss your logistics needs and discover how our team can help your business thrive.</p>
            <button className="cta-button">GET IN TOUCH</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;