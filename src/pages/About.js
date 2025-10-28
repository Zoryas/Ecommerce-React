import React from 'react';
import '../css/App.css';
import '../css/About.css';
import Background from '../components/Background';

const About = () => {
  return (
    <Background>
    <div className="page">
      <h1>About J & J Ice Cream Shop</h1>

      <div className="about-section">
        <h2>Categories</h2>
        <p>We offer a wide variety of ice cream flavors including classic, premium, seasonal, and vegan options.</p>
      </div>

      <div className="about-section">
        <h2>Contact Info</h2>
        <div className="contact-details">
          <div className="contact-item">
            <h3>Cabuyao, Laguna</h3>
            <p>Address</p>
          </div>
          <div className="contact-item">
            <h3>0912 345 6789</h3>
            <p>Mobile</p>
          </div>
          <div className="contact-item">
            <h3>J&J@gmail.com</h3>
            <p>Email</p>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>Basic Info</h2>
        <p>Not yet rated (0 Reviews)</p>
        <p>Always open</p>
        <p>Hours</p>
      </div>

      <div className="about-section">
        <h2>Follow Us</h2>
        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-tiktok"></i> TikTok
          </a>
        </div>
      </div>
    </div>
    </Background>
  );
};

export default About;
