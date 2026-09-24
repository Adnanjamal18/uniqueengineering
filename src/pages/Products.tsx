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
  { img: img1, title: 'Precision CNC Component', desc: 'Custom CNC machined metal component built with high tolerance for critical assemblies.', category: 'Automobile Parts' },
  { img: img2, title: 'Heavy Duty Gear Assembly', desc: 'Durable gear assembly designed to withstand high torque and stress in automotive systems.', category: 'Automobile Parts' },
  { img: img3, title: 'Kharad Machined Shaft', desc: 'Precision turned metal shaft crafted on advanced Lathe (Kharad) machinery.', category: 'Automobile Parts' },
  { img: img4, title: 'Railway Bracket', desc: 'Thick gauge steel bracket engineered specifically for the intense vibrations of the railway sector.', category: 'Railway Parts' },
  { img: img5, title: 'Heavy Suspension Part', desc: 'Robust suspension linkage component built for heavy-duty applications and longevity.', category: 'Railway Parts' },
  { img: img6, title: 'Decorative Brass Fitting', desc: 'Aesthetically pleasing and intricate metal fitting combining industrial strength with art.', category: 'Handicraft Products' },
  { img: img7, title: 'Button Mold Insert', desc: 'Micro-precision machined insert mold used in industrial polyester button manufacturing.', category: 'Polyester Button Machine Parts' },
  { img: img8, title: 'Panel Fastener Set', desc: 'High-conductivity, secure fastening solutions tailored for large electric panels.', category: 'Electric Panel Parts' },
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
