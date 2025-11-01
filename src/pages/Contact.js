import React, { useState } from 'react';
import Hero from '../components/common/Hero';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  return (
    <>
      <Hero 
        title="Contact Us"
        subtitle="Get in touch with Capital Logistics for your logistics needs"
      />

      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              
              <div className="contact-item">
                <h3>📞 Phone Numbers</h3>
                <div className="phone-numbers">
                  <p>+265 0 999 150 433</p>
                  <p>+265 0 989 429 305</p>
                  <p>+265 0 888 944 332</p>
                </div>
              </div>

              <div className="contact-item">
                <h3>📧 Email</h3>
                <p>sales@cll.mw</p>
              </div>

              <div className="contact-item">
                <h3>🏢 Address</h3>
                <p>Anamwino Complex, City Centre</p>
                <p>P.O. Box 3186, Lilongwe</p>
              </div>

              <div className="contact-item">
                <h3>🕒 Business Hours</h3>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="cta-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section">
        <div className="container">
          <h2>Our Location</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <h3>Anamwino Complex, City Centre</h3>
              <p>Lilongwe, Malawi</p>
              <p>P.O. Box 3186</p>
              <div className="map-image">
                <span>Interactive Map Here</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;