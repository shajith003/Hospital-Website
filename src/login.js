// LoginRegister.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError("");
    setSuccess(false);
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (name && email && password) {
      const existingUser = JSON.parse(localStorage.getItem("user"));
      if (existingUser && existingUser.email === email) {
        setError("User already exists! Please login.");
        return;
      }
      const user = { name, email, password };
      localStorage.setItem("user", JSON.stringify(user));
      setSuccess(true);
      setTimeout(() => {
        setIsLogin(true);
        setSuccess(false);
      }, 2000);
    } else {
      setError("All fields are required!");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
      navigate("/dashboard");  // Redirect to dashboard on successful login
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className={`container ${isLogin ? "login-mode" : "register-mode"}`}>
      {/* Login Form */}
      <div className="form-container login">
        <form className="form" onSubmit={handleLogin}>
          <h2 className="form_title">Sign in to Website</h2>
          <span className="form__span">Use your email account</span>
          <input className="form__input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className="form__input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <a className="form__link">Forgot your password?</a>
          <button className="form__button" type="submit">SIGN IN</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>

      {/* Register Form */}
      <div className="form-container register">
        <form className="form" onSubmit={handleRegister}>
          <h2 className="form_title">Create Account</h2>
          <span className="form__span">Use email for registration</span>
          <input className="form__input" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input className="form__input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className="form__input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button className="form__button" type="submit">SIGN UP</button>
          {success && <p className="success-message">Registration Successful! Redirecting...</p>}
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>

      {/* Switch Panel */}
      <div className="switch-container">
        <h2 className="switch__title">{isLogin ? "Hello Friend!" : "Welcome Back!"}</h2>
        <p className="switch__description">
          {isLogin
            ? "Enter your personal details and start your journey with us"
            : "To keep connected with us please login with your personal info"}
        </p>
        <button className="switch__button" onClick={toggleForm}>
          {isLogin ? "SIGN UP" : "SIGN IN"}
        </button>
      </div>
    </div>
  );
};

export default LoginRegister;
