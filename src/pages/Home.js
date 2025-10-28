import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import Background from '../components/Background';

const Home = () => {
  const features = [
    {
      icon: "🍦",
      title: "Premium Quality",
      description: "Made with the finest natural ingredients and no artificial additives"
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Quick and reliable delivery right to your doorstep"
    },
    {
      icon: "🌱",
      title: "Local & Fresh",
      description: "Supporting local farmers and using fresh, seasonal ingredients"
    },
    {
      icon: "❤️",
      title: "Made with Love",
      description: "Every scoop is crafted with passion and attention to detail"
    }
  ];

  return (
    <Background>
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="home-container">
            <h1 className="hero-title">
              Welcome to <span className="brand-highlight">J & J Ice Cream Shop</span>
            </h1>
            <p className="hero-subtitle">
              Indulge in the creamiest, most delicious ice cream flavors crafted with love and the finest ingredients. From classic vanilla to exotic tropical delights, we have something for everyone!
            </p>
            <div className="cta-buttons">
              <Link to="/products" className="btn btn-primary">
                Explore Flavors
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="home-container">
            <h2 className="home-section-title">Why Choose Us?</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="info-section">
          <div className="home-container">
            <div className="info-grid">
              <div className="info-content">
                <h2>How to Use Our Site</h2>
                <p>Discovering your perfect ice cream has never been easier! Follow these simple steps:</p>
                <ol>
                  <li><strong>Browse Flavors:</strong> Explore our extensive menu of delicious ice cream varieties.</li>
                  <li><strong>Add to Cart:</strong> Select your favorite flavors and quantities.</li>
                  <li><strong>Checkout:</strong> Complete your order and enjoy delivery to your door.</li>
                </ol>
              </div>
              <div className="info-content">
                <h2>More About Us</h2>
                <p>We pride ourselves on using natural ingredients, supporting local farmers, and creating memorable experiences with every scoop.</p>
                <p>Our commitment to quality ensures that every bite is a delightful adventure in flavor and texture.</p>
                <Link to="/about" className="btn btn-outline">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="steps-section">
          <div className="home-container">
            <h2 className="home-section-title">Order in 3 Easy Steps</h2>
            <div className="steps-grid">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Choose Your Flavors</h3>
                <p>Browse our delicious selection and pick your favorites.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Add to Cart</h3>
                <p>Select quantities and customize your order.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Enjoy Delivery</h3>
                <p>Receive your ice cream fresh at your doorstep.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Background>
  );
};

export default Home;
