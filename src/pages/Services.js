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

  const cargoTypes = [
    {
      category: "Agricultural Produce",
      description: "Specialized transportation for bulk agricultural products with careful handling to preserve quality and freshness.",
      items: ["Sugar", "Maize", "Beans", "Soya", "Other farm outputs"],
      features: [
        "Quality preservation during transit",
        "Timely delivery to markets",
        "Bulk handling expertise",
        "Temperature control options"
      ],
      image: "/Images/4.jpeg"
    },
    {
      category: "Industrial Goods",
      description: "Safe and secure transport of heavy machinery, industrial equipment, and essential raw materials.",
      items: ["Heavy machinery", "Essential spare parts", "Raw materials", "Industrial equipment"],
      features: [
        "Secure loading & unloading",
        "Heavy-duty equipment",
        "Safe transit protocols",
        "Timely factory deliveries"
      ],
      image: "/Images/5.jpeg"
    },
    {
      category: "FMCG Products",
      description: "Efficient transportation of fast-moving consumer goods with careful handling to maintain product quality.",
      items: ["Packaged foods", "Beverages", "Personal care", "Household items"],
      features: [
        "Careful handling procedures",
        "Freshness preservation",
        "Efficient delivery systems",
        "Stock level maintenance"
      ],
      image: "/Images/6.jpeg"
    },
    {
      category: "Construction Materials",
      description: "Reliable transportation for construction supplies and building materials to support projects.",
      items: ["Cement", "Steel", "Bricks", "Iron sheets", "Building supplies"],
      features: [
        "Safe material handling",
        "Secure transit",
        "On-time site delivery",
        "Project timeline support"
      ],
      image: "/Images/7.jpeg"
    },
    {
      category: "Beverages",
      description: "Specialized transportation for all types of beverages ensuring product freshness and quality.",
      items: ["Bottled water", "Soft drinks", "Juices", "Alcoholic drinks"],
      features: [
        "Proper handling protocols",
        "Freshness maintenance",
        "Timely market delivery",
        "Quality assurance"
      ],
      image: "/Images/8.jpeg"
    }
  ];

  return (
    <>
      <Hero 
        title="Our Services"
        subtitle="Comprehensive logistics solutions including transportation, warehousing, distribution, and specialized cargo handling"
      />

      {/* Main Services Section */}
      <section className="section">
        <div className="container">
          <div className="services-header">
            <h2>Core Logistics Services</h2>
            <p className="services-subtitle">End-to-end solutions for all your logistics needs</p>
          </div>
          
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

      {/* Capacity Section */}
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

          {/* Cargo Portfolio Section - Minimal Design */}
      <section className="section cargo-portfolio-section">
        <div className="container">
          <div className="cargo-header-minimal">
            <h2>Cargo Portfolio</h2>
            <div className="section-divider"></div>
          </div>

          <div className="cargo-grid-minimal">
            {cargoTypes.map((cargo, index) => (
              <div key={index} className="cargo-card-minimal">
                <div className="cargo-image-minimal">
                  <img src={cargo.image} alt={cargo.category} />
                </div>
                <div className="cargo-content-minimal">
                  <h3>{cargo.category}</h3>
                  <div className="content-divider"></div>
                  <p className="cargo-description-minimal">{cargo.description}</p>
                  
                  <div className="cargo-details-minimal">
                    <div className="cargo-items-minimal">
                      <h4>Items We Transport</h4>
                      <div className="items-list-minimal">
                        {cargo.items.map((item, itemIndex) => (
                          <span key={itemIndex} className="item-tag-minimal">{item}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Successful Deliveries</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Satisfied Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">On-Time Delivery Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;