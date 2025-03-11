import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  // Redirect to login if no user is logged in
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  // Check if the logged-in user is a staff or patient
  if (user?.role === "staff") {
    return (
      <div className="dashboard-wrapper">
        <h1 className="dashboard-welcome">Welcome, {user?.name}!</h1>
        <div className="dashboard-buttons">
          <button className="btn btn-book" onClick={() => navigate("/staff-appointments")}>
            Manage Appointments
          </button>
          <button className="btn btn-reports" onClick={() => navigate("/staff-view-reports")}>
            View All Reports
          </button>
          <button className="btn btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    );
  }

  // Default render for patients
  return (
    <div className="dashboard-wrapper">
      <h1 className="dashboard-welcome">Welcome, {user?.name}!</h1>

      <div className="dashboard-buttons">
        <button className="btn btn-book" onClick={() => navigate("/book-appointment")}>
          Book Appointment
        </button>
        <button className="btn btn-appointments" onClick={() => navigate("/my-appointments")}>
          My Appointments
        </button>
        <button className="btn btn-view-reports" onClick={() => navigate("/preports")}>
          View Reports
        </button>
        <button className="btn btn-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
