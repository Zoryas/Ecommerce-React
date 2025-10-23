import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-page">
      <h1 className="cart-title">🛒 Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is currently empty.</p>
      ) : (
        <div className="cart-container">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>₱{item.price}</p>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item)}>
                Remove
              </button>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total: ₱{total}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
