import React from 'react';
import '../css/App.css';
import Background from '../components/Background'; 
const Home = () => {
  return (
    <Background>
    <div className="page">
      <h1>Welcome to Our Ecommerce Store</h1>
      <p>Discover amazing products at great prices!</p>
    </div>
    </Background>
  );
};

export default Home;