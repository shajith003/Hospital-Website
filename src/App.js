import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginRegister from "./login";
import Dashboard from "./dashboard";  
import BookAppointment from "./pages/BookAppointment"; 
import MyAppointments from "./pages/MyAppointments"; 
import Doctors from "./pages/Doctors";
import Reports from "./pages/reports"; 
import LoadingScreen from "./LoadingScreen"; 
import "./App.css";
import logo from "./assets/logo.png"; 
import StaffLogin from "./pages/StaffLogin"; 
import StaffDashboard from "./pages/StaffDashboard"; 
import StaffAppointments from "./pages/StaffAppointments"; 
import AddReport from "./pages/AddReport"; 
import ViewReports from "./pages/ViewReports";
import Preports from "./pages/Preports";
import HomePage from "./pages/HomePage"; // New HomePage component

const App = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <Router>
      <div className="app-container">
        {/* HEADER */}
        <header className="header">
          <div className="logo-container">
            <img src={logo} alt="SereneCare Logo" className="logo-img" />
            <h1 className="logo-text">SereneCare Clinics</h1>
          </div>
          <nav className="nav-container">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/doctors" className="nav-link">Doctors</Link>
            <Link to="/login" className="nav-link">Login/Register</Link>
            <Link to="/staff-login" className="nav-link">Staff Login</Link> 
          </nav>
        </header>

        {/* MAIN CONTENT */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Default Home Page */}
            <Route path="/home" element={<HomePage />} /> {/* Home Page */}
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/login" element={<LoginRegister />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/my-appointments" element={<MyAppointments />} />
            <Route path="/reports" element={<Reports />} /> 
            <Route path="/staff-login" element={<StaffLogin />} />
            <Route path="/staff-dashboard" element={<StaffDashboard />} />
            <Route path="/staff-appointments" element={<StaffAppointments />} />
            <Route path="/add-report" element={<AddReport />} />  
            <Route path="/view-reports" element={<ViewReports />} />  
            <Route path="/preports" element={<Preports />} />  
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
