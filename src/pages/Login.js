import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Background from '../components/Background'; 
import '../css/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  return (
    <Background>
      <div className="login-page-wrapper">
        <div className="login-container">
          <div className="login-header">
            <h2>Welcome Back</h2>
            <p>Sign in to your J & J Account</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="login-btn">
              Sign In
            </button>
          </form>

          <div className="login-footer">
            <p>
              New user? <Link to="/signup">Create account</Link>
            </p>
            <p className="forgot-password">
              <Link to="/forgot-password">Forgot password?</Link>
            </p>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default Login;