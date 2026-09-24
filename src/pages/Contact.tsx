import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Mail, Phone, Check } from 'lucide-react';
import './Contact.css';
import indiaMap from '../assets/india_map.png';

const Contact = () => {
  const [result, setResult] = useState("");
  const location = useLocation();
  const [selectedService, setSelectedService] = useState("");
  const [productName, setProductName] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get("service");
    if (serviceParam) {
      setSelectedService(serviceParam);
    }
    const productParam = params.get("product");
    if (productParam) {
      setProductName(productParam);
    }
  }, [location]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "b3e3627a-45c4-487b-b4c9-99c233bc224b");
    formData.append("subject", "New Inquiry from Unique Engineering Website");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully! We will contact you soon.");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const states = [
    "New Delhi", "Punjab", "Haryana", "Rajasthan", "Madhya Pradesh", "Gujarat",
    "Maharashtra", "Karnataka", "Kerala", "Uttarakhand", "Uttar Pradesh", "Bihar",
    "Assam", "West Bengal", "Jharkhand", "Odisha", "Telangana", "Tamilnadu"
  ];

  return (
    <main className="contact-page">
      {/* Intro Text */}
      <section className="contact-intro">
        <div className="container">
          <p>
            Thank you for considering Unique Engineering as your partner in custom mechanical manufacturing solutions. We are committed to providing high-quality parts and exceptional customer service to meet your unique engineering needs. Our team of experts is available to answer any questions you may have and provide you with customized manufacturing solutions tailored to your specific requirements. Please fill out the contact form or give us a call to get started on your engineering journey with Unique Engineering.
          </p>
        </div>
      </section>

      <div className="contact-divider"></div>

      {/* Head Office Details */}
      <section className="head-office">
        <div className="container">
          <h2 className="section-title">Our Head Office</h2>

          <div className="office-location">
            <div className="icon-circle">
              <MapPin size={24} />
            </div>
            <h3>Delhi</h3>
            <p>3387 kucha pandit lal kuan</p>
          </div>

          <div className="contact-divider-small"></div>

          <div className="contact-methods">
            <div className="method-box">
              <div className="icon-circle">
                <Mail size={24} />
              </div>
              <h3>Email</h3>
              <a href="mailto:uniqueengineeringworks0786@gmail.com">uniqueengineeringworks0786@gmail.com</a>
            </div>

            <div className="method-box">
              <div className="icon-circle">
                <Phone size={24} />
              </div>
              <h3>Phone</h3>
              <a href="tel:+918178708236">+91 81787 08236</a>
            </div>
          </div>
        </div>
      </section>

      {/* Form and Google Map */}
      <section className="query-section">
        <div className="container">
          <div className="query-grid">
            <div className="query-form-container">
              <h2>Any Query?</h2>
              <form className="query-form" onSubmit={onSubmit}>
                <div className="form-group-row">
                  <input type="text" name="name" placeholder="Name*" required />
                  <input type="tel" name="phone" placeholder="Phone Number*" required />
                </div>
                <div className="form-group-row">
                  <input type="email" name="email" placeholder="Business Email*" required />
                  <input type="text" name="company" placeholder="Company Name/Brand Name*" required />
                </div>
                <div className="form-group-row">
                  <input type="text" name="location" placeholder="Location*" required />
                  <input type="text" name="quantity" placeholder="Order Quantity" />
                </div>
                <div className="form-group-row">
                  <input 
                    type="text" 
                    name="product_name" 
                    placeholder="Product Name" 
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                  <select name="service_type" value={selectedService} onChange={(e) => setSelectedService(e.target.value)} required>
                    <option value="" disabled>Select Service Type*</option>
                    <option value="Automobile Parts">Automobile Parts</option>
                    <option value="Railway Parts">Railway Parts</option>
                    <option value="Handicraft Products">Handicraft Products</option>
                    <option value="Polyester Button Machine Parts">Polyester Button Machine Parts</option>
                    <option value="Electric Panel Parts">Electric Panel Parts</option>
                    <option value="Pullers (Studd/Injector)">Pullers (Studd/Injector)</option>
                    <option value="Universal Coupling Joints">Universal Coupling Joints</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Please write a brief description of your product requirement we will contact you*" rows={4} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Submit Details</button>
                {result && <p className="form-result">{result}</p>}
              </form>
            </div>
            <div className="query-map-container">
              <iframe
                src="https://maps.google.com/maps?q=3387%20kucha%20pandit%20lal%20kuan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                title="Google Maps Location">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-divider"></div>

      {/* Pan India Presence */}
      <section className="pan-india-section">
        <div className="container">
          <div className="pan-india-grid">
            <div className="india-map-img">
              <img src={indiaMap} alt="Map of India" />
            </div>
            <div className="pan-india-content">
              <h2>Our Pan India Presence</h2>
              <h4>Driven with technology and trusted partners.</h4>
              <p>We do not have branches all over India, but we actively serve and deliver across the nation.</p>

              <div className="states-grid">
                {states.map((state, idx) => (
                  <div key={idx} className="state-item">
                    <Check size={16} className="check-icon" /> {state}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
