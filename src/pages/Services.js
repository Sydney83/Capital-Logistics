import React from 'react';
import Hero from '../components/common/Hero';

const Services = () => {
  const services = [
    {
      title: "Bulk Transportation",
      description: "We provide reliable bulk transportation services for various types of cargo across Malawi and the region.",
      features: [
        "Modern fleet of high-capacity trucks and trailers",
        "GPS tracking for real-time monitoring",
        "Advanced route-planning software",
        "Specialized carriers for different cargo types",
        "Experienced drivers and logistics team"
      ],
      image: "/Images/1.jpeg"
    },
    {
      title: "Warehousing Solutions",
      description: "Secure and efficient warehousing facilities in strategic locations.",
      features: [
        "30m x 50m warehouses in Kanengo, Lilongwe",
        "24/7 security surveillance",
        "Modern loading docks and equipment",
        "Strict inventory control systems",
        "Temperature-controlled storage available"
      ],
      image: "/Images/2.jpeg"
    },
    {
      title: "Distribution Services",
      description: "Timely and efficient distribution to ensure your goods reach their destination.",
      features: [
        "Efficient distribution systems",
        "Timely dispatch and delivery",
        "Domestic and regional coverage",
        "Real-time delivery tracking",
        "Customized distribution plans"
      ],
      image: "/Images/3.jpeg"
    }
  ];

  return (
    <>
      <Hero 
        title="Our Services"
        subtitle="Comprehensive logistics solutions tailored to your business needs"
      />

      <section className="section">
        <div className="container">
          <div className="services-detail">
            {services.map((service, index) => (
              <div key={index} className="service-detail-card">
                <div className="service-content">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <ul className="features-list">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Capacity Section */}
      <section className="section capacity-section">
        <div className="container">
          <div className="capacity-header">
            <h2>Our Capacity</h2>
            <p className="capacity-subtitle">Get Ready To Thrive In Business With Our Comprehensive Logistics Solutions</p>
          </div>
          
          <div className="capacity-grid-modern">
            {/* Fleet Capacity */}
            <div className="capacity-card-modern">
              <div className="capacity-image">
                <img src="/Images/4.jpeg" alt="Fleet Capacity" />
              </div>
              <div className="capacity-content">
                <h3>Fleet Capacity</h3>
                <p className="capacity-description">
                  Our modern fleet is equipped to handle all your transportation needs with efficiency and reliability.
                </p>
                <div className="capacity-features">
                  <div className="feature-item">
                    <span className="feature-icon">🚚</span>
                    <span className="feature-text">High-capacity trucks & trailers</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">📡</span>
                    <span className="feature-text">GPS tracking & real-time monitoring</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🛣️</span>
                    <span className="feature-text">Advanced route planning</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🛡️</span>
                    <span className="feature-text">Well-maintained & insured vehicles</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Warehouse Capacity */}
            <div className="capacity-card-modern">
              <div className="capacity-image">
                <img src="/Images/5.jpeg" alt="Warehouse Capacity" />
              </div>
              <div className="capacity-content">
                <h3>Warehouse Capacity</h3>
                <p className="capacity-description">
                  Secure storage solutions with modern facilities to protect your goods throughout the supply chain.
                </p>
                <div className="capacity-features">
                  <div className="feature-item">
                    <span className="feature-icon">🏭</span>
                    <span className="feature-text">30m x 50m warehouse space</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🔒</span>
                    <span className="feature-text">24/7 security surveillance</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">📦</span>
                    <span className="feature-text">Modern loading docks</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">📊</span>
                    <span className="feature-text">Strict inventory controls</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;