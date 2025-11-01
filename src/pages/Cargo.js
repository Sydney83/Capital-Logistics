import React from 'react';
import Hero from '../components/common/Hero';

const Cargo = () => {
  const cargoPairs = [
    [
      {
        category: "Agricultural Produce",
        description: "Specialized transportation for bulk agricultural products with careful handling to preserve quality and freshness throughout the supply chain.",
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
        description: "Safe and secure transport of heavy machinery, industrial equipment, and essential raw materials for manufacturing industries.",
        items: ["Heavy machinery", "Essential spare parts", "Raw materials", "Industrial equipment"],
        features: [
          "Secure loading & unloading",
          "Heavy-duty equipment",
          "Safe transit protocols",
          "Timely factory deliveries"
        ],
        image: "/Images/5.jpeg"
      }
    ],
    [
      {
        category: "FMCG Products",
        description: "Efficient transportation of fast-moving consumer goods with careful handling to maintain product quality and meet retail demands.",
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
        description: "Reliable transportation for construction supplies and building materials to support projects across Malawi and the region.",
        items: ["Cement", "Steel", "Bricks", "Iron sheets", "Building supplies"],
        features: [
          "Safe material handling",
          "Secure transit",
          "On-time site delivery",
          "Project timeline support"
        ],
        image: "/Images/7.jpeg"
      }
    ],
    [
      {
        category: "Beverages",
        description: "Specialized transportation for all types of beverages ensuring product freshness and quality from manufacturer to market.",
        items: ["Bottled water", "Soft drinks", "Juices", "Alcoholic drinks"],
        features: [
          "Proper handling protocols",
          "Freshness maintenance",
          "Timely market delivery",
          "Quality assurance"
        ],
        image: "/Images/8.jpeg"
      }
    ]
  ];

  return (
    <>
      <Hero 
        title="Our Cargo Portfolio"
        subtitle="Comprehensive cargo handling services tailored to various industries across Malawi and the region"
      />

      <section className="section cargo-section">
        <div className="container">
          <div className="cargo-header">
            <h2>Specialized Cargo Solutions</h2>
            <p className="cargo-subtitle">Get Ready To Thrive In Business With Our Tailored Logistics Solutions For Every Industry</p>
          </div>

          <div className="cargo-pairs-grid">
            {cargoPairs.map((pair, pairIndex) => (
              <div key={pairIndex} className="cargo-pair">
                <div className="cargo-pair-row">
                  {pair.map((cargo, cargoIndex) => (
                    <div key={cargoIndex} className="cargo-card-modern">
                      <div className="cargo-image">
                        <img src={cargo.image} alt={cargo.category} />
                      </div>
                      <div className="cargo-content">
                        <h3>{cargo.category}</h3>
                        <p className="cargo-description">{cargo.description}</p>
                        
                        <div className="cargo-details-grid">
                          <div className="cargo-items">
                            <h4>Items We Transport</h4>
                            <div className="items-list">
                              {cargo.items.map((item, itemIndex) => (
                                <span key={itemIndex} className="item-tag">{item}</span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="cargo-features">
                            <h4>Our Expertise</h4>
                            <div className="features-list">
                              {cargo.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="feature-item">
                                  <span className="feature-icon">✓</span>
                                  <span className="feature-text">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Cargo Stats Section */}
      <section className="section cargo-stats-section">
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

export default Cargo;