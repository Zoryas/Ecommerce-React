import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Products.css';

const Products = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    {
      id: 1,
      name: 'Chocolate Cornetto',
      price: 20,
      image: 'https://www.tradingroad.com/media/k2/items/cache/0d422469a7bfe49699e19d8d898530d7_XL.jpg',
    },
    {
      id: 2,
      name: 'Vanilla Cornetto',
      price: 20,
      image: 'https://assets.unileversolutions.com/v1/1082763.jpg',
    },
    {
      id: 3,
      name: 'Matcha Cornetto',
      price: 20,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfp8l1wiRPw1O9AzGxzouTRUwIE4WQFkzDMQ&s',
    },
    {
      id: 4,
      name: 'Cookies & Cream Cornetto',
      price: 20,
      image: 'https://m.media-amazon.com/images/I/61KQmPK8EPL._AC_UF894,1000_QL80_.jpg',
    },
    {
      id: 5,
      name: 'Berry Crazy Cornetto',
      price: 20,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDXcDmnAWWLN59qY7nsLbJb4oZtlVIAnLl0SAorrYYQ5Bd1QHZ00Ud4wGKiL3UyYEaqk&usqp=CAU',
    },
    {
      id: 6,
      name: 'Caramel Cornetto',
      price: 20,
      image: 'https://cdn0.woolworths.media/content/wowproductimages/large/6014575_8.jpg',
    },
    {
      id: 7,
      name: 'Ube Caramel Cornetto',
      price: 20,
      image: 'https://assets.unileversolutions.com/v1/130550931.png',
    },
    {
      id: 8,
      name: 'Uni Cornetto',
      price: 20,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHg0GRUWrDVSzBFDu5Lpb3p0FPai_icFxOww&s',
    },
    {
      id: 9,
      name: 'Strawberry Cornetto',
      price: 20,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVpO3OpNdghYQd0g71NoE8oBFOvbqnwL7eTw&s',
    },
    {
      id: 10,
      name: 'White Rose Cornetto',
      price: 20,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYWaUWdN3Li_U2gQPpeuIreomNBx6Nob9eyOwBQPDDrKRPEhEgNO_sXomZA56KfYcToo&usqp=CAU',
    },
  ];

  return (
    <div className="products-page">
      <h2 className="products-title">Our Flavors</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <div className="product-footer">
              <p className="product-price">₱{product.price}</p>
              <button className="add-to-cart" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

