
import { Link } from 'react-router-dom';
import './Home.css';
import bgImage from '../assets/industries/auto_parts.png'; // High quality industrial image for hero

import img1 from '../assets/products/1.jpeg';
import img2 from '../assets/products/2.jpeg';
import img3 from '../assets/products/3.jpeg';
import img4 from '../assets/products/4.jpeg';
import img5 from '../assets/products/5.jpeg';
import img6 from '../assets/products/6.jpeg';
import img7 from '../assets/products/7.jpeg';
import img8 from '../assets/products/8.jpeg';
import img9 from '../assets/products/9.jpeg';
import img10 from '../assets/products/10.jpeg';

const Home = () => {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${bgImage})` }}>
        <div className="container hero-content">
          <h1>Precision Mechanical Engineering</h1>
          <p>Manufacturers of Automobile Parts, Handicraft Products, and Universal Coupling Joints</p>
          <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Expertise</h2>
            <div className="divider"></div>
            <p>Utilizing advanced Lathe (Kharad) machinery and high-precision tooling to deliver quality components.</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>Automobile Parts</h3>
              <p>High-tensile, precisely engineered parts suitable for the most demanding automotive applications.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔗</div>
              <h3>Universal Coupling Joints</h3>
              <p>Durable and reliable coupling joints designed for maximum torque transfer and longevity.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛠️</div>
              <h3>Handicraft Products</h3>
              <p>Detailed and precision-machined metal handicrafts, balancing industrial strength with aesthetic design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="products-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <div className="divider"></div>
          </div>
          
          <div className="carousel-container">
            <div className="carousel-track">
              {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].map((img, idx) => (
                <div key={idx} className="carousel-slide">
                  <img src={img} alt={`Unique Engineering Product ${(idx % 10) + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT CTA SECTION */}
      <section className="contact-cta-section" style={{ padding: '6rem 0', backgroundColor: 'var(--surface)', textAlign: 'center' }}>
        <div className="container">
          <h2>Ready to get started?</h2>
          <p style={{ color: 'var(--text-light)', margin: '1rem 0 2rem', fontSize: '1.2rem' }}>Get in touch with us today for a custom engineering quote.</p>
          <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
