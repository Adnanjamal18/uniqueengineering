import React, { useState } from 'react';
import './Products.css';
import { X } from 'lucide-react';

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

const productsData = [
  { img: img1, title: 'Smap Suival (Snap Swivel)', desc: 'Heavy-duty forged snap hook with 360-degree swivel eye, designed for secure attachment, rigging, and mechanical applications.', category: 'Automobile Parts' },
  { img: img2, title: 'Injector Puller', desc: 'Specialized heavy-duty diesel injector puller kit with adapters and bolts for damage-free extraction of stuck common rail injectors.', category: 'Pullers (Studd/Injector)' },
  { img: img3, title: 'Swift Delfi Injector Puller', desc: 'Precision engineered injector puller specifically designed for Delphi fuel injectors in Maruti Suzuki Swift and compatible diesel engines.', category: 'Pullers (Studd/Injector)' },
  { img: img4, title: 'Injector Puller', desc: 'Heavy-duty twin column injector removal tool engineered for high-torque extraction of tightly seized diesel injectors.', category: 'Pullers (Studd/Injector)' },
  { img: img5, title: 'Shocker Spring Adjuster', desc: 'Durable cast and machined shock absorber adjuster cam, built for smooth spring preload adjustment on automotive suspension systems.', category: 'Automobile Parts' },
  { img: img6, title: 'Swift Injector Puller', desc: 'Dedicated diesel injector puller tool designed for swift extraction of stuck injectors in Swift and multijet common rail engines.', category: 'Pullers (Studd/Injector)' },
  { img: img7, title: 'CRDI Zigg Plate', desc: 'Multi-vehicle CRDI injector clamping jig plate with precise slots for Bosch, Delphi, Denso, Laura, Kobelco, Prima, and Leyland injectors.', category: 'Pullers (Studd/Injector)' },
  { img: img8, title: 'Zigg Plate Injector Puller', desc: 'Complete CRDI injector jig plate puller assembly equipped with heavy-duty guide pillars and studs for secure injector servicing.', category: 'Pullers (Studd/Injector)' },
  { img: img9, title: 'Universal Coupling Joint - Standard', desc: 'Versatile coupling joint ensuring seamless power transmission across misaligned shafts.', category: 'Universal Coupling Joints' },
  { img: img10, title: 'Universal Coupling Joint - Heavy Duty', desc: 'Reinforced coupling joint for industrial heavy-machinery and high-load torque applications.', category: 'Universal Coupling Joints' }
];

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [result, setResult] = useState("");

  const openQuoteModal = (category: string, title: string) => {
    setSelectedCategory(category);
    setProductName(title);
    setResult("");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "b3e3627a-45c4-487b-b4c9-99c233bc224b");
    formData.append("subject", "New Quote Request from Products Page");

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

  return (
    <main className="products-page">
      <div className="page-banner">
        <div className="container">
          <h1>Our Products</h1>
          <p>Browse our gallery of precision-engineered components.</p>
        </div>
      </div>
      
      <div className="container products-list-container">
        <div className="products-list">
          {productsData.map((prod, idx) => (
            <div key={idx} className="product-list-card">
              <div className="product-image-box">
                <img src={prod.img} alt={prod.title} />
              </div>
              <div className="product-details-box">
                <h2>{prod.title}</h2>
                <span className="product-category">{prod.category}</span>
                <p>{prod.desc}</p>
                <button 
                  onClick={() => openQuoteModal(prod.category, prod.title)} 
                  className="btn btn-primary quote-btn"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            
            <h2 className="modal-title">Request a Quote</h2>
            <p className="modal-subtitle">Fill in the details below and our engineering team will get back to you.</p>
            
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
                  placeholder="Product Name*" 
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required 
                />
                <select name="service_type" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} required>
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
              <button type="submit" className="btn btn-primary submit-btn">Submit Request</button>
              {result && <p className="form-result">{result}</p>}
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default Products;
