import React from 'react';
import Hero from '../components/common/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: "Bulk Transportation",
      description: "Modern fleet with specialized machinery for bulk cargo transport with GPS tracking and route planning.",
      icon: "🚚",
      link: "/services",
      image: "/Images/1.jpeg"
    },
    {
      title: "Warehousing",
      description: "30m x 50m warehouses in Kanengo, Lilongwe with 24/7 security and modern loading docks.",
      icon: "🏭",
      link: "/services",
      image: "/Images/2.jpeg"
    },
    {
      title: "Distribution",
      description: "Efficient distribution systems enabling fast handling and timely dispatch across Malawi and the region.",
      icon: "📦",
      link: "/services",
      image: "/Images/3.jpeg"
    }
  ];

  const cargoTypes = [
    { name: "Agricultural Produce", count: "50+", link: "/cargo", image: "/Images/4.jpeg" },
    { name: "Industrial Goods", count: "30+", link: "/cargo", image: "/Images/5.jpeg" },
    { name: "FMCG Products", count: "40+", link: "/cargo", image: "/Images/6.jpeg" },
    { name: "Construction Materials", count: "25+", link: "/cargo", image: "/Images/7.jpeg" },
    { name: "Beverages", count: "35+", link: "/cargo", image: "/Images/8.jpeg" }
  ];

  return (
    <>
      <Hero 
        title="Capital Logistics Limited"
        subtitle="Premier Malawian logistics solutions provider specializing in transportation, warehousing, and distribution of high-volume goods"
        showButton={true}
      />

      {/* About Preview Section */}
      <section className="section">
        <div className="container">
          <div className="about-preview">
            <div className="about-text">
              <h2>About Capital Logistics</h2>
              <p>
                Capital Logistics Limited is a premier Malawian logistics solutions provider 
                specializing in the transportation, warehousing, and distribution of high-volume 
                goods across both domestic and regional markets.
              </p>
              <p>
                With over 4 years of operational excellence, we have built an enviable reputation 
                for on-time delivery, competitive pricing, and seamless operational execution.
              </p>
              <Link to="/about" className="cta-button secondary">Learn More</Link>
            </div>
            <div className="about-image">
              <img src="/Images/company-fleet.jpg" alt="Capital Logistics Fleet" className="featured-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-preview">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link} className="service-link">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cargo Portfolio Preview */}
      <section className="section cargo-preview">
        <div className="container">
          <h2>Our Cargo Portfolio</h2>
          <p className="section-subtitle">We specialize in transporting various types of goods across Malawi and the region</p>
          <div className="cargo-stats">
            {cargoTypes.map((cargo, index) => (
              <div key={index} className="cargo-stat">
                <div className="cargo-image">
                  <img src={cargo.image} alt={cargo.name} />
                </div>
                <div className="stat-number">{cargo.count}</div>
                <div className="stat-name">{cargo.name}</div>
                <Link to={cargo.link} className="stat-link">View Details</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section why-choose-us">
        <div className="container">
          <h2>Why Choose Capital Logistics?</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>🚚 Modern Fleet</h3>
              <p>Well-maintained trucks and trailers with GPS tracking</p>
            </div>
            <div className="feature">
              <h3>⏱️ On-Time Delivery</h3>
              <p>Proven track record of timely deliveries</p>
            </div>
            <div className="feature">
              <h3>🛡️ Secure Warehousing</h3>
              <p>24/7 security and strict inventory controls</p>
            </div>
            <div className="feature">
              <h3>💰 Competitive Pricing</h3>
              <p>Cost-effective solutions without compromising quality</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;