import React from 'react';
import '../css/App.css';
import '../css/Contact.css';
import Background from '../components/Background';

const Contact = () => {
  return (
    <Background>
    <div className="page">
      <h1>Contact Us</h1>
      <p>Get in touch with J & J Ice Cream Shop for orders, inquiries, or feedback.</p>

      <div className="contact-section">
        <h2>Visit Us</h2>
        <p>Cabuyao, Laguna</p>
      </div>

      <div className="contact-section">
        <h2>Call Us</h2>
        <p>0912 345 6789</p>
      </div>

      <div className="contact-section">
        <h2>Email Us</h2>
        <p>J&J@gmail.com</p>
      </div>

      <div className="contact-section">
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

export default Contact;
