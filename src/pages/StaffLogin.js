import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./stafflogin.css";

const StaffLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Toggle between login and register forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError("");
    setSuccess(false);
    setName("");
    setEmail("");
    setPassword("");
  };

  // Handle staff registration
  const handleRegister = (e) => {
    e.preventDefault();
    if (name && email && password) {
      // Get existing staff list or initialize an empty array
      let existingStaff = JSON.parse(localStorage.getItem("staff")) || [];

      // Check if staff already exists
      if (existingStaff.some((staff) => staff.email === email)) {
        setError("Staff already exists! Please login.");
        return;
      }

      // Create a new staff object with role
      const newStaff = { name, email, password, role: "staff" };

      // Save the new staff member
      existingStaff.push(newStaff);
      localStorage.setItem("staff", JSON.stringify(existingStaff));

      setSuccess(true);
      setTimeout(() => {
        setIsLogin(true);
        setSuccess(false);
      }, 2000);
    } else {
      setError("All fields are required!");
    }
  };

  // Handle staff login
  const handleLogin = (e) => {
    e.preventDefault();
    const storedStaff = JSON.parse(localStorage.getItem("staff")) || [];

    // Find staff with matching email and password
    const staffUser = storedStaff.find(
      (staff) => staff.email === email && staff.password === password
    );

    if (staffUser) {
      // Store logged-in staff session
      localStorage.setItem("staffLoggedIn", JSON.stringify(staffUser));
      navigate("/staff-dashboard");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className={`container ${isLogin ? "login-mode" : "register-mode"}`}>
      {/* Login Form */}
      <div className="form-container login">
        <form className="form" onSubmit={handleLogin}>
          <h2 className="form_title">Sign in as Staff</h2>
          <span className="form__span">Use your staff email account</span>
          <input
            className="form__input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="form__input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a className="form__link" href="#">Forgot your password?</a>
          <button className="form__button" type="submit">SIGN IN</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>

      {/* Register Form */}
      <div className="form-container register">
        <form className="form" onSubmit={handleRegister}>
          <h2 className="form_title">Create Staff Account</h2>
          <span className="form__span">Use email for registration</span>
          <input
            className="form__input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="form__input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="form__input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="form__button" type="submit">SIGN UP</button>
          {success && <p className="success-message">Registration Successful! Redirecting...</p>}
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>

      {/* Switch Panel (Blue Background) */}
      <div className="switch-container">
        <h2 className="switch__title">{isLogin ? "Hello Staff!" : "Welcome Back!"}</h2>
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

export default StaffLogin;
