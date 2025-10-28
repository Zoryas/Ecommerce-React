import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../css/Cart.css';
import Background from '../components/Background'; 

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useContext(CartContext);

  const handleQuantityChange = (itemId, change) => {
    const item = cartItems.find(item => item.id === itemId);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        updateQuantity(itemId, newQuantity);
      }
    }
  };

  return (
    <Background>
    <div className="cart-page">
      <h1 className="cart-title">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is currently empty.</p>
      ) : (
        <>
          <div className="cart-container">
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.quantity}`} className="cart-item">
                <div className="cart-item-image-container">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                </div>
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>₱{item.price} each</p>
                  
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn minus"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="quantity">Qty: {item.quantity}</span>
                    <button 
                      className="quantity-btn plus"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  
                  <p className="item-total">Subtotal: ₱{item.price * item.quantity}</p>
                </div>
                <button 
                  className="remove-btn" 
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3 className="summary-title">Order Summary</h3>
            
            <div className="summary-details">
              <div className="summary-row">
                <span className="summary-label">Total Items:</span>
                <span className="summary-value">{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
              </div>
              
              <div className="summary-row total-row">
                <span className="summary-label">Total Price:</span>
                <span className="summary-value">₱{getTotalPrice()}</span>
              </div>
            </div>
            
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
    </Background>
  );
};

export default Cart;