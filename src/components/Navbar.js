import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import iceCreamIcon from '../assets/images/icons/ice-cream.png';
import '../css/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo-container">
          <Link to="/" className="nav-logo">
            {/*ice cream icon*/}
            <img 
              src={iceCreamIcon} 
              alt="J & J Ice Cream" 
              className="logo-icon"
            />
            J & J - Ice Cream Shop
          </Link>
        </div>

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

        <div className="nav-icons">
          <Link to="/search" className="nav-icon">
            <i className="fas fa-search"></i>
          </Link>
          <Link to="/account" className="nav-icon">
            <i className="fas fa-user"></i>
          </Link>
          <Link to="/cart" className="nav-icon">
            <i className="fas fa-shopping-cart"></i>

            <span className="cart-count">{cartItems.length}</span>
          </Link>
        </div>

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
