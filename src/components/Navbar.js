import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo moved more to the left */}
        <div className="logo-container">
          <Link to="/" className="nav-logo">
            <span className="logo-icon">🍦</span>
            J & J - Ice Cream Shop
          </Link>
        </div>

        {/* Navigation Links */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/products" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Flavors
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>

        {/* Right Side Icons */}
        <div className="nav-icons">
          <Link to="/search" className="nav-icon">
            <i className="fas fa-search"></i>
          </Link>
          <Link to="/account" className="nav-icon">
            <i className="fas fa-user"></i>
          </Link>
          <Link to="/cart" className="nav-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">0</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;